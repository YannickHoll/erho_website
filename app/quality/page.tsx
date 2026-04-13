import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Qualität & Zertifizierungen",
  description:
    "Qualitätsfehler sind Beschaffungsfehler. ERHO Industry Solutions konstruiert sie heraus — durch Lieferantenqualifizierung, EN-10204-Dokumentation und rigoroses Inspektionsmanagement.",
};

const certifications = [
  { code: "ISO 9001", name: "Qualitätsmanagementsystem", note: "Internationale Norm für Qualitätsmanagement in unseren Liefervorgängen." },
  { code: "EN 10204", name: "Werkstoffprüfzeugnisse (3.1 / 3.2)", note: "Abnahmeprüfzeugnisse, ausgestellt durch die Schmiede oder einen akkreditierten Drittpartei-Prüfer." },
  { code: "AD 2000", name: "Druckgeräteregelung — Deutsches Regelwerk", note: "Schmiedestücke und Gussteile für Druckdienste nach dem deutschen Druckgeräteregelwerk." },
  { code: "API 6A", name: "Bohrlochkopf- & Weihnachtsbaum-Ausrüstung", note: "Anforderungen an drucktragende Öl- und Gaskomponenten." },
  { code: "DNV GL", name: "Marine-Klassifikation", note: "Zulassung von Schmiedewerken für die Lieferung an DNV-GL-klassifizierte Schiffe und Strukturen." },
  { code: "ASME", name: "Kessel- & Druckbehältercode", note: "ASME Section VIII und Section III Werkstoff- und Fertigungsanforderungen." },
];

const nde = [
  { code: "UT", name: "Ultraschallprüfung", standard: "EN 10228-3 / EN 10228-4" },
  { code: "MT", name: "Magnetpulverprüfung", standard: "EN 10228-1" },
  { code: "PT", name: "Eindringprüfung", standard: "EN 10228-2" },
  { code: "DIM", name: "Masshaltigkeitsprüfung", standard: "Nach Kundenzeichnung" },
  { code: "HB", name: "Härteprüfung (Brinell / Rockwell)", standard: "EN ISO 6506" },
  { code: "PMI", name: "Werkstoffidentitätsprüfung", standard: "ASTM E1476" },
];

const supplierQualification = [
  "Vorqualifizierungsaudit gegen unsere Kriterien der Lieferantengenehmigungsliste",
  "Prüfung von Werkszeugnis-Zertifikaten und Qualitätsmanagementin-Unterlagen",
  "Erstmusterprüfung (FAI) für neue Teilenummern",
  "Laufende Leistungsüberwachung — Lieferung, Qualität, Dokumentation",
  "Neuqualifizierung bei wesentlichen Prozessänderungen im Werk",
  "Kundenspezifische Lieferantengenehmigungsunterstützung auf Anfrage",
  "Langfristige Beziehungen basierend auf Vertrauen, Transparenz und gemeinsamer Verantwortung",
];

export default function QualityPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">
            Qualität & Zertifizierungen
          </p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Qualitätsfehler sind Beschaffungsfehler.
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">
            Wir konstruieren sie heraus — durch Lieferantenqualifizierung, rigoroses
            Inspektionsmanagement und Dokumentation, die keinen Interpretationsspielraum lässt.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-off-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
                Our Approach
              </p>
              <h2 className="font-display text-navy text-2xl font-semibold mb-2">
                Quality as a commercial commitment
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <div className="mt-6 space-y-4 font-body text-mid-gray text-base leading-relaxed">
                <p>
                  A quality failure on a forging isn&apos;t just a metallurgical
                  problem — it&apos;s a production stoppage, a delivery delay, a
                  cost overrun, and a conversation nobody wants to have. We treat
                  quality as a commercial obligation, not a compliance checkbox.
                </p>
                <p>
                  That means specifying the right inspection level at order
                  placement. It means choosing suppliers who have earned the
                  right to be on our approved list. It means documentation that
                  ships with the goods, not chased after.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
                Global Sourcing QA
              </p>
              <h2 className="font-display text-navy text-2xl font-semibold mb-2">
                On-site QA wherever we source
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <div className="mt-6 space-y-4 font-body text-mid-gray text-base leading-relaxed">
                <p>
                  We source from the best manufacturers globally — and we bring
                  European quality standards to every facility we work with. Our
                  on-site quality assurance presence at global supplier facilities
                  means you get full accountability regardless of where the
                  component is made.
                </p>
                <p>
                  You never have to trade quality for cost. Global reach.
                  Swiss standards. Our QA team audits, inspects, and certifies
                  at source, so deviations are caught before shipment — not
                  after arrival at your assembly hall.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="certs-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
              Standards & Approvals
            </p>
            <h2
              id="certs-heading"
              className="font-display text-navy text-3xl lg:text-4xl font-semibold"
            >
              Certifications
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map(({ code, name, note }, i) => (
              <ScrollReveal key={code} delay={i * 60}>
                <div className="bg-off-white border border-gray-100 rounded-sm p-6 h-full">
                  <span className="font-mono text-[11px] text-gold bg-gold/10 border border-gold/20 rounded-sm px-2 py-0.5">
                    {code}
                  </span>
                  <h3 className="font-display text-navy text-lg font-semibold mt-3 mb-2">{name}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NDE */}
      <section className="bg-off-white py-20 lg:py-24" aria-labelledby="nde-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
              Inspection
            </p>
            <h2
              id="nde-heading"
              className="font-display text-navy text-3xl lg:text-4xl font-semibold"
            >
              Non-destructive examination
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal delay={80} className="mt-10">
            <div className="bg-navy rounded-sm overflow-hidden">
              <table className="w-full" aria-label="NDE capabilities and standards">
                <thead>
                  <tr className="border-b border-white/10">
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3 w-14">Code</th>
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3">Method</th>
                    <th scope="col" className="text-left font-mono text-[10px] text-gold uppercase tracking-widest px-5 py-3 hidden sm:table-cell">Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8">
                  {nde.map(({ code, name, standard }) => (
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

      {/* What comes with every order + Supplier qualification */}
      <section className="bg-white py-20 lg:py-24" aria-labelledby="docs-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
                Documentation
              </p>
              <h2
                id="docs-heading"
                className="font-display text-navy text-2xl font-semibold"
              >
                What comes with every order
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <ul className="mt-6 space-y-2.5" role="list">
                {[
                  "EN 10204 3.1 material test report (standard)",
                  "EN 10204 3.2 on request (third-party witnessed)",
                  "Heat and batch certificates, full traceability",
                  "Chemical analysis results",
                  "Mechanical test results (tensile, impact, hardness)",
                  "Heat treatment records",
                  "NDE reports as specified",
                  "Dimensional inspection report",
                  "Inspection and test plan (ITP) on request",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-mid-gray text-sm">
                    <span className="text-gold shrink-0 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
                Supplier Management
              </p>
              <h2 className="font-display text-navy text-2xl font-semibold">
                How we qualify our partners
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <ul className="mt-6 space-y-2.5" role="list">
                {supplierQualification.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-mid-gray text-sm">
                    <span className="text-gold shrink-0 mt-0.5">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy hero-texture py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-white text-xl font-semibold">
              Questions about documentation requirements?
            </p>
            <p className="font-body text-white/55 text-sm mt-1">
              Tell us your standard and we&apos;ll confirm what we provide.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200"
          >
            Contact Us <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
