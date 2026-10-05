import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-xs font-display font-semibold tracking-[0.25em] uppercase text-gold-400 mb-3 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-ink-50 tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
