import { ShieldAlert, Home, Phone } from 'lucide-react';
import { buildCallUrl } from '@/lib/constants';

interface NotFoundProps {
  onNavigate: (page: string) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-ink-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 mx-auto rounded-full bg-ink-800 border border-ink-700 flex items-center justify-center mb-8">
          <ShieldAlert className="w-12 h-12 text-gold-500" strokeWidth={1.5} />
        </div>

        <div className="font-display font-bold text-6xl text-gold-400 mb-4">
          404
        </div>

        <h1 className="font-display font-semibold text-2xl text-ink-50 mb-3 tracking-wide">
          Bouncer Checkpoint
        </h1>

        <p className="text-sm text-ink-300 leading-relaxed mb-10">
          The page you're looking for could not be found. It may have been moved
          or no longer exists.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => onNavigate('home')}
            className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-ink-950 font-semibold text-sm uppercase tracking-wide rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" strokeWidth={1.5} />
            Return Home
          </button>
          <a
            href={buildCallUrl()}
            className="px-6 py-3 border border-ink-600 text-ink-100 font-semibold text-sm uppercase tracking-wide rounded-md hover:border-gold-500/40 hover:text-gold-400 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" strokeWidth={1.5} />
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
