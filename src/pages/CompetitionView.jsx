import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Trophy, User, ArrowUpRight } from 'lucide-react';
import { getLeagueById, getStandings, getTopScorers, getTopAssists } from '../services/footballService';

const CompetitionView = () => {
    const { id } = useParams();
    const [league, setLeague] = useState(null);
    const [activeTab, setActiveTab] = useState('standings');
    const [data, setData] = useState({ standings: [], scorers: [], assists: [] });

    useEffect(() => {
        const leagueData = getLeagueById(id);
        if (leagueData) {
            setLeague(leagueData);
            setData({
                standings: getStandings(id),
                scorers: getTopScorers(id),
                assists: getTopAssists(id)
            });
        }
    }, [id]);

    if (!league) return <div className="p-8 text-center">Competition not found</div>;

    return (
        <div>
            <Link to="/" className="inline-flex items-center text-muted hover:text-foreground mb-6 transition">
                <ChevronLeft size={20} />
                Back to Matches
            </Link>

            <div className="flex items-center gap-4 mb-8">
                <img src={league.logo} alt={league.name} className="w-16 h-16 object-contain bg-white/5 p-2 rounded-lg" />
                <div>
                    <h1 className="text-3xl font-bold">{league.name}</h1>
                    <p className="text-muted">{league.country}</p>
                </div>
            </div>

            <div className="flex gap-2 mb-6 border-b border-border overflow-x-auto">
                <TabButton
                    active={activeTab === 'standings'}
                    onClick={() => setActiveTab('standings')}
                    icon={<Trophy size={18} />}
                    label="Standings"
                />
                <TabButton
                    active={activeTab === 'scorers'}
                    onClick={() => setActiveTab('scorers')}
                    icon={<User size={18} />}
                    label="Top Scorers"
                />
                <TabButton
                    active={activeTab === 'assists'}
                    onClick={() => setActiveTab('assists')}
                    icon={<ArrowUpRight size={18} />}
                    label="Assists"
                />
            </div>

            <div className="bg-card border border-border rounded-lg overflow-hidden">
                {activeTab === 'standings' && <StandingsTable standings={data.standings} />}
                {activeTab === 'scorers' && <StatsList items={data.scorers} type="goals" />}
                {activeTab === 'assists' && <StatsList items={data.assists} type="assists" />}
            </div>
        </div>
    );
};

const TabButton = ({ active, onClick, icon, label }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-3 border-b-2 transition whitespace-nowrap ${active
                ? 'border-primary text-primary font-medium'
                : 'border-transparent text-muted hover:text-foreground hover:border-border'
            }`}
    >
        {icon}
        {label}
    </button>
);

const StandingsTable = ({ standings }) => {
    if (standings.length === 0) return <div className="p-8 text-center text-muted">No standings available</div>;

    return (
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
                <thead className="bg-accent/50 text-muted uppercase text-xs">
                    <tr>
                        <th className="px-4 py-3 w-12 text-center">#</th>
                        <th className="px-4 py-3">Team</th>
                        <th className="px-4 py-3 text-center">MP</th>
                        <th className="px-4 py-3 text-center">W</th>
                        <th className="px-4 py-3 text-center">D</th>
                        <th className="px-4 py-3 text-center">L</th>
                        <th className="px-4 py-3 text-center">GF</th>
                        <th className="px-4 py-3 text-center">GA</th>
                        <th className="px-4 py-3 text-center font-bold">Pts</th>
                    </tr>
                </thead>
                <tbody>
                    {standings.map((row) => (
                        <tr key={row.teamId} className="border-b border-border last:border-0 hover:bg-accent/30 transition">
                            <td className="px-4 py-3 text-center font-medium">{row.position}</td>
                            <td className="px-4 py-3 flex items-center gap-3">
                                <img src={row.team.logo} alt={row.team.name} className="w-6 h-6 object-contain" />
                                <span className="font-medium">{row.team.name}</span>
                            </td>
                            <td className="px-4 py-3 text-center">{row.played}</td>
                            <td className="px-4 py-3 text-center">{row.won}</td>
                            <td className="px-4 py-3 text-center">{row.drawn}</td>
                            <td className="px-4 py-3 text-center">{row.lost}</td>
                            <td className="px-4 py-3 text-center">{row.gf}</td>
                            <td className="px-4 py-3 text-center">{row.ga}</td>
                            <td className="px-4 py-3 text-center font-bold text-primary">{row.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const StatsList = ({ items, type }) => {
    if (items.length === 0) return <div className="p-8 text-center text-muted">No stats available</div>;

    return (
        <div className="divide-y divide-border">
            {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 hover:bg-accent/30 transition">
                    <div className="flex items-center gap-4">
                        <span className="text-muted font-mono w-6 text-center">{item.rank}</span>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted">
                                <User size={20} />
                            </div>
                            <div>
                                <p className="font-medium">{item.player}</p>
                                <div className="flex items-center gap-1 text-xs text-muted">
                                    <img src={item.team.logo} alt={item.team.name} className="w-4 h-4 object-contain" />
                                    <span>{item.team.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-xl font-bold text-primary">
                        {item[type]} <span className="text-xs font-normal text-muted uppercase">{type}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CompetitionView;
