"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { businessAddress, businessEmail } from "@/lib/seo";
import CurrencyConverter from "@/components/shared/CurrencyConverter";
import WeatherWidget from "@/components/shared/WeatherWidget";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/accommodation/guest-lodge", label: "Guest Lodge" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/explore-the-area", label: "Explore the Area" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden bg-charcoal-ink text-soft-ivory/70 md:block">
        <div className="mx-auto flex max-w-8xl items-center justify-between gap-6 px-4 py-1.5 font-utility text-xs md:px-8">
          <div className="flex items-center gap-6">
            <span>
              {businessAddress.streetAddress}, {businessAddress.addressLocality}
            </span>
            <a href={`mailto:${businessEmail}`} className="hover:text-soft-ivory">
              {businessEmail}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <CurrencyConverter />
            <WeatherWidget />
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-slate-teal text-soft-ivory">
        <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="flex items-center rounded-lg bg-soft-ivory p-2">
            <Image
              src="/brand/bk-logo-full.png"
              alt="BK Guest Lodge — Stays for Travellers. Homes for Students."
              width={230}
              height={202}
              className="h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-6 font-utility text-sm md:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-warm-sand">
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-now"
              className="rounded-full bg-ochre-clay px-4 py-2 text-soft-ivory hover:opacity-90"
            >
              Book Now
            </Link>
          </nav>

          <button
            type="button"
            className="font-utility text-sm md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-warm-sand/20 px-4 pb-4 font-utility text-sm md:hidden">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-now"
              className="mt-2 rounded-full bg-ochre-clay px-4 py-2 text-center text-soft-ivory"
              onClick={() => setOpen(false)}
            >
              Book Now
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
