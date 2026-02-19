import type { Metadata } from "next";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rodinné a detské fotenie",
  description:
    "Rodinné fotenie a detské fotenie v Nitre – hravé, prirodzené a plné emócií. Ateliér aj exteriér.",
};

const images: GalleryImage[] = Array.from({ length: 22 }, (_, i) => ({
  src: `/images/rodinky-deti/mdfoto-rodinne-fotenie (${i + 1}).jpg`,
  alt: `Rodinné fotenie Nitra – záber ${i + 1}`,
}));

export default function RodinkyDetiPage() {
  return (
    <>
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
      </section>
    </>
  );
}
