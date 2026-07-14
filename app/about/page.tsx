import type { Metadata } from "next";
import PendingNote from "@/components/shared/PendingNote";
import PageHero from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | BK Guest Lodge, Vanderbijlpark",
  },
  description:
    "Learn about BK Guest Lodge — a registered accommodation provider in Vanderbijlpark serving both short-stay guests and students.",
};

// Founding-story paragraph is BKGL-CONTENT-001 §5's generic draft,
// approved by Beauty Tshabalala 13 Jul 2026 as reasonable placeholder
// copy in the site's tone — not real biographical history. Years-in-
// operation trust signal isn't covered by that document, stays pending.
export default function AboutPage() {
  return (
    <main>
      <PageHero
        src="/images/stock/about-hero.jpg"
        alt="A Karoo-style farmhouse veranda at dusk, warmly lit"
      />
      <div className="mx-auto max-w-8xl px-4 py-16 md:px-8">
        <h1 className="font-display text-3xl font-semibold text-charcoal-ink">
          A home built on Meurant Street
        </h1>
        <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
          BK Guest Lodge is based at 8 Meurant Street, Vanderbijlpark, under the direction of
          Beauty Fikile Tshabalala. We serve two kinds of guest under one roof: those staying a
          few nights, and those staying a semester — together, our Guest Lodge and Student
          Accommodation divisions make up BK Guest Lodge&rsquo;s Accommodation Solutions.
        </p>
        <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
          BK Guest Lodge was established to meet a simple need in Vanderbijlpark: comfortable,
          secure, and affordable accommodation for both short-stay visitors and — from January
          2027 — students in the Vaal region. We understand that whether you&rsquo;re in town for
          work, visiting family, or looking for a safe place to stay while studying, the details
          matter: reliable power and water, a secure environment, and a warm welcome. That&rsquo;s
          what we set out to build, one house with two doors — one for travellers, one for
          students.
        </p>

        <h2 className="mt-10 font-utility text-sm uppercase tracking-wide text-slate-teal">
          Trust
        </h2>
        <ul className="mt-3 space-y-2 font-body text-charcoal-ink/80">
          <li>Registered company (CIPC Reg. No. 2026/539205/07)</li>
          <li>
            <PendingNote text="TODO: pending client content — years in operation / local ties to Vanderbijlpark" />
          </li>
        </ul>
      </div>
    </main>
  );
}
