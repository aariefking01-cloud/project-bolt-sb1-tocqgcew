import { Phone, MessageCircle, CalendarCheck, ChevronDown } from 'lucide-react';
import {
  buildCallUrl,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_MESSAGE,
} from '@/lib/constants';

interface HeroProps {
  onBook: () => void;
}

export default function Hero({ onBook }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image copy 10.png"
          alt="Event security staff monitoring guests outside a nightclub"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/80 via-ink-950/70 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-transparent to-ink-950/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
        <div className="animate-fade-down">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-ink-900/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-display font-medium tracking-[0.2em] text-gold-300">
              AVAILABLE IN PUDUCHERRY
            </span>
          </div>
        </div>

        <h1 className="animate-fade-up font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-ink-50 max-w-5xl mx-auto">
          PROFESSIONAL BOUNCERS.
          <br />
          <span className="text-gradient-gold">CONFIDENT EVENTS.</span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl mx-auto text-base sm:text-lg text-ink-200 leading-relaxed"
          style={{ animationDelay: '0.15s' }}
        >
          Professional bouncer, event bouncer and VIP protection services for
          events, private functions, nightlife and special occasions in
          Puducherry.
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={onBook}
            className="btn-shine w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold text-sm uppercase tracking-wider rounded-md transition-all duration-300 shadow-xl shadow-gold-500/20 flex items-center justify-center gap-2"
          >
            <CalendarCheck className="w-5 h-5" strokeWidth={1.5} />
            Book Bouncers
          </button>
          <a
            href={buildCallUrl()}
            className="w-full sm:w-auto px-8 py-4 border border-ink-500 hover:border-gold-500/60 text-ink-50 hover:text-gold-400 font-semibold text-sm uppercase tracking-wider rounded-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" strokeWidth={1.5} />
            Call Now
          </a>
          <a
            href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-green-600/40 hover:border-green-500 text-green-400 hover:text-green-300 font-semibold text-sm uppercase tracking-wider rounded-md transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
        <ChevronDown className="w-6 h-6 text-ink-300 animate-bounce" strokeWidth={1.5} />
      </div>
    </section>
  );
}
