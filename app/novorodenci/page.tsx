import type { Metadata } from "next";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kedy je ideálny čas na novorodenecké fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideálne je prísť v prvých 5–14 dňoch po narodení, kedy bábätko veľa spí a dá sa ľahko polohovat a wrapovať.",
      },
    },
    {
      "@type": "Question",
      name: "Ako dlho trvá novorodenecké fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fotenie trvá cca 1–3 hodiny podľa zvoleného balíka. Počas fotenia sa bábätko priebežne kojí a uspáva.",
      },
    },
    {
      "@type": "Question",
      name: "Musím si priniesť vlastné oblečenie pre bábätko?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie, v ateliéri mám k dispozícii oblečenie, čelenky, čiapočky a ďalšie doplnky pre novorodencov.",
      },
    },
    {
      "@type": "Question",
      name: "Koľko stojí novorodenecké fotenie v Nitre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cena novorodeneckého fotenia je od 100 € (Balík 1 – 5 retušovaných fotiek) do 150 € (Balík 2 – 10 retušovaných fotiek s rodinou). Viac info na stránke cenník.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Novorodenecké fotenie",
  description:
    "Novorodenecké fotenie v ateliéri v Cabaj-Čápore (6 km od Nitry). Bezpečné, profesionálne a plné lásky. Oblečenie a doplnky k dispozícii. Od 100 €.",
  alternates: { canonical: "/novorodenci" },
};

const novorodenciAlts = [
  "Novorodenec wrapovaný v bielej deke – novorodenecké fotenie Nitra MDFOTO",
  "Bábätko spinkajúce v košíku – novorodenecké fotenie ateliér Cabaj-Čápor",
  "Novorodenec s rodičmi – rodinné novorodenecké fotenie Nitra",
  "Bábätko v čelenke na kvetinkovom pozadí – novorodenecké fotenie MDFOTO",
  "Novorodenec polohovaný v hniezdočku – bezpečné fotenie bábätka Nitra",
  "Mama drží novorodenca – novorodenecké fotenie Nitra Majka Domanová",
  "Bábátko zabalené v jemnej deke – novorodenecké fotenie ateliér",
  "Novorodenec s čiapočkou – detské fotenie Nitra MDFOTO",
  "Rodičia s novorodencom – rodinné novorodenecké fotenie v Nitre",
  "Novorodenec na detskej podušce – fotenie bábätiek Nitra",
  "Bábätko v košíku s výzdobou – novorodenecké fotenie ateliér Nitra",
  "Novorodenec wrapovaný v ružovej deke – MDFOTO novorodenecké fotenie",
  "Mama so spinkajúcim bábätkom – novorodenecké fotenie Nitra",
  "Novorodenec na plyšovom medveďovi – detské fotenie ateliér Cabaj-Čápor",
  "Bábätko s čelenkou z kvetov – novorodenecké fotenie Nitra MDFOTO",
  "Papa drží novorodenca – rodinné novorodenecké fotenie Nitra",
  "Novorodenec v drevenom košíku – bezpečné fotenie bábätiek",
  "Bábátko spinkajúce – novorodenecké fotenie ateliér pri Nitre",
  "Novorodenec s rodičmi a súrodencami – rodinné fotenie Nitra",
  "Novorodenec v bielom – novorodenecké fotenie MDFOTO Cabaj-Čápor",
  "Bábätko na deťskom zábaliku – novorodenecké fotenie Nitra",
  "Novorodenec v profile – jemné novorodenecké fotenie ateliér Nitra",
  "Mama a bábätko – emotívne novorodenecké fotenie Nitra MDFOTO",
  "Novorodenec zavretý v dlaniach rodiča – novorodenecké fotenie",
  "Bábätko v háčkovanej čiapočke – novorodenecké fotenie Nitra",
  "Rodičia s novorodencom v ateliéri – MDFOTO fotenie Cabaj-Čápor",
  "Novorodenec v zábalike v košíku – novorodenecké fotenie Nitra MDFOTO",
];

const images: GalleryImage[] = Array.from({ length: 27 }, (_, i) => ({
  src: `/images/novorodenci/mdfoto-novorodenecke-fotenie (${i + 1}).jpg`,
  alt: novorodenciAlts[i],
}));

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Novorodenecké fotenie – galéria MDFOTO Nitra",
  description: "Galéria novorodeneckého fotenia od fotografky Majky Domanovovej v ateliéri v Cabaj-Čápore pri Nitre.",
  url: "https://mdfoto.sk/novorodenci",
  author: { "@id": "https://mdfoto.sk/#majka" },
  publisher: { "@id": "https://mdfoto.sk/#business" },
  image: images.slice(0, 6).map((img) => ({
    "@type": "ImageObject",
    contentUrl: `https://mdfoto.sk${img.src}`,
    name: img.alt,
    description: img.alt,
    author: { "@id": "https://mdfoto.sk/#majka" },
  })),
};

export default function NovorodenciPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={gallerySchema} />

      <PageHeader
        eyebrow="Galéria"
        title="Novorodenci"
        description="Prvé dni života sú vzácne a prechádzajú rýchlo. Zachytím ich bezpečne, s láskou a v kľudnej atmosfére nášho vyhriatého ateliéra."
        breadcrumbs={[{ label: "Domov", href: "/" }, { label: "Novorodenci" }]}
      />

      {/* Info strip */}
      <section className="bg-rose-light/30 border-y border-rose-light">
        <div className="container-wide py-6 flex flex-wrap gap-6 justify-center text-sm text-charcoal-700">
          <span>🕐 Fotenie trvá cca 1–3 hodiny</span>
          <span>🧸 Oblečenie, čelenky, čiapočky – mám všetko</span>
          <span>🌡️ Ateliér je vykúrený a útulný</span>
          <span>🤱 Kojenie počas fotenia je samozrejmosť</span>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-20">
        <div className="container-wide">
          <Gallery images={images} columns={3} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal-800 py-16 text-center">
        <p className="section-label text-rose-muted mb-3">
          Záujem o fotenie?
        </p>
        <h2 className="font-serif text-3xl text-cream-100 mb-6">
          Rezervovať novorodenecké fotenie
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/kontakt" className="btn-primary text-center">
            Napísať správu
          </Link>
          <Link
            href="/cennik"
            className="inline-block px-8 py-3.5 border border-cream-300 text-cream-200 text-sm tracking-widest uppercase font-sans hover:bg-cream-100/10 transition-colors duration-300 text-center"
          >
            Pozrieť cenník
          </Link>
        </div>
        <p className="mt-6 text-sm text-charcoal-300">
          Viac informácii nájdete na stránke{" "}
          <Link
            href="/novorodenecke-fotenie-nitra"
            className="text-rose-muted hover:underline"
          >
            novorodenecké fotenie Nitra
          </Link>
        </p>
      </section>
    </>
  );
}
