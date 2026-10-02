import { Shield } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface PrivacyProps {
  onNavigate: (page: string) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
  return (
    <div className="min-h-screen bg-ink-950 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
          <h1 className="font-display font-bold text-3xl text-ink-50">
            Privacy Policy
          </h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-sm text-ink-300 leading-relaxed">
          <p className="text-xs text-ink-400">
            Last updated: {new Date().toLocaleDateString('en-IN')}
          </p>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit a booking or quote request through our website, we
              collect the information you provide, including your name, phone
              number, email address, event details (type, date, time, location,
              expected guest count), bouncer requirements, and preferred
              contact method.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              2. How We Use Your Information
            </h2>
            <p>
              We use the information you provide solely to respond to your
              enquiry, discuss your bouncer requirements, and coordinate
              bouncer services for your event. We do not use your personal
              information for marketing purposes without your consent.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              3. Information Sharing
            </h2>
            <p>
              We do not sell, trade, or share your personal information with
              third parties. Your booking details are accessible only to
              authorised personnel involved in responding to your request and
              providing bouncer services.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              4. Data Storage
            </h2>
            <p>
              Booking requests are stored securely and are not publicly
              accessible. Access to booking data is restricted and protected by
              authentication.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              5. Contact Information
            </h2>
            <p>
              If you have any questions about how your information is handled,
              please contact us:
            </p>
            <ul className="mt-2 space-y-1">
              <li>{BUSINESS.name}</li>
              <li>{BUSINESS.address}</li>
              <li>Phone: {BUSINESS.phoneDisplay}</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="mt-10 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold text-sm uppercase tracking-wide rounded-md transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
