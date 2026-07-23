import type { Metadata } from "next";

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
