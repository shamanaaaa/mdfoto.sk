import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import JsonLd from "@/components/JsonLd";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://mdfoto.sk/#majka",
  name: "Majka Domanová",
  givenName: "Majka",
  familyName: "Domanová",
  jobTitle: "Fotografka",
  description:
    "Profesionálna fotografka z Nitry so 12+ rokmi skúseností. Špecializuje sa na novorodenecké, rodinné a tehotenské fotenie v ateliéri v Cabaj-Čápore.",
  url: "https://mdfoto.sk/o-mne",
  image: "https://mdfoto.sk/images/o-mne/mdfoto-maria-domanova-mdfoto.png",
  sameAs: ["https://www.facebook.com/mdfoto.sk"],
  worksFor: {
    "@type": "Organization",
    "@id": "https://mdfoto.sk/#business",
    name: "MDFOTO",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cabaj-Čápor",
    addressRegion: "Nitriansky kraj",
    addressCountry: "SK",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Domov", item: "https://mdfoto.sk" },
    { "@type": "ListItem", position: 2, name: "O mne", item: "https://mdfoto.sk/o-mne" },
  ],
};

export const metadata: Metadata = {
  title: "O mne – Majka Domanová, fotografka Nitra",
  description:
    "Majka Domanová – fotografka z Nitry s 12+ rokmi skúseností. Mama 3 synov. Špecializácia na novorodencov, rodiny a tehotenské fotenie v ateliéri v Cabaj-Čápore.",
  alternates: { canonical: "/o-mne" },
  openGraph: {
    title: "O mne – Majka Domanová | MDFOTO",
    description:
      "Spoznajte Majku Domanovovú – fotografku z Nitry s 12+ rokmi praxe a vášňou pre rodinné momenty.",
    url: "/o-mne",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={breadcrumbSchema} />

      <PageHeader
        eyebrow="O mne"
        title="Majka Domanová"
        description="Fotografka z Nitry s 12+ rokmi skúseností a srdcom pre rodinné momenty."
        breadcrumbs={[{ label: "Domov", href: "/" }, { label: "O mne" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-[4/5] overflow-hidden bg-cream-200 lg:sticky lg:top-8">
            <Image
              src="/images/o-mne/mdfoto-maria-domanova-mdfoto.png"
              alt="Majka Domanová – fotografka Nitra – MDFOTO"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <article className="space-y-7 text-charcoal-700 leading-relaxed">
            <h2 className="font-serif text-2xl text-charcoal-800">
              Prečo fotografujem
            </h2>
            <p>
              Veľmi sa teším tomu, že mi s dôverou zverujete do rúk to
              najcennejšie, čo máte – Vaše detičky. S láskou a opatrnosťou Vám
              ich rada zvečním počas prvých dní ich života. Fotografia pre mňa
              nie je len práca – je to spôsob, akým chránim tie najkrajšie
              okamžiky pred zabudnutím.
            </p>
            <p>
              Sama som mama troch úžasných synov, a práve preto dokonale
              rozumiem tomu, čo prežívate. Viem, ako rýchlo čas beží, ako sa
              novorodenec za pár týždňov zmení na bábätko plné úsmevu, a to
              bábätko za rok na malého rozprávača. Tieto okamihy sa nedajú
              vrátiť – dajú sa len uchovať.
            </p>

            <h2 className="font-serif text-2xl text-charcoal-800 pt-2">
              Moja cesta k fotografii
            </h2>
            <p>
              Fotografujem už viac ako <strong>12 rokov</strong>. Za ten čas
              som odfotila stovky rodín, novorodencov, tehotných mamičiek a
              detí v rôznych vekových kategóriách. Každé fotenie je pre mňa
              iné – každá rodina má svoju atmosféru, každé dieťa svoju
              osobnosť a každý záber svoju príbeh.
            </p>
            <p>
              Neustále sa vzdelávam v oblasti novorodeneckej fotografie,
              pretože bezpečnosť bábätiek je pre mňa na prvom mieste. Všetky
              pozy a techniky, ktoré používam, sú overené a bezpečné.
              Novorodenecké fotenie trvá pokojne aj 3–4 hodiny, pretože
              bábätku sa prispôsobujem ja – nie ono mne.
            </p>

            <h2 className="font-serif text-2xl text-charcoal-800 pt-2">
              Môj ateliér v Cabaj-Čápore
            </h2>
            <p>
              Fotenia realizujem v súkromnom ateliéri v{" "}
              <strong>Cabaj-Čápore</strong>, len 6 km od centra Nitry. Ateliér
              je vykúrený na príjemnú teplotu pre novorodencov, útulne
              zariadený a vybavený:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm">
              <li>Oblečením a čelenkami pre novorodencov vo všetkých veľkostiach</li>
              <li>Elegantými šatami a županmi pre tehotné mamičky</li>
              <li>Farebnými pozadiami a dekoráciami pre rodinné fotenie</li>
              <li>Rekvizitami a výzdobou pre narodeninové fotenie</li>
              <li>Priestorom na dojčenie a prebaľovanie</li>
            </ul>
            <p>
              Nemusíte si prinášať takmer nič – všetko dôležité máme v
              ateliéri. Pomôžem vám s výberom oblečenia, štýlom a celou
              prípravou, aby ste si fotenie užili bez stresu.
            </p>

            <h2 className="font-serif text-2xl text-charcoal-800 pt-2">
              Môj prístup k foteniu
            </h2>
            <p>
              Staviam na <strong>prirodzenosti a pohode</strong>. Počas
              fotenia nikam neponáhľam – čas si prispôsobujem podľa detí a
              rodiny. Deti si ma väčšinou rýchlo obľúbia, pretože v ateliéri
              je vždy dobrá nálada, hudba a priestor na spontánne momenty.
            </p>
            <p>
              Každú fotografiu starostlivo retuším – výsledok dostanete v
              digitálnej forme a vytlačený na fotopapieri. Spracovanie
              trvá zvyčajne <strong>3–4 týždne</strong>. Dbám na to, aby
              každý záber bol nadčasový a dôstojný – niečo, čo si zarámujete
              a budete na ňom hrdí aj o 20 rokov.
            </p>

            <h2 className="font-serif text-2xl text-charcoal-800 pt-2">
              Kde fotím
            </h2>
            <p>
              Okrem ateliéra fotografujem aj v exteriéri – v nitrianskych
              parkoch, na lúkach, pri riekach alebo kdekoľvek, kde sa vám to
              páči. Pre milovníkov prírody ponúkam aj výjazdy mimo Nitry.
              Klienti ma navštevujú z celého Nitrianskeho kraja – z{" "}
              <strong>Zlatých Moraviec</strong>,{" "}
              <strong>Topoľčian</strong>, <strong>Šale</strong>,{" "}
              <strong>Levíc</strong>, <strong>Hlohovca</strong>,{" "}
              <strong>Komárna</strong> aj ďalej.
            </p>

            <p className="font-serif text-lg text-charcoal-800 italic pt-2 border-l-2 border-rose-muted pl-5">
              &bdquo;Fotografia je nádherným darom, ktorý nadobúda na hodnote
              časom… Pretože čas môžeme zastaviť len vďaka fotografiám.&ldquo;
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/kontakt" className="btn-primary text-center">
                Rezervovať termín fotenia
              </Link>
              <Link href="/fotograf-nitra" className="btn-outline text-center">
                Moje služby
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
