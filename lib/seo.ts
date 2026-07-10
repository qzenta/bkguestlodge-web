export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bkguestlodge.co.za";

// Single source of truth for NAP (Name/Address/Phone) data used in
// structured data. Keep in sync with the address/phone printed in
// components/layout/Footer.tsx and app/contact/page.tsx.
export const businessAddress = {
  streetAddress: "8 Meurant Street",
  addressLocality: "Vanderbijlpark S E 1",
  addressRegion: "Gauteng",
  postalCode: "1911",
  addressCountry: "ZA",
};

export const businessPhone = "+27720800327";
export const businessEmail = "info@bkguestlodge.co.za";
export const cipcRegistrationNumber = "2026/539205/07";
