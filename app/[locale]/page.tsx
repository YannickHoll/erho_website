import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";
import { HeroCarousel } from "@/components/HeroCarousel";
import { sectors } from "@/lib/sectors";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "de"
    ? { title: "Startseite", description: "ERHO Industrietechnik — ein Partner für geschmiedete, gegossene und zerspante Komponenten." }
    : { title: "Home", description: "ERHO Industry Solutions — one partner for forged, cast and machined components." };
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

// ── Translations ─────────────────────────────────────────────────────────────
const pageT = {
  de: {
    brand:          "ERHO Industrietechnik",
    heroH1a:        "Ein Partner.",
    heroH1b:        "Die vollständige Lieferkette.",
    heroSub:        "Wir verstehen Ihr Projekt. Wir managen die technische Komplexität. Wir liefern vollständige Komponentensätze — aus einer Hand.",
    heroCta1:       "Unser Team kontaktieren",
    heroCta2:       "So arbeiten wir",
    worldEye:       "Das Umfeld",
    worldH2:        "Ein stabiler Partner in einer sich wandelnden Welt.",
    worldP1:        "Die industrielle Beschaffung war selten so komplex wie heute. Zölle und Handelspolitik formen Lieferketten von heute auf morgen um. Asiatische Hersteller konkurrieren aggressiver über den Preis. Regulatorische Anforderungen verschärfen sich in allen wichtigen Märkten. Eine allgemeine Verlangsamung der Industrieproduktion komprimiert die Margen branchenweit.",
    worldP2:        "Ihre Lieferanten spüren das alles. Sie auch. Die Frage ist, ob Ihre Lieferkette so aufgebaut ist, dass sie den Schock abfedert — oder verstärkt.",
    worldChips:     ["Zölle & Handelspolitik", "Asiatischer Wettbewerb", "Regulatorische Komplexität", "Marktrückgang", "Währungsdruck"],
    helpEye:        "Wie wir helfen",
    helpItems: [
      { title: "Wir stabilisieren Ihre Lieferkette", body: "Wir bauen von Anfang an Redundanz und Diversifikation in Ihre Beschaffung ein. Wenn ein Lieferant durch Zölle oder Handelsbeschränkungen ausfällt, haben wir qualifizierte Alternativen bereit." },
      { title: "Wir reduzieren Marktschocks", body: "Unser globales Lieferantennetzwerk erstreckt sich über Europa, Indien und China. Mit Vor-Ort-Präsenz an wichtigen Fertigungsstandorten absorbieren wir Marktvolatilität, bevor sie Ihre Produktionslinie erreicht." },
      { title: "Wir senken die Kosten globaler Beschaffung", body: "Wir kennen die wahren Gesamtkosten von Komponenten aus jeder Beschaffungsregion — Zollauswirkungen, Logistik, Versicherung, Zoll — und finden den kosteneffizientesten Weg zu Ihrer Spezifikation." },
      { title: "Wir sind vor Ort", body: "Vor-Ort-Qualitätssicherung, Vor-Ort-Logistikmanagement, Vor-Ort-Regulierungskonformität. Wir übernehmen die gesamte Komplexität globaler Beschaffung — damit Sie es nicht müssen." },
      { title: "Wir managen die durchgängige Logistik", body: "Transport, Zolldokumentation, Import-/Exportkonformität, behördliche Zertifizierungen — alles koordiniert durch ERHO. Ein Lieferant, eine Lieferung, ein Dokumentationspaket." },
    ],
    helpSummary:    (name: string) => `Wir sind ein <span class="text-gold font-semibold">integrierter Industrielieferspezialist</span> — kein Katalogwiederverkäufer und kein Spot-Buy-Broker. Wir verstehen Ihr Projekt, Ihre Montagereihenfolge und Ihre Qualitätsanforderungen. Wir konfigurieren das vollständige Komponentenpaket. Sie konzentrieren sich auf die Fertigung.`,
    quoteText:      "Durch die Kombination von Schmiede-, Guss- und Zerspanungsdienstleistungen mit strategischer Lagerhaltung und Finanzierung bieten wir europäischen OEMs etwas wirklich Anderes — einen einzigen Partner, der das gesamte Projekt versteht, die gesamte technische Komplexität managt und vollständige Komponentensätze aus einer vertrauenswürdigen Quelle liefert.",
    boldStatements: ["Wir verstehen Ihr Projekt", "Wir managen die technische Komplexität", "Wir liefern Komplettsätze", "Wir beschaffen global, mit Vor-Ort-QA", "Wir finanzieren und lagern"],
    showcaseEye:    "Komplettpaket-Lösungen",
    showcaseH2:     "So sieht ein Komplettpaket aus",
    showcaseSub:    "Für jede Branche, die wir bedienen, liefern wir keine Einzelkomponenten — wir liefern alles, was Ihr Team benötigt, aus einer Hand.",
    showcaseLabel:  "ERHO Komplettpaket",
    showcaseDelivers: "Was wir liefern",
    showcaseCta:    "Branchendetails anzeigen",
    pillarsEye:     "Warum ERHO",
    pillarsH2:      "Was wir in jede Partnerschaft einbringen",
    pillars: [
      { title: "Lieferkettensicherheit & Resilienz", body: "In einer Welt voller Zölle, Handelskonflikte und Logistikstörungen ist Ihre Lieferkette entweder ein Wettbewerbsvorteil oder eine Schwachstelle. Wir bauen Redundanz, Diversifikation und Transparenz in Ihre Komponentenbeschaffung ein." },
      { title: "Beschaffungsvereinfachung — Komplettpaket-Lösungen", body: "Ihr Beschaffungsteam sollte nicht 15 Lieferanten koordinieren müssen, um einen einzigen Wärmetauscher zu bauen. ERHO Industrietechnik bündelt Ihre Komponentenbeschaffung bei einem einzigen qualifizierten Partner — eine Bestellung, ein Qualitätssystem, ein Ansprechpartner." },
      { title: "Technisches Know-how & Qualitätsmanagement", body: "Wir sprechen die Sprache Ihrer Ingenieure und Ihrer Qualitätsabteilung. Wir prüfen Zeichnungen, hinterfragen Spezifikationen wenn wir Risiken sehen, empfehlen Werkstoffe und verwalten die EN-10204-Dokumentation von A bis Z." },
      { title: "Schnelle Lieferung dank Lager & Rohteilverfügbarkeit", body: "Unser strategisches Lager hält qualifizierte Rohlinge, Schmiedehalbzeuge und Stabstahlsortimente permanent auf Lager — bearbeitungsbereit und zertifiziert. Kürzere Lieferzeiten, weniger Kapitalbindung auf Ihrer Seite." },
    ],
    buEye:          "Unsere Geschäftsbereiche",
    buH2:           "Drei Kompetenzen. Eine Gruppe. Ein Gespräch.",
    buCta:          "Mehr erfahren",
    globalEye:      "Globale Beschaffung",
    globalH2:       "Globale Reichweite. Schweizer Standards.",
    globalP1:       "Wir beschaffen bei den besten Herstellern weltweit — und bringen europäische Qualitätsstandards in jedes Werk, mit dem wir zusammenarbeiten. Unsere Vor-Ort-QA-Präsenz bei globalen Lieferantenwerken bedeutet volle Verantwortlichkeit, unabhängig davon, wo die Komponente gefertigt wird.",
    globalP2:       "Wir wählen unsere Lieferanten mit Sorgfalt und bauen langfristige Beziehungen auf. Wir jagen nicht dem günstigsten Angebot nach — wir qualifizieren Partner, die unseren technischen und kaufmännischen Standards entsprechen.",
    stats: [
      { end: 3, suffix: "", label: "Geschäftsbereiche" },
      { end: 9, suffix: "+", label: "Bediente Marktsegmente" },
      { end: 20, suffix: "+", label: "Qualifizierte Lieferantenpartner" },
      { end: 3, suffix: "", label: "Standorte in Europa" },
      { end: 24, suffix: "h", label: "Reaktionszeit auf jede Anfrage" },
    ],
    sectorsEye:     "Endmärkte",
    sectorsH2:      "Alle Branchen, die wir bedienen",
    trustLabel:     "Vertraut von Beschaffungs- und Technikteams führender europäischer OEMs",
    ctaH2:          "Haben Sie einen Projektbedarf?",
    ctaSub:         "Teilen Sie Ihre Komponentenliste oder Ihr Zeichnungspaket mit uns. Wir prüfen es und melden uns innerhalb von 24 Stunden mit einem vollständigen Beschaffungsangebot.",
    ctaBtn:         "Gespräch beginnen",
  },
  en: {
    brand:          "ERHO Industry Solutions",
    heroH1a:        "One Partner.",
    heroH1b:        "The Complete Supply Chain.",
    heroSub:        "We understand your project. We manage the technical complexity. We deliver complete component sets — from a single source.",
    heroCta1:       "Contact our team",
    heroCta2:       "How we work",
    worldEye:       "The Environment",
    worldH2:        "A stable partner in a shifting world.",
    worldP1:        "Industrial procurement has rarely been as complex as today. Tariffs and trade policy reshape supply chains overnight. Asian manufacturers compete more aggressively on price. Regulatory requirements are tightening across every major market. A broad slowdown in industrial production is compressing margins industry-wide.",
    worldP2:        "Your suppliers feel all of this. So do you. The question is whether your supply chain is built to absorb the shock — or amplify it.",
    worldChips:     ["Tariffs & Trade Policy", "Asian Competition", "Regulatory Complexity", "Market Slowdown", "Currency Pressure"],
    helpEye:        "How we help",
    helpItems: [
      { title: "We stabilise your supply chain", body: "We build redundancy and diversification into your procurement from the start. When a supplier is knocked out by tariffs or trade restrictions, we have qualified alternatives ready." },
      { title: "We absorb market shocks", body: "Our global supplier network spans Europe, India and China. With on-site presence at key manufacturing locations, we absorb market volatility before it reaches your production line." },
      { title: "We reduce the cost of global sourcing", body: "We know the true total cost of components from every sourcing region — tariff impact, logistics, insurance, customs — and find the most cost-effective route to your specification." },
      { title: "We are on the ground", body: "On-site quality assurance, on-site logistics management, on-site regulatory compliance. We take on all the complexity of global sourcing — so you don't have to." },
      { title: "We manage end-to-end logistics", body: "Transport, customs documentation, import/export compliance, regulatory certifications — all coordinated by ERHO. One supplier, one shipment, one documentation package." },
    ],
    helpSummary:    (name: string) => `We are an <span class="text-gold font-semibold">integrated industrial supply specialist</span> — not a catalogue reseller and not a spot-buy broker. We understand your project, your assembly sequence and your quality requirements. We configure the complete component package. You focus on manufacturing.`,
    quoteText:      "By combining forging, casting and machining services with strategic warehousing and financing, we offer European OEMs something genuinely different — a single partner that understands the full project, manages all the technical complexity and delivers complete component sets from a trusted source.",
    boldStatements: ["We understand your project", "We manage the technical complexity", "We deliver complete sets", "We source globally, with on-site QA", "We finance and hold stock"],
    showcaseEye:    "Complete Package Solutions",
    showcaseH2:     "What a complete package looks like",
    showcaseSub:    "For every sector we serve, we don't deliver individual components — we deliver everything your team needs, from a single source.",
    showcaseLabel:  "ERHO Complete Package",
    showcaseDelivers: "What we deliver",
    showcaseCta:    "View sector details",
    pillarsEye:     "Why ERHO",
    pillarsH2:      "What we bring to every partnership",
    pillars: [
      { title: "Supply Chain Security & Resilience", body: "In a world of tariffs, trade conflicts and logistics disruptions, your supply chain is either a competitive advantage or a liability. We build redundancy, diversification and transparency into your component procurement." },
      { title: "Procurement Simplification — Complete Package Solutions", body: "Your procurement team shouldn't need to coordinate 15 suppliers to build a single heat exchanger. ERHO Industry Solutions consolidates your component sourcing with a single qualified partner — one order, one quality system, one point of contact." },
      { title: "Technical Expertise & Quality Management", body: "We speak the language of your engineers and your quality department. We review drawings, challenge specifications when we see risks, recommend materials and manage EN-10204 documentation end to end." },
      { title: "Fast Delivery Through Stock & Pre-Made Forgings", body: "Our strategic warehouse holds qualified blanks, forging semi-finished parts and bar stock permanently in stock — machining-ready and certified. Shorter lead times, less capital tied up on your side." },
    ],
    buEye:          "Our Business Units",
    buH2:           "Three competencies. One group. One conversation.",
    buCta:          "Learn more",
    globalEye:      "Global Sourcing",
    globalH2:       "Global reach. Swiss standards.",
    globalP1:       "We source from the best manufacturers worldwide — and bring European quality standards to every facility we work with. Our on-site QA presence at global supplier plants means full accountability, regardless of where the component is made.",
    globalP2:       "We select our suppliers carefully and build long-term relationships. We don't chase the cheapest quote — we qualify partners who meet our technical and commercial standards, then invest in long-term relationships built on trust, transparency and shared accountability.",
    stats: [
      { end: 3, suffix: "", label: "Business Units" },
      { end: 9, suffix: "+", label: "Market Segments Served" },
      { end: 20, suffix: "+", label: "Qualified Supplier Partners" },
      { end: 3, suffix: "", label: "Locations in Europe" },
      { end: 24, suffix: "h", label: "Response Time per Enquiry" },
    ],
    sectorsEye:     "End Markets",
    sectorsH2:      "All sectors we serve",
    trustLabel:     "Trusted by procurement and engineering teams at leading European OEMs",
    ctaH2:          "Have a project requirement?",
    ctaSub:         "Share your component list or drawing package. We'll review it and come back within 24 hours with a full sourcing proposal.",
    ctaBtn:         "Start a conversation",
  },
};

