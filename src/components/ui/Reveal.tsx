import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  className?: string;
  threshold?: number;
}

export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  threshold = 0.08,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>({ threshold });

  const directionClass = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    fade: 'reveal-fade',
    zoom: 'reveal-zoom',
  }[direction];

  return (
    <div
      ref={ref}
      className={`reveal ${directionClass} ${visible ? 'is-visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
