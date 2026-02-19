import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Portrétny fotograf Nitra",
  description:
    "Portrétny fotograf Nitra – prirodzené portréty žien, mužov, párov aj rodín v ateliéri alebo exteriéri.",
  alternates: { canonical: "/portretovy-fotograf-nitra" },
  openGraph: {
    title: "Portrétny fotograf Nitra | MDFOTO",
    description:
      "Nadčasové portrétne fotenie v Nitre a okolí. Prirodzený výraz, jemné vedenie, profesionálny výsledok.",
    url: "/portretovy-fotograf-nitra",
  },
};

export default function PortretnyFotografNitraPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portrétny fotograf Nitra"
        title="Portréty, ktoré vás vystihnú"
        description="Prirodzené portrétne fotenie bez stresu – vhodné pre osobný branding, párové aj rodinné portréty."
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-6 text-charcoal-700 leading-relaxed">
          <p>
            Portrétnu fotografiu staviam na svetle, emócii a prirodzenosti.
            Počas fotenia vás jemne navádzam, aby ste sa cítili uvoľnene a
            výsledné zábery pôsobili autenticky.
          </p>
          <p>
            Fotenie je vhodné pre jednotlivcov, páry aj rodiny. Realizujem ho v
            ateliéri pri Nitre alebo v exteriéri podľa vášho štýlu.
          </p>

          <h2 className="section-subheading pt-4">Súvisiace služby</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/rodinne-fotenie-nitra" className="btn-outline text-center">
              Rodinné fotenie Nitra
            </Link>
            <Link href="/tehotenske-fotenie-nitra" className="btn-outline text-center">
              Tehotenské fotenie Nitra
            </Link>
          </div>

          <div className="pt-2">
            <Link href="/kontakt" className="btn-primary text-center inline-block">
              Rezervovať portrétne fotenie
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
