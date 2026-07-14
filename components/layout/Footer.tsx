import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-teal text-soft-ivory">
      <div className="mx-auto max-w-8xl px-4 py-10 md:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Image
              src="/brand/bk-logo-full.png"
              alt="BK Guest Lodge — Stays for Travellers. Homes for Students."
              width={72}
              height={72}
              className="rounded-lg"
            />
            <p className="mt-4 font-body text-sm text-warm-sand/80">
              8 Meurant Street, Vanderbijlpark S E 1, Gauteng, 1911
            </p>
            <p className="mt-1 font-body text-sm text-warm-sand/80">
              Reg. No. 2026/539205/07
            </p>
          </div>

          <div>
            <p className="font-utility text-sm uppercase tracking-wide text-warm-sand/60">
              Guest Lodge
            </p>
            <Link href="/accommodation/guest-lodge" className="mt-2 block font-body text-sm hover:text-warm-sand">
              Rooms &amp; Rates
            </Link>
            <Link href="/book-now" className="mt-2 block font-body text-sm hover:text-warm-sand">
              Book Now
            </Link>
          </div>

          <div>
            <p className="font-utility text-sm uppercase tracking-wide text-warm-sand/60">
              Student Accommodation
            </p>
            <Link
              href="/accommodation/student-accommodation"
              className="mt-2 block font-body text-sm hover:text-warm-sand"
            >
              Rooms &amp; Lease Terms
            </Link>
            <Link href="/contact" className="mt-2 block font-body text-sm hover:text-warm-sand">
              Enquire / Apply
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-warm-sand/20 pt-6">
          <div className="flex flex-wrap gap-x-6 gap-y-1">
            <Link href="/privacy-policy" className="font-body text-xs text-warm-sand/60 hover:text-warm-sand">
              Privacy Policy
            </Link>
            <Link href="/popia-notice" className="font-body text-xs text-warm-sand/60 hover:text-warm-sand">
              POPIA Notice
            </Link>
            <Link href="/terms" className="font-body text-xs text-warm-sand/60 hover:text-warm-sand">
              Terms &amp; Conditions
            </Link>
          </div>
          <p className="mt-3 font-body text-xs text-warm-sand/60">
            © {new Date().getFullYear()} BK Guest Lodge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
