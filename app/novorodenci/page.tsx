import type { Metadata } from "next";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Novorodenecké fotenie",
  description:
    "Novorodenecké fotenie v ateliéri v Cabaj-Čápore (Nitra). Prvé dni života zachytené s láskou a odbornosťou.",
};

const images: GalleryImage[] = Array.from({ length: 27 }, (_, i) => ({
  src: `/images/novorodenci/mdfoto-novorodenecke-fotenie (${i + 1}).jpg`,
  alt: `Novorodenecké fotenie Nitra – záber ${i + 1}`,
}));

export default function NovorodenciPage() {
  return (
    <>
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
      </section>
    </>
  );
}
