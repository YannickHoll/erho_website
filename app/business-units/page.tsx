import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Geschäftsbereiche",
  description:
    "ERHO Industry Solutions betreibt drei integrierte Geschäftsbereiche: Heavy Industry (Schmiede- & Gussteile), Machining Services (CNC-Präzisionszerspanung) und Stock & Finance (strategische Lagerhaltung & Beschaffungsfinanzierung).",
};

const units = [
  {
    name: "Heavy Industry",
    href: "/business-units/heavy-industry",
    accentBorder: "border-gold",
    accentText: "text-gold",
    accentBg: "bg-gold",
    tagline: "Beschaffung und Lieferung von geschmiedeten und gegossenen Metallkomponenten.",
    description:
      "ERHO Heavy Industry managt die Beschaffung und Lieferung von Freiformschmiedestücken, nahtlosen Ringen, Präzisionsgussteilen und Rohteilen für europäische OEMs in sieben Industriesektoren. Gestützt durch qualifizierte Lieferantennetzwerke in Italien, Deutschland und darüber hinaus bieten wir die technische Tiefe und Dokumentationsstrenge, die die industrielle Beschaffung verlangt.",
    capabilities: [
      "Freiformschmiedestücke (1 kg – 30.000 kg)",
      "Ringwalzen (AD 200 mm – 5.000 mm)",
      "Sand- und Feinguss",
      "Rohteile nach Zeichnung",
      "EN-10204-3.1/3.2-Dokumentation",
      "Vollständige Werkstoffrückverfolgbarkeit",
    ],
  },
  {
    name: "Machining Services",
    href: "/business-units/machining-services",
    accentBorder: "border-steel",
    accentText: "text-steel",
    accentBg: "bg-steel",
    tagline: "CNC-Präzisionszerspanung vom Rohling zum Fertigteil.",
    description:
      "ERHO Machining Services nimmt Schmiedestücke, Gussteile oder Stabstahl und zerspant sie nach Ihrer exakten Zeichnung und Toleranz — fertige Komponenten für Ihre Montagelinie. Wir bearbeiten vom Prototyp bis zur Serienfertigung, mit eigenem und Partner-Zerspanungskapazitäten in ganz Europa.",
    capabilities: [
      "CNC-Drehen (bis ⌀ 2.500 mm)",
      "Fräsen, Bohren und Schleifen",
      "Prototyp- und Serienfertigung",
      "Legierungsstahl, Edelstahl, Duplex, Inconel",
      "Maßberichte und KMM-Inspektion",
      "Kombinierte Beschaffungs- + Zerspanungspakete",
    ],
  },
  {
    name: "Stock & Finance",
    href: "/business-units/stock-finance",
    accentBorder: "border-warm-gold",
    accentText: "text-warm-gold",
    accentBg: "bg-warm-gold",
    tagline: "Strategische Lagerhaltung und Beschaffungsfinanzierung.",
    description:
      "ERHO Stock & Finance hält strategische Bestände an Standardflanschen, Stabstahl und kundenspezifischen Komponenten — und bietet Beschaffungsfinanzierungsstrukturen, damit Ihr Kapital nicht im Lager gebunden ist. Wir übernehmen das Lagerrisiko und liefern auf Abruf, just-in-time.",
    capabilities: [
      "Strategisches Lager: Flansche & Stabstahl",
      "Kundenspezifisches Konsignationslager",
      "Beschaffungsfinanzierungsstrukturen",
      "Zahlungsaufschubregelungen",
      "Just-in-time-Lieferung",
      "Lagerverwaltungsprogramm",
    ],
  },
];

export default function BusinessUnitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">
            Unsere Geschäftsbereiche
          </p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Drei Geschäftsbereiche. Für die vollständige Lieferkette.
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">
            Jeder Bereich löst einen bestimmten Teil Ihrer Beschaffungsherausforderung. Zusammen machen sie ERHO Industry Solutions zum einzigen Industriepartner, den Sie brauchen.
          </p>
        </div>
      </section>

      {/* BU cards — full-width horizontal */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {units.map(({ name, href, accentBorder, accentText, accentBg, tagline, description, capabilities }, i) => (
            <ScrollReveal key={name} delay={i * 80}>
              <div className={`bg-white rounded-sm border-l-4 ${accentBorder} overflow-hidden`}>
                <div className="p-7 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left: identity */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-mid-gray/50 mb-1">ERHO</p>
                    <h2 className={`font-display text-2xl font-semibold mb-2 ${accentText}`}>{name}</h2>
                    <p className="font-body text-mid-gray text-sm italic leading-relaxed">{tagline}</p>
                  </div>
                  {/* Middle: description */}
                  <div>
                    <p className="font-body text-mid-gray text-sm leading-relaxed">{description}</p>
                  </div>
                  {/* Right: capabilities + CTA */}
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-mid-gray/50 mb-3">Kompetenzen</p>
                    <ul className="space-y-1.5 mb-6" role="list">
                      {capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-2 font-body text-sm text-dark-text">
                          <span className={`shrink-0 mt-0.5 ${accentText}`}>·</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={href}
                      className={`inline-flex items-center gap-2 font-body text-sm font-semibold transition-colors duration-200 ${accentText} hover:opacity-75`}
                    >
                      {name} erkunden <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Why the integrated model wins */}
      <section className="relative py-16 lg:py-20 overflow-hidden" aria-labelledby="integrated-heading">
        <Image
          src="/images/AdobeStock_1862058745.jpeg"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A2540]/65" aria-hidden="true" />
        <div className="absolute inset-0 hero-texture opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
                Der integrierte Vorteil
              </p>
              <h2 id="integrated-heading" className="font-display text-white text-2xl lg:text-3xl font-semibold">
                Warum das integrierte Modell gewinnt
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-6 font-body text-white/60 text-base leading-relaxed">
                Wenn alle drei Kompetenzen unter einem Dach vereint sind, erhält Ihr Beschaffungsteam etwas, das keine Kombination unabhängiger Lieferanten bieten kann: einen einzigen verantwortlichen Partner, der das Gesamtbild versteht — was beschafft, was zerspant und was auf Lager gehalten werden muss — und alle drei koordiniert, ohne dass Sie die Übergaben managen müssen.
              </p>
              <p className="mt-4 font-body text-white/60 text-base leading-relaxed">
                Ein Gespräch. Eine Bestellung. Ein Eskalationspunkt. Eingebaute Lieferkettenresilienz.
              </p>
              <Link
                href="/solutions"
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold/80 transition-colors duration-200"
              >
                So funktioniert es <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
