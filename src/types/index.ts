export type Language = 'fr' | 'ar' | 'en';

export type PageId = 'home' | 'about' | 'activities' | 'membership' | 'gallery' | 'contact';

export type PlanId = 'basic' | 'premium' | 'vip';

export type NutritionTrack = 'weightLoss' | 'muscleGain';

export type BillingCycle = 'monthly' | 'quarterly' | 'annual';

export type GalleryCategory = 'all' | 'club' | 'strength' | 'cardio' | 'coaching';

export interface ActivityDefinition {
  id: string;
  image: string;
  categoryKey: GalleryCategory;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  category: Exclude<GalleryCategory, 'all'>;
}