// ── Showcase data (German) — English version references same slugs ────────────
const showcase = [
  {
    slug: "heat-exchangers",
    image: "/images/AdobeStock_1944076883.jpeg",
    imageAlt: "Large drilled tube sheet in a forge",
    de: {
      name: "Prozess-Wärmetauscher",
      context: "Die Beschaffung von Wärmetauschern ist per se fragmentiert. Rohrplatten, Rohre, Trennwände, Stutzen und Flansche werden typischerweise von verschiedenen Speziallieferanten bezogen — jeder mit eigenen Lieferzeiten, Qualitätssystemen und Dokumentationsanforderungen.",
      components: [
        { name: "Rohrplatten", note: "vollständig bearbeitet, nach Zeichnung" },
        { name: "Rohre", note: "nahtlos, verschiedene Güten" },
        { name: "Trennwände", note: "geschmiedet oder aus Platte gefräst" },
        { name: "Stutzen", note: "geschmiedet, gedreht nach Spez." },
        { name: "Flansche", note: "EN 1092 / ANSI B16.5" },
        { name: "Zuganker & Abstandshalter", note: "nach Toleranz bearbeitet" },
      ],
      advantage: "Jede Komponente für Ihren Wärmetauscher — vollständig bearbeitet und zertifiziert, aus einer einzigen Bestellung.",
    },
    en: {
      name: "Process Heat Exchangers",
      context: "Heat exchanger procurement is inherently fragmented. Tube sheets, tubes, baffles, nozzles and flanges are typically sourced from different specialist suppliers — each with their own lead times, quality systems and documentation requirements.",
      components: [
        { name: "Tube Sheets", note: "fully machined, to drawing" },
        { name: "Tubes", note: "seamless, various grades" },
        { name: "Baffles", note: "forged or milled from plate" },
        { name: "Nozzles", note: "forged, turned to spec." },
        { name: "Flanges", note: "EN 1092 / ANSI B16.5" },
        { name: "Tie Rods & Spacers", note: "machined to tolerance" },
      ],
      advantage: "Every component for your heat exchanger — fully machined and certified, from a single order.",
    },
  },
  {
    slug: "valves-pipelines",
    image: "/images/AdobeStock_1934105316.jpeg",
    imageAlt: "Large machined ball valve body, mirror-finish surface",
    de: {
      name: "Armaturen & Armaturengruppen",
      context: "Die Beschaffung von Armaturen umfasst mehrere Präzisionskomponenten — Gehäuse, Deckel, Spindeln, Scheiben, Sitze und Flansche — jede mit spezifischen Werkstoff-, Toleranz- und Zertifizierungsanforderungen.",
      components: [
        { name: "Armaturengehäuse", note: "geschmiedet oder gegossen, API / EN" },
        { name: "Deckel", note: "Schmiedestahl, verschiedene Güten" },
        { name: "Spindeln", note: "präzisionsgedreht, gehärtet" },
        { name: "Scheiben & Sitze", note: "nach Toleranz bearbeitet" },
        { name: "Flansche", note: "Endanschlüsse, gesamtes Sortiment" },
        { name: "Schraubensätze", note: "werkstoffzertifizierte Verbindungsmittel" },
      ],
      advantage: "Alle Armaturenkomponenten aus einer Hand — bearbeitet, zertifiziert und montagefertig.",
    },
    en: {
      name: "Valves & Valve Assemblies",
      context: "Valve procurement involves multiple precision components — bodies, bonnets, stems, discs, seats and flanges — each with specific material, tolerance and certification requirements.",
      components: [
        { name: "Valve Bodies", note: "forged or cast, API / EN" },
        { name: "Bonnets", note: "forged steel, various grades" },
        { name: "Stems", note: "precision-turned, hardened" },
        { name: "Discs & Seats", note: "machined to tolerance" },
        { name: "Flanges", note: "end connections, full range" },
        { name: "Bolt Sets", note: "material-certified fasteners" },
      ],
      advantage: "All valve components from one source — machined, certified and assembly-ready.",
    },
  },
  {
    slug: "compressors-pumps",
    image: "/images/AdobeStock_1581156194.jpeg",
    imageAlt: "Twin-screw compressor rotors, precision machined",
    de: {
      name: "Kompressoren & Pumpen",
      context: "Die Beschaffung von Kompressoren und Pumpen umfasst ein breites Spektrum an Präzisionskomponenten — von gegossenen Gehäusen bis zu inneren Arbeitselementen.",
      components: [
        { name: "Gussgehäuse", note: "Sand-/Feinguss, bearbeitet" },
        { name: "Zylinderlaufbuchsen", note: "präzisionsgespindelt" },
        { name: "Kolben & Stangen", note: "geschmiedet, gedreht, gehärtet" },
        { name: "Schraubenrotoren", note: "präzisionsgefräst" },
        { name: "Laufräder", note: "gegossen oder geschmiedet, gewuchtet" },
        { name: "Wellen & Kupplungen", note: "geschmiedet, geschliffen" },
      ],
      advantage: "Vom Gussgehäuse bis zu den inneren Arbeitselementen — den vollständigen Komponentensatz, nach Ihrer Zeichnung bearbeitet.",
    },
    en: {
      name: "Compressors & Pumps",
      context: "Compressor and pump procurement spans a wide range of precision components — from cast housings to internal working elements.",
      components: [
        { name: "Cast Housings", note: "sand/investment cast, machined" },
        { name: "Cylinder Liners", note: "precision bored" },
        { name: "Pistons & Rods", note: "forged, turned, hardened" },
        { name: "Screw Rotors", note: "precision milled" },
        { name: "Impellers", note: "cast or forged, balanced" },
        { name: "Shafts & Couplings", note: "forged, ground" },
      ],
      advantage: "From cast housing to internal working elements — the complete component set, machined to your drawing.",
    },
  },
];

