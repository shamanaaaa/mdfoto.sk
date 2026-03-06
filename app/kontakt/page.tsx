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
      />

      <section className="py-16 md:py-20">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-5 gap-10">
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
            </div>

            <a
              href="https://wa.me/421948505587?text=Ahoj%20Majka%2C%20m%C3%A1m%20z%C3%A1ujem%20o%20fotenie%20a%20rada%20by%20som%20si%20dohodla%20term%C3%ADn."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline w-full text-center"
            >
              Rýchly kontakt cez WhatsApp
            </a>

            <p className="text-xs text-charcoal-600 leading-relaxed pt-2 border-t border-cream-300">
              Neupravené zábery slúžia len na osobné účely, to znamená do
              súkromného albumu, nie na internet. Je zakázaný akýkoľvek ďalší
              zásah do upravených aj neupravených fotiek bez súhlasu autora.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
