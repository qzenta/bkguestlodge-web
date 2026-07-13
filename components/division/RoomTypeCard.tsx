import Image from "next/image";
import type { RoomType } from "@/lib/content/types";
import PendingNote, { isPending } from "@/components/shared/PendingNote";

const accentClass: Record<RoomType["division"], string> = {
  "guest-lodge": "border-ochre-clay",
  "student-accommodation": "border-cornflower-dusk",
};

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
          <Image src={room.photo} alt={room.name} fill className="object-cover" />
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
      </div>
    </div>
  );
}
