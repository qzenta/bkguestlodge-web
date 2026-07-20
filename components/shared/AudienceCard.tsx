import Image from "next/image";
import Link from "next/link";
import type { Audience } from "@/lib/content/types";

export default function AudienceCard({ audience }: { audience: Audience }) {
  return (
    <div className="overflow-hidden rounded-lg bg-soft-ivory shadow-sm">
      <div className="relative aspect-[4/3] bg-warm-sand">
        <Image
          src={audience.photo}
          alt="A room at BK Guest Lodge, Vanderbijlpark"
          fill
          sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="font-utility text-sm uppercase tracking-wide text-slate-teal">
          {audience.icon}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-charcoal-ink">
          {audience.label}
        </h3>
        <p className="mt-2 font-body text-sm text-charcoal-ink/80">{audience.description}</p>
        <p className="mt-3 font-body text-sm text-charcoal-ink/70">{audience.whySuitable}</p>
        <Link
          href="/book-now"
          className="mt-4 inline-block font-utility text-sm font-semibold text-slate-teal underline underline-offset-4 hover:text-cornflower-dusk"
        >
          Book Your Stay →
        </Link>
      </div>
    </div>
  );
}
