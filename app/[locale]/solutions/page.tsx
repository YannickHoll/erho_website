import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "de"
    ? { title: "Lösungen — So arbeiten wir", description: "Drei integrierte Geschäftsbereiche. Eine Partnerschaft." }
    : { title: "Solutions — How we work", description: "Three integrated business units. One partnership." };
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

const pageT = {
  de: {
    eyebrow: "So arbeiten wir",
    h1a: "Wir liefern nicht nur Teile.",
    h1b: "Wir lösen Beschaffungsprobleme.",
    heroSub: "Drei integrierte Geschäftsbereiche. Eine Partnerschaft. Ein vollständiges Paket aus einer Hand.",
    modelEye: "Das integrierte Modell",
    modelH2: "Drei Geschäftsbereiche. Ein Gespräch.",
    modelTogether: "Zusammen:",
    modelSummary: "Eine Bestellung · Ein Qualitätssystem · Ein Ansprechpartner · Globale Reichweite mit Vor-Ort-QA · Eingebaute Lieferkettenresilienz",
    buCta: "Mehr erfahren",
    processEye: "Der Prozess",
    processH2: "Von der Anforderung zum Komplettpaket",
    servicesEye: "Was enthalten ist",
    servicesH2: "Alles, was Sie brauchen. Ein Partner.",
    compEye: "Das Argument für Konsolidierung",
    compH2: "Warum ein Partner gewinnt",
    compHeader1: "Fragmentiertes Mehrlieferanten-Modell",
    compHeader2: "Mit ERHO arbeiten",
    ctaH2: "Bereit, Ihre Lieferkette zu konsolidieren?",
    ctaSub: "Teilen Sie Ihre Komponentenliste oder Ihr Zeichnungspaket mit uns. Wir melden uns innerhalb von 24 Stunden mit einem vollständigen Beschaffungsangebot.",
    ctaBtn: "Gespräch beginnen",
    buCards: [
      { name: "Heavy Industry", desc: "Beschafft und liefert geschmiedete, gegossene und vorbearbeitete Rohteile aus qualifizierten europäischen und globalen Netzwerken.", href: "/business-units/heavy-industry" },
      { name: "Machining Services", desc: "Zerspant Schmiedestücke, Gussteile und Stabstahl nach Ihrer exakten Zeichnung — fertige Komponenten, montagefertig.", href: "/business-units/machining-services" },
      { name: "Stock & Finance", desc: "Hält strategische Bestände und Konsignationslager und finanziert Beschaffung — damit Ihr Kapital frei bleibt.", href: "/business-units/stock-finance" },
    ],
    steps: [
      { num: "01", title: "Teilen Sie Ihren Bedarf mit", body: "Zeichnungspaket, Komponentenliste, Werkstoffspezifikationen, Zeitplan — schicken Sie uns, was Sie haben. Unvollständig ist in Ordnung. Wir stellen die richtigen Fragen." },
      { num: "02", title: "Wir konfigurieren die Lösung", body: "Über alle drei Geschäftsbereiche: Was muss beschafft werden, was muss zerspant werden, was kann aus dem Strategielager kommen. Wir teilen Ihnen mit, was wir liefern können, von wo und wann." },
      { num: "03", title: "Wir beschaffen und qualifizieren", body: "Aus unserem auditierten globalen Lieferantennetzwerk, mit Vor-Ort-QA an der Quelle. Europäische Verantwortlichkeit, unabhängig davon, wo die Komponente gefertigt wird." },
      { num: "04", title: "Wir managen Qualität von A bis Z", body: "Prüfpläne, EN-10204-Dokumentation, Drittpartei-Inspektion bei Bedarf. Ein Qualitätssystem über die gesamte Lieferkette." },
      { num: "05", title: "Wir liefern das Komplettpaket", body: "Eine Lieferung, ein konsolidiertes Zertifikatspaket, fertig für Ihre Montagehalle. Oder auf Konsignation gelagert — Sie rufen ab, wenn Sie es brauchen." },
    ],
    services: [
      { bu: "Heavy Industry", accent: "text-gold", title: "Technische Prüfung", body: "Zeichnungsprüfung, Werkstoffempfehlungen, Spezifikationsunterstützung. Wir markieren Risiken, bevor sie zu Produktionsproblemen werden." },
      { bu: "Heavy Industry", accent: "text-gold", title: "Lieferantenbeschaffung", body: "Zugang zu 20+ qualifizierten Schmiede-, Guss- und Zerspanungspartnern in Europa und weltweit, mit Vor-Ort-QA-Präsenz." },
      { bu: "Machining Services", accent: "text-steel", title: "Präzisionszerspanung", body: "CNC-Drehen, Fräsen, Bohren und Schleifen nach Ihrer exakten Zeichnung. Prototyp bis Serienfertigung." },
      { bu: "Heavy Industry", accent: "text-gold", title: "Qualitätsmanagement", body: "Prüfplan-Erstellung, Prozessinspektion, EN-10204-3.1/3.2-Zertifikate, Drittpartei-Abnahmeprüfung." },
      { bu: "Stock & Finance", accent: "text-warm-gold", title: "Lager & Finanzierung", body: "Strategisches Lager, Konsignationslager und Zahlungsaufschubstrukturen. Ihr Kapital bleibt frei." },
      { bu: "Alle Bereiche", accent: "text-gold", title: "Vollständige Dokumentation", body: "Werkstoffprüfzeugnisse, Schmelzenzertifikate, ZfP-Berichte, Masshaltigkeitsprüfung — vollständige Rückverfolgbarkeit von der Schmelze bis zur Lieferung." },
    ],
    comparison: [
      { label: "Zu verwaltende Lieferanten", multi: "10–20+", erho: "1" },
      { label: "Bestellungen pro Komponentenfamilie", multi: "Mehrere", erho: "1" },
      { label: "Zu überwachende Qualitätssysteme", multi: "Mehrere", erho: "1" },
      { label: "Zertifikatspakete", multi: "Eines pro Lieferant", erho: "Einzelnes konsolidiertes Paket" },
      { label: "Beschaffungs- + Zerspanungskoordination", multi: "Ihre Verantwortung", erho: "Von ERHO übernommen" },
      { label: "Globale Beschaffungs-QA", multi: "Ihre Verantwortung", erho: "Vor-Ort-QA durch ERHO" },
      { label: "Technischer Eskalationsweg", multi: "Fragmentiert", erho: "Einzelner Punkt" },
      { label: "Lagerrisiko", multi: "In Ihrer Bilanz", erho: "Geteilt oder übertragen" },
      { label: "Lieferkettenredundanz", multi: "Ihr Problem", erho: "Eingebaut" },
    ],
  },
  en: {
    eyebrow: "How we work",
    h1a: "We don't just deliver parts.",
    h1b: "We solve procurement problems.",
    heroSub: "Three integrated business units. One partnership. One complete package from a single source.",
    modelEye: "The integrated model",
    modelH2: "Three business units. One conversation.",
    modelTogether: "Together:",
    modelSummary: "One order · One quality system · One point of contact · Global reach with on-site QA · Built-in supply chain resilience",
    buCta: "Learn more",
    processEye: "The process",
    processH2: "From requirement to complete package",
    servicesEye: "What's included",
    servicesH2: "Everything you need. One partner.",
    compEye: "The case for consolidation",
    compH2: "Why one partner wins",
    compHeader1: "Fragmented multi-supplier model",
    compHeader2: "Working with ERHO",
    ctaH2: "Ready to consolidate your supply chain?",
    ctaSub: "Share your component list or drawing package. We'll come back within 24 hours with a full sourcing proposal.",
    ctaBtn: "Start a conversation",
    buCards: [
      { name: "Heavy Industry", desc: "Sources and delivers forged, cast and pre-machined blanks from qualified European and global networks, with on-site QA at source.", href: "/business-units/heavy-industry" },
      { name: "Machining Services", desc: "Machines forgings, castings and bar stock to your exact drawing — finished components, assembly-ready.", href: "/business-units/machining-services" },
      { name: "Stock & Finance", desc: "Holds strategic stock and consignment inventory, and finances procurement — so your capital stays free.", href: "/business-units/stock-finance" },
    ],
    steps: [
      { num: "01", title: "Share your requirement", body: "Drawing package, component list, material specifications, timeline — send us what you have. Incomplete is fine. We ask the right questions." },
      { num: "02", title: "We configure the solution", body: "Across all three business units: what needs sourcing, what needs machining, what can come from strategic stock. We tell you what we can deliver, from where and when." },
      { num: "03", title: "We source and qualify", body: "From our audited global supplier network, with on-site QA at source. European accountability, regardless of where the component is made." },
      { num: "04", title: "We manage quality end to end", body: "Inspection plans, EN-10204 documentation, third-party inspection as required. One quality system across the entire supply chain." },
      { num: "05", title: "We deliver the complete package", body: "One shipment, one consolidated certificate package, ready for your assembly hall. Or held on consignment — you call it off when you need it." },
    ],
    services: [
      { bu: "Heavy Industry", accent: "text-gold", title: "Technical Review", body: "Drawing review, material recommendations, specification support. We flag risks before they become production problems." },
      { bu: "Heavy Industry", accent: "text-gold", title: "Supplier Sourcing", body: "Access to 20+ qualified forging, casting and machining partners in Europe and globally, with on-site QA presence." },
      { bu: "Machining Services", accent: "text-steel", title: "Precision Machining", body: "CNC turning, milling, drilling and grinding to your exact drawing. Prototype to series production." },
      { bu: "Heavy Industry", accent: "text-gold", title: "Quality Management", body: "Inspection plan creation, in-process inspection, EN-10204-3.1/3.2 certificates, third-party final inspection." },
      { bu: "Stock & Finance", accent: "text-warm-gold", title: "Stock & Finance", body: "Strategic warehousing, consignment stock and deferred payment structures. Your capital stays free." },
      { bu: "All Units", accent: "text-gold", title: "Complete Documentation", body: "Material test certificates, heat certificates, NDE reports, dimensional inspection — full traceability from melt to delivery." },
    ],
    comparison: [
      { label: "Suppliers to manage", multi: "10–20+", erho: "1" },
      { label: "Orders per component family", multi: "Multiple", erho: "1" },
      { label: "Quality systems to monitor", multi: "Multiple", erho: "1" },
      { label: "Certificate packages", multi: "One per supplier", erho: "Single consolidated package" },
      { label: "Sourcing + machining coordination", multi: "Your responsibility", erho: "Handled by ERHO" },
      { label: "Global sourcing QA", multi: "Your responsibility", erho: "On-site QA by ERHO" },
      { label: "Technical escalation path", multi: "Fragmented", erho: "Single point" },
      { label: "Stock risk", multi: "On your balance sheet", erho: "Shared or transferred" },
      { label: "Supply chain redundancy", multi: "Your problem", erho: "Built in" },
    ],
  },
};

