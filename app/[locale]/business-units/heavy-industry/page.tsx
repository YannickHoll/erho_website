import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroCarousel } from "@/components/HeroCarousel";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "de"
    ? {
        title: "ERHO Heavy Industry — Schmiede- & Gussteile",
        description:
          "ERHO Heavy Industry liefert Freiformschmiedestücke, nahtlose Ringe, Präzisionsgussteile und Rohteile für europäische OEMs. EN-10204-Dokumentation, qualifizierte europäische Lieferanten.",
      }
    : {
        title: "ERHO Heavy Industry — Forgings & Castings",
        description:
          "ERHO Heavy Industry delivers open-die forgings, seamless rings, precision castings and rough-machined blanks for European OEMs. EN-10204 documentation, qualified European suppliers.",
      };
}

const pageT = {
  de: {
    buLabel: "Geschäftsbereiche",
    subtitle: "Schwere Komponenten. Technisch versorgt.",
    heroBody:
      "Beschaffung und Lieferung von geschmiedeten und gegossenen Metallkomponenten für europäische OEMs — aus qualifizierten Lieferantennetzwerken in Italien, Deutschland und ganz Europa.",
    operatedBy: "Betrieben durch INTEG AG",
    processesEye: "Fertigungsverfahren",
    processesH2: "Was wir liefern",
    materialsEye: "Werkstoffportfolio",
    materialsH2: "Güten, mit denen wir arbeiten",
    gradeCol: "Güte",
    stdCol: "Norm",
    moreGrades: "Weitere Güten auf Anfrage erhältlich.",
    networkH2: "Lieferantennetzwerk",
    networkBody:
      "Wir beziehen von vorqualifizierten Schmiede- und Giesswerken mit bewährten Qualitätssystemen und Leistungsnachweisen in anspruchsvollen europäischen Anwendungen. Italien und Deutschland sind unsere primären Beschaffungsländer, ergänzt durch Spezialwerke in ganz Europa.",
    locations: ["Italien — Primär", "Deutschland — Primär", "Übrige Europa", "China — Selektiv"],
    qualityH2: "Qualität & Dokumentation",
    qualityItems: [
      "EN-10204-3.1-Werkstoffprüfzeugnis — Standard",
      "EN 10204 3.2 — Drittpartei-Überwachung auf Anfrage",
      "Chemische Analyse und mechanische Prüfergebnisse",
      "Wärmebehandlungsprotokolle",
      "ZfP-Berichte (UT, MT, PT nach Spezifikation)",
      "Masshaltigkeitsprotokoll",
      "Vollständige Schmelzen- und Chargenrückverfolgbarkeit",
    ],
    sectorsH2: "Bediente Branchen",
    combinedEye: "Kombiniertes Angebot",
    combinedTitle: "Kombiniert mit ERHO Machining Services für eine vollständig fertige Komponente.",
    combinedBody:
      "Heavy Industry übernimmt die Beschaffung und Lieferung des Schmiedestücks oder Gussteils. Machining Services zerspant es nach Ihrer exakten Zeichnung. Eine Bestellung, eine Lieferung, null Koordinationsaufwand.",
    combinedLink: "Machining Services erkunden",
    ctaH2: "Haben Sie einen Komponentenbedarf?",
    ctaBody: "Senden Sie uns Ihre Zeichnung, Spezifikation oder Werkstoffgüte. Wir antworten innerhalb von 24 Stunden.",
    ctaBtn: "Komponente anfragen",
    processes: [
      {
        title: "Freiformschmieden",
        body: "Einzel- oder Kleinserenschmiedestücke, zwischen flachen oder profilierten Werkzeugen gepresst. Ideal für grosse, komplexe Geometrien — Wellen, Scheiben, Blöcke und Zylinder. Gewichtsbereich 1 kg bis 30.000 kg, Längen bis 6 m.",
      },
      {
        title: "Ringwalzen",
        body: "Nahtlose Ringe mit überlegener Kornstruktur und mechanischen Eigenschaften. Runde, flanschierte und profilierte Querschnitte. AD 200 mm bis 5.000 mm, nach EN-10222-Toleranzen lieferbar.",
      },
      {
        title: "Sand- & Feinguss",
        body: "Komplexe Geometrien, die für das Schmieden ungeeignet sind. Sandguss für grössere und schwerere Teile; Feinguss für endkonturnahe Präzisionsarbeit. Sandguss: bis 20.000 kg. Feinguss: 0,1–100 kg.",
      },
      {
        title: "Vorbearbeitete Rohteile",
        body: "Schmiedestücke und Gussteile, grob auf Nahform bearbeitet oder fertig nach Zeichnung. Koordiniert mit ERHO Machining Services für vollständig fertige Komponenten aus einer Hand.",
      },
    ],
    sectorChips: [
      { label: "Öl & Gas", slug: "oil-gas" },
      { label: "Schiffbau & Marine", slug: "naval-marine" },
      { label: "Bergbau", slug: "mining" },
      { label: "Getriebe & Antrieb", slug: "gearbox-transmission" },
      { label: "Kunststoff & Extrusion", slug: "plastics-extrusion" },
      { label: "Armaturen & Rohrleitungen", slug: "valves-pipelines" },
      { label: "Energie & Kraftwerke", slug: "energy-power" },
    ],
  },
  en: {
    buLabel: "Business Units",
    subtitle: "Heavy components. Technically sourced.",
    heroBody:
      "Sourcing and delivery of forged and cast metal components for European OEMs — from qualified supplier networks in Italy, Germany and across Europe.",
    operatedBy: "Operated by INTEG AG",
    processesEye: "Manufacturing processes",
    processesH2: "What we deliver",
    materialsEye: "Material portfolio",
    materialsH2: "Grades we work with",
    gradeCol: "Grade",
    stdCol: "Standard",
    moreGrades: "Additional grades available on request.",
    networkH2: "Supplier network",
    networkBody:
      "We source from pre-qualified forge and foundry shops with proven quality systems and track records in demanding European applications. Italy and Germany are our primary sourcing countries, supplemented by specialist mills across Europe.",
    locations: ["Italy — Primary", "Germany — Primary", "Rest of Europe", "China — Selective"],
    qualityH2: "Quality & documentation",
    qualityItems: [
      "EN-10204-3.1 material test certificate — standard",
      "EN 10204 3.2 — third-party witness inspection on request",
      "Chemical analysis and mechanical test results",
      "Heat treatment records",
      "NDE reports (UT, MT, PT to specification)",
      "Dimensional inspection report",
      "Full heat and batch traceability",
    ],
    sectorsH2: "Sectors served",
    combinedEye: "Combined offering",
    combinedTitle: "Combined with ERHO Machining Services for a fully finished component.",
    combinedBody:
      "Heavy Industry handles sourcing and delivery of the forging or casting. Machining Services machines it to your exact drawing. One order, one delivery, zero coordination overhead.",
    combinedLink: "Explore Machining Services",
    ctaH2: "Have a component requirement?",
    ctaBody: "Send us your drawing, specification or material grade. We'll respond within 24 hours.",
    ctaBtn: "Request a component",
    processes: [
      {
        title: "Open-die forging",
        body: "Single or small-batch forgings pressed between flat or shaped dies. Ideal for large, complex geometries — shafts, discs, blocks and cylinders. Weight range 1 kg to 30,000 kg, lengths up to 6 m.",
      },
      {
        title: "Ring rolling",
        body: "Seamless rings with superior grain structure and mechanical properties. Round, flanged and profiled cross-sections. OD 200 mm to 5,000 mm, delivered to EN-10222 tolerances.",
      },
      {
        title: "Sand & investment casting",
        body: "Complex geometries unsuitable for forging. Sand casting for larger, heavier parts; investment casting for near-net-shape precision work. Sand casting: up to 20,000 kg. Investment casting: 0.1–100 kg.",
      },
      {
        title: "Rough-machined blanks",
        body: "Forgings and castings rough-machined to near-net shape or fully finished to drawing. Coordinated with ERHO Machining Services for fully finished components from a single source.",
      },
    ],
    sectorChips: [
      { label: "Oil & Gas", slug: "oil-gas" },
      { label: "Naval & Marine", slug: "naval-marine" },
      { label: "Mining", slug: "mining" },
      { label: "Gearboxes & Drives", slug: "gearbox-transmission" },
      { label: "Plastics & Extrusion", slug: "plastics-extrusion" },
      { label: "Valves & Pipelines", slug: "valves-pipelines" },
      { label: "Energy & Power", slug: "energy-power" },
    ],
  },
};

