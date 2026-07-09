import Link from "next/link";
import FacilityCard from "@/components/shared/FacilityCard";
import TestimonialCard from "@/components/shared/TestimonialCard";
import { facilities } from "@/lib/content/facilities";
import { testimonials } from "@/lib/content/testimonials";

export default function Home() {
  return (
    <main>
      {/* Two Doors hero — stacks vertically on mobile */}
      <section className="flex flex-col md:h-[70vh] md:flex-row">
        <Link
          href="/accommodation/guest-lodge"
          className="group flex flex-1 flex-col items-center justify-center gap-3 bg-ochre-clay px-6 py-16 text-center text-soft-ivory transition hover:opacity-95 md:py-0"
        >
          <span className="font-utility text-sm uppercase tracking-widest">Short Stay</span>
          <span className="font-display text-3xl font-semibold md:text-4xl">Guest Lodge</span>
          <span className="font-body text-sm underline underline-offset-4">Book Now</span>
        </Link>

        <div className="flex items-center justify-center bg-slate-teal px-6 py-6 text-soft-ivory md:py-0">
          <span className="font-display text-xl font-semibold md:text-2xl">BK Guest Lodge</span>
        </div>

        <Link
          href="/accommodation/student-accommodation"
          className="group flex flex-1 flex-col items-center justify-center gap-3 bg-cornflower-dusk px-6 py-16 text-center text-soft-ivory transition hover:opacity-95 md:py-0"
        >
          <span className="font-utility text-sm uppercase tracking-widest">Long Stay</span>
          <span className="font-display text-3xl font-semibold md:text-4xl">Student Accommodation</span>
          <span className="font-body text-sm underline underline-offset-4">Apply Now</span>
        </Link>
      </section>

      {/* Facilities preview */}
      <section className="mx-auto max-w-8xl px-4 py-16 md:px-8">
        <h2 className="font-display text-2xl font-semibold text-charcoal-ink">Facilities</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {facilities.map((facility) => (
            <FacilityCard key={facility.title} facility={facility} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-warm-sand px-4 py-16 md:px-8">
        <div className="mx-auto max-w-8xl">
          <h2 className="font-display text-2xl font-semibold text-charcoal-ink">What Our Guests Say</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
