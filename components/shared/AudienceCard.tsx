import Link from "next/link";
import type { Audience } from "@/lib/content/types";

export default function AudienceCard({ audience }: { audience: Audience }) {
  return (
    <div className="rounded-lg bg-soft-ivory p-6 shadow-sm">
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
  );
}
