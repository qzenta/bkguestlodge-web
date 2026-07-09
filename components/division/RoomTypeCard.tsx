import Image from "next/image";
import type { RoomType } from "@/lib/content/types";

const accentClass: Record<RoomType["division"], string> = {
  "guest-lodge": "border-ochre-clay",
  "student-accommodation": "border-cornflower-dusk",
};

export default function RoomTypeCard({ room }: { room: RoomType }) {
  return (
    <div className={`overflow-hidden rounded-lg border-t-4 bg-soft-ivory shadow-sm ${accentClass[room.division]}`}>
      <div className="relative aspect-[4/3] bg-warm-sand">
        <Image src={room.photo} alt={room.name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-charcoal-ink">{room.name}</h3>
        <p className="mt-1 font-utility text-sm text-charcoal-ink">
          R{room.price.toLocaleString()} / {room.priceUnit}
        </p>
        {room.leaseTerm && (
          <p className="mt-1 font-body text-xs text-charcoal-ink/60">{room.leaseTerm}</p>
        )}
        <ul className="mt-3 space-y-1 font-body text-sm text-charcoal-ink/80">
          {room.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
