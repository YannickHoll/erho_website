import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroCarousel } from "@/components/HeroCarousel";
import { sectors, getSectorBySlug } from "@/lib/sectors";
import type { Locale } from "@/lib/i18n";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  return sectors.flatMap((s) => [
    { locale: "de", slug: s.slug },
    { locale: "en", slug: s.slug },
  ]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return {};
  return {
    title: locale === "en" ? (sector.nameEn ?? sector.name) : sector.name,
    description: locale === "en" ? (sector.taglineEn ?? sector.tagline) : sector.tagline,
  };
}

const pageT = {
  de: {
    allSectors:    "← Alle Branchen",
    sectorLabel:   "Branche",
    challengeH2:   "Die Beschaffungsherausforderung",
    solutionH2:    "Das ERHO Komplettpaket",
    componentsH2:  "Was wir liefern",
    materialsH2:   "Werkstoffgüten",
    gradeCol:      "Güte",
    stdCol:        "Norm",
    appCol:        "Anwendung",
    standardsH2:   "Relevante Normen & Standards",
    processEye:    "Der Prozess",
    processH2:     "So funktioniert es",
    ctaH2:         "Paketangebot anfordern",
    ctaSub:        (name: string) => `Teilen Sie Ihre Komponentenliste oder Ihr Zeichnungspaket für ${name} mit uns. Wir melden uns innerhalb von 24 Stunden.`,
    ctaBtn:        "Gespräch beginnen",
    steps: [
      { num: "01", title: "Teilen Sie Ihren Bedarf mit", body: "Zeichnungspaket, Komponentenliste, Werkstoffspezifikationen und Zeitplan. Schicken Sie uns, was Sie haben — unvollständig ist in Ordnung." },
      { num: "02", title: "Wir konfigurieren das Paket", body: "Wir prüfen über alle drei Geschäftsbereiche: was beschafft werden muss, was zerspant werden muss, was aus dem Lager kommen kann." },
      { num: "03", title: "Wir liefern das Komplettpaket", body: "Eine Lieferung, ein EN-10204-Zertifikatspaket, fertig für Ihre Montagehalle. Qualität durchgängig gemanagt — von der Quelle bis zu Ihrer Tür." },
    ],
  },
  en: {
    allSectors:    "← All Sectors",
    sectorLabel:   "Sector",
    challengeH2:   "The Procurement Challenge",
    solutionH2:    "The ERHO Complete Package",
    componentsH2:  "What we deliver",
    materialsH2:   "Material Grades",
    gradeCol:      "Grade",
    stdCol:        "Standard",
    appCol:        "Application",
    standardsH2:   "Relevant Standards",
    processEye:    "The process",
    processH2:     "How it works",
    ctaH2:         "Request a package proposal",
    ctaSub:        (name: string) => `Share your component list or drawing package for ${name}. We'll come back within 24 hours with a full sourcing proposal.`,
    ctaBtn:        "Start a conversation",
    steps: [
      { num: "01", title: "Share your requirement", body: "Drawing package, component list, material specifications and timeline. Send us what you have — incomplete is fine." },
      { num: "02", title: "We configure the package", body: "We review across all three business units: what needs sourcing, what needs machining, what can come from stock." },
      { num: "03", title: "We deliver the complete package", body: "One shipment, one EN-10204 certificate package, ready for your assembly hall. Quality managed end to end — from source to your door." },
    ],
  },
};

