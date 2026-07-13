import { PENDING_CONTENT, type RoomType } from "./types";

// Guest Lodge room categories per BKGL-CONTENT-001 §2, approved by Beauty
// Tshabalala 13 Jul 2026. Real client-confirmed pricing: R600 sleepover
// (overnight), R450 day rest (daytime-only) — a two-tier rate applied
// uniformly across all 7 rooms, since no per-category price
// differentiation was given. Category labels are used rather than named
// rooms since individual room identification (which of the 7 staged
// photos belongs to which category) is still open — once Beauty confirms
// that mapping, this can collapse back to real named rooms. Photos stay
// unattached here for the same reason.
export const roomTypes: RoomType[] = [
  {
    id: "gl-standard",
    name: "Standard Room",
    division: "guest-lodge",
    rates: [
      { label: "Sleepover (overnight)", price: 600 },
      { label: "Day Rest (daytime only)", price: 450 },
    ],
    amenities: ["Single/double occupancy, en-suite bathroom, basic furnishings"],
  },
  {
    id: "gl-standard-twin",
    name: "Standard Room (Twin)",
    division: "guest-lodge",
    rates: [
      { label: "Sleepover (overnight)", price: 600 },
      { label: "Day Rest (daytime only)", price: 450 },
    ],
    amenities: ["Two single beds, en-suite bathroom"],
  },
  {
    id: "gl-deluxe",
    name: "Deluxe Room",
    division: "guest-lodge",
    rates: [
      { label: "Sleepover (overnight)", price: 600 },
      { label: "Day Rest (daytime only)", price: 450 },
    ],
    amenities: ["Larger room, additional furnishings (desk/seating area), en-suite"],
  },
  {
    id: "gl-family",
    name: "Family Room",
    division: "guest-lodge",
    rates: [
      { label: "Sleepover (overnight)", price: 600 },
      { label: "Day Rest (daytime only)", price: 450 },
    ],
    amenities: ["Larger room, suited to short-stay families, en-suite"],
  },
  // Student Accommodation has no real data yet — division doesn't launch
  // until January 2027 (client-confirmed), so a placeholder stays correct
  // here regardless of anything else being resolved.
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
