import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Cenník",
  description:
    "Cenník tehotenského, rodinného a novorodeneckého fotenia v Nitre. Balíky, doplatky a dôležité informácie.",
};

type Package = {
  name: string;
  price: string;
  items: string[];
};

type PriceSection = {
  title: string;
  packages: Package[];
};

const priceSections: PriceSection[] = [
  {
    title: "Tehotenské fotenie",
    packages: [
      {
        name: "Balík 1",
        price: "90€",
        items: [
          "5 retušovaných fotiek, tlač 10x15 cm",
          "USB s vybranými upravenými zábermi",
          "Každá fotka navyše +15€",
          "Neupravené fotky nedávam",
          "Fotenie len v ateliéri",
          "Príplatok 15€ víkend",
        ],
      },
      {
        name: "Balík 2",
        price: "130€",
        items: [
          "10 retušovaných fotiek, tlač 10x15 cm",
          "USB s vybranými upravenými zábermi",
          "Každá fotka navyše +15€",
          "Ostatné nafotené zábery +100€",
          "Exteriér s príplatkom 10€",
          "Príplatok 15€ víkend",
          "Šaty, čipkované župany, body k tehotenskému foteniu k dispozícii",
          "Možnosť zajednať vizážistku pred fotením – 45€ líčenie a úprava vlasov 40–45€ (cena závisí od dĺžky vlasov a úkonu) – treba hlásiť, keď si pýtate termín (vizážistka je v Cabaji – Lenka Vrbiaková)",
          "Fotenie v Cabaj-Čápore – 6 km od Nitry, prípadne Nitra exteriér",
        ],
      },
    ],
  },
  {
    title: "Rodinné a narodeninové fotenie",
    packages: [
      {
        name: "Balík 1",
        price: "80€",
        items: [
          "5 retušovaných fotiek, tlač 10x15 cm",
          "Fotia sa len deti",
          "USB s vybranými upravenými zábermi",
          "Každá fotka navyše +15€",
          "Neupravené fotky nedávam",
          "Fotenie len v ateliéri",
          "Príplatok 15€ víkend",
        ],
      },
      {
        name: "Balík 2",
        price: "130€",
        items: [
          "10 retušovaných fotiek, tlač 10x15 cm",
          "USB s vybranými upravenými zábermi",
          "Každá fotka navyše +15€",
          "Ostatné nafotené zábery +100€",
          "Exteriér s príplatkom 10€",
          "Príplatok 15€ víkend",
          "Ďalší členovia rodiny (babka, dedko, krstná mama) +10€ k balíku/osoba",
          "Šaty pre dievčatká či košele pre chlapcov k dispozícii (treba overiť veľkosti), čelenky aj motýliky na požičanie v ateliéri",
          "Na narodeninové fotenie k dispozícii balónová výzdoba, drevené čísla 1–9 rokov, vanička na kúpacie fotky pre detičky od 9m do 2r",
          "Možnosť zajednať vizážistku pred fotením – 45€ líčenie a úprava vlasov 40–45€ (cena závisí od dĺžky vlasov a úkonu) – treba hlásiť, keď si pýtate termín (vizážistka je v Cabaji – Lenka Vrbiaková)",
          "Fotenie v Cabaj-Čápore – 6 km od Nitry, prípadne Nitra exteriér",
        ],
      },
    ],
  },
  {
    title: "Novorodenecké fotenie",
    packages: [
      {
        name: "Balík 1",
        price: "100€",
        items: [
          "5 retušovaných fotiek, tlač 10x15 cm",
          "Fotí sa len bábätko",
          "Fotenie v trvaní cca 1 hod.",
          "USB s vybranými upravenými zábermi",
          "Kartička o bábätku s údajmi, tlač 5 ks",
          "Každá fotka navyše +15€",
          "Neupravené fotky nedávam",
          "Fotenie v ateliéri",
          "Príplatok 15€ víkend",
        ],
      },
      {
        name: "Balík 2",
        price: "150€",
        items: [
          "10 retušovaných fotiek, tlač 10x15 cm",
          "Fotia sa rodičia, súrodenci aj bábo samostatne",
          "Fotenie v trvaní cca 2–3 hod.",
          "Kartička o bábätku s údajmi, tlač 5 ks",
          "USB s vybranými upravenými zábermi",
          "Každá fotka navyše +15€",
          "Ostatné nafotené zábery +100€",
          "Fotenie v ateliéri",
          "Príplatok 15€ víkend, ak je vyžiadaný",
          "Ďalší členovia rodiny (babka, dedko, krstná mama) +10€ k balíku",
          "Oblečenie, čelenky, čiapočky pre novorodencov mám, netreba nosiť nič",
          "Ateliér vykúrený, čistý, útulný, prispôsobený potrebám rodičov a ich detí",
          "Novorodenec je obliekaný, wrapovaný, polohovaný, uspávaný skúsenými rukami fotografky, bábo je fotené v kľudnej atmosfére, priebežne sa kojí a uspáva podľa potreby",
          "Fotenie v Cabaj-Čápore – 6 km od Nitry",
          "Možnosť zajednať vizážistku pred fotením – 45€ líčenie a úprava vlasov 40–45€ (cena závisí od dĺžky vlasov a úkonu) – treba hlásiť, keď si pýtate termín (vizážistka je v Cabaji – Lenka Vrbiaková)",
        ],
      },
    ],
  },
];

export default function CennikPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cenník"
        title="Balíky fotenia"
        description="Presný rozsah a termín spolu doladíme podľa vašich predstáv."
      />

      <section className="py-16 md:py-20">
        <div className="container-wide space-y-14">
          {priceSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h2 className="section-subheading">{section.title}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {section.packages.map((pkg) => (
                  <article
                    key={`${section.title}-${pkg.name}`}
                    className="bg-cream-50 border border-cream-300 p-6 md:p-8"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-serif text-2xl text-charcoal-800">
                        {pkg.name}
                      </h3>
                      <span className="text-xl font-serif text-rose-dark">
                        {pkg.price}
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-charcoal-700">
                      {pkg.items.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span aria-hidden>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream-200 border-y border-cream-300">
        <div className="container-wide py-8 text-sm text-charcoal-700 leading-relaxed">
          <p>
            Poznámka: Neupravené zábery slúžia len na osobné účely, teda do
            súkromného albumu, nie na internet. Je zakázaný akýkoľvek ďalší
            zásah do upravených aj neupravených fotiek bez súhlasu autora.
          </p>
        </div>
      </section>
    </>
  );
}
