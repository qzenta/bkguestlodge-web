import type { Metadata } from "next";
import JsonLd from "@/components/shared/JsonLd";
import PendingNote from "@/components/shared/PendingNote";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "POPIA Notice",
  description: "BK Guest Lodge's POPIA (Protection of Personal Information Act) notice.",
};

const breadcrumb = breadcrumbJsonLd([{ name: "POPIA Notice", href: "/popia-notice" }]);

export default function PopiaNoticePage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <JsonLd data={breadcrumb} />
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">POPIA Notice</h1>
      <div className="mt-6">
        <PendingNote text="TODO: pending client content — POPIA Notice. Must include: information officer details, purpose of processing, categories of data subjects, recipients of personal information, cross-border transfers (if any), security measures, and data subject rights." />
      </div>
    </main>
  );
}
