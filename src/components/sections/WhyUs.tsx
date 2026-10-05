import {
  ShieldCheck,
  CalendarCheck,
  Users,
  Crown,
  MapPin,
  Clock,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Professional Bouncer Presence',
    description:
      'Trained and disciplined bouncer personnel who project authority and maintain order at your events.',
  },
  {
    icon: CalendarCheck,
    title: 'Event-Focused Bouncers',
    description:
      'Bouncer solutions tailored specifically for events, functions and celebrations of all sizes.',
  },
  {
    icon: Users,
    title: 'Crowd Management Support',
    description:
      'Structured crowd control to keep your guests safe and your event running smoothly.',
  },
  {
    icon: Crown,
    title: 'VIP & Personal Bouncers',
    description:
      'Dedicated protection for high-profile guests and individuals requiring personal bouncers.',
  },
  {
    icon: MapPin,
    title: 'Local Puducherry Service',
    description:
      'Based in White Town, Puducherry — serving the local area with prompt, reliable service.',
  },
  {
    icon: Clock,
    title: 'Responsive Booking',
    description:
      'Quick response to your bouncer enquiries. Reach out by call or WhatsApp and get a prompt reply.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 sm:py-28 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <Reveal>
            <div className="relative pb-8 sm:pb-0">
              <div className="relative rounded-2xl overflow-hidden h-[340px] sm:h-[500px] border border-gold-500/20 shadow-2xl">
                <img
                  src="/images/vip-escort.jpg"
                  alt="Professional VIP bouncers and close protection specialists"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 glass rounded-xl p-5 max-w-[220px] shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gold-500/15 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-ink-50">
                      Trusted Bouncers
                    </div>
                    <div className="text-xs text-ink-300">
                      Professional & Disciplined
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content side */}
          <div>
            <SectionHeading
              eyebrow="Why Choose Us"
              title={
                <>
                  Why <span className="text-gradient-gold">Puduvai Bouncers</span>
                </>
              }
              subtitle="We bring professional bouncer presence to your events with a focus on reliability, discipline and local service in Puducherry."
              center={false}
            />

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {REASONS.map((reason, i) => (
                <Reveal key={reason.title} delay={i * 80}>
                  <div className="flex gap-3.5">
                    <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-ink-800 border border-ink-700 flex items-center justify-center">
                      <reason.icon
                        className="w-5 h-5 text-gold-400"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-medium text-sm text-ink-50 tracking-wide mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-xs text-ink-300 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
