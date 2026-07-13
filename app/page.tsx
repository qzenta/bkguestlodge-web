import Link from "next/link";
import FacilityCard from "@/components/shared/FacilityCard";
import PendingNote from "@/components/shared/PendingNote";
import { facilities } from "@/lib/content/facilities";
import { testimonials } from "@/lib/content/testimonials";

export default function Home() {
  const previewFacilities = facilities.slice(0, 4);

  return (
    <main>
      {/* Two Doors hero — stacks vertically on mobile */}
      <section className="flex flex-col md:h-[70vh] md:flex-row">
        <Link
          href="/accommodation/guest-lodge"
          className="group flex flex-1 flex-col items-center justify-center gap-3 bg-ochre-clay px-6 py-16 text-center text-soft-ivory transition hover:opacity-95 md:py-0"
        >
          <span className="font-display text-3xl font-semibold md:text-4xl">Guest Lodge</span>
          <span className="max-w-xs font-body text-sm">
            A comfortable stay in Vanderbijlpark — for business, for family, for the weekend.
          </span>
          <span className="font-body text-sm underline underline-offset-4">Book now →</span>
        </Link>

        <div className="flex items-center justify-center bg-slate-teal px-6 py-6 text-soft-ivory md:py-0">
          <span className="font-display text-xl font-semibold md:text-2xl">BK Guest Lodge</span>
        </div>

        <Link
          href="/accommodation/student-accommodation"
          className="group flex flex-1 flex-col items-center justify-center gap-3 bg-cornflower-dusk px-6 py-16 text-center text-soft-ivory transition hover:opacity-95 md:py-0"
        >
          <span className="rounded-full bg-slate-teal px-3 py-1 font-utility text-xs font-semibold uppercase tracking-wide">
            Opening January 2027
          </span>
          <span className="font-display text-3xl font-semibold md:text-4xl">Student Accommodation</span>
          <span className="max-w-xs font-body text-sm">
            Safe, affordable student housing, close to campus.
          </span>
          <span className="font-body text-sm underline underline-offset-4">Apply now →</span>
        </Link>
      </section>

      {/* Below the fold */}
      <section className="mx-auto max-w-8xl px-4 py-16 text-center md:px-8">
        <h1 className="font-display text-2xl font-semibold text-charcoal-ink md:text-3xl">
          One address on Meurant Street. Two ways to call it home.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl font-body text-charcoal-ink/80">
          BK Guest Lodge&rsquo;s Accommodation Solutions welcome short-stay guests —
          contractors, business travellers, and families passing through Vanderbijlpark —
          alongside students who call it home for the term. Whichever door you&rsquo;re here
          for, you&rsquo;ll find the same standard of care.
        </p>
      </section>

      {/* Facilities preview */}
      <section className="mx-auto max-w-8xl px-4 pb-16 md:px-8">
        <h2 className="font-display text-2xl font-semibold text-charcoal-ink">Facilities</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {previewFacilities.map((facility) => (
            <FacilityCard key={facility.title} facility={facility} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-warm-sand px-4 py-16 md:px-8">
        <div className="mx-auto max-w-8xl">
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
        </div>
      </section>
    </main>
  );
}
