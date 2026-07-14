import { PENDING_CONTENT, type FaqItem } from "./types";

export const faqs: FaqItem[] = [
  {
    category: "general",
    question: "How do I get in touch?",
    answer: "WhatsApp us at 072 080 0327, email info@bkguestlodge.co.za, or use the contact form on our website.",
  },
  {
    category: "general",
    question: "How do I book a room?",
    answer: "The quickest way is to WhatsApp us at 072 080 0327 with your dates and number of guests. You can also email info@bkguestlodge.co.za or fill in the contact form. We'll confirm availability and send you the details.",
  },
  {
    category: "general",
    question: "Where exactly is BK Guest Lodge?",
    answer: "We're at 8 Meurant Street, Vanderbijlpark SE 1, Gauteng, 1911 — close to ArcelorMittal and Sedibeng College.",
  },
  {
    category: "guest-lodge",
    question: "What time is check-in and check-out?",
    answer: "For overnight Sleepover stays, check-in from 14:00, check-out by 10:00. Day Rest bookings run 08:00–18:00. Early check-in or late check-out may be available on request.",
  },
  {
    category: "guest-lodge",
    question: "What's the difference between Sleepover and Day Rest?",
    answer: "Sleepover (R600) is a full overnight stay with check-in from 14:00 and check-out by 10:00. Day Rest (R450) is daytime-only use of a room from 08:00 to 18:00, with no overnight stay — ideal for contractors on shift or travellers passing through.",
  },
  {
    category: "guest-lodge",
    question: "Is parking available?",
    answer: "Yes, secure on-site parking is included for all guests at no extra charge.",
  },
  {
    category: "guest-lodge",
    question: "Do you have Wi-Fi?",
    answer: "Yes, free Wi-Fi is available throughout the property for all guests.",
  },
  {
    category: "guest-lodge",
    question: "What happens during load-shedding?",
    answer: "We have backup power and backup water on-site, so your stay isn't interrupted during load-shedding.",
  },
  {
    category: "guest-lodge",
    question: "Is the property secure?",
    answer: "Yes — BK Guest Lodge has 24-hour security and access control. All parking is on-site and secured.",
  },
  {
    category: "guest-lodge",
    question: "Do you accommodate families and children?",
    answer: "Yes — our Family Room is suited to short-stay families. Contact us to discuss specific requirements like extra bedding or cots.",
  },
  {
    category: "guest-lodge",
    question: "Can I book multiple rooms?",
    answer: "Yes, we can accommodate group bookings for teams, families, or wedding parties. WhatsApp or email us with the number of rooms and dates and we'll confirm availability.",
  },
  {
    category: "guest-lodge",
    question: "Do you offer long-stay or weekly rates?",
    answer: "Long-stay discounts are available for bookings of 7 or more nights. Contact us directly for a quote — we work with contractors and business travellers on extended stays regularly.",
  },
  {
    category: "guest-lodge",
    question: "What's included in the rate?",
    answer: `Wi-Fi, daily housekeeping, secure parking, and backup power/water are all included. ${PENDING_CONTENT} (breakfast, laundry pricing, other inclusions).`,
    pending: true,
  },
  {
    category: "guest-lodge",
    question: "Is breakfast included?",
    answer: PENDING_CONTENT,
    pending: true,
  },
  {
    category: "guest-lodge",
    question: "How close are you to Emerald Resort?",
    answer: "Emerald Resort & Casino, the Aquadome, and Emerald Animal World are all in the Vanderbijlpark area. BK Guest Lodge is a comfortable, affordable alternative to staying on-resort.",
  },
  {
    category: "guest-lodge",
    question: "How close are you to ArcelorMittal and Sedibeng College?",
    answer: "We're close to both ArcelorMittal and Sedibeng College, making BK Guest Lodge a convenient base whether you're here for work or study.",
  },
  {
    category: "guest-lodge",
    question: "Are you close to VUT or NWU's Vaal Campus?",
    answer: "Yes, we're in the Vanderbijlpark area and serve as a convenient base for visitors to both Vaal University of Technology and North-West University's Vaal Campus — for open days, graduations, or visiting a student.",
  },
  {
    category: "guest-lodge",
    question: "What payment methods do you accept?",
    answer: "We accept cash and EFT (electronic funds transfer). Contact us if you need to discuss payment arrangements.",
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
