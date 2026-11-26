import { useEffect, useState, FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import {
  CLUB_CONFIG,
  buildGoogleMapsDirectionsUrl,
  buildGoogleMapsEmbedUrl,
  buildWhatsAppUrl,
} from '../config/clubConfig';
import { Language } from '../types';
import { TranslationSchema } from '../i18n/translations';

interface ContactPageProps {
  t: TranslationSchema;
  language: Language;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactPage({ t, language }: ContactPageProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(t.contact.topics[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setTopic(t.contact.topics[0]);
  }, [t.contact.topics]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 2) {
      nextErrors.fullName = t.contact.errors.nameRequired;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = t.contact.errors.emailInvalid;
    }
    const cleanDigits = phone.replace(/[\s\-().+]/g, '');
    if (cleanDigits.length < 8) {
      nextErrors.phone = t.contact.errors.phoneInvalid;
    }
    if (message.trim().length < 10) {
      nextErrors.message = t.contact.errors.messageRequired;
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 300);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="bg-[#101010] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold tracking-wide text-[#22C55E]">
            {t.contact.pageKicker}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-balance">
            {t.contact.pageTitle}
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            {t.contact.pageIntro}
          </p>
        </div>

        {/* Form + Direct Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#1A1A1A] border border-white/10">
            {submitted ? (
              <div className="py-10 text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-[#22C55E]/15 text-[#22C55E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2 max-w-md mx-auto">
                  <h2 className="font-display text-3xl font-bold text-white">
                    {t.contact.successTitle}
                  </h2>
                  <p className="text-sm text-neutral-300 leading-relaxed">
                    {t.contact.successBody}
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={buildWhatsAppUrl(
                      `${t.contact.whatsappPrefill} — ${fullName} (${topic})`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#25D366] text-[#101010] text-sm font-bold hover:bg-[#2be06f] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>{t.contact.whatsappCardBtn}</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-3 rounded-lg border border-white/20 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
                  >
                    {t.contact.resetFormBtn}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="space-y-1">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {t.contact.formTitle}
                  </h2>
                  <p className="text-sm text-neutral-400">{t.contact.formSubtitle}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-neutral-300 mb-1.5"
                    >
                      {t.contact.fullNameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.contact.fullNamePlaceholder}
                      aria-invalid={Boolean(errors.fullName)}
                      className="w-full px-3.5 py-3 rounded-lg bg-[#101010] border border-white/15 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#22C55E]"
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-medium text-neutral-300 mb-1.5"
                    >
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contact.phonePlaceholder}
                      dir="ltr"
                      aria-invalid={Boolean(errors.phone)}
                      className="w-full px-3.5 py-3 rounded-lg bg-[#101010] border border-white/15 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#22C55E]"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-neutral-300 mb-1.5"
                    >
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.emailPlaceholder}
                      dir="ltr"
                      aria-invalid={Boolean(errors.email)}
                      className="w-full px-3.5 py-3 rounded-lg bg-[#101010] border border-white/15 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#22C55E]"
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-topic"
                      className="block text-xs font-medium text-neutral-300 mb-1.5"
                    >
                      {t.contact.topicLabel}
                    </label>
                    <select
                      id="contact-topic"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3.5 py-3 rounded-lg bg-[#101010] border border-white/15 text-sm text-white focus:outline-none focus:border-[#22C55E]"
                    >
                      {t.contact.topics.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-neutral-300 mb-1.5"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.messagePlaceholder}
                    aria-invalid={Boolean(errors.message)}
                    className="w-full px-3.5 py-3 rounded-lg bg-[#101010] border border-white/15 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#22C55E]"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-[#22C55E] text-[#101010] text-sm font-bold hover:bg-[#4ADE80] disabled:opacity-60 transition-colors"
                >
                  {isSubmitting ? t.contact.submittingBtn : t.contact.submitBtn}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Prominent WhatsApp CTA + Direct Contact + Opening Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Prominent WhatsApp Card */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#1A1A1A] border border-[#25D366]/40 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-bold text-white">{t.contact.whatsappCardTitle}</h2>
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {t.contact.whatsappCardDesc}
              </p>
              <a
                href={buildWhatsAppUrl(t.contact.whatsappPrefill)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-lg bg-[#25D366] text-[#101010] text-sm font-bold hover:bg-[#2be06f] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>{t.contact.whatsappCardBtn}</span>
              </a>
            </div>

            {/* Direct Info */}
            <div className="p-6 sm:p-7 rounded-xl bg-[#1A1A1A] border border-white/10 space-y-5">
              <h2 className="text-lg font-bold text-white">{t.contact.directTitle}</h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#22C55E] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-neutral-400">{t.contact.phoneTitle}</p>
                    <a
                      href={CLUB_CONFIG.contact.phoneHref}
                      className="text-white font-medium hover:text-[#22C55E] transition-colors tabular-nums"
                      dir="ltr"
                    >
                      {CLUB_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#22C55E] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-neutral-400">{t.contact.emailTitle}</p>
                    <a
                      href={`mailto:${CLUB_CONFIG.contact.email}`}
                      className="text-white font-medium hover:text-[#22C55E] transition-colors"
                    >
                      {CLUB_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#22C55E] shrink-0 mt-1" aria-hidden="true" />
                  <div className="space-y-1">
                    <p className="text-xs text-neutral-400">{t.contact.addressTitle}</p>
                    <p className="text-white font-medium">
                      {CLUB_CONFIG.location.addressPlaceholder[language]}
                    </p>
                    <p className="text-xs text-neutral-400">
                      {CLUB_CONFIG.location.landmarkPlaceholder[language]}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Clock className="w-4 h-4 text-[#22C55E]" aria-hidden="true" />
                  <span>{t.contact.hoursTitle}</span>
                </div>
                <div className="space-y-2 text-sm tabular-nums">
                  {t.contact.hoursRows.map((row) => (
                    <div
                      key={row.day}
                      className="flex items-center justify-between text-neutral-300"
                    >
                      <span>{row.day}</span>
                      <span className="font-medium text-white" dir="ltr">
                        {row.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Integration (Editable Location via clubConfig) */}
        <section className="rounded-xl overflow-hidden bg-[#1A1A1A] border border-white/10">
          <div className="p-6 sm:p-7 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h2 className="font-display text-2xl font-bold text-white">{t.contact.mapTitle}</h2>
              <p className="text-xs text-neutral-400">{t.contact.mapPlaceholderNote}</p>
            </div>
            <a
              href={buildGoogleMapsDirectionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/20 text-xs sm:text-sm font-semibold text-white hover:border-[#22C55E] hover:text-[#22C55E] transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <span>{t.contact.mapDirectionsBtn}</span>
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
          <div className="w-full h-[340px] sm:h-[420px] bg-[#141414]">
            <iframe
              title="BEST FORME Casablanca Google Map"
              src={buildGoogleMapsEmbedUrl()}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 grayscale contrast-125 opacity-90"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
