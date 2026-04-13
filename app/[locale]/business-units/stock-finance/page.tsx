import type { Metadata } from "next";
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
        title: "ERHO Stock & Finance — Strategisches Lager & Beschaffungsfinanzierung",
        description:
          "ERHO Stock & Finance hält strategische Bestände und bietet Beschaffungsfinanzierung — damit Ihr Kapital frei bleibt und Ihre Lieferkette nie leer wird.",
      }
    : {
        title: "ERHO Stock & Finance — Strategic Stockholding & Procurement Finance",
        description:
          "ERHO Stock & Finance holds strategic inventory and provides procurement financing — so your capital stays free and your supply chain never runs dry.",
      };
}

const pageT = {
  de: {
    buLabel: "Geschäftsbereiche",
    subtitle: "Ihr Lagerbestand. Unsere Bilanz.",
    heroBody:
      "Strategische Lagerhaltung und Beschaffungsfinanzierung — damit Ihr Kapital dort bleibt, wo es hingehört, und Ihre Lieferkette nie leer wird.",
    problemH2: "Das Problem mit dem Sicherheitsbestand",
    problemBody1:
      "Jeder Beschaffungsleiter kennt die Spannung: Zu viel Lager bindet Kapital und Lagerplatz. Zu wenig und eine Lieferstörung stoppt die Produktion. Die meisten OEM-Beschaffungsteams halten am Ende mehr als gewünscht, zu einem Preis, den sie nicht vollständig rechtfertigen können.",
    problemBody2:
      "ERHO Stock & Finance verlagert diese Last. Wir halten den Bestand, finanzieren die Beschaffung und stellen Komponenten auf Abruf bereit — damit Sie Versorgungssicherheit erhalten ohne die Bilanzbelastung.",
    servicesEye: "Was wir anbieten",
    servicesH2: "Drei Möglichkeiten, mit uns zu arbeiten",
    stockH2: "Was wir lagern",
    processEye: "Der Prozess",
    processH2: "So funktioniert es",
    ctaH2: "Sprechen Sie mit uns über ein Lager- & Finanzierungsprogramm.",
    ctaBody:
      "Teilen Sie uns mit, welche Komponenten Sie verfügbar brauchen — wir entwickeln ein Programm, das Ihrem Produktionsrhythmus entspricht.",
    ctaBtn: "Gespräch beginnen",
    services: [
      {
        title: "Strategisches Lager",
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
        body: "Wir finanzieren den Kauf von Komponenten in Ihrem Namen. Sie erhalten die Ware zu vereinbarten Zahlungsbedingungen — Zahlungsaufschubstrukturen, die auf Ihren Cashflow-Zyklus und Ihre Beschaffungsvolumina zugeschnitten sind.",
        details: [
          "Zahlungsaufschub — 30-, 60- oder 90-Tage-Strukturen",
          "Für Einzelbestellungen oder Programm-Lieferung verfügbar",
          "Keine Anforderung, Ihre Lieferantenbasis zu ändern",
          "Auf Ihren Produktionszyklus abgestimmt",
        ],
      },
    ],
    stockItems: [
      ["Flansche", "EN 1092-1, ANSI B16.5 — Kohlenstoff- und Edelstahl"],
      ["Stabstahl", "Legierungsstahl (42CrMo4, S355), Edelstahl (316L, 304)"],
      ["Fittings", "Standard-Bögen, T-Stücke, Reduzierungen — CS und SS"],
      ["Kundenspezifisch", "Sonderprofile im Konsignationsprogramm"],
    ],
    howItWorks: [
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
    ],
  },
  en: {
    buLabel: "Business Units",
    subtitle: "Your inventory. Our balance sheet.",
    heroBody:
      "Strategic stockholding and procurement financing — so your capital stays where it belongs and your supply chain never runs dry.",
    problemH2: "The problem with safety stock",
    problemBody1:
      "Every procurement manager knows the tension: too much inventory ties up capital and warehouse space. Too little and a supply disruption stops production. Most OEM procurement teams end up holding more than they want, at a cost they can't fully justify.",
    problemBody2:
      "ERHO Stock & Finance shifts that burden. We hold the inventory, finance the procurement and make components available on demand — so you get supply security without the balance sheet weight.",
    servicesEye: "What we offer",
    servicesH2: "Three ways to work with us",
    stockH2: "What we stock",
    processEye: "The process",
    processH2: "How it works",
    ctaH2: "Talk to us about a stock & finance programme.",
    ctaBody:
      "Tell us which components you need available — we'll design a programme that matches your production rhythm.",
    ctaBtn: "Start a conversation",
    services: [
      {
        title: "Strategic stockholding",
        body: "We hold standard flanges, bar stock and fittings in our warehouse. Order what you need, when you need it — without tying up your capital in safety stock.",
        details: [
          "EN-1092 / ANSI B16.5 flanges (carbon and stainless)",
          "Alloy and stainless steel bar stock (common grades)",
          "Standard pipe fittings and couplings",
          "Available for immediate call-off",
        ],
      },
      {
        title: "Consignment inventory",
        body: "We source and hold your custom components on a consignment basis. The stock sits in our warehouse, at our cost. You call it off when you need it — and pay only on call-off.",
        details: [
          "Custom component profiles",
          "Managed replenishment to agreed min/max",
          "Payment on call-off, not on procurement",
          "Reduced inventory in your balance sheet",
        ],
      },
      {
        title: "Procurement financing",
        body: "We finance the purchase of components on your behalf. You receive the goods on agreed payment terms — deferral structures tailored to your cash-flow cycle and procurement volumes.",
        details: [
          "Payment deferral — 30-, 60- or 90-day structures",
          "Available for spot orders or programme delivery",
          "No requirement to change your supplier base",
          "Aligned to your production cycle",
        ],
      },
    ],
    stockItems: [
      ["Flanges", "EN 1092-1, ANSI B16.5 — carbon and stainless steel"],
      ["Bar stock", "Alloy steel (42CrMo4, S355), stainless (316L, 304)"],
      ["Fittings", "Standard elbows, tees, reducers — CS and SS"],
      ["Custom", "Special profiles under consignment programme"],
    ],
    howItWorks: [
      {
        step: "01",
        title: "Define your programme",
        body: "Tell us which components you need available, in what quantities and with what call-off frequency. We assess the right model — strategic stock, consignment or financing.",
      },
      {
        step: "02",
        title: "We source and stock",
        body: "We source the components through our supplier network, finance the procurement and hold the inventory in our warehouse — ready for your call-off.",
      },
      {
        step: "03",
        title: "You call off on demand",
        body: "Call off against your programme when you need it. We deliver just-in-time. You manage production, not the warehouse.",
      },
    ],
  },
};

