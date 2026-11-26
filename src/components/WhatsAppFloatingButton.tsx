import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/clubConfig';
import { TranslationSchema } from '../i18n/translations';

interface WhatsAppFloatingButtonProps {
  t: TranslationSchema;
}

export function WhatsAppFloatingButton({ t }: WhatsAppFloatingButtonProps) {
  const isRtl = t.dir === 'rtl';

  return (
    <a
      href={buildWhatsAppUrl(t.whatsappFloat.prefill)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsappFloat.label}
      title={t.whatsappFloat.label}
      className={`fixed bottom-5 ${
        isRtl ? 'left-5' : 'right-5'
      } z-30 inline-flex items-center gap-2.5 h-12 px-4 rounded-full bg-[#25D366] text-[#101010] font-bold text-xs shadow-lg shadow-black/40 hover:bg-[#2be06f] transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white`}
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
