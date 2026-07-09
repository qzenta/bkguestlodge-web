import type { Metadata } from "next";
import GalleryGrid from "@/components/shared/GalleryGrid";
import { galleryImages } from "@/lib/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of BK Guest Lodge's Guest Lodge rooms and Student Accommodation spaces.",
};

export default function GalleryPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Gallery</h1>
      <div className="mt-10">
        <GalleryGrid images={galleryImages} />
      </div>
    </main>
  );
}
