import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";
import Gallery, { type GalleryImage } from "@/components/Gallery";
import { og } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Rodinné fotenie Nitra",
  description:
    "Rodinné fotenie Nitra – hravé a prirodzené fotenie rodín, detí a narodeninové fotenie v ateliéri alebo exteriéri. Od 80 €. Rezervujte si termín.",
  alternates: { canonical: "/rodinne-fotenie-nitra" },
  openGraph: og({
    title: "Rodinné fotenie Nitra | MDFOTO",
    description:
      "Hravé rodinné fotenie bez stresu v Nitre a okolí. Pomoc s prípravou, oblečením aj priebehom. Od 80 €.",
    url: "/rodinne-fotenie-nitra",
    image: "/images/rodinky-deti/mdfoto-rodinne-fotenie (23).jpg",
    imageAlt: "Rodinné fotenie Nitra – MDFOTO",
  }),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Od koľkých rokov je vhodné rodinné fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rodinné fotenie je vhodné pre deti od 9 mesiacov. Pre menšie deti mám vaničku na kúpacie fotky, pre väčšie balónovú výzdobu a drevené čísla 1–9 rokov.",
      },
    },
    {
      "@type": "Question",
      name: "Čo si máme obliecť na rodinné fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pomôžem vám s výberom oblečenia. V ateliéri mám k dispozícii šaty pre dievčatká, košele pre chlapcov, čelenky aj motýliky. Odporúčam zladiť farby a zvoliť pohodlné oblečenie.",
      },
    },
    {
      "@type": "Question",
      name: "Koľko stojí rodinné fotenie v Nitre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rodinné a narodeninové fotenie stojí od 80 € (Balík 1 – 5 retušovaných fotiek, len deti) do 130 € (Balík 2 – 10 retušovaných fotiek, celá rodina). Podrobnosti nájdete v cenníku.",
      },
    },
    {
      "@type": "Question",
      name: "Fotíte aj narodeninové fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, narodeninové fotenie je súčasťou rodinného balíka. K dispozícii sú balónová výzdoba a drevené čísla 1–9 rokov.",
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
      name: "Rodinné fotenie Nitra",
      item: "https://mdfoto.sk/rodinne-fotenie-nitra",
    },
  ],
};

const galleryImages: GalleryImage[] = [
  { src: "/images/rodinky-deti/mdfoto-rodinne-fotenie (23).jpg", alt: "Rodina s deťmi v ateliéri – rodinné fotenie Nitra MDFOTO" },
  { src: "/images/rodinky-deti/mdfoto-rodinne-fotenie (24).jpg", alt: "Rodičia a deti v exteriéri – rodinné fotenie Nitra Majka Domanová" },
  { src: "/images/rodinky-deti/mdfoto-rodinne-fotenie (25).jpg", alt: "Rodinný portrét v ateliéri – rodinné fotenie MDFOTO Cabaj-Čápor" },
  { src: "/images/rodinky-deti/mdfoto-rodinne-fotenie (26).jpg", alt: "Mama s deťmi – hravé rodinné fotenie Nitra MDFOTO" },
  { src: "/images/rodinky-deti/mdfoto-rodinne-fotenie (1).jpg", alt: "Rodičia s bábätkom – rodinné novorodenecké fotenie Nitra MDFOTO" },
  { src: "/images/rodinky-deti/mdfoto-rodinne-fotenie (2).jpg", alt: "Deti sa smejú – hravé detské fotenie ateliér Nitra" },
  { src: "/images/rodinky-deti/mdfoto-rodinne-fotenie (3).jpg", alt: "Rodinný portrét – rodinné fotenie Cabaj-Čápor MDFOTO" },
  { src: "/images/rodinky-deti/mdfoto-rodinne-fotenie (4).jpg", alt: "Narodeninové fotenie s balónmi – detské fotenie Nitra" },
];

