"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/accommodation/guest-lodge", label: "Guest Lodge" },
  { href: "/accommodation/student-accommodation", label: "Student Accommodation" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-teal text-soft-ivory">
      <div className="mx-auto flex max-w-8xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-wide">
          <Image
            src="/brand/bk-logo-icon.png"
            alt="BK Guest Lodge"
            width={36}
            height={36}
            className="rounded-md"
            priority
          />
          BK Guest Lodge
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
  );
}
