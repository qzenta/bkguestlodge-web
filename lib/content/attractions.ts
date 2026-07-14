import type { Attraction } from "./types";

// Real, verifiable Vanderbijlpark-area landmarks only — no invented
// distances or travel times (none have been confirmed by the client).
// Photos: only added where a genuinely verified match for the specific
// named place was found (free-license, no unclear rights) — Aquadome,
// Emerald Animal World, and Vaal Mall had no real match on Unsplash/Pexels
// (searches surfaced unrelated malls/venues, or Unsplash+ paid results),
// so those stay text-only rather than use a mismatched substitute photo.
export const attractions: Attraction[] = [
  {
    name: "Emerald Resort & Casino — Aquadome",
    category: "Family / Water park",
    description:
      "An indoor water park at Emerald Resort & Casino, genuinely kid-friendly and a popular day-trip spot for guests with families.",
  },
  {
    name: "Emerald Animal World",
    category: "Family",
    description: "Right next door to the Aquadome — an easy add-on for a family day out.",
  },
  {
    name: "The Vaal River",
    category: "Outdoors / Boating",
    description:
      "Boating and river cruises are available nearby via operators like Liquid Lounge and Stonehaven on Vaal.",
    photo: "/images/stock/vaal-river.jpg",
  },
  {
    name: "Vaal Mall",
    category: "Shopping",
    description: "The largest shopping centre in the region, for everything from groceries to a day out.",
  },
  {
    name: "ArcelorMittal & Sedibeng College",
    category: "Work / Study",
    description:
      "BK Guest Lodge is close to both — a convenient base whether you're here for a contract or a course.",
  },
];
