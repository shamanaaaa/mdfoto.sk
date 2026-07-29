import type { Metadata } from "next";

/** Opens the Google review box directly (from the Business Profile). */
export const GOOGLE_REVIEW_URL = "https://g.page/r/CdgGxIvf9A59EBM/review";
/** Google Maps profile (by CID) – lands on the listing with reviews. */
export const GOOGLE_PROFILE_URL =
  "https://www.google.com/maps?cid=9011409145374705368";

export interface GoogleReview {
  /** Abbreviated surname, as displayed on the listing. */
  name: string;
  text: string;
  rating: number;
}

/**
 * Google reviews rendered on the homepage and marked up as Review.
 *
 * Copied from the listing with surnames abbreviated. Wording is verbatim apart
 * from diacritics and punctuation the reviewer skipped – never reword, and
 * never add an entry that isn't on the listing.
 */
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Katarína K.",
    text: "Majku som našla náhodne na internete, keď som hľadala niekoho v NR a okolí na tehotenské fotenie. Veľmi sa mi páčila jej stránka a jej foto. Komunikácia s ňou bola od začiatku veľmi fajn. Ja som človek, ktorý sa nerád fotí, takže som sa toho celkom obávala, ale musím povedať, že to bolo super, užila som si to, na fotení bola veľmi dobrá nálada a tehotenské fotky mám nádherné. Hneď sme sa dohodli aj na novorodeneckom fotení, to sme mali 8 dní po pôrode a výsledok je tiež úžasný. Ateliér bol pripravený, vykúrený, Majka s malou veľmi opatrne zaobchádzala, naozaj nemám čo vytknúť. Majka je už taká naša fotografka, absolvovali sme u nej tiež už 2x vianočné fotenie, kde ten ateliér je vždy úžasný, tiež fotenie k 1. narodeninám našej dcéry. Ja som naozaj veľmi spokojná s jej prístupom, atmosférou na fotení, vždy sa veľa nasmejeme a pri tom vzniknú krásne fotky. Môžem iba odporúčať, určite budete aj vy spokojní.",
    rating: 5,
  },
  {
    name: "Katarína B.",
    text: "Majku Domanovú môžem len vrelo odporučiť. Je to úžasná fotografka s veľkým citom pre zachytenie emócií, radosti a neopakovateľných okamihov. Jej fotografie nie sú len krásne na pohľad, ale dokážu vo mne aj po rokoch vyvolať spomienky, úsmev a hrejivý pocit. Počas fotenia vytvára príjemnú, uvoľnenú a pozitívnu atmosféru, vďaka ktorej vznikajú prirodzené a autentické zábery. Majuška, ďakujem za nádherné spomienky, ktoré budú mať pre nás hodnotu aj o mnoho rokov. Baškovci",
    rating: 5,
  },
  {
    name: "Denisa K.",
    text: "Najlepšia fotografka! Radi sa k nej vraciame. Vždy spĺňa všetky naše požiadavky, ktoré nie sú jednoduché a fotky sú vždy lepšie ako máme v predstavách my. Jednoznačne odporúčam.",
    rating: 5,
  },
  {
    name: "Martin K.",
    text: "S fotografovaním sme vždy spokojní, deti sú uvoľnené, prostredie príjemné, fotografka úžasná.",
    rating: 5,
  },
  {
    name: "Katarína D.",
    text: "Najlepšia fotografka, najkrajšie fotky, najkrajší ateliér.",
    rating: 5,
  },
  {
    name: "Tomáš V.",
    text: "Príjemné prostredie na fotenie.",
    rating: 5,
  },
];

/**
 * Rating published as AggregateRating structured data AND shown in the UI.
 *
 * Both numbers must mirror the live Business Profile exactly. Google treats a
 * rating it cannot verify against the listing as spam and can drop every rich
 * result for the domain, so never round up. Re-check after each new review.
 *
 * The count is the listing's total – deliberately not GOOGLE_REVIEWS.length,
 * since only a few of those 23 reviews are quoted on the page.
 */
export const GOOGLE_RATING: number = 5;
export const GOOGLE_REVIEW_COUNT: number = 23;

/** 5 → "5,0" (Slovak decimal comma). */
export const googleRatingLabel = GOOGLE_RATING.toFixed(1).replace(".", ",");

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
