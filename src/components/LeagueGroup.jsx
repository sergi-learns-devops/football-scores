import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import MatchCard from './MatchCard';

const LeagueGroup = ({ league, matches }) => {
    return (
        <div className="mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <Link
                to={`/competition/${league.id}`}
                className="flex items-center gap-3 mb-3 group cursor-pointer hover:opacity-80 transition"
            >
                <img src={league.logo} alt={league.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                <h2 className="text-lg font-bold flex items-center gap-2">
                    {league.name}
                    <span className="text-xs font-normal text-muted bg-accent/50 px-2 py-0.5 rounded">
                        {league.country}
                    </span>
                </h2>
                <ChevronRight size={16} className="text-muted group-hover:translate-x-1 transition" />
            </Link>

            <div className="flex flex-col gap-2">
                {matches.map(match => (
                    <MatchCard key={match.id} match={match} />
                ))}
            </div>
        </div>
    );
};

export default LeagueGroup;
