import type { Audience } from "./types";

// Sprint 3 (BKGL post-launch optimisation brief): short, honest
// descriptions only — no invented distances, venues, or facility names
// that haven't been confirmed elsewhere in the site's content.
// Photos are real property photos (guest-lodge intake, confirmed
// guest-lodge-side by Daniel 10 Jul 2026) used illustratively — not a
// claim that any specific audience gets that specific room.
export const audiences: Audience[] = [
  {
    label: "Business",
    icon: "BUSINESS TRAVELLERS",
    photo: "/images/guest-lodge/kitchen.jpg",
    description:
      "In Vanderbijlpark for a meeting, a site visit, or a few days of work.",
    whySuitable:
      "Wi-Fi, backup power, and secure parking mean you can work uninterrupted, with a quiet, professional space to return to at the end of the day.",
  },
  {
    label: "Contractors",
    icon: "CONTRACTORS",
    photo: "/images/guest-lodge/self-contained-unit.jpg",
    description: "Here on a project or contract, for a few nights or the long haul.",
    whySuitable:
      "Close to ArcelorMittal, with Day Rest and long-stay rates that make sense whether you're in for one shift or several weeks.",
  },
  {
    label: "Families",
    icon: "FAMILIES",
    photo: "/images/guest-lodge/lounge.jpg",
    description: "Travelling with the family, whether passing through or staying a while.",
    whySuitable:
      "A secure, comfortable environment with room to settle in — and the Vaal region's family attractions, like the Aquadome, close by.",
  },
  {
    label: "Tourists",
    icon: "TOURISTS",
    photo: "/images/guest-lodge/bedroom-brown.jpg",
    description: "Exploring the Vaal — the river, Vaal Mall, and the wider region.",
    whySuitable:
      "A comfortable, well-located base for day trips around the area, with a warm welcome at the end of each one.",
  },
  {
    label: "Wedding Guests",
    icon: "WEDDING GUESTS",
    photo: "/images/guest-lodge/bedroom-navy.jpg",
    description: "In town for a wedding and need somewhere comfortable to stay.",
    whySuitable:
      "A relaxed, private place to get ready and rest up between events, away from the venue but never far from it.",
  },
  {
    label: "Hospital Visitors",
    icon: "HOSPITAL VISITORS",
    photo: "/images/guest-lodge/second-lounge.jpg",
    description: "Visiting a loved one, or in town for a medical appointment.",
    whySuitable:
      "A calm, secure place to stay close to Vanderbijlpark's medical facilities, so you're never far when you're needed.",
  },
  {
    label: "University Visitors",
    icon: "UNIVERSITY VISITORS",
    photo: "/images/guest-lodge/bedroom-brown-alt.jpg",
    description: "Visiting Sedibeng College, VUT, or NWU's Vaal campus.",
    whySuitable:
      "A short, straightforward trip from campus — useful for open days, orientation, graduations, or visiting a student.",
  },
];
