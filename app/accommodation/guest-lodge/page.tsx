import type { Metadata } from "next";
import RoomTypeCard from "@/components/division/RoomTypeCard";
import BookingCTA from "@/components/division/BookingCTA";
import JsonLd from "@/components/shared/JsonLd";
import PageHero from "@/components/shared/PageHero";
import AudienceCard from "@/components/shared/AudienceCard";
import { roomTypes } from "@/lib/content/room-types";
import { audiences } from "@/lib/content/audiences";
import { lodgingBusinessJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Guest Lodge | BK Guest Lodge, Vanderbijlpark",
  },
  description:
    "Comfortable, secure short-stay accommodation in Vanderbijlpark — ideal for contractors, business travellers, and families.",
};

const guestLodgeBreadcrumb = breadcrumbJsonLd([
  { name: "Guest Lodge", href: "/accommodation/guest-lodge" },
]);

export default function GuestLodgePage() {
  const rooms = roomTypes.filter((room) => room.division === "guest-lodge");

  return (
    <main>
      <JsonLd data={lodgingBusinessJsonLd()} />
      <JsonLd data={guestLodgeBreadcrumb} />
      <PageHero
        src="/images/stock/guest-lodge-hero.jpg"
        alt="A South African guesthouse veranda lit warmly at dusk"
      />
      <div className="mx-auto max-w-8xl px-4 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="font-display text-3xl font-semibold text-charcoal-ink">
              Stay in Vanderbijlpark, without the guesswork
            </h1>
            <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
              Whether you&rsquo;re here for a contract, a client visit, or a weekend away, Guest
              Lodge gives you a comfortable, secure base — close to both ArcelorMittal and
              Sedibeng College.
            </p>

            <p className="mt-4 max-w-2xl font-body text-sm text-charcoal-ink/70">
              <strong>Day Rest</strong> — use of a room during the day (no overnight stay).{" "}
              <strong>Sleepover</strong> — full overnight stay, check-in to check-out.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {rooms.map((room) => (
                <RoomTypeCard key={room.id} room={room} />
              ))}
            </div>

            <p className="mt-8 font-body text-sm text-charcoal-ink/80">
              Prefer to chat first? Message us on WhatsApp: 072 080 0327
            </p>
          </div>

          <div>
            <BookingCTA />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-charcoal-ink">
            Who stays with us
          </h2>
          <p className="mt-2 max-w-2xl font-body text-charcoal-ink/80">
            Guest Lodge suits anyone who needs a comfortable, secure base in
            Vanderbijlpark — here&rsquo;s how we fit a few common reasons to stay.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <AudienceCard key={audience.label} audience={audience} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
