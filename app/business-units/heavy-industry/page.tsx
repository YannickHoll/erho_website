import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroCarousel } from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "ERHO Heavy Industry",
  description:
    "ERHO Heavy Industry liefert Freiformschmiedestücke, nahtlose Ringe, Präzisionsgussteile und Rohteile für europäische OEMs in sieben Industriesektoren. EN-10204-Dokumentation, qualifizierte europäische Lieferanten.",
};

const processes = [
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
];

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

const sectorChips = [
  { label: "Öl & Gas", href: "/sectors/oil-gas" },
  { label: "Schiffbau & Marine", href: "/sectors/naval-marine" },
  { label: "Bergbau", href: "/sectors/mining" },
  { label: "Getriebe & Antrieb", href: "/sectors/gearbox-transmission" },
  { label: "Kunststoff & Extrusion", href: "/sectors/plastics-extrusion" },
  { label: "Armaturen & Rohrleitungen", href: "/sectors/valves-pipelines" },
  { label: "Energie & Kraftwerke", href: "/sectors/energy-power" },
];

export default function HeavyIndustryPage() {
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
            <Link href="/business-units" className="font-body text-xs text-white/35 hover:text-gold transition-colors duration-200">
              Geschäftsbereiche
            </Link>
            <span className="text-white/20 text-xs">/</span>
            <span className="font-body text-xs text-gold">Heavy Industry</span>
          </div>
          {/* Gold accent stripe */}
          <div className="w-8 h-1 bg-gold mb-4 rounded-sm" aria-hidden="true" />
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-2">ERHO</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Heavy Industry
          </h1>
          <p className="mt-2 font-body text-gold/80 text-lg italic">Schwere Komponenten. Technisch versorgt.</p>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">
            Beschaffung und Lieferung von geschmiedeten und gegossenen Metallkomponenten für europäische OEMs — aus qualifizierten Lieferantennetzwerken in Italien, Deutschland und ganz Europa.
          </p>
          <p className="mt-3 font-mono text-white/30 text-xs">Betrieben durch INTEG AG</p>
        </div>
      </section>

      {/* Processes */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="processes-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">Fertigungsverfahren</p>
            <h2 id="processes-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Was wir liefern
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {processes.map(({ title, body }, i) => (
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
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">Werkstoffportfolio</p>
            <h2 id="materials-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Güten, mit denen wir arbeiten
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-10">
            <div className="bg-navy rounded-sm overflow-hidden">
              <table className="w-full" aria-label="Werkstoffgüten und Normen">
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3">Güte</th>
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3 hidden sm:table-cell">Norm</th>
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
            <p className="mt-3 font-mono text-xs text-mid-gray">Weitere Güten auf Anfrage erhältlich.</p>
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
                Lieferantennetzwerk
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-5 font-body text-white/65 text-sm leading-relaxed mb-5">
                Wir beziehen von vorqualifizierten Schmiede- und Giesswerken mit bewährten Qualitätssystemen und Leistungsnachweisen in anspruchsvollen europäischen Anwendungen. Italien und Deutschland sind unsere primären Beschaffungsländer, ergänzt durch Spezialwerke in ganz Europa.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["Italien — Primär", "Deutschland — Primär", "Übrige Europa", "China — Selektiv"].map((loc) => (
                  <span key={loc} className="font-mono text-xs text-gold bg-white/8 border border-gold/30 rounded-sm px-3 py-1.5">
                    {loc}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="font-display text-white text-2xl font-semibold mb-2">
                Qualität & Dokumentation
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <ul className="mt-5 space-y-2.5" role="list">
                {[
                  "EN-10204-3.1-Werkstoffprüfzeugnis — Standard",
                  "EN 10204 3.2 — Drittpartei-Überwachung auf Anfrage",
                  "Chemische Analyse und mechanische Prüfergebnisse",
                  "Wärmebehandlungsprotokolle",
                  "ZfP-Berichte (UT, MT, PT nach Spezifikation)",
                  "Masshaltigkeitsprotokoll",
                  "Vollständige Schmelzen- und Chargenrückverfolgbarkeit",
                ].map((item) => (
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
              Bediente Branchen
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {sectorChips.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
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
            <p className="font-mono text-gold text-[10px] uppercase tracking-widest mb-2">Kombiniertes Angebot</p>
            <p className="font-display text-navy text-lg font-semibold mb-2">
              Kombiniert mit ERHO Machining Services für eine vollständig fertige Komponente.
            </p>
            <p className="font-body text-mid-gray text-sm leading-relaxed max-w-xl mb-4">
              Heavy Industry übernimmt die Beschaffung und Lieferung des Schmiedestücks oder Gussteils. Machining Services zerspant es nach Ihrer exakten Zeichnung. Eine Bestellung, eine Lieferung, null Koordinationsaufwand.
            </p>
            <Link href="/business-units/machining-services" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-gold hover:text-gold/80 transition-colors duration-200">
              Machining Services erkunden <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy hero-texture py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-white text-3xl font-semibold">
              Haben Sie einen Komponentenbedarf?
            </h2>
            <p className="mt-4 font-body text-white/60 text-base max-w-md mx-auto leading-relaxed">
              Senden Sie uns Ihre Zeichnung, Spezifikation oder Werkstoffgüte. Wir antworten innerhalb von 24 Stunden.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200"
            >
              Komponente anfragen <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
