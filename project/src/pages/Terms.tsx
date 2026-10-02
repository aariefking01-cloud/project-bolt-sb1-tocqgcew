import { FileText } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

interface TermsProps {
  onNavigate: (page: string) => void;
}

export default function Terms({ onNavigate }: TermsProps) {
  return (
    <div className="min-h-screen bg-ink-950 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-8 h-8 text-gold-500" strokeWidth={1.5} />
          <h1 className="font-display font-bold text-3xl text-ink-50">
            Terms &amp; Conditions
          </h1>
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-sm text-ink-300 leading-relaxed">
          <p className="text-xs text-ink-400">
            Last updated: {new Date().toLocaleDateString('en-IN')}
          </p>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              1. Services
            </h2>
            <p>
              {BUSINESS.name} provides bouncer, event bouncer, personal bouncer
              and VIP protection services in {BUSINESS.city} and surrounding areas.
              The specific services, number of personnel, and duration are agreed
              upon individually for each booking.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              2. Booking Requests
            </h2>
            <p>
              Submitting a booking request through our website does not constitute
              a confirmed booking. A booking is confirmed only after direct
              communication with our team and mutual agreement on services,
              timing, and pricing.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              3. Client Responsibilities
            </h2>
            <p>
              Clients are expected to provide accurate event details, including
              venue, timing, expected guest count, and any specific bouncer
              concerns. Clients must ensure that bouncer personnel have
              appropriate access to the venue.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              4. Cancellation
            </h2>
            <p>
              Cancellation terms are discussed and agreed upon at the time of
              booking confirmation. Please contact us as early as possible if you
              need to cancel or reschedule.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              5. Liability
            </h2>
            <p>
              {BUSINESS.name} provides professional bouncer presence and crowd
              management support. We are not liable for circumstances beyond the
              control of bouncer personnel. Specific liability terms are
              discussed at the time of booking.
            </p>
          </section>

          <section>
            <h2 className="font-display font-semibold text-lg text-ink-50 mb-3">
              6. Contact
            </h2>
            <p>For any questions regarding these terms, please contact us:</p>
            <ul className="mt-2 space-y-1">
              <li>{BUSINESS.name}</li>
              <li>{BUSINESS.address}</li>
              <li>Phone: {BUSINESS.phoneDisplay}</li>
            </ul>
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
