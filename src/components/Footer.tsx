import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, HeartPulse } from 'lucide-react';
import { CLUB_CONFIG } from '../config/clubConfig';
import { Language, PageId } from '../types';
import { TranslationSchema } from '../i18n/translations';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  language: Language;
  t: TranslationSchema;
}

export function Footer({ onNavigate, language, t }: FooterProps) {
  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'activities', label: t.nav.activities },
    { id: 'membership', label: t.nav.membership },
    { id: 'gallery', label: t.nav.gallery },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <a
              href="#home"
              aria-label="Accueil"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#161616] border border-[#22C55E]/40 text-[#22C55E] hover:bg-[#22C55E] hover:text-[#101010] transition-colors"
            >
              <HeartPulse className="w-6 h-6" aria-hidden="true" />
            </a>
            <p className="text-sm font-semibold text-white tracking-wide">{t.footer.tagline}</p>
            <p className="text-xs text-neutral-400 leading-relaxed">{t.footer.casablancaTag}</p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={CLUB_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg border border-white/10 bg-[#1A1A1A] flex items-center justify-center text-neutral-300 hover:text-[#22C55E] hover:border-[#22C55E]/50 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLUB_CONFIG.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg border border-white/10 bg-[#1A1A1A] flex items-center justify-center text-neutral-300 hover:text-[#22C55E] hover:border-[#22C55E]/50 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={CLUB_CONFIG.contact.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg border border-white/10 bg-[#1A1A1A] flex items-center justify-center text-neutral-300 hover:text-[#22C55E] hover:border-[#22C55E]/50 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">{t.footer.navTitle}</h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">{t.footer.contactTitle}</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CLUB_CONFIG.location.addressPlaceholder[language]}</span>
              </li>
              <li>
                <a
                  href={CLUB_CONFIG.contact.phoneHref}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors tabular-nums"
                  dir="ltr"
                >
                  <Phone className="w-4 h-4 text-[#22C55E] shrink-0" aria-hidden="true" />
                  <span>{CLUB_CONFIG.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLUB_CONFIG.contact.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#22C55E] shrink-0" aria-hidden="true" />
                  <span>{CLUB_CONFIG.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">{t.footer.hoursTitle}</h3>
            <div className="space-y-2 text-sm text-neutral-400 tabular-nums">
              {t.contact.hoursRows.map((row) => (
                <div key={row.day} className="flex items-center justify-between gap-4 border-b border-white/5 pb-2">
                  <span>{row.day}</span>
                  <span className="text-neutral-200 font-medium" dir="ltr">
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} BEST FORME Casablanca. {t.footer.rights}
          </p>
          <p>{t.footer.hoursSummary}</p>
        </div>
      </div>
    </footer>
  );
}
