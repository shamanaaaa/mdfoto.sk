import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Potvrdenie rezervácie",
  description:
    "Potvrdenie dopytu na fotenie a rýchle odoslanie údajov emailom alebo cez WhatsApp.",
};

type ConfirmationProps = {
  searchParams: {
    meno?: string;
    email?: string;
    telefon?: string;
    balik?: string;
    poznamka?: string;
  };
};

export default function RezervaciaPotvrdeniePage({
  searchParams,
}: ConfirmationProps) {
  const meno = searchParams.meno ?? "";
  const email = searchParams.email ?? "";
  const telefon = searchParams.telefon ?? "";
  const balik = searchParams.balik ?? "";
  const poznamka = searchParams.poznamka ?? "";

  const emailSubject = encodeURIComponent("Dopyt na fotenie – MDFOTO");
  const emailBody = encodeURIComponent(
    [
      `Meno: ${meno}`,
      `Email: ${email}`,
      `Telefón: ${telefon}`,
      `Balík: ${balik}`,
      "",
      "Poznámka:",
      poznamka,
    ].join("\n")
  );

  const whatsappText = encodeURIComponent(
    [
      "Ahoj Majka, mám záujem o fotenie.",
      `Meno: ${meno}`,
      `Balík: ${balik}`,
      telefon ? `Telefón: ${telefon}` : "",
      email ? `Email: ${email}` : "",
      poznamka ? `Poznámka: ${poznamka}` : "",
    ]
      .filter(Boolean)
      .join("\n")
  );

  const emailHref = `mailto:mdfoto.sk@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  const whatsappHref = `https://wa.me/421948505587?text=${whatsappText}`;

  return (
    <section className="pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container-narrow">
        <div className="bg-cream-50 border border-cream-300 p-7 md:p-10 space-y-6">
          <p className="section-label">Potvrdenie</p>
          <h1 className="section-heading">Ďakujem za váš dopyt</h1>
          <p className="text-charcoal-700 leading-relaxed">
            Údaje mám pripravené. Vyberte si spôsob odoslania a správu mi
            pošlite jedným klikom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <a href={emailHref} className="btn-primary text-center">
              Odoslať email
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center"
            >
              Odoslať cez WhatsApp
            </a>
          </div>

          <div className="pt-4 border-t border-cream-300 text-sm text-charcoal-700 space-y-2">
            <p>
              <strong>Meno:</strong> {meno || "-"}
            </p>
            <p>
              <strong>Balík:</strong> {balik || "-"}
            </p>
            <p>
              <strong>Telefón:</strong> {telefon || "-"}
            </p>
            <p>
              <strong>Email:</strong> {email || "-"}
            </p>
            {poznamka ? (
              <p>
                <strong>Poznámka:</strong> {poznamka}
              </p>
            ) : null}
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
