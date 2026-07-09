import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About BK Guest Lodge — Guest Lodge and Student Accommodation in Vanderbijlpark.",
};

// Placeholder copy — do not use "Accommodation Solutions" umbrella framing here until
// Beauty Tshabalala confirms it at content sign-off (BKGL handoff note).
export default function AboutPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">About BK Guest Lodge</h1>
      <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
        BK Guest Lodge is based in Vanderbijlpark, offering both short-stay Guest Lodge
        accommodation and long-term Student Accommodation under one roof. Whether you&rsquo;re
        in town for contract work or looking for a place to study, we aim to make you feel
        at home.
      </p>
    </main>
  );
}
