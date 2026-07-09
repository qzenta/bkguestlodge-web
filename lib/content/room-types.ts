import { PENDING_CONTENT, type RoomType } from "./types";

// No real room types, photos, pricing, or lease terms exist yet
// (BKGL_Content_Draft.md: "repeat per type once real types/photos exist").
// One pending placeholder per division — do not invent room names or prices.
export const roomTypes: RoomType[] = [
  {
    id: "gl-pending",
    name: PENDING_CONTENT,
    division: "guest-lodge",
    photo: "",
    price: null,
    priceUnit: "night",
    amenities: [PENDING_CONTENT],
    pending: true,
  },
  {
    id: "sa-pending",
    name: PENDING_CONTENT,
    division: "student-accommodation",
    photo: "",
    price: null,
    priceUnit: "month",
    leaseTerm: PENDING_CONTENT,
    amenities: [PENDING_CONTENT],
    pending: true,
  },
];
