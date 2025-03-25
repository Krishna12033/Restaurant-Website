
import React from 'react';
import { cn } from '@/lib/utils';
import { SpecialOffer } from '@/data/weeklySpecials';

interface DaySelectorProps {
  specials: SpecialOffer[];
  activeDay: string;
  onDayClick: (day: string) => void;
  animating: boolean;
}

const DaySelector = ({ specials, activeDay, onDayClick, animating }: DaySelectorProps) => {
  return (
    <div className="mb-8 flex flex-wrap justify-center gap-2">
      {specials.map((special) => (
        <button
          key={special.day}
          onClick={() => onDayClick(special.day)}
          disabled={animating}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
            special.day === activeDay
              ? "bg-primary text-primary-foreground shadow-md"
              : "bg-white/80 text-foreground hover:bg-primary/10 dark:bg-zinc-800/80 dark:hover:bg-primary/20"
          )}
        >
          {special.day}
        </button>
      ))}
    </div>
  );
};

export default DaySelector;
