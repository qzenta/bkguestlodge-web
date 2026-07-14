import { businessPhone } from "@/lib/seo";
import TrackedLink from "@/components/shared/TrackedLink";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-warm-sand/30 bg-slate-teal font-utility text-sm text-soft-ivory md:hidden">
      <TrackedLink
        href={`tel:${businessPhone}`}
        eventAction="click_call"
        eventCategory="conversion"
        eventLabel="mobile_sticky_bar"
        external
        className="flex-1 border-r border-warm-sand/20 py-3 text-center hover:bg-cornflower-dusk/20"
      >
        Call Now
      </TrackedLink>
      <TrackedLink
        href="/book-now"
        eventAction="click_book_now"
        eventCategory="conversion"
        eventLabel="mobile_sticky_bar"
        className="flex-1 bg-ochre-clay py-3 text-center font-semibold hover:opacity-90"
      >
        Book Now
      </TrackedLink>
    </div>
  );
}
