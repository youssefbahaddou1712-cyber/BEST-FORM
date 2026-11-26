import { useEffect, useState, useCallback } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ACTIVITIES_DATA } from '../config/clubConfig';
import { TranslationSchema } from '../i18n/translations';
import { MediaImage } from './MediaImage';

interface HeroSportsCarouselProps {
  t: TranslationSchema;
  onSelectActivity: (activityId: string) => void;
}

const AUTOPLAY_INTERVAL_MS = 4500;

export function HeroSportsCarousel({ t, onSelectActivity }: HeroSportsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const totalSports = ACTIVITIES_DATA.length;
  const activeSport = ACTIVITIES_DATA[activeIndex];
  const activeCopy =
    t.activities.items[activeSport.id as keyof typeof t.activities.items];

  const ArrowIcon = t.dir === 'rtl' ? ArrowLeft : ArrowRight;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSports);
  }, [totalSports]);

  const goPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSports) % totalSports);
  }, [totalSports]);

  useEffect(() => {
    if (isPaused || isHovered) return;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      goNext();
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [isPaused, isHovered, goNext]);

  return (
    <div
      className="w-full space-y-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-roledescription="carousel"
      aria-label={t.activities.pageTitle}
    >
      {/* Main Active Sport Viewport */}
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-white/15 bg-[#161616] shadow-2xl shadow-black/60">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSport.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <MediaImage
              src={activeSport.image}
              alt={activeCopy.title}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Measured Scrim for Text Contrast */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#101010]/95 via-[#101010]/30 to-[#101010]/45 pointer-events-none"
        />

        {/* Top Bar inside Viewport: Index Counter + Controls */}
        <div className="absolute top-3.5 inset-x-3.5 z-10 flex items-center justify-between gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-[#101010]/80 backdrop-blur-md border border-white/15 text-xs font-bold tabular-nums text-white">
            <span className="text-[#22C55E]">
              {String(activeIndex + 1).padStart(2, '0')}
            </span>{' '}
            <span className="text-neutral-400">/</span>{' '}
            <span>{String(totalSports).padStart(2, '0')}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Play' : 'Pause'}
              className="w-9 h-9 rounded-lg bg-[#101010]/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:border-[#22C55E] hover:text-[#22C55E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
            >
              {isPaused ? (
                <Play className="w-3.5 h-3.5" aria-hidden="true" />
              ) : (
                <Pause className="w-3.5 h-3.5" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={t.dir === 'rtl' ? goNext : goPrev}
              aria-label={t.dir === 'rtl' ? t.gallery.nextLabel : t.gallery.prevLabel}
              className="w-9 h-9 rounded-lg bg-[#101010]/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:border-[#22C55E] hover:text-[#22C55E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={t.dir === 'rtl' ? goPrev : goNext}
              aria-label={t.dir === 'rtl' ? t.gallery.prevLabel : t.gallery.nextLabel}
              className="w-9 h-9 rounded-lg bg-[#101010]/80 backdrop-blur-md border border-white/15 text-white flex items-center justify-center hover:border-[#22C55E] hover:text-[#22C55E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Bottom Caption Overlay */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6 flex items-end justify-between gap-4">
          <div className="space-y-1 min-w-0">
            <p className="text-xs font-semibold text-[#22C55E] truncate">
              {activeCopy.meta}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight truncate">
              {activeCopy.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onSelectActivity(activeSport.id)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#22C55E] text-[#101010] text-xs font-bold hover:bg-[#4ADE80] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>{t.activities.discoverBtn}</span>
            <ArrowIcon className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Sport Thumbnail Rail (Exact Count = Available Sports) */}
      <div
        role="tablist"
        aria-label={t.activities.pageKicker}
        className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-1.5"
      >
        {ACTIVITIES_DATA.map((sport, index) => {
          const copy =
            t.activities.items[sport.id as keyof typeof t.activities.items];
          const isActive = index === activeIndex;

          return (
            <button
              key={sport.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={copy.title}
              title={copy.title}
              onClick={() => setActiveIndex(index)}
              className={`group relative aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] ${
                isActive
                  ? 'border-[#22C55E] ring-1 ring-[#22C55E]/60 scale-[1.02]'
                  : 'border-white/10 opacity-65 hover:opacity-100 hover:border-white/30'
              }`}
            >
              <MediaImage
                src={sport.image}
                alt={copy.title}
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
              />
              <span
                className={`absolute bottom-1 inset-x-1 text-[10px] font-semibold truncate text-center ${
                  isActive ? 'text-[#22C55E]' : 'text-neutral-200'
                }`}
              >
                {copy.title.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
