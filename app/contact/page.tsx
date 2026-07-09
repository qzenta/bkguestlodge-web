import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with BK Guest Lodge — Guest Lodge and Student Accommodation enquiries.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-8xl px-4 py-16 md:px-8">
      <h1 className="font-display text-3xl font-semibold text-charcoal-ink">Contact Us</h1>
      <p className="mt-4 max-w-xl font-body text-charcoal-ink/80">
        Fill out the form below, or use the WhatsApp button for a faster response.
      </p>
      <div className="mt-10">
        <Suspense fallback={null}>
          <ContactForm />
        </Suspense>
      </div>
    </main>
  );
}
