import type { Facility } from "@/lib/content/types";

export default function FacilityCard({ facility }: { facility: Facility }) {
  return (
    <div className="rounded-lg bg-soft-ivory p-6 shadow-sm">
      <p className="font-utility text-sm uppercase tracking-wide text-slate-teal">
        {facility.icon}
      </p>
      <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-ink">
        {facility.title}
      </h3>
      <p className="mt-1 font-body text-sm text-charcoal-ink/80">{facility.description}</p>
    </div>
  );
}
