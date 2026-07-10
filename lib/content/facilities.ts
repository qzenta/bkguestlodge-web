import { PENDING_CONTENT, type Facility } from "./types";

// Draft list from BKGL_Content_Draft.md — every item was bracketed
// ("pending final list" / "not yet verified complete"). Photos below are
// real (guest-lodge side, confirmed by Daniel 10 Jul 2026), but
// descriptions stay PENDING_CONTENT until the client confirms actual copy —
// a photo proves the facility exists, not what we're allowed to say about it.
export const facilities: Facility[] = [
  {
    icon: "flame",
    title: "Braai area",
    description: PENDING_CONTENT,
    photo: "/images/shared/braai-area.jpg",
    pending: true,
  },
  {
    icon: "car",
    title: "Secure parking",
    description: PENDING_CONTENT,
    photo: "/images/shared/exterior-pool-parking.jpg",
    pending: true,
  },
  { icon: "zap", title: "Backup water/power", description: PENDING_CONTENT, pending: true },
  { icon: "wifi", title: "Wi-Fi", description: PENDING_CONTENT, pending: true },
  { icon: "shirt", title: "Laundry facilities", description: PENDING_CONTENT, pending: true },
  { icon: "book-open", title: "Communal study/common area", description: PENDING_CONTENT, pending: true },
  {
    icon: "waves",
    title: "Pool",
    description: PENDING_CONTENT,
    photo: "/images/shared/exterior-pool-parking.jpg",
    pending: true,
    newlyDiscovered: true,
  },
];
