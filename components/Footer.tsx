import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import type { Locale } from "@/lib/i18n";

const buLinks = [
  { slug: "heavy-industry",    label: "Heavy Industry",     accent: "hover:text-gold" },
  { slug: "machining-services", label: "Machining Services", accent: "hover:text-steel" },
  { slug: "stock-finance",     label: "Stock & Finance",    accent: "hover:text-warm-gold" },
];

const footerT = {
  de: {
    tagline:      "Ein Partner. Die vollständige Lieferkette.",
    partOf:       "Teil von",
    buHeading:    "Geschäftsbereiche",
    navHeading:   "Navigation",
    contactHeading: "Kontakt",
    copyright:    "Teil der ERHO Holding Group.",
    nav: [
      { href: "/solutions", label: "Lösungen" },
      { href: "/sectors",   label: "Branchen" },
      { href: "/quality",   label: "Qualität" },
      { href: "/about",     label: "Über uns" },
      { href: "/contact",   label: "Kontakt" },
    ],
    srFooter: "Fußzeile",
  },
  en: {
    tagline:      "One Partner. The Complete Supply Chain.",
    partOf:       "Part of",
    buHeading:    "Business Units",
    navHeading:   "Navigation",
    contactHeading: "Contact",
    copyright:    "Part of ERHO Holding Group.",
    nav: [
      { href: "/solutions", label: "Solutions" },
      { href: "/sectors",   label: "Sectors" },
      { href: "/quality",   label: "Quality" },
      { href: "/about",     label: "About" },
      { href: "/contact",   label: "Contact" },
    ],
    srFooter: "Footer",
  },
};

export function Footer({ locale }: { locale: Locale }) {
  const t = footerT[locale];
  const p = (path: string) => `/${locale}${path}`;

  return (
    <footer className="bg-navy text-white/70" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">{t.srFooter}</h2>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gold/10 border border-gold/35 flex items-center justify-center rounded-sm shrink-0">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <polygon points="9,1 16,4.5 16,11.5 9,15 2,11.5 2,4.5" stroke="#C9A84C" strokeWidth="1.5" fill="none" />
                  <polygon points="9,5 12,6.5 12,9.5 9,11 6,9.5 6,6.5" fill="#C9A84C" opacity="0.7" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-white text-[15px] font-semibold tracking-wide">ERHO</span>
                <span className="font-body text-white/50 text-[9px] tracking-[0.22em] uppercase">
                  {locale === "de" ? "Industrietechnik" : "Industry Solutions"}
                </span>
              </div>
            </div>
            <p className="font-body text-xs leading-relaxed text-white/45 max-w-45">
              {t.tagline}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 border border-white/10 rounded-sm px-3 py-1.5">
              <span className="font-body text-[10px] text-white/30 uppercase tracking-widest">{t.partOf}</span>
              <span className="font-display text-[11px] text-white/50 font-semibold tracking-wide">ERHO Holding Group</span>
            </div>
          </div>

          {/* Business Units */}
          <div>
            <h3 className="font-body text-[10px] uppercase tracking-widest text-gold mb-4">{t.buHeading}</h3>
            <ul className="space-y-3" role="list">
              {buLinks.map(({ slug, label, accent }) => (
                <li key={slug}>
                  <Link
                    href={p(`/business-units/${slug}`)}
                    className={`font-body text-sm text-white/50 transition-colors duration-200 ${accent}`}
                  >
                    <span className="text-[10px] text-white/25 uppercase tracking-widest font-mono block leading-none mb-0.5">ERHO</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site links */}
          <div>
            <h3 className="font-body text-[10px] uppercase tracking-widest text-gold mb-4">{t.navHeading}</h3>
            <ul className="space-y-3" role="list">
              {t.nav.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={p(href)}
                    className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-[10px] uppercase tracking-widest text-gold mb-4">{t.contactHeading}</h3>
            <ul className="space-y-3.5" role="list">
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="text-gold mt-0.5 shrink-0" aria-hidden="true" />
                <address className="font-body text-sm text-white/50 not-italic leading-relaxed">
                  Rütistrasse 6<br />5400 Baden<br />Switzerland
                </address>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} className="text-gold shrink-0" aria-hidden="true" />
                <a href="mailto:sales@integag.ch" className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-200">
                  sales@integag.ch
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={13} className="text-gold shrink-0" aria-hidden="true" />
                <a href="tel:+41444062001" className="font-body text-sm text-white/50 hover:text-gold transition-colors duration-200">
                  +41 44 406 20 01
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-white/22">
            © {new Date().getFullYear()} {locale === "de" ? "ERHO Industrietechnik" : "ERHO Industry Solutions"}. {t.copyright}
          </p>
          <p className="font-body text-xs text-white/22">
            Rütistrasse 6, 5400 Baden, Switzerland
          </p>
        </div>
      </div>
    </footer>
  );
}
