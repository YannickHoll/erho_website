import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "de"
    ? { title: "Qualität & Zertifizierungen", description: "Qualitätsfehler sind Beschaffungsfehler. ERHO Industrietechnik konstruiert sie heraus." }
    : { title: "Quality & Certifications", description: "Quality failures are procurement failures. ERHO Industry Solutions engineers them out." };
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

const certifications = {
  de: [
    { code: "ISO 9001", name: "Qualitätsmanagementsystem", note: "Internationale Norm für Qualitätsmanagement in unseren Liefervorgängen." },
    { code: "EN 10204", name: "Werkstoffprüfzeugnisse (3.1 / 3.2)", note: "Abnahmeprüfzeugnisse, ausgestellt durch die Schmiede oder einen akkreditierten Drittpartei-Prüfer." },
    { code: "AD 2000", name: "Druckgeräteregelung — Deutsches Regelwerk", note: "Schmiedestücke und Gussteile für Druckdienste nach dem deutschen Druckgeräteregelwerk." },
    { code: "API 6A", name: "Bohrlochkopf- & Weihnachtsbaum-Ausrüstung", note: "Anforderungen an drucktragende Öl- und Gaskomponenten." },
    { code: "DNV GL", name: "Marine-Klassifikation", note: "Zulassung von Schmiedewerken für die Lieferung an DNV-GL-klassifizierte Schiffe und Strukturen." },
    { code: "ASME", name: "Kessel- & Druckbehältercode", note: "ASME Section VIII und Section III Werkstoff- und Fertigungsanforderungen." },
  ],
  en: [
    { code: "ISO 9001", name: "Quality Management System", note: "International standard for quality management across our sourcing operations." },
    { code: "EN 10204", name: "Material Test Certificates (3.1 / 3.2)", note: "Inspection certificates issued by the forge or an accredited third-party inspector." },
    { code: "AD 2000", name: "Pressure Equipment — German Code", note: "Forgings and castings for pressure service under the German pressure equipment code." },
    { code: "API 6A", name: "Wellhead & Christmas Tree Equipment", note: "Requirements for pressure-bearing oil and gas components." },
    { code: "DNV GL", name: "Marine Classification", note: "Forge approval for supply to DNV-GL-classified vessels and structures." },
    { code: "ASME", name: "Boiler & Pressure Vessel Code", note: "ASME Section VIII and Section III material and fabrication requirements." },
  ],
};

const nde = {
  de: [
    { code: "UT", name: "Ultraschallprüfung", standard: "EN 10228-3 / EN 10228-4" },
    { code: "MT", name: "Magnetpulverprüfung", standard: "EN 10228-1" },
    { code: "PT", name: "Eindringprüfung", standard: "EN 10228-2" },
    { code: "DIM", name: "Masshaltigkeitsprüfung", standard: "Nach Kundenzeichnung" },
    { code: "HB", name: "Härteprüfung (Brinell / Rockwell)", standard: "EN ISO 6506" },
    { code: "PMI", name: "Werkstoffidentitätsprüfung", standard: "ASTM E1476" },
  ],
  en: [
    { code: "UT", name: "Ultrasonic Testing", standard: "EN 10228-3 / EN 10228-4" },
    { code: "MT", name: "Magnetic Particle Inspection", standard: "EN 10228-1" },
    { code: "PT", name: "Liquid Penetrant Testing", standard: "EN 10228-2" },
    { code: "DIM", name: "Dimensional Inspection", standard: "To customer drawing" },
    { code: "HB", name: "Hardness Testing (Brinell / Rockwell)", standard: "EN ISO 6506" },
    { code: "PMI", name: "Positive Material Identification", standard: "ASTM E1476" },
  ],
};

const supplierQualification = {
  de: [
    "Vorqualifizierungsaudit gegen unsere Kriterien der Lieferantengenehmigungsliste",
    "Prüfung von Werkszeugnis-Zertifikaten und Qualitätsmanagement-Unterlagen",
    "Erstmusterprüfung (FAI) für neue Teilenummern",
    "Laufende Leistungsüberwachung — Lieferung, Qualität, Dokumentation",
    "Neuqualifizierung bei wesentlichen Prozessänderungen im Werk",
    "Kundenspezifische Lieferantengenehmigungsunterstützung auf Anfrage",
    "Langfristige Beziehungen basierend auf Vertrauen, Transparenz und gemeinsamer Verantwortung",
  ],
  en: [
    "Pre-qualification audit against our approved supplier list criteria",
    "Review of mill certificate records and quality management documentation",
    "First article inspection (FAI) for new part numbers",
    "Ongoing performance monitoring — delivery, quality, documentation",
    "Re-qualification upon significant process changes at the plant",
    "Customer-specific supplier approval support on request",
    "Long-term relationships built on trust, transparency and shared accountability",
  ],
};

