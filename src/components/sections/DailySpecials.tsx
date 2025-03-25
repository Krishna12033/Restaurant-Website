
import React, { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import ReservationModal from '../ui/ReservationModal';
import { weeklySpecials } from '@/data/weeklySpecials';
import DaySelector from '../specials/DaySelector';
import SpecialOfferCard from '../specials/SpecialOfferCard';
import SpecialsHeader from '../specials/SpecialsHeader';

const DailySpecials = () => {
  const [currentDay, setCurrentDay] = useState<string>('');
  const [activeSpecial, setActiveSpecial] = useState(weeklySpecials[0]);
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
      const newSpecial = weeklySpecials.find(special => special.day === day) || weeklySpecials[0];
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

  return (
    <section id="specials" className="relative overflow-hidden bg-gradient-to-r from-primary/5 to-primary/10 py-16 dark:from-primary/10 dark:to-primary/20">
      <div className="absolute inset-0 bg-texture opacity-5"></div>
      
      <div className="container-custom">
        <SpecialsHeader />
        
        <DaySelector 
          specials={weeklySpecials} 
          activeDay={activeSpecial.day} 
          onDayClick={handleDayClick} 
          animating={animating} 
        />
        
        <SpecialOfferCard 
          special={activeSpecial} 
          isToday={currentDay === activeSpecial.day}
          animating={animating}
          onReserveClick={handleReserveClick}
        />
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
