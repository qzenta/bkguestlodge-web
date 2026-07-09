import type { Metadata } from "next";
import RoomTypeCard from "@/components/division/RoomTypeCard";
import BookingCTA from "@/components/division/BookingCTA";
import PendingNote from "@/components/shared/PendingNote";
import { roomTypes } from "@/lib/content/room-types";

export const metadata: Metadata = {
  title: {
    absolute: "Guest Lodge | BK Guest Lodge, Vanderbijlpark",
  },
  description:
    "Comfortable, secure short-stay accommodation in Vanderbijlpark — ideal for contractors, business travellers, and families.",
};

export default function GuestLodgePage() {
  const rooms = roomTypes.filter((room) => room.division === "guest-lodge");

  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="font-display text-3xl font-semibold text-charcoal-ink">
            Stay in Vanderbijlpark, without the guesswork
          </h1>
          <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
            Whether you&rsquo;re here for a contract, a client visit, or a weekend away, Guest
            Lodge gives you a comfortable, secure base — close to{" "}
            <PendingNote text="TODO: pending client content — confirm local landmarks (e.g. ArcelorMittal)" />
            .
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
