"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "bkgl_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(CONSENT_KEY)) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-14 z-50 mx-auto max-w-2xl px-4 md:bottom-4">
      <div className="rounded-lg border border-warm-sand/30 bg-slate-teal p-4 shadow-lg md:p-5">
        <p className="font-body text-sm text-soft-ivory/90">
          We use essential cookies to make this site work. We&rsquo;d also like to use analytics
          cookies to understand how you use our site so we can improve it.{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-2 hover:text-warm-sand"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="mt-3 flex gap-3">
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-ochre-clay px-5 py-2 font-utility text-sm font-semibold text-soft-ivory hover:opacity-90"
          >
            Accept all
          </button>
          <button
            type="button"
            onClick={reject}
            className="rounded-full border border-soft-ivory/50 px-5 py-2 font-utility text-sm text-soft-ivory hover:bg-soft-ivory/10"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}
