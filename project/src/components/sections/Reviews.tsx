import { Star, Quote, ExternalLink } from 'lucide-react';
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
            <div className="p-8 rounded-2xl bg-ink-850 border border-ink-700/50 h-full flex flex-col">
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
                <span className="text-sm text-ink-300">Customer ratings</span>
              </div>
              <p className="text-sm text-ink-300 leading-relaxed flex-grow">
                Customer reviews and ratings for {BUSINESS.name} are available on
                Google. Visit our listing to read genuine feedback from people who
                have used our bouncer services.
              </p>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(BUSINESS.name + ' ' + BUSINESS.city + ' reviews')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-display font-medium tracking-wider uppercase text-gold-400 hover:text-gold-300 transition-colors"
              >
                View All Reviews
                <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>

          {/* JustDial Reviews Card */}
          <Reveal delay={120}>
            <div className="p-8 rounded-2xl bg-ink-850 border border-ink-700/50 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-ink-800 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-gold-400" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink-50">
                    JustDial Listing
                  </h3>
                  <p className="text-xs text-ink-400">Photos & ratings</p>
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
                <span className="text-sm text-ink-300">Listed on JustDial</span>
              </div>
              <p className="text-sm text-ink-300 leading-relaxed flex-grow">
                {BUSINESS.name} is listed on JustDial with business photos and
                customer ratings. Visit our JustDial page for more information
                and visual references.
              </p>
              <a
                href="https://www.justdial.com/Pondicherry/Puduvai-bouncers-White-Town/0413PX413-X413-241024025512-F6F8_BZDET"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-display font-medium tracking-wider uppercase text-gold-400 hover:text-gold-300 transition-colors"
              >
                View on JustDial
                <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
