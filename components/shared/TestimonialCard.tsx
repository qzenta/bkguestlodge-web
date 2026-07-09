import type { Testimonial } from "@/lib/content/types";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-lg bg-soft-ivory p-6 shadow-sm">
      <div className="font-utility text-sm text-ochre-clay">
        {"★".repeat(testimonial.rating)}
      </div>
      <p className="mt-2 font-body text-sm italic text-charcoal-ink/90">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <p className="mt-3 font-utility text-sm font-semibold text-charcoal-ink">
        {testimonial.name}
      </p>
      <p className="font-utility text-xs uppercase tracking-wide text-charcoal-ink/50">
        {testimonial.division === "guest-lodge"
          ? "Guest Lodge"
          : testimonial.division === "student-accommodation"
            ? "Student Accommodation"
            : "General"}
      </p>
    </div>
  );
}
