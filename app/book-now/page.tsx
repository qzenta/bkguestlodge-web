import type { Metadata } from "next";
import BookingCTA from "@/components/division/BookingCTA";

export const metadata: Metadata = {
  title: "Book Now",
  description: "Book your stay at BK Guest Lodge's Guest Lodge division.",
};

export default function BookNowPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <div className="mx-auto max-w-md">
        <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Book Now</h1>
        <p className="mt-4 font-body text-charcoal-ink/80">
          Send us your dates and we&rsquo;ll confirm availability over WhatsApp.
        </p>
        <div className="mt-8">
          <BookingCTA />
        </div>
      </div>
    </main>
  );
}
