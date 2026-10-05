import { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/ui/Reveal';

const GALLERY_IMAGES = [
  {
    src: '/images/nightclub-door.jpg',
    alt: 'Nightclub & Pub Door Control & Velvet Rope Security',
    tag: 'Nightlife Venue',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: '/images/vip-escort.jpg',
    alt: 'VIP Close Protection & Executive Security Escort',
    tag: 'VIP Protection',
    span: '',
  },
  {
    src: '/images/wedding-security.jpg',
    alt: 'Grand Wedding & Marriage Function Bouncer Presence',
    tag: 'Wedding Security',
    span: '',
  },
  {
    src: '/images/crowd-control.jpg',
    alt: 'Live Concert & Festival Crowd Management',
    tag: 'Crowd Control',
    span: 'lg:col-span-2',
  },
  {
    src: '/images/bouncers-team.jpg',
    alt: 'Elite Puduvai Bouncer Formation Lineup',
    tag: 'Professional Squad',
    span: '',
  },
  {
    src: '/images/image copy 10.png',
    alt: 'Venue Perimeter & Access Point Monitoring',
    tag: 'Venue Access',
    span: '',
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev + 1) % GALLERY_IMAGES.length
    );
  }, []);
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev === null ? prev : (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visuals"
          title={
            <>
              Bouncers in <span className="text-gradient-gold">Action</span>
            </>
          }
          subtitle="A look at professional bouncer presence across different event settings. Illustrative imagery of bouncer and event protection scenarios."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[240px] sm:auto-rows-[220px]">
          {GALLERY_IMAGES.map((img, i) => (
            <Reveal
              key={i}
              delay={(i % 4) * 80}
              className={`group cursor-pointer overflow-hidden rounded-xl ${img.span}`}
            >
              <div
                onClick={() => setLightboxIndex(i)}
                className="relative w-full h-full overflow-hidden rounded-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-transform duration-300">
                  {img.tag && (
                    <span className="inline-block px-2 py-0.5 mb-1.5 text-[10px] font-display font-semibold tracking-wider uppercase text-gold-400 bg-ink-900/90 border border-gold-500/30 rounded">
                      {img.tag}
                    </span>
                  )}
                  <p className="text-xs sm:text-sm font-medium text-ink-50 line-clamp-1">
                    {img.alt}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-ink-950/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 p-2 text-ink-100 hover:text-gold-400 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-7 h-7" strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-3 sm:left-8 p-2 text-ink-100 hover:text-gold-400 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-3 sm:right-8 p-2 text-ink-100 hover:text-gold-400 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
          </button>

          <img
            src={GALLERY_IMAGES[lightboxIndex].src}
            alt={GALLERY_IMAGES[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-ink-300 font-display tracking-wider">
            {lightboxIndex + 1} / {GALLERY_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
