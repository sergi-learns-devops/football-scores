import React, { useState, useEffect } from 'react';
import DateNavigator from '../components/DateNavigator';
import LeagueGroup from '../components/LeagueGroup';
import { getMatchesByDate, getLeagues } from '../services/footballService';

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [groupedMatches, setGroupedMatches] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Simulate API delay
        setTimeout(() => {
            const matches = getMatchesByDate(selectedDate);
            const leagues = getLeagues();

            const grouped = {};

            // Initialize groups for all leagues to ensure order
            leagues.forEach(league => {
                grouped[league.id] = {
                    league,
                    matches: []
                };
            });

            // Distribute matches
            matches.forEach(match => {
                if (grouped[match.leagueId]) {
                    grouped[match.leagueId].matches.push(match);
                }
            });

            // Filter out empty leagues
            const filteredGrouped = Object.values(grouped).filter(group => group.matches.length > 0);

            setGroupedMatches(filteredGrouped);
            setLoading(false);
        }, 300);
    }, [selectedDate]);

    return (
        <div>
            <DateNavigator selectedDate={selectedDate} onDateChange={setSelectedDate} />

            {loading ? (
                <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
            ) : (
                <div className="space-y-2">
                    {groupedMatches.length > 0 ? (
                        groupedMatches.map(group => (
                            <LeagueGroup
                                key={group.league.id}
                                league={group.league}
                                matches={group.matches}
                            />
                        ))
                    ) : (
                        <div className="text-center py-12 text-muted">
                            <p className="text-lg">No matches scheduled for this date.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
