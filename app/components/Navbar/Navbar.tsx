"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

type Dict = {
  brand: string;
  bookCta: string;
  navServices: string;
  navPricing: string;
  navGallery: string;
  navTeam: string;
  navReviews: string;
  navContact: string;
};

type Props = {
  dict: Dict;
  locale: string;
};

export default function Navbar({ dict, locale }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const altLocale = locale === "pt" ? "en" : "pt";

  const handleLocaleSwitch = () => {
    const newPath = pathname.replace(`/${locale}`, `/${altLocale}`);
    router.push(newPath);
    setMenuOpen(false);
  };

  const navLinks = [
    { label: dict.navServices, href: "#services" },
    { label: dict.navPricing, href: "#pricing" },
    { label: dict.navGallery, href: "#gallery" },
    { label: dict.navTeam, href: "#team" },
    { label: dict.navReviews, href: "#reviews" },
    { label: dict.navContact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl md:text-3xl text-rose-900"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {dict.brand}
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-rose-700 hover:text-rose-900 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLocaleSwitch}
            className="text-xs font-semibold text-rose-700 hover:text-rose-900 border border-rose-300 hover:border-rose-500 rounded-full px-3 py-1 transition-colors"
          >
            {altLocale.toUpperCase()}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center bg-gold-600 hover:bg-gold-500 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
          >
            {dict.bookCta}
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 text-rose-900"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-cream-50 border-t border-cream-200 px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-rose-700 font-medium py-1 border-b border-cream-200 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-center bg-gold-600 text-white font-semibold px-4 py-3 rounded-full"
          >
            {dict.bookCta}
          </a>
        </div>
      </div>
    </nav>
  );
}
