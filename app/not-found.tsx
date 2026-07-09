import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-8xl flex-col items-center px-4 py-24 text-center md:px-8">
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Page Not Found</h1>
      <p className="mt-4 font-body text-charcoal-ink/80">
        We couldn&rsquo;t find the page you were looking for.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/accommodation/guest-lodge"
          className="rounded-full bg-ochre-clay px-6 py-3 font-utility text-sm text-soft-ivory hover:opacity-90"
        >
          Back to Guest Lodge
        </Link>
        <Link
          href="/accommodation/student-accommodation"
          className="rounded-full bg-cornflower-dusk px-6 py-3 font-utility text-sm text-soft-ivory hover:opacity-90"
        >
          Back to Student Accommodation
        </Link>
      </div>
    </main>
  );
}
