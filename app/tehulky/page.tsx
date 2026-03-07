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
      name: "V koľkom týždni tehotenstva je ideálne prísť na fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideálny čas je medzi 30.–36. týždňom tehotenstva, kedy je brušku krásne vidieť a mamička sa ešte cíti pohodlne.",
      },
    },
    {
      "@type": "Question",
      name: "Musím si priniesť vlastné šaty na tehotenské fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie, v ateliéri mám k dispozícii šaty, čipkované župany aj body špeciálne na tehotenské fotenie. Môžete si však doniesť aj vlastné.",
      },
    },
    {
      "@type": "Question",
      name: "Koľko stojí tehotenské fotenie v Nitre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tehotenské fotenie stojí od 90 € (Balík 1 – 5 retušovaných fotiek) do 130 € (Balík 2 – 10 retušovaných fotiek). Vizážistka je k dispozícii za príplatok 45 €.",
      },
    },
    {
      "@type": "Question",
      name: "Môže prísť na fotenie aj partner alebo starší súrodenec?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samozrejme! Partner a deti sú vítaní. Spoločné zábery sú krásnym doplnkom tehotenského fotenia.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Tehotenské fotenie",
  description:
    "Tehotenské fotenie v Nitre – krása materstva zachytená v nadčasových fotografiách. Šaty a doplnky k dispozícii, ateliér aj exteriér. Od 90 €.",
  alternates: { canonical: "/tehulky" },
};

const tehulkyAlts = [
  "Tehotná mamička v dlhých šatách – tehotenské fotenie Nitra MDFOTO",
  "Budúca mamička s bruškom – tehotenské fotenie ateliér Cabaj-Čápor",
  "Tehotná žena v čipkovanom župane – elegantné tehotenské fotenie Nitra",
  "Mamička v exteriéri – tehotenské fotenie príroda Nitra MDFOTO",
  "Tehotná mamička s partnerom – párové tehotenské fotenie Nitra",
  "Bruško v detailnom zábere – tehotenské fotenie ateliér MDFOTO",
  "Budúca mamička v bielych šatách – nadčasové tehotenské fotenie Nitra",
  "Tehotná žena s dieťaťom – rodinné tehotenské fotenie Nitra",
  "Mamička sa dotýka bruška – emotívne tehotenské fotenie MDFOTO",
  "Tehotná žena v elegantných šatách – tehotenské fotenie ateliér Nitra",
  "Budúca mamička s partnerom v exteriéri – tehotenské fotenie Nitra",
  "Detail bruška tehotnej mamičky – tehotenské fotenie MDFOTO Cabaj-Čápor",
  "Tehotná žena v čipkových šatách – tehotenské fotenie Nitra MDFOTO",
  "Mamička čaká bábätko – rodinné tehotenské fotenie ateliér Nitra",
  "Budúca mamička v elegantnom outfite – tehotenské fotenie MDFOTO",
  "Tehotná žena s kyticou – romantické tehotenské fotenie Nitra",
];

const images: GalleryImage[] = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/tehulky/mdfoto-tehotenske-fotenie (${i + 1}).jpg`,
  alt: tehulkyAlts[i],
}));

export default function TehulkyPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHeader
        eyebrow="Galéria"
        title="Tehuľky"
        description="Krása materstva si zaslúži byť zachytená. Vytvoríme spolu nadčasové fotografie, na ktoré budete hrdá celý život."
        breadcrumbs={[{ label: "Domov", href: "/" }, { label: "Tehuľky" }]}
      />

      {/* Info strip */}
      <section className="bg-rose-light/30 border-y border-rose-light">
        <div className="container-wide py-6 flex flex-wrap gap-6 justify-center text-sm text-charcoal-700">
          <span>👗 Šaty, čipkované župany, body k dispozícii</span>
          <span>💄 Možnosť zajednať vizážistku (+45€)</span>
          <span>🌿 Ateliér aj exteriér</span>
          <span>📍 Cabaj-Čápor (6 km od Nitry)</span>
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
          Rezervovať tehotenské fotenie
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
            href="/tehotenske-fotenie-nitra"
            className="text-rose-muted hover:underline"
          >
            tehotenské fotenie Nitra
          </Link>
        </p>
      </section>
    </>
  );
}
