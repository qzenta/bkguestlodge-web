"use client";

import { useEffect, useState } from "react";

const CURRENCIES = ["USD", "EUR", "GBP"];

export default function CurrencyConverter() {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setLoading(true);
    // Frankfurter is free and keyless (ECB reference rates).
    fetch(`https://api.frankfurter.dev/v1/latest?base=ZAR&symbols=${currency}`)
      .then((res) => res.json())
      .then((json) => {
        if (!cancelled) setRate(json?.rates?.[currency] ?? null);
      })
      .catch(() => {
        if (!cancelled) setRate(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [open, currency]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full bg-soft-ivory px-4 py-2 font-utility text-xs font-semibold uppercase tracking-wide text-slate-teal transition hover:opacity-90"
      >
        Currency Converter <span aria-hidden="true">🧮</span>
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-2 w-64 rounded-lg bg-soft-ivory p-4 text-charcoal-ink shadow-lg">
          <label className="block font-utility text-xs uppercase tracking-wide text-slate-teal">
            Convert to
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="mt-1 w-full rounded border border-charcoal-ink/20 px-2 py-1 font-body text-sm normal-case tracking-normal text-charcoal-ink"
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <div className="mt-3 space-y-1 font-body text-sm">
            {loading || rate === null ? (
              <p className="text-charcoal-ink/60">{loading ? "Loading rates…" : "Rates unavailable"}</p>
            ) : (
              <>
                <p>
                  R600 (Sleepover) ≈ {(600 * rate).toFixed(2)} {currency}
                </p>
                <p>
                  R450 (Day Rest) ≈ {(450 * rate).toFixed(2)} {currency}
                </p>
              </>
            )}
          </div>
          <p className="mt-2 font-body text-xs text-charcoal-ink/50">Indicative only — rates fluctuate daily.</p>
        </div>
      )}
    </div>
  );
}
