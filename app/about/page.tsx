import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "ERHO Industry Solutions betreibt drei integrierte Geschäftsbereiche — Heavy Industry, Machining Services und Stock & Finance — um eine vollständige Beschaffungspartnerschaft für europäische OEMs zu liefern.",
};

const businessUnits = [
  {
    name: "Heavy Industry",
    accentText: "text-gold",
    accentBorder: "border-gold",
    href: "/business-units/heavy-industry",
    body: "Beschaffung und Lieferung von Freiformschmiedestücken, nahtlosen Ringen, Gussteilen und Rohteilen aus qualifizierten europäischen Lieferantennetzwerken.",
  },
  {
    name: "Machining Services",
    accentText: "text-steel",
    accentBorder: "border-steel",
    href: "/business-units/machining-services",
    body: "CNC-Präzisionszerspanung von Schmiedestücken, Gussteilen und Stabstahl nach Ihrer exakten Zeichnung — fertige Komponenten für Ihre Montagelinie.",
  },
  {
    name: "Stock & Finance",
    accentText: "text-warm-gold",
    accentBorder: "border-warm-gold",
    href: "/business-units/stock-finance",
    body: "Strategische Lagerhaltung, Konsignationslager und Beschaffungsfinanzierung — damit Ihr Kapital frei bleibt und Ihre Lieferkette nie leer wird.",
  },
];

