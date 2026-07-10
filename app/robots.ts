import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Standard allow-all with sitemap reference per BKGL-SEO-001 — no
// admin/API routes to disallow given the static architecture.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
