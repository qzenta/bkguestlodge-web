import type { Metadata } from "next";
import JsonLd from "@/components/shared/JsonLd";
import PendingNote from "@/components/shared/PendingNote";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "BK Guest Lodge's privacy policy — how we collect, use, and protect your personal information.",
};

const breadcrumb = breadcrumbJsonLd([{ name: "Privacy Policy", href: "/privacy-policy" }]);

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <JsonLd data={breadcrumb} />
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Privacy Policy</h1>
      <div className="mt-6">
        <PendingNote text="TODO: pending client content — Privacy Policy document. Must cover: what personal data is collected (contact form submissions, cookies), how it is used, third-party processors (Brevo for email), data retention, and user rights under POPIA." />
      </div>
    </main>
  );
}
