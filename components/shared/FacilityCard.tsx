import type { Facility } from "@/lib/content/types";
import PendingNote from "./PendingNote";

export default function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <div
      className={`rounded-lg bg-soft-ivory p-6 shadow-sm ${
        facility.pending ? "border border-dashed border-ochre-clay/50" : ""
      }`}
    >
      <p className="font-utility text-sm uppercase tracking-wide text-slate-teal">
        {facility.icon}
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-ink">
        {facility.title}
      </h3>
      {facility.pending ? (
        <div className="mt-2">
          <PendingNote />
        </div>
      ) : (
        <p className="mt-1 font-body text-sm text-charcoal-ink/80">{facility.description}</p>
      )}
    </div>
  );
}
