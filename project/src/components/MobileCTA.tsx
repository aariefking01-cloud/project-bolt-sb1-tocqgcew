import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { buildCallUrl, buildWhatsAppUrl, WHATSAPP_DEFAULT_MESSAGE } from '@/lib/constants';

interface MobileCTAProps {
  onBook: () => void;
}

export default function MobileCTA({ onBook }: MobileCTAProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="glass border-t border-ink-700/60 px-2 py-2 flex items-stretch gap-1.5">
        <a
          href={buildCallUrl()}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-md bg-ink-800 active:bg-ink-700 transition-colors"
          aria-label="Call now"
        >
          <Phone className="w-5 h-5 text-gold-400" strokeWidth={1.5} />
          <span className="text-[10px] font-display font-medium tracking-wider text-ink-100">
            CALL
          </span>
        </a>
        <a
          href={buildWhatsAppUrl(WHATSAPP_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-md bg-ink-800 active:bg-ink-700 transition-colors"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-5 h-5 text-green-400" strokeWidth={1.5} />
          <span className="text-[10px] font-display font-medium tracking-wider text-ink-100">
            WHATSAPP
          </span>
        </a>
        <button
          onClick={onBook}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 rounded-md bg-gold-500 active:bg-gold-400 transition-colors"
          aria-label="Book bouncers"
        >
          <CalendarCheck className="w-5 h-5 text-ink-950" strokeWidth={1.5} />
          <span className="text-[10px] font-display font-medium tracking-wider text-ink-950">
            BOOK
          </span>
        </button>
      </div>
    </div>
  );
}
