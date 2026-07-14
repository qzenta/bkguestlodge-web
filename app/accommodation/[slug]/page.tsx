import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/shared/PageHero";
import EnquiryCTA from "@/components/shared/EnquiryCTA";
import AudienceCard from "@/components/shared/AudienceCard";
import JsonLd from "@/components/shared/JsonLd";
import { localSeoPages } from "@/lib/content/local-seo";
import { audiences } from "@/lib/content/audiences";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return localSeoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = localSeoPages.find((p) => p.slug === slug);
  if (!page) return {};

  return {
    title: { absolute: page.title },
    description: page.metaDescription,
  };
}

export default async function LocalSeoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = localSeoPages.find((p) => p.slug === slug);
  if (!page) notFound();

  const relatedAudience = page.relatedAudience
    ? audiences.find((a) => a.label === page.relatedAudience)
    : undefined;

  const pageBreadcrumb = breadcrumbJsonLd([
    { name: page.h1, href: `/accommodation/${page.slug}` },
  ]);

  return (
    <main>
      <JsonLd data={pageBreadcrumb} />
      <PageHero
        src="/images/stock/guest-lodge-hero.jpg"
        alt="A South African guesthouse veranda lit warmly at dusk"
      />
      <div className="mx-auto max-w-8xl px-4 py-16 md:px-8">
        <h1 className="font-display text-3xl font-semibold text-charcoal-ink">{page.h1}</h1>

        <div className="mt-4 max-w-2xl space-y-4 font-body text-charcoal-ink/80">
          {page.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {page.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-lg bg-soft-ivory p-4 font-body text-sm text-charcoal-ink/80 shadow-sm"
            >
              {highlight}
            </li>
          ))}
        </ul>

        {relatedAudience && (
          <div className="mt-10 max-w-sm">
            <AudienceCard audience={relatedAudience} />
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/accommodation/guest-lodge"
            className="font-utility text-sm font-semibold text-slate-teal underline underline-offset-4 hover:text-cornflower-dusk"
          >
            View our rooms →
          </Link>
          <Link
            href="/facilities"
            className="font-utility text-sm font-semibold text-slate-teal underline underline-offset-4 hover:text-cornflower-dusk"
          >
            What&rsquo;s included →
          </Link>
          <Link
            href="/faqs"
            className="font-utility text-sm font-semibold text-slate-teal underline underline-offset-4 hover:text-cornflower-dusk"
          >
            FAQs →
          </Link>
        </div>

        <EnquiryCTA />
      </div>
    </main>
  );
}
