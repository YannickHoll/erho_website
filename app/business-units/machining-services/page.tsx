import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroCarousel } from "@/components/HeroCarousel";

export const metadata: Metadata = {
  title: "ERHO Machining Services",
  description:
    "ERHO Machining Services bietet CNC-Präzisionszerspanung — Drehen, Fräsen, Bohren und Schleifen — vom Rohling zum Fertigteil. Prototyp bis Serienfertigung für europäische OEMs.",
};

const capabilities = [
  {
    title: "CNC-Drehen",
    body: "Hochpräzisionsdrehen von Wellen, Scheiben, Ringen und Zylindern. Durchmesser bis 2.500 mm, Längen bis 6 m. Legierungsstähle, Edelstahl, Duplex und Inconel.",
  },
  {
    title: "CNC-Fräsen",
    body: "Fräsen von komplexen Profilen, Flanschen, Gehäusen und Präzisionsplanflächen. 3-Achs- und 4-Achs-Fräskapazität für anspruchsvolle Geometrien.",
  },
  {
    title: "Bohren & Schleifen",
    body: "Innen- und Aussenausdrehung für Präzisionsbohrungen in Gehäusen und Zylindern. Flach- und Rundschleifen für enge Mass- und Oberflächengüteanforderungen.",
  },
  {
    title: "Oberflächenbehandlung",
    body: "Koordination von Oberflächenbehandlungsoperationen einschliesslich Phosphatierung, Lackierung, Galvanisierung und Hartverchromen durch qualifizierte europäische Partner.",
  },
];

const materials = [
  "Legierungsstähle — 42CrMo4, 34CrNiMo6, 18CrNiMo7-6",
  "Edelstahl — 316L, 304L",
  "Duplex / Superduplex — 1.4462, 1.4410",
  "Nickellegierungen — Inconel 625, Inconel 718",
  "Werkzeugstähle — H13, D2, M2",
  "Kohlenstoffstähle — S355, C45",
];

