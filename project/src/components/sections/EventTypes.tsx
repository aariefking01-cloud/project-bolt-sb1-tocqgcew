import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { Heart, PartyPopper, Music, Wine, Briefcase, Crown, Calendar, Users } from 'lucide-react';

const EVENT_TYPES = [
  { icon: Heart, label: 'Weddings' },
  { icon: PartyPopper, label: 'Private Parties' },
  { icon: Music, label: 'Night Clubs' },
  { icon: Wine, label: 'Pubs' },
  { icon: Briefcase, label: 'Corporate Events', optional: true },
  { icon: Crown, label: 'VIP Events' },
  { icon: Calendar, label: 'Special Functions', optional: true },
  { icon: Users, label: 'Crowded Public Events', optional: true },
];

export default function EventTypes() {
  return (
    <section className="py-20 sm:py-28 bg-ink-900 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #d4a017 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Coverage"
          title={
            <>
              Bouncers for <span className="text-gradient-gold">Every Occasion</span>
            </>
          }
          subtitle="From weddings to nightlife venues, we provide professional bouncer presence for a wide range of events in Puducherry."
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {EVENT_TYPES.map((event, i) => (
            <Reveal key={event.label} delay={i * 70}>
              <div className="group relative p-6 rounded-xl bg-ink-850 border border-ink-700/40 hover:border-gold-500/40 transition-all duration-400 h-full">
                <event.icon
                  className="w-8 h-8 text-gold-500 mb-4 group-hover:scale-110 transition-transform duration-300"
                  strokeWidth={1.5}
                />
                <h3 className="font-display font-medium text-base text-ink-50 tracking-wide">
                  {event.label}
                </h3>
                {event.optional && (
                  <span className="mt-2 inline-block text-[10px] font-display tracking-wider uppercase text-ink-400 border border-ink-600 rounded px-2 py-0.5">
                    Custom Service
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
