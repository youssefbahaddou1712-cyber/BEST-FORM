import { useEffect } from 'react';
import { ArrowRight, ArrowLeft, Check, MessageCircle, X } from 'lucide-react';
import { ACTIVITIES_DATA, buildWhatsAppUrl } from '../config/clubConfig';
import { PageId } from '../types';
import { TranslationSchema } from '../i18n/translations';
import { MediaImage } from './MediaImage';

interface ActivitiesPageProps {
  t: TranslationSchema;
  selectedActivityId: string | null;
  onSelectActivity: (id: string | null) => void;
  onNavigate: (page: PageId) => void;
}

export function ActivitiesPage({
  t,
  selectedActivityId,
  onSelectActivity,
  onNavigate,
}: ActivitiesPageProps) {
  const ArrowIcon = t.dir === 'rtl' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedActivityId) {
        onSelectActivity(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedActivityId, onSelectActivity]);

  const activeDefinition = selectedActivityId
    ? ACTIVITIES_DATA.find((item) => item.id === selectedActivityId) ?? null
    : null;
  const activeCopy = activeDefinition
    ? t.activities.items[activeDefinition.id as keyof typeof t.activities.items]
    : null;

  return (
    <div className="bg-[#101010] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
            {t.activities.pageKicker}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
            {t.activities.pageTitle}
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {t.activities.pageIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {ACTIVITIES_DATA.map((activity) => {
            const copy =
              t.activities.items[activity.id as keyof typeof t.activities.items];

            return (
              <article
                key={activity.id}
                className="group rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/10 hover:border-[#22C55E]/60 transition-colors flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#141414]">
                  <MediaImage
                    src={activity.image}
                    alt={copy.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between space-y-5">
                  <div className="space-y-2.5">
                    <p className="text-xs text-neutral-400">{copy.meta}</p>
                    <h2 className="text-2xl font-bold text-white">{copy.title}</h2>
                    <p className="text-sm text-neutral-300 leading-relaxed">{copy.shortDesc}</p>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => onSelectActivity(activity.id)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#101010] border border-white/15 text-sm font-semibold text-white hover:bg-[#22C55E] hover:text-[#101010] hover:border-[#22C55E] transition-colors whitespace-nowrap"
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

      {/* Activity Detail Modal */}
      {activeDefinition && activeCopy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="activity-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => onSelectActivity(null)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl bg-[#1A1A1A] border border-white/15 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] bg-[#101010]">
              <MediaImage
                src={activeDefinition.image}
                alt={activeCopy.title}
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent"
              />
              <button
                type="button"
                onClick={() => onSelectActivity(null)}
                aria-label={t.activities.closeLabel}
                className={`absolute top-4 ${
                  t.dir === 'rtl' ? 'left-4' : 'right-4'
                } w-10 h-10 rounded-lg bg-[#101010]/85 border border-white/15 text-white flex items-center justify-center hover:border-[#22C55E] transition-colors`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-medium text-[#22C55E]">{activeCopy.meta}</p>
                <h3 id="activity-modal-title" className="font-display text-3xl font-bold text-white">
                  {activeCopy.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {activeCopy.fullDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-white/10">
                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold tracking-wide text-neutral-400">
                    {t.activities.modalEquipmentLabel}
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-200">
                    {activeCopy.equipment.map((eq) => (
                      <li key={eq} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{eq}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2.5">
                  <h4 className="text-xs font-semibold tracking-wide text-neutral-400">
                    {t.activities.modalBenefitsLabel}
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-200">
                    {activeCopy.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-lg bg-[#101010] border border-white/10 text-sm">
                <div>
                  <span className="text-xs text-neutral-400 block">
                    {t.activities.modalLevelLabel}
                  </span>
                  <span className="text-white font-medium">{activeCopy.level}</span>
                </div>
                <div>
                  <span className="text-xs text-neutral-400 block">
                    {t.activities.modalScheduleLabel}
                  </span>
                  <span className="text-white font-medium">{activeCopy.schedule}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onSelectActivity(null);
                    onNavigate('contact');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#22C55E] text-[#101010] text-sm font-bold hover:bg-[#4ADE80] transition-colors whitespace-nowrap"
                >
                  <span>{t.activities.modalBookTrial}</span>
                  <ArrowIcon className="w-4 h-4" aria-hidden="true" />
                </button>

                <a
                  href={buildWhatsAppUrl(
                    `${t.contact.whatsappPrefill} (${activeCopy.title})`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                  <span>{t.activities.modalWhatsappTrial}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
