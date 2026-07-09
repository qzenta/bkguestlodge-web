"use client";

import { useState } from "react";

export default function BookingCTA() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("");
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  const message = encodeURIComponent(
    `Hi, I'd like to book the Guest Lodge.\nCheck-in: ${checkIn || "—"}\nCheck-out: ${checkOut || "—"}\nRoom type: ${roomType || "—"}`
  );

  return (
    <div className="rounded-lg border-t-4 border-ochre-clay bg-soft-ivory p-6 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-charcoal-ink">Book Your Stay</h3>

      <div className="mt-4 space-y-3">
        <label className="block font-utility text-sm text-charcoal-ink">
          Check-in
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="mt-1 w-full rounded border border-charcoal-ink/20 bg-soft-ivory px-3 py-2 font-body text-sm focus:border-slate-teal focus:outline-none focus:ring-1 focus:ring-slate-teal"
          />
        </label>

        <label className="block font-utility text-sm text-charcoal-ink">
          Check-out
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="mt-1 w-full rounded border border-charcoal-ink/20 bg-soft-ivory px-3 py-2 font-body text-sm focus:border-slate-teal focus:outline-none focus:ring-1 focus:ring-slate-teal"
          />
        </label>

        <label className="block font-utility text-sm text-charcoal-ink">
          Room type
          <input
            type="text"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            placeholder="Standard / Deluxe"
            className="mt-1 w-full rounded border border-charcoal-ink/20 bg-soft-ivory px-3 py-2 font-body text-sm focus:border-slate-teal focus:outline-none focus:ring-1 focus:ring-slate-teal"
          />
        </label>
      </div>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 block rounded-full bg-slate-teal px-4 py-3 text-center font-utility text-sm text-soft-ivory hover:opacity-90"
      >
        Book Now via WhatsApp
      </a>
    </div>
  );
}
