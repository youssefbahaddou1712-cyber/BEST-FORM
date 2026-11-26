import { ArrowRight, ArrowLeft, MessageCircle, Quote } from 'lucide-react';
import { ACTIVITIES_DATA, CLUB_IMAGES, buildWhatsAppUrl } from '../config/clubConfig';
import { PageId } from '../types';
import { TranslationSchema } from '../i18n/translations';
import { MediaImage } from './MediaImage';
import { HeroSportsCarousel } from './HeroSportsCarousel';

interface HomePageProps {
  t: TranslationSchema;
  onNavigate: (page: PageId) => void;
  onSelectActivity: (activityId: string) => void;
}

export function HomePage({ t, onNavigate, onSelectActivity }: HomePageProps) {
  const ArrowIcon = t.dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div>
      {/* 1. Full-Screen Hero + Top Sports Carousel */}
      <section className="relative min-h-[84vh] flex items-center overflow-hidden bg-[#101010]">
        <div className="absolute inset-0">
          <MediaImage
            src={CLUB_IMAGES.hero}
            alt="BEST FORME Casablanca Fitness Club"
            loading="eager"
            className="w-full h-full object-cover object-center opacity-45"
          />
          <div
            aria-hidden="true"
            className={`absolute inset-0 ${
              t.dir === 'rtl'
                ? 'bg-gradient-to-l from-[#101010] via-[#101010]/85 to-[#101010]/65'
                : 'bg-gradient-to-r from-[#101010] via-[#101010]/85 to-[#101010]/65'
            }`}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-[#101010]/50"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Hero Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#22C55E]">
                {t.home.locationKicker}
              </p>

              <h1 className="font-display font-extrabold text-white tracking-tight leading-[0.98] text-balance text-[clamp(2.4rem,4.5vw,4.15rem)]">
                {t.home.heroHeadline}
              </h1>

              <p className="text-base sm:text-xl text-neutral-200 leading-relaxed max-w-xl">
                {t.home.heroSubtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('membership')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#22C55E] text-[#101010] text-sm font-bold hover:bg-[#4ADE80] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{t.home.ctaOffers}</span>
                  <ArrowIcon className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg border border-white/25 bg-[#101010]/60 backdrop-blur-sm text-white text-sm font-semibold hover:bg-white/10 hover:border-white/40 transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E]"
                >
                  <span>{t.home.ctaJoin}</span>
                </button>
              </div>
            </div>

            {/* Interactive 6-Sport Gym Carousel */}
            <div className="lg:col-span-6">
              <HeroSportsCarousel t={t} onSelectActivity={onSelectActivity} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Club Metrics Strip */}
      <section className="bg-[#141414] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {t.home.metrics.map((metric) => (
              <div key={metric.label} className="space-y-1">
                <p className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                  {metric.value}
                </p>
                <p className="text-xs sm:text-sm text-neutral-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Club Presentation Split */}
      <section className="bg-[#101010] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
              <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
                {t.home.introKicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight text-balance">
                {t.home.introTitle}
              </h2>
              <p className="text-base text-neutral-300 leading-relaxed">{t.home.introText}</p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#22C55E] hover:text-[#4ADE80] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22C55E] rounded-sm"
                >
                  <span>{t.home.introLink}</span>
                  <ArrowIcon className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="h-full min-h-[300px] lg:min-h-[420px] rounded-xl overflow-hidden border border-white/10 bg-[#1A1A1A]">
                <MediaImage
                  src={CLUB_IMAGES.facility}
                  alt="BEST FORME Casablanca Interior Lounge and Strength Zone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Key Benefits */}
      <section className="bg-[#1A1A1A] py-20 lg:py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
              {t.home.benefitsKicker}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
              {t.home.benefitsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.home.benefitsList.map((item) => (
              <div
                key={item.index}
                className="p-6 rounded-xl bg-[#101010] border border-white/10 space-y-3"
              >
                <span className="font-display text-2xl font-bold text-[#22C55E] tabular-nums block">
                  {item.index}.
                </span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Training Categories Preview */}
      <section className="bg-[#101010] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
                {t.home.activitiesKicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
                {t.home.activitiesTitle}
              </h2>
              <p className="text-base text-neutral-300">{t.home.activitiesSubtitle}</p>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('activities')}
              className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-2.5 rounded-lg border border-white/20 text-sm font-semibold text-white hover:border-[#22C55E] hover:text-[#22C55E] transition-colors whitespace-nowrap shrink-0"
            >
              <span>{t.home.activitiesViewAll}</span>
              <ArrowIcon className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTIVITIES_DATA.map((act) => {
              const copy =
                t.activities.items[act.id as keyof typeof t.activities.items];
              return (
                <article
                  key={act.id}
                  className="group rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/10 hover:border-[#22C55E]/50 transition-colors flex flex-col"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#141414]">
                    <MediaImage
                      src={act.image}
                      alt={copy.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                    <div className="space-y-2">
                      <p className="text-xs text-neutral-400">{copy.meta}</p>
                      <h3 className="text-xl font-bold text-white">{copy.title}</h3>
                      <p className="text-sm text-neutral-300 leading-relaxed">
                        {copy.shortDesc}
                      </p>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => onSelectActivity(act.id)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#22C55E] hover:text-[#4ADE80] transition-colors"
                      >
                        <span>{t.activities.discoverBtn}</span>
                        <ArrowIcon className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Featured Facilities */}
      <section className="bg-[#1A1A1A] py-20 lg:py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
              {t.home.facilitiesKicker}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
              {t.home.facilitiesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.home.facilities.map((facility) => (
              <div
                key={facility.name}
                className="p-7 rounded-xl bg-[#101010] border border-white/10 space-y-2.5"
              >
                <p className="text-xs font-medium text-[#22C55E]">{facility.spec}</p>
                <h3 className="text-xl font-bold text-white">{facility.name}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="bg-[#101010] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
              {t.home.testimonialsKicker}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
              {t.home.testimonialsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {t.home.testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="p-7 rounded-xl bg-[#1A1A1A] border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <Quote className="w-6 h-6 text-[#22C55E]" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                    “{item.quote}”
                  </p>
                </div>
                <footer className="pt-4 border-t border-white/10 space-y-1">
                  <p className="text-sm font-bold text-white">{item.name}</p>
                  <p className="text-xs text-neutral-400">{item.role}</p>
                  <p className="text-xs font-medium text-[#22C55E] tabular-nums">
                    {item.outcome}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Paid Nutrition Program Showcase */}
      <section className="bg-[#1A1A1A] border-t border-white/10 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden bg-[#101010] border border-white/10 grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 min-h-[240px] bg-[#141414]">
              <MediaImage
                src={CLUB_IMAGES.nutrition}
                alt={t.home.nutritionBanner.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-center space-y-4">
              <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
                {t.home.nutritionBanner.kicker}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
                {t.home.nutritionBanner.title}
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl">
                {t.home.nutritionBanner.desc}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('membership')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#22C55E] text-[#101010] text-sm font-bold hover:bg-[#4ADE80] transition-colors whitespace-nowrap"
                >
                  <span>{t.home.nutritionBanner.cta}</span>
                  <ArrowIcon className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Membership Final CTA */}
      <section className="bg-[#1A1A1A] border-t border-white/10 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight text-balance">
            {t.home.finalCtaTitle}
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            {t.home.finalCtaSubtitle}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('membership')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#22C55E] text-[#101010] text-sm font-bold hover:bg-[#4ADE80] transition-colors whitespace-nowrap"
            >
              <span>{t.home.finalCtaPrimary}</span>
              <ArrowIcon className="w-4 h-4" aria-hidden="true" />
            </button>

            <a
              href={buildWhatsAppUrl(t.contact.whatsappPrefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
              <span>{t.home.finalCtaWhatsapp}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