export default function MachiningServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24">
        <HeroCarousel
          slides={[
            { src: "/images/AdobeStock_Machining.jpeg" },
            { src: "/images/AdobeStock_273506092.jpeg" },
            { src: "/images/AdobeStock_1934105316.jpeg" },
          ]}
          overlayOpacity={60}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/business-units" className="font-body text-xs text-white/35 hover:text-steel transition-colors duration-200">
              Geschäftsbereiche
            </Link>
            <span className="text-white/20 text-xs">/</span>
            <span className="font-body text-xs text-steel">Machining Services</span>
          </div>
          {/* Steel accent stripe */}
          <div className="w-8 h-1 bg-steel mb-4 rounded-sm" aria-hidden="true" />
          <p className="font-mono text-steel text-[11px] tracking-[0.28em] uppercase mb-2">ERHO</p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Machining Services
          </h1>
          <p className="mt-2 font-body text-steel/80 text-lg italic">Vom Rohling zum Fertigteil.</p>
          <div className="w-12 h-0.5 bg-steel mt-4" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">
            CNC-Präzisionszerspanung von Schmiedestücken, Gussteilen und Stabstahl nach Ihrer exakten Zeichnung — fertige Komponenten für Ihre Montagelinie.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="whatwedo-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 max-w-2xl">
          <ScrollReveal>
            <h2 id="whatwedo-heading" className="font-display text-navy text-2xl font-semibold mb-2">
              Was wir tun
            </h2>
            <div className="w-10 h-0.5 bg-steel mt-3 mb-6" aria-hidden="true" />
            <div className="space-y-4 font-body text-mid-gray text-base leading-relaxed">
              <p>
                ERHO Machining Services nimmt Ihre Schmiedestücke, Gussteile oder Stabstahl und zerspant sie nach Ihrer exakten Zeichnung und Toleranz. Wir managen die vollständige Zerspanungssequenz — Drehen, Fräsen, Bohren und Schleifen — mit eigenen und Partner-Zerspanungskapazitäten in ganz Europa.
              </p>
              <p>
                Wir bedienen vom Prototyp bis zur Serienfertigung. Ob Sie eine einzelne Welle nach Zeichnung bearbeitet brauchen oder eine terminierte Serie von Zahnradrohlingen — wir passen das Programm an Ihren Produktionsrhythmus an.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-20 lg:py-28" aria-labelledby="capabilities-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <p className="font-mono text-steel text-[11px] tracking-[0.22em] uppercase mb-3">Verfahren</p>
            <h2 id="capabilities-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Zerspanungskompetenzen
            </h2>
            <div className="w-10 h-0.5 bg-steel mt-4" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 70}>
                <div className="bg-off-white border-l-4 border-steel rounded-sm p-7 h-full">
                  <h3 className="font-display text-navy text-xl font-semibold mb-3">{title}</h3>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity + Materials */}
      <section className="bg-off-white py-16 lg:py-20" aria-labelledby="capacity-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ScrollReveal>
              <h2 id="capacity-heading" className="font-display text-navy text-2xl font-semibold mb-2">
                Kapazität & Abmessungen
              </h2>
              <div className="w-8 h-0.5 bg-steel mt-3" aria-hidden="true" />
              <div className="mt-5 bg-navy rounded-sm p-6">
                <ul className="space-y-3" role="list">
                  {[
                    ["Max. Drehdurchmesser", "2.500 mm"],
                    ["Max. Drehlänge", "6.000 mm"],
                    ["Gewichtsbereich", "1 kg – 30.000 kg"],
                    ["Fertigungstyp", "Prototyp, Kleinserie, Serie"],
                    ["Masstoleranz", "Bis IT6 / IT7"],
                    ["Oberflächengüte", "Ra 0,8 – 3,2 µm"],
                  ].map(([label, value]) => (
                    <li key={label as string} className="flex justify-between items-baseline">
                      <span className="font-mono text-xs text-white/40">{label}</span>
                      <span className="font-mono text-sm text-white/85 font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="font-display text-navy text-2xl font-semibold mb-2">
                Werkstoffe, die wir zerspanen
              </h2>
              <div className="w-8 h-0.5 bg-steel mt-3" aria-hidden="true" />
              <ul className="mt-5 space-y-2.5" role="list">
                {materials.map((m) => (
                  <li key={m} className="flex items-start gap-2.5 font-body text-mid-gray text-sm">
                    <span className="text-steel shrink-0 mt-0.5">·</span>
                    {m}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="bg-white py-14 lg:py-16" aria-labelledby="quality-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <h2 id="quality-heading" className="font-display text-navy text-xl font-semibold mb-2">
              Qualität & Inspektion
            </h2>
            <div className="w-8 h-0.5 bg-steel mt-3 mb-6" aria-hidden="true" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Vollständiges Masshaltigkeitsprotokoll",
                "KMM-Inspektion auf Anfrage",
                "Zeichnungskonformitätsbestätigung",
                "Oberflächenrauhigkeitsmessung",
                "Härteprüfung",
                "Werkstoffidentitätsbestätigung (PMI)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 font-body text-mid-gray text-sm">
                  <span className="text-steel shrink-0 mt-0.5">·</span>
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Combined offering */}
      <section className="bg-navy/5 border border-steel/20 mx-6 lg:mx-8 rounded-sm mb-8 p-7 lg:p-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="font-mono text-steel text-[10px] uppercase tracking-widest mb-2">Kombiniertes Angebot</p>
            <p className="font-display text-navy text-lg font-semibold mb-2">
              Kombiniert mit ERHO Heavy Industry für eine vollständig fertige Komponente aus einer Hand.
            </p>
            <p className="font-body text-mid-gray text-sm leading-relaxed max-w-xl mb-4">
              Heavy Industry beschafft und liefert das Schmiedestück oder Gussteil. Machining Services zerspant es nach Ihrer exakten Zeichnung. Eine Bestellung, ein Qualitätssystem, eine Lieferung.
            </p>
            <Link href="/business-units/heavy-industry" className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-steel hover:text-steel/80 transition-colors duration-200">
              Heavy Industry erkunden <ArrowRight size={13} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy hero-texture py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-white text-3xl font-semibold">
              Senden Sie uns Ihre Zeichnung.
            </h2>
            <p className="mt-4 font-body text-white/60 text-base max-w-md mx-auto leading-relaxed">
              Laden Sie eine Zeichnung hoch oder beschreiben Sie die Komponente. Wir bestätigen die Machbarkeit und melden uns mit einem Zeitplan.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-steel text-white font-body font-semibold text-sm rounded-sm hover:bg-steel/90 transition-colors duration-200"
            >
              Zeichnung einsenden <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
