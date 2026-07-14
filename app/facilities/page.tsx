import type { Metadata } from "next";
import Link from "next/link";
import FacilityCard from "@/components/shared/FacilityCard";
import PageHero from "@/components/shared/PageHero";
import EnquiryCTA from "@/components/shared/EnquiryCTA";
import JsonLd from "@/components/shared/JsonLd";
import { facilities } from "@/lib/content/facilities";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Facilities | BK Guest Lodge",
  },
  description:
    "See what's included at BK Guest Lodge — parking, backup power and water, Wi-Fi, and more.",
};

const facilitiesBreadcrumb = breadcrumbJsonLd([{ name: "Facilities", href: "/facilities" }]);

export default function FacilitiesPage() {
  return (
    <main>
      <JsonLd data={facilitiesBreadcrumb} />
      <PageHero
        src="/images/stock/facilities-hero.jpg"
        alt="A warmly lit courtyard patio at a South African guesthouse"
      />
      <div className="mx-auto max-w-8xl px-4 py-16 md:px-8">
        <h1 className="font-display text-3xl font-semibold text-charcoal-ink">What&rsquo;s included at BK Guest Lodge?</h1>
        <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
          Every guest gets free Wi-Fi, secure parking, backup power and water, daily housekeeping, and 24-hour security — all included in your rate.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} facility={facility} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/accommodation/guest-lodge"
            className="font-utility text-sm font-semibold text-slate-teal underline underline-offset-4 hover:text-cornflower-dusk"
          >
            View our rooms →
          </Link>
          <Link
            href="/faqs"
            className="font-utility text-sm font-semibold text-slate-teal underline underline-offset-4 hover:text-cornflower-dusk"
          >
            Have a question? Check our FAQs →
          </Link>
        </div>

        <EnquiryCTA />
      </div>
    </main>
  );
}
