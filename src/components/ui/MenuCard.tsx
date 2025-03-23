
import React from 'react';
import { cn } from '@/lib/utils';

interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  image?: string;
  className?: string;
  featured?: boolean;
}

const MenuCard = ({
  title,
  description,
  price,
  image,
  className,
  featured = false,
}: MenuCardProps) => {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg transition-all duration-300',
        featured ? 'bg-white shadow-lg dark:bg-zinc-900' : 'bg-white/50 hover:bg-white/80 dark:bg-zinc-900/50 dark:hover:bg-zinc-900/80',
        'border border-border/40 backdrop-blur-sm hover:shadow-md',
        className
      )}
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="font-serif text-lg font-medium text-foreground">{title}</h3>
          <span className="ml-2 font-serif text-lg font-semibold text-primary">{price}</span>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>
      {featured && (
        <div className="absolute left-0 top-0 bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
          Featured
        </div>
      )}
    </div>
  );
};

export default MenuCard;
