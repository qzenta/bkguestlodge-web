import type { GalleryImage } from "./types";

// Real photos, confirmed guest-lodge side by Daniel 10 Jul 2026. Room-level
// identification (which room is which type/price) still pending client
// confirmation — alt text intentionally describes what's shown, not a room
// name or price tier. Student Accommodation has no photos yet.
export const galleryImages: GalleryImage[] = [
  { src: "/images/guest-lodge/kitchen.jpg", alt: "Kitchen", division: "guest-lodge" },
  { src: "/images/guest-lodge/lounge.jpg", alt: "Lounge", division: "guest-lodge" },
  { src: "/images/guest-lodge/second-lounge.jpg", alt: "Lounge / study area", division: "guest-lodge" },
  { src: "/images/guest-lodge/self-contained-unit.jpg", alt: "Self-contained unit", division: "guest-lodge" },
  { src: "/images/guest-lodge/bedroom-navy.jpg", alt: "Bedroom", division: "guest-lodge" },
  { src: "/images/guest-lodge/bedroom-brown.jpg", alt: "Bedroom", division: "guest-lodge" },
  { src: "/images/guest-lodge/bedroom-brown-alt.jpg", alt: "Bedroom", division: "guest-lodge" },
  { src: "/images/shared/braai-area.jpg", alt: "Braai area", division: "shared" },
  { src: "/images/shared/exterior-pool-parking.jpg", alt: "Pool and parking area", division: "shared" },
];
