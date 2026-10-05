import { ArrowLeft, Shield } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface TermsProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

export default function Terms({ onNavigate }: TermsProps) {
  return (
    <div className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <button
        onClick={() => onNavigate('home')}
        className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Home</span>
      </button>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
          <Shield className="w-5 h-5 text-gold-400" />
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink-50">
          Terms & Conditions of Service
        </h1>
      </div>

      <div className="space-y-6 text-sm text-ink-300 leading-relaxed border-t border-ink-800 pt-6">
        <p>
          Welcome to <strong>{BUSINESS.name}</strong>. By utilizing our bouncer and security services or accessing this website, you agree to comply with the terms and operational guidelines set forth below.
        </p>

        <h2 className="font-display font-bold text-xl text-ink-100 pt-4">
          1. Service Bookings & Confirmation
        </h2>
        <p>
          All bouncer deployment bookings are subject to personnel availability and explicit confirmation by our coordination team. Advance notice is recommended for large-scale events or high bouncer counts.
        </p>

        <h2 className="font-display font-bold text-xl text-ink-100 pt-4">
          2. Client Responsibilities
        </h2>
        <p>
          The client is responsible for securing necessary local venue permissions, licenses, and ensuring safe working environments for all deployed security personnel.
        </p>

        <h2 className="font-display font-bold text-xl text-ink-100 pt-4">
          3. Professional Conduct & Protocol
        </h2>
        <p>
          Our bouncers operate under professional codes of discipline, de-escalation, and lawful crowd management. They act to protect life, venue integrity, and designated guests under standard security protocols.
        </p>

        <h2 className="font-display font-bold text-xl text-ink-100 pt-4">
          4. Contact Information
        </h2>
        <p>
          For contract inquiries, custom security service agreements, or questions regarding these terms, please contact us directly by calling{' '}
          <span className="text-gold-400 font-semibold">{BUSINESS.phoneDisplay}</span> or reaching out via WhatsApp.
        </p>
      </div>
    </div>
  );
}
