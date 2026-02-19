import Link from "next/link";
import { Phone, Mail, Facebook } from "lucide-react";

const footerLinks = [
  { href: "/novorodenci", label: "Novorodenci" },
  { href: "/rodinky-deti", label: "Rodinky & Deti" },
  { href: "/tehulky", label: "Tehuľky" },
  { href: "/o-mne", label: "O mne" },
  { href: "/cennik", label: "Cenník" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-cream-300">
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl text-cream-100 tracking-widest">
              MDFOTO
            </h3>
            <p className="text-sm leading-relaxed text-charcoal-300 max-w-xs">
              Vytváram vám krásne rodinné spomienky, ktorými si budete môcť
              ozdobiť svoj dom.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://www.facebook.com/mdfoto.sk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-charcoal-400 hover:text-rose-muted transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="section-label text-rose-muted">Navigácia</h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal-300 hover:text-cream-100 transition-colors tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Company */}
          <div className="space-y-4">
            <h4 className="section-label text-rose-muted">Kontakt</h4>
            <ul className="space-y-3 text-sm text-charcoal-300">
              <li>
                <a
                  href="tel:+421948505587"
                  className="flex items-center gap-2.5 hover:text-cream-100 transition-colors"
                >
                  <Phone size={15} />
                  0948 505 587
                </a>
              </li>
              <li>
                <a
                  href="mailto:mdfoto.sk@gmail.com"
                  className="flex items-center gap-2.5 hover:text-cream-100 transition-colors"
                >
                  <Mail size={15} />
                  mdfoto.sk@gmail.com
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-charcoal-700 space-y-1 text-xs text-charcoal-400">
              <p>DOMAN s.r.o. | IČO: 47912383</p>
              <p>Cabaj-Čápor (6 km od Nitry)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-charcoal-400">
          <p>
            © {new Date().getFullYear()} MDFOTO – Majka Domanová. Všetky
            práva vyhradené.
          </p>
          <p className="text-center">
            Neupravené zábery slúžia len na osobné účely. Akýkoľvek ďalší
            zásah do fotiek bez súhlasu autora je zakázaný.
          </p>
        </div>
      </div>
    </footer>
  );
}