const differentiators = [
  {
    title: "Technische Tiefe",
    body: "Wir prüfen Zeichnungen, hinterfragen Spezifikationen und empfehlen Werkstoffe. Unser Team spricht die Sprache der Technik und der Beschaffung — nicht des Verkaufs. Wir identifizieren Risiken, bevor sie zu Produktionsausfällen werden.",
  },
  {
    title: "Lieferkettenreichweite",
    body: "Direkte, langfristige Beziehungen zu Schmiede- und Giesswerken in Italien, Deutschland und ganz Europa. Wir kennen unsere Lieferanten persönlich — ihre Fähigkeiten, Lieferzeiten und Qualitätsleistungen. Wenn einer ausfällt, ist ein anderer bereit.",
  },
  {
    title: "Finanzielle Flexibilität",
    body: "Wir finanzieren Komponenten, halten Konsignationsbestände und bieten Zahlungsaufschubstrukturen an. Ihre Bilanz bleibt sauber. Ihre Lieferkette bleibt voll.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">
            Über uns
          </p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Schweizer Präzision. Europäische Reichweite. Ein Partner.
          </h1>
          <span className="gold-rule" aria-hidden="true" />
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-off-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <h2 className="font-display text-navy text-2xl lg:text-3xl font-semibold mb-5">
                Wer wir sind
              </h2>
              <div className="space-y-4 font-body text-mid-gray text-base leading-relaxed">
                <p>
                  ERHO Industry Solutions ist ein in der Schweiz ansässiger Industriebeschaffungspartner,
                  Teil der ERHO Holding Group. Wir betreiben drei integrierte Geschäftsbereiche —
                  Heavy Industry, Machining Services und Stock & Finance — die die vollständige
                  Lieferkette vom Rohschmiedestück bis zur fertigen Komponente abdecken.
                </p>
                <p>
                  Europäische OEM-Beschaffungsteams stehen vor einem Problem, das bislang nicht
                  gut gelöst wurde: Die Beschaffung von Spezial-Metallkomponenten erfordert tiefes
                  technisches Wissen, etablierte Lieferantenbeziehungen und die operative Bandbreite,
                  um Qualität, Logistik und Dokumentation über mehrere Länder hinweg zu managen.
                  Die meisten Teams haben nicht alles drei.
                </p>
                <p>
                  Wir haben es. Und wir bringen alles davon in jede Kundenbeziehung ein.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { stat: "3", label: "Integrierte Geschäftsbereiche" },
                  { stat: "7", label: "Industrielle Endmärkte" },
                  { stat: "20+", label: "Qualifizierte Lieferantenpartner" },
                  { stat: "24h", label: "Anfragen-Reaktionszeit" },
                ].map(({ stat, label }) => (
                  <div
                    key={label}
                    className="bg-white border border-gray-100 rounded-sm p-6"
                  >
                    <p className="font-display text-gold text-3xl font-semibold">{stat}</p>
                    <p className="font-body text-mid-gray text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Three BUs */}
      <section className="bg-white py-16 lg:py-20" aria-labelledby="bu-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">Unsere Geschäftsbereiche</p>
            <h2 id="bu-heading" className="font-display text-navy text-2xl lg:text-3xl font-semibold">
              Drei Bereiche. Eine Lieferkette.
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {businessUnits.map(({ name, accentText, accentBorder, href, body }, i) => (
              <ScrollReveal key={name} delay={i * 70}>
                <div className={`bg-off-white border-t-4 ${accentBorder} rounded-sm p-6 h-full flex flex-col`}>
                  <h3 className={`font-display text-lg font-semibold mb-3 ${accentText}`}>{name}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed flex-1 mb-4">{body}</p>
                  <Link href={href} className={`font-body text-xs font-medium ${accentText} hover:opacity-75 transition-opacity duration-200 inline-flex items-center gap-1`}>
                    Mehr erfahren <ArrowRight size={11} aria-hidden="true" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why we exist */}
      <section className="bg-white py-16 lg:py-20" aria-labelledby="thesis-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
              Unsere Gründungsthese
            </p>
            <h2
              id="thesis-heading"
              className="font-display text-navy text-2xl lg:text-3xl font-semibold"
            >
              Warum wir existieren
            </h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="mt-6 font-body text-mid-gray text-base leading-relaxed">
              Europäische OEMs verdienen einen intelligenteren Weg, kritische Komponenten zu beschaffen.
              Das Modell, eine fragmentierte Lieferantenbasis zu verwalten — eine Schmiede hier,
              ein Giesswerk dort, eine Zerspanungswerkstatt irgendwo anders — ist teuer, langsam
              und fragil. Lieferkettenereignisse der vergangenen Jahre haben gezeigt, wie fragil.
            </p>
            <p className="mt-4 font-body text-mid-gray text-base leading-relaxed">
              ERHO Industry Solutions wurde aufgebaut, um das zu ändern. Ein qualifizierter,
              technisch kompetenter Partner. Eine Bestellung. Ein Qualitätssystem.
              Eingebaute Resilienz.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How we're different */}
      <section className="bg-off-white py-20 lg:py-24" aria-labelledby="differentiators-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
              Warum ERHO
            </p>
            <h2
              id="differentiators-heading"
              className="font-display text-navy text-3xl lg:text-4xl font-semibold"
            >
              Was uns unterscheidet
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="border-t-2 border-gold pt-6 h-full">
                  <h3 className="font-display text-navy text-xl font-semibold mb-3">{title}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ERHO Holding Group */}
      <section className="bg-navy hero-texture py-16 lg:py-20" aria-labelledby="group-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
                Gruppenstruktur
              </p>
              <h2
                id="group-heading"
                className="font-display text-white text-2xl lg:text-3xl font-semibold"
              >
                Teil der ERHO Holding Group
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-6 font-body text-white/60 text-base leading-relaxed">
                ERHO Industry Solutions ist die operative Gesellschaft der ERHO Holding Group —
                einer Schweizer Holdingstruktur, die Industriehandel und verwandte
                Geschäftsfelder unterstützt. Das Gruppenmodell ermöglicht einen
                dedizierten operativen Fokus auf Lösungsebene, gestützt durch die Stabilität
                und Governance einer Schweizer Holding.
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold/80 transition-colors duration-200"
                aria-label="ERHO Holding Group Website (Platzhalter)"
              >
                ERHO Holding Group <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team */}
      <section className="bg-off-white py-20 lg:py-24" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
              Führung
            </p>
            <h2
              id="team-heading"
              className="font-display text-navy text-3xl lg:text-4xl font-semibold"
            >
              Unser Team
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Primary team member */}
            <ScrollReveal>
              <div className="bg-white border border-gray-100 rounded-sm p-6 text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-gold text-xl font-semibold">Y</span>
                </div>
                <p className="font-display text-navy font-semibold">Yannick</p>
                <p className="font-body text-mid-gray text-sm mt-0.5">Geschäftsführer</p>
              </div>
            </ScrollReveal>
            {/* Placeholders */}
            {Array.from({ length: 3 }).map((_, i) => (
              <ScrollReveal key={`ph-${i}`} delay={(i + 1) * 60}>
                <div className="bg-white border border-dashed border-gray-200 rounded-sm p-6 text-center opacity-40">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4" />
                  <p className="font-body text-mid-gray text-sm">Demnächst</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-white py-14 lg:py-16" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-gold mt-1 shrink-0" size={18} aria-hidden="true" />
              <div>
                <h2
                  id="location-heading"
                  className="font-display text-navy text-xl font-semibold"
                >
                  Baden, Switzerland
                </h2>
                <address className="font-body text-mid-gray text-base not-italic mt-1.5 leading-relaxed">
                  Rütistrasse 6 · 5400 Baden · Switzerland
                </address>
              </div>
            </div>
            {/* Map placeholder */}
            <div className="w-full h-56 bg-gray-100 rounded-sm flex items-center justify-center border border-gray-200">
              <p className="font-body text-mid-gray text-sm">Baden, Schweiz — Karte</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
