import { LEAGUES, MATCHES, STANDINGS, SCORERS, ASSISTS, TEAMS } from './mockData';
import { isSameDay, parseISO } from 'date-fns';

export const getLeagues = () => {
    return LEAGUES;
};

export const getMatchesByDate = (date) => {
    const dateStr = typeof date === 'string' ? date : date.toISOString().split('T')[0];
    return MATCHES.filter(match => match.date === dateStr).map(enrichMatchData);
};

export const getLeagueById = (id) => {
    return LEAGUES.find(l => l.id === id);
};

export const getStandings = (leagueId) => {
    const standings = STANDINGS[leagueId] || [];
    return standings.map(entry => ({
        ...entry,
        team: TEAMS[entry.teamId] || { name: 'Unknown', logo: '' }
    }));
};

export const getTopScorers = (leagueId) => {
    const scorers = SCORERS[leagueId] || [];
    return scorers.map(entry => ({
        ...entry,
        team: TEAMS[entry.teamId] || { name: 'Unknown', logo: '' }
    }));
};

export const getTopAssists = (leagueId) => {
    const assists = ASSISTS[leagueId] || [];
    return assists.map(entry => ({
        ...entry,
        team: TEAMS[entry.teamId] || { name: 'Unknown', logo: '' }
    }));
};

const enrichMatchData = (match) => {
    return {
        ...match,
        homeTeamData: TEAMS[match.homeTeam] || { name: match.homeTeam, logo: '' },
        awayTeamData: TEAMS[match.awayTeam] || { name: match.awayTeam, logo: '' },
        league: LEAGUES.find(l => l.id === match.leagueId)
    };
};
