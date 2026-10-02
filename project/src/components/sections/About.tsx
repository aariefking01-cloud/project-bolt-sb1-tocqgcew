import { Shield, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { BUSINESS } from '@/lib/constants';

const HIGHLIGHTS = [
  'Bouncer & guard services for events',
  'Wedding and private party bouncers',
  'Nightclub and pub bouncer support',
  'Personal bouncer for individuals',
  'VIP protection for high-profile guests',
  'Crowd management for public events',
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-ink-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <SectionHeading
              eyebrow="About Us"
              title={
                <>
                  About <span className="text-gradient-gold">Puduvai Bouncers</span>
                </>
              }
              subtitle="Puduvai Bouncers provides bouncer support for events, private parties, nightlife venues, personal bouncer requirements and VIP protection in Puducherry."
              center={false}
            />

            <div className="mt-8 space-y-4">
              <p className="text-sm text-ink-300 leading-relaxed">
                Based in White Town, Puducherry, we offer professional bouncer
                presence for a wide range of occasions — from marriage events and
                private celebrations to nightclub venues and VIP gatherings. Our
                focus is on providing disciplined, reliable bouncer personnel
                who help keep your events safe and orderly.
              </p>

              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                {HIGHLIGHTS.map((item, i) => (
                  <Reveal key={item} delay={i * 60}>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2
                        className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-sm text-ink-200">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          {/* Image + info card */}
          <Reveal delay={200}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-[400px] sm:h-[480px]">
                <img
                  src="/images/image copy 5.png"
                  alt="Bouncer team standing together with arms crossed"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
              </div>

              {/* Info card */}
              <div className="absolute -bottom-6 left-4 right-4 glass rounded-xl p-5 shadow-2xl">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                    <span className="text-sm font-display font-medium text-ink-50">
                      {BUSINESS.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                    <span className="text-xs text-ink-200">{BUSINESS.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
                    <span className="text-xs text-ink-200">
                      {BUSINESS.phoneDisplay}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