const buAccents = [
  { accent: "border-gold", accentText: "text-gold" },
  { accent: "border-steel", accentText: "text-steel" },
  { accent: "border-warm-gold", accentText: "text-warm-gold" },
];

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params;
  const t = pageT[locale as Locale] ?? pageT.de;
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">{t.eyebrow}</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            {t.h1a} <span className="text-gold">{t.h1b}</span>
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">{t.heroSub}</p>
        </div>
      </section>

      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="model-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.modelEye}</p>
            <h2 id="model-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.modelH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {t.buCards.map(({ name, desc, href }, i) => (
                <div key={name} className={`bg-white rounded-sm border-t-4 ${buAccents[i].accent} p-6`}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-mid-gray/45 mb-1">ERHO</p>
                  <h3 className={`font-display text-lg font-semibold mb-3 ${buAccents[i].accentText}`}>{name}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed mb-4">{desc}</p>
                  <Link href={p(href)} className={`font-body text-xs font-medium ${buAccents[i].accentText} hover:opacity-75 transition-opacity duration-200 inline-flex items-center gap-1`}>
                    {t.buCta} <ArrowRight size={11} aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-navy/5 border border-navy/10 rounded-sm p-5 text-center">
              <p className="font-body text-mid-gray text-sm">
                <strong className="text-navy">{t.modelTogether}</strong> {t.modelSummary}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.processEye}</p>
            <h2 id="process-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.processH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 hidden lg:grid grid-cols-5 gap-0">
            {t.steps.map(({ num, title, body }, i) => (
              <ScrollReveal key={num} delay={i * 70}>
                <div className="relative pr-6">
                  {i < t.steps.length - 1 && <div className="absolute top-5 left-[calc(2rem+6px)] right-0 h-px bg-gold/20" aria-hidden="true" />}
                  <div className="relative z-10 w-10 h-10 bg-navy border border-gold/35 rounded-sm flex items-center justify-center mb-4">
                    <span className="font-mono text-gold text-xs font-medium">{num}</span>
                  </div>
                  <h3 className="font-display text-navy text-base font-semibold mb-2 leading-snug">{title}</h3>
                  <p className="font-body text-mid-gray text-xs leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 lg:hidden space-y-0">
            {t.steps.map(({ num, title, body }, i) => (
              <ScrollReveal key={num} delay={i * 60}>
                <div className="flex gap-5 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-navy border border-gold/35 rounded-sm flex items-center justify-center shrink-0">
                      <span className="font-mono text-gold text-xs font-medium">{num}</span>
                    </div>
                    {i < t.steps.length - 1 && <div className="flex-1 w-px bg-gold/20 mt-2" aria-hidden="true" />}
                  </div>
                  <div className="pt-1.5 pb-2">
                    <h3 className="font-display text-navy text-base font-semibold mb-1.5 leading-snug">{title}</h3>
                    <p className="font-body text-mid-gray text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.servicesEye}</p>
            <h2 id="services-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.servicesH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.map(({ bu, accent, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 65}>
                <div className="bg-white border border-gray-100 rounded-sm p-6 h-full hover:border-gold/25 transition-colors duration-200">
                  <p className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${accent}`}>{bu}</p>
                  <h3 className="font-display text-navy text-lg font-semibold mb-3">{title}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28" aria-labelledby="comparison-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.compEye}</p>
            <h2 id="comparison-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.compH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-10">
            <div className="overflow-x-auto rounded-sm border border-gray-100">
              <table className="w-full min-w-[580px]">
                <thead>
                  <tr>
                    <th scope="col" className="text-left font-body text-xs text-mid-gray font-medium px-5 py-3.5 bg-white border-b border-gray-100 w-[40%]" />
                    <th scope="col" className="text-left font-body text-xs text-mid-gray font-medium px-5 py-3.5 bg-white border-b border-gray-100">{t.compHeader1}</th>
                    <th scope="col" className="text-left font-body text-xs text-white font-semibold px-5 py-3.5 bg-navy border-b border-navy">{t.compHeader2}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.comparison.map(({ label, multi, erho }, i) => (
                    <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-off-white/60"}>
                      <td className="font-body text-dark-text text-sm font-medium px-5 py-3.5 border-b border-gray-100">{label}</td>
                      <td className="font-body text-mid-gray text-sm px-5 py-3.5 border-b border-gray-100">{multi}</td>
                      <td className="font-body text-sm font-semibold text-navy px-5 py-3.5 border-b border-navy/8 bg-navy/5">{erho}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy hero-texture py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-white text-3xl font-semibold">{t.ctaH2}</h2>
            <p className="mt-4 font-body text-white/60 text-base max-w-md mx-auto leading-relaxed">{t.ctaSub}</p>
            <Link href={p("/contact")} className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200">
              {t.ctaBtn} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
