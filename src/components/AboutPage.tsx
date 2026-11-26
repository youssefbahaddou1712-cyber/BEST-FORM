import { ArrowRight, ArrowLeft } from 'lucide-react';
import { CLUB_IMAGES } from '../config/clubConfig';
import { PageId } from '../types';
import { TranslationSchema } from '../i18n/translations';
import { MediaImage } from './MediaImage';

interface AboutPageProps {
  t: TranslationSchema;
  onNavigate: (page: PageId) => void;
}

export function AboutPage({ t, onNavigate }: AboutPageProps) {
  const ArrowIcon = t.dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="bg-[#101010]">
      {/* Page Header */}
      <section className="py-16 lg:py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
              {t.about.pageKicker}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
              {t.about.pageTitle}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              {t.about.pageIntro}
            </p>
          </div>

          <div className="aspect-[16/9] max-h-[520px] w-full rounded-xl overflow-hidden border border-white/10 bg-[#1A1A1A]">
            <MediaImage
              src={CLUB_IMAGES.facility}
              alt="BEST FORME Casablanca Fitness Club Interior"
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Philosophy, Mission, Values */}
      <section className="py-20 bg-[#1A1A1A] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.about.pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="p-8 rounded-xl bg-[#101010] border border-white/10 space-y-4"
              >
                <span className="font-display text-3xl font-bold text-[#22C55E] tabular-nums block">
                  {pillar.index}.
                </span>
                <h2 className="text-2xl font-bold text-white">{pillar.title}</h2>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose BEST FORME */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
              {t.about.whyKicker}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
              {t.about.whyTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.about.whyItems.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-xl bg-[#1A1A1A] border border-white/10 space-y-2"
              >
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Coaching */}
      <section className="py-20 bg-[#1A1A1A] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
                {t.about.coachingKicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
                {t.about.coachingTitle}
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed">
                {t.about.coachingDesc}
              </p>
            </div>
            <div className="lg:col-span-6">
              <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#101010]">
                <MediaImage
                  src={CLUB_IMAGES.coaching}
                  alt={t.about.coachingTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.about.coaches.map((coach) => (
              <div
                key={coach.name}
                className="p-6 rounded-xl bg-[#101010] border border-white/10 space-y-2.5"
              >
                <p className="text-xs font-medium text-[#22C55E]">{coach.languages}</p>
                <h3 className="text-xl font-bold text-white">{coach.name}</h3>
                <p className="text-sm font-medium text-neutral-200">{coach.role}</p>
                <p className="text-sm text-neutral-400">{coach.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcoming Atmosphere CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
            {t.about.atmosphereTitle}
          </h2>
          <p className="text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
            {t.about.atmosphereDesc}
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#22C55E] text-[#101010] text-sm font-bold hover:bg-[#4ADE80] transition-colors whitespace-nowrap"
            >
              <span>{t.about.atmosphereCta}</span>
              <ArrowIcon className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
