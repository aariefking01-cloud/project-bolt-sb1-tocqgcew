import { Shield, Users, Crown, Sparkles, Building, Music } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

interface ServicesProps {
  onBook: () => void;
}

const SERVICES = [
  {
    icon: Shield,
    title: 'Event Bouncers',
    description:
      'Professional security personnel deployed for public and private events, managing entry, crowd safety, and venue order with disciplined authority.',
    highlights: ['Entry access control', 'Crowd flow management', 'Emergency preparedness'],
  },
  {
    icon: Crown,
    title: 'VIP & Celebrity Protection',
    description:
      'Discreet, vigilant personal bodyguards offering close protection for high-profile guests, artists, dignitaries, and corporate executives.',
    highlights: ['Close escort protocol', 'Vehicle & transit protection', 'Confidentiality assured'],
  },
  {
    icon: Sparkles,
    title: 'Wedding & Reception Bouncers',
    description:
      'Polite yet imposing security bouncers for grand weddings, luxury receptions, and family galas to ensure a dignified, undisturbed celebration.',
    highlights: ['Guest verification', 'Gift & VIP stage security', 'Valet & parking oversight'],
  },
  {
    icon: Music,
    title: 'Nightclub & Pub Security',
    description:
      'Experienced door bouncers skilled in de-escalation, ID verification, dress code enforcement, and maintaining safe club atmospheres.',
    highlights: ['Velvet rope management', 'Conflict de-escalation', 'Zero tolerance policy'],
  },
  {
    icon: Users,
    title: 'Concerts & Large Festivals',
    description:
      'High-capacity bouncer squads organized into coordinated barricade teams, backstage security, and perimeter monitoring personnel.',
    highlights: ['Stage barrier security', 'Artist greenroom protection', 'Dynamic crowd containment'],
  },
  {
    icon: Building,
    title: 'Corporate & Commercial Security',
    description:
      'Smartly attired bouncers and executive guards for product launches, brand expos, AGM meetings, and exclusive brand unveilings.',
    highlights: ['Professional appearance', 'Badge check & registration', 'Asset protection'],
  },
];

export default function Services({ onBook }: ServicesProps) {
  return (
    <section id="services" className="py-20 sm:py-28 bg-ink-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Expertise"
          title={
            <>
              Elite Security & <span className="text-gradient-gold">Bouncer Services</span>
            </>
          }
          subtitle="Delivering unwavering security solutions tailored for weddings, nightlife venues, VIP escorts, and major gatherings across Puducherry."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((srv, i) => (
            <Reveal key={srv.title} delay={i * 90}>
              <div className="p-8 rounded-2xl bg-ink-900 border border-ink-800/80 hover:border-gold-500/40 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg hover:shadow-gold-500/5">
                <div>
                  <div className="w-14 h-14 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <srv.icon className="w-7 h-7 text-gold-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink-50 mb-3 tracking-wide">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-ink-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>
                </div>
                <div>
                  <ul className="space-y-2 mb-6 border-t border-ink-800 pt-4">
                    {srv.highlights.map((h) => (
                      <li key={h} className="text-xs text-ink-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={onBook}
                    className="w-full py-2.5 px-4 rounded-lg bg-ink-850 hover:bg-gold-500 text-ink-200 hover:text-ink-950 font-display font-semibold text-xs tracking-wider uppercase transition-colors"
                  >
                    Enquire Now
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
