import type { Metadata } from "next";
import FacilityCard from "@/components/shared/FacilityCard";
import { facilities } from "@/lib/content/facilities";

export const metadata: Metadata = {
  title: {
    absolute: "Facilities | BK Guest Lodge",
  },
  description:
    "See what's included at BK Guest Lodge — parking, backup power and water, Wi-Fi, and more.",
};

export default function FacilitiesPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">What&rsquo;s included</h1>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard key={facility.title} facility={facility} />
        ))}
      </div>
    </main>
  );
}
