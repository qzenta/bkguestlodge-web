import Link from "next/link";
import FacilityCard from "@/components/shared/FacilityCard";
import PendingNote from "@/components/shared/PendingNote";
import PageHero from "@/components/shared/PageHero";
import Reveal from "@/components/shared/Reveal";
import CascadeText from "@/components/shared/CascadeText";
import { facilities } from "@/lib/content/facilities";
import { testimonials } from "@/lib/content/testimonials";

export default function Home() {
  const previewFacilities = facilities.slice(0, 4);

  return (
    <main>
      {/* Single Guest Lodge hero — BKGL-DS-001 v1.1, supersedes the v1.0 three-panel split */}
      <PageHero
        src="/images/stock/homepage-hero.jpg"
        alt="A South African farmhouse veranda at dusk"
        size="hero"
      >
        <h1 className="font-display text-4xl font-semibold md:text-5xl">
          <CascadeText text="Guest Lodge" />
        </h1>
        <Reveal>
          <p className="mt-4 max-w-xl font-body text-soft-ivory/90">
            Secure, comfortable accommodation in the heart of Vanderbijlpark, with
            attentive, professional service — a trusted address for business travellers,
            contractors, and families alike.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/book-now"
              className="inline-block rounded-full bg-ochre-clay px-6 py-3 font-body text-sm font-semibold text-soft-ivory transition hover:opacity-90"
            >
              Book Your Stay
            </Link>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border border-soft-ivory/70 px-6 py-3 font-body text-sm font-semibold text-soft-ivory transition hover:bg-soft-ivory/10"
            >
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </PageHero>

      {/* Secondary banner — Student Accommodation, deliberately subordinate to the hero */}
      <div className="border-b border-warm-sand bg-warm-sand/60 px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-8xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="flex items-center gap-2 font-body text-sm text-charcoal-ink/80">
            <span aria-hidden="true">🎓</span>
            <span>
              <span className="font-utility font-semibold uppercase tracking-wide text-cornflower-dusk">
                Also opening January 2027:
              </span>{" "}
              Student accommodation
            </span>
          </p>
          <Link
            href="/accommodation/student-accommodation"
            className="font-utility text-sm font-semibold text-slate-teal underline underline-offset-4 hover:text-cornflower-dusk"
          >
            Learn more →
          </Link>
        </div>
      </div>

      {/* Below the fold */}
      <section className="mx-auto max-w-8xl px-4 py-16 text-center md:px-8">
        <h2 className="font-display text-2xl font-semibold text-charcoal-ink md:text-3xl">
          One address on Meurant Street. Two ways to call it home.
        </h2>
        <Reveal>
          <p className="mx-auto mt-4 max-w-2xl font-body text-charcoal-ink/80">
            BK Guest Lodge&rsquo;s Accommodation Solutions welcome short-stay guests —
            contractors, business travellers, and families passing through Vanderbijlpark —
            alongside students who call it home for the term. Whichever door you&rsquo;re here
            for, you&rsquo;ll find the same standard of care.
          </p>
        </Reveal>
      </section>

      {/* Facilities preview */}
      <section className="mx-auto max-w-8xl px-4 pb-16 md:px-8">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-charcoal-ink">Facilities</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            {previewFacilities.map((facility) => (
              <FacilityCard key={facility.title} facility={facility} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="bg-warm-sand px-4 py-16 md:px-8">
        <Reveal className="mx-auto max-w-8xl">
          <h2 className="font-display text-2xl font-semibold text-charcoal-ink">What Our Guests Say</h2>
          {testimonials.length === 0 ? (
            <div className="mt-6">
              <PendingNote text="TODO: pending client content — testimonials" />
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} className="rounded-lg bg-soft-ivory p-6 shadow-sm">
                  {testimonial.quote}
                </div>
              ))}
            </div>
          )}
        </Reveal>
      </section>
    </main>
  );
}
