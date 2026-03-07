import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte MDFOTO a rezervujte si termín fotenia v Nitre. Formulár, WhatsApp alebo telefón 0948 505 587. 7 dní v týždni.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Rezervácia termínu"
        description="Napíšte mi a spolu nastavíme ideálny termín aj balík fotenia."
        breadcrumbs={[{ label: "Domov", href: "/" }, { label: "Kontakt" }]}
      />

      <section className="py-16 md:py-20">
        <div className="container-wide space-y-10">
        <div className="w-full h-64 md:h-80 overflow-hidden bg-cream-200">
          <iframe
            title="MDFOTO – Cabaj-Čápor na mape"
            src="https://maps.google.com/maps?q=Cabaj-C%C3%A1por%2C+Slovakia&t=&z=13&ie=UTF8&iwloc=B&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <aside className="lg:col-span-2 bg-cream-50 border border-cream-300 p-6 space-y-5 h-fit">
            <h2 className="font-serif text-2xl text-charcoal-800">MDFOTO</h2>
            <div className="space-y-2 text-sm text-charcoal-700">
              <p>
                <strong>Telefón:</strong> 0948 505 587
              </p>
              <p>
                <strong>Email:</strong> mdfoto.sk@gmail.com
              </p>
              <p>
                <strong>Lokalita:</strong> Cabaj-Čápor (6 km od Nitry)
              </p>
              <p>
                <strong>Fotenie:</strong> 7 dní v týždni
              </p>
              <p>
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://www.facebook.com/mdfoto.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-dark hover:underline"
                >
                  mdfoto.sk
                </a>
              </p>
              <p>
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://www.instagram.com/fotografka_maria_domanova/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rose-dark hover:underline"
                >
                  @fotografka_maria_domanova
                </a>
              </p>
            </div>

            <a
              href="https://wa.me/421948505587?text=Ahoj%20Majka%2C%20m%C3%A1m%20z%C3%A1ujem%20o%20fotenie%20a%20rada%20by%20som%20si%20dohodla%20term%C3%ADn."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-center"
            >
              Rýchly kontakt cez WhatsApp
            </a>

            <div className="pt-4 border-t border-cream-300 space-y-3">
              <p className="text-sm font-serif text-charcoal-800">Páčilo sa vám fotenie?</p>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Vaša recenzia na Google pomáha ďalším rodinám nás nájsť. Ďakujeme!
              </p>
              <div className="flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://g.page/r/CdgGxIvf9A59EBM/review&format=png"
                  alt="QR kód – zanechajte recenziu na Google"
                  width={80}
                  height={80}
                  className="flex-shrink-0 border border-cream-300"
                />
                <a
                  href="https://g.page/r/CdgGxIvf9A59EBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-rose-dark hover:underline leading-relaxed"
                >
                  Zanechať recenziu na Google →
                </a>
              </div>
            </div>

            <p className="text-xs text-charcoal-600 leading-relaxed pt-2 border-t border-cream-300">
              Neupravené zábery slúžia len na osobné účely, to znamená do
              súkromného albumu, nie na internet. Je zakázaný akýkoľvek ďalší
              zásah do upravených aj neupravených fotiek bez súhlasu autora.
            </p>
          </aside>
        </div>
        </div>
      </section>
    </>
  );
}
