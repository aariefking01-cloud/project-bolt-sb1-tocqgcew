import { Phone, MessageCircle, MapPin, Instagram, Clock } from 'lucide-react';
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
    <section id="contact" className="py-20 sm:py-28 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title={
            <>
              Contact <span className="text-gradient-gold">Us</span>
            </>
          }
          subtitle="Reach out to discuss your bouncer requirements. We are available by call, WhatsApp and Instagram."
        />

        {/* Three contact cards */}
        <div className="mt-14 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          <Reveal>
            <a
              href={buildCallUrl()}
              className="group block p-7 rounded-2xl bg-ink-900 border border-ink-700/50 hover:border-gold-500/40 transition-all duration-400 text-center h-full"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-ink-800 border border-ink-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-7 h-7 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink-50 mb-1">
                Call
              </h3>
              <p className="text-sm text-ink-300">{BUSINESS.phoneDisplay}</p>
            </a>
          </Reveal>

          <Reveal delay={100}>
            <a
              href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 rounded-2xl bg-ink-900 border border-ink-700/50 hover:border-green-500/40 transition-all duration-400 text-center h-full"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-ink-800 border border-ink-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle
                  className="w-7 h-7 text-green-400"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink-50 mb-1">
                WhatsApp
              </h3>
              <p className="text-sm text-ink-300">Chat with us instantly</p>
            </a>
          </Reveal>

          <Reveal delay={200}>
            <a
              href={BUSINESS.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-7 rounded-2xl bg-ink-900 border border-ink-700/50 hover:border-gold-500/40 transition-all duration-400 text-center h-full"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-ink-800 border border-ink-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-7 h-7 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-lg text-ink-50 mb-1">
                Get Directions
              </h3>
              <p className="text-sm text-ink-300">White Town, Puducherry</p>
            </a>
          </Reveal>
        </div>

        {/* Contact details */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Reveal>
            <div className="p-7 rounded-2xl bg-ink-900 border border-ink-700/50">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gold-400" strokeWidth={1.5} />
                    <span className="text-xs font-display font-medium tracking-wider uppercase text-ink-200">
                      Location
                    </span>
                  </div>
                  <p className="text-sm text-ink-300 leading-relaxed">
                    {BUSINESS.address}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-gold-400" strokeWidth={1.5} />
                    <span className="text-xs font-display font-medium tracking-wider uppercase text-ink-200">
                      Phone
                    </span>
                  </div>
                  <p className="text-sm text-ink-300">{BUSINESS.phoneDisplay}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Instagram
                      className="w-4 h-4 text-gold-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-xs font-display font-medium tracking-wider uppercase text-ink-200">
                      Instagram
                    </span>
                  </div>
                  <a
                    href={BUSINESS.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    {BUSINESS.instagramDisplay}
                  </a>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-gold-400" strokeWidth={1.5} />
                    <span className="text-xs font-display font-medium tracking-wider uppercase text-ink-200">
                      Availability
                    </span>
                  </div>
                  <p className="text-sm text-ink-300">
                    Available for event bookings across Puducherry
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-ink-700/40">
                <button
                  onClick={onBook}
                  className="btn-shine w-full sm:w-auto px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold text-sm uppercase tracking-wider rounded-md transition-all duration-300 shadow-lg shadow-gold-500/20"
                >
                  Book Bouncers Now
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Map embed */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-ink-700/50 h-[320px]">
              <iframe
                title="Puduvai Bouncers location map"
                src="https://www.google.com/maps?q=White+Town+Pondicherry+605001&output=embed"
                className="w-full h-full"
                style={{ border: 0, filter: 'grayscale(0.4) contrast(1.1) brightness(0.85)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
