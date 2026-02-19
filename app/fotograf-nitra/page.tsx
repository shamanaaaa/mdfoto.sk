import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Fotograf Nitra",
  description:
    "Fotograf Nitra – profesionálne rodinné, tehotenské a portrétne fotenie v Nitre a okolí do 100 km.",
  alternates: { canonical: "/fotograf-nitra" },
  openGraph: {
    title: "Fotograf Nitra | MDFOTO",
    description:
      "Profesionálne fotenie v Nitre a okolí. Rodiny, tehuľky, portréty a stužkové.",
    url: "/fotograf-nitra",
  },
};

export default function FotografNitraPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fotograf Nitra"
        title="Profesionálny fotograf v Nitre"
        description="Fotenie pre rodiny, budúce mamičky, deti aj stužkové slávnosti v Nitre a okolí do 100 km."
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-6 text-charcoal-700 leading-relaxed">
          <p>
            Hľadáte fotografku v Nitre, ktorá vás prevedie celým fotením bez
            stresu? V MDFOTO tvorím prirodzené fotografie s dôrazom na emóciu,
            svetlo a pohodovú atmosféru.
          </p>
          <p>
            Fotenia realizujem v ateliéri v Cabaj-Čápore aj v exteriéri podľa
            vášho štýlu. Pomôžem vám s výberom oblečenia aj s prípravou na
            samotné fotenie.
          </p>

          <h2 className="section-subheading pt-4">Najčastejšie služby</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <Link href="/rodinne-fotenie-nitra" className="hover:underline text-rose-dark">
                Rodinné fotenie Nitra
              </Link>
            </li>
            <li>
              <Link href="/tehotenske-fotenie-nitra" className="hover:underline text-rose-dark">
                Tehotenské fotenie Nitra
              </Link>
            </li>
            <li>
              <Link href="/portretovy-fotograf-nitra" className="hover:underline text-rose-dark">
                Portrétny fotograf Nitra
              </Link>
            </li>
          </ul>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary text-center">
              Overiť voľný termín
            </Link>
            <Link href="/cennik" className="btn-outline text-center">
              Pozrieť cenník
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
