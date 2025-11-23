import { addDays, subDays, format } from 'date-fns';

export const LEAGUES = [
    { id: 'ESP', name: 'La Liga', country: 'Spain', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/LaLiga_logo_2023.svg/1200px-LaLiga_logo_2023.svg.png' },
    { id: 'ENG', name: 'Premier League', country: 'England', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png' },
    { id: 'ITA', name: 'Serie A', country: 'Italy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Serie_A_logo_2019.svg/1200px-Serie_A_logo_2019.svg.png' },
    { id: 'GER', name: 'Bundesliga', country: 'Germany', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Bundesliga_logo_%282017%29.svg/1200px-Bundesliga_logo_%282017%29.svg.png' },
    { id: 'FRA', name: 'Ligue 1', country: 'France', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ligue_1_Uber_Eats_logo.svg/1200px-Ligue_1_Uber_Eats_logo.svg.png' },
    { id: 'POR', name: 'Primeira Liga', country: 'Portugal', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Liga_Nos_logo.svg/1200px-Liga_Nos_logo.svg.png' },
    { id: 'UCL', name: 'UEFA Champions League', country: 'Europe', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/UEFA_Champions_League_logo_2.svg/1200px-UEFA_Champions_League_logo_2.svg.png' },
    { id: 'UEL', name: 'UEFA Europa League', country: 'Europe', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/03/UEFA_Europa_League_logo_2021.svg/1200px-UEFA_Europa_League_logo_2021.svg.png' },
    { id: 'UECL', name: 'UEFA Conference League', country: 'Europe', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7d/UEFA_Europa_Conference_League_logo_2021.svg/1200px-UEFA_Europa_Conference_League_logo_2021.svg.png' },
];

export const TEAMS = {
    'RMA': { name: 'Real Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png' },
    'FCB': { name: 'FC Barcelona', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_%28crest%29.svg/1200px-FC_Barcelona_%28crest%29.svg.png' },
    'ATM': { name: 'Atlético Madrid', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Atletico_Madrid_2017_logo.svg/1200px-Atletico_Madrid_2017_logo.svg.png' },
    'MCI': { name: 'Manchester City', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png' },
    'LIV': { name: 'Liverpool', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Liverpool_FC.svg/1200px-Liverpool_FC.svg.png' },
    'ARS': { name: 'Arsenal', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png' },
    'PSG': { name: 'Paris Saint-Germain', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png' },
    'BAY': { name: 'Bayern Munich', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1200px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png' },
    'INT': { name: 'Inter Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1200px-FC_Internazionale_Milano_2021.svg.png' },
    'MIL': { name: 'AC Milan', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/1200px-Logo_of_AC_Milan.svg.png' },
    'JUV': { name: 'Juventus', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Juventus_FC_2017_icon_%28black%29.svg/1200px-Juventus_FC_2017_icon_%28black%29.svg.png' },
    'BEN': { name: 'Benfica', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png' },
    'POR': { name: 'FC Porto', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f1/FC_Porto.svg/1200px-FC_Porto.svg.png' },
    'DOR': { name: 'Borussia Dortmund', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Borussia_Dortmund_logo.svg/1200px-Borussia_Dortmund_logo.svg.png' },
};

const generateMatches = () => {
    const matches = [];
    const today = new Date();

    // Yesterday Results
    matches.push({
        id: 'm1', leagueId: 'ESP', date: format(subDays(today, 1), 'yyyy-MM-dd'), time: '21:00',
        homeTeam: 'RMA', awayTeam: 'ATM', status: 'FINISHED', homeScore: 2, awayScore: 1, channel: 'DAZN'
    });
    matches.push({
        id: 'm2', leagueId: 'ENG', date: format(subDays(today, 1), 'yyyy-MM-dd'), time: '20:45',
        homeTeam: 'MCI', awayTeam: 'LIV', status: 'FINISHED', homeScore: 1, awayScore: 1, channel: 'Sky Sports'
    });

    // Today Matches
    matches.push({
        id: 'm3', leagueId: 'ESP', date: format(today, 'yyyy-MM-dd'), time: '21:00',
        homeTeam: 'FCB', awayTeam: 'RMA', status: 'SCHEDULED', channel: 'Movistar+'
    });
    matches.push({
        id: 'm4', leagueId: 'ENG', date: format(today, 'yyyy-MM-dd'), time: '18:30',
        homeTeam: 'ARS', awayTeam: 'MCI', status: 'LIVE', homeScore: 1, awayScore: 0, minute: 34, channel: 'DAZN'
    });
    matches.push({
        id: 'm5', leagueId: 'ITA', date: format(today, 'yyyy-MM-dd'), time: '20:45',
        homeTeam: 'JUV', awayTeam: 'MIL', status: 'SCHEDULED', channel: 'BeIN Sports'
    });

    // Future Matches
    matches.push({
        id: 'm6', leagueId: 'UCL', date: format(addDays(today, 2), 'yyyy-MM-dd'), time: '21:00',
        homeTeam: 'PSG', awayTeam: 'BAY', status: 'SCHEDULED', channel: 'Movistar Liga de Campeones'
    });
    matches.push({
        id: 'm7', leagueId: 'UCL', date: format(addDays(today, 2), 'yyyy-MM-dd'), time: '21:00',
        homeTeam: 'RMA', awayTeam: 'MCI', status: 'SCHEDULED', channel: 'Movistar Liga de Campeones'
    });

    return matches;
};

export const MATCHES = generateMatches();

export const STANDINGS = {
    'ESP': [
        { position: 1, teamId: 'RMA', played: 20, won: 16, drawn: 3, lost: 1, points: 51, gf: 45, ga: 12 },
        { position: 2, teamId: 'FCB', played: 20, won: 14, drawn: 4, lost: 2, points: 46, gf: 40, ga: 18 },
        { position: 3, teamId: 'ATM', played: 20, won: 13, drawn: 3, lost: 4, points: 42, gf: 38, ga: 20 },
    ],
    'ENG': [
        { position: 1, teamId: 'LIV', played: 21, won: 15, drawn: 4, lost: 2, points: 49, gf: 48, ga: 18 },
        { position: 2, teamId: 'MCI', played: 20, won: 14, drawn: 3, lost: 3, points: 45, gf: 50, ga: 22 },
        { position: 3, teamId: 'ARS', played: 21, won: 13, drawn: 5, lost: 3, points: 44, gf: 42, ga: 20 },
    ]
};

export const SCORERS = {
    'ESP': [
        { rank: 1, player: 'Jude Bellingham', teamId: 'RMA', goals: 14 },
        { rank: 2, player: 'Robert Lewandowski', teamId: 'FCB', goals: 12 },
    ],
    'ENG': [
        { rank: 1, player: 'Erling Haaland', teamId: 'MCI', goals: 18 },
        { rank: 2, player: 'Mohamed Salah', teamId: 'LIV', goals: 14 },
    ]
};

export const ASSISTS = {
    'ESP': [
        { rank: 1, player: 'Toni Kroos', teamId: 'RMA', assists: 8 },
        { rank: 2, player: 'Ilkay Gündogan', teamId: 'FCB', assists: 7 },
    ],
    'ENG': [
        { rank: 1, player: 'Kevin De Bruyne', teamId: 'MCI', assists: 10 },
        { rank: 2, player: 'Bukayo Saka', teamId: 'ARS', assists: 9 },
    ]
};
