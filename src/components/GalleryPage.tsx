import { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { GALLERY_PHOTOS } from '../config/clubConfig';
import { GalleryCategory } from '../types';
import { TranslationSchema } from '../i18n/translations';
import { MediaImage } from './MediaImage';

interface GalleryPageProps {
  t: TranslationSchema;
}

const CATEGORIES: GalleryCategory[] = ['all', 'club', 'strength', 'cardio', 'coaching'];

export function GalleryPage({ t }: GalleryPageProps) {
  const [filter, setFilter] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visiblePhotos =
    filter === 'all'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === filter);

  const goPrev = useCallback(() => {
    setLightboxIndex((idx) => {
      if (idx === null) return null;
      return (idx - 1 + visiblePhotos.length) % visiblePhotos.length;
    });
  }, [visiblePhotos.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((idx) => {
      if (idx === null) return null;
      return (idx + 1) % visiblePhotos.length;
    });
  }, [visiblePhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') {
        if (t.dir === 'rtl') goNext();
        else goPrev();
      }
      if (e.key === 'ArrowRight') {
        if (t.dir === 'rtl') goPrev();
        else goNext();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext, t.dir]);

  const activePhoto = lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null;
  const activeCopy = activePhoto ? t.gallery.photos[activePhoto.id] : null;

  return (
    <div className="bg-[#101010] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
              {t.gallery.pageKicker}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
              {t.gallery.pageTitle}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              {t.gallery.pageIntro}
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="group"
            aria-label="Gallery category filter"
            className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#1A1A1A] border border-white/15 self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setFilter(category);
                    setLightboxIndex(null);
                  }}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                    active
                      ? 'bg-[#22C55E] text-[#101010]'
                      : 'text-neutral-300 hover:text-white'
                  }`}
                >
                  {t.gallery.filters[category]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePhotos.map((photo, index) => {
            const copy = t.gallery.photos[photo.id];
            const isHeroSpan = filter === 'all' && index === 0;

            return (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className={`group relative text-start rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/10 hover:border-[#22C55E]/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] ${
                  isHeroSpan ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <MediaImage
                  src={photo.src}
                  alt={copy.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
                />
                <div
                  className={`absolute top-4 ${
                    t.dir === 'rtl' ? 'left-4' : 'right-4'
                  } w-9 h-9 rounded-lg bg-[#101010]/75 border border-white/15 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`}
                >
                  <Expand className="w-4 h-4" aria-hidden="true" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 space-y-1">
                  <p className="text-xs font-medium text-[#22C55E]">
                    {t.gallery.filters[photo.category]}
                  </p>
                  <h2 className="text-lg font-bold text-white">{copy.title}</h2>
                  <p className="text-xs text-neutral-300 line-clamp-1">{copy.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && activeCopy && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeCopy.title}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-sm text-neutral-300 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="tabular-nums font-semibold text-white">
              {String(lightboxIndex + 1).padStart(2, '0')} /{' '}
              {String(visiblePhotos.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label={t.gallery.closeLabel}
              className="w-11 h-11 rounded-lg bg-[#1A1A1A] border border-white/15 text-white flex items-center justify-center hover:border-[#22C55E]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image & Controls */}
          <div
            className="relative flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={t.dir === 'rtl' ? goNext : goPrev}
              aria-label={t.dir === 'rtl' ? t.gallery.nextLabel : t.gallery.prevLabel}
              className="absolute start-2 sm:start-4 z-10 w-11 h-11 rounded-lg bg-[#101010]/85 border border-white/20 text-white flex items-center justify-center hover:border-[#22C55E] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="max-h-[72vh] max-w-full rounded-xl overflow-hidden border border-white/10 bg-[#141414]">
              <MediaImage
                src={activePhoto.src}
                alt={activeCopy.title}
                loading="eager"
                className="max-h-[72vh] w-auto object-contain"
              />
            </div>

            <button
              type="button"
              onClick={t.dir === 'rtl' ? goPrev : goNext}
              aria-label={t.dir === 'rtl' ? t.gallery.prevLabel : t.gallery.nextLabel}
              className="absolute end-2 sm:end-4 z-10 w-11 h-11 rounded-lg bg-[#101010]/85 border border-white/20 text-white flex items-center justify-center hover:border-[#22C55E] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Caption */}
          <div
            className="max-w-3xl mx-auto text-center space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold text-white">{activeCopy.title}</h3>
            <p className="text-xs sm:text-sm text-neutral-400">{activeCopy.subtitle}</p>
          </div>
        </div>
      )}
    </div>
  );
}
