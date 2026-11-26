import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Globe, HeartPulse, MessageCircle } from 'lucide-react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from 'motion/react';
import { CLUB_CONFIG, buildWhatsAppUrl } from '../config/clubConfig';
import { Language, PageId } from '../types';
import { TranslationSchema } from '../i18n/translations';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  language: Language;
  onChangeLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'ar', label: 'AR' },
  { code: 'en', label: 'EN' },
];

export function Navbar({
  currentPage,
  onNavigate,
  language,
  onChangeLanguage,
  t,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<PageId | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress, scrollY } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsScrolled(latest > 24);
    });
    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const navItems: { id: PageId; index: string; label: string; summary: string }[] = [
    { id: 'home', index: '01', label: t.nav.home, summary: t.home.heroSubtitle },
    { id: 'about', index: '02', label: t.nav.about, summary: t.about.pageTitle },
    { id: 'activities', index: '03', label: t.nav.activities, summary: t.activities.pageTitle },
    { id: 'membership', index: '04', label: t.nav.membership, summary: t.membership.pageTitle },
    { id: 'gallery', index: '05', label: t.nav.gallery, summary: t.gallery.pageTitle },
    { id: 'contact', index: '06', label: t.nav.contact, summary: t.contact.pageTitle },
  ];

  const handleSelectPage = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  const ArrowIcon = t.dir === 'rtl' ? ArrowLeft : ArrowRight;
  const activeIndicatorTarget = hoveredNav ?? currentPage;

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#101010]/95 backdrop-blur-xl shadow-lg shadow-black/40'
            : 'bg-[#101010]/75 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Health Icon Logo (no text) */}
          <a
            href="#home"
            aria-label="Accueil"
            onClick={(e) => {
              e.preventDefault();
              handleSelectPage('home');
            }}
            className="group relative inline-flex items-center justify-center w-11 h-11 rounded-xl bg-[#161616] border border-[#22C55E]/40 text-[#22C55E] hover:bg-[#22C55E] hover:text-[#101010] hover:border-[#22C55E] transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
          >
            <HeartPulse
              className="w-6 h-6 transition-transform duration-200 group-hover:scale-110"
              aria-hidden="true"
            />
          </a>

          {/* Zone 2: Architectural Nav Rail with shared spring indicator & vertical slot-roll text */}
          <nav
            aria-label="Primary navigation"
            onMouseLeave={() => setHoveredNav(null)}
            className="hidden lg:flex items-center gap-1 px-1.5 py-1 rounded-xl bg-[#161616]/90 border border-white/10"
          >
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const hasRail = activeIndicatorTarget === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelectPage(item.id);
                  }}
                  onMouseEnter={() => setHoveredNav(item.id)}
                  onFocus={() => setHoveredNav(item.id)}
                  onBlur={() => setHoveredNav(null)}
                  aria-current={isActive ? 'page' : undefined}
                  className="group relative px-3.5 py-2 text-sm font-medium whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
                >
                  {/* Shared-element sliding surface */}
                  {hasRail && (
                    <motion.span
                      layoutId="nav-active-surface"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      aria-hidden="true"
                      className="absolute inset-0 rounded-lg bg-white/[0.07] border border-white/10"
                    />
                  )}

                  {/* Shared-element bottom orange energy bar for the active page */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-bar"
                      transition={{ type: 'spring', stiffness: 460, damping: 32 }}
                      aria-hidden="true"
                      className="absolute inset-x-3 -bottom-[1px] h-[2px] bg-[#22C55E] rounded-full"
                    />
                  )}

                  {/* Kinetic dual-layer slot-roll typography */}
                  <span className="relative z-10 block overflow-hidden h-5 leading-5">
                    <span
                      className={`block transition-transform duration-200 ease-out group-hover:-translate-y-full ${
                        isActive ? 'text-white font-semibold' : 'text-neutral-300'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="block font-semibold text-[#22C55E] transition-transform duration-200 ease-out group-hover:-translate-y-full"
                    >
                      {item.label}
                    </span>
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Sliding Language Selector + Kinetic Primary CTA + Morphing Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <div
              role="group"
              aria-label="Language selector"
              className="hidden sm:flex items-center rounded-lg border border-white/15 bg-[#161616] p-0.5"
            >
              {LANGUAGES.map((lang) => {
                const active = language === lang.code;
                return (
                  <button
                    key={lang.code}
                    type="button"
                    onClick={() => onChangeLanguage(lang.code)}
                    className={`relative px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] ${
                      active ? 'text-[#101010]' : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="lang-active-bg"
                        transition={{ type: 'spring', stiffness: 450, damping: 34 }}
                        aria-hidden="true"
                        className="absolute inset-0 rounded-md bg-[#22C55E]"
                      />
                    )}
                    <span className="relative z-10">{lang.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => handleSelectPage('membership')}
              className="group relative overflow-hidden hidden lg:inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wide rounded-lg bg-[#22C55E] text-[#101010] hover:bg-[#4ADE80] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              <span className="relative z-10">{t.nav.joinCta}</span>
              <ArrowIcon
                className={`relative z-10 w-3.5 h-3.5 transition-transform duration-200 ${
                  t.dir === 'rtl'
                    ? 'group-hover:-translate-x-0.5'
                    : 'group-hover:translate-x-0.5'
                }`}
                aria-hidden="true"
              />
            </button>

            {/* Morphing 2-bar Athletic Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
              className="lg:hidden relative inline-flex flex-col items-center justify-center gap-1.5 w-11 h-11 rounded-lg border border-white/15 bg-[#161616] text-white hover:border-[#22C55E]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="block w-5 h-0.5 bg-white rounded-full origin-center"
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -4, width: 20 }
                    : { rotate: 0, y: 0, width: 14 }
                }
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="block h-0.5 bg-[#22C55E] rounded-full origin-center self-center"
              />
            </button>
          </div>
        </div>

        {/* Bottom Architectural Scroll-Progress Track */}
        <div className="relative h-[2px] w-full bg-white/10">
          <motion.div
            style={{
              scaleX: smoothProgress,
              transformOrigin: t.dir === 'rtl' ? '100% 50%' : '0% 50%',
            }}
            className="h-full w-full bg-[#22C55E]"
          />
        </div>
      </header>

      {/* Full-Screen Staggered Kinetic Curtain Menu (Mobile & Tablet) */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-x-0 top-16 bottom-0 z-30 bg-[#0C0C0C]/98 backdrop-blur-2xl border-t border-white/10 overflow-y-auto"
          >
            <div className="min-h-full flex flex-col justify-between px-5 py-7 space-y-8">
              <nav aria-label="Mobile navigation" className="space-y-1">
                {navItems.map((item, idx) => {
                  const isActive = currentPage === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      initial={{ opacity: 0, x: t.dir === 'rtl' ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.28,
                        delay: idx * 0.045,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSelectPage(item.id);
                      }}
                      className={`group flex items-center justify-between gap-4 py-3.5 px-3 rounded-xl border transition-colors ${
                        isActive
                          ? 'bg-[#1A1A1A] border-[#22C55E]/40'
                          : 'border-transparent hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className="flex items-baseline gap-4 min-w-0">
                        <span
                          className={`font-display text-lg font-bold tabular-nums shrink-0 ${
                            isActive ? 'text-[#22C55E]' : 'text-neutral-500'
                          }`}
                        >
                          {item.index}.
                        </span>
                        <div className="min-w-0">
                          <span
                            className={`block font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${
                              isActive ? 'text-[#22C55E]' : 'text-white'
                            }`}
                          >
                            {item.label}
                          </span>
                          <span className="block text-xs text-neutral-400 truncate max-w-[26ch]">
                            {item.summary}
                          </span>
                        </div>
                      </div>
                      <ArrowIcon
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                          isActive
                            ? 'text-[#22C55E]'
                            : 'text-neutral-500 group-hover:text-white'
                        }`}
                        aria-hidden="true"
                      />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Drawer Footer: Language Switcher + Primary CTA + WhatsApp */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: 0.24 }}
                className="pt-5 border-t border-white/10 space-y-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400">
                    <Globe className="w-4 h-4 text-[#22C55E]" aria-hidden="true" />
                    FR · AR · EN
                  </span>
                  <div className="flex items-center rounded-lg border border-white/15 bg-[#161616] p-0.5">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => onChangeLanguage(lang.code)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                          language === lang.code
                            ? 'bg-[#22C55E] text-[#101010]'
                            : 'text-neutral-300 hover:text-white'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => handleSelectPage('membership')}
                    className="w-full py-3.5 px-4 rounded-lg bg-[#22C55E] text-[#101010] text-sm font-bold hover:bg-[#4ADE80] transition-colors"
                  >
                    {t.nav.joinCta}
                  </button>
                  <a
                    href={buildWhatsAppUrl(t.contact.whatsappPrefill)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg border border-white/20 bg-[#161616] text-white text-sm font-semibold hover:border-[#25D366]/60 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <p className="text-xs text-neutral-500 text-center">
                  {CLUB_CONFIG.location.addressPlaceholder[language]}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
