export type Division = "guest-lodge" | "student-accommodation";

// Grep for this string to find every piece of content still awaiting
// client confirmation (BKGL-CONTENT-001). Never replace it with invented
// specifics — only with what the client actually confirms.
export const PENDING_CONTENT = "TODO: pending client content";

export interface RateOption {
  label: string;
  price: number;
}

export interface RoomType {
  id: string;
  name: string;
  division: Division;
  photo?: string;
  // Guest Lodge: two-tier rate (Sleepover/Day Rest) per BKGL-CONTENT-001 §2.
  rates?: RateOption[];
  // Student Accommodation: single monthly rate (or null while pending).
  price?: number | null;
  priceUnit?: "night" | "month" | "day rest";
  amenities: string[];
  leaseTerm?: string;
  // Whole card unconfirmed (no real data at all yet) — distinct from
  // individual fields (photo, amenities) being unconfirmed while
  // name/price are real. See RoomTypeCard for per-field pending handling.
  pending?: boolean;
}

export interface Facility {
  icon: string;
  title: string;
  description: string;
  photo?: string;
  pending?: boolean;
  newlyDiscovered?: boolean;
}

export interface Testimonial {
  name: string;
  division: Division | "general";
  quote: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: Division | "general";
  pending?: boolean;
}

export interface GalleryImage {
  src: string;
  alt: string;
  division: Division | "shared";
}

export interface Attraction {
  name: string;
  category: string;
  description: string;
  photo?: string;
}
