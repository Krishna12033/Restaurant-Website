
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  tag?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title, 
  subtitle, 
  tag = "Reservations" 
}) => {
  return (
    <div className="mb-12 text-center">
      <span className="mb-2 inline-block rounded-full bg-primary/5 px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary dark:bg-primary/10">
        {tag}
      </span>
      <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
