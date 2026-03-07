const testimonials = [
  {
    name: "Zuzana K.",
    service: "Novorodenecké fotenie",
    text: "Majka je úžasná fotografka. Naše bábätko bolo v jej rukách v bezpečí a fotografie sú nádherné. Odporúčam každej mamičke!",
    rating: 5,
  },
  {
    name: "Petra M.",
    service: "Rodinné fotenie",
    text: "Fotenie prebehlo v úplnej pohode, deti sa bavili a výsledok prekonali naše očakávania. Určite sa vrátime!",
    rating: 5,
  },
  {
    name: "Lucia V.",
    service: "Tehotenské fotenie",
    text: "Krásna atmosféra, profesionálny prístup a nádherné fotky. Majka ma celý čas viedla tak, že som sa cítila prirodzene a sebavedomo.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-cream-50">
      <div className="container-wide">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Referencie</p>
          <h2 className="section-heading">Čo hovoria klientky</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-white border border-cream-300 p-8 space-y-4 flex flex-col"
            >
              <div className="flex gap-0.5 text-rose-dark text-lg" aria-label={`Hodnotenie ${t.rating} z 5`}>
                {"★".repeat(t.rating)}
              </div>
              <blockquote className="text-charcoal-700 leading-relaxed text-sm flex-1">
                &bdquo;{t.text}&ldquo;
              </blockquote>
              <footer className="pt-2 border-t border-cream-200">
                <p className="font-serif text-charcoal-800">{t.name}</p>
                <p className="text-xs text-charcoal-500 tracking-wide mt-0.5">{t.service}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
