import type { Metadata } from "next";
import AttractionCard from "@/components/shared/AttractionCard";
import Reveal from "@/components/shared/Reveal";
import EnquiryCTA from "@/components/shared/EnquiryCTA";
import JsonLd from "@/components/shared/JsonLd";
import { attractions } from "@/lib/content/attractions";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Explore the Area | BK Guest Lodge, Vanderbijlpark",
  },
  description:
    "What's nearby BK Guest Lodge in Vanderbijlpark — the Vaal River, Emerald Resort's Aquadome, Vaal Mall, and more.",
};

const exploreBreadcrumb = breadcrumbJsonLd([{ name: "Explore the Area", href: "/explore-the-area" }]);

export default function ExploreTheAreaPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <JsonLd data={exploreBreadcrumb} />
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Explore the area</h1>
      <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
        BK Guest Lodge sits close to some of the Vaal region&rsquo;s best-known spots — whether
        you&rsquo;re here with the family, here to study, or just here for the weekend.
      </p>
      <Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.name} attraction={attraction} />
          ))}
        </div>
      </Reveal>

      <EnquiryCTA />
    </main>
  );
}
