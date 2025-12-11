
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  scale?: boolean;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up',
  scale = false
}) => {
  // Fix: Added rootMargin to satisfy the hook's requirement for a complete options object
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15, rootMargin: '0px' });

  const getTransform = () => {
    if (!isVisible) {
      const scaleStr = scale ? 'scale-95' : '';
      switch(direction) {
        case 'up': return `translate-y-12 opacity-0 ${scaleStr}`;
        case 'down': return `-translate-y-12 opacity-0 ${scaleStr}`;
        case 'left': return `-translate-x-12 opacity-0 ${scaleStr}`;
        case 'right': return `translate-x-12 opacity-0 ${scaleStr}`;
        case 'none': return `opacity-0 ${scaleStr}`;
        default: return `translate-y-12 opacity-0 ${scaleStr}`;
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100 scale-100';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
