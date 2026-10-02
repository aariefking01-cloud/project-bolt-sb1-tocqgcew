import {
  ShieldCheck,
  Heart,
  PartyPopper,
  Music,
  UserCog,
  Crown,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

interface ServicesProps {
  onBook: () => void;
}

const SERVICES = [
  {
    icon: ShieldCheck,
    title: 'Event Bouncers',
    description:
      'Professional bouncer support for organized events and functions.',
  },
  {
    icon: Heart,
    title: 'Wedding Bouncers',
    description:
      'Bouncer support for marriage and wedding events.',
  },
  {
    icon: PartyPopper,
    title: 'Private Party Bouncers',
    description:
      'Professional personnel for private celebrations and gatherings.',
  },
  {
    icon: Music,
    title: 'Nightclub & Pub Bouncers',
    description:
      'Bouncer and crowd-management support for nightlife venues.',
  },
  {
    icon: UserCog,
    title: 'Personal Bouncer',
    description:
      'Dedicated personal bouncer presence for individuals and special occasions.',
  },
  {
    icon: Crown,
    title: 'VIP Protection',
    description:
      'Professional bouncer support for VIPs and high-profile guests.',
  },
];

export default function Services({ onBook }: ServicesProps) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Our Bouncer Services"
          subtitle="Comprehensive bouncer services for events, private functions, nightlife and VIP protection in Puducherry."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 100}>
              <div className="group relative h-full p-7 rounded-xl bg-ink-900 border border-ink-700/50 hover:border-gold-500/40 transition-all duration-400 overflow-hidden">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-ink-800 border border-ink-700 flex items-center justify-center mb-5 group-hover:border-gold-500/40 group-hover:bg-ink-700 transition-all duration-300">
                    <service.icon
                      className="w-7 h-7 text-gold-400 group-hover:scale-110 transition-transform duration-300"
                      strokeWidth={1.5}
                    />
                  </div>

                  <h3 className="font-display font-semibold text-xl text-ink-50 mb-2 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-sm text-ink-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <button
                    onClick={onBook}
                    className="inline-flex items-center gap-1.5 text-xs font-display font-medium tracking-wider uppercase text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Request Bouncers
                    <ArrowRight
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
