import Image from "next/image";
import type { Facility } from "@/lib/content/types";
import PendingNote from "./PendingNote";

export default function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <div
      className={`overflow-hidden rounded-lg bg-soft-ivory shadow-sm ${
        facility.pending ? "border border-dashed border-ochre-clay/50" : ""
      }`}
    >
      {facility.photo && (
        <div className="relative aspect-[4/3] bg-warm-sand">
          <Image src={facility.photo} alt={facility.title} fill className="object-cover" />
        </div>
      )}
      <div className="p-6">
        <p className="font-utility text-sm uppercase tracking-wide text-slate-teal">
          {facility.icon}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-ink">
          {facility.title}
        </h3>
        {facility.newlyDiscovered && (
          <p className="mt-1 font-utility text-xs uppercase tracking-wide text-cornflower-dusk">
            New — confirm before publishing
          </p>
        )}
        {facility.pending ? (
          <div className="mt-2">
            <PendingNote />
          </div>
        ) : (
          <p className="mt-1 font-body text-sm text-charcoal-ink/80">{facility.description}</p>
        )}
      </div>
    </div>
  );
}
