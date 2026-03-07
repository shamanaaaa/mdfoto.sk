import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Časté otázky – FAQ",
  description:
    "Odpovede na najčastejšie otázky o fotení v MDFOTO – novorodenecké, rodinné, tehotenské fotenie v Nitre. Ceny, termíny, ateliér, oblečenie a priebeh fotenia.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Časté otázky | MDFOTO – Fotografka Nitra",
    description:
      "Všetko, čo potrebujete vedieť o fotení s Majkou Domanovou v Nitre a okolí.",
    url: "/faq",
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
        text: "Ateliér sa nachádza v Cabaj-Čápore, len 6 km od centra Nitry. Je vykúrený, útulný a vybavený oblečením, doplnkami a výzdobou – nemusíte riešiť nič navyše.",
      },
    },
    {
      "@type": "Question",
      name: "Aké typy fotenia ponúkate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ponúkam novorodenecké fotenie (od 100 €), rodinné a narodeninové fotenie (od 80 €), tehotenské fotenie (od 90 €) a portrétne fotenie. Všetky služby zahŕňajú retušované fotografie, tlač a USB.",
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
        text: "Áno. Ateliér je vykúrený na optimálnu teplotu pre bábätko, dodržiavam hygienické štandardy a novorodenca polohujem a wrapujem skúsenými rukami po viac ako 12 rokoch praxe.",
      },
    },
    {
      "@type": "Question",
      name: "Musím si priniesť oblečenie na fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie. V ateliéri mám kompletné vybavenie – pre novorodencov oblečenie, čelenky a deky; pre tehotné mamičky šaty, župany a body; pre deti šaty a košele. Pomôžem vám s celým stylingom.",
      },
    },
    {
      "@type": "Question",
      name: "V koľkom týždni tehotenstva je ideálne tehotenské fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideálny čas je medzi 30.–36. týždňom tehotenstva, kedy je bruško krásne vidieť a mamička sa ešte cíti pohodlne.",
      },
    },
    {
      "@type": "Question",
      name: "Ako dlho trvá spracovanie fotografií?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Retušované fotografie dostanete do 3–4 týždňov po fotení. Súčasťou odovzdania je digitálna verzia, tlač na fotopapieri a USB disk.",
      },
    },
    {
      "@type": "Question",
      name: "Fotíte aj v exteriéri?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Áno, okrem ateliéra fotografujem aj vonku – v nitrianskych parkoch, v prírode alebo kdekoľvek, kde sa vám to páči. Exteriér je zahrnutý v Balíku 2 všetkých typov fotenia.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domov", item: "https://mdfoto.sk" },
    { "@type": "ListItem", position: 2, name: "Časté otázky", item: "https://mdfoto.sk/faq" },
  ],
};

