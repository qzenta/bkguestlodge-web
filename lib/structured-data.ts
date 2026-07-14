import { SITE_URL, businessAddress, businessPhone, businessEmail } from "./seo";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BK Guest Lodge",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/faqs`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(
  items: { name: string; href: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${SITE_URL}${item.href}`,
      })),
    ],
  };
}

export function faqPageJsonLd(
  questions: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function lodgingBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "BK Guest Lodge",
    url: `${SITE_URL}/accommodation/guest-lodge`,
    telephone: businessPhone,
    email: businessEmail,
    address: {
      "@type": "PostalAddress",
      ...businessAddress,
    },
    priceRange: "R450–R600",
    currenciesAccepted: "ZAR",
    paymentAccepted: "Cash, EFT",
    checkinTime: "14:00",
    checkoutTime: "10:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Secure parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Backup power", value: true },
      { "@type": "LocationFeatureSpecification", name: "Backup water supply", value: true },
      { "@type": "LocationFeatureSpecification", name: "Daily housekeeping", value: true },
      { "@type": "LocationFeatureSpecification", name: "24-hour security", value: true },
      { "@type": "LocationFeatureSpecification", name: "Braai area", value: true },
    ],
  };
}
