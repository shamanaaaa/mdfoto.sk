import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://mdfoto.sk/#business",
  name: "MDFOTO – Majka Domanová",
  alternateName: ["MDFOTO", "DOMAN s.r.o."],
  legalName: "DOMAN s.r.o.",
  url: "https://mdfoto.sk",
  logo: {
    "@type": "ImageObject",
    url: "https://mdfoto.sk/images/o-mne/mdfoto-maria-domanova-mdfoto.png",
    width: 800,
    height: 1000,
  },
  image: "https://mdfoto.sk/images/o-mne/mdfoto-maria-domanova-mdfoto.png",
  description:
    "Profesionálne rodinné fotenie, novorodenecké fotenie a tehotenské fotenie v Nitre a okolí. 12+ rokov skúseností, ateliér v Cabaj-Čápore.",
  telephone: "+421948505587",
  email: "mdfoto.sk@gmail.com",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "IČO",
    value: "47912383",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cabaj-Čápor",
    addressRegion: "Nitriansky kraj",
    addressCountry: "SK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.2858,
    longitude: 18.1012,
  },
  areaServed: [
    { "@type": "City", name: "Nitra" },
    { "@type": "City", name: "Cabaj-Čápor" },
    { "@type": "City", name: "Zlaté Moravce" },
    { "@type": "City", name: "Topoľčany" },
    { "@type": "City", name: "Šaľa" },
    { "@type": "City", name: "Levice" },
    { "@type": "City", name: "Hlohovec" },
    { "@type": "City", name: "Komárno" },
    { "@type": "City", name: "Galanta" },
    { "@type": "City", name: "Nové Zámky" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  priceRange: "80€–150€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Bank Transfer",
  sameAs: [
    "https://www.facebook.com/mdfoto.sk",
    "https://www.instagram.com/fotografka_maria_domanova/",
  ],
  founder: {
    "@type": "Person",
    "@id": "https://mdfoto.sk/#majka",
    name: "Majka Domanová",
    givenName: "Majka",
    familyName: "Domanová",
    jobTitle: "Fotografka",
    url: "https://mdfoto.sk/o-mne",
    image: "https://mdfoto.sk/images/o-mne/mdfoto-maria-domanova-mdfoto.png",
    sameAs: [
      "https://www.facebook.com/mdfoto.sk",
      "https://www.facebook.com/majkadomanova",
      "https://www.instagram.com/fotografka_maria_domanova/",
    ],
    knowsAbout: [
      "Novorodenecká fotografia",
      "Rodinná fotografia",
      "Tehotenská fotografia",
      "Portrétna fotografia",
    ],
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Služby fotenia",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Novorodenecké fotenie",
          description:
            "Profesionálne fotenie novorodencov v bezpečnom, vykúrenom ateliéri. Oblečenie, čelenky a doplnky k dispozícii.",
          url: "https://mdfoto.sk/novorodenecke-fotenie-nitra",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: "100",
          maxPrice: "150",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Rodinné a detské fotenie",
          description:
            "Hravé rodinné a narodeninové fotenie v ateliéri alebo exteriéri. Šaty, doplnky a výzdoba k dispozícii.",
          url: "https://mdfoto.sk/rodinne-fotenie-nitra",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: "80",
          maxPrice: "130",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tehotenské fotenie",
          description:
            "Elegantné tehotenské fotenie v ateliéri aj exteriéri. Šaty, čipkované župany a doplnky k dispozícii.",
          url: "https://mdfoto.sk/tehotenske-fotenie-nitra",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          minPrice: "90",
          maxPrice: "130",
        },
      },
    ],
  },
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdfoto.sk"),
  title: {
    default: "MDFOTO – Fotograf Nitra | Majka Domanová",
    template: "%s | MDFOTO",
  },
  description:
    "Profesionálne rodinné, novorodenecké a tehotenské fotenie v Nitre a okolí. Majka Domanová – 12+ rokov skúseností, šaty a doplnky k dispozícii, 7 dní v týždni. Od 80 €.",
  keywords: [
    "fotenie Nitra",
    "rodinné fotenie Nitra",
    "novorodenecké fotenie Nitra",
    "tehotenské fotenie Nitra",
    "fotenie bábätiek Nitra",
    "detské fotenie Nitra",
    "narodeninové fotenie Nitra",
    "fotograf Nitra",
    "fotografka Nitra",
    "fotograf Cabaj-Čápor",
    "fotografka Cabaj-Čápor",
    "Majka Domanová",
    "mdfoto",
    "novorodenecké fotenie",
    "rodinné fotenie",
    "tehotenské fotenie",
  ],
  openGraph: {
    type: "website",
    locale: "sk_SK",
    url: "/",
    siteName: "MDFOTO",
    title: "MDFOTO – Fotograf Nitra | Majka Domanová",
    description:
      "Profesionálne rodinné, novorodenecké a tehotenské fotenie v Nitre a okolí. 12+ rokov skúseností. Od 80 €.",
    images: [
      {
        url: "/images/rodinky-deti/mdfoto-rodinne-fotenie (23).jpg",
        width: 1200,
        height: 800,
        alt: "MDFOTO – Fotograf Nitra – Rodinné fotenie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MDFOTO – Fotograf Nitra | Majka Domanová",
    description:
      "Profesionálne rodinné, novorodenecké a tehotenské fotenie v Nitre a okolí. 12+ rokov skúseností. Od 80 €.",
    images: ["/images/rodinky-deti/mdfoto-rodinne-fotenie (23).jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex flex-col min-h-screen">
        <JsonLd data={localBusinessSchema} />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
