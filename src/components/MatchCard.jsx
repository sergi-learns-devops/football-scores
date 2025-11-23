
import React from 'react';
import { Tv, Clock } from 'lucide-react';

const MatchCard = ({ match }) => {
    const { homeScore, awayScore, time, status, channel, minute } = match;

    const isLive = status === 'LIVE';
    const isFinished = status === 'FINISHED';
    const isScheduled = status === 'SCHEDULED';

    return (
        <div className="bg-card border border-border rounded-lg p-4 hover:bg-accent/50 transition flex items-center justify-between group">
            {/* Teams and Score */}
            <div className="flex-1 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                {/* Home Team */}
                <div className="flex items-center justify-end gap-3">
                    <span className="font-medium text-right hidden sm:block">{match.homeTeam.name}</span>
                    <span className="font-medium text-right sm:hidden">{match.homeTeam.name.substring(0, 3).toUpperCase()}</span>
                    <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                </div>

                {/* Score / Time */}
                <div className="flex flex-col items-center min-w-[80px]">
                    {match.status === 'FINISHED' || match.status === 'LIVE' ? (
                        <div className="text-2xl font-bold tracking-wider">
                            {match.homeTeam.score} - {match.awayTeam.score}
                        </div>
                    ) : (
                        <div className="text-xl font-bold text-muted">
                            {match.time}
                        </div>
                    )}
                    {isLive && (
                        <span className="text-xs font-bold text-red-500 animate-pulse mt-1">
                            {minute}'
                        </span>
                    )}
                    {isFinished && (
                        <span className="text-xs text-muted mt-1">FT</span>
                    )}
                </div>

                {/* Away Team */}
                <div className="flex items-center justify-start gap-3">
                    <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                    <span className="font-medium hidden sm:block">{match.awayTeam.name}</span>
                    <span className="font-medium sm:hidden">{match.awayTeam.name.substring(0, 3).toUpperCase()}</span>
                </div>
            </div>

            {/* TV Channel */}
            {channel && (
                <div className="hidden md:flex items-center gap-2 text-xs text-muted ml-6 border-l border-border pl-6 min-w-[120px]">
                    <Tv size={14} />
                    <span className="truncate max-w-[100px]" title={channel}>{channel}</span>
                </div>
            )}
        </div>
    );
};

export default MatchCard;
