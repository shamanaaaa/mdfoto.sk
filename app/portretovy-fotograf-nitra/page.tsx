import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Portrétny fotograf Nitra",
  description:
    "Portrétny fotograf Nitra – prirodzené portréty žien, mužov, párov aj rodín v ateliéri alebo exteriéri. Jemné vedenie a profesionálny výsledok.",
  alternates: { canonical: "/portretovy-fotograf-nitra" },
  openGraph: {
    title: "Portrétny fotograf Nitra | MDFOTO",
    description:
      "Nadčasové portrétne fotenie v Nitre a okolí. Prirodzený výraz, jemné vedenie, profesionálny výsledok.",
    url: "/portretovy-fotograf-nitra",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Domov",
      item: "https://mdfoto.sk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Portrétny fotograf Nitra",
      item: "https://mdfoto.sk/portretovy-fotograf-nitra",
    },
  ],
};

export default function PortretnyFotografNitraPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Portrétny fotograf Nitra"
        title="Portréty, ktoré vás vystihnú"
        description="Prirodzené portrétne fotenie bez stresu – vhodné pre osobný branding, párové aj rodinné portréty."
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <p>
            Portrétnu fotografiu staviam na svetle, emócii a prirodzenosti.
            Počas fotenia vás jemne navádzam, aby ste sa cítili uvoľnene a
            výsledné zábery pôsobili autenticky.
          </p>
          <p>
            <strong>Portrétne fotenie v Nitre</strong> je vhodné pre
            jednotlivcov, páry aj rodiny. Realizujem ho v ateliéri v{" "}
            <strong>Cabaj-Čápore</strong> (6 km od Nitry) alebo v exteriéri
            podľa vášho štýlu.
          </p>

          <h2 className="section-subheading pt-4">Pre koho je to vhodné?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Osobný branding
              </p>
              <p className="text-sm">
                Profesionálne fotografie pre váš profil, web alebo sociálne siete.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Párové portréty
              </p>
              <p className="text-sm">
                Romantické a prirodzené zábery pre páry – ideálny darček.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Rodinné portréty
              </p>
              <p className="text-sm">
                Spoločná fotografia, ktorú si zarámujete a budete na ňu hrdí.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Ateliér aj exteriér
              </p>
              <p className="text-sm">
                Podľa vašich preferencií – kontrolované svetlo v ateliéri alebo
                prírodné prostredie.
              </p>
            </div>
          </div>

          <p>
            Klienti prichádzajú z <strong>Nitry</strong>,{" "}
            <strong>Zlatých Moraviec</strong>, <strong>Topoľčian</strong>,{" "}
            <strong>Šale</strong>, <strong>Hlohovca</strong>,{" "}
            <strong>Piešťan</strong> a celého okolia.
          </p>

          <h2 className="section-subheading pt-4">Súvisiace služby</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <Link
                href="/rodinne-fotenie-nitra"
                className="hover:underline text-rose-dark"
              >
                Rodinné fotenie Nitra
              </Link>{" "}
              – hravé fotenie rodín a detí
            </li>
            <li>
              <Link
                href="/tehotenske-fotenie-nitra"
                className="hover:underline text-rose-dark"
              >
                Tehotenské fotenie Nitra
              </Link>{" "}
              – elegantné portréty budúcich mamičiek
            </li>
            <li>
              <Link
                href="/novorodenecke-fotenie-nitra"
                className="hover:underline text-rose-dark"
              >
                Novorodenecké fotenie Nitra
              </Link>{" "}
              – bezpečné fotenie bábätiek
            </li>
          </ul>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary text-center">
              Rezervovať portrétne fotenie
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
