import Image from "next/image";
import type { Attraction } from "@/lib/content/types";

export default function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <div className="overflow-hidden rounded-lg bg-soft-ivory shadow-sm">
      {attraction.photo ? (
        <div className="relative aspect-[4/3] bg-warm-sand">
          <Image src={attraction.photo} alt={attraction.name} fill className="object-cover" />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center border-b border-dashed border-ochre-clay/40 bg-warm-sand">
          <span className="font-utility text-xs font-semibold uppercase tracking-wide text-ochre-clay">
            Photo pending
          </span>
        </div>
      )}
      <div className="p-6">
        <p className="font-utility text-sm uppercase tracking-wide text-slate-teal">
          {attraction.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-ink">
          {attraction.name}
        </h3>
        <p className="mt-1 font-body text-sm text-charcoal-ink/80">{attraction.description}</p>
      </div>
    </div>
  );
}
