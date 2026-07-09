export type Division = "guest-lodge" | "student-accommodation";

// Grep for this string to find every piece of content still awaiting
// client confirmation (BKGL-CONTENT-001). Never replace it with invented
// specifics — only with what the client actually confirms.
export const PENDING_CONTENT = "TODO: pending client content";

export interface RoomType {
  id: string;
  name: string;
  division: Division;
  photo: string;
  price: number | null;
  priceUnit: "night" | "month";
  amenities: string[];
  leaseTerm?: string;
  pending?: boolean;
}

export interface Facility {
  icon: string;
  title: string;
  description: string;
  pending?: boolean;
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
