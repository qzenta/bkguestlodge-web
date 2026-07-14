import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/shared/ContactForm";
import PageHero from "@/components/shared/PageHero";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: {
    absolute: "Contact Us | BK Guest Lodge",
  },
  description: "Get in touch with BK Guest Lodge via WhatsApp, email, or our contact form.",
};

const contactBreadcrumb = breadcrumbJsonLd([{ name: "Contact", href: "/contact" }]);

export default function ContactPage() {
  return (
    <main>
      <JsonLd data={contactBreadcrumb} />
      <PageHero
        src="/images/stock/contact-hero.jpg"
        alt="A warmly lit guesthouse veranda at dusk"
      />
      <div className="mx-auto max-w-8xl px-4 py-16 md:px-8">
        <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Get in touch</h1>
        <p className="mt-4 max-w-xl font-body text-charcoal-ink/80">
          Whether you&rsquo;re booking a stay, applying for student accommodation, or just have
          a question — reach out however&rsquo;s easiest for you.
        </p>

        <address className="mt-6 not-italic">
          <dl className="space-y-1 font-body text-sm text-charcoal-ink/80">
            <div>
              <dt className="inline font-utility font-semibold text-charcoal-ink">WhatsApp: </dt>
              <dd className="inline">072 080 0327</dd>
            </div>
            <div>
              <dt className="inline font-utility font-semibold text-charcoal-ink">Email: </dt>
              <dd className="inline">info@bkguestlodge.co.za</dd>
            </div>
            <div>
              <dt className="inline font-utility font-semibold text-charcoal-ink">Address: </dt>
              <dd className="inline">8 Meurant Street, Vanderbijlpark S E 1, Vanderbijlpark, Gauteng, 1911</dd>
            </div>
          </dl>
        </address>

        <div className="mt-10">
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
