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
          "5 retušovaných fotiek + tlač 10x15 cm",
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
          "10 retušovaných fotiek + tlač 10x15 cm",
          "USB s vybranými upravenými zábermi",
          "Každá fotka navyše +15€",
          "Ostatné nafotené zábery +100€",
          "Exteriér s príplatkom 10€",
          "Príplatok 15€ víkend",
          "Šaty, čipkované župany, body k dispozícii",
          "Možnosť vizážistky pred fotením",
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
          "5 retušovaných fotiek + tlač 10x15 cm",
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
          "10 retušovaných fotiek + tlač 10x15 cm",
          "USB s vybranými upravenými zábermi",
          "Každá fotka navyše +15€",
          "Ostatné nafotené zábery +100€",
          "Exteriér s príplatkom 10€",
          "Príplatok 15€ víkend",
          "Ďalší členovia rodiny +10€/osoba",
          "Doplnky pre deti v ateliéri",
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
          "5 retušovaných fotiek + tlač 10x15 cm",
          "Fotí sa len bábätko",
          "Fotenie cca 1 hodina",
          "USB s vybranými upravenými zábermi",
          "Kartička o bábätku (5 ks)",
          "Každá fotka navyše +15€",
          "Fotenie v ateliéri",
          "Príplatok 15€ víkend",
        ],
      },
      {
        name: "Balík 2",
        price: "150€",
        items: [
          "10 retušovaných fotiek + tlač 10x15 cm",
          "Fotia sa rodičia, súrodenci aj bábo",
          "Fotenie cca 2–3 hodiny",
          "Kartička o bábätku (5 ks)",
          "USB s vybranými upravenými zábermi",
          "Každá fotka navyše +15€",
          "Ostatné nafotené zábery +100€",
          "Ďalší členovia rodiny +10€",
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
        description="Cenník je orientačný. Presný rozsah a termín spolu doladíme podľa vašich predstáv."
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
