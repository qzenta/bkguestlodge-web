import { PENDING_CONTENT, type Facility } from "./types";

// Confirmed facility list per BKGL-CONTENT-001 §3, approved by Beauty
// Tshabalala 13 Jul 2026 (including the items the draft had marked
// "confirm" — her sign-off on the document as a whole is the
// confirmation). Photos are real where already staged (Braai area,
// Secure parking, confirmed by Daniel 10 Jul 2026).
//
// Pool is deliberately NOT included here: it was discovered in the photo
// intake but was never part of BKGL-CONTENT-001's own list, so Beauty's
// sign-off on that document doesn't cover it — stays pending separately.
export const facilities: Facility[] = [
  {
    icon: "wifi",
    title: "Free Wi-Fi",
    description: "Free Wi-Fi throughout the property.",
    photo: "/images/facilities/wifi.jpg",
  },
  {
    icon: "car",
    title: "Secure on-site parking",
    description: "Secure on-site parking available for all guests.",
    photo: "/images/shared/exterior-pool-parking.jpg",
  },
  {
    icon: "zap",
    title: "Backup power",
    description: "Backup power to keep you covered during load-shedding.",
    photo: "/images/facilities/backup-power.jpg",
  },
  {
    icon: "droplet",
    title: "Backup water supply",
    description: "Backup water supply in place alongside backup power.",
    photo: "/images/facilities/water-supply.jpg",
  },
  {
    icon: "wind",
    title: "Air conditioning / fans",
    description: "Available room-dependent — ask us when booking.",
  },
  {
    icon: "sparkles",
    title: "Daily housekeeping",
    description: "Daily housekeeping included for all guests.",
  },
  {
    icon: "coffee",
    title: "Tea/coffee facilities",
    description: "Tea and coffee facilities in-room.",
  },
  {
    icon: "shirt",
    title: "On-site laundry service",
    description: "On-site laundry service available.",
  },
  {
    icon: "flame",
    title: "Braai area",
    description: "Braai/outdoor area for guests to use.",
    photo: "/images/shared/braai-area.jpg",
  },
  {
    icon: "shield",
    title: "24-hour security",
    description: "24-hour security and access control.",
  },
  {
    icon: "waves",
    title: "Pool",
    description: PENDING_CONTENT,
    photo: "/images/shared/exterior-pool-parking.jpg",
    pending: true,
    newlyDiscovered: true,
  },
];
