import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Novorodenecké fotenie Nitra",
  description:
    "Novorodenecké fotenie Nitra – bezpečné fotenie bábätiek v útulnom ateliéri pri Nitre. 12+ rokov skúseností, oblečenie a doplnky k dispozícii. Od 100 €.",
  alternates: { canonical: "/novorodenecke-fotenie-nitra" },
  openGraph: {
    title: "Novorodenecké fotenie Nitra | MDFOTO",
    description:
      "Profesionálne fotenie novorodencov v Nitre a okolí. Bezpečný, vykúrený ateliér, skúsené ruky a krásne výsledky.",
    url: "/novorodenecke-fotenie-nitra",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Kedy je ideálny čas na novorodenecké fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideálne je prísť v prvých 5–14 dňoch po narodení, kedy bábätko veľa spí a dá sa ľahko polohovať a wrapovať. Termín si dohodnite ešte počas tehotenstva.",
      },
    },
    {
      "@type": "Question",
      name: "Je fotenie novorodencov bezpečné?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno. Ateliér je vykúrený na optimálnu teplotu pre bábätko, dodržiavam hygienické štandardy a novorodenca polohujem a wrapujem skúsenými rukami. Bezpečnosť je vždy na prvom mieste.",
      },
    },
    {
      "@type": "Question",
      name: "Koľko stojí novorodenecké fotenie v Nitre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cena novorodeneckého fotenia je od 100 € (Balík 1 – 5 retušovaných fotiek, len bábätko) do 150 € (Balík 2 – 10 retušovaných fotiek s rodinou). Tlač, USB a kartička o bábätku sú súčasťou ceny.",
      },
    },
    {
      "@type": "Question",
      name: "Musím si priniesť oblečenie pre bábätko?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie, v ateliéri mám kompletné vybavenie – oblečenie, čelenky, čiapočky, deky, košíky a ďalšie doplnky pre novorodencov.",
      },
    },
    {
      "@type": "Question",
      name: "Kde sa fotenie koná?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fotenie prebieha v mojom ateliéri v Cabaj-Čápore, len 6 km od centra Nitry. Ateliér je vykúrený, čistý, útulný a prispôsobený potrebám bábätiek.",
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
      name: "Novorodenecké fotenie Nitra",
      item: "https://mdfoto.sk/novorodenecke-fotenie-nitra",
    },
  ],
};

export default function NovorodeneckeFotenieNitraPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Novorodenecké fotenie Nitra"
        title="Fotenie novorodencov v Nitre a okolí"
        description="Bezpečné, profesionálne a plné lásky – zachytím tie najkrajšie prvé dni vášho bábätka."
        breadcrumbs={[{ label: "Domov", href: "/" }, { label: "Novorodenecké fotenie Nitra" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <p>
                Hľadáte <strong>novorodenecké fotenie v Nitre</strong>, pri
                ktorom sa budete cítiť pokojne a vaše bábätko bude v bezpečnom
                prostredí? V mojom ateliéri v Cabaj-Čápore (len 6 km od Nitry)
                tvorím fotografie novorodencov už viac ako 12 rokov.
              </p>
              <p>
                Každé fotenie je individuálne – bábätku sa plne prispôsobím,
                priebežne sa kojí, uspáva a polohuje v mojich skúsených rukách.
                Ateliér je vykúrený na príjemnú teplotu a vybavený všetkým
                potrebným.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/novorodenci/mdfoto-novorodenecke-fotenie (5).jpg"
                alt="Novorodenecké fotenie Nitra – bábätko v ateliéri MDFOTO"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <h2 className="section-subheading pt-4">
            Čo zahŕňa novorodenecké fotenie?
          </h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <strong>Balík 1 (100 €):</strong> 5 retušovaných fotiek len
              bábätka, tlač 10×15 cm, USB, kartička o bábätku
            </li>
            <li>
              <strong>Balík 2 (150 €):</strong> 10 retušovaných fotiek
              s rodičmi a súrodencami, 2–3 hodiny fotenia, USB a kartička
            </li>
            <li>
              Oblečenie, čelenky, čiapočky, deky a doplnky – všetko mám
              v ateliéri
            </li>
            <li>
              Novorodenec obliekaný, wrapovaný a polohovaný skúsenými rukami
            </li>
            <li>Kojenie počas fotenia je samozrejmosť</li>
          </ul>

          <h2 className="section-subheading pt-4">
            Pre koho je fotenie určené?
          </h2>
          <p>
            Novorodenecké fotenie je vhodné pre rodiny z <strong>Nitry</strong>,{" "}
            <strong>Cabaj-Čáporu</strong>, <strong>Zlatých Moraviec</strong>,{" "}
            <strong>Šale</strong>, <strong>Topoľčian</strong>,{" "}
            <strong>Levíc</strong>, <strong>Hlohovca</strong>,{" "}
            <strong>Komárna</strong>, <strong>Galanty</strong>,{" "}
            <strong>Nových Zámkov</strong> a celého okolia do 100 km. Odporúčam
            si termín rezervovať ešte počas tehotenstva, aby sme po narodení mali
            termín istý.
          </p>

          <h2 className="section-subheading pt-4">
            Prečo si vybrať MDFOTO na fotenie bábätka?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                12+ rokov skúseností
              </p>
              <p className="text-sm">
                Stovky spokojných rodín z Nitry a okolia. Skúsenosť s wrapovaním,
                polohovaním a uspávaním novorodencov.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Bezpečný ateliér
              </p>
              <p className="text-sm">
                Vykúrený, čistý a útulný priestor prispôsobený pre bábätká.
                Bezpečnosť je vždy na prvom mieste.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Kompletný servis
              </p>
              <p className="text-sm">
                Oblečenie, doplnky, vedenie – nemusíte riešiť nič. Vy sa len
                pozeráte, ako vaše bábätko pózuje.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                7 dní v týždni
              </p>
              <p className="text-sm">
                Prispôsobím sa vášmu voľnému času. Fotenia realizujem aj cez
                víkendy a sviatky.
              </p>
            </div>
          </div>

          <h2 className="section-subheading pt-4">Ako to prebieha?</h2>
          <ol className="space-y-5">
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-muted text-white font-serif text-lg flex items-center justify-center">1</span>
              <div>
                <p className="font-serif text-charcoal-800 text-lg">Rezervácia termínu</p>
                <p className="text-sm mt-1">Napíšte mi cez formulár, WhatsApp alebo telefón. Termín si dohodneme ešte počas tehotenstva, aby sme mali istotu miesta hneď po pôrode.</p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-muted text-white font-serif text-lg flex items-center justify-center">2</span>
              <div>
                <p className="font-serif text-charcoal-800 text-lg">Fotenie v ateliéri</p>
                <p className="text-sm mt-1">Prídete do ateliéra v Cabaj-Čápore (6 km od Nitry). Bábätko obliekam, wrapujem a polohujem ja – fotenie trvá 3–4 hodiny podľa bábätka. Kojíte, oddychujete a ja sa postarám o všetko.</p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-muted text-white font-serif text-lg flex items-center justify-center">3</span>
              <div>
                <p className="font-serif text-charcoal-800 text-lg">Odovzdanie fotiek</p>
                <p className="text-sm mt-1">Do 3–4 týždňov dostanete retušované fotografie v digitálnej forme, vytlačené na fotopapieri a na USB. Súčasťou je aj personalizovaná kartička o bábätku.</p>
              </div>
            </li>
          </ol>

          <h2 className="section-subheading pt-6">Najčastejšie otázky</h2>
          <div className="space-y-4">
            <details className="border border-cream-300 p-4 group">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Kedy je ideálny čas na novorodenecké fotenie?
              </summary>
              <p className="mt-3 text-sm">
                Ideálne je prísť v prvých 5–14 dňoch po narodení, kedy bábätko
                veľa spí a dá sa ľahko polohovať a wrapovať. Termín si
                dohodnite ešte počas tehotenstva.
              </p>
            </details>
            <details className="border border-cream-300 p-4 group">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Je fotenie novorodencov bezpečné?
              </summary>
              <p className="mt-3 text-sm">
                Áno. Ateliér je vykúrený na optimálnu teplotu pre bábätko,
                dodržiavam hygienické štandardy a novorodenca polohujem a
                wrapujem skúsenými rukami. Bezpečnosť je vždy na prvom mieste.
              </p>
            </details>
            <details className="border border-cream-300 p-4 group">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Koľko stojí novorodenecké fotenie v Nitre?
              </summary>
              <p className="mt-3 text-sm">
                Od 100 € (Balík 1 – 5 retušovaných fotiek, len bábätko) do
                150 € (Balík 2 – 10 retušovaných fotiek s rodinou). Tlač, USB
                a kartička o bábätku sú v cene.{" "}
                <Link
                  href="/cennik"
                  className="text-rose-dark hover:underline"
                >
                  Pozrieť cenník →
                </Link>
              </p>
            </details>
            <details className="border border-cream-300 p-4 group">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Musím si priniesť oblečenie pre bábätko?
              </summary>
              <p className="mt-3 text-sm">
                Nie, v ateliéri mám kompletné vybavenie – oblečenie, čelenky,
                čiapočky, deky, košíky a ďalšie doplnky pre novorodencov.
              </p>
            </details>
            <details className="border border-cream-300 p-4 group">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Kde sa fotenie koná?
              </summary>
              <p className="mt-3 text-sm">
                V mojom ateliéri v Cabaj-Čápore, len 6 km od centra Nitry.
                Ateliér je vykúrený, čistý, útulný a prispôsobený potrebám
                bábätiek.
              </p>
            </details>
          </div>

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
              – krásne portréty budúcich mamičiek
            </li>
            <li>
              <Link
                href="/fotograf-nitra"
                className="hover:underline text-rose-dark"
              >
                Fotograf Nitra
              </Link>{" "}
              – všetky služby na jednom mieste
            </li>
          </ul>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary text-center">
              Rezervovať novorodenecké fotenie
            </Link>
            <Link href="/novorodenci" className="btn-outline text-center">
              Pozrieť galériu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
