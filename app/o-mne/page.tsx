import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "O mne",
  description:
    "Majka Domanová – fotografka z MDFOTO s 12+ rokmi skúseností. Špecializácia na novorodencov, rodiny a tehotenské fotenie v Nitre. Mama 3 synov.",
  alternates: { canonical: "/o-mne" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="O mne"
        title="Majka Domanová"
        description="Vitajte na mojej stránke. Som mamou 3 úžasných synov a milujem svoju prácu fotografky."
      />

      <section className="py-16 md:py-24">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-200">
            <Image
              src="/images/o-mne/mdfoto-maria-domanova-mdfoto.png"
              alt="Majka Domanová – MDFOTO"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <article className="space-y-6 text-charcoal-700 leading-relaxed">
            <p>
              Veľmi sa teším tomu, že mi s dôverou zverujete do rúk to
              najcennejšie, čo máte – Vaše detičky. S láskou a opatrnosťou Vám
              ich rada zvečním počas prvých dní ich života.
            </p>
            <p>
              Samozrejme, mojou obľúbenou kategóriou sú aj tehuľky a rodinky s
              väčšími detičkami. Detičky si ma väčšinou rýchlo obľúbia a vďaka
              dobrej nálade v mojom fotoateliéri máme bezproblémové fotenia.
            </p>
            <p>
              Už viac ako 12 rokov robím prirodzené rodinné fotenia, ktoré sú
              jednoduché, príjemné a určené pre každého. Pomôžem vám s
              oblečením, výberom miesta a všetkým potrebným, aby ste si fotenie
              užili bez stresu.
            </p>
            <p className="font-serif text-lg text-charcoal-800 italic pt-2">
              &bdquo;Fotografia je nádherným darom, ktorý nadobúda na hodnote
              časom… Pretože čas môžeme zastaviť len vďaka fotografiám.&ldquo;
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
