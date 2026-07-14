import type { Attraction } from "./types";

// Real, verifiable Vanderbijlpark-area landmarks only — no invented
// distances or travel times (none have been confirmed by the client).
// Photos are pending: no licensed images of these specific places have
// been sourced yet, so cards fall back to a text-only layout until real
// or licensed photography is ready.
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