// ── Business units (locale-agnostic names with locale descriptions) ────────────
const businessUnits = [
  {
    name: "Heavy Industry",
    href: "/business-units/heavy-industry",
    accent: "border-gold",
    accentText: "text-gold",
    image: "/images/AdobeStock_1944076883.jpeg",
    desc: {
      de: "Beschaffung und Lieferung von Freiformschmiedestücken, nahtlosen Ringen, Gussteilen und Rohteilen aus qualifizierten europäischen und globalen Lieferantennetzwerken.",
      en: "Sourcing and delivery of open-die forgings, seamless rings, castings and blanks from qualified European and global supplier networks.",
    },
    services: {
      de: ["Freiformschmiedestücke", "Ringwalzen", "Sand- & Feinguss", "EN-10204-3.1/3.2-Dokumentation"],
      en: ["Open-Die Forgings", "Ring Rolling", "Sand & Investment Casting", "EN-10204-3.1/3.2 Documentation"],
    },
  },
  {
    name: "Machining Services",
    href: "/business-units/machining-services",
    accent: "border-steel",
    accentText: "text-steel",
    image: "/images/AdobeStock_Machining.jpeg",
    desc: {
      de: "CNC-Präzisionszerspanung von Schmiedestücken, Gussteilen und Stabstahl nach Ihrer exakten Zeichnung — fertige Komponenten für Ihre Montagelinie.",
      en: "CNC precision machining of forgings, castings and bar stock to your exact drawing — finished components for your assembly line.",
    },
    services: {
      de: ["CNC-Drehen bis ⌀2.500 mm", "Fräsen, Bohren & Schleifen", "Prototyp bis Serie", "Maßberichte & KMM"],
      en: ["CNC Turning up to ⌀2,500 mm", "Milling, Drilling & Grinding", "Prototype to Series", "Dimensional Reports & CMM"],
    },
  },
  {
    name: "Stock & Finance",
    href: "/business-units/stock-finance",
    accent: "border-warm-gold",
    accentText: "text-warm-gold",
    image: "/images/Forging_Stock.jpeg",
    desc: {
      de: "Strategische Lagerhaltung, Konsignationslager und Beschaffungsfinanzierung — damit Ihr Kapital frei bleibt und Ihre Lieferkette nie zum Stillstand kommt.",
      en: "Strategic warehousing, consignment stock and procurement financing — so your capital stays free and your supply chain never stops.",
    },
    services: {
      de: ["Strategisches Lager: Flansche & Stabstahl", "Konsignationslager", "Beschaffungsfinanzierung", "Zahlungsaufschubstrukturen"],
      en: ["Strategic Stock: Flanges & Bar Stock", "Consignment Warehousing", "Procurement Financing", "Deferred Payment Structures"],
    },
  },
];

