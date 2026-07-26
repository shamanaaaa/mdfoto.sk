import type { Metadata } from "next";

/** Opens the Google review box directly (from the Business Profile). */
export const GOOGLE_REVIEW_URL = "https://g.page/r/CdgGxIvf9A59EBM/review";
/** Google Maps profile (by CID) – lands on the listing with reviews. */
export const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps?cid=9011409145374705368";

interface OgInput {
  title: string;
  description: string;
  url: string;
  image?: string;
  imageAlt?: string;
}

/**
 * Builds a complete openGraph object for a page.
 *
 * Next.js merges metadata shallowly – when a page defines `openGraph`,
 * the layout's `openGraph` (siteName, locale, images…) is replaced
 * entirely. This helper keeps every page's OG data complete.
 */
export function og({
  title,
  description,
  url,
  image = "/images/rodinky-deti/mdfoto-rodinne-fotenie (23).jpg",
  imageAlt = "MDFOTO – Fotograf Nitra – Majka Domanová",
}: OgInput): Metadata["openGraph"] {
  return {
    type: "website",
    locale: "sk_SK",
    siteName: "MDFOTO",
    title,
    description,
    url,
    images: [{ url: image, width: 1200, height: 800, alt: imageAlt }],
  };
}
