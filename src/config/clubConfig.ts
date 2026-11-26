import { ActivityDefinition, BillingCycle, GalleryPhoto, PlanId } from '../types';

/**
 * BEST FORME – EDITABLE CLUB CONFIGURATION
 * ---------------------------------------------------------------------------
 * Update business contact details, Casablanca address, Google Maps location,
 * opening hours, social links, and official MAD subscription pricing here.
 */
export const CLUB_CONFIG = {
  brandName: 'BEST FORME',
  slogan: 'BEST FORME – BUILD YOUR BEST SELF.',
  city: 'Casablanca',
  country: 'Maroc',

  // Editable Contact Placeholders
  contact: {
    phoneDisplay: '0611234523',
    phoneHref: 'tel:+212611234523',
    whatsappNumber: '212611234523',
    whatsappDisplay: '0611234523',
    email: 'contact@bestforme.ma', // [À remplacer par l'e-mail officiel]
    instagramUrl: 'https://instagram.com/bestforme.casablanca', // [À remplacer]
    facebookUrl: 'https://facebook.com/bestforme.casablanca', // [À remplacer]
    youtubeUrl: 'https://youtube.com/@bestformecasablanca', // [À remplacer]
  },

  // Editable Location & Google Maps Coordinates (Casablanca)
  location: {
    addressPlaceholder: {
      fr: 'Boulevard d’Anfa, Quartier Racine, Casablanca, Maroc (Adresse exacte à compléter)',
      ar: 'شارع أنفا، حي راسين، الدار البيضاء، المغرب (العنوان الكامل قابل للتعديل)',
      en: 'Boulevard d’Anfa, Racine District, Casablanca, Morocco (Exact address placeholder)',
    },
    landmarkPlaceholder: {
      fr: 'À 5 min du Twin Center · Parking membres disponible',
      ar: 'على بعد 5 دقائق من توين سنتر · موقف سيارات خاص بالأعضاء',
      en: '5 min from Twin Center · Member parking available',
    },
    // Update latitude, longitude, and searchQuery with the exact club pin
    latitude: 33.589886,
    longitude: -7.632389,
    mapsQuery: 'Boulevard d Anfa Casablanca Morocco',
  },

  // Editable Opening Hours Placeholders
  openingHours: {
    weekdays: {
      time: '06:00 – 23:00',
    },
    saturday: {
      time: '07:00 – 21:00',
    },
    sunday: {
      time: '08:00 – 18:00',
    },
  },

  // Editable Membership Pricing Placeholders (DO NOT invent real prices)
  // Replace `pricePlaceholder` values with official club rates in MAD when confirmed.
  membershipPlans: {
    basic: {
      id: 'basic' as PlanId,
      featured: false,
      prices: {
        monthly: '[Prix à définir]',
        quarterly: '[Tarif trimestriel à définir]',
        annual: '[Tarif annuel à définir]',
      } as Record<BillingCycle, string>,
      currency: 'MAD',
    },
    premium: {
      id: 'premium' as PlanId,
      featured: true,
      prices: {
        monthly: '[Prix à définir]',
        quarterly: '[Tarif trimestriel à définir]',
        annual: '[Tarif annuel à définir]',
      } as Record<BillingCycle, string>,
      currency: 'MAD',
    },
    vip: {
      id: 'vip' as PlanId,
      featured: false,
      prices: {
        monthly: '[Prix à définir]',
        quarterly: '[Tarif trimestriel à définir]',
        annual: '[Tarif annuel à définir]',
      } as Record<BillingCycle, string>,
      currency: 'MAD',
    },
  },

  // Editable Paid Nutrition Program Pricing Placeholders (DO NOT invent real prices)
  nutritionProgram: {
    isPaid: true,
    currency: 'MAD',
    tracks: {
      weightLoss: {
        pricePlaceholder: '[Tarif payant à définir]',
        durationWeeks: 8,
      },
      muscleGain: {
        pricePlaceholder: '[Tarif payant à définir]',
        durationWeeks: 8,
      },
    },
  },
};

export const CLUB_IMAGES = {
  hero: '/src/assets/images/hero_gym_interior_1795703975973.jpg',
  facility: '/src/assets/images/about_club_facility_clean_1795703993316.jpg',
  nutrition: '/src/assets/images/nutrition_program_1795706929712.jpg',
  musculation: '/src/assets/images/activity_musculation_1795703977468.jpg',
  natation: '/src/assets/images/sport_natation_1795706697679.jpg',
  boxe: '/src/assets/images/sport_boxe_1795706698293.jpg',
  kickboxing: '/src/assets/images/sport_kickboxing_1795706698571.jpg',
  cardio: '/src/assets/images/activity_cardio_1795703977291.jpg',
  groupClasses: '/src/assets/images/activity_group_classes_1795703977622.jpg',
  functional: '/src/assets/images/activity_functional_1795703977503.jpg',
  coaching: '/src/assets/images/activity_personal_coaching_1795703979110.jpg',
  transformation: '/src/assets/images/activity_transformation_1795703979569.jpg',
};

export const ACTIVITIES_DATA: ActivityDefinition[] = [
  { id: 'musculation', image: CLUB_IMAGES.musculation, categoryKey: 'strength' },
  { id: 'natation', image: CLUB_IMAGES.natation, categoryKey: 'cardio' },
  { id: 'boxe', image: CLUB_IMAGES.boxe, categoryKey: 'coaching' },
  { id: 'kickboxing', image: CLUB_IMAGES.kickboxing, categoryKey: 'coaching' },
  { id: 'cardio', image: CLUB_IMAGES.cardio, categoryKey: 'cardio' },
  { id: 'group', image: CLUB_IMAGES.groupClasses, categoryKey: 'coaching' },
  { id: 'functional', image: CLUB_IMAGES.functional, categoryKey: 'strength' },
  { id: 'coaching', image: CLUB_IMAGES.coaching, categoryKey: 'coaching' },
  { id: 'transformation', image: CLUB_IMAGES.transformation, categoryKey: 'cardio' },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'g1', src: CLUB_IMAGES.hero, category: 'club' },
  { id: 'g2', src: CLUB_IMAGES.facility, category: 'club' },
  { id: 'g3', src: CLUB_IMAGES.musculation, category: 'strength' },
  { id: 'g4', src: CLUB_IMAGES.functional, category: 'strength' },
  { id: 'g5', src: CLUB_IMAGES.cardio, category: 'cardio' },
  { id: 'g6', src: CLUB_IMAGES.transformation, category: 'cardio' },
  { id: 'g7', src: CLUB_IMAGES.groupClasses, category: 'coaching' },
  { id: 'g8', src: CLUB_IMAGES.coaching, category: 'coaching' },
  { id: 'g9', src: CLUB_IMAGES.natation, category: 'cardio' },
  { id: 'g10', src: CLUB_IMAGES.boxe, category: 'coaching' },
  { id: 'g11', src: CLUB_IMAGES.kickboxing, category: 'coaching' },
];

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CLUB_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildGoogleMapsEmbedUrl(): string {
  const query = encodeURIComponent(CLUB_CONFIG.location.mapsQuery);
  return `https://maps.google.com/maps?q=${query}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
}

export function buildGoogleMapsDirectionsUrl(): string {
  const { latitude, longitude } = CLUB_CONFIG.location;
  return `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
}
