
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'auto' | 'square' | 'video' | 'portrait';
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  animation?: 'fade-in' | 'fade-up' | 'fade-down' | 'image-float' | 'none';
  delay?: number;
}

const AnimatedImage = ({
  src,
  alt,
  className,
  aspectRatio = 'auto',
  priority = false,
  loading = 'lazy',
  animation = 'fade-in',
  delay = 0,
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const aspectRatioClasses = {
    auto: '',
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
  };

  const animationClasses = {
    'fade-in': 'animate-fade-in opacity-0',
    'fade-up': 'animate-fade-up opacity-0',
    'fade-down': 'animate-fade-down opacity-0',
    'image-float': 'animate-image-float',
    'none': '',
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-md bg-secondary/30',
        aspectRatioClasses[aspectRatio],
        className
      )}
    >
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary/20">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      )}
      {isVisible && (
        <img
          src={src}
          alt={alt}
          className={cn(
            'h-full w-full object-cover transition-all duration-700',
            animation !== 'none' && animationClasses[animation],
            isLoaded ? 'scale-100' : 'scale-105',
            delay > 0 && { 'animation-delay': `${delay}ms` }
          )}
          style={{
            animationDelay: delay > 0 ? `${delay}ms` : undefined,
            animationFillMode: 'forwards',
          }}
          loading={priority ? 'eager' : loading}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default AnimatedImage;
