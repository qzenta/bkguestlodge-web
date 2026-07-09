# BK Guest Lodge — Website

Next.js (App Router, TypeScript, Tailwind) site for BK Guest Lodge — Guest Lodge and Student Accommodation divisions, Vanderbijlpark. First pilot implementation of the ATLAS Client Framework.

Built against the BKGL planning baseline (BKGL-BR/IA/DS/CI/TA/SEO/FE-001, v1.0, Approved 9 July 2026).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example`:

```
BREVO_API_KEY=
NEXT_PUBLIC_WHATSAPP_NUMBER=27720800327
NEXT_PUBLIC_SITE_URL=https://www.bkguestlodge.co.za
```

## Structure

- `app/` — routes per BKGL-IA-001 (Home, About, Accommodation ⇢ Guest Lodge / Student Accommodation, Facilities, Gallery, FAQs, Contact, Book Now)
- `components/layout` — Nav, Footer, WhatsApp CTA
- `components/shared` — FacilityCard, TestimonialCard, FAQAccordion, GalleryGrid, ContactForm
- `components/division` — RoomTypeCard, BookingCTA, ApplicationCTA (shared components with a `division` prop, not duplicated per division)
- `lib/content/` — static content (room types, facilities, testimonials, FAQs, gallery) — swap for CMS fetches later without touching components
- `lib/brevo.ts` — Brevo transactional email integration for the contact form

## Notes

- Static generation for every route except `/api/contact` (per BKGL-TA-001's OCI shared-compute constraints).
- Placeholder copy and content only — `public/images/` is empty pending BKGL-CONTENT-001 (photography spec). "Accommodation Solutions" umbrella positioning is not yet used in visible copy; pending sign-off from Beauty Tshabalala.
