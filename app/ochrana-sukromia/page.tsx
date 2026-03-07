import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Ochrana súkromia",
  description:
    "Zásady ochrany osobných údajov MDFOTO – informácie o spracovaní vašich osobných údajov v súlade s GDPR.",
  alternates: { canonical: "/ochrana-sukromia" },
  robots: { index: false, follow: false },
};

export default function OchranaSukromiaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Právne informácie"
        title="Ochrana súkromia"
        description="Informácie o spracovaní osobných údajov podľa nariadenia GDPR (EÚ) 2016/679."
        breadcrumbs={[{ label: "Domov", href: "/" }, { label: "Ochrana súkromia" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-narrow space-y-10 text-charcoal-700 leading-relaxed">

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-charcoal-800">1. Prevádzkovateľ</h2>
            <p>
              Prevádzkovateľom osobných údajov je spoločnosť <strong>DOMAN s.r.o.</strong>,
              IČO: 47912383, so sídlom v Cabaj-Čápore, Nitriansky kraj, Slovenská republika.
            </p>
            <p>
              Kontakt: <a href="mailto:mdfoto.sk@gmail.com" className="text-rose-dark hover:underline">mdfoto.sk@gmail.com</a> |{" "}
              <a href="tel:+421948505587" className="text-rose-dark hover:underline">0948 505 587</a>
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-charcoal-800">2. Aké údaje zbierame</h2>
            <p>
              Prostredníctvom kontaktného formulára na tejto webovej stránke zbierame nasledovné
              osobné údaje:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>Meno a priezvisko</li>
              <li>Telefónne číslo</li>
              <li>E-mailová adresa</li>
              <li>Záujem o typ fotenia a preferovaný termín</li>
              <li>Obsah správy</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-charcoal-800">3. Účel a právny základ spracovania</h2>
            <p>
              Vaše osobné údaje spracúvame výhradne za účelom odpovede na vašu dopyt a dohodnutia
              termínu fotenia. Právnym základom spracovania je{" "}
              <strong>oprávnený záujem prevádzkovateľa</strong> (čl. 6 ods. 1 písm. f) GDPR)
              a v prípade uzavretia zmluvy o poskytnutí služby tiež{" "}
              <strong>plnenie zmluvy</strong> (čl. 6 ods. 1 písm. b) GDPR).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-charcoal-800">4. Doba uchovávania</h2>
            <p>
              Osobné údaje uchovávame po dobu nevyhnutnú na vybavenie vašej požiadavky,
              maximálne <strong>12 mesiacov</strong> od posledného kontaktu. Po uplynutí tejto
              doby sú údaje vymazané.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-charcoal-800">5. Príjemcovia údajov</h2>
            <p>
              Vaše osobné údaje neposkytujeme tretím stranám ani ich nepredávame. Údaje môžu
              byť spracované poskytovateľom e-mailovej infraštruktúry (Google LLC) výhradne
              v rozsahu potrebnom na doručenie správy.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-charcoal-800">6. Vaše práva</h2>
            <p>Máte právo:</p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li><strong>na prístup</strong> k vašim osobným údajom,</li>
              <li><strong>na opravu</strong> nesprávnych alebo neúplných údajov,</li>
              <li><strong>na vymazanie</strong> (právo na zabudnutie),</li>
              <li><strong>na prenosnosť</strong> údajov,</li>
              <li><strong>namietať</strong> spracovanie na základe oprávneného záujmu,</li>
              <li><strong>podať sťažnosť</strong> na Úrad na ochranu osobných údajov SR
                (<a href="https://dataprotection.gov.sk" target="_blank" rel="noopener noreferrer" className="text-rose-dark hover:underline">dataprotection.gov.sk</a>).
              </li>
            </ul>
            <p className="text-sm">
              Práva môžete uplatniť zaslaním e-mailu na{" "}
              <a href="mailto:mdfoto.sk@gmail.com" className="text-rose-dark hover:underline">mdfoto.sk@gmail.com</a>.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl text-charcoal-800">7. Cookies</h2>
            <p>
              Táto webová stránka nepoužíva analytické ani marketingové cookies. Používa sa
              výhradne technická funkčnosť potrebná na zobrazenie stránky.
            </p>
          </div>

          <p className="text-xs text-charcoal-500 pt-4 border-t border-cream-300">
            Tieto zásady sú platné od 1. januára 2025.
          </p>
        </div>
      </section>
    </>
  );
}