const sections = [
  {
    heading: "Rezervácia a termín",
    questions: [
      {
        q: "Ako si rezervujem termín?",
        a: "Stačí vyplniť kontaktný formulár, napísať na WhatsApp alebo zavolať na 0948 505 587. Spolu nastavíme ideálny termín aj balík fotenia.",
      },
      {
        q: "Fotíte aj cez víkendy a sviatky?",
        a: "Áno, fotím 7 dní v týždni. Cez víkend je príplatok 15 €.",
      },
      {
        q: "Kde sa nachádza ateliér?",
        a: "Ateliér sa nachádza v Cabaj-Čápore, len 6 km od centra Nitry. Parkovanie pred domom je zdarma.",
      },
    ],
  },
  {
    heading: "Novorodenecké fotenie",
    questions: [
      {
        q: "Kedy je ideálny čas na novorodenecké fotenie?",
        a: "V prvých 5–14 dňoch po narodení, kedy bábätko veľa spí a dá sa ľahko polohovať. Termín si dohodnite ešte počas tehotenstva.",
      },
      {
        q: "Je fotenie novorodencov bezpečné?",
        a: "Áno. Ateliér je vykúrený, dodržiavam hygienické štandardy a po 12+ rokoch praxe mám istú ruku pri wrapovaní a polohovaní.",
      },
      {
        q: "Musím si priniesť oblečenie pre bábätko?",
        a: "Nie. V ateliéri mám kompletné vybavenie – oblečenie, čelenky, čiapočky, deky, košíky aj doplnky.",
      },
      {
        q: "Môžem dojčiť počas fotenia?",
        a: "Samozrejme. Dojčenie počas novorodeneckého fotenia je úplne normálna súčasť. Máme na to pohodlné miesto.",
      },
    ],
  },
  {
    heading: "Rodinné a detské fotenie",
    questions: [
      {
        q: "Od koľkých rokov je vhodné rodinné fotenie?",
        a: "Od 9 mesiacov. Pre najmenšie deti mám vaničku na kúpacie fotky, pre väčšie balónovú výzdobu a drevené čísla 1–9 rokov.",
      },
      {
        q: "Čo si obliecť na rodinné fotenie?",
        a: "Pomôžem vám s výberom. V ateliéri mám šaty, košele, čelenky aj motýliky. Odporúčam zladené farby a pohodlné oblečenie.",
      },
      {
        q: "Fotíte aj narodeninové fotenie?",
        a: "Áno, je to súčasť rodinného balíka. K dispozícii sú balónová výzdoba a drevené čísla.",
      },
    ],
  },
  {
    heading: "Tehotenské fotenie",
    questions: [
      {
        q: "V koľkom týždni tehotenstva je najlepší čas?",
        a: "Medzi 30.–36. týždňom – bruško je krásne vidieť a mamička sa ešte cíti pohodlne.",
      },
      {
        q: "Musím si doniesť vlastné šaty?",
        a: "Nie. V ateliéri mám šaty, čipkované župany aj body špeciálne na tehotenské fotenie.",
      },
      {
        q: "Je k dispozícii vizážistka?",
        a: "Áno, líčenie je za príplatok 45 € a úprava vlasov 40–45 €. Je potrebné objednať vopred.",
      },
    ],
  },
  {
    heading: "Výsledky a odovzdanie",
    questions: [
      {
        q: "Ako dlho trvá spracovanie fotografií?",
        a: "3–4 týždne po fotení. Dostanete retušované fotografie digitálne, vytlačené na fotopapieri aj na USB.",
      },
      {
        q: "Môžem si fotky zverejniť na sociálnych sieťach?",
        a: "Upravené fotografie môžete zdieľať na osobných profiloch. Neupravené zábery slúžia len na súkromné účely. Akýkoľvek ďalší zásah do fotiek bez súhlasu autora je zakázaný.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Časté otázky"
        title="Máte otázky? Máme odpovede."
        description="Všetko, čo potrebujete vedieť pred rezerváciou termínu fotenia."
        breadcrumbs={[{ label: "Domov", href: "/" }, { label: "Časté otázky" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-14">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="section-subheading mb-6">{section.heading}</h2>
              <div className="space-y-3">
                {section.questions.map((item) => (
                  <details
                    key={item.q}
                    className="border border-cream-300 p-5 group"
                  >
                    <summary className="font-serif text-charcoal-800 cursor-pointer list-none flex justify-between items-center gap-4">
                      <span>{item.q}</span>
                      <span className="flex-shrink-0 text-rose-dark text-sm font-sans group-open:rotate-45 transition-transform">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-sm text-charcoal-700 leading-relaxed">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="bg-cream-100 border border-cream-300 p-8 space-y-4 text-center">
            <p className="font-serif text-xl text-charcoal-800">
              Nenašli ste odpoveď?
            </p>
            <p className="text-sm text-charcoal-700">
              Napíšte mi priamo – rада odpoviem na akúkoľvek otázku.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Link href="/kontakt" className="btn-primary text-center">
                Kontaktovať Majku
              </Link>
              <Link href="/cennik" className="btn-outline text-center">
                Pozrieť cenník
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
