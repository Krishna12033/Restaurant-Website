
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import ReservationModal from '../ui/ReservationModal';

interface SpecialOffer {
  day: string;
  name: string;
  description: string;
  price: string;
  discount: string;
  image: string;
}

const weeklySpecials: SpecialOffer[] = [
  {
    day: 'Monday',
    name: 'Mediterranean Mondays',
    description: 'Enjoy our chef\'s special Greek-inspired platter with complimentary wine',
    price: '$32',
    discount: '25% OFF',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop'
  },
  {
    day: 'Tuesday',
    name: 'Taco Tuesday Fiesta',
    description: 'Premium taco selection with handcrafted margaritas and live music',
    price: '$28',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&auto=format&fit=crop'
  },
  {
    day: 'Wednesday',
    name: 'Wine & Dine Wednesday',
    description: 'Chef\'s tasting menu with perfectly paired wines from our cellar',
    price: '$45',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1515778767554-195d1aef1bee?w=800&auto=format&fit=crop'
  },
  {
    day: 'Thursday',
    name: 'Steak Night Thursdays',
    description: 'Prime cuts perfectly aged and grilled to your preference',
    price: '$38',
    discount: '10% OFF',
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=800&auto=format&fit=crop'
  },
  {
    day: 'Friday',
    name: 'Seafood Extravaganza',
    description: 'Fresh-caught seafood and champagne pairings to start your weekend',
    price: '$42',
    discount: '15% OFF',
    image: 'https://images.unsplash.com/photo-1579631542614-5e61a0306f20?w=800&auto=format&fit=crop'
  },
  {
    day: 'Saturday',
    name: 'Chef\'s Special Surprise',
    description: 'A rotating surprise menu featuring rare and seasonal ingredients',
    price: '$49',
    discount: '10% OFF',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&auto=format&fit=crop'
  },
  {
    day: 'Sunday',
    name: 'Sunday Family Feast',
    description: 'Share our family-style platters with loved ones, including dessert',
    price: '$35/person',
    discount: '30% OFF',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop'
  }
];

const DailySpecials = () => {
  const [currentDay, setCurrentDay] = useState<string>('');
  const [activeSpecial, setActiveSpecial] = useState<SpecialOffer | null>(null);
  const [animating, setAnimating] = useState(false);
  const [showReservationModal, setShowReservationModal] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Get current day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[new Date().getDay()];
    setCurrentDay(today);
    
    // Set the active special to today's special
    const todaySpecial = weeklySpecials.find(special => special.day === today) || weeklySpecials[0];
    setActiveSpecial(todaySpecial);
  }, []);

  const handleDayClick = (day: string) => {
    if (animating) return;
    
    setAnimating(true);
    setTimeout(() => {
      const newSpecial = weeklySpecials.find(special => special.day === day) || null;
      setActiveSpecial(newSpecial);
      setAnimating(false);
    }, 300);
  };

  const handleReserveClick = () => {
    setShowReservationModal(true);
  };

  const handleCloseModal = () => {
    setShowReservationModal(false);
  };

  if (!activeSpecial) return null;

  return (
    <section id="specials" className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10 py-16 dark:from-primary/10 dark:to-primary/20">
      <div className="absolute inset-0 bg-texture opacity-5"></div>
      
      <div className="container-custom">
        <div className="mb-10 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary">
            Daily Specials
          </span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Today's Surprise Offers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Discover our exclusive daily specials, crafted with seasonal ingredients and special discounts.
          </p>
        </div>

        {/* Day selector */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {weeklySpecials.map((special) => (
            <button
              key={special.day}
              onClick={() => handleDayClick(special.day)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                special.day === activeSpecial.day
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-white/80 text-foreground hover:bg-primary/10 dark:bg-zinc-800/80 dark:hover:bg-primary/20"
              )}
            >
              {special.day}
            </button>
          ))}
        </div>

        {/* Special offer card */}
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
                src={activeSpecial.image} 
                alt={activeSpecial.name}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute right-4 top-4 rotate-12 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground shadow-lg">
                {activeSpecial.discount}
              </div>
              {currentDay === activeSpecial.day && (
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                  Today's Special
                </div>
              )}
            </div>
            
            <div className="flex flex-col justify-center p-8">
              <h3 className="font-serif text-3xl font-bold">{activeSpecial.name}</h3>
              <p className="mt-6 text-lg text-muted-foreground">{activeSpecial.description}</p>
              
              <div className="mt-8 flex items-center gap-6">
                <div>
                  <span className="text-sm text-muted-foreground">Regular price</span>
                  <p className="font-serif text-2xl font-bold text-primary">{activeSpecial.price}</p>
                </div>
                
                <button 
                  onClick={handleReserveClick}
                  className="group flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Reserve Now
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              
              <p className="mt-8 text-sm text-muted-foreground">
                * Available only on {activeSpecial.day}s. Reservations recommended.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {showReservationModal && (
        <ReservationModal 
          isOpen={showReservationModal} 
          onClose={handleCloseModal} 
          specialDay={activeSpecial.day}
          specialName={activeSpecial.name}
        />
      )}
    </section>
  );
};

export default DailySpecials;
