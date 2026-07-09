import Link from "next/link";

export default function ApplicationCTA({ intakePeriod }: { intakePeriod: string }) {
  return (
    <div className="rounded-lg border-t-4 border-cornflower-dusk bg-soft-ivory p-6 shadow-sm">
      <h3 className="font-display text-lg font-semibold text-charcoal-ink">Apply for Student Accommodation</h3>
      <p className="mt-2 font-body text-sm text-charcoal-ink/80">
        Current intake period: <span className="font-utility">{intakePeriod}</span>
      </p>
      <Link
        href="/contact?division=student-accommodation"
        className="mt-5 block rounded-full bg-cornflower-dusk px-4 py-3 text-center font-utility text-sm text-soft-ivory hover:opacity-90"
      >
        Apply Now
      </Link>
    </div>
  );
}
