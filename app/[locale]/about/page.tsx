import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "de"
    ? { title: "Über uns", description: "ERHO Industrietechnik — Schweizer Präzision, europäische Reichweite." }
    : { title: "About", description: "ERHO Industry Solutions — Swiss precision, European reach." };
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

const pageT = {
  de: {
    eyebrow: "Über uns",
    h1: "Schweizer Präzision. Europäische Reichweite. Ein Partner.",
    whoEye: "Wer wir sind",
    whoP1: "ERHO Industrietechnik ist ein in der Schweiz ansässiger Industriebeschaffungspartner, Teil der ERHO Holding Group. Wir betreiben drei integrierte Geschäftsbereiche — Heavy Industry, Machining Services und Stock & Finance — die die vollständige Lieferkette vom Rohschmiedestück bis zur fertigen Komponente abdecken.",
    whoP2: "Europäische OEM-Beschaffungsteams stehen vor einem Problem, das bislang nicht gut gelöst wurde: Die Beschaffung von Spezial-Metallkomponenten erfordert tiefes technisches Wissen, etablierte Lieferantenbeziehungen und die operative Bandbreite, um Qualität, Logistik und Dokumentation über mehrere Länder hinweg zu managen.",
    whoP3: "Wir haben es. Und wir bringen alles davon in jede Kundenbeziehung ein.",
    stats: [
      { stat: "3", label: "Integrierte Geschäftsbereiche" },
      { stat: "9+", label: "Industrielle Endmärkte" },
      { stat: "20+", label: "Qualifizierte Lieferantenpartner" },
      { stat: "24h", label: "Anfragen-Reaktionszeit" },
    ],
    buEye: "Unsere Geschäftsbereiche",
    buH2: "Drei Bereiche. Eine Lieferkette.",
    buCta: "Mehr erfahren",
    buItems: [
      { name: "Heavy Industry", body: "Beschaffung und Lieferung von Freiformschmiedestücken, nahtlosen Ringen, Gussteilen und Rohteilen aus qualifizierten europäischen Lieferantennetzwerken." },
      { name: "Machining Services", body: "CNC-Präzisionszerspanung von Schmiedestücken, Gussteilen und Stabstahl nach Ihrer exakten Zeichnung — fertige Komponenten für Ihre Montagelinie." },
      { name: "Stock & Finance", body: "Strategische Lagerhaltung, Konsignationslager und Beschaffungsfinanzierung — damit Ihr Kapital frei bleibt und Ihre Lieferkette nie leer wird." },
    ],
    thesisEye: "Unsere Gründungsthese",
    thesisH2: "Warum wir existieren",
    thesisP1: "Europäische OEMs verdienen einen intelligenteren Weg, kritische Komponenten zu beschaffen. Das Modell, eine fragmentierte Lieferantenbasis zu verwalten — eine Schmiede hier, ein Giesswerk dort, eine Zerspanungswerkstatt irgendwo anders — ist teuer, langsam und fragil.",
    thesisP2: "ERHO Industrietechnik wurde aufgebaut, um das zu ändern. Ein qualifizierter, technisch kompetenter Partner. Eine Bestellung. Ein Qualitätssystem. Eingebaute Resilienz.",
    diffEye: "Warum ERHO",
    diffH2: "Was uns unterscheidet",
    differentiators: [
      { title: "Technische Tiefe", body: "Wir prüfen Zeichnungen, hinterfragen Spezifikationen und empfehlen Werkstoffe. Unser Team spricht die Sprache der Technik und der Beschaffung. Wir identifizieren Risiken, bevor sie zu Produktionsausfällen werden." },
      { title: "Lieferkettenreichweite", body: "Direkte, langfristige Beziehungen zu Schmiede- und Giesswerken in Italien, Deutschland und ganz Europa. Wir kennen unsere Lieferanten persönlich — ihre Fähigkeiten, Lieferzeiten und Qualitätsleistungen." },
      { title: "Finanzielle Flexibilität", body: "Wir finanzieren Komponenten, halten Konsignationsbestände und bieten Zahlungsaufschubstrukturen an. Ihre Bilanz bleibt sauber. Ihre Lieferkette bleibt voll." },
    ],
    groupEye: "Gruppenstruktur",
    groupH2: "Teil der ERHO Holding Group",
    groupP: "ERHO Industrietechnik ist die operative Gesellschaft der ERHO Holding Group — einer Schweizer Holdingstruktur, die Industriehandel und verwandte Geschäftsfelder unterstützt. Das Gruppenmodell ermöglicht einen dedizierten operativen Fokus, gestützt durch die Stabilität und Governance einer Schweizer Holding.",
    teamEye: "Führung",
    teamH2: "Unser Team",
    teamRole: "Geschäftsführer",
    teamPlaceholder: "Demnächst",
    locationH2: "Baden, Switzerland",
    locationMap: "Baden, Schweiz — Karte",
  },
  en: {
    eyebrow: "About",
    h1: "Swiss Precision. European Reach. One Partner.",
    whoEye: "Who we are",
    whoP1: "ERHO Industry Solutions is a Switzerland-based industrial procurement partner, part of the ERHO Holding Group. We operate three integrated business units — Heavy Industry, Machining Services and Stock & Finance — covering the complete supply chain from raw forging to finished component.",
    whoP2: "European OEM procurement teams face a problem that has not been well solved: sourcing specialist metal components requires deep technical knowledge, established supplier relationships and the operational bandwidth to manage quality, logistics and documentation across multiple countries.",
    whoP3: "We have all three. And we bring every bit of it to every client relationship.",
    stats: [
      { stat: "3", label: "Integrated Business Units" },
      { stat: "9+", label: "Industrial End Markets" },
      { stat: "20+", label: "Qualified Supplier Partners" },
      { stat: "24h", label: "Enquiry Response Time" },
    ],
    buEye: "Our Business Units",
    buH2: "Three units. One supply chain.",
    buCta: "Learn more",
    buItems: [
      { name: "Heavy Industry", body: "Sourcing and delivery of open-die forgings, seamless rings, castings and blanks from qualified European supplier networks." },
      { name: "Machining Services", body: "CNC precision machining of forgings, castings and bar stock to your exact drawing — finished components for your assembly line." },
      { name: "Stock & Finance", body: "Strategic warehousing, consignment stock and procurement financing — so your capital stays free and your supply chain never runs dry." },
    ],
    thesisEye: "Our founding thesis",
    thesisH2: "Why we exist",
    thesisP1: "European OEMs deserve a smarter way to source critical components. The model of managing a fragmented supplier base — a forge here, a foundry there, a machine shop somewhere else — is expensive, slow and fragile.",
    thesisP2: "ERHO Industry Solutions was built to change that. One qualified, technically capable partner. One order. One quality system. Built-in resilience.",
    diffEye: "Why ERHO",
    diffH2: "What sets us apart",
    differentiators: [
      { title: "Technical Depth", body: "We review drawings, challenge specifications and recommend materials. Our team speaks the language of engineering and procurement. We identify risks before they become production failures." },
      { title: "Supply Chain Reach", body: "Direct, long-term relationships with forge and foundry partners in Italy, Germany and across Europe. We know our suppliers personally — their capabilities, lead times and quality performance." },
      { title: "Financial Flexibility", body: "We finance components, hold consignment stock and offer deferred payment structures. Your balance sheet stays clean. Your supply chain stays full." },
    ],
    groupEye: "Group structure",
    groupH2: "Part of the ERHO Holding Group",
    groupP: "ERHO Industry Solutions is the operating company of the ERHO Holding Group — a Swiss holding structure supporting industrial trade and related business activities. The group model enables a dedicated operational focus at the solutions level, backed by the stability and governance of a Swiss holding company.",
    teamEye: "Leadership",
    teamH2: "Our Team",
    teamRole: "Managing Director",
    teamPlaceholder: "Coming soon",
    locationH2: "Baden, Switzerland",
    locationMap: "Baden, Switzerland — Map",
  },
};