export default function RodinneFotenieNitraPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Hravé a prirodzené"
        title="Rodinné fotenie Nitra plné emócií"
        description="Zachytím momenty smiechu, blízkosti a prirodzenej radosti vašej rodiny – v ateliéri pri Nitre alebo v exteriéri."
        breadcrumbs={[{ label: "Domov", href: "/" }, { label: "Rodinné fotenie Nitra" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <p>
                <strong>Rodinné fotenie v Nitre</strong> je navrhnuté tak, aby
                ste sa cítili pohodlne a nemuseli riešiť zbytočný stres. Pomôžem
                vám s oblečením, výberom prostredia aj priebehom fotenia – vy sa
                len uvoľnite a užívajte spoločný čas.
              </p>
              <p>
                Fotenie je vhodné pre malé deti, súrodencov aj viacgeneračné
                rodiny. K dispozícii sú doplnky a výzdoba podľa typu fotenia –
                od narodeninových balónov po elegantnú rodinnú výzdobu.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/rodinky-deti/mdfoto-rodinne-fotenie (1).jpg"
                alt="Rodinné fotenie Nitra – rodina v ateliéri MDFOTO"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <h2 className="section-subheading pt-4">
            Čo zahŕňa rodinné fotenie?
          </h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <strong>Balík 1 (80 €):</strong> 5 retušovaných fotiek len detí,
              tlač 10×15 cm
            </li>
            <li>
              <strong>Balík 2 (130 €):</strong> 10 retušovaných fotiek celej
              rodiny, ateliér aj exteriér
            </li>
            <li>
              Šaty pre dievčatká, košele pre chlapcov, čelenky a motýliky
              k dispozícii
            </li>
            <li>
              Balónová výzdoba na narodeninové fotenie, drevené čísla 1–9 rokov
            </li>
            <li>
              Vanička na kúpacie fotky pre detičky od 9 mesiacov do 2 rokov
            </li>
          </ul>

          <h2 className="section-subheading pt-4">
            Typy rodinného fotenia
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Narodeninové fotenie
              </p>
              <p className="text-sm">
                Oslávte prvé, druhé aj ďalšie narodeniny vášho dieťaťa.
                Balónová výzdoba a drevené čísla k dispozícii.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Súrodenecké fotenie
              </p>
              <p className="text-sm">
                Krásne zábery súrodencov, ktoré zachytia ich vzťah a hravosť.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Viacgeneračné portréty
              </p>
              <p className="text-sm">
                Babka, dedko, rodičia a deti – spoločná fotografia, ktorá nemá
                cenu.
              </p>
            </div>
            <div className="bg-cream-200 p-5 space-y-2">
              <p className="font-serif text-lg text-charcoal-800">
                Exteriérové fotenie
              </p>
              <p className="text-sm">
                Fotenie vonku v Nitre a blízkom okolí – v parku, na lúke alebo
                v meste.
              </p>
            </div>
          </div>

          <h2 className="section-subheading pt-4">
            Ukážky z rodinných fotení
          </h2>
          <Gallery images={galleryImages} columns={4} />
          <p className="text-sm text-center">
            <Link href="/rodinky-deti" className="text-rose-dark hover:underline">
              Pozrieť celú galériu rodinného fotenia →
            </Link>
          </p>

          <h2 className="section-subheading pt-4">
            Pre koho je fotenie určené?
          </h2>
          <p>
            Rodinné fotenie vyhľadávajú rodiny z <strong>Nitry</strong>,{" "}
            <strong>Cabaj-Čáporu</strong>, <strong>Zlatých Moraviec</strong>,{" "}
            <strong>Šale</strong>, <strong>Topoľčian</strong>,{" "}
            <strong>Levíc</strong>, <strong>Hlohovca</strong>,{" "}
            <strong>Nových Zámkov</strong>, <strong>Komárna</strong> a celého
            Nitrianskeho kraja. Prispôsobím sa vášmu voľnému času – fotím{" "}
            <strong>7 dní v týždni</strong>.
          </p>

          <h2 className="section-subheading pt-4">Ako to prebieha?</h2>
          <ol className="space-y-5">
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-muted text-white font-serif text-lg flex items-center justify-center">1</span>
              <div>
                <p className="font-serif text-charcoal-800 text-lg">Rezervácia a konzultácia</p>
                <p className="text-sm mt-1">Napíšte mi a dohodneme si termín. Poradím vám s oblečením, výzdobou aj tým, čo si doniesť so sebou. Vopred sa dohovoríme na type fotenia – ateliér, exteriér alebo kombinácia.</p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-muted text-white font-serif text-lg flex items-center justify-center">2</span>
              <div>
                <p className="font-serif text-charcoal-800 text-lg">Fotenie v pohode</p>
                <p className="text-sm mt-1">Fotenie trvá 1–2 hodiny. Deti sa vždy nájdu – v ateliéri mám hračky, priestor na hru a dobrú náladu. Neponáhľam, prispôsobím sa deťom aj rodine.</p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-muted text-white font-serif text-lg flex items-center justify-center">3</span>
              <div>
                <p className="font-serif text-charcoal-800 text-lg">Fotky, ktoré si zarámujete</p>
                <p className="text-sm mt-1">Do 3–4 týždňov dostanete retušované fotografie digitálne a na fotopapieri. Každý záber je spracovaný s láskou a zmyslom pre detail.</p>
              </div>
            </li>
          </ol>

          <h2 className="section-subheading pt-6">Najčastejšie otázky</h2>
          <div className="space-y-4">
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Od koľkých rokov je vhodné rodinné fotenie?
              </summary>
              <p className="mt-3 text-sm">
                Rodinné fotenie je vhodné pre deti od 9 mesiacov. Pre menšie deti
                mám vaničku na kúpacie fotky, pre väčšie balónovú výzdobu a
                drevené čísla.
              </p>
            </details>
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Čo si máme obliecť na rodinné fotenie?
              </summary>
              <p className="mt-3 text-sm">
                Pomôžem vám s výberom oblečenia. V ateliéri mám k dispozícii šaty
                pre dievčatká, košele pre chlapcov, čelenky aj motýliky. Odporúčam
                zladiť farby a zvoliť pohodlné oblečenie.
              </p>
            </details>
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Koľko stojí rodinné fotenie v Nitre?
              </summary>
              <p className="mt-3 text-sm">
                Od 80 € (Balík 1 – 5 retušovaných fotiek, len deti) do 130 €
                (Balík 2 – 10 retušovaných fotiek, celá rodina).{" "}
                <Link
                  href="/cennik"
                  className="text-rose-dark hover:underline"
                >
                  Pozrieť cenník →
                </Link>
              </p>
            </details>
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Fotíte aj narodeninové fotenie?
              </summary>
              <p className="mt-3 text-sm">
                Áno, narodeninové fotenie je súčasťou rodinného balíka. K dispozícii
                sú balónová výzdoba a drevené čísla 1–9 rokov.
              </p>
            </details>
          </div>

          <h2 className="section-subheading pt-4">Súvisiace služby</h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <Link
                href="/novorodenecke-fotenie-nitra"
                className="hover:underline text-rose-dark"
              >
                Novorodenecké fotenie Nitra
              </Link>{" "}
              – fotenie bábätiek v prvých dňoch života
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
          </ul>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary text-center">
              Overiť termín
            </Link>
            <Link href="/rodinky-deti" className="btn-outline text-center">
              Pozrieť galériu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
