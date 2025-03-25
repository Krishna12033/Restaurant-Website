
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { SpecialOffer } from '@/data/weeklySpecials';

interface SpecialOfferCardProps {
  special: SpecialOffer;
  isToday: boolean;
  animating: boolean;
  onReserveClick: () => void;
}

const SpecialOfferCard = ({ 
  special, 
  isToday, 
  animating, 
  onReserveClick 
}: SpecialOfferCardProps) => {
  return (
    <div 
      className={cn(
        "mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl transition-opacity duration-300 dark:bg-zinc-900",
        animating ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="grid md:grid-cols-2">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
          <img 
            src={special.image} 
            alt={special.name}
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute right-4 top-4 rotate-12 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground shadow-lg">
            {special.discount}
          </div>
          {isToday && (
            <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
              Today's Special
            </div>
          )}
        </div>
        
        <div className="flex flex-col justify-center p-8">
          <h3 className="font-serif text-3xl font-bold">{special.name}</h3>
          <p className="mt-6 text-lg text-muted-foreground">{special.description}</p>
          
          <div className="mt-8 flex items-center gap-6">
            <div>
              <span className="text-sm text-muted-foreground">Regular price</span>
              <p className="font-serif text-2xl font-bold text-primary">{special.price}</p>
            </div>
            
            <button 
              onClick={onReserveClick}
              className="group flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
            >
              Reserve Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            * Available only on {special.day}s. Reservations recommended.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialOfferCard;