export default async function StockFinancePage({ params }: Props) {
  const { locale } = await params;
  const t = pageT[locale as Locale] ?? pageT.de;
  const p = (path: string) => `/${locale}${path}`;

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
            <Link href={p("/business-units")} className="font-body text-xs text-white/35 hover:text-warm-gold transition-colors duration-200">
              {t.buLabel}
            </Link>
            <span className="text-white/20 text-xs">/</span>
            <span className="font-body text-xs text-warm-gold">Stock & Finance</span>
          </div>
          <div className="w-8 h-1 bg-warm-gold mb-4 rounded-sm" aria-hidden="true" />
          <p className="font-mono text-warm-gold text-[11px] tracking-[0.28em] uppercase mb-2">ERHO</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Stock & Finance
          </h1>
          <p className="mt-2 font-body text-warm-gold/80 text-lg italic">{t.subtitle}</p>
          <div className="w-12 h-0.5 bg-warm-gold mt-4" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">{t.heroBody}</p>
        </div>
      </section>

      {/* The problem */}
      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="problem-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <ScrollReveal>
            <h2 id="problem-heading" className="font-display text-navy text-2xl font-semibold mb-2">
              {t.problemH2}
            </h2>
            <div className="w-8 h-0.5 bg-warm-gold mt-3 mb-6" aria-hidden="true" />
            <div className="space-y-4 font-body text-mid-gray text-base leading-relaxed">
              <p>{t.problemBody1}</p>
              <p>{t.problemBody2}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Three service cards */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-warm-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.servicesEye}</p>
            <h2 id="services-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              {t.servicesH2}
            </h2>
            <div className="w-10 h-0.5 bg-warm-gold mt-4" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {t.services.map(({ title, body, details }, i) => (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="bg-off-white border-l-4 border-warm-gold rounded-sm p-7 h-full flex flex-col">
                  <h3 className="font-display text-xl font-semibold mb-3 text-warm-gold">{title}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed mb-4 flex-1">{body}</p>
                  <ul className="space-y-1.5" role="list">
                    {details.map((d) => (
                      <li key={d} className="flex items-start gap-2 font-body text-xs text-mid-gray">
                        <span className="shrink-0 mt-0.5 text-warm-gold">·</span>
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
              {t.stockH2}
            </h2>
            <div className="w-8 h-0.5 bg-warm-gold mt-3 mb-6" aria-hidden="true" />
            <div className="bg-navy rounded-sm p-6 inline-block w-full max-w-lg">
              <ul className="space-y-2.5" role="list">
                {t.stockItems.map(([item, detail]) => (
                  <li key={item} className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3">
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
            <p className="font-mono text-warm-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.processEye}</p>
            <h2 id="how-heading" className="font-display text-navy text-3xl font-semibold">{t.processH2}</h2>
            <div className="w-10 h-0.5 bg-warm-gold mt-4" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.howItWorks.map(({ step, title, body }, i) => (
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
            <h2 className="font-display text-white text-3xl font-semibold">{t.ctaH2}</h2>
            <p className="mt-4 font-body text-white/60 text-base max-w-md mx-auto leading-relaxed">{t.ctaBody}</p>
            <Link
              href={p("/contact")}
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-warm-gold text-white font-body font-semibold text-sm rounded-sm hover:bg-warm-gold/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-warm-gold focus:ring-offset-2 focus:ring-offset-navy"
            >
              {t.ctaBtn} <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
