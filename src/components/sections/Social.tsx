import { Instagram, ExternalLink, Shield } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { BUSINESS } from '@/lib/constants';

export default function Social() {
  return (
    <section className="py-20 sm:py-28 bg-ink-950 border-t border-ink-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Follow Our Squad"
          title={
            <>
              Connect on <span className="text-gradient-gold">Instagram</span>
            </>
          }
          subtitle="Get real-time updates, event highlights, and training clips from the Puduvai Bouncers team on social media."
        />

        <div className="mt-12 max-w-2xl mx-auto">
          <Reveal>
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-ink-900 via-ink-850 to-ink-900 border border-gold-500/20 text-center shadow-xl">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 p-0.5 mb-6 flex items-center justify-center">
                <div className="w-full h-full bg-ink-950 rounded-[14px] flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-pink-400" />
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl text-ink-50 mb-2">
                {BUSINESS.instagramDisplay}
              </h3>
              <p className="text-sm text-ink-300 max-w-md mx-auto mb-6">
                Follow our official handle to see our squads on duty across Puducherry events, VIP visits, and wedding venues.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={BUSINESS.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-display font-semibold text-xs tracking-wider uppercase rounded-lg shadow-lg hover:opacity-95 transition-opacity inline-flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Visit Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <div className="flex items-center gap-2 text-xs text-ink-400">
                  <Shield className="w-4 h-4 text-gold-400" />
                  <span>Official Verified Page</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