const trustBrands = ["Voith", "Siemens", "KraussMaffei", "Andritz", "Rheinmetall", "Kumera", "Coperion", "Schöller Bleckmann"];

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const t = pageT[locale as Locale] ?? pageT.de;
  const isEn = locale === "en";
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
        <HeroCarousel
          slides={[
            { src: "/images/AdobeStock_670995999.jpeg" },
            { src: "/images/AdobeStock_827330529.jpeg", objectPosition: "center 40%" },
            { src: "/images/AdobeStock_1924204614.jpeg", objectPosition: "left center" },
          ]}
          overlayOpacity={70}
          interval={7000}
          showControls={false}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-6">{t.brand}</p>
          <h1 className="font-display text-white text-5xl lg:text-[72px] font-semibold max-w-3xl leading-[1.07] tracking-tight">
            {t.heroH1a}{" "}
            <span className="text-gold">{t.heroH1b}</span>
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg lg:text-xl max-w-xl leading-relaxed">{t.heroSub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={p("/contact")} className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200">
              {t.heroCta1} <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link href={p("/solutions")} className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-body font-medium text-sm rounded-sm hover:border-white/50 transition-colors duration-200">
              {t.heroCta2}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stable Partner / Shifting World ──────────────────────────────── */}
      <section className="bg-navy border-t border-white/8 py-20 lg:py-28" aria-labelledby="world-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.worldEye}</p>
              <h2 id="world-heading" className="font-display text-white text-3xl lg:text-4xl font-semibold leading-tight">{t.worldH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-6 font-body text-white/60 text-base leading-relaxed">{t.worldP1}</p>
              <p className="mt-4 font-body text-white/60 text-base leading-relaxed">{t.worldP2}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {t.worldChips.map((chip) => (
                  <span key={chip} className="font-mono text-[10px] text-white/50 border border-white/15 rounded-sm px-2.5 py-1">{chip}</span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-5">{t.helpEye}</p>
              <ul className="space-y-5" role="list">
                {t.helpItems.map(({ title, body }) => (
                  <li key={title} className="flex gap-3">
                    <span className="text-gold shrink-0 mt-1 text-lg leading-none" aria-hidden="true">·</span>
                    <div>
                      <p className="font-body text-white text-sm font-semibold mb-1">{title}</p>
                      <p className="font-body text-white/50 text-sm leading-relaxed">{body}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="font-body text-white/65 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.helpSummary(t.brand) }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Strategic Statement Band ──────────────────────────────────────── */}
      <section className="bg-off-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <blockquote className="font-display text-navy text-2xl lg:text-3xl font-semibold leading-snug max-w-4xl mx-auto text-center">
              &ldquo;{t.quoteText}&rdquo;
            </blockquote>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 justify-center">
              {t.boldStatements.map((s) => (
                <p key={s} className="font-body text-navy text-sm font-semibold tracking-wide">{s}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Complete Package Showcase ─────────────────────────────────────── */}
      <section aria-labelledby="showcase-heading">
        <div className="bg-white py-12 lg:py-14">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.showcaseEye}</p>
              <h2 id="showcase-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.showcaseH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-4 font-body text-mid-gray text-base max-w-2xl leading-relaxed">{t.showcaseSub}</p>
            </ScrollReveal>
          </div>
        </div>

        {showcase.map(({ slug, image, imageAlt, de, en }, i) => {
          const item = isEn ? en : de;
          const isNavy = i % 2 === 0;
          const isDark = isNavy || !!image;
          return (
            <div key={slug} className={`relative overflow-hidden min-h-96 ${image ? "" : isNavy ? "bg-navy" : "bg-white border-t border-gray-100"}`}>
              {image && (
                <>
                  <Image src={image} alt={imageAlt ?? ""} fill className="object-cover object-center" sizes="100vw" />
                  <div className="absolute inset-0 bg-[#1A2540]/72" aria-hidden="true" />
                </>
              )}
              <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
                <ScrollReveal>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
                    <div className="lg:col-span-3">
                      <p className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${isDark ? "text-gold/80" : "text-mid-gray/50"}`}>{t.showcaseLabel}</p>
                      <h3 className={`font-display text-2xl lg:text-3xl font-semibold mb-4 leading-snug ${isDark ? "text-white" : "text-navy"}`}>{item.name}</h3>
                      <p className={`font-body text-base leading-relaxed mb-6 ${isDark ? "text-white/80" : "text-mid-gray"}`}>{item.context}</p>
                      <p className={`font-body text-sm font-semibold leading-relaxed mb-6 ${isDark ? "text-gold" : "text-navy"}`}>&ldquo;{item.advantage}&rdquo;</p>
                      <Link href={p(`/sectors/${slug}`)} className={`inline-flex items-center gap-1.5 font-body text-sm font-medium transition-colors duration-200 ${isDark ? "text-gold hover:text-gold/80" : "text-navy hover:text-gold"}`}>
                        {t.showcaseCta} <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="lg:col-span-2">
                      <p className={`font-mono text-[10px] uppercase tracking-widest mb-3 ${isDark ? "text-gold/80" : "text-mid-gray/50"}`}>{t.showcaseDelivers}</p>
                      <div className="rounded-sm p-5 bg-white/8 border border-white/15">
                        <ul className="space-y-2.5" role="list">
                          {item.components.map(({ name: cName, note }) => (
                            <li key={cName} className="font-mono text-xs flex gap-3">
                              <span className="shrink-0 w-32 text-gold">{cName}</span>
                              <span className="text-white/65">— {note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          );
        })}
      </section>

      {/* ── Three Pillars ─────────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="pillars-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.pillarsEye}</p>
            <h2 id="pillars-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.pillarsH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.pillars.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="border-t-2 border-gold pt-6 h-full">
                  <h3 className="font-display text-navy text-lg font-semibold mb-3 leading-snug">{title}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Three BU Cards ────────────────────────────────────────────────── */}
      <section className="bg-off-white py-20 lg:py-24" aria-labelledby="bu-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.buEye}</p>
            <h2 id="bu-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.buH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {businessUnits.map(({ name, href, accent, accentText, image, desc, services }, i) => (
              <ScrollReveal key={name} delay={i * 80}>
                <div className={`relative rounded-sm border-t-4 ${accent} overflow-hidden h-full flex flex-col`}>
                  <Image src={image} alt="" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-[#1A2540]/70" aria-hidden="true" />
                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/35 mb-1">ERHO</p>
                    <h3 className={`font-display text-lg font-semibold mb-3 ${accentText}`}>{name}</h3>
                    <p className="font-body text-white/65 text-sm leading-relaxed mb-4 flex-1">{desc[locale as Locale] ?? desc.de}</p>
                    <ul className="space-y-1 mb-5" role="list">
                      {(services[locale as Locale] ?? services.de).map((s) => (
                        <li key={s} className="font-body text-xs flex items-start gap-1.5">
                          <span className={accentText} aria-hidden="true">·</span>
                          <span className="text-white/50">{s}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={p(href)} className={`font-body text-xs font-medium ${accentText} hover:opacity-75 transition-opacity duration-200 inline-flex items-center gap-1`}>
                      {t.buCta} <ArrowRight size={11} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Sourcing Statement ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 lg:py-20" aria-labelledby="global-heading">
        <Image src="/images/AdobeStock_390654783.jpeg" alt="" fill className="object-cover" style={{ objectPosition: "center 30%" }} sizes="100vw" />
        <div className="absolute inset-0 bg-[#1A2540]/75" aria-hidden="true" />
        <div className="absolute inset-0 hero-texture opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.globalEye}</p>
              <h2 id="global-heading" className="font-display text-white text-2xl lg:text-3xl font-semibold">{t.globalH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="space-y-4 font-body text-white/60 text-base leading-relaxed">
                <p>{t.globalP1}</p>
                <p>{t.globalP2}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────────── */}
      <section className="bg-navy border-t border-white/8 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {t.stats.map(({ end, suffix, label }) => (
              <div key={label}>
                <p className="font-display text-gold text-4xl lg:text-5xl font-semibold">
                  <CountUp end={end} suffix={suffix} />
                </p>
                <p className="font-body text-white/45 text-sm mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Sectors Strip ─────────────────────────────────────────────── */}
      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="sectors-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.sectorsEye}</p>
            <h2 id="sectors-heading" className="font-display text-navy text-2xl lg:text-3xl font-semibold mb-2">{t.sectorsH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sectors.map(({ slug, name, tagline, nameEn, taglineEn }, i) => (
              <ScrollReveal key={slug} delay={i * 40}>
                <Link href={p(`/sectors/${slug}`)} className="group flex items-start justify-between gap-3 bg-white border border-gray-100 rounded-sm p-5 hover:border-gold/35 transition-all duration-200">
                  <div>
                    <h3 className="font-display text-navy text-base font-semibold mb-1 group-hover:text-gold transition-colors duration-200">
                      {isEn ? (nameEn ?? name) : name}
                    </h3>
                    <p className="font-body text-mid-gray text-xs leading-relaxed">{isEn ? (taglineEn ?? tagline) : tagline}</p>
                  </div>
                  <ArrowRight size={14} className="text-gold shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Trust Band ─────────────────────────────────────────────── */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-mid-gray/60 text-xs text-center mb-6 tracking-wider uppercase">{t.trustLabel}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            {trustBrands.map((brand) => (
              <span key={brand} className="font-display text-navy/30 text-sm font-semibold tracking-wide">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="bg-navy hero-texture py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-white text-3xl font-semibold">{t.ctaH2}</h2>
            <p className="mt-4 font-body text-white/60 text-base max-w-lg mx-auto leading-relaxed">{t.ctaSub}</p>
            <Link href={p("/contact")} className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200">
              {t.ctaBtn} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
