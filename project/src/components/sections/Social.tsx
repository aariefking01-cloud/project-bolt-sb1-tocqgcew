import { Instagram, ExternalLink } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';
import { BUSINESS } from '@/lib/constants';

export default function Social() {
  return (
    <section className="py-20 sm:py-28 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Follow Us"
          title={
            <>
              Connect on <span className="text-gradient-gold">Instagram</span>
            </>
          }
          subtitle="Follow Puduvai Bouncers on Instagram for updates, photos and bouncer service highlights."
        />

        <div className="mt-14 max-w-md mx-auto">
          <Reveal>
            <a
              href={BUSINESS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-8 rounded-2xl bg-ink-900 border border-ink-700/50 hover:border-gold-500/40 transition-all duration-400 text-center"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-500/20 to-ink-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Instagram className="w-10 h-10 text-gold-400" strokeWidth={1.5} />
              </div>
              <h3 className="font-display font-semibold text-xl text-ink-50 mb-2">
                {BUSINESS.instagramDisplay}
              </h3>
              <p className="text-sm text-ink-300 mb-6">
                Follow us on Instagram for bouncer service photos and updates
                from events across Puducherry.
              </p>
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-ink-800 border border-ink-700 group-hover:bg-gold-500 group-hover:text-ink-950 transition-all duration-300">
                <span className="text-sm font-display font-medium tracking-wider uppercase">
                  Follow Us on Instagram
                </span>
                <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
