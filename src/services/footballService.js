import { format } from 'date-fns';

const API_BASE_URL = 'https://site.api.espn.com/apis/site/v2/sports/soccer';

const LEAGUE_ENDPOINTS = [
    { id: 'ESP', code: 'esp.1', name: 'La Liga', country: 'Spain' },
    { id: 'ENG', code: 'eng.1', name: 'Premier League', country: 'England' },
    { id: 'ITA', code: 'ita.1', name: 'Serie A', country: 'Italy' },
    { id: 'GER', code: 'ger.1', name: 'Bundesliga', country: 'Germany' },
    { id: 'FRA', code: 'fra.1', name: 'Ligue 1', country: 'France' },
    { id: 'POR', code: 'por.1', name: 'Primeira Liga', country: 'Portugal' },
    { id: 'UCL', code: 'uefa.champions', name: 'UEFA Champions League', country: 'Europe' },
    { id: 'UEL', code: 'uefa.europa', name: 'UEFA Europa League', country: 'Europe' },
    { id: 'UECL', code: 'uefa.conference', name: 'UEFA Conference League', country: 'Europe' },
];

export const getLeagues = () => {
    // Return static league info for the UI filters/headers if needed, 
    // but mostly we will get this from the API responses.
    return LEAGUE_ENDPOINTS.map(l => ({
        id: l.id,
        name: l.name,
        country: l.country,
        logo: '' // We might need to fetch or hardcode these if the API doesn't return a league logo in the scoreboard
    }));
};

export const getLeagueById = (id) => {
    const league = LEAGUE_ENDPOINTS.find(l => l.id === id);
    if (!league) return null;
    return {
        id: league.id,
        name: league.name,
        country: league.country,
        logo: '' // Placeholder
    };
};

const fetchLeagueMatches = async (league, dateStr) => {
    try {
        const response = await fetch(`${API_BASE_URL}/${league.code}/scoreboard?dates=${dateStr.replace(/-/g, '')}`);
        if (!response.ok) return [];
        const data = await response.json();

        return (data.events || []).map(event => {
            const competition = event.competitions[0];
            const homeTeam = competition.competitors.find(c => c.homeAway === 'home');
            const awayTeam = competition.competitors.find(c => c.homeAway === 'away');

            // Determine status
            let status = 'SCHEDULED';
            const state = event.status.type.state;
            if (state === 'in') status = 'LIVE';
            if (state === 'post') status = 'FINISHED';

            // Format time
            const matchDate = new Date(event.date);
            const time = format(matchDate, 'HH:mm');

            return {
                id: event.id,
                leagueId: league.id,
                leagueName: league.name,
                leagueLogo: data.leagues[0]?.logos?.[0]?.href || '',
                date: dateStr,
                time: time,
                timestamp: matchDate.getTime(), // For sorting
                status: status,
                minute: event.status.displayClock,
                homeTeam: {
                    id: homeTeam.team.id,
                    name: homeTeam.team.shortDisplayName || homeTeam.team.name,
                    logo: homeTeam.team.logo,
                    score: parseInt(homeTeam.score) || 0
                },
                awayTeam: {
                    id: awayTeam.team.id,
                    name: awayTeam.team.shortDisplayName || awayTeam.team.name,
                    logo: awayTeam.team.logo,
                    score: parseInt(awayTeam.score) || 0
                },
                channel: competition.broadcasts?.[0]?.names?.[0] || null
            };
        });
    } catch (error) {
        console.error(`Error fetching ${league.name}:`, error);
        return [];
    }
};

export const getMatchesByDate = async (date) => {
    const dateStr = typeof date === 'string' ? date : format(date, 'yyyy-MM-dd');

    const promises = LEAGUE_ENDPOINTS.map(league => fetchLeagueMatches(league, dateStr));
    const results = await Promise.all(promises);

    // Flatten the array of arrays
    return results.flat().sort((a, b) => a.timestamp - b.timestamp);
};

// Standings, Scorers, Assists - We might need separate endpoints for these
// For now, we will return empty or implement them if the user requests specific competition details again.
// The ESPN API has specific endpoints for standings/stats: .../soccer/eng.1/standings
export const getStandings = async (leagueId) => {
    // TODO: Implement real standings fetch
    return [];
};

export const getTopScorers = async (leagueId) => {
    // TODO: Implement real scorers fetch
    return [];
};

export const getTopAssists = async (leagueId) => {
    // TODO: Implement real assists fetch
    return [];
};
