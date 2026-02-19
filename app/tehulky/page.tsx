import type { Metadata } from "next";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tehotenské fotenie",
  description:
    "Tehotenské fotenie v Nitre – krása materstva zachytená v tých najkrajších momentoch. Ateliér aj exteriér, šaty k dispozícii.",
};

const images: GalleryImage[] = Array.from({ length: 16 }, (_, i) => ({
  src: `/images/tehulky/mdfoto-tehotenske-fotenie (${i + 1}).jpg`,
  alt: `Tehotenské fotenie Nitra – záber ${i + 1}`,
}));

export default function TehulkyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Galéria"
        title="Tehuľky"
        description="Krása materstva si zaslúži byť zachytená. Vytvoríme spolu nadčasové fotografie, na ktoré budete hrdá celý život."
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
      </section>
    </>
  );
}
