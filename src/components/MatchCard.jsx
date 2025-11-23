import React from 'react';
import { Tv } from 'lucide-react';

const MatchCard = ({ match }) => {
    const { homeTeamData, awayTeamData, homeScore, awayScore, time, status, channel, minute } = match;

    const isLive = status === 'LIVE';
    const isFinished = status === 'FINISHED';
    const isScheduled = status === 'SCHEDULED';

    return (
        <div className="bg-card border border-border rounded-lg p-4 hover:bg-accent/50 transition flex items-center justify-between group">
            {/* Teams and Score */}
            <div className="flex-1 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                {/* Home Team */}
                <div className="flex items-center justify-end gap-3">
                    <span className="font-medium text-right hidden sm:block">{homeTeamData.name}</span>
                    <span className="font-medium text-right sm:hidden">{homeTeamData.name.substring(0, 3).toUpperCase()}</span>
                    <img src={homeTeamData.logo} alt={homeTeamData.name} className="w-8 h-8 object-contain" />
                </div>

                {/* Score / Time */}
                <div className="flex flex-col items-center min-w-[80px]">
                    {isScheduled ? (
                        <span className="text-xl font-bold font-mono">{time}</span>
                    ) : (
                        <div className="flex items-center gap-2">
                            <span className={`text-2xl font-bold font-mono ${isLive ? 'text-red-500' : ''}`}>
                                {homeScore}
                            </span>
                            <span className="text-muted">-</span>
                            <span className={`text-2xl font-bold font-mono ${isLive ? 'text-red-500' : ''}`}>
                                {awayScore}
                            </span>
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
                    <img src={awayTeamData.logo} alt={awayTeamData.name} className="w-8 h-8 object-contain" />
                    <span className="font-medium hidden sm:block">{awayTeamData.name}</span>
                    <span className="font-medium sm:hidden">{awayTeamData.name.substring(0, 3).toUpperCase()}</span>
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