const pageT = {
  de: {
    eyebrow: "Qualität & Zertifizierungen",
    h1: "Qualitätsfehler sind Beschaffungsfehler.",
    heroSub: "Wir konstruieren sie heraus — durch Lieferantenqualifizierung, rigoroses Inspektionsmanagement und Dokumentation, die keinen Interpretationsspielraum lässt.",
    approachEye: "Unser Ansatz",
    approachH2: "Qualität als kaufmännische Verpflichtung",
    approachP1: "Ein Qualitätsfehler an einem Schmiedestück ist nicht nur ein metallurgisches Problem — es ist ein Produktionsstillstand, eine Lieferverzögerung, eine Kostenüberschreitung. Wir behandeln Qualität als kaufmännische Verpflichtung, nicht als Compliance-Checkbox.",
    approachP2: "Das bedeutet: das richtige Prüfniveau bei der Bestellung festlegen. Lieferanten auswählen, die sich ihren Platz auf unserer Genehmigungsliste verdient haben. Dokumentation, die mit der Ware geliefert wird — nicht hinterher erfragt.",
    globalEye: "Globale Beschaffungs-QA",
    globalH2: "Vor-Ort-QA, wo immer wir beschaffen",
    globalP1: "Wir beschaffen bei den besten Herstellern weltweit — und bringen europäische Qualitätsstandards in jedes Werk, mit dem wir zusammenarbeiten. Unsere Vor-Ort-QA-Präsenz bedeutet vollständige Verantwortlichkeit, unabhängig davon, wo die Komponente gefertigt wird.",
    globalP2: "Sie müssen Qualität nie gegen Kosten eintauschen. Globale Reichweite. Schweizer Standards. Unser QA-Team prüft, inspiziert und zertifiziert an der Quelle — damit Abweichungen vor dem Versand erkannt werden.",
    certEye: "Standards & Zertifizierungen",
    certH2: "Zertifizierungen",
    ndeEye: "Inspektion",
    ndeH2: "Zerstörungsfreie Prüfung",
    ndeCodeCol: "Code",
    ndeMethodCol: "Methode",
    ndeStdCol: "Norm",
    docsEye: "Dokumentation",
    docsH2: "Was mit jeder Bestellung geliefert wird",
    docsList: ["EN-10204-3.1 oder 3.2 Werkstoffprüfzeugnis", "Schmelzen- und Chargenidentifikation", "Chemische Analyse und mechanische Prüfprotokolle", "ZfP-Berichte (UT, MT, PT nach Anforderung)", "Massprüfprotokoll gegen Zeichnungsnominale", "Lieferantenmanagementsystem-Audit-Aufzeichnungen"],
    suppEye: "Lieferantenqualifizierung",
    suppH2: "Wie wir Lieferanten qualifizieren",
    ctaH2: "Qualitätsanforderungen?",
    ctaSub: "Teilen Sie Ihre Qualitätsanforderungen mit uns. Wir bestätigen, welche Normen und Prüfniveaus wir für Ihr Projekt managen können.",
    ctaBtn: "Gespräch beginnen",
  },
  en: {
    eyebrow: "Quality & Certifications",
    h1: "Quality failures are procurement failures.",
    heroSub: "We engineer them out — through supplier qualification, rigorous inspection management and documentation that leaves no room for interpretation.",
    approachEye: "Our approach",
    approachH2: "Quality as a commercial commitment",
    approachP1: "A quality failure on a forging isn't just a metallurgical problem — it's a production stoppage, a delivery delay, a cost overrun. We treat quality as a commercial obligation, not a compliance checkbox.",
    approachP2: "That means specifying the right inspection level at order placement. Choosing suppliers who have earned the right to be on our approved list. Documentation that ships with the goods — not chased after.",
    globalEye: "Global Sourcing QA",
    globalH2: "On-site QA wherever we source",
    globalP1: "We source from the best manufacturers globally — and bring European quality standards to every facility we work with. Our on-site QA presence means full accountability, regardless of where the component is made.",
    globalP2: "You never have to trade quality for cost. Global reach. Swiss standards. Our QA team audits, inspects and certifies at source — so deviations are caught before shipment, not after arrival at your assembly hall.",
    certEye: "Standards & Approvals",
    certH2: "Certifications",
    ndeEye: "Inspection",
    ndeH2: "Non-destructive examination",
    ndeCodeCol: "Code",
    ndeMethodCol: "Method",
    ndeStdCol: "Standard",
    docsEye: "Documentation",
    docsH2: "What comes with every order",
    docsList: ["EN-10204-3.1 or 3.2 material test certificate", "Heat and charge identification", "Chemical analysis and mechanical test records", "NDE reports (UT, MT, PT as required)", "Dimensional inspection report against drawing nominals", "Supplier management system audit records"],
    suppEye: "Supplier Qualification",
    suppH2: "How we qualify suppliers",
    ctaH2: "Quality requirements?",
    ctaSub: "Share your quality requirements with us. We'll confirm which standards and inspection levels we can manage for your project.",
    ctaBtn: "Start a conversation",
  },
};

