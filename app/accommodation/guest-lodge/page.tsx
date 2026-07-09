import type { Metadata } from "next";
import RoomTypeCard from "@/components/division/RoomTypeCard";
import BookingCTA from "@/components/division/BookingCTA";
import { roomTypes } from "@/lib/content/room-types";

export const metadata: Metadata = {
  title: "Guest Lodge",
  description:
    "Short-stay guest lodge accommodation in Vanderbijlpark — ideal for business travellers, contractors, and weekend visitors.",
};

export default function GuestLodgePage() {
  const rooms = roomTypes.filter((room) => room.division === "guest-lodge");

  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Guest Lodge</h1>
          <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
            Comfortable short-stay rooms in Vanderbijlpark, close to industrial sites and
            local attractions. Wi-Fi, workspace, and quick WhatsApp booking.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rooms.map((room) => (
              <RoomTypeCard key={room.id} room={room} />
            ))}
          </div>
        </div>

        <div>
          <BookingCTA />
        </div>
      </div>
    </main>
  );
}