export default async function SectorPage({ params }: Props) {
  const { locale, slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const t = pageT[locale as Locale] ?? pageT.de;
  const isEn = locale === "en";
  const p = (path: string) => `/${locale}${path}`;

  const displayName = isEn ? (sector.nameEn ?? sector.name) : sector.name;
  const displayTagline = isEn ? (sector.taglineEn ?? sector.tagline) : sector.tagline;
  const hasComponentList = sector.componentList && sector.componentList.length > 0;
  const hasMaterialNotes = sector.materials.some((m) => m.note);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className={`${sector.heroImages?.length ? "relative overflow-hidden" : "bg-navy hero-texture"} pt-32 pb-20 lg:pt-40 lg:pb-24`}>
        {sector.heroImages?.length ? (
          <HeroCarousel slides={sector.heroImages} overlayOpacity={sector.heroOverlay ?? 65} />
        ) : null}
        <div className={`${sector.heroImages?.length ? "relative z-10 " : ""}max-w-7xl mx-auto px-6 lg:px-8`}>
          <Link href={p("/sectors")} className="inline-flex items-center gap-1 font-body text-xs text-white/40 hover:text-gold transition-colors duration-200 mb-6">
            {t.allSectors}
          </Link>
          <p className="font-mono text-gold text-xs tracking-[0.25em] uppercase mb-4">{t.sectorLabel}</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">{displayName}</h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/65 text-lg max-w-xl leading-relaxed">{displayTagline}</p>
        </div>
      </section>

      {/* ── Challenge + Complete Package ─────────────────────────────────── */}
      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="challenge-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal>
              <h2 id="challenge-heading" className="font-display text-navy text-2xl font-semibold mb-4">{t.challengeH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-5 font-body text-mid-gray text-base leading-relaxed">{sector.challenge}</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-display text-navy text-2xl font-semibold mb-4">{t.solutionH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-5 font-body text-mid-gray text-base leading-relaxed">{sector.solution}</p>
              {sector.advantage && (
                <p className="mt-5 font-body text-navy text-sm font-semibold leading-relaxed bg-gold/10 border border-gold/20 rounded-sm p-4">
                  &ldquo;{sector.advantage}&rdquo;
                </p>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Component List ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20" aria-labelledby="components-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="components-heading" className="font-display text-navy text-2xl font-semibold mb-2">{t.componentsH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
            {hasComponentList ? (
              <div className="mt-6 bg-navy rounded-sm p-6 inline-block w-full max-w-2xl">
                <ul className="space-y-3" role="list">
                  {sector.componentList!.map(({ name, note }) => (
                    <li key={name} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4 font-mono text-xs">
                      <span className="text-gold shrink-0 w-40">{name}</span>
                      <span className="text-white/40">— {note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                {sector.components.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 font-body text-dark-text text-sm">
                    <span className="text-gold shrink-0 mt-0.5" aria-hidden="true">·</span>
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </ScrollReveal>
        </div>
      </section>

      {/* ── Materials ────────────────────────────────────────────────────── */}
      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="materials-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="materials-heading" className="font-display text-navy text-2xl font-semibold mb-2">{t.materialsH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
            <div className="mt-6 bg-navy rounded-sm overflow-hidden">
              <table className="w-full" aria-label={`${t.materialsH2} — ${displayName}`}>
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="text-left font-mono text-xs text-gold uppercase tracking-widest px-5 py-3">{t.gradeCol}</th>
                    <th scope="col" className="text-left font-mono text-xs text-gold uppercase tracking-widest px-5 py-3">{t.stdCol}</th>
                    {hasMaterialNotes && (
                      <th scope="col" className="text-left font-mono text-xs text-gold uppercase tracking-widest px-5 py-3 hidden lg:table-cell">{t.appCol}</th>
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {sector.materials.map(({ grade, standard, note }) => (
                    <tr key={grade} className="hover:bg-white/5 transition-colors duration-150">
                      <td className="spec-row text-white/85 px-5 py-3">{grade}</td>
                      <td className="spec-row text-white/50 px-5 py-3">{standard}</td>
                      {hasMaterialNotes && (
                        <td className="spec-row text-white/35 px-5 py-3 hidden lg:table-cell">{note ?? "—"}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Standards ────────────────────────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-14" aria-labelledby="standards-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="standards-heading" className="font-display text-navy text-xl font-semibold mb-4">{t.standardsH2}</h2>
            <div className="flex flex-wrap gap-2.5">
              {sector.standards.map((s) => (
                <span key={s} className="font-mono text-xs text-navy bg-gold/15 border border-gold/30 rounded-sm px-3 py-1.5">{s}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────────── */}
      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.processEye}</p>
            <h2 id="how-heading" className="font-display text-navy text-2xl lg:text-3xl font-semibold">{t.processH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.steps.map(({ num, title, body }, i) => (
              <ScrollReveal key={num} delay={i * 80}>
                <div>
                  <div className="w-10 h-10 bg-navy border border-gold/35 rounded-sm flex items-center justify-center mb-4">
                    <span className="font-mono text-gold text-xs font-medium">{num}</span>
                  </div>
                  <h3 className="font-display text-navy text-lg font-semibold mb-2">{title}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="bg-navy hero-texture py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-white text-3xl font-semibold">{t.ctaH2}</h2>
            <p className="mt-4 font-body text-white/65 text-base max-w-lg mx-auto leading-relaxed">{t.ctaSub(displayName)}</p>
            <Link href={p("/contact")} className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy">
              {t.ctaBtn} <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
