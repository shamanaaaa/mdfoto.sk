import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Heart, Camera, Clock } from "lucide-react";
import JsonLd from "@/components/JsonLd";

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://mdfoto.sk/#website",
  name: "MDFOTO",
  url: "https://mdfoto.sk",
  description:
    "Profesionálne rodinné fotenie, novorodenecké fotenie a tehotenské fotenie v Nitre a okolí.",
  publisher: { "@id": "https://mdfoto.sk/#business" },
  inLanguage: "sk",
};

const categories = [
  {
    href: "/novorodenci",
    label: "Novorodenci",
    desc: "Prvé dni života vo vašich rukách – vzácne momenty zachytené navždy.",
    src: "/images/novorodenci/mdfoto-novorodenecke-fotenie (1).jpg",
    alt: "Novorodenecké fotenie Nitra",
  },
  {
    href: "/rodinky-deti",
    label: "Rodinky & Deti",
    desc: "Hravé, prirodzené a plné lásky – rodinné príbehy, ktoré zostanú.",
    src: "/images/rodinky-deti/mdfoto-rodinne-fotenie (25).jpg",
    alt: "Rodinné fotenie Nitra",
  },
  {
    href: "/tehulky",
    label: "Tehuľky",
    desc: "Krása materstva zachytená v tých najkrajších momentoch čakania.",
    src: "/images/tehulky/mdfoto-tehotenske-fotenie (1).jpg",
    alt: "Tehotenské fotenie Nitra",
  },
];

