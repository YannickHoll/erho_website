"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const buLinks = [
  { slug: "heavy-industry",    label: "Heavy Industry",     accent: "text-gold" },
  { slug: "machining-services", label: "Machining Services", accent: "text-steel" },
  { slug: "stock-finance",     label: "Stock & Finance",    accent: "text-warm-gold" },
];

const navT = {
  de: {
    solutions:    "Lösungen",
    businessUnits: "Geschäftsbereiche",
    allBUs:       "Alle Geschäftsbereiche",
    sectors:      "Branchen",
    quality:      "Qualität",
    about:        "Über uns",
    contact:      "Kontakt aufnehmen →",
    menuOpen:     "Menü öffnen",
    menuClose:    "Menü schließen",
    logoLabel:    "ERHO Industrietechnik — Startseite",
    brandSub:     "Industrietechnik",
  },
  en: {
    solutions:    "Solutions",
    businessUnits: "Business Units",
    allBUs:       "All Business Units",
    sectors:      "Sectors",
    quality:      "Quality",
    about:        "About",
    contact:      "Get in touch →",
    menuOpen:     "Open menu",
    menuClose:    "Close menu",
    logoLabel:    "ERHO Industry Solutions — Home",
    brandSub:     "Industry Solutions",
  },
};

export function Navbar({ locale }: { locale: Locale }) {
  const t = navT[locale];
  const p = (path: string) => `/${locale}${path}`;

  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [buOpen, setBuOpen]       = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setBuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) setBuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const homePath = `/${locale}`;
  const isTransparentPage = pathname === homePath || pathname === `${homePath}/`;
  const navSolid = scrolled || !isTransparentPage || mobileOpen;
  const buActive = pathname.includes("/business-units");

  // Language switcher: swap locale prefix, keep path
  const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "";
  const otherLocale: Locale = locale === "de" ? "en" : "de";
  const switchUrl = `/${otherLocale}${pathWithoutLocale}`;

  const navLinks = [
    { href: p("/solutions"),      label: t.solutions },
    { href: p("/business-units"), label: t.businessUnits, hasDropdown: true },
    { href: p("/sectors"),        label: t.sectors },
    { href: p("/quality"),        label: t.quality },
    { href: p("/about"),          label: t.about },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navSolid ? "bg-navy border-b border-gold/15" : "bg-transparent"
        }`}
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18"
          aria-label={locale === "de" ? "Hauptnavigation" : "Main navigation"}
        >
          {/* Logo */}
          <Link href={homePath} className="flex items-center gap-3" aria-label={t.logoLabel}>
            <LogoMark />
            <div className="flex flex-col leading-none">
              <span className="font-display text-white text-[15px] font-semibold tracking-wide">ERHO</span>
              <span className="font-body text-white/50 text-[9px] tracking-[0.22em] uppercase">{t.brandSub}</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map(({ href, label, hasDropdown }) => {
              const active = pathname === href || (pathname.startsWith(href + "/")) || (hasDropdown && buActive);

              if (hasDropdown) {
                return (
                  <div key={href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setBuOpen((v) => !v)}
                      className={`flex items-center gap-1 font-body text-sm font-medium transition-colors duration-200 ${
                        active || buOpen ? "text-gold" : "text-white/75 hover:text-white"
                      }`}
                      aria-expanded={buOpen}
                      aria-haspopup="true"
                    >
                      {label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${buOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {buOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-navy border border-white/10 rounded-sm shadow-xl overflow-hidden">
                        <Link
                          href={p("/business-units")}
                          className="block px-4 py-2.5 font-body text-xs text-white/45 hover:text-gold uppercase tracking-widest border-b border-white/8 transition-colors duration-150"
                        >
                          {t.allBUs}
                        </Link>
                        {buLinks.map(({ slug, label: buLabel, accent }) => (
                          <Link
                            key={slug}
                            href={p(`/business-units/${slug}`)}
                            className={`block px-4 py-3 font-body text-sm font-medium transition-colors duration-150 hover:bg-white/5 border-b border-white/5 last:border-0 ${
                              pathname === p(`/business-units/${slug}`) ? accent : "text-white/75 hover:text-white"
                            }`}
                          >
                            <span className={`text-[10px] uppercase tracking-widest font-mono block mb-0.5 ${accent}`}>ERHO</span>
                            {buLabel}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-body text-sm font-medium transition-colors duration-200 relative group ${
                    active ? "text-gold" : "text-white/75 hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            {/* Language switcher */}
            <Link
              href={switchUrl}
              className="font-mono text-[11px] tracking-widest text-white/40 hover:text-gold transition-colors duration-200 uppercase"
              aria-label={locale === "de" ? "Switch to English" : "Auf Deutsch wechseln"}
            >
              {otherLocale.toUpperCase()}
            </Link>

            <Link
              href={p("/contact")}
              className="ml-1 px-5 py-2 bg-gold text-navy font-body text-sm font-semibold rounded-sm hover:bg-gold/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy whitespace-nowrap"
            >
              {t.contact}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? t.menuClose : t.menuOpen}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy flex flex-col pt-20 px-8 overflow-y-auto"
          aria-modal="true"
          role="dialog"
        >
          <nav className="flex flex-col">
            {navLinks.map(({ href, label, hasDropdown }) => {
              const active = pathname === href || (href !== homePath && pathname.startsWith(href + "/"));
              if (hasDropdown) {
                return (
                  <div key={href}>
                    <Link
                      href={href}
                      className={`font-display text-2xl font-semibold border-b border-white/10 py-5 block transition-colors duration-200 ${
                        active ? "text-gold" : "text-white"
                      }`}
                    >
                      {label}
                    </Link>
                    <div className="pl-4 border-b border-white/10">
                      {buLinks.map(({ slug, label: buLabel, accent }) => (
                        <Link
                          key={slug}
                          href={p(`/business-units/${slug}`)}
                          className={`block py-3 font-body text-base border-b border-white/5 last:border-0 ${
                            pathname === p(`/business-units/${slug}`) ? accent : "text-white/65 hover:text-white"
                          } transition-colors duration-150`}
                        >
                          {buLabel}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={href}
                  href={href}
                  className={`font-display text-2xl font-semibold border-b border-white/10 py-5 transition-colors duration-200 ${
                    active ? "text-gold" : "text-white hover:text-gold"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <Link
              href={p("/contact")}
              className="mt-6 px-6 py-3.5 bg-gold text-navy font-body font-semibold text-center rounded-sm hover:bg-gold/90 transition-colors duration-200"
            >
              {t.contact}
            </Link>
            {/* Mobile language switcher */}
            <Link
              href={switchUrl}
              className="mt-4 text-center font-mono text-sm tracking-widest text-white/40 hover:text-gold transition-colors duration-200 uppercase"
            >
              {otherLocale === "de" ? "Auf Deutsch" : "In English"}
            </Link>
          </nav>
          <div className="mt-auto mb-8 pt-6 text-white/35 text-xs font-body">
            sales@integag.ch · +41 44 406 20 01
          </div>
        </div>
      )}
    </>
  );
}

function LogoMark() {
  return (
    <div className="w-8 h-8 bg-gold/10 border border-gold/35 flex items-center justify-center rounded-sm shrink-0">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <polygon points="9,1 16,4.5 16,11.5 9,15 2,11.5 2,4.5" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
        <polygon points="9,5 12,6.5 12,9.5 9,11 6,9.5 6,6.5" fill="#C9A84C" opacity="0.7" />
      </svg>
    </div>
  );
}
