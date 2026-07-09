"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/content/types";

const categoryLabels: Record<FaqItem["category"], string> = {
  general: "General",
  "guest-lodge": "Guest Lodge",
  "student-accommodation": "Student Accommodation",
};

export default function FAQAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const categories = Array.from(new Set(faqs.map((f) => f.category)));

  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category}>
          <h2 className="font-utility text-sm uppercase tracking-wide text-slate-teal">
            {categoryLabels[category]}
          </h2>
          <div className="mt-3 divide-y divide-charcoal-ink/10 rounded-lg bg-soft-ivory shadow-sm">
            {faqs
              .filter((f) => f.category === category)
              .map((faq) => {
                const key = `${category}-${faq.question}`;
                const isOpen = openKey === key;
                return (
                  <div key={key}>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-5 py-4 text-left font-body text-sm font-medium text-charcoal-ink"
                      aria-expanded={isOpen}
                      onClick={() => setOpenKey(isOpen ? null : key)}
                    >
                      {faq.question}
                    </button>
                    {isOpen && (
                      <p className="px-5 pb-4 font-body text-sm text-charcoal-ink/80">{faq.answer}</p>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      ))}
    </div>
  );
}
