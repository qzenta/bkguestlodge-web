import { PENDING_CONTENT, type RoomType } from "./types";

// Guest Lodge rates confirmed by client 10 Jul 2026: R600 sleepover,
// R450 day rest. These are rate packages (stay duration), not named
// rooms — nothing confirms they're tied to a specific bedroom, so no
// photo is attached here rather than guessing which of the real bedroom
// photos (see public/images/guest-lodge/) goes with which rate.
// Amenities per package still unconfirmed.
//
// Student Accommodation has no real data yet — division doesn't launch
// until January 2027 (client-confirmed), so a placeholder stays correct
// here regardless of anything else being resolved.
export const roomTypes: RoomType[] = [
  {
    id: "gl-sleepover",
    name: "Sleepover",
    division: "guest-lodge",
    price: 600,
    priceUnit: "night",
    amenities: [PENDING_CONTENT],
  },
  {
    id: "gl-day-rest",
    name: "Day Rest",
    division: "guest-lodge",
    price: 450,
    priceUnit: "day rest",
    amenities: [PENDING_CONTENT],
  },
  {
    id: "sa-pending",
    name: PENDING_CONTENT,
    division: "student-accommodation",
    price: null,
    priceUnit: "month",
    leaseTerm: PENDING_CONTENT,
    amenities: [PENDING_CONTENT],
    pending: true,
  },
];
