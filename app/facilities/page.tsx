import type { Metadata } from "next";
import FacilityCard from "@/components/shared/FacilityCard";
import { facilities } from "@/lib/content/facilities";

export const metadata: Metadata = {
  title: "Facilities",
  description: "Facilities available across BK Guest Lodge's Guest Lodge and Student Accommodation divisions.",
};

export default function FacilitiesPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Facilities</h1>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {facilities.map((facility) => (
          <FacilityCard key={facility.title} facility={facility} />
        ))}
      </div>
    </main>
  );
}
