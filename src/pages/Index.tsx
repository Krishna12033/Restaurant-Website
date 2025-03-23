
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import AboutSection from '@/components/sections/About';
import DailySpecials from '@/components/sections/DailySpecials';
import MenuSection from '@/components/sections/Menu';
import ContactSection from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll reveal effect to elements with the animate-fade-up class
    const scrollElements = document.querySelectorAll('.animate-fade-up');
    
    const elementInView = (el: Element, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add('opacity-0');
    };

    const hideScrollElement = (element: Element) => {
      element.classList.remove('opacity-0');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        } else {
          hideScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // Initialize on load
    
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DailySpecials />
        <AboutSection />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
