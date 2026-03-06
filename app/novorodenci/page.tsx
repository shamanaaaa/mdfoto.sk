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

const images: GalleryImage[] = Array.from({ length: 27 }, (_, i) => ({
  src: `/images/novorodenci/mdfoto-novorodenecke-fotenie (${i + 1}).jpg`,
  alt: `Novorodenecké fotenie Nitra – záber ${i + 1}`,
}));

export default function NovorodenciPage() {
  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHeader
        eyebrow="Galéria"
        title="Novorodenci"
        description="Prvé dni života sú vzácne a prechádzajú rýchlo. Zachytím ich bezpečne, s láskou a v kľudnej atmosfére nášho vyhriatého ateliéra."
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
