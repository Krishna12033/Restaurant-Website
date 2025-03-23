
import React from 'react';
import CustomButton from '../ui/Button';
import AnimatedImage from '../ui/AnimatedImage';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop"
            alt="Restaurant interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 flex h-screen items-center">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-6">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center text-white">
            <span className="mb-2 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-wider backdrop-blur-sm opacity-0 animate-fade-up stagger-animate-1">
              An Exquisite Dining Experience
            </span>
            <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl opacity-0 animate-fade-up stagger-animate-2">
              Discover Culinary <br />
              <span className="text-primary-foreground/80">Excellence</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 opacity-0 animate-fade-up stagger-animate-3">
              Experience the perfect harmony of flavors, ambiance, and service. Our passionate chefs craft each dish with precision and creativity, ensuring a memorable dining journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-animate-4">
              <CustomButton
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                Reserve a Table
              </CustomButton>
              <CustomButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Menu
              </CustomButton>
            </div>
          </div>

          {/* Right Column - Featured Dish */}
          <div className="hidden items-center justify-center md:flex">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-full border border-white/20"></div>
              <AnimatedImage
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1780&auto=format&fit=crop"
                alt="Featured dish"
                className="max-w-xs rounded-lg opacity-0 animate-fade-up stagger-animate-4"
                aspectRatio="square"
                animation="image-float"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center opacity-0 animate-fade-in stagger-animate-5">
        <span className="text-xs font-medium text-white/60">Scroll Down</span>
        <div className="mt-2 h-12 w-0.5 overflow-hidden">
          <div className="h-full w-full animate-[scroll_1.5s_ease-in-out_infinite] bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
