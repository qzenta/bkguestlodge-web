import type { Metadata } from "next";
import RoomTypeCard from "@/components/division/RoomTypeCard";
import ApplicationCTA from "@/components/division/ApplicationCTA";
import { roomTypes } from "@/lib/content/room-types";

export const metadata: Metadata = {
  title: "Student Accommodation",
  description:
    "Affordable, safe student accommodation in Vanderbijlpark, close to Sedibeng and Vaal campuses.",
};

export default function StudentAccommodationPage() {
  const rooms = roomTypes.filter((room) => room.division === "student-accommodation");

  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <div className="grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Student Accommodation</h1>
          <p className="mt-4 max-w-2xl font-body text-charcoal-ink/80">
            Safe, affordable accommodation for university and TVET students, close to
            Sedibeng and Vaal-area campuses. Monthly rates, clear house rules, and a
            straightforward application process.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rooms.map((room) => (
              <RoomTypeCard key={room.id} room={room} />
            ))}
          </div>
        </div>

        <div>
          <ApplicationCTA intakePeriod="Contact us for current availability" />
        </div>
      </div>
    </main>
  );
}
