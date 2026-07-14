import Image from "next/image";
import type { Facility } from "@/lib/content/types";
import PendingNote from "./PendingNote";

export default function FacilityCard({ facility }: { facility: Facility }) {
  const hasFlip = !!facility.photo && !facility.pending;

  if (!hasFlip) {
    return (
      <div
        className={`overflow-hidden rounded-lg bg-soft-ivory shadow-sm ${
          facility.pending ? "border border-dashed border-ochre-clay/50" : ""
        }`}
      >
        {facility.photo && (
          <div className="relative aspect-[4/3] bg-warm-sand">
            <Image src={facility.photo} alt={facility.title} fill sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
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

  return (
    <div className="group [perspective:1000px]">
      <div className="relative aspect-[4/3] transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front — image + title */}
        <div className="absolute inset-0 overflow-hidden rounded-lg shadow-sm [backface-visibility:hidden]">
          <Image
            src={facility.photo!}
            alt={facility.title}
            fill
            sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-ink/70 via-charcoal-ink/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <p className="font-utility text-xs uppercase tracking-wide text-soft-ivory/80">
              {facility.icon}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-soft-ivory">
              {facility.title}
            </h3>
          </div>
        </div>

        {/* Back — description */}
        <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-teal p-6 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="font-utility text-xs uppercase tracking-wide text-warm-sand/70">
            {facility.icon}
          </p>
          <h3 className="mt-2 text-center font-display text-lg font-semibold text-soft-ivory">
            {facility.title}
          </h3>
          <p className="mt-2 text-center font-body text-sm text-soft-ivory/90">
            {facility.description}
          </p>
        </div>
      </div>
    </div>
  );
}
