"use client";

import { useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/content/types";

const filters: { label: string; value: GalleryImage["division"] | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Guest Lodge", value: "guest-lodge" },
  { label: "Student Accommodation", value: "student-accommodation" },
];

export default function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [filter, setFilter] = useState<GalleryImage["division"] | "all">("all");
  const visible = filter === "all" ? images : images.filter((img) => img.division === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`rounded-full px-4 py-2 font-utility text-sm ${
              filter === f.value
                ? "bg-slate-teal text-soft-ivory"
                : "bg-soft-ivory text-charcoal-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
        {visible.map((img) => (
          <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-soft-ivory">
            <Image src={img.src} alt={img.alt} fill className="object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
