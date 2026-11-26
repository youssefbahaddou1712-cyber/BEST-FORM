import { useEffect, useState, FormEvent } from 'react';
import { Check, MessageCircle, X, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { CLUB_CONFIG, CLUB_IMAGES, buildWhatsAppUrl } from '../config/clubConfig';
import { BillingCycle, NutritionTrack, PlanId } from '../types';
import { TranslationSchema } from '../i18n/translations';
import { MediaImage } from './MediaImage';

interface MembershipPageProps {
  t: TranslationSchema;
}

const PLAN_ORDER: PlanId[] = ['basic', 'premium', 'vip'];
const CYCLES: BillingCycle[] = ['monthly', 'quarterly', 'annual'];
const NUTRITION_TRACKS: NutritionTrack[] = ['weightLoss', 'muscleGain'];

type SelectionTarget =
  | { kind: 'plan'; planId: PlanId }
  | { kind: 'nutrition'; track: NutritionTrack };

export function MembershipPage({ t }: MembershipPageProps) {
  const [cycle, setCycle] = useState<BillingCycle>('monthly');
  const [nutritionTrack, setNutritionTrack] = useState<NutritionTrack>('weightLoss');
  const [selection, setSelection] = useState<SelectionTarget | null>(null);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [goal, setGoal] = useState(t.membership.goals[0]);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const ArrowIcon = t.dir === 'rtl' ? ArrowLeft : ArrowRight;

  useEffect(() => {
    setGoal(t.membership.goals[0]);
  }, [t.membership.goals]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selection) {
        setSelection(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selection]);

  const openPlanModal = (plan: PlanId) => {
    setSelection({ kind: 'plan', planId: plan });
    setSubmitted(false);
    setFormError(null);
  };

  const openNutritionModal = (track: NutritionTrack) => {
    setSelection({ kind: 'nutrition', track });
    setGoal(
      track === 'weightLoss'
        ? t.membership.goals[1] ?? t.membership.goals[0]
        : t.membership.goals[0]
    );
    setSubmitted(false);
    setFormError(null);
  };

  const handlePlanSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (fullName.trim().length < 2) {
      setFormError(t.contact.errors.nameRequired);
      return;
    }
    if (phone.trim().length < 6) {
      setFormError(t.contact.errors.phoneInvalid);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError(t.contact.errors.emailInvalid);
      return;
    }
    setFormError(null);
    setSubmitted(true);
  };

  const activeNutritionCopy = t.membership.nutrition.tracks[nutritionTrack];
  const activeNutritionConfig = CLUB_CONFIG.nutritionProgram.tracks[nutritionTrack];

  const selectionTitle =
    selection?.kind === 'plan'
      ? t.membership.plans[selection.planId].name
      : selection?.kind === 'nutrition'
      ? t.membership.nutrition.tracks[selection.track].tabLabel
      : '';

  const selectionSubtitleMeta =
    selection?.kind === 'plan'
      ? t.membership.billingCycles[cycle]
      : selection?.kind === 'nutrition'
      ? t.membership.nutrition.durationLabel
      : '';

  return (
    <div className="bg-[#101010] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header & Billing Cycle Control */}
        <div className="space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
                {t.membership.pageKicker}
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
                {t.membership.pageTitle}
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                {t.membership.pageIntro}
              </p>
            </div>

            {/* Interactive Duration Selector */}
            <div
              role="group"
              aria-label={t.membership.cycleLabel}
              className="inline-flex items-center p-1 rounded-lg bg-[#1A1A1A] border border-white/15 self-start lg:self-auto"
            >
              {CYCLES.map((item) => {
                const active = cycle === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCycle(item)}
                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-colors whitespace-nowrap ${
                      active
                        ? 'bg-[#22C55E] text-[#101010]'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {t.membership.billingCycles[item]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Editable Pricing Notice */}
          <div className="p-4 rounded-xl bg-[#1A1A1A] border border-white/10 text-xs sm:text-sm text-neutral-300">
            {t.membership.pricingNotice}
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 items-stretch">
            {PLAN_ORDER.map((planId) => {
              const planConfig = CLUB_CONFIG.membershipPlans[planId];
              const planCopy = t.membership.plans[planId];
              const isFeatured = planConfig.featured;
              const priceLabel = planConfig.prices[cycle];

              return (
                <div
                  key={planId}
                  className={`rounded-xl p-7 sm:p-8 flex flex-col justify-between transition-colors ${
                    isFeatured
                      ? 'bg-[#1F1F1F] border-2 border-[#22C55E] shadow-xl shadow-black/40'
                      : 'bg-[#1A1A1A] border border-white/10'
                  }`}
                >
                  <div className="space-y-6">
                    <div className="space-y-2">
                      {planCopy.kicker && (
                        <p className="text-xs font-bold tracking-wide text-[#22C55E]">
                          {planCopy.kicker}
                        </p>
                      )}
                      <h2 className="font-display text-3xl font-extrabold text-white tracking-tight">
                        {planCopy.name}
                      </h2>
                      <p className="text-sm text-neutral-300 min-h-[2.5rem]">{planCopy.tagline}</p>
                    </div>

                    {/* Placeholder Price Block */}
                    <div className="py-5 border-y border-white/10 space-y-1">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <span className="font-display text-3xl sm:text-4xl font-bold text-white tabular-nums">
                          {priceLabel}
                        </span>
                        <span className="text-sm font-semibold text-[#22C55E]">
                          {planConfig.currency}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-400">
                        {planCopy.durationLabel[cycle]}
                      </p>
                    </div>

                    {/* Included Services */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-neutral-400">
                        {t.membership.includedLabel}
                      </p>
                      <ul className="space-y-2.5 text-sm text-neutral-200">
                        {planCopy.services.map((service) => (
                          <li key={service} className="flex items-start gap-2.5">
                            <Check
                              className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2.5 pt-2">
                      <p className="text-xs font-semibold text-neutral-400">
                        {t.membership.benefitsLabel}
                      </p>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                        {planCopy.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-2">
                            <span aria-hidden="true" className="text-[#22C55E]">
                              ·
                            </span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      type="button"
                      onClick={() => openPlanModal(planId)}
                      className={`w-full py-3.5 px-5 rounded-lg text-sm font-bold transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        isFeatured
                          ? 'bg-[#22C55E] text-[#101010] hover:bg-[#4ADE80]'
                          : 'bg-[#101010] text-white border border-white/20 hover:border-[#22C55E] hover:text-[#22C55E]'
                      }`}
                    >
                      {planCopy.cta}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Paid Nutrition Program Section */}
        <section
          aria-labelledby="nutrition-program-title"
          className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Editorial Sports Nutrition Image */}
            <div className="lg:col-span-5 min-h-[280px] lg:min-h-full bg-[#141414]">
              <MediaImage
                src={CLUB_IMAGES.nutrition}
                alt={t.membership.nutrition.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Paid Nutrition Details & Goal Switcher */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
                    {t.membership.nutrition.kicker}
                  </p>

                  {/* Track Switcher: Weight Loss vs Muscle Gain */}
                  <div
                    role="tablist"
                    aria-label={t.membership.nutrition.title}
                    className="inline-flex items-center p-1 rounded-lg bg-[#101010] border border-white/15 self-start sm:self-auto"
                  >
                    {NUTRITION_TRACKS.map((track) => {
                      const active = nutritionTrack === track;
                      return (
                        <button
                          key={track}
                          type="button"
                          role="tab"
                          aria-selected={active}
                          onClick={() => setNutritionTrack(track)}
                          className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                            active
                              ? 'bg-[#22C55E] text-[#101010]'
                              : 'text-neutral-300 hover:text-white'
                          }`}
                        >
                          {t.membership.nutrition.tracks[track].tabLabel}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2">
                  <h2
                    id="nutrition-program-title"
                    className="font-display text-3xl sm:text-4xl font-extrabold text-white text-balance"
                  >
                    {activeNutritionCopy.title}
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {activeNutritionCopy.summary}
                  </p>
                </div>

                {/* Paid Price Block */}
                <div className="p-4 rounded-lg bg-[#101010] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-[#22C55E]">
                      {t.membership.nutrition.paidLabel}
                    </p>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {t.membership.nutrition.durationLabel}
                    </p>
                  </div>
                  <div className="flex items-baseline gap-1.5 shrink-0">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                      {activeNutritionConfig.pricePlaceholder}
                    </span>
                    <span className="text-xs font-semibold text-[#22C55E]">
                      {CLUB_CONFIG.nutritionProgram.currency}
                    </span>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-neutral-400">
                    {t.membership.nutrition.includedLabel}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-200">
                    {activeNutritionCopy.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <p className="text-xs text-neutral-400">
                  {t.membership.nutrition.paidNotice}
                </p>
                <button
                  type="button"
                  onClick={() => openNutritionModal(nutritionTrack)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#22C55E] text-[#101010] text-sm font-bold hover:bg-[#4ADE80] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <span>{t.membership.nutrition.cta}</span>
                  <ArrowIcon className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Membership / Paid Nutrition Selection Modal */}
      {selection && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="plan-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelection(null)}
        >
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-[#1A1A1A] border border-white/15 p-6 sm:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelection(null)}
              aria-label={t.membership.closeBtn}
              className={`absolute top-4 ${
                t.dir === 'rtl' ? 'left-4' : 'right-4'
              } w-10 h-10 rounded-lg bg-[#101010] border border-white/15 text-neutral-300 hover:text-white flex items-center justify-center`}
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-6 text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 id="plan-modal-title" className="font-display text-2xl font-bold text-white">
                    {t.membership.requestSuccessTitle}
                  </h3>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {t.membership.requestSuccessText}
                  </p>
                </div>

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href={buildWhatsAppUrl(
                      `${selectionTitle} (${selectionSubtitleMeta}) - ${fullName} - ${phone} - ${goal}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#25D366] text-[#101010] text-sm font-bold hover:bg-[#2be06f] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{t.membership.sendWhatsapp}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSelection(null)}
                    className="w-full py-3 px-4 rounded-lg border border-white/15 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
                  >
                    {t.membership.closeBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handlePlanSubmit} className="space-y-5" noValidate>
                <div className="space-y-1.5 pe-8">
                  <h3 id="plan-modal-title" className="font-display text-2xl font-bold text-white">
                    {t.membership.modalTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">{t.membership.modalSubtitle}</p>
                </div>

                <div className="grid grid-cols-2 gap-3 p-3.5 rounded-lg bg-[#101010] border border-white/10 text-xs sm:text-sm">
                  <div>
                    <span className="text-neutral-400 block">{t.membership.selectedPlanLabel}</span>
                    <span className="font-bold text-[#22C55E]">{selectionTitle}</span>
                  </div>
                  <div>
                    <span className="text-neutral-400 block">{t.membership.cycleLabel}</span>
                    <span className="font-semibold text-white">{selectionSubtitleMeta}</span>
                  </div>
                </div>

                {formError && (
                  <p role="alert" className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                    {formError}
                  </p>
                )}

                <div className="space-y-4">
                  <div>
                    <label htmlFor="plan-name" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      {t.membership.nameLabel}
                    </label>
                    <input
                      id="plan-name"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.contact.fullNamePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#101010] border border-white/15 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#22C55E]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="plan-phone" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        {t.membership.phoneLabel}
                      </label>
                      <input
                        id="plan-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={t.contact.phonePlaceholder}
                        dir="ltr"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#101010] border border-white/15 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>

                    <div>
                      <label htmlFor="plan-email" className="block text-xs font-medium text-neutral-300 mb-1.5">
                        {t.membership.emailLabel}
                      </label>
                      <input
                        id="plan-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t.contact.emailPlaceholder}
                        dir="ltr"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#101010] border border-white/15 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#22C55E]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="plan-goal" className="block text-xs font-medium text-neutral-300 mb-1.5">
                      {t.membership.goalLabel}
                    </label>
                    <select
                      id="plan-goal"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#101010] border border-white/15 text-sm text-white focus:outline-none focus:border-[#22C55E]"
                    >
                      {t.membership.goals.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-5 rounded-lg bg-[#22C55E] text-[#101010] text-sm font-bold hover:bg-[#4ADE80] transition-colors"
                  >
                    {t.membership.submitRequest}
                  </button>

                  <a
                    href={buildWhatsAppUrl(
                      `${t.contact.whatsappPrefill} — ${selectionTitle} (${selectionSubtitleMeta})`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg border border-white/20 text-white text-sm font-semibold hover:bg-white/5 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" aria-hidden="true" />
                    <span>{t.membership.sendWhatsapp}</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
