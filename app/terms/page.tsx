import type { Metadata } from "next";
import JsonLd from "@/components/shared/JsonLd";
import PendingNote from "@/components/shared/PendingNote";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "BK Guest Lodge's terms and conditions of use.",
};

const breadcrumb = breadcrumbJsonLd([{ name: "Terms & Conditions", href: "/terms" }]);

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <JsonLd data={breadcrumb} />
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Terms &amp; Conditions</h1>
      <div className="mt-6">
        <PendingNote text="TODO: pending client content — Terms & Conditions. Must cover: booking/cancellation policy, check-in/check-out rules, liability limitations, payment terms, house rules, and dispute resolution." />
      </div>
    </main>
  );
}
