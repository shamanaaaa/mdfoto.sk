import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Rodinné fotenie Nitra",
  description:
    "Rodinné fotenie Nitra – prirodzené a hravé fotenie rodín a detí v ateliéri alebo exteriéri.",
  alternates: { canonical: "/rodinne-fotenie-nitra" },
  openGraph: {
    title: "Rodinné fotenie Nitra | MDFOTO",
    description:
      "Hravé rodinné fotenie bez stresu v Nitre a okolí. Pomoc s prípravou, oblečením aj priebehom.",
    url: "/rodinne-fotenie-nitra",
  },
};

export default function RodinneFotenieNitraPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rodinné fotenie Nitra"
        title="Rodinné fotenie plné emócií"
        description="Zachytím momenty smiechu, blízkosti a prirodzenej radosti vašej rodiny."
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-6 text-charcoal-700 leading-relaxed">
          <p>
            Rodinné fotenie v Nitre je navrhnuté tak, aby ste sa cítili pohodlne
            a nemuseli riešiť zbytočný stres. Pomôžem vám s oblečením, výberom
            prostredia aj priebehom fotenia.
          </p>
          <p>
            Fotenie je vhodné pre malé deti, súrodencov aj viacgeneračné rodiny.
            K dispozícii sú aj doplnky a výzdoba podľa typu fotenia.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link href="/rodinky-deti" className="btn-outline text-center">
              Pozrieť galériu
            </Link>
            <Link href="/kontakt" className="btn-primary text-center">
              Overiť termín
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
