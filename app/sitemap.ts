import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { localSeoPages } from "@/lib/content/local-seo";

// Priorities per BKGL-SEO-001: Home/Accommodation pages 1.0;
// Facilities/Gallery/FAQs 0.7. Contact/Book Now (conversion pages) and
// About/legal-style pages aren't explicitly specified there — using
// reasonable judgement (0.8 for conversion, 0.6 for informational).
// Local SEO pages (Sprint 5) sit at 0.6 alongside other informational
// pages — genuinely useful long-tail content, but not primary nav pages.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified, priority: 1.0 },
    { url: `${SITE_URL}/accommodation/guest-lodge`, lastModified, priority: 1.0 },
    { url: `${SITE_URL}/accommodation/student-accommodation`, lastModified, priority: 1.0 },
    { url: `${SITE_URL}/book-now`, lastModified, priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified, priority: 0.8 },
    { url: `${SITE_URL}/facilities`, lastModified, priority: 0.7 },
    { url: `${SITE_URL}/gallery`, lastModified, priority: 0.7 },
    { url: `${SITE_URL}/faqs`, lastModified, priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified, priority: 0.6 },
    { url: `${SITE_URL}/explore-the-area`, lastModified, priority: 0.6 },
    { url: `${SITE_URL}/privacy-policy`, lastModified, priority: 0.3 },
    { url: `${SITE_URL}/popia-notice`, lastModified, priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified, priority: 0.3 },
    ...localSeoPages.map((page) => ({
      url: `${SITE_URL}/accommodation/${page.slug}`,
      lastModified,
      priority: 0.6,
    })),
  ];
}
