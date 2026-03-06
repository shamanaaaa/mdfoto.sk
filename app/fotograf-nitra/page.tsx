import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Fotograf Nitra",
  description:
    "Fotograf Nitra – Majka Domanová, 12+ rokov skúseností. Rodinné, novorodenecké a tehotenské fotenie v Nitre a okolí do 100 km. Rezervujte si termín.",
  alternates: { canonical: "/fotograf-nitra" },
  openGraph: {
    title: "Fotograf Nitra | MDFOTO – Majka Domanová",
    description:
      "Profesionálne fotenie v Nitre a okolí. Rodiny, novorodenci, tehuľky. 12+ rokov skúseností, 7 dní v týždni.",
    url: "/fotograf-nitra",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kde sa nachádza ateliér MDFOTO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ateliér sa nachádza v Cabaj-Čápore, len 6 km od centra Nitry. Je vykúrený, útulný a prispôsobený potrebám rodín s deťmi a novorodencami.",
      },
    },
    {
      "@type": "Question",
      name: "Aké typy fotenia ponúkate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ponúkam novorodenecké fotenie (od 100 €), rodinné a narodeninové fotenie (od 80 €) a tehotenské fotenie (od 90 €). Všetky služby zahŕňajú retušované fotografie, tlač a USB.",
      },
    },
    {
      "@type": "Question",
      name: "Fotíte aj cez víkendy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, fotenia realizujem 7 dní v týždni vrátane víkendov a sviatkov. Cez víkend je príplatok 15 €.",
      },
    },
    {
      "@type": "Question",
      name: "Ako si rezervujem termín?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stačí vyplniť kontaktný formulár na webe, napísať na WhatsApp alebo zavolať na 0948 505 587. Spolu nastavíme ideálny termín aj balík fotenia.",
      },
    },
  ],
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
      name: "Fotograf Nitra",
      item: "https://mdfoto.sk/fotograf-nitra",
    },
  ],
};

export default function FotografNitraPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Fotograf Nitra"
        title="Profesionálny fotograf v Nitre"
        description="Fotenie pre rodiny, budúce mamičky, deti aj novorodencov v Nitre a okolí do 100 km."
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <p>
                Hľadáte <strong>fotografku v Nitre</strong>, ktorá vás prevedie
                celým fotením bez stresu? Som Majka Domanová a v MDFOTO tvorím
                prirodzené fotografie s dôrazom na emóciu, svetlo a pohodovú
                atmosféru už viac ako <strong>12 rokov</strong>.
              </p>
              <p>
                Moje fotenia sú navrhnuté tak, aby ste sa cítili uvoľnene – či už
                ide o prvé foto novorodenca, narodeninový portrét ročného detička
                alebo tehotenské fotenie v elegantných šatách.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/o-mne/mdfoto-maria-domanova-mdfoto.png"
                alt="Majka Domanová – fotografka Nitra – MDFOTO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <h2 className="section-subheading pt-4">
            Čo všetko fotím?
          </h2>
          <p>
            Špecializujem sa na tri hlavné oblasti, v ktorých mám najväčšie
            skúsenosti a kde vám dokážem poskytnúť kompletnú starostlivosť:
          </p>
          <ul className="space-y-3 list-disc pl-6">
            <li>
              <Link
                href="/novorodenecke-fotenie-nitra"
                className="hover:underline text-rose-dark font-medium"
              >
                Novorodenecké fotenie Nitra
              </Link>{" "}
              – bezpečné fotenie bábätiek v prvých dňoch života (od 100 €)
            </li>
            <li>
              <Link
                href="/rodinne-fotenie-nitra"
                className="hover:underline text-rose-dark font-medium"
              >
                Rodinné fotenie Nitra
              </Link>{" "}
              – hravé fotenie rodín, detí a narodeninové fotenie (od 80 €)
            </li>
            <li>
              <Link
                href="/tehotenske-fotenie-nitra"
                className="hover:underline text-rose-dark font-medium"
              >
                Tehotenské fotenie Nitra
              </Link>{" "}
              – elegantné portréty budúcich mamičiek (od 90 €)
            </li>
            <li>
              <Link
                href="/portretovy-fotograf-nitra"
                className="hover:underline text-rose-dark font-medium"
              >
                Portrétny fotograf Nitra
              </Link>{" "}
              – prirodzené portréty pre jednotlivcov, páry aj rodiny
            </li>
          </ul>

          <h2 className="section-subheading pt-4">
            Ateliér pre rodiny pri Nitre
          </h2>
          <p>
            Fotenia realizujem v ateliéri v <strong>Cabaj-Čápore</strong>, len
            6 km od centra Nitry. Ateliér je vykúrený, útulný a vybavený
            oblečením, doplnkami a výzdobou – nemusíte riešiť nič navyše. Pre
            rodiny, ktoré preferujú exteriér, fotím aj vonku v Nitre a blízkom
            okolí.
          </p>
          <p>
            Moji klienti prichádzajú z <strong>Nitry</strong>,{" "}
            <strong>Zlatých Moraviec</strong>, <strong>Topoľčian</strong>,{" "}
            <strong>Šale</strong>, <strong>Levíc</strong>,{" "}
            <strong>Hlohovca</strong>, <strong>Komárna</strong>,{" "}
            <strong>Galanty</strong>, <strong>Nových Zámkov</strong>,{" "}
            <strong>Piešťan</strong> a celého okolia do 100 km.
          </p>

          <h2 className="section-subheading pt-4">Prečo MDFOTO?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                12+ rokov praxe
              </p>
              <p className="text-sm">
                Stovky spokojných rodín zo všetkých kútov Nitrianskeho kraja.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Kompletný servis
              </p>
              <p className="text-sm">
                Pomoc s oblečením, styling, retušované fotky, tlač aj USB.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                7 dní v týždni
              </p>
              <p className="text-sm">
                Prispôsobím sa vášmu voľnému času, aj cez víkendy a sviatky.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Osobný prístup
              </p>
              <p className="text-sm">
                Som mama 3 synov – rozumiem rodinnému chaosu a viem s ním pracovať.
              </p>
            </div>
          </div>

          <h2 className="section-subheading pt-6">Najčastejšie otázky</h2>
          <div className="space-y-4">
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Kde sa nachádza ateliér MDFOTO?
              </summary>
              <p className="mt-3 text-sm">
                Ateliér sa nachádza v Cabaj-Čápore, len 6 km od centra Nitry.
                Je vykúrený, útulný a prispôsobený potrebám rodín s deťmi a
                novorodencami.
              </p>
            </details>
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Aké typy fotenia ponúkate?
              </summary>
              <p className="mt-3 text-sm">
                Ponúkam novorodenecké fotenie (od 100 €), rodinné a narodeninové
                fotenie (od 80 €) a tehotenské fotenie (od 90 €). Všetky služby
                zahŕňajú retušované fotografie, tlač a USB.
              </p>
            </details>
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Fotíte aj cez víkendy?
              </summary>
              <p className="mt-3 text-sm">
                Áno, fotenia realizujem 7 dní v týždni vrátane víkendov a
                sviatkov. Cez víkend je príplatok 15 €.
              </p>
            </details>
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Ako si rezervujem termín?
              </summary>
              <p className="mt-3 text-sm">
                Stačí vyplniť{" "}
                <Link
                  href="/kontakt"
                  className="text-rose-dark hover:underline"
                >
                  kontaktný formulár
                </Link>
                , napísať na WhatsApp alebo zavolať na 0948 505 587. Spolu
                nastavíme ideálny termín aj balík fotenia.
              </p>
            </details>
          </div>

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
