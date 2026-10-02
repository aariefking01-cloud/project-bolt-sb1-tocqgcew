import { ShieldCheck, Users, Crown, UserCog, Activity, MapPin } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const TRUST_ITEMS = [
  { icon: ShieldCheck, label: 'Event Bouncers' },
  { icon: Users, label: 'Bouncer Services' },
  { icon: Crown, label: 'VIP Protection' },
  { icon: Activity, label: 'Crowd Management' },
  { icon: UserCog, label: 'Personal Bouncers' },
  { icon: MapPin, label: 'Puducherry Service' },
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 bg-ink-900 border-y border-ink-700/40 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TRUST_ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="flex flex-col items-center gap-2 text-center group">
                <item.icon
                  className="w-7 h-7 text-gold-500 transition-transform duration-300 group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <span className="text-xs font-display font-medium tracking-wider text-ink-200 uppercase">
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