const buAccents = [
  { accentText: "text-gold", accentBorder: "border-gold", href: "/business-units/heavy-industry" },
  { accentText: "text-steel", accentBorder: "border-steel", href: "/business-units/machining-services" },
  { accentText: "text-warm-gold", accentBorder: "border-warm-gold", href: "/business-units/stock-finance" },
];

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const t = pageT[locale as Locale] ?? pageT.de;
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">{t.eyebrow}</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">{t.h1}</h1>
          <span className="gold-rule" aria-hidden="true" />
        </div>
      </section>

      <section className="bg-off-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <ScrollReveal>
              <h2 className="font-display text-navy text-2xl lg:text-3xl font-semibold mb-5">{t.whoEye}</h2>
              <div className="space-y-4 font-body text-mid-gray text-base leading-relaxed">
                <p>{t.whoP1}</p>
                <p>{t.whoP2}</p>
                <p>{t.whoP3}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="grid grid-cols-2 gap-5">
                {t.stats.map(({ stat, label }) => (
                  <div key={label} className="bg-white border border-gray-100 rounded-sm p-6">
                    <p className="font-display text-gold text-3xl font-semibold">{stat}</p>
                    <p className="font-body text-mid-gray text-sm mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-labelledby="bu-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.buEye}</p>
            <h2 id="bu-heading" className="font-display text-navy text-2xl lg:text-3xl font-semibold">{t.buH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.buItems.map(({ name, body }, i) => (
              <ScrollReveal key={name} delay={i * 70}>
                <div className={`bg-off-white border-t-4 ${buAccents[i].accentBorder} rounded-sm p-6 h-full flex flex-col`}>
                  <h3 className={`font-display text-lg font-semibold mb-3 ${buAccents[i].accentText}`}>{name}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed flex-1 mb-4">{body}</p>
                  <Link href={p(buAccents[i].href)} className={`font-body text-xs font-medium ${buAccents[i].accentText} hover:opacity-75 transition-opacity duration-200 inline-flex items-center gap-1`}>
                    {t.buCta} <ArrowRight size={11} aria-hidden="true" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20" aria-labelledby="thesis-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.thesisEye}</p>
            <h2 id="thesis-heading" className="font-display text-navy text-2xl lg:text-3xl font-semibold">{t.thesisH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="mt-6 font-body text-mid-gray text-base leading-relaxed">{t.thesisP1}</p>
            <p className="mt-4 font-body text-mid-gray text-base leading-relaxed">{t.thesisP2}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-off-white py-20 lg:py-24" aria-labelledby="differentiators-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.diffEye}</p>
            <h2 id="differentiators-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.diffH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.differentiators.map(({ title, body }, i) => (
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

      <section className="bg-navy hero-texture py-16 lg:py-20" aria-labelledby="group-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.groupEye}</p>
              <h2 id="group-heading" className="font-display text-white text-2xl lg:text-3xl font-semibold">{t.groupH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-6 font-body text-white/60 text-base leading-relaxed">{t.groupP}</p>
              <Link href="#" className="mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold/80 transition-colors duration-200">
                ERHO Holding Group <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-off-white py-20 lg:py-24" aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.teamEye}</p>
            <h2 id="team-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.teamH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <ScrollReveal>
              <div className="bg-white border border-gray-100 rounded-sm p-6 text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-display text-gold text-xl font-semibold">Y</span>
                </div>
                <p className="font-display text-navy font-semibold">Yannick</p>
                <p className="font-body text-mid-gray text-sm mt-0.5">{t.teamRole}</p>
              </div>
            </ScrollReveal>
            {Array.from({ length: 3 }).map((_, i) => (
              <ScrollReveal key={`ph-${i}`} delay={(i + 1) * 60}>
                <div className="bg-white border border-dashed border-gray-200 rounded-sm p-6 text-center opacity-40">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4" />
                  <p className="font-body text-mid-gray text-sm">{t.teamPlaceholder}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16" aria-labelledby="location-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="text-gold mt-1 shrink-0" size={18} aria-hidden="true" />
              <div>
                <h2 id="location-heading" className="font-display text-navy text-xl font-semibold">{t.locationH2}</h2>
                <address className="font-body text-mid-gray text-base not-italic mt-1.5 leading-relaxed">
                  Rütistrasse 6 · 5400 Baden · Switzerland
                </address>
              </div>
            </div>
            <div className="w-full h-56 bg-gray-100 rounded-sm flex items-center justify-center border border-gray-200">
              <p className="font-body text-mid-gray text-sm">{t.locationMap}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
