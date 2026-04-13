import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "de"
    ? {
        title: "Geschäftsbereiche — ERHO Industrietechnik",
        description:
          "ERHO Industrietechnik betreibt drei integrierte Geschäftsbereiche: Heavy Industry, Machining Services und Stock & Finance.",
      }
    : {
        title: "Business Units — ERHO Industry Solutions",
        description:
          "ERHO Industry Solutions operates three integrated business units: Heavy Industry, Machining Services, and Stock & Finance.",
      };
}

const pageT = {
  de: {
    eyebrow: "Unsere Geschäftsbereiche",
    h1: "Drei Geschäftsbereiche. Für die vollständige Lieferkette.",
    heroSub:
      "Jeder Bereich löst einen bestimmten Teil Ihrer Beschaffungsherausforderung. Zusammen machen sie ERHO Industrietechnik zum einzigen Industriepartner, den Sie brauchen.",
    capabilitiesLabel: "Kompetenzen",
    exploreBtn: (name: string) => `${name} erkunden`,
    integratedEye: "Der integrierte Vorteil",
    integratedH2: "Warum das integrierte Modell gewinnt",
    integratedBody1:
      "Wenn alle drei Kompetenzen unter einem Dach vereint sind, erhält Ihr Beschaffungsteam etwas, das keine Kombination unabhängiger Lieferanten bieten kann: einen einzigen verantwortlichen Partner, der das Gesamtbild versteht — was beschafft, was zerspant und was auf Lager gehalten werden muss — und alle drei koordiniert, ohne dass Sie die Übergaben managen müssen.",
    integratedBody2:
      "Ein Gespräch. Eine Bestellung. Ein Eskalationspunkt. Eingebaute Lieferkettenresilienz.",
    integratedLink: "So funktioniert es",
    units: [
      {
        slug: "heavy-industry",
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
        slug: "machining-services",
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
        slug: "stock-finance",
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
    ],
  },
  en: {
    eyebrow: "Our Business Units",
    h1: "Three business units. For the complete supply chain.",
    heroSub:
      "Each unit solves a specific part of your procurement challenge. Together they make ERHO Industry Solutions the only industrial partner you need.",
    capabilitiesLabel: "Capabilities",
    exploreBtn: (name: string) => `Explore ${name}`,
    integratedEye: "The integrated advantage",
    integratedH2: "Why the integrated model wins",
    integratedBody1:
      "When all three capabilities sit under one roof, your procurement team gets something no combination of independent suppliers can offer: a single accountable partner who understands the whole picture — what to source, what to machine, what to hold in stock — and coordinates all three without you managing the hand-offs.",
    integratedBody2:
      "One conversation. One order. One escalation point. Built-in supply chain resilience.",
    integratedLink: "See how it works",
    units: [
      {
        slug: "heavy-industry",
        tagline: "Sourcing and delivery of forged and cast metal components.",
        description:
          "ERHO Heavy Industry manages the sourcing and delivery of open-die forgings, seamless rings, precision castings and rough machined blanks for European OEMs across seven industrial sectors. Backed by qualified supplier networks in Italy, Germany and beyond, we provide the technical depth and documentation rigour that industrial procurement demands.",
        capabilities: [
          "Open-die forgings (1 kg – 30,000 kg)",
          "Ring rolling (OD 200 mm – 5,000 mm)",
          "Sand and investment casting",
          "Rough-machined blanks to drawing",
          "EN-10204-3.1/3.2 documentation",
          "Full material traceability",
        ],
      },
      {
        slug: "machining-services",
        tagline: "CNC precision machining from blank to finished part.",
        description:
          "ERHO Machining Services takes forgings, castings or bar stock and machines them to your exact drawing and tolerance — finished components ready for your assembly line. We work from prototype to series production, with in-house and partner machining capacity across Europe.",
        capabilities: [
          "CNC turning (up to ⌀ 2,500 mm)",
          "Milling, drilling and grinding",
          "Prototype and series production",
          "Alloy steel, stainless, duplex, Inconel",
          "Dimensional reports and CMM inspection",
          "Combined sourcing + machining packages",
        ],
      },
      {
        slug: "stock-finance",
        tagline: "Strategic stockholding and procurement financing.",
        description:
          "ERHO Stock & Finance holds strategic inventory of standard flanges, bar stock and custom components — and provides procurement financing structures so your capital doesn't sit in a warehouse. We carry the inventory risk and deliver on demand, just-in-time.",
        capabilities: [
          "Strategic stock: flanges & bar stock",
          "Custom consignment inventory",
          "Procurement financing structures",
          "Payment deferral arrangements",
          "Just-in-time delivery",
          "Inventory management programme",
        ],
      },
    ],
  },
};

const unitMeta = [
  {
    slug: "heavy-industry",
    name: "Heavy Industry",
    accentBorder: "border-gold",
    accentText: "text-gold",
  },
  {
    slug: "machining-services",
    name: "Machining Services",
    accentBorder: "border-steel",
    accentText: "text-steel",
  },
  {
    slug: "stock-finance",
    name: "Stock & Finance",
    accentBorder: "border-warm-gold",
    accentText: "text-warm-gold",
  },
];

export default async function BusinessUnitsPage({ params }: Props) {
  const { locale } = await params;
  const t = pageT[locale as Locale] ?? pageT.de;
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      {/* Hero */}
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">{t.eyebrow}</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">{t.h1}</h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">{t.heroSub}</p>
        </div>
      </section>

      {/* BU cards */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-6">
          {t.units.map((unit, i) => {
            const meta = unitMeta[i];
            return (
              <ScrollReveal key={meta.slug} delay={i * 80}>
                <div className={`bg-white rounded-sm border-l-4 ${meta.accentBorder} overflow-hidden`}>
                  <div className="p-7 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left: identity */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-mid-gray/50 mb-1">ERHO</p>
                      <h2 className={`font-display text-2xl font-semibold mb-2 ${meta.accentText}`}>{meta.name}</h2>
                      <p className="font-body text-mid-gray text-sm italic leading-relaxed">{unit.tagline}</p>
                    </div>
                    {/* Middle: description */}
                    <div>
                      <p className="font-body text-mid-gray text-sm leading-relaxed">{unit.description}</p>
                    </div>
                    {/* Right: capabilities + CTA */}
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-mid-gray/50 mb-3">{t.capabilitiesLabel}</p>
                      <ul className="space-y-1.5 mb-6" role="list">
                        {unit.capabilities.map((c) => (
                          <li key={c} className="flex items-start gap-2 font-body text-sm text-dark-text">
                            <span className={`shrink-0 mt-0.5 ${meta.accentText}`}>·</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={p(`/business-units/${meta.slug}`)}
                        className={`inline-flex items-center gap-2 font-body text-sm font-semibold transition-colors duration-200 ${meta.accentText} hover:opacity-75`}
                      >
                        {t.exploreBtn(meta.name)} <ArrowRight size={14} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
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
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.integratedEye}</p>
              <h2 id="integrated-heading" className="font-display text-white text-2xl lg:text-3xl font-semibold">
                {t.integratedH2}
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-6 font-body text-white/60 text-base leading-relaxed">{t.integratedBody1}</p>
              <p className="mt-4 font-body text-white/60 text-base leading-relaxed">{t.integratedBody2}</p>
              <Link
                href={p("/solutions")}
                className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold/80 transition-colors duration-200"
              >
                {t.integratedLink} <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
