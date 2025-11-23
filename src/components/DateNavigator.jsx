import React from 'react';
import { format, addDays, subDays, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

const DateNavigator = ({ selectedDate, onDateChange }) => {
    const today = new Date();

    const handlePrevDay = () => {
        onDateChange(subDays(selectedDate, 1));
    };

    const handleNextDay = () => {
        onDateChange(addDays(selectedDate, 1));
    };

    const isToday = isSameDay(selectedDate, today);

    return (
        <div className="flex items-center justify-between bg-card rounded-lg p-4 mb-6 border border-border shadow-sm">
            <button
                onClick={handlePrevDay}
                className="p-2 hover:bg-accent rounded-full transition text-muted hover:text-foreground"
                aria-label="Previous day"
            >
                <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span className="font-bold text-lg capitalize">
                    {isToday ? 'Today, ' : ''}
                    {format(selectedDate, 'EEEE d MMMM')}
                </span>
            </div>

            <button
                onClick={handleNextDay}
                className="p-2 hover:bg-accent rounded-full transition text-muted hover:text-foreground"
                aria-label="Next day"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
};

export default DateNavigator;
