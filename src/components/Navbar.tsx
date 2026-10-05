import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { BUSINESS, buildCallUrl } from '@/lib/constants';
import Logo from '@/components/ui/Logo';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNav = (page: string) => {
    onNavigate(page);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ink-950/95 backdrop-blur-md border-b border-ink-700/50 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center group transition-transform hover:scale-105"
            aria-label="Puduvai Bouncers home"
          >
            <Logo size="md" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded ${
                  currentPage === link.id
                    ? 'text-gold-400'
                    : 'text-ink-100 hover:text-gold-400'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('book')}
              className="ml-3 px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold text-sm uppercase tracking-wide rounded-md transition-all duration-300 shadow-lg shadow-gold-500/20 btn-shine"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-ink-50"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-ink-950/95 backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-ink-900 border-l border-ink-700/50 pt-5 px-5 pb-8 flex flex-col overflow-y-auto transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between pb-6 mb-2 border-b border-ink-700/40">
            <Logo size="sm" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-ink-100 hover:text-gold-400"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`py-4 text-left text-lg font-display font-medium tracking-wide border-b border-ink-700/40 transition-colors ${
                currentPage === link.id
                  ? 'text-gold-400'
                  : 'text-ink-100 hover:text-gold-400'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="mt-6 space-y-3">
            <button
              onClick={() => handleNav('book')}
              className="w-full px-6 py-4 bg-gold-500 text-ink-950 font-semibold text-sm uppercase tracking-wide rounded-md"
            >
              Book Now
            </button>
            <a
              href={buildCallUrl()}
              className="block w-full px-6 py-4 border border-gold-500/60 text-gold-400 font-semibold text-sm uppercase tracking-wide rounded-md text-center"
            >
              Call Now
            </a>
          </div>

          <div className="mt-auto pt-8 text-xs text-ink-400">
            <p className="font-display tracking-wide text-gold-400 mb-1">
              {BUSINESS.name}
            </p>
            <p>{BUSINESS.location}</p>
            <p className="mt-1">{BUSINESS.phoneDisplay}</p>
          </div>
        </div>
      </div>
    </>
  );
}
