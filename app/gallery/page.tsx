import type { Metadata } from "next";
import GalleryGrid from "@/components/shared/GalleryGrid";
import PageHero from "@/components/shared/PageHero";
import EnquiryCTA from "@/components/shared/EnquiryCTA";
import JsonLd from "@/components/shared/JsonLd";
import { galleryImages } from "@/lib/content/gallery";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of BK Guest Lodge's Guest Lodge rooms and Student Accommodation spaces.",
};

const galleryBreadcrumb = breadcrumbJsonLd([{ name: "Gallery", href: "/gallery" }]);

export default function GalleryPage() {
  return (
    <main>
      <JsonLd data={galleryBreadcrumb} />
      <PageHero
        src="/images/stock/gallery-hero.jpg"
        alt="A cozy guesthouse lounge looking out onto a garden veranda"
      />
      <div className="mx-auto max-w-8xl px-4 py-16 md:px-8">
        <h1 className="font-display text-3xl font-semibold text-charcoal-ink">See BK Guest Lodge</h1>

        {galleryImages.length === 0 ? (
          <p className="mt-4 max-w-xl font-body text-charcoal-ink/80">
            Photos are on their way — check back soon, or message us on WhatsApp for a look
            right now.
          </p>
        ) : (
          <div className="mt-10">
            <GalleryGrid images={galleryImages} />
          </div>
        )}

        <EnquiryCTA />
      </div>
    </main>
  );
}
