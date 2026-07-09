import type { Metadata } from "next";
import PendingNote from "@/components/shared/PendingNote";

export const metadata: Metadata = {
  title: {
    absolute: "About Us | BK Guest Lodge, Vanderbijlpark",
  },
  description:
    "Learn about BK Guest Lodge — a registered accommodation provider in Vanderbijlpark serving both short-stay guests and students.",
};

// Copy from BKGL_Content_Draft.md. Founding-story sentence and the
// years-in-operation trust signal are bracketed in the draft — do not
// invent them, wait for Beauty's actual words.
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">
        A home built on Meurant Street
      </h1>
      <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
        BK Guest Lodge is based at 8 Meurant Street, Vanderbijlpark, under the direction of
        Beauty Fikile Tshabalala. We serve two kinds of guest under one roof: those staying a
        few nights, and those staying a semester.
      </p>
      <div className="mt-4">
        <PendingNote text="TODO: pending client content — founding story / why BK Guest Lodge exists" />
      </div>

      <h2 className="mt-10 font-utility text-sm uppercase tracking-wide text-slate-teal">
        Trust
      </h2>
      <ul className="mt-3 space-y-2 font-body text-charcoal-ink/80">
        <li>Registered company (CIPC Reg. No. 2026/539205/07)</li>
        <li>
          <PendingNote text="TODO: pending client content — years in operation / local ties to Vanderbijlpark" />
        </li>
      </ul>
    </main>
  );
}
