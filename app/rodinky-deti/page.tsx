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
      name: "Od koľkých rokov je vhodné rodinné fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rodinné fotenie je vhodné pre deti od 9 mesiacov. Pre menšie deti máme vaničku na kúpacie fotky, pre väčšie balónovú výzdobu a drevené čísla.",
      },
    },
    {
      "@type": "Question",
      name: "Čo si máme obliecť na rodinné fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pomôžem vám s výberom oblečenia. V ateliéri mám k dispozícii šaty pre dievčatká, košele pre chlapcov, čelenky aj motýliky. Odporúčam zladiť farby a zvoliť pohodlné oblečenie.",
      },
    },
    {
      "@type": "Question",
      name: "Koľko stojí rodinné fotenie v Nitre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rodinné a narodeninové fotenie stojí od 80 € (Balík 1 – 5 retušovaných fotiek, len deti) do 130 € (Balík 2 – 10 retušovaných fotiek, celá rodina). Podrobnosti nájdete v cenníku.",
      },
    },
    {
      "@type": "Question",
      name: "Fotíte aj narodeninové fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, narodeninové fotenie je súčasťou rodinného balíka. K dispozícii sú balónová výzdoba a drevené čísla 1–9 rokov.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Rodinné a detské fotenie",
  description:
    "Rodinné a detské fotenie v Nitre – hravé, prirodzené a plné emócií. Ateliér aj exteriér, šaty a doplnky k dispozícii. Od 80 €.",
  alternates: { canonical: "/rodinky-deti" },
};

const newImages: GalleryImage[] = [23, 24, 25, 26].map((n) => ({
  src: `/images/rodinky-deti/mdfoto-rodinne-fotenie (${n}).jpg`,
  alt: `Rodinné fotenie Nitra – záber ${n}`,
}));

const existingImages: GalleryImage[] = Array.from({ length: 22 }, (_, i) => ({
  src: `/images/rodinky-deti/mdfoto-rodinne-fotenie (${i + 1}).jpg`,
  alt: `Rodinné fotenie Nitra – záber ${i + 1}`,
}));

const images: GalleryImage[] = [...newImages, ...existingImages];

export default function RodinkyDetiPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHeader
        eyebrow="Galéria"
        title="Rodinky & Deti"
        description="Hravé, prirodzené a nezabudnuteľné momenty pre vás a vaše deti. Fotenia sú navrhnuté tak, aby ste sa cítili uvoľnene – ako rodina."
      />

      {/* Info strip */}
      <section className="bg-rose-light/30 border-y border-rose-light">
        <div className="container-wide py-6 flex flex-wrap gap-6 justify-center text-sm text-charcoal-700">
          <span>👗 Šaty pre dievčatká a košele pre chlapcov k dispozícii</span>
          <span>🎈 Balónová výzdoba na narodeninové fotenie</span>
          <span>🔢 Drevené čísla 1–9 rokov</span>
          <span>🛁 Vanička na kúpacie fotky (9m – 2r)</span>
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
          Rezervovať rodinné fotenie
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
            href="/rodinne-fotenie-nitra"
            className="text-rose-muted hover:underline"
          >
            rodinné fotenie Nitra
          </Link>
        </p>
      </section>
    </>
  );
}
