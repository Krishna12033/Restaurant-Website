
import React from 'react';

const SpecialsHeader = () => {
  return (
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
  );
};

export default SpecialsHeader;
