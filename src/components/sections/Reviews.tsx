import { Star, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { BUSINESS } from '@/lib/constants';

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-ink-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Customer Feedback"
          title={
            <>
              Reviews & <span className="text-gradient-gold">Feedback</span>
            </>
          }
          subtitle="We value customer feedback. Reviews for Puduvai Bouncers are available on Google and JustDial."
        />

        <div className="mt-14 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Google Reviews Card */}
          <Reveal>
            <div className="p-8 rounded-2xl bg-ink-850 border border-ink-700/50 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-ink-800 flex items-center justify-center">
                    <span className="font-display font-bold text-lg text-ink-100">
                      G
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink-50">
                      Google Reviews
                    </h3>
                    <p className="text-xs text-ink-400">See what customers say</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gold-400"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-ink-300">5.0 Star Rated</span>
                </div>
                <p className="text-sm text-ink-300 leading-relaxed mb-6">
                  Customer reviews and ratings for {BUSINESS.name} are available on
                  Google. Visit our listing to read genuine feedback from people who
                  have used our bouncer services.
                </p>
              </div>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(BUSINESS.name + ' ' + BUSINESS.city + ' reviews')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-display font-medium tracking-wider uppercase text-gold-400 hover:text-gold-300 transition-colors"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          {/* JustDial Card */}
          <Reveal delay={150}>
            <div className="p-8 rounded-2xl bg-ink-850 border border-ink-700/50 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-orange-600/20 flex items-center justify-center">
                    <span className="font-display font-bold text-lg text-orange-400">
                      JD
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-ink-50">
                      JustDial Verified
                    </h3>
                    <p className="text-xs text-ink-400">Trusted Local Business</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gold-400"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-ink-300">Top Rated Service</span>
                </div>
                <p className="text-sm text-ink-300 leading-relaxed mb-6">
                  Puduvai Bouncers is recognized on JustDial as a trusted security and
                  bouncer service provider across Puducherry with verified customer recommendations.
                </p>
              </div>
              <a
                href="https://www.justdial.com/Pondicherry/Puduvai-Bouncers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-display font-medium tracking-wider uppercase text-gold-400 hover:text-gold-300 transition-colors"
              >
                <span>View on JustDial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
