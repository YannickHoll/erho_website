import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Lösungen — So arbeiten wir",
  description:
    "ERHO Industry Solutions integriert Heavy Industry, Machining Services und Stock & Finance in eine einzige Beschaffungspartnerschaft. Eine Bestellung, ein Qualitätssystem, ein Ansprechpartner.",
};

const steps = [
  {
    num: "01",
    title: "Teilen Sie Ihren Bedarf mit",
    body: "Zeichnungspaket, Komponentenliste, Werkstoffspezifikationen, Zeitplan — schicken Sie uns, was Sie haben. Unvollständig ist in Ordnung. Wir stellen die richtigen Fragen.",
  },
  {
    num: "02",
    title: "Wir konfigurieren die Lösung",
    body: "Über alle drei Geschäftsbereiche: Was muss beschafft werden (Heavy Industry), was muss zerspant werden (Machining Services), was kann aus dem Strategielager kommen. Wir teilen Ihnen mit, was wir liefern können, von wo und wann.",
  },
  {
    num: "03",
    title: "Wir beschaffen und qualifizieren",
    body: "Aus unserem auditierten globalen Lieferantennetzwerk, mit Vor-Ort-QA an der Quelle. Europäische Verantwortlichkeit, unabhängig davon, wo die Komponente gefertigt wird.",
  },
  {
    num: "04",
    title: "Wir managen Qualität von A bis Z",
    body: "Prüfpläne, EN-10204-Dokumentation, Drittpartei-Inspektion bei Bedarf. Ein Qualitätssystem über die gesamte Lieferkette — nicht eines pro Lieferant.",
  },
  {
    num: "05",
    title: "Wir liefern das Komplettpaket",
    body: "Eine Lieferung, ein konsolidiertes Zertifikatspaket, fertig für Ihre Montagehalle. Oder auf Konsignation über Stock & Finance gelagert — Sie rufen ab, wenn Sie es brauchen.",
  },
];

const services = [
  { bu: "Heavy Industry", accent: "text-gold", title: "Technische Prüfung", body: "Zeichnungsprüfung, Werkstoffempfehlungen, Spezifikationsunterstützung. Wir markieren Risiken, bevor sie zu Produktionsproblemen werden." },
  { bu: "Heavy Industry", accent: "text-gold", title: "Lieferantenbeschaffung", body: "Zugang zu 20+ qualifizierten Schmiede-, Guss- und Zerspanungspartnern in Europa und weltweit, mit Vor-Ort-QA-Präsenz." },
  { bu: "Machining Services", accent: "text-steel", title: "Präzisionszerspanung", body: "CNC-Drehen, Fräsen, Bohren und Schleifen nach Ihrer exakten Zeichnung. Prototyp bis Serienfertigung." },
  { bu: "Heavy Industry", accent: "text-gold", title: "Qualitätsmanagement", body: "Prüfplan-Erstellung, Prozessinspektion, EN-10204-3.1/3.2-Zertifikate, Drittpartei-Abnahmeprüfung." },
  { bu: "Stock & Finance", accent: "text-warm-gold", title: "Lager & Finanzierung", body: "Strategisches Lager, Konsignationslager und Zahlungsaufschubstrukturen. Ihr Kapital bleibt frei." },
  { bu: "Alle Bereiche", accent: "text-gold", title: "Vollständige Dokumentation", body: "Werkstoffprüfzeugnisse, Schmelzenzertifikate, ZfP-Berichte, Masshaltigkeitsprüfung — vollständige Rückverfolgbarkeit von der Schmelze bis zur Lieferung." },
];

