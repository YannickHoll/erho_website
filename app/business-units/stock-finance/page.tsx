import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroCarousel } from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "ERHO Stock & Finance",
  description:
    "ERHO Stock & Finance hält strategische Bestände an Industriekomponenten und bietet Beschaffungsfinanzierung — damit Ihr Kapital frei bleibt und Ihre Lieferkette nie leer wird.",
};

const services = [
  {
    title: "Strategisches Lager",
    accent: "border-warm-gold",
    accentText: "text-warm-gold",
    body: "Wir halten Standard-Flansche, Stabstahl und Fittings in unserem Lager. Bestellen Sie, was Sie brauchen, wenn Sie es brauchen — ohne Ihr Kapital in Sicherheitsbeständen zu binden.",
    details: [
      "EN-1092- / ANSI-B16.5-Flansche (Kohlenstoff- und Edelstahl)",
      "Legierungsstahl- und Edelstahl-Stabstahl (gängige Güten)",
      "Standard-Rohrleitungsfittings und Kupplungen",
      "Sofort abrufbar",
    ],
  },
  {
    title: "Konsignationslager",
    accent: "border-warm-gold",
    accentText: "text-warm-gold",
    body: "Wir beschaffen und lagern Ihre kundenspezifischen Komponenten auf Konsignationsbasis. Der Bestand liegt in unserem Lager, auf unsere Kosten. Sie rufen ihn ab, wenn Sie ihn brauchen — und zahlen nur beim Abruf.",
    details: [
      "Kundenspezifische Komponentenprofile",
      "Verwaltete Nachfüllung nach vereinbartem Min/Max",
      "Zahlung beim Abruf, nicht bei der Beschaffung",
      "Reduzierter Lagerbestand in Ihrer Bilanz",
    ],
  },
  {
    title: "Beschaffungsfinanzierung",
    accent: "border-warm-gold",
    accentText: "text-warm-gold",
    body: "Wir finanzieren den Kauf von Komponenten in Ihrem Namen. Sie erhalten die Ware zu vereinbarten Zahlungsbedingungen — Zahlungsaufschubstrukturen, die auf Ihren Cashflow-Zyklus und Ihre Beschaffungsvolumina zugeschnitten sind.",
    details: [
      "Zahlungsaufschub — 30-, 60- oder 90-Tage-Strukturen",
      "Für Einzelbestellungen oder Programm-Lieferung verfügbar",
      "Keine Anforderung, Ihre Lieferantenbasis zu ändern",
      "Auf Ihren Produktionszyklus abgestimmt",
    ],
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Definieren Sie Ihr Programm",
    body: "Teilen Sie uns mit, welche Komponenten Sie verfügbar brauchen, in welchen Mengen und mit welcher Abrufhäufigkeit. Wir beurteilen das richtige Modell — strategisches Lager, Konsignation oder Finanzierung.",
  },
  {
    step: "02",
    title: "Wir beschaffen und lagern",
    body: "Wir beschaffen die Komponenten über unser Lieferantennetzwerk, finanzieren die Beschaffung und lagern den Bestand in unserem Lager — bereit für Ihren Abruf.",
  },
  {
    step: "03",
    title: "Sie rufen auf Abruf ab",
    body: "Rufen Sie gegen Ihr Programm ab, wenn Sie es brauchen. Wir liefern just-in-time. Sie managen die Produktion, nicht das Lager.",
  },
];

