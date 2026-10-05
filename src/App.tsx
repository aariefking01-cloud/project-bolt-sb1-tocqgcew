import { useEffect, useState, useCallback } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileCTA from '@/components/MobileCTA';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import Services from '@/components/sections/Services';
import EventTypes from '@/components/sections/EventTypes';
import WhyUs from '@/components/sections/WhyUs';
import HowItWorks from '@/components/sections/HowItWorks';
import BookingForm from '@/components/sections/BookingForm';
import Gallery from '@/components/sections/Gallery';
import Reviews from '@/components/sections/Reviews';
import Social from '@/components/sections/Social';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Reveal from '@/components/ui/Reveal';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';

type Page = 'home' | 'privacy' | 'terms' | '404';

function App() {
  const [page, setPage] = useState<Page>('home');

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleNavigate = useCallback(
    (target: string) => {
      if (target === 'home') {
        setPage('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (target === 'privacy') {
        setPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (target === 'terms') {
        setPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // For section navigation (services, about, gallery, reviews, contact, book)
        if (page !== 'home') {
          setPage('home');
          setTimeout(() => scrollToSection(target), 100);
        } else {
          scrollToSection(target);
        }
      }
    },
    [page, scrollToSection]
  );

  const handleBook = useCallback(() => {
    if (page !== 'home') {
      setPage('home');
      setTimeout(() => scrollToSection('book'), 100);
    } else {
      scrollToSection('book');
    }
  }, [page, scrollToSection]);

  // Update document title based on page
  useEffect(() => {
    if (page === 'privacy') {
      document.title =
        'Privacy Policy | Puduvai Bouncers';
    } else if (page === 'terms') {
      document.title =
        'Terms & Conditions | Puduvai Bouncers';
    } else {
      document.title =
        'Puduvai Bouncers | Professional Bouncer & Event Bouncer Services in Puducherry';
    }
  }, [page]);

  // Inject LocalBusiness structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Puduvai Bouncers',
      description:
        'Professional bouncer, event bouncer and VIP protection services in Puducherry.',
      telephone: '+918220134135',
      address: {
        '@type': 'PostalAddress',
        streetAddress:
          'Annai Indira Ninaivu Nagar, No. 13, Vanarapet, White Town',
        addressLocality: 'Puducherry',
        postalCode: '605001',
        addressRegion: 'Puducherry',
        addressCountry: 'IN',
      },
      areaServed: 'Puducherry',
      sameAs: ['https://www.instagram.com/puduvai_bouncers/'],
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (page === 'privacy') {
    return (
      <div className="min-h-screen bg-ink-950">
        <Navbar onNavigate={handleNavigate} currentPage="home" />
        <Privacy onNavigate={handleNavigate} />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  if (page === 'terms') {
    return (
      <div className="min-h-screen bg-ink-950">
        <Navbar onNavigate={handleNavigate} currentPage="home" />
        <Terms onNavigate={handleNavigate} />
        <Footer onNavigate={handleNavigate} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar onNavigate={handleNavigate} currentPage="home" />
      <main>
        <Hero onBook={handleBook} />
        <Reveal direction="up" delay={50}>
          <TrustStrip />
        </Reveal>
        <Reveal direction="up">
          <Services onBook={handleBook} />
        </Reveal>
        <Reveal direction="up">
          <EventTypes />
        </Reveal>
        <Reveal direction="up">
          <WhyUs />
        </Reveal>
        <Reveal direction="up">
          <HowItWorks />
        </Reveal>
        <Reveal direction="up">
          <BookingForm />
        </Reveal>
        <Reveal direction="up">
          <Gallery />
        </Reveal>
        <Reveal direction="up">
          <Reviews />
        </Reveal>
        <Reveal direction="up">
          <Social />
        </Reveal>
        <Reveal direction="up">
          <About />
        </Reveal>
        <Reveal direction="up">
          <Contact onBook={handleBook} />
        </Reveal>
      </main>
      <Footer onNavigate={handleNavigate} />
      <MobileCTA onBook={handleBook} />
    </div>
  );
}

export default App;