const comparisonRows = [
  { label: "Zu verwaltende Lieferanten", multi: "10–20+", erho: "1" },
  { label: "Bestellungen pro Komponentenfamilie", multi: "Mehrere", erho: "1" },
  { label: "Zu überwachende Qualitätssysteme", multi: "Mehrere", erho: "1" },
  { label: "Zertifikatspakete", multi: "Eines pro Lieferant", erho: "Einzelnes konsolidiertes Paket" },
  { label: "Beschaffungs- + Zerspanungskoordination", multi: "Ihre Verantwortung", erho: "Von ERHO übernommen" },
  { label: "Globale Beschaffungs-QA", multi: "Ihre Verantwortung", erho: "Vor-Ort-QA durch ERHO" },
  { label: "Technischer Eskalationsweg", multi: "Fragmentiert", erho: "Einzelner Punkt" },
  { label: "Lagerrisiko", multi: "In Ihrer Bilanz", erho: "Geteilt oder übertragen" },
  { label: "Lieferkettenredundanz", multi: "Ihr Problem", erho: "Eingebaut" },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">So arbeiten wir</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Wir liefern nicht nur Teile.{" "}
            <span className="text-gold">Wir lösen Beschaffungsprobleme.</span>
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">
            Drei integrierte Geschäftsbereiche. Eine Partnerschaft. Ein vollständiges Paket aus einer Hand.
          </p>
        </div>
      </section>

      {/* Integrated model — three BUs */}
      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="model-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">Das integrierte Modell</p>
            <h2 id="model-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Drei Geschäftsbereiche. Ein Gespräch.
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { name: "Heavy Industry", desc: "Beschafft und liefert geschmiedete, gegossene und vorbearbeitete Rohteile aus qualifizierten europäischen und globalen Netzwerken — mit Vor-Ort-QA an der Quelle.", accent: "border-gold", accentText: "text-gold", href: "/business-units/heavy-industry" },
                { name: "Machining Services", desc: "Zerspant Schmiedestücke, Gussteile und Stabstahl nach Ihrer exakten Zeichnung — fertige Komponenten, montagefertig.", accent: "border-steel", accentText: "text-steel", href: "/business-units/machining-services" },
                { name: "Stock & Finance", desc: "Hält strategische Bestände und Konsignationslager und finanziert Beschaffung — damit Ihr Kapital frei bleibt.", accent: "border-warm-gold", accentText: "text-warm-gold", href: "/business-units/stock-finance" },
              ].map(({ name, desc, accent, accentText, href }) => (
                <div key={name} className={`bg-white rounded-sm border-t-4 ${accent} p-6`}>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-mid-gray/45 mb-1">ERHO</p>
                  <h3 className={`font-display text-lg font-semibold mb-3 ${accentText}`}>{name}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed mb-4">{desc}</p>
                  <Link href={href} className={`font-body text-xs font-medium ${accentText} hover:opacity-75 transition-opacity duration-200 inline-flex items-center gap-1`}>
                    Mehr erfahren <ArrowRight size={11} aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-4 bg-navy/5 border border-navy/10 rounded-sm p-5 text-center">
              <p className="font-body text-mid-gray text-sm">
                <strong className="text-navy">Zusammen:</strong> Eine Bestellung · Ein Qualitätssystem · Ein Ansprechpartner · Globale Reichweite mit Vor-Ort-QA · Eingebaute Lieferkettenresilienz
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process flow */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">Der Prozess</p>
            <h2 id="process-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Von der Anforderung zum Komplettpaket
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>

          {/* Desktop */}
          <div className="mt-12 hidden lg:grid grid-cols-5 gap-0">
            {steps.map(({ num, title, body }, i) => (
              <ScrollReveal key={num} delay={i * 70}>
                <div className="relative pr-6">
                  {i < steps.length - 1 && (
                    <div className="absolute top-5 left-[calc(2rem+6px)] right-0 h-px bg-gold/20" aria-hidden="true" />
                  )}
                  <div className="relative z-10 w-10 h-10 bg-navy border border-gold/35 rounded-sm flex items-center justify-center mb-4">
                    <span className="font-mono text-gold text-xs font-medium">{num}</span>
                  </div>
                  <h3 className="font-display text-navy text-base font-semibold mb-2 leading-snug">{title}</h3>
                  <p className="font-body text-mid-gray text-xs leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Mobile */}
          <div className="mt-10 lg:hidden space-y-0">
            {steps.map(({ num, title, body }, i) => (
              <ScrollReveal key={num} delay={i * 60}>
                <div className="flex gap-5 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-navy border border-gold/35 rounded-sm flex items-center justify-center shrink-0">
                      <span className="font-mono text-gold text-xs font-medium">{num}</span>
                    </div>
                    {i < steps.length - 1 && <div className="flex-1 w-px bg-gold/20 mt-2" aria-hidden="true" />}
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

      {/* Service breakdown */}
      <section className="bg-off-white py-20 lg:py-28" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">Was enthalten ist</p>
            <h2 id="services-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Alles, was Sie brauchen. Ein Partner.
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ bu, accent, title, body }, i) => (
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

      {/* Comparison table */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="comparison-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">Das Argument für Konsolidierung</p>
            <h2 id="comparison-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Warum ein Partner gewinnt
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-10">
            <div className="overflow-x-auto rounded-sm border border-gray-100">
              <table className="w-full min-w-[580px]" aria-label="Vergleich: mehrere Lieferanten verwalten vs. mit ERHO arbeiten">
                <thead>
                  <tr>
                    <th scope="col" className="text-left font-body text-xs text-mid-gray font-medium px-5 py-3.5 bg-white border-b border-gray-100 w-[40%]" />
                    <th scope="col" className="text-left font-body text-xs text-mid-gray font-medium px-5 py-3.5 bg-white border-b border-gray-100">
                      Fragmentiertes Mehrlieferanten-Modell
                    </th>
                    <th scope="col" className="text-left font-body text-xs text-white font-semibold px-5 py-3.5 bg-navy border-b border-navy">
                      Mit ERHO arbeiten
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map(({ label, multi, erho }, i) => (
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

      {/* CTA */}
      <section className="bg-navy hero-texture py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-white text-3xl font-semibold">
              Bereit, Ihre Lieferkette zu konsolidieren?
            </h2>
            <p className="mt-4 font-body text-white/60 text-base max-w-md mx-auto leading-relaxed">
              Teilen Sie Ihre Komponentenliste oder Ihr Zeichnungspaket mit uns. Wir melden uns innerhalb von 24 Stunden mit einem vollständigen Beschaffungsangebot.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200"
            >
              Gespräch beginnen <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
