import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Book your stay at BK Guest Lodge's Guest Lodge division.",
};

const bookNowBreadcrumb = breadcrumbJsonLd([{ name: "Book Now", href: "/book-now" }]);

export default function BookNowPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 text-center md:px-8">
      <JsonLd data={bookNowBreadcrumb} />
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Ready to stay?</h1>
      <p className="mt-4 font-body text-charcoal-ink/80">
        Let us know which you&rsquo;re here for, and we&rsquo;ll take it from there.
      </p>

      <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">
        <Link
          href="/accommodation/guest-lodge"
          className="flex-1 rounded-lg bg-ochre-clay px-6 py-8 font-utility text-soft-ivory hover:opacity-90"
        >
          Guest Lodge — Book now →
        </Link>
        <Link
          href="/accommodation/student-accommodation"
          className="flex flex-1 flex-col items-center gap-2 rounded-lg bg-cornflower-dusk px-6 py-8 font-utility text-soft-ivory hover:opacity-90"
        >
          <span className="rounded-full bg-slate-teal px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Opening January 2027
          </span>
          Student Accommodation — Learn more →
        </Link>
      </div>
    </main>
  );
}
