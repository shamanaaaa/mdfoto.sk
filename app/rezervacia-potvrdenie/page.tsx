import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Potvrdenie rezervácie",
  description:
    "Potvrdenie dopytu na fotenie a rýchle odoslanie údajov emailom alebo cez WhatsApp.",
};

type ConfirmationProps = {
  searchParams: {
    odoslane?: string;
  };
};

export default function RezervaciaPotvrdeniePage({
  searchParams,
}: ConfirmationProps) {
  const wasSent = searchParams.odoslane === "1";

  const whatsappHref =
    "https://wa.me/421948505587?text=Ahoj%20Majka%2C%20m%C3%A1m%20z%C3%A1ujem%20o%20fotenie.";

  return (
    <section className="pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container-narrow">
        <div className="bg-cream-50 border border-cream-300 p-7 md:p-10 space-y-6">
          <p className="section-label">Potvrdenie</p>
          <h1 className="section-heading">
            {wasSent ? "Ďakujem, dopyt bol odoslaný" : "Potvrdenie rezervácie"}
          </h1>
          <p className="text-charcoal-700 leading-relaxed">
            {wasSent
              ? "Vaša správa bola úspešne odoslaná. Odpoviem vám čo najskôr."
              : "Ak sa formulár neodoslal, môžete ma kontaktovať priamo telefonicky alebo cez WhatsApp."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <a href="tel:+421948505587" className="btn-primary text-center">
              Zavolať: 0948 505 587
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center"
            >
              Napísať cez WhatsApp
            </a>
          </div>

          <div className="pt-2">
            <Link href="/kontakt" className="text-sm text-rose-dark hover:underline">
              Upraviť údaje
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
