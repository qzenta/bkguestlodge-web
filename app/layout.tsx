import type { Metadata } from "next";
import { Spectral, Inter, Space_Grotesk } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/layout/WhatsAppCTA";
import JsonLd from "@/components/shared/JsonLd";
import { SITE_URL, businessAddress, businessPhone, cipcRegistrationNumber } from "@/lib/seo";
import "./globals.css";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bkguestlodge.co.za"),
  title: {
    default: "BK Guest Lodge — Guest Lodge & Student Accommodation, Vanderbijlpark",
    template: "%s | BK Guest Lodge — Guest Lodge & Student Accommodation, Vanderbijlpark",
  },
  description:
    "Comfortable short stays and safe student housing at BK Guest Lodge, Vanderbijlpark. Book your stay or apply for accommodation today.",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BK Guest Lodge",
  url: SITE_URL,
  logo: `${SITE_URL}/brand/bk-logo-icon.png`,
  telephone: businessPhone,
  address: {
    "@type": "PostalAddress",
    ...businessAddress,
  },
  identifier: {
    "@type": "PropertyValue",
    name: "CIPC Registration Number",
    value: cipcRegistrationNumber,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spectral.variable} ${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}
      >
        <JsonLd data={organizationJsonLd} />
        <Nav />
        {children}
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
