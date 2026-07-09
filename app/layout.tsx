import type { Metadata } from "next";
import { Spectral, Inter, Space_Grotesk } from "next/font/google";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import WhatsAppCTA from "@/components/layout/WhatsAppCTA";
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
  title: {
    default: "BK Guest Lodge — Guest Lodge & Student Accommodation, Vanderbijlpark",
    template: "%s | BK Guest Lodge — Guest Lodge & Student Accommodation, Vanderbijlpark",
  },
  description:
    "BK Guest Lodge — Accommodation Solutions in Vanderbijlpark, spanning short-stay Guest Lodge and long-term Student Accommodation.",
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
        <Nav />
        {children}
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
