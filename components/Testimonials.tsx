import { GOOGLE_REVIEW_URL, GOOGLE_PROFILE_URL } from "@/lib/seo";

const testimonials = [
  {
    name: "Katarína D.",
    text: "Najlepšia fotografka, najkrajšie fotky, najkrajší ateliér.",
    rating: 5,
  },
  {
    name: "Tomáš V.",
    text: "Príjemné prostredie na fotenie.",
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
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-charcoal-600 hover:text-charcoal-800 transition-colors"
          >
            <span className="text-rose-dark text-lg tracking-tight">★★★★★</span>
            <span className="font-medium">5,0</span>
            <span>hodnotenie na Google</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
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
              <footer className="pt-2 border-t border-cream-200 flex items-center justify-between">
                <p className="font-serif text-charcoal-800">{t.name}</p>
                <span className="text-xs text-charcoal-400 tracking-wide">Google</span>
              </footer>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={GOOGLE_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-center"
          >
            Prečítať všetky recenzie
          </a>
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center"
          >
            Napíšte nám recenziu
          </a>
        </div>
      </div>
    </section>
  );
}
