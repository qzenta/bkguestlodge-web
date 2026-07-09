import type { Metadata } from "next";
import RoomTypeCard from "@/components/division/RoomTypeCard";
import ApplicationCTA from "@/components/division/ApplicationCTA";
import PendingNote from "@/components/shared/PendingNote";
import { roomTypes } from "@/lib/content/room-types";
import { PENDING_CONTENT } from "@/lib/content/types";

export const metadata: Metadata = {
  title: {
    absolute: "Student Accommodation | BK Guest Lodge, Vanderbijlpark",
  },
  description:
    "Safe, affordable student accommodation in Vanderbijlpark, close to Vaal-region campuses.",
};

export default function StudentAccommodationPage() {
  const rooms = roomTypes.filter((room) => room.division === "student-accommodation");

  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="font-display text-3xl font-semibold text-charcoal-ink">
            Safe, settled student living
          </h1>

          <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
            Close to{" "}
            <PendingNote text="TODO: pending client content — confirm campus proximity (e.g. Sedibeng College / Vaal-region campuses)" />
            , with the security and structure that make it easier to focus on your studies.
          </p>

          <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
            We know handing your child&rsquo;s living situation to someone else isn&rsquo;t a
            small decision. BK Guest Lodge is a registered, managed property with clear house
            rules and{" "}
            <PendingNote text="TODO: pending client content — on-site management details, if any" />{" "}
            — not an informal room-share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rooms.map((room) => (
              <RoomTypeCard key={room.id} room={room} />
            ))}
          </div>

          <p className="mt-8 font-body text-sm text-charcoal-ink/80">
            Questions from a parent or student? Message us on WhatsApp: 072 080 0327, or use
            the form below.
          </p>
        </div>

        <div>
          <ApplicationCTA intakePeriod={PENDING_CONTENT} />
        </div>
      </div>
    </main>
  );
}
