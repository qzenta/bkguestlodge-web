import type { Metadata } from "next";
import RoomTypeCard from "@/components/division/RoomTypeCard";
import BookingCTA from "@/components/division/BookingCTA";
import JsonLd from "@/components/shared/JsonLd";
import { roomTypes } from "@/lib/content/room-types";
import { SITE_URL, businessAddress, businessPhone } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Guest Lodge | BK Guest Lodge, Vanderbijlpark",
  },
  description:
    "Comfortable, secure short-stay accommodation in Vanderbijlpark — ideal for contractors, business travellers, and families.",
};

// priceRange and amenityFeature are real, client-confirmed data (10 Jul
// 2026: R600 sleepover / R450 day rest). Amenities are limited to ones
// with a real confirmed photo (Braai area, Secure parking) — Pool is
// excluded here even though it has a photo too, since it's flagged
// "New — confirm before publishing" in lib/content/facilities.ts and
// structured data is a publish surface same as visible copy.
const lodgingBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "BK Guest Lodge",
  url: `${SITE_URL}/accommodation/guest-lodge`,
  telephone: businessPhone,
  address: {
    "@type": "PostalAddress",
    ...businessAddress,
  },
  priceRange: "R450–R600",
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Braai area", value: true },
    { "@type": "LocationFeatureSpecification", name: "Secure parking", value: true },
  ],
};

export default function GuestLodgePage() {
  const rooms = roomTypes.filter((room) => room.division === "guest-lodge");

  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <JsonLd data={lodgingBusinessJsonLd} />
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
    </main>
  );
}
