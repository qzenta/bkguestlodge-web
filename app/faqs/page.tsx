import type { Metadata } from "next";
import FAQAccordion from "@/components/shared/FAQAccordion";
import EnquiryCTA from "@/components/shared/EnquiryCTA";
import JsonLd from "@/components/shared/JsonLd";
import { faqs } from "@/lib/content/faqs";
import { faqPageJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about BK Guest Lodge — check-in times, rates, parking, Wi-Fi, security, load-shedding backup, and how to book.",
};

const faqBreadcrumb = breadcrumbJsonLd([{ name: "FAQs", href: "/faqs" }]);

const publishedFaqs = faqs.filter((f) => !f.pending);

export default function FaqsPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <JsonLd data={faqBreadcrumb} />
      <JsonLd data={faqPageJsonLd(publishedFaqs)} />
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Frequently Asked Questions</h1>
      <div className="mt-10">
        <FAQAccordion faqs={faqs} />
      </div>

      <EnquiryCTA heading="Still have questions?" body="We're happy to help — reach out and we'll get back to you quickly." />
    </main>
  );
}
