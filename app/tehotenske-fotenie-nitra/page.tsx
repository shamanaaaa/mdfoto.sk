import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tehotenské fotenie Nitra",
  description:
    "Tehotenské fotenie Nitra – elegantné portréty budúcich mamičiek v ateliéri aj exteriéri. Šaty a doplnky k dispozícii, od 90 €. Rezervujte si termín.",
  alternates: { canonical: "/tehotenske-fotenie-nitra" },
  openGraph: {
    title: "Tehotenské fotenie Nitra | MDFOTO",
    description:
      "Nadčasové tehotenské fotenie v Nitre. Šaty, čipkované župany a doplnky k dispozícii. Od 90 €.",
    url: "/tehotenske-fotenie-nitra",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "V koľkom týždni tehotenstva je ideálne prísť na fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideálny čas je medzi 30.–36. týždňom tehotenstva, kedy je bruško krásne vidieť a mamička sa ešte cíti pohodlne.",
      },
    },
    {
      "@type": "Question",
      name: "Musím si priniesť vlastné šaty na tehotenské fotenie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie, v ateliéri mám k dispozícii šaty, čipkované župany aj body špeciálne na tehotenské fotenie. Môžete si však doniesť aj vlastné.",
      },
    },
    {
      "@type": "Question",
      name: "Koľko stojí tehotenské fotenie v Nitre?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tehotenské fotenie stojí od 90 € (Balík 1 – 5 retušovaných fotiek) do 130 € (Balík 2 – 10 retušovaných fotiek). Vizážistka je k dispozícii za príplatok 45 €.",
      },
    },
    {
      "@type": "Question",
      name: "Môže prísť na fotenie aj partner alebo starší súrodenec?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Samozrejme! Partner a deti sú vítaní. Spoločné zábery sú krásnym doplnkom tehotenského fotenia.",
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
      name: "Tehotenské fotenie Nitra",
      item: "https://mdfoto.sk/tehotenske-fotenie-nitra",
    },
  ],
};

export default function TehotenskeFotenieNitraPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="Tehotenské fotenie Nitra"
        title="Krása materstva v nadčasových fotkách"
        description="Tehotenské fotenie s citlivým vedením, jemným stylingom a prirodzenou atmosférou v Nitre a okolí."
        breadcrumbs={[{ label: "Domov", href: "/" }, { label: "Tehotenské fotenie Nitra" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-8 text-charcoal-700 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <p>
                <strong>Tehotenské fotenie v Nitre</strong> je ideálnym spôsobom,
                ako si uchovať výnimočné obdobie čakania bábätka. V ateliéri mám
                k dispozícii šaty, čipkované župany aj ďalšie doplnky – stačí prísť
                a ja sa postarám o zvyšok.
              </p>
              <p>
                Počas fotenia vás jemne navádzam do póz, aby ste sa cítili
                prirodzene a krásne. Podľa vášho štýlu vieme fotenie realizovať
                aj v exteriéri v Nitre a okolí.
              </p>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/tehulky/mdfoto-tehotenske-fotenie (1).jpg"
                alt="Tehotenské fotenie Nitra – budúca mamička v ateliéri MDFOTO"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <h2 className="section-subheading pt-4">
            Čo zahŕňa tehotenské fotenie?
          </h2>
          <ul className="space-y-2 list-disc pl-6">
            <li>
              <strong>Balík 1 (90 €):</strong> 5 retušovaných fotiek, tlač
              10×15 cm – len v ateliéri
            </li>
            <li>
              <strong>Balík 2 (130 €):</strong> 10 retušovaných fotiek,
              ateliér + exteriér
            </li>
            <li>
              Šaty, čipkované župany a body k tehotenskému foteniu k dispozícii
            </li>
            <li>
              Vizážistka na požiadanie – líčenie 45 €, úprava vlasov 40–45 €
            </li>
            <li>
              Možnosť spoločných záberov s partnerom alebo staršími deťmi
            </li>
          </ul>

          <h2 className="section-subheading pt-4">
            Kedy na fotenie prísť?
          </h2>
          <p>
            Ideálny čas na tehotenské fotenie je medzi <strong>30. a 36.
            týždňom tehotenstva</strong>. V tomto období je bruško krásne
            viditeľné a mamička sa ešte cíti pohodlne. Odporúčam si termín
            dohodnúť minimálne 2–3 týždne vopred.
          </p>

          <h2 className="section-subheading pt-4">
            Pre koho je fotenie určené?
          </h2>
          <p>
            Moje klientky prichádzajú z <strong>Nitry</strong>,{" "}
            <strong>Cabaj-Čáporu</strong>, <strong>Zlatých Moraviec</strong>,{" "}
            <strong>Šale</strong>, <strong>Topoľčian</strong>,{" "}
            <strong>Levíc</strong>, <strong>Hlohovca</strong>,{" "}
            <strong>Piešťan</strong>, <strong>Galanty</strong>,{" "}
            <strong>Nových Zámkov</strong> a celého Nitrianskeho kraja. Fotím{" "}
            <strong>7 dní v týždni</strong> a prispôsobím sa vášmu voľnému času.
          </p>

          <h2 className="section-subheading pt-4">Ako to prebieha?</h2>
          <ol className="space-y-5">
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-muted text-white font-serif text-lg flex items-center justify-center">1</span>
              <div>
                <p className="font-serif text-charcoal-800 text-lg">Rezervácia termínu</p>
                <p className="text-sm mt-1">Napíšte mi v 7.–8. mesiaci tehotenstva a dohodneme ideálny termín. Poradím vám s oblečením – alebo využijete šaty a župany priamo z ateliéra.</p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-muted text-white font-serif text-lg flex items-center justify-center">2</span>
              <div>
                <p className="font-serif text-charcoal-800 text-lg">Fotenie so štýlom</p>
                <p className="text-sm mt-1">Fotenie trvá 1–2 hodiny. Celý čas vás jemne navádzam do póz, aby ste vyzerali prirodzene a sebavedomo. Na požiadanie je k dispozícii aj vizážistka.</p>
              </div>
            </li>
            <li className="flex gap-5 items-start">
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-rose-muted text-white font-serif text-lg flex items-center justify-center">3</span>
              <div>
                <p className="font-serif text-charcoal-800 text-lg">Nadčasové spomienky</p>
                <p className="text-sm mt-1">Do 3–4 týždňov dostanete retušované fotografie v digitálnej forme a vytlačené na fotopapieri. Výsledky sú elegantné, jemné a nadčasové – dôstojná spomienka na toto výnimočné obdobie.</p>
              </div>
            </li>
          </ol>

          <h2 className="section-subheading pt-6">Najčastejšie otázky</h2>
          <div className="space-y-4">
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                V koľkom týždni tehotenstva je ideálne prísť na fotenie?
              </summary>
              <p className="mt-3 text-sm">
                Ideálny čas je medzi 30.–36. týždňom tehotenstva, kedy je bruško
                krásne vidieť a mamička sa ešte cíti pohodlne.
              </p>
            </details>
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Musím si priniesť vlastné šaty na tehotenské fotenie?
              </summary>
              <p className="mt-3 text-sm">
                Nie, v ateliéri mám k dispozícii šaty, čipkované župany aj body
                špeciálne na tehotenské fotenie. Môžete si však doniesť aj vlastné.
              </p>
            </details>
            <details className="border border-cream-300 p-4">
              <summary className="font-serif text-charcoal-800 cursor-pointer">
                Koľko stojí tehotenské fotenie v Nitre?
              </summary>
              <p className="mt-3 text-sm">
                Od 90 € (Balík 1 – 5 retušovaných fotiek) do 130 € (Balík 2 –
                10 retušovaných fotiek). Vizážistka za príplatok 45 €.{" "}
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
                Môže prísť na fotenie aj partner alebo starší súrodenec?
              </summary>
              <p className="mt-3 text-sm">
                Samozrejme! Partner a deti sú vítaní. Spoločné zábery sú krásnym
                doplnkom tehotenského fotenia.
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
              – ideálny ďalší krok po pôrode
            </li>
            <li>
              <Link
                href="/rodinne-fotenie-nitra"
                className="hover:underline text-rose-dark"
              >
                Rodinné fotenie Nitra
              </Link>{" "}
              – hravé fotenie rodín a detí
            </li>
          </ul>

          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary text-center">
              Rezervovať termín
            </Link>
            <Link href="/tehulky" className="btn-outline text-center">
              Pozrieť galériu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
