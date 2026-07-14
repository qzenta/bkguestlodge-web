import Link from "next/link";
import { businessPhone } from "@/lib/seo";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-warm-sand/30 bg-slate-teal font-utility text-sm text-soft-ivory md:hidden">
      <a
        href={`tel:${businessPhone}`}
        className="flex-1 border-r border-warm-sand/20 py-3 text-center hover:bg-cornflower-dusk/20"
      >
        Call Now
      </a>
      <Link
        href="/book-now"
        className="flex-1 bg-ochre-clay py-3 text-center font-semibold hover:opacity-90"
      >
        Book Now
      </Link>
    </div>
  );
}
