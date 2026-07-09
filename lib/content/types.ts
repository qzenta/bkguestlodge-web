export type Division = "guest-lodge" | "student-accommodation";

export interface RoomType {
  id: string;
  name: string;
  division: Division;
  photo: string;
  price: number;
  priceUnit: "night" | "month";
  amenities: string[];
  leaseTerm?: string;
}

export interface Facility {
  icon: string;
  title: string;
  description: string;
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
}

export interface GalleryImage {
  src: string;
  alt: string;
  division: Division | "shared";
}
