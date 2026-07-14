export interface LocalSeoPage {
  slug: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string[];
  highlights: string[];
  relatedAudience?: string;
}

// Sprint 5 (BKGL post-launch optimisation brief): local SEO pages.
// The brief listed "Guest Lodge Vanderbijlpark" and "Accommodation
// Vanderbijlpark" as separate targets — they're consolidated into one
// page here since they're near-identical search intent and splitting
// them would mean two thin, largely duplicate pages, which the brief
// itself says to avoid ("genuine value rather than keyword stuffing").
// The page's copy naturally carries both phrasings.
//
// No specific distances or drive times are stated anywhere below —
// consistent with lib/content/attractions.ts, none of those have been
// confirmed by the client.
export const localSeoPages: LocalSeoPage[] = [
  {
    slug: "vanderbijlpark",
    title: "Guest Lodge & Accommodation in Vanderbijlpark",
    h1: "Guest Lodge & Accommodation in Vanderbijlpark",
    metaDescription:
      "BK Guest Lodge offers secure, comfortable accommodation in Vanderbijlpark on Meurant Street — Sleepover and Day Rest rates, Wi-Fi, backup power and water, and 24-hour security.",
    intro: [
      "BK Guest Lodge is a registered accommodation provider based on Meurant Street in Vanderbijlpark, offering secure, comfortable short-stay rooms for business travellers, contractors, and families in the area.",
      "Whether you're searching for a guest lodge or general accommodation in Vanderbijlpark, you'll find the same standard here: Sleepover (overnight) and Day Rest (daytime-only) rates, en-suite rooms, and a team that's easy to reach on WhatsApp or by phone.",
    ],
    highlights: [
      "Central Vanderbijlpark location, close to ArcelorMittal and Sedibeng College",
      "Free Wi-Fi, secure on-site parking, and 24-hour security",
      "Backup power and water, so load-shedding doesn't interrupt your stay",
      "Sleepover and Day Rest rate options to suit your trip",
    ],
  },
  {
    slug: "near-emerald-resort",
    title: "Accommodation near Emerald Resort — BK Guest Lodge",
    h1: "Accommodation near Emerald Resort",
    metaDescription:
      "Comfortable, secure accommodation in Vanderbijlpark for visitors to Emerald Resort & Casino and the Aquadome — Sleepover and Day Rest rates available at BK Guest Lodge.",
    intro: [
      "Planning a visit to Emerald Resort & Casino, the Aquadome, or Emerald Animal World? BK Guest Lodge gives you a comfortable, secure place to stay in Vanderbijlpark, without paying resort rates.",
      "It's an easy base for a family day at the water park or a night at the casino, with the same standard of care we offer every guest — secure parking, backup power and water, and a warm welcome.",
    ],
    highlights: [
      "A relaxed, secure alternative to staying on-resort",
      "Suited to families visiting the Aquadome and Emerald Animal World",
      "Free Wi-Fi and secure on-site parking",
      "Sleepover and Day Rest rate options",
    ],
    relatedAudience: "Families",
  },
  {
    slug: "near-vaal-mall",
    title: "Accommodation near Vaal Mall — BK Guest Lodge",
    h1: "Accommodation near Vaal Mall",
    metaDescription:
      "Secure accommodation in Vanderbijlpark for visitors and shoppers heading to Vaal Mall, the largest shopping centre in the region — book a room at BK Guest Lodge.",
    intro: [
      "Vaal Mall is the region's largest shopping centre, and BK Guest Lodge offers a comfortable, secure place to stay in Vanderbijlpark for anyone making the trip — whether it's a day of shopping or a longer stay in the area.",
      "Settle in at a secure, well-run guest lodge and use it as your base for everything the Vaal has to offer, from groceries to a day out.",
    ],
    highlights: [
      "A comfortable base for shopping trips and day outings",
      "Free Wi-Fi and secure on-site parking",
      "Backup power and water",
      "Sleepover and Day Rest rate options",
    ],
    relatedAudience: "Tourists",
  },
  {
    slug: "near-vut",
    title: "Accommodation near VUT — BK Guest Lodge",
    h1: "Accommodation near VUT (Vaal University of Technology)",
    metaDescription:
      "Secure, comfortable accommodation in Vanderbijlpark for visitors to Vaal University of Technology — open days, orientation, graduations, and visiting students.",
    intro: [
      "In town to visit Vaal University of Technology — for an open day, orientation, graduation, or to see a student? BK Guest Lodge offers secure, comfortable accommodation in Vanderbijlpark for the trip.",
      "It's a straightforward, no-fuss base in the Vaal region, with rates that make sense whether you're staying one night or several.",
    ],
    highlights: [
      "A convenient base in the Vaal region for VUT visits",
      "Free Wi-Fi and a quiet space to unwind",
      "Secure on-site parking and 24-hour security",
      "Sleepover and Day Rest rate options",
    ],
    relatedAudience: "University Visitors",
  },
  {
    slug: "near-nwu-vaal-campus",
    title: "Accommodation near NWU Vaal Campus — BK Guest Lodge",
    h1: "Accommodation near NWU's Vaal Campus",
    metaDescription:
      "Secure, comfortable accommodation in Vanderbijlpark for visitors to North-West University's Vaal Campus — open days, orientation, graduations, and visiting students.",
    intro: [
      "Visiting North-West University's Vaal Campus? BK Guest Lodge offers secure, comfortable accommodation in Vanderbijlpark for parents, prospective students, and anyone in the area for campus events.",
      "A straightforward, comfortable base in the Vaal region, with Sleepover and Day Rest options depending on how long you're staying.",
    ],
    highlights: [
      "A convenient base in the Vaal region for NWU Vaal visits",
      "Free Wi-Fi and a quiet space to unwind",
      "Secure on-site parking and 24-hour security",
      "Sleepover and Day Rest rate options",
    ],
    relatedAudience: "University Visitors",
  },
  {
    slug: "near-sasolburg",
    title: "Accommodation near Sasolburg — BK Guest Lodge",
    h1: "Accommodation near Sasolburg",
    metaDescription:
      "Secure, comfortable accommodation in Vanderbijlpark for business travellers and contractors working in or near Sasolburg — Sleepover and Day Rest rates at BK Guest Lodge.",
    intro: [
      "Working in or passing through Sasolburg? BK Guest Lodge offers secure, comfortable accommodation in Vanderbijlpark in the wider Vaal region — a practical base for contractors and business travellers covering the area.",
      "Day Rest and Sleepover rates mean you only pay for what you need, whether that's a single shift or a longer stretch of work.",
    ],
    highlights: [
      "A practical base in the Vaal region for Sasolburg-area work",
      "Free Wi-Fi and secure on-site parking",
      "Backup power and water",
      "Sleepover and Day Rest rate options",
    ],
    relatedAudience: "Contractors",
  },
  {
    slug: "for-contractors",
    title: "Accommodation for Contractors — BK Guest Lodge",
    h1: "Accommodation for Contractors",
    metaDescription:
      "Secure, no-fuss accommodation in Vanderbijlpark for contractors — Day Rest and Sleepover rates, close to ArcelorMittal, with Wi-Fi, parking, and backup power.",
    intro: [
      "BK Guest Lodge is a practical base for contractors working in and around Vanderbijlpark — close to ArcelorMittal, with rates built around how contractors actually work.",
      "Day Rest covers a single shift's use of a room during the day; Sleepover covers a full overnight stay. Either way, you get a secure, comfortable room and a team that's easy to reach.",
    ],
    highlights: [
      "Close to ArcelorMittal",
      "Day Rest and Sleepover rates for short or extended contracts",
      "Secure on-site parking and 24-hour security",
      "Backup power and water, so load-shedding doesn't cost you time",
    ],
    relatedAudience: "Contractors",
  },
  {
    slug: "for-business-travel",
    title: "Accommodation for Business Travel — BK Guest Lodge",
    h1: "Accommodation for Business Travel",
    metaDescription:
      "Comfortable, professional accommodation in Vanderbijlpark for business travellers — Wi-Fi, secure parking, and a quiet space to work, close to ArcelorMittal and Sedibeng College.",
    intro: [
      "In Vanderbijlpark for a meeting, a site visit, or a few days of work? BK Guest Lodge offers comfortable, secure accommodation with the essentials business travel actually needs.",
      "Free Wi-Fi and a quiet, professional space mean you can get work done, while backup power and water and 24-hour security mean your stay isn't interrupted.",
    ],
    highlights: [
      "Free Wi-Fi and a quiet space to work",
      "Close to ArcelorMittal and Sedibeng College",
      "Secure on-site parking and 24-hour security",
      "Sleepover and Day Rest rate options",
    ],
    relatedAudience: "Business",
  },
];
