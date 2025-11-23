import React, { useState, useEffect } from 'react';
import DateNavigator from '../components/DateNavigator';
import LeagueGroup from '../components/LeagueGroup';
import { getMatchesByDate } from '../services/footballService';

const Home = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [groupedMatches, setGroupedMatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatches = async () => {
            setLoading(true);
            setError(null);
            setGroupedMatches([]);

            try {
                const fetchedMatches = await getMatchesByDate(selectedDate);

                // Group matches by league
                const grouped = fetchedMatches.reduce((acc, match) => {
                    if (!acc[match.leagueId]) {
                        acc[match.leagueId] = {
                            id: match.leagueId,
                            name: match.leagueName,
                            logo: match.leagueLogo,
                            matches: []
                        };
                    }
                    acc[match.leagueId].matches.push(match);
                    return acc;
                }, {});

                // Convert grouped object to array and filter out empty groups
                const filteredGrouped = Object.values(grouped).filter(group => group.matches.length > 0);
                setGroupedMatches(filteredGrouped);

            } catch (err) {
                console.error("Failed to fetch matches:", err);
                setError("Failed to load matches. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchMatches();
    }, [selectedDate]);

    return (
        <div>
            <DateNavigator selectedDate={selectedDate} onDateChange={setSelectedDate} />

            {loading && (
                <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            )}

            {error && (
                <div className="text-center py-12 text-red-500">
                    <p className="text-lg">{error}</p>
                </div>
            )}

            {!loading && !error && (
                <div className="space-y-2">
                    {groupedMatches.length > 0 ? (
                        groupedMatches.map(group => (
                            <LeagueGroup
                                key={group.id}
                                league={group}
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
