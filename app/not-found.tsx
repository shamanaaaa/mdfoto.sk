import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-32 pb-24">
      <div className="container-narrow text-center">
        <p className="section-label mb-3">404</p>
        <h1 className="section-heading mb-6">Stránka nebola nájdená</h1>
        <p className="text-charcoal-600 leading-relaxed mb-8">
          Ospravedlňujem sa, požadovaná stránka neexistuje alebo bola presunutá.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary text-center">
            Späť na hlavnú stránku
          </Link>
          <Link href="/kontakt" className="btn-outline text-center">
            Kontaktovať fotografku
          </Link>
        </div>
      </div>
    </section>
  );
}
