import PuduvaiLogoSvg from '@/components/ui/PuduvaiLogoSvg';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export default function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const pixelSizes = {
    sm: 36,
    md: 46,
    lg: 58,
    xl: 72,
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <div className="relative flex-shrink-0 transition-transform duration-300 hover:scale-105">
        <PuduvaiLogoSvg size={pixelSizes[size]} />
      </div>
      {showText && (
        <div className="text-left leading-none">
          <div className="font-display font-extrabold text-base sm:text-lg tracking-wider text-ink-50">
            PUDUVAI
          </div>
          <div className="font-display font-bold text-[9px] sm:text-[10px] tracking-[0.32em] text-gold-400">
            BOUNCERS
          </div>
        </div>
      )}
    </div>
  );
}
