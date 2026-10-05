import { Calendar, PartyPopper, Mic2, Heart, Trophy, Briefcase } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const EVENTS = [
  {
    icon: Heart,
    name: 'Weddings & Receptions',
    desc: 'Ensuring seamless entry, celebrity guest escort, and peaceful celebrations.',
  },
  {
    icon: Mic2,
    name: 'Concerts & Music Festivals',
    desc: 'Perimeter defense, stage containment, and active crowd surveillance.',
  },
  {
    icon: PartyPopper,
    name: 'Private Parties & DJ Nights',
    desc: 'Uncompromising door selection, venue monitoring, and dispute suppression.',
  },
  {
    icon: Briefcase,
    name: 'Corporate Conferences & Expos',
    desc: 'Polished professional presence guarding high-value products and delegates.',
  },
  {
    icon: Trophy,
    name: 'Sports Tournaments',
    desc: 'Athlete transit paths, referee safety corridors, and seating perimeter security.',
  },
  {
    icon: Calendar,
    name: 'Cultural & Temple Festivals',
    desc: 'Coordinated bouncer teams assisting temple authorities and large pilgrim gatherings.',
  },
];

export default function EventTypes() {
  return (
    <section className="py-20 sm:py-28 bg-ink-900 border-t border-ink-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Specialized Occasions"
          title={
            <>
              Events We <span className="text-gradient-gold">Protect</span>
            </>
          }
          subtitle="From intimate VIP gatherings to high-voltage stadium events, our squad brings tactical expertise and composed authority."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENTS.map((ev, i) => (
            <Reveal key={ev.name} delay={i * 80}>
              <div className="p-6 rounded-xl bg-ink-850 border border-ink-750 hover:border-gold-500/30 transition-all group flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <ev.icon className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-ink-50 mb-1">
                    {ev.name}
                  </h3>
                  <p className="text-xs text-ink-300 leading-relaxed">
                    {ev.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
