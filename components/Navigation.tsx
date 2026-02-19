"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Domov" },
  { href: "/novorodenci", label: "Novorodenci" },
  { href: "/rodinky-deti", label: "Rodinky & Deti" },
  { href: "/tehulky", label: "Tehuľky" },
  { href: "/o-mne", label: "O mne" },
  { href: "/cennik", label: "Cenník" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled || !isHome || isOpen
          ? "bg-cream-100/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            "font-serif text-xl tracking-widest transition-colors duration-300",
            scrolled || !isHome || isOpen
              ? "text-charcoal-800"
              : "text-cream-100"
          )}
        >
          MDFOTO
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-xs tracking-widest uppercase transition-colors duration-300 font-sans",
                scrolled || !isHome
                  ? pathname === link.href
                    ? "text-rose-muted"
                    : "text-charcoal-800 hover:text-rose-muted"
                  : pathname === link.href
                  ? "text-rose-light"
                  : "text-cream-200 hover:text-cream-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "lg:hidden p-2 transition-colors duration-300",
            scrolled || !isHome || isOpen
              ? "text-charcoal-800"
              : "text-cream-100"
          )}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={clsx(
          "lg:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-screen pb-6" : "max-h-0"
        )}
      >
        <nav className="container-wide flex flex-col gap-5 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm tracking-widest uppercase font-sans transition-colors",
                pathname === link.href
                  ? "text-rose-muted"
                  : "text-charcoal-700 hover:text-rose-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
