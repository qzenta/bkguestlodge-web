import { PENDING_CONTENT, type FaqItem } from "./types";

// Questions are from BKGL_Content_Draft.md as given. Answers marked
// `[fill in]` / bracketed in the draft become PENDING_CONTENT here —
// only the General question had a real, confirmed answer.
export const faqs: FaqItem[] = [
  {
    category: "general",
    question: "How do I get in touch?",
    answer: "WhatsApp us at 072 080 0327, email info@bkguestlodge.co.za, or use the contact form.",
  },
  {
    category: "guest-lodge",
    question: "What time is check-in/check-out?",
    answer: PENDING_CONTENT,
    pending: true,
  },
  {
    category: "guest-lodge",
    question: "Is parking available?",
    answer: `Yes — ${PENDING_CONTENT} (secure/gated details to confirm).`,
    pending: true,
  },
  {
    category: "guest-lodge",
    question: "Do you offer long-stay rates for contractors?",
    answer: PENDING_CONTENT,
    pending: true,
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
