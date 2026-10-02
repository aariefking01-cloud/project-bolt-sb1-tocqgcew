import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${center ? '' : ''}`}
    >
      {eyebrow && (
        <div
          className={`text-xs font-display font-medium uppercase tracking-[0.3em] mb-4 ${
            light ? 'text-gold-400' : 'text-gold-400'
          }`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight ${
          light ? 'text-ink-50' : 'text-ink-50'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            light ? 'text-ink-200' : 'text-ink-300'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
