
import React from 'react';
import AnimatedImage from '../ui/AnimatedImage';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-zinc-950">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block rounded-full bg-primary/5 px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary dark:bg-primary/10">
            Our Story
          </span>
          <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
            Passion for Exceptional Food
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          <div className="relative order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <AnimatedImage
                src="https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=1974&auto=format&fit=crop"
                alt="Chef preparing food"
                className="rounded-lg shadow-md"
                aspectRatio="portrait"
                animation="fade-up"
                delay={200}
              />
              <AnimatedImage
                src="https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop"
                alt="Restaurant interior"
                className="mt-8 rounded-lg shadow-md"
                aspectRatio="portrait"
                animation="fade-up"
                delay={400}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-lg bg-primary/5 dark:bg-primary/10"></div>
          </div>
          
          <div className="order-1 flex flex-col justify-center md:order-2">
            <h3 className="font-serif text-2xl font-semibold tracking-tight">
              A Culinary Journey Since 2010
            </h3>
            <p className="mt-4 text-muted-foreground">
              Founded by Chef Michael Anderson with a vision to create a dining experience that celebrates the art of fine cuisine while maintaining a warm, inviting atmosphere.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-primary" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium">Locally Sourced Ingredients</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    We partner with local farmers to bring you the freshest seasonal ingredients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-primary" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M7 20h10"></path>
                    <path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
                    <path d="M9.5 7.5c1.5-1-1-1.5-.5-3.5"></path>
                    <path d="M14 7.5a3.73 3.73 0 0 0-3.5-4 3.77 3.77 0 0 0-4 4"></path>
                    <path d="M14.5 4c-.5 2 .5 2.5 2 3"></path>
                    <path d="M16 10.5c.5.5 2.5.5 3 1.5-2 1.5-3 1-4.5 2.5"></path>
                    <path d="M8.5 12c-.5 1-1 2.5-3 2.5"></path>
                    <path d="M11.5 19c0-3.5-.5-6-2.5-8.5"></path>
                    <path d="M12.5 13c1.5 4.5 1.5 7 0 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium">Artisanal Approach</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Every dish is crafted with care, blending traditional techniques with modern creativity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-primary" 
                    width="24" height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <line x1="10" y1="9" x2="8" y2="9"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-medium">Seasonal Menus</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Our menu evolves with the seasons, highlighting the best flavors each time of year has to offer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
