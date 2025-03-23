
import React from 'react';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, fullWidth = false, ...props }, ref) => {
    return (
      <button
        className={cn(
          // Base styles
          'relative inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden',
          
          // Variant styles
          variant === 'primary' && 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary/70',
          variant === 'secondary' && 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/70',
          variant === 'outline' && 'border border-primary bg-transparent text-primary hover:bg-primary/5 focus:ring-primary/20',
          variant === 'ghost' && 'bg-transparent text-primary hover:bg-primary/5 focus:ring-primary/20',
          
          // Size styles
          size === 'sm' && 'text-xs px-3 py-1.5',
          size === 'md' && 'text-sm px-4 py-2',
          size === 'lg' && 'text-base px-6 py-3',
          
          // Full width
          fullWidth && 'w-full',
          
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 blur-xl"></span>
      </button>
    );
  }
);

CustomButton.displayName = 'CustomButton';

export default CustomButton;