export default async function QualityPage({ params }: Props) {
  const { locale } = await params;
  const t = pageT[locale as Locale] ?? pageT.de;
  const l = locale as Locale;
  const p = (path: string) => `/${locale}${path}`;

  return (
    <>
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">{t.eyebrow}</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">{t.h1}</h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">{t.heroSub}</p>
        </div>
      </section>

      <section className="bg-off-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.approachEye}</p>
              <h2 className="font-display text-navy text-2xl font-semibold mb-2">{t.approachH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <div className="mt-6 space-y-4 font-body text-mid-gray text-base leading-relaxed">
                <p>{t.approachP1}</p>
                <p>{t.approachP2}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.globalEye}</p>
              <h2 className="font-display text-navy text-2xl font-semibold mb-2">{t.globalH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <div className="mt-6 space-y-4 font-body text-mid-gray text-base leading-relaxed">
                <p>{t.globalP1}</p>
                <p>{t.globalP2}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24" aria-labelledby="certs-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.certEye}</p>
            <h2 id="certs-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.certH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications[l].map(({ code, name, note }, i) => (
              <ScrollReveal key={code} delay={i * 60}>
                <div className="bg-off-white border border-gray-100 rounded-sm p-6 h-full">
                  <span className="font-mono text-[11px] text-gold bg-gold/10 border border-gold/20 rounded-sm px-2 py-0.5">{code}</span>
                  <h3 className="font-display text-navy text-lg font-semibold mt-3 mb-2">{name}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-off-white py-20 lg:py-24" aria-labelledby="nde-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.ndeEye}</p>
            <h2 id="nde-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">{t.ndeH2}</h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-10">
            <div className="bg-navy rounded-sm overflow-hidden">
              <table className="w-full" aria-label={t.ndeH2}>
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3 w-14">{t.ndeCodeCol}</th>
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3">{t.ndeMethodCol}</th>
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3 hidden sm:table-cell">{t.ndeStdCol}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8">
                  {nde[l].map(({ code, name, standard }) => (
                    <tr key={code} className="hover:bg-white/4 transition-colors duration-150">
                      <td className="spec-row text-gold px-5 py-3">{code}</td>
                      <td className="spec-row text-white/85 px-5 py-3">{name}</td>
                      <td className="spec-row text-white/45 px-5 py-3 hidden sm:table-cell">{standard}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24" aria-labelledby="docs-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.docsEye}</p>
              <h2 id="docs-heading" className="font-display text-navy text-2xl font-semibold">{t.docsH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <ul className="mt-6 space-y-3">
                {t.docsList.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1 shrink-0" aria-hidden="true">·</span>
                    <span className="font-body text-mid-gray text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">{t.suppEye}</p>
              <h2 className="font-display text-navy text-2xl font-semibold">{t.suppH2}</h2>
              <span className="gold-rule" aria-hidden="true" />
              <ul className="mt-6 space-y-3">
                {supplierQualification[l].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-gold mt-1 shrink-0" aria-hidden="true">·</span>
                    <span className="font-body text-mid-gray text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
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
