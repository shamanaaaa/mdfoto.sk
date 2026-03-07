"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
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

const serviceLinks = [
  { href: "/fotograf-nitra", label: "Fotograf Nitra" },
  { href: "/novorodenecke-fotenie-nitra", label: "Novorodenecké fotenie Nitra" },
  { href: "/rodinne-fotenie-nitra", label: "Rodinné fotenie Nitra" },
  { href: "/tehotenske-fotenie-nitra", label: "Tehotenské fotenie Nitra" },
  { href: "/portretovy-fotograf-nitra", label: "Portrétny fotograf Nitra" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServiceActive = serviceLinks.some((l) => l.href === pathname);
  const isDark = !(scrolled || !isHome || isOpen);

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
            isDark ? "text-cream-100" : "text-charcoal-800"
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

          {/* Služby dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className={clsx(
                "flex items-center gap-1 text-xs tracking-widest uppercase transition-colors duration-300 font-sans",
                scrolled || !isHome
                  ? isServiceActive
                    ? "text-rose-muted"
                    : "text-charcoal-800 hover:text-rose-muted"
                  : isServiceActive
                  ? "text-rose-light"
                  : "text-cream-200 hover:text-cream-100"
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Služby
              <ChevronDown
                size={12}
                className={clsx("transition-transform duration-200", servicesOpen && "rotate-180")}
              />
            </button>
            {servicesOpen && (
              <div className="absolute right-0 top-full mt-3 w-64 bg-cream-100 shadow-lg border border-cream-300 py-2 z-50">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "block px-5 py-2.5 text-xs tracking-wide font-sans transition-colors",
                      pathname === link.href
                        ? "text-rose-muted bg-cream-200"
                        : "text-charcoal-700 hover:text-rose-muted hover:bg-cream-200"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={clsx(
            "lg:hidden p-2 transition-colors duration-300",
            isDark ? "text-cream-100" : "text-charcoal-800"
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

          {/* Mobile Služby accordion */}
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className={clsx(
              "flex items-center gap-2 text-sm tracking-widest uppercase font-sans transition-colors text-left",
              isServiceActive ? "text-rose-muted" : "text-charcoal-700 hover:text-rose-muted"
            )}
          >
            Služby
            <ChevronDown
              size={14}
              className={clsx("transition-transform duration-200", mobileServicesOpen && "rotate-180")}
            />
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col gap-4 pl-4 border-l border-cream-300">
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-sm tracking-wide font-sans transition-colors",
                    pathname === link.href
                      ? "text-rose-muted"
                      : "text-charcoal-600 hover:text-rose-muted"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
