import Link from "next/link";
import { businessPhone } from "@/lib/seo";

type EnquiryCTAProps = {
  heading?: string;
  body?: string;
};

export default function EnquiryCTA({
  heading = "Ready to book your stay?",
  body = "Reach out and we'll help you find the right room for your trip to Vanderbijlpark.",
}: EnquiryCTAProps) {
  return (
    <div className="mt-16 rounded-lg bg-slate-teal px-6 py-10 text-center text-soft-ivory md:px-12">
      <h2 className="font-display text-2xl font-semibold">{heading}</h2>
      <p className="mx-auto mt-3 max-w-xl font-body text-soft-ivory/90">{body}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/book-now"
          className="inline-block rounded-full bg-ochre-clay px-6 py-3 font-body text-sm font-semibold text-soft-ivory transition hover:opacity-90"
        >
          Book Your Stay
        </Link>
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-soft-ivory/70 px-6 py-3 font-body text-sm font-semibold text-soft-ivory transition hover:bg-soft-ivory/10"
        >
          WhatsApp Us
        </a>
        <a
          href={`tel:${businessPhone}`}
          className="inline-block rounded-full border border-soft-ivory/70 px-6 py-3 font-body text-sm font-semibold text-soft-ivory transition hover:bg-soft-ivory/10"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}
