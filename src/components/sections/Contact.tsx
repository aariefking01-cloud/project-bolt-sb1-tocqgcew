import { Phone, MapPin, MessageCircle, Clock, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import {
  BUSINESS,
  buildCallUrl,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_MESSAGE,
} from '@/lib/constants';

interface ContactProps {
  onBook: () => void;
}

export default function Contact({ onBook }: ContactProps) {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-ink-900 border-t border-ink-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Reach Out"
          title={
            <>
              Contact <span className="text-gradient-gold">Puduvai Bouncers</span>
            </>
          }
          subtitle="Ready to secure your event? Contact our dispatch coordinator directly or book via our online form."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Phone */}
          <Reveal delay={50}>
            <div className="p-6 rounded-2xl bg-ink-850 border border-ink-750 text-center h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 mx-auto rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-lg text-ink-50 mb-1">
                  Phone Call
                </h3>
                <p className="text-xs text-ink-400 mb-4">Direct 24/7 Hotline</p>
                <p className="font-mono text-sm text-gold-300 font-semibold mb-6">
                  {BUSINESS.phoneDisplay}
                </p>
              </div>
              <a
                href={buildCallUrl()}
                className="w-full py-2.5 px-4 rounded-lg bg-gold-500 hover:bg-gold-400 text-ink-950 font-display font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Call Now
              </a>
            </div>
          </Reveal>

          {/* WhatsApp */}
          <Reveal delay={100}>
            <div className="p-6 rounded-2xl bg-ink-850 border border-ink-750 text-center h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 mx-auto rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-green-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-lg text-ink-50 mb-1">
                  WhatsApp
                </h3>
                <p className="text-xs text-ink-400 mb-4">Fastest Quote & Response</p>
                <p className="font-mono text-sm text-green-400 font-semibold mb-6">
                  {BUSINESS.phoneDisplay}
                </p>
              </div>
              <a
                href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-green-600 hover:bg-green-500 text-white font-display font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Location & Booking */}
          <Reveal delay={150}>
            <div className="p-6 rounded-2xl bg-ink-850 border border-ink-750 text-center h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 mx-auto rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-bold text-lg text-ink-50 mb-1">
                  Headquarters
                </h3>
                <p className="text-xs text-ink-400 mb-4">Puducherry Central</p>
                <p className="text-xs text-ink-300 mb-6 leading-relaxed">
                  {BUSINESS.location}
                </p>
              </div>
              <button
                onClick={onBook}
                className="w-full py-2.5 px-4 rounded-lg bg-gold-500/15 hover:bg-gold-500/30 text-gold-400 border border-gold-500/30 font-display font-semibold text-xs tracking-wider uppercase transition-colors"
              >
                Book Online
              </button>
            </div>
          </Reveal>
        </div>

        {/* Operating Hours Banner */}
        <div className="mt-12 p-6 rounded-xl bg-ink-950 border border-ink-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-300 max-w-4xl mx-auto">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-gold-400" />
            <span>24/7 Security Dispatch & Emergency Response across Puducherry & surrounding areas.</span>
          </div>
          <div className="flex items-center gap-2 text-gold-400 font-medium">
            <Shield className="w-4 h-4" />
            <span>Licensed & Experienced</span>
          </div>
        </div>
      </div>
    </section>
  );
}
