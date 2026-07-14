import Image from "next/image";
import type { RoomType } from "@/lib/content/types";
import PendingNote, { isPending } from "@/components/shared/PendingNote";

const accentClass: Record<RoomType["division"], string> = {
  "guest-lodge": "border-ochre-clay",
  "student-accommodation": "border-cornflower-dusk",
};

// Property-wide facts confirmed in lib/content/facilities.ts
// (BKGL-CONTENT-001, approved by Beauty Tshabalala 13 Jul 2026) — Wi-Fi,
// parking, security, and backup power/water don't vary by room, so they're
// listed here rather than duplicated in the content model. Kitchen access
// and per-room max occupancy have no confirmed answer yet and are marked
// pending rather than guessed; AC/heating uses the same "ask us when
// booking" caveat already established in facilities.ts.
const roomAmenitiesAtAGlance: { label: string; status: "included" | "askWhenBooking" | "pending" }[] = [
  { label: "Wi-Fi", status: "included" },
  { label: "Parking", status: "included" },
  { label: "Security", status: "included" },
  { label: "Bathroom", status: "included" },
  { label: "Air conditioning / heating", status: "askWhenBooking" },
  { label: "Kitchen access", status: "pending" },
  { label: "Maximum occupancy", status: "pending" },
];

export default function RoomTypeCard({ room }: { room: RoomType }) {
  if (room.pending) {
    return (
      <div
        className={`rounded-lg border-t-4 border-dashed bg-soft-ivory p-5 shadow-sm ${accentClass[room.division]}`}
      >
        <h3 className="font-display text-lg font-semibold text-charcoal-ink">Room details</h3>
        <div className="mt-2">
          <PendingNote text="TODO: pending client content — room name, photo, pricing, amenities" />
        </div>
      </div>
    );
  }

  const amenitiesArePending = room.amenities.length > 0 && isPending(room.amenities[0]);

  return (
    <div className={`overflow-hidden rounded-lg border-t-4 bg-soft-ivory shadow-sm ${accentClass[room.division]}`}>
      {room.photo ? (
        <div className="relative aspect-[4/3] bg-warm-sand">
          <Image
            src={room.photo}
            alt={room.name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div className="flex aspect-[4/3] items-center justify-center bg-warm-sand p-4">
          <PendingNote text="TODO: pending client content — photo" />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-charcoal-ink">{room.name}</h3>
        {room.rates ? (
          <ul className="mt-1 space-y-0.5 font-utility text-sm text-charcoal-ink">
            {room.rates.map((rate) => (
              <li key={rate.label}>
                R{rate.price.toLocaleString()} — {rate.label}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-1 font-utility text-sm text-charcoal-ink">
            R{room.price?.toLocaleString()} / {room.priceUnit}
          </p>
        )}
        {room.leaseTerm && (
          <p className="mt-1 font-body text-xs text-charcoal-ink/60">{room.leaseTerm}</p>
        )}
        <div className="mt-3">
          {amenitiesArePending ? (
            <PendingNote text="TODO: pending client content — amenities" />
          ) : (
            <ul className="space-y-1 font-body text-sm text-charcoal-ink/80">
              {room.amenities.map((amenity) => (
                <li key={amenity}>{amenity}</li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-4 border-t border-charcoal-ink/10 pt-3">
          <p className="font-utility text-xs font-semibold uppercase tracking-wide text-slate-teal">
            Room amenities at a glance
          </p>
          <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 font-body text-xs text-charcoal-ink/80">
            {roomAmenitiesAtAGlance.map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-2">
                <span>{item.label}</span>
                {item.status === "included" && <span aria-hidden="true">✓</span>}
                {item.status === "askWhenBooking" && (
                  <span className="text-charcoal-ink/50">Ask us</span>
                )}
                {item.status === "pending" && <PendingNote />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
