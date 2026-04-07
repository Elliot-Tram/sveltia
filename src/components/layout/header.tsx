"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { SveltiaLogo } from "./logo";

const treatments = [
  {
    name: "Ozempic",
    href: "/ozempic-guide-complet-prix-avis-effets-secondaires",
    desc: "Semaglutide - Guide complet",
  },
  {
    name: "Wegovy",
    href: "/wegovy-guide-complet-prix-avis-effets-secondaires",
    desc: "Semaglutide haute dose",
  },
  {
    name: "Mounjaro",
    href: "/mounjaro-guide-complet-prix-avis-effets-secondaires",
    desc: "Tirzepatide - Double action",
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isHomepage, setIsHomepage] = useState(true);

  useEffect(() => {
    setIsHomepage(window.location.pathname === "/");
    const handleScroll = () => {
      setScrolled(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHomepage
          ? "bg-header shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex h-16 items-center justify-between transition-all duration-300 ${
          scrolled || !isHomepage
            ? "max-w-7xl px-4 sm:px-6"
            : "mt-4 max-w-7xl rounded-2xl border border-white/10 bg-white/10 px-4 backdrop-blur-md sm:mx-6 lg:mx-auto sm:px-6"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <SveltiaLogo className="h-8 w-8" />
          <span className="text-xl font-bold tracking-tight text-white">
            Sveltia
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Accueil
          </Link>

          {/* Traitements dropdown */}
          <div className="relative">
            <button
              onClick={() => setTreatmentsOpen(!treatmentsOpen)}
              onBlur={() => setTimeout(() => setTreatmentsOpen(false), 150)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
            >
              Traitements
              <ChevronDown
                className={`h-4 w-4 transition-transform ${treatmentsOpen ? "rotate-180" : ""}`}
              />
            </button>

            {treatmentsOpen && (
              <div className="absolute left-0 top-full mt-1 w-64 rounded-lg border border-white/10 bg-header-dark p-2 shadow-xl">
                {treatments.map((t) => (
                  <Link
                    key={t.name}
                    href={t.href}
                    className="block rounded-md px-3 py-2.5 transition-colors hover:bg-white/10"
                    onClick={() => setTreatmentsOpen(false)}
                  >
                    <span className="block text-sm font-semibold text-white">
                      {t.name}
                    </span>
                    <span className="block text-xs text-white/60">
                      {t.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/ozempic-guide-complet-prix-avis-effets-secondaires"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Guide GLP-1
          </Link>
          <Link
            href="/#articles"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            Blog
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/ozempic-guide-complet-prix-avis-effets-secondaires"
            className="rounded-lg bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
          >
            Consulter le guide
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-white/90 transition-colors hover:bg-white/10 md:hidden"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-header-dark md:hidden">
          <div className="space-y-1 px-4 py-3">
            <Link
              href="/"
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Accueil
            </Link>

            {/* Mobile treatments */}
            <div className="px-3 py-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Traitements
              </p>
            </div>
            {treatments.map((t) => (
              <Link
                key={t.name}
                href={t.href}
                className="block rounded-md px-6 py-2 text-sm text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {t.name}
              </Link>
            ))}

            <Link
              href="/ozempic-guide-complet-prix-avis-effets-secondaires"
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Guide GLP-1
            </Link>
            <Link
              href="/#articles"
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>

            <div className="pt-3">
              <Link
                href="/ozempic-guide-complet-prix-avis-effets-secondaires"
                className="block rounded-lg bg-coral px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-coral-dark"
                onClick={() => setMobileOpen(false)}
              >
                Consulter le guide
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