const features = [
  {
    icon: Heart,
    title: "S láskou a trpezlivosťou",
    desc: "Každé fotenie je pre mňa jedinečný príbeh. Vytváram pokojnú atmosféru, v ktorej sa cítite uvoľnene.",
  },
  {
    icon: Camera,
    title: "Profesionálny výsledok",
    desc: "Retušované fotografie, tlač a USB so zábermi – všetko pre váš dokonalý spomínkový album.",
  },
  {
    icon: Clock,
    title: "7 dní v týždni",
    desc: "Prispôsobím sa vášmu voľnému času. Fotenia prebiehajú aj cez víkendy a sviatky.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={homepageSchema} />

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[600px] flex items-end pb-20 md:pb-28 overflow-hidden">
        {/* Portrait crop for mobile */}
        <Image
          src="/images/rodinky-deti/mdfoto-rodinne-fotenie (25).jpg"
          alt="MDFOTO – Majka Domanová – Rodinné fotenie Nitra"
          fill
          priority
          className="object-cover object-center block md:hidden"
          sizes="100vw"
        />
        {/* Landscape crop for desktop */}
        <Image
          src="/images/rodinky-deti/mdfoto-rodinne-fotenie (23).jpg"
          alt="MDFOTO – Majka Domanová – Rodinné fotenie Nitra"
          fill
          priority
          className="object-cover object-center hidden md:block"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent" />

        <div className="relative container-wide">
          <p className="section-label text-rose-light mb-4">
            Nitra &amp; Okolie
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream-100 leading-[1.1] max-w-3xl mb-6">
            Rodinné spomienky,
            <br />
            ktoré nestratia hodnotu
          </h1>
          <p className="text-cream-200 text-lg max-w-xl mb-10 leading-relaxed">
            Prirodzené fotenie novorodencov, rodín a tehuľiek v Nitre –
            pokojná atmosféra, jasné vedenie a výsledok, ktorý si zamilujete.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/kontakt" className="btn-primary text-center">
              Overiť voľný termín
            </Link>
            <Link
              href="/cennik"
              className="inline-block px-8 py-3.5 border border-cream-200 text-cream-100 text-sm tracking-widest uppercase font-sans hover:bg-cream-100/10 transition-colors duration-300 text-center"
            >
              Pozrieť balíky
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INTRO STRIP ─────────────────────────────────────────── */}
      <section className="bg-charcoal-800 text-cream-200">
        <div className="container-wide py-8 md:py-10">
          <p className="text-center font-serif italic text-lg md:text-xl text-cream-200 leading-relaxed max-w-2xl mx-auto">
            &bdquo;Fotografia je nádherným darom, ktorý nadobúda na hodnote
            časom… pretože čas môžeme zastaviť len vďaka fotografiám.&ldquo;
          </p>
          <p className="text-center text-xs tracking-widest text-charcoal-300 mt-3">
            – MAJKA DOMANOVÁ
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs tracking-wide text-charcoal-300">
            <Link href="/fotograf-nitra" className="hover:text-cream-100 transition-colors">
              Fotograf Nitra
            </Link>
            <Link href="/portretovy-fotograf-nitra" className="hover:text-cream-100 transition-colors">
              Portrétny fotograf Nitra
            </Link>
            <Link href="/novorodenecke-fotenie-nitra" className="hover:text-cream-100 transition-colors">
              Novorodenecké fotenie Nitra
            </Link>
            <Link href="/rodinne-fotenie-nitra" className="hover:text-cream-100 transition-colors">
              Rodinné fotenie Nitra
            </Link>
            <Link href="/tehotenske-fotenie-nitra" className="hover:text-cream-100 transition-colors">
              Tehotenské fotenie Nitra
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CATEGORY TEASERS ─────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Galéria</p>
            <h2 className="section-heading">Čo fotím</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={cat.src}
                    alt={cat.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-serif text-xl text-cream-100 mb-1">
                      {cat.label}
                    </p>
                    <p className="text-cream-200 text-sm leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-cream-100 rounded-full p-1.5">
                    <ChevronRight size={16} className="text-charcoal-800" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─────────────────────────────────────────────── */}
      <section className="bg-cream-200 py-20 md:py-24">
        <div className="container-wide">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Prečo MDFOTO?</p>
            <h2 className="section-heading">Fotenie bez stresu</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f) => (
              <div key={f.title} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-rose-light rounded-full">
                  <f.icon size={22} className="text-rose-dark" />
                </div>
                <h3 className="font-serif text-xl text-charcoal-800">
                  {f.title}
                </h3>
                <p className="text-charcoal-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT SNIPPET ────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/5] overflow-hidden">
            <Image
              src="/images/o-mne/mdfoto-maria-domanova-mdfoto.png"
              alt="Majka Domanová – MDFOTO"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-6">
            <p className="section-label">O mne</p>
            <h2 className="section-heading">Vitajte, volám sa Majka</h2>
            <div className="space-y-4 text-charcoal-600 leading-relaxed">
              <p>
                Už viac ako 12 rokov robím prirodzené rodinné fotenia, ktoré sú
                jednoduché, príjemné a určené pre každého.
              </p>
              <p>
                Som mamou 3 úžasných synov a veľmi sa teším tomu, že mi s
                dôverou zverujete do rúk to najcennejšie, čo máte – vaše
                detičky.
              </p>
              <p>
                Pomôžem vám s oblečením, výberom miesta a všetkým potrebným,
                aby ste si fotenie užili bez stresu.
              </p>
            </div>
            <Link href="/o-mne" className="btn-outline inline-block">
              Viac o mne
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/rodinky-deti/mdfoto-rodinne-fotenie (24).jpg"
          alt="Rodinné fotenie"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal-900/65" />
        <div className="relative container-wide py-32 md:py-44 text-center">
          <p className="section-label text-rose-light mb-4">
            Nitra & Okolie – 7 dní v týždni
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream-100 mb-6 max-w-xl mx-auto text-balance">
            Naplánujme vaše fotenie ešte dnes
          </h2>
          <p className="text-cream-200 mb-10 max-w-md mx-auto leading-relaxed">
            Stačí krátka správa a dohodneme vhodný termín, štýl fotenia aj
            balík podľa vašich predstáv.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary text-center">
              Poslať dopyt
            </Link>
            <a
              href="tel:+421948505587"
              className="inline-block px-8 py-3.5 border border-cream-200 text-cream-100 text-sm tracking-widest uppercase font-sans hover:bg-cream-100/10 transition-colors duration-300 text-center"
            >
              0948 505 587
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
