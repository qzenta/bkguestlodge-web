import type { Metadata } from "next";
import FAQAccordion from "@/components/shared/FAQAccordion";
import { faqs } from "@/lib/content/faqs";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about BK Guest Lodge's Guest Lodge and Student Accommodation divisions.",
};

export default function FaqsPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Frequently Asked Questions</h1>
      <div className="mt-10">
        <FAQAccordion faqs={faqs} />
      </div>
    </main>
  );
}