export default function StockFinancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
        <HeroCarousel
          slides={[
            { src: "/images/AdobeStock_117288071.jpeg" },
            { src: "/images/AdobeStock_316400601.jpeg" },
            { src: "/images/AdobeStock_1538685332.jpeg", objectPosition: "center 40%" },
          ]}
          overlayOpacity={65}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/business-units" className="font-body text-xs text-white/35 hover:text-warm-gold transition-colors duration-200">
              Geschäftsbereiche
            </Link>
            <span className="text-white/20 text-xs">/</span>
            <span className="font-body text-xs text-warm-gold">Stock & Finance</span>
          </div>
          {/* Warm-gold accent stripe */}
          <div className="w-8 h-1 bg-warm-gold mb-4 rounded-sm" aria-hidden="true" />
          <p className="font-mono text-warm-gold text-[11px] tracking-[0.28em] uppercase mb-2">ERHO</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Stock & Finance
          </h1>
          <p className="mt-2 font-body text-warm-gold/80 text-lg italic">Ihr Lagerbestand. Unsere Bilanz.</p>
          <div className="w-12 h-0.5 bg-warm-gold mt-4" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">
            Strategische Lagerhaltung und Beschaffungsfinanzierung — damit Ihr Kapital dort bleibt, wo es hingehört, und Ihre Lieferkette nie leer wird.
          </p>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="problem-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <ScrollReveal>
            <h2 id="problem-heading" className="font-display text-navy text-2xl font-semibold mb-2">
              Das Problem mit dem Sicherheitsbestand
            </h2>
            <div className="w-8 h-0.5 bg-warm-gold mt-3 mb-6" aria-hidden="true" />
            <div className="space-y-4 font-body text-mid-gray text-base leading-relaxed">
              <p>
                Jeder Beschaffungsleiter kennt die Spannung: Zu viel Lager bindet Kapital und Lagerplatz. Zu wenig und eine Lieferstörung stoppt die Produktion. Die meisten OEM-Beschaffungsteams halten am Ende mehr als gewünscht, zu einem Preis, den sie nicht vollständig rechtfertigen können.
              </p>
              <p>
                ERHO Stock & Finance verlagert diese Last. Wir halten den Bestand, finanzieren die Beschaffung und stellen Komponenten auf Abruf bereit — damit Sie Versorgungssicherheit erhalten ohne die Bilanzbelastung.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three service cards */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-warm-gold text-[11px] tracking-[0.22em] uppercase mb-3">Was wir anbieten</p>
            <h2 id="services-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Drei Möglichkeiten, mit uns zu arbeiten
            </h2>
            <div className="w-10 h-0.5 bg-warm-gold mt-4" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map(({ title, accent, accentText, body, details }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className={`bg-off-white border-l-4 ${accent} rounded-sm p-7 h-full flex flex-col`}>
                  <h3 className={`font-display text-xl font-semibold mb-3 ${accentText}`}>{title}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed mb-4 flex-1">{body}</p>
                  <ul className="space-y-1.5" role="list">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-2 font-body text-xs text-mid-gray">
                        <span className={`shrink-0 mt-0.5 ${accentText}`}>·</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we stock */}
      <section className="bg-off-white py-14 lg:py-16" aria-labelledby="stock-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="stock-heading" className="font-display text-navy text-xl font-semibold mb-2">
              Was wir lagern
            </h2>
            <div className="w-8 h-0.5 bg-warm-gold mt-3 mb-6" aria-hidden="true" />
            <div className="bg-navy rounded-sm p-6 inline-block w-full max-w-lg">
              <ul className="space-y-2.5" role="list">
                {[
                  ["Flansche", "EN 1092-1, ANSI B16.5 — Kohlenstoff- und Edelstahl"],
                  ["Stabstahl", "Legierungsstahl (42CrMo4, S355), Edelstahl (316L, 304)"],
                  ["Fittings", "Standard-Bögen, T-Stücke, Reduzierungen — CS und SS"],
                  ["Kundenspezifisch", "Sonderprofile im Konsignationsprogramm"],
                ].map(([item, detail]) => (
                  <li key={item as string} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3">
                    <span className="font-mono text-warm-gold text-xs font-medium w-32 shrink-0">{item}</span>
                    <span className="font-mono text-white/45 text-xs">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-warm-gold text-[11px] tracking-[0.22em] uppercase mb-3">Der Prozess</p>
            <h2 id="how-heading" className="font-display text-navy text-3xl font-semibold">
              So funktioniert es
            </h2>
            <div className="w-10 h-0.5 bg-warm-gold mt-4" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map(({ step, title, body }, i) => (
              <ScrollReveal key={step} delay={i * 80}>
                <div className="relative">
                  <div className="w-10 h-10 bg-navy border border-warm-gold/40 rounded-sm flex items-center justify-center mb-4">
                    <span className="font-mono text-warm-gold text-xs font-medium">{step}</span>
                  </div>
                  <h3 className="font-display text-navy text-lg font-semibold mb-2">{title}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy hero-texture py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-white text-3xl font-semibold">
              Sprechen Sie mit uns über ein Lager- & Finanzierungsprogramm.
            </h2>
            <p className="mt-4 font-body text-white/60 text-base max-w-md mx-auto leading-relaxed">
              Teilen Sie uns mit, welche Komponenten Sie verfügbar brauchen — wir entwickeln ein Programm, das Ihrem Produktionsrhythmus entspricht.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-warm-gold text-white font-body font-semibold text-sm rounded-sm hover:bg-warm-gold/90 transition-colors duration-200"
            >
              Gespräch beginnen <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
