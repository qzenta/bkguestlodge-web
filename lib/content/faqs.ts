import { PENDING_CONTENT, type FaqItem } from "./types";

// Guest Lodge answers per BKGL-CONTENT-001 §4, approved by Beauty
// Tshabalala 13 Jul 2026. Day Rest exact hours and the proximity claim
// were confirmed separately, 13 Jul 2026: hours set to 08:00-18:00 per
// the document's own suggested default; proximity confirmed directly
// (close to both ArcelorMittal and Sedibeng College), closing R2.
export const faqs: FaqItem[] = [
  {
    category: "general",
    question: "How do I get in touch?",
    answer: "WhatsApp us at 072 080 0327, email info@bkguestlodge.co.za, or use the contact form.",
  },
  {
    category: "guest-lodge",
    question: "What time is check-in/check-out?",
    answer:
      "For overnight Sleepover stays, check-in from 14:00, check-out by 10:00. Day Rest bookings run 08:00–18:00. Early check-in/late check-out may be available on request.",
  },
  {
    category: "guest-lodge",
    question: "What's the difference between Sleepover and Day Rest?",
    answer:
      "Sleepover (R600) is a full overnight stay. Day Rest (R450) is daytime-only room use, no overnight stay.",
  },
  {
    category: "guest-lodge",
    question: "Is parking available?",
    answer: "Yes, secure on-site parking is available for all guests.",
  },
  {
    category: "guest-lodge",
    question: "Do you accommodate families/children?",
    answer: "Yes — our Family Room is suited to short-stay families. Contact us for specific requirements.",
  },
  {
    category: "guest-lodge",
    question: "Do you offer long-stay rates?",
    answer: "Long-stay discounts are available for bookings of 7+ nights — contact us directly for a quote.",
  },
  {
    category: "guest-lodge",
    question: "What's included in the rate?",
    answer: `Wi-Fi and daily housekeeping are included. ${PENDING_CONTENT} (breakfast, laundry, other inclusions).`,
    pending: true,
  },
  {
    category: "guest-lodge",
    question: "How close are you to ArcelorMittal / Sedibeng College?",
    answer: "We're close to both ArcelorMittal and Sedibeng College, making BK Guest Lodge a convenient base whether you're here for work or study.",
  },
  {
    category: "student-accommodation",
    question: "What's included in the monthly rate?",
    answer: PENDING_CONTENT,
    pending: true,
  },
  {
    category: "student-accommodation",
    question: "Is there a lease minimum?",
    answer: PENDING_CONTENT,
    pending: true,
  },
  {
    category: "student-accommodation",
    question: "What are the house rules?",
    answer: PENDING_CONTENT,
    pending: true,
  },
];
