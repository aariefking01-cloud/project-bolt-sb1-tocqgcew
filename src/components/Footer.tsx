import { Phone, MapPin, Instagram, ArrowRight } from 'lucide-react';
import {
  BUSINESS,
  buildCallUrl,
  buildWhatsAppUrl,
  WHATSAPP_DEFAULT_MESSAGE,
} from '@/lib/constants';
import Logo from '@/components/ui/Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const QUICK_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

const SERVICE_LINKS = [
  'Event Bouncers',
  'Wedding Bouncers',
  'Private Party Bouncers',
  'Nightclub & Pub Bouncers',
  'Personal Bouncer',
  'VIP Protection',
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-ink-900 border-t border-ink-700/40 pt-16 pb-20 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={() => onNavigate('home')}
              className="mb-5 text-left transition-transform hover:scale-105"
            >
              <Logo size="md" />
            </button>
            <p className="text-sm text-ink-300 leading-relaxed mb-5">
              Professional bouncer services for events, private
              functions, nightlife and VIP protection in Puducherry.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-ink-800 border border-ink-700 flex items-center justify-center hover:border-gold-500/40 hover:text-gold-400 text-ink-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-ink-800 border border-ink-700 flex items-center justify-center hover:border-green-500/40 hover:text-green-400 text-ink-200 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-ink-50 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-ink-300 hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                      strokeWidth={1.5}
                    />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-ink-50 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => onNavigate('book')}
                    className="text-sm text-ink-300 hover:text-gold-400 transition-colors text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm tracking-wider uppercase text-ink-50 mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <MapPin
                  className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <p className="text-sm text-ink-300 leading-relaxed">
                  {BUSINESS.address}
                </p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone
                  className="w-4 h-4 text-gold-400 flex-shrink-0"
                  strokeWidth={1.5}
                />
                <a
                  href={buildCallUrl()}
                  className="text-sm text-ink-300 hover:text-gold-400 transition-colors"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </div>
              <button
                onClick={() => onNavigate('book')}
                className="btn-shine mt-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold text-xs uppercase tracking-wider rounded-md transition-all duration-300"
              >
                Book Bouncers
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-ink-700/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ink-400">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('privacy')}
              className="text-xs text-ink-400 hover:text-gold-400 transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="text-xs text-ink-400 hover:text-gold-400 transition-colors"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
