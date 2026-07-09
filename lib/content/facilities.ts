import { PENDING_CONTENT, type Facility } from "./types";

// Draft list from BKGL_Content_Draft.md — every item was bracketed
// ("pending final list" / "not yet verified complete"). Do not fill in
// descriptions until the client confirms; the names below are the
// draft's candidates, not confirmed copy.
export const facilities: Facility[] = [
  { icon: "flame", title: "Braai area", description: PENDING_CONTENT, pending: true },
  { icon: "car", title: "Secure parking", description: PENDING_CONTENT, pending: true },
  { icon: "zap", title: "Backup water/power", description: PENDING_CONTENT, pending: true },
  { icon: "wifi", title: "Wi-Fi", description: PENDING_CONTENT, pending: true },
  { icon: "shirt", title: "Laundry facilities", description: PENDING_CONTENT, pending: true },
  { icon: "book-open", title: "Communal study/common area", description: PENDING_CONTENT, pending: true },
];
