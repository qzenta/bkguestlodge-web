"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="mx-auto flex max-w-8xl flex-col items-center px-4 py-24 text-center md:px-8">
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Something Went Wrong</h1>
      <p className="mt-4 font-body text-charcoal-ink/80">
        Please try again, or reach us directly on WhatsApp.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="rounded-full bg-slate-teal px-6 py-3 font-utility text-sm text-soft-ivory hover:opacity-90"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-full bg-ochre-clay px-6 py-3 font-utility text-sm text-soft-ivory hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
