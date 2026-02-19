import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Tehotenské fotenie Nitra",
  description:
    "Tehotenské fotenie Nitra – elegantné a prirodzené portréty budúcich mamičiek v ateliéri aj exteriéri.",
  alternates: { canonical: "/tehotenske-fotenie-nitra" },
  openGraph: {
    title: "Tehotenské fotenie Nitra | MDFOTO",
    description:
      "Nadčasové tehotenské fotenie v Nitre. Šaty a doplnky k dispozícii, vedenie počas celého fotenia.",
    url: "/tehotenske-fotenie-nitra",
  },
};

export default function TehotenskeFotenieNitraPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tehotenské fotenie Nitra"
        title="Krása materstva v nadčasových fotkách"
        description="Tehotenské fotenie s citlivým vedením, jemným stylingom a prirodzenou atmosférou."
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-6 text-charcoal-700 leading-relaxed">
          <p>
            Tehotenské fotenie je ideálnym spôsobom, ako si uchovať výnimočné
            obdobie čakania bábätka. V ateliéri mám k dispozícii šaty,
            čipkované župany aj ďalšie doplnky.
          </p>
          <p>
            Podľa vášho štýlu vieme fotenie realizovať aj v exteriéri v Nitre a
            okolí. Cieľom je, aby ste sa cítili krásne a uvoľnene.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link href="/tehulky" className="btn-outline text-center">
              Pozrieť galériu
            </Link>
            <Link href="/kontakt" className="btn-primary text-center">
              Rezervovať termín
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
