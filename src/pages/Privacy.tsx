import { ArrowLeft, Shield } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface PrivacyProps {
  onNavigate: (page: 'home' | 'privacy' | 'terms') => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
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
          Privacy Policy
        </h1>
      </div>

      <div className="space-y-6 text-sm text-ink-300 leading-relaxed border-t border-ink-800 pt-6">
        <p>
          At <strong>{BUSINESS.name}</strong>, we respect your privacy and are committed to protecting any personal information you share with us through our website and booking inquiries.
        </p>

        <h2 className="font-display font-bold text-xl text-ink-100 pt-4">
          1. Information We Collect
        </h2>
        <p>
          When you submit a quote request or contact us, we collect details such as your full name, phone number, email address, event details, venue location, and specific security requirements.
        </p>

        <h2 className="font-display font-bold text-xl text-ink-100 pt-4">
          2. How We Use Your Information
        </h2>
        <p>
          Your information is exclusively used to coordinate security bouncer assignments, provide accurate pricing quotes, confirm booking schedules, and communicate with you regarding your event.
        </p>

        <h2 className="font-display font-bold text-xl text-ink-100 pt-4">
          3. Data Security
        </h2>
        <p>
          We implement standard procedural and technical safeguards to secure your private details. We never sell, lease, or rent customer information to third-party marketers.
        </p>

        <h2 className="font-display font-bold text-xl text-ink-100 pt-4">
          4. Contact Us
        </h2>
        <p>
          If you have any questions about this privacy statement, you can reach out directly to us by calling{' '}
          <span className="text-gold-400 font-semibold">{BUSINESS.phoneDisplay}</span> or via WhatsApp.
        </p>
      </div>
    </div>
  );
}