const materials = [
  { grade: "42CrMo4 / 42CrMoS4", standard: "EN 10083 / EN 10250" },
  { grade: "34CrNiMo6", standard: "EN 10083-3" },
  { grade: "18CrNiMo7-6", standard: "EN 10084" },
  { grade: "1.4462 Duplex", standard: "EN 10222-5 / ASTM A182" },
  { grade: "1.4410 Superduplex", standard: "EN 10222-5" },
  { grade: "316L / 316L(N)-IG", standard: "EN 10222-5 / ASME SA-182" },
  { grade: "Inconel 625 / 718", standard: "AMS 5666 / ASME SB-564" },
  { grade: "CA6NM", standard: "ASTM A743 / EN 10283" },
  { grade: "P265GH / P355GH", standard: "EN 10222-2" },
  { grade: "X10CrMoVNb9-1 (P91)", standard: "EN 10222-2" },
];

export default async function HeavyIndustryPage({ params }: Props) {
  const { locale } = await params;
  const t = pageT[locale as Locale] ?? pageT.de;
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden">
        <HeroCarousel
          slides={[
            { src: "/images/Forging_Stock.jpeg" },
            { src: "/images/AdobeStock_117288071.jpeg" },
            { src: "/images/Sand_Castig.jpeg" },
            { src: "/images/AdobeStock_353999438.jpeg" },
          ]}
          overlayOpacity={60}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href={p("/business-units")} className="font-body text-xs text-white/35 hover:text-gold transition-colors duration-200">
              {t.buLabel}
            </Link>
            <span className="text-white/20 text-xs">/</span>
            <span className="font-body text-xs text-gold">Heavy Industry</span>
          </div>
          <div className="w-8 h-1 bg-gold mb-4 rounded-sm" aria-hidden="true" />
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-2">ERHO</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Heavy Industry
          </h1>
          <p className="mt-2 font-body text-gold/80 text-lg italic">{t.subtitle}</p>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">{t.heroBody}</p>
          <p className="mt-3 font-mono text-white/30 text-xs">{t.operatedBy}</p>
        </div>
      </section>

      {/* Processes */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="processes-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.processesEye}</p>
            <h2 id="processes-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              {t.processesH2}
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {t.processes.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 70}>
                <div className="bg-white border-l-4 border-gold rounded-sm p-7 h-full">
                  <h3 className="font-display text-navy text-xl font-semibold mb-3">{title}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="materials-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.materialsEye}</p>
            <h2 id="materials-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              {t.materialsH2}
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-10">
            <div className="bg-navy rounded-sm overflow-hidden">
              <table className="w-full" aria-label={`${t.materialsH2} — Heavy Industry`}>
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3">{t.gradeCol}</th>
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3 hidden sm:table-cell">{t.stdCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8">
                  {materials.map(({ grade, standard }) => (
                    <tr key={grade} className="hover:bg-white/4 transition-colors duration-150">
                      <td className="spec-row text-white/85 px-5 py-3">{grade}</td>
                      <td className="spec-row text-white/45 px-5 py-3 hidden sm:table-cell">{standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 font-mono text-xs text-mid-gray">{t.moreGrades}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Supplier network + Quality */}
      <section className="relative py-16 lg:py-20 overflow-hidden" aria-labelledby="network-heading">
        <Image
          src="/images/AdobeStock_117288071.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A2540]/60" aria-hidden="true" />
        <div className="absolute inset-0 hero-texture opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ScrollReveal>
              <h2 id="network-heading" className="font-display text-white text-2xl font-semibold mb-2">
                {t.networkH2}
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-5 font-body text-white/65 text-sm leading-relaxed mb-5">{t.networkBody}</p>
              <div className="flex flex-wrap gap-2.5">
                {t.locations.map((loc) => (
                  <span key={loc} className="font-mono text-xs text-gold bg-white/8 border border-gold/30 rounded-sm px-3 py-1.5">
                    {loc}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="font-display text-white text-2xl font-semibold mb-2">{t.qualityH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <ul className="mt-5 space-y-2.5" role="list">
                {t.qualityItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-white/65 text-sm">
                    <span className="text-gold shrink-0 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white py-14 lg:py-16" aria-labelledby="sectors-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="sectors-heading" className="font-display text-navy text-xl font-semibold mb-5">
              {t.sectorsH2}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {t.sectorChips.map(({ label, slug }) => (
                <Link
                  key={slug}
                  href={p(`/sectors/${slug}`)}
                  className="font-body text-sm text-navy border border-navy/20 rounded-sm px-4 py-2 hover:border-gold hover:text-gold transition-colors duration-200"
                >
                  {label}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Combined offering */}
      <section className="bg-navy/5 border border-gold/20 mx-6 lg:mx-8 rounded-sm mb-8 p-7 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-gold text-[10px] uppercase tracking-widest mb-2">{t.combinedEye}</p>
            <p className="font-display text-navy text-lg font-semibold mb-2">{t.combinedTitle}</p>
            <p className="font-body text-mid-gray text-sm leading-relaxed max-w-xl mb-4">{t.combinedBody}</p>
            <Link href={p("/business-units/machining-services")} className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-gold hover:text-gold/80 transition-colors duration-200">
              {t.combinedLink} <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy hero-texture py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-white text-3xl font-semibold">{t.ctaH2}</h2>
            <p className="mt-4 font-body text-white/60 text-base max-w-md mx-auto leading-relaxed">{t.ctaBody}</p>
            <Link
              href={p("/contact")}
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy"
            >
              {t.ctaBtn} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
