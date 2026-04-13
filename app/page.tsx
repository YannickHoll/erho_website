import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CountUp } from "@/components/CountUp";
import { HeroCarousel } from "@/components/HeroCarousel";
import { sectors } from "@/lib/sectors";

// ── Complete Package Showcase data ───────────────────────────────────────────
const showcase = [
  {
    slug: "heat-exchangers",
    image: "/images/AdobeStock_1944076883.jpeg",
    imageAlt: "Grosse gebohrte Rohrplatte in einer Schmiede",
    name: "Prozess-Wärmetauscher",
    context:
      "Die Beschaffung von Wärmetauschern ist per se fragmentiert. Rohrplatten, Rohre, Trennwände, Stutzen und Flansche werden typischerweise von verschiedenen Speziallieferanten bezogen — jeder mit eigenen Lieferzeiten, Qualitätssystemen und Dokumentationsanforderungen. Das Ergebnis ist ein Beschaffungsprozess, der langsam, teuer und voller Koordinationsrisiken ist.",
    components: [
      { name: "Rohrplatten", note: "vollständig bearbeitet, nach Zeichnung" },
      { name: "Rohre", note: "nahtlos, verschiedene Güten" },
      { name: "Trennwände", note: "geschmiedet oder aus Platte gefräst" },
      { name: "Stutzen", note: "geschmiedet, gedreht nach Spez." },
      { name: "Flansche", note: "EN 1092 / ANSI B16.5" },
      { name: "Zuganker & Abstandshalter", note: "nach Toleranz bearbeitet" },
    ],
    advantage:
      "Jede Komponente für Ihren Wärmetauscher — vollständig bearbeitet und zertifiziert, aus einer einzigen Bestellung. Ihre Montagehalle erhält ein Komplettpaket — kein Koordinationsaufwand.",
  },
  {
    slug: "valves-pipelines",
    image: "/images/AdobeStock_1934105316.jpeg",
    imageAlt: "Grosser zerspanter Kugelhahnkörper, Spiegelglanzoberfläche",
    name: "Armaturen & Armaturengruppen",
    context:
      "Die Beschaffung von Armaturen umfasst mehrere Präzisionskomponenten — Gehäuse, Deckel, Spindeln, Scheiben, Sitze und Flansche — jede mit spezifischen Werkstoff-, Toleranz- und Zertifizierungsanforderungen. Einzelne Beschaffung vervielfacht Lieferzeiten und Qualitätsmanagementaufwand. Wir eliminieren das.",
    components: [
      { name: "Armaturengehäuse", note: "geschmiedet oder gegossen, API / EN" },
      { name: "Deckel", note: "Schmiedestahl, verschiedene Güten" },
      { name: "Spindeln", note: "präzisionsgedreht, gehärtet" },
      { name: "Scheiben & Sitze", note: "nach Toleranz bearbeitet" },
      { name: "Flansche", note: "Endanschlüsse, gesamtes Sortiment" },
      { name: "Schraubensätze", note: "werkstoffzertifizierte Verbindungsmittel" },
    ],
    advantage:
      "Wir liefern alle Armaturenkomponenten aus einer Hand — bearbeitet, zertifiziert und montagefertig. Eine Lieferung. Ein Qualitätszertifikat. Null Koordinationsaufwand.",
  },
  {
    slug: "compressors-pumps",
    image: "/images/AdobeStock_1581156194.jpeg",
    imageAlt: "Zwillingsschraubenverdichter-Rotoren, präzisionszerspant",
    name: "Kompressoren & Pumpen",
    context:
      "Die Beschaffung von Kompressoren und Pumpen umfasst ein breites Spektrum an Präzisionskomponenten — von gegossenen Gehäusen bis zu inneren Arbeitselementen. Ob Kolbenpumpen, Schraubenverdichter, Kreiselpumpen oder Drehkolbeneinheiten — die Komponentenbasis ist komplex und die Toleranzanforderungen sind eng. Wir decken das gesamte Spektrum ab.",
    components: [
      { name: "Gussgehäuse", note: "Sand-/Feinguss, bearbeitet" },
      { name: "Zylinderlaufbuchsen", note: "präzisionsgespindelt" },
      { name: "Kolben & Stangen", note: "geschmiedet, gedreht, gehärtet" },
      { name: "Schraubenrotoren", note: "präzisionsgefräst" },
      { name: "Laufräder", note: "gegossen oder geschmiedet, gewuchtet" },
      { name: "Wellen & Kupplungen", note: "geschmiedet, geschliffen" },
    ],
    advantage:
      "Vom Gussgehäuse bis zu den inneren Arbeitselementen — wir liefern den vollständigen Komponentensatz für Ihren Kompressor oder Ihre Pumpe — nach Ihrer Zeichnung bearbeitet, nach Ihrem Standard zertifiziert, als Komplettpaket geliefert.",
  },
  {
    slug: "plastics-extrusion",
    image: null as string | null,
    imageAlt: "",
    name: "Kunststoff- & Extrusionsanlagen",
    context:
      "Extrusionsmaschinen erfordern eine anspruchsvolle Kombination aus hochverschleissfesten und hochpräzisen Komponenten — Zylinder, Schnecken, Düsen und Kolben — oft aus Sonderwerkzeugstählen oder bimetallischen Kombinationen. Die Beschaffung dieser Komponenten über mehrere Lieferanten schafft Inkonsistenzen in Lieferzeit, Qualität und Dokumentation. Wir bündeln alles unter einem Dach.",
    components: [
      { name: "Extruderzylinder", note: "bimetallisch oder Werkzeugstahl" },
      { name: "Extruderschnecken", note: "Ein-/Doppelschnecke, präzisionsgeschliffen" },
      { name: "Düsenköpfe", note: "nach Zeichnung bearbeitet" },
      { name: "Kolben", note: "gehont, verchromt" },
      { name: "Siebträgerplatten", note: "präzisionsgespindelt" },
      { name: "Adapterabschnitte", note: "bearbeitet, verschiedene Legierungen" },
    ],
    advantage:
      "Jede Verschleisskomponte und jedes Präzisionselement für Ihre Extrusionslinie — aus einer einzigen qualifizierten Quelle. Gleichbleibende Qualität, gleichbleibende Lieferzeiten, eine Lieferantenbeziehung zu pflegen.",
  },
];

const pillars = [
  {
    title: "Lieferkettensicherheit & Resilienz",
    body: "In einer Welt voller Zölle, Handelskonflikte und Logistikstörungen ist Ihre Lieferkette entweder ein Wettbewerbsvorteil oder eine Schwachstelle. Wir bauen Redundanz, Diversifikation und Transparenz in Ihre Komponentenbeschaffung ein. Wir unterhalten qualifizierte, auditierte Beziehungen zu Schmiede-, Guss- und Zerspanungspartnern in Europa und weltweit — damit Sie beim nächsten Engpass sofort Alternativen verfügbar haben. Wir reagieren nicht nur auf Lieferkettenprobleme. Wir konstruieren sie heraus.",
  },
  {
    title: "Beschaffungsvereinfachung — Komplettpaket-Lösungen",
    body: "Ihr Beschaffungsteam sollte nicht 15 Lieferanten koordinieren müssen, um einen einzigen Wärmetauscher zu bauen. ERHO Industry Solutions bündelt Ihre Komponentenbeschaffung bei einem einzigen qualifizierten Partner — eine Bestellung, ein Qualitätssystem, ein Ansprechpartner. Wir verstehen Ihren Montageprozess und Ihre Projektanforderungen und konfigurieren die Lieferung entsprechend. Sie erhalten fertige Komplettsätze für Ihre Montagehalle.",
  },
  {
    title: "Technisches Know-how & Qualitätsmanagement",
    body: "Wir sprechen die Sprache Ihrer Ingenieure und Ihrer Qualitätsabteilung. Wir prüfen Zeichnungen, hinterfragen Spezifikationen wenn wir Risiken sehen, empfehlen Werkstoffe, erstellen Prüfpläne und verwalten die EN-10204-Dokumentation von A bis Z. Die technische Last, die sonst auf Ihrem Qualitätsteam lastet — die tragen wir. Unsere Vor-Ort-QA-Präsenz bei globalen Lieferantenwerken bedeutet europäische Verantwortlichkeit, unabhängig davon, wo die Komponente gefertigt wird.",
  },
  {
    title: "Schnelle Lieferung dank Lager & Rohteilverfügbarkeit",
    body: "Unser strategisches Lager hält qualifizierte Rohlinge, Schmiedehalbzeuge und Stabstahlsortimente permanent auf Lager — bearbeitungsbereit und zertifiziert. Das bedeutet: kürzere Lieferzeiten, weniger Kapitalbindung auf Ihrer Seite und ein Puffer gegen Marktengpässe. Wenn Ihr Projekt läuft, läuft auch unsere Lieferkette — ohne Wartezeiten.",
  },
];

const businessUnits = [
  {
    name: "Heavy Industry",
    href: "/business-units/heavy-industry",
    accent: "border-gold",
    accentText: "text-gold",
    image: "/images/AdobeStock_1944076883.jpeg",
    desc: "Beschaffung und Lieferung von Freiformschmiedestücken, nahtlosen Ringen, Gussteilen und Rohteilen aus qualifizierten europäischen und globalen Lieferantennetzwerken.",
    services: ["Freiformschmiedestücke", "Ringwalzen", "Sand- & Feinguss", "EN-10204-3.1/3.2-Dokumentation"],
  },
  {
    name: "Machining Services",
    href: "/business-units/machining-services",
    accent: "border-steel",
    accentText: "text-steel",
    image: "/images/AdobeStock_Machining.jpeg",
    desc: "CNC-Präzisionszerspanung von Schmiedestücken, Gussteilen und Stabstahl nach Ihrer exakten Zeichnung — fertige Komponenten für Ihre Montagelinie.",
    services: ["CNC-Drehen bis ⌀2.500 mm", "Fräsen, Bohren & Schleifen", "Prototyp bis Serie", "Maßberichte & KMM"],
  },
  {
    name: "Stock & Finance",
    href: "/business-units/stock-finance",
    accent: "border-warm-gold",
    accentText: "text-warm-gold",
    image: "/images/Forging_Stock.jpeg",
    desc: "Strategische Lagerhaltung, Konsignationslager und Beschaffungsfinanzierung — damit Ihr Kapital frei bleibt und Ihre Lieferkette nie zum Stillstand kommt.",
    services: ["Strategisches Lager: Flansche & Stabstahl", "Konsignationslager", "Beschaffungsfinanzierung", "Zahlungsaufschubstrukturen"],
  },
];

const boldStatements = [
  "Wir verstehen Ihr Projekt",
  "Wir managen die technische Komplexität",
  "Wir liefern Komplettsätze",
  "Wir beschaffen global, mit Vor-Ort-QA",
  "Wir finanzieren und lagern",
];

const trustBrands = [
  "Voith", "Siemens", "KraussMaffei", "Andritz",
  "Rheinmetall", "Kumera", "Coperion", "Schöller Bleckmann",
];

export default function HomePage() {
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
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-6">
            ERHO Industry Solutions
          </p>
          <h1 className="font-display text-white text-5xl lg:text-[72px] font-semibold max-w-3xl leading-[1.07] tracking-tight">
            Ein Partner.{" "}
            <span className="text-gold">Die vollständige Lieferkette.</span>
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg lg:text-xl max-w-xl leading-relaxed">
            Wir verstehen Ihr Projekt. Wir managen die technische Komplexität. Wir
            liefern vollständige Komponentensätze — aus einer Hand.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200"
            >
              Unser Team kontaktieren <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-body font-medium text-sm rounded-sm hover:border-white/50 transition-colors duration-200"
            >
              So arbeiten wir
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stable Partner / Shifting World ──────────────────────────────── */}
      <section className="bg-navy border-t border-white/8 py-20 lg:py-28" aria-labelledby="world-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: the challenge */}
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">Das Umfeld</p>
              <h2 id="world-heading" className="font-display text-white text-3xl lg:text-4xl font-semibold leading-tight">
                Ein stabiler Partner in einer sich wandelnden Welt.
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-6 font-body text-white/60 text-base leading-relaxed">
                Die industrielle Beschaffung war selten so komplex wie heute. Zölle und Handelspolitik formen Lieferketten von heute auf morgen um. Asiatische Hersteller konkurrieren aggressiver über den Preis. Regulatorische Anforderungen verschärfen sich in allen wichtigen Märkten. Eine allgemeine Verlangsamung der Industrieproduktion komprimiert die Margen branchenweit.
              </p>
              <p className="mt-4 font-body text-white/60 text-base leading-relaxed">
                Ihre Lieferanten spüren das alles. Sie auch. Die Frage ist, ob Ihre Lieferkette so aufgebaut ist, dass sie den Schock abfedert — oder verstärkt.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Zölle & Handelspolitik",
                  "Asiatischer Wettbewerb",
                  "Regulatorische Komplexität",
                  "Marktrückgang",
                  "Währungsdruck",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="font-mono text-[10px] text-white/50 border border-white/15 rounded-sm px-2.5 py-1"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* Right: how we help */}
            <ScrollReveal delay={80}>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-5">Wie wir helfen</p>
              <ul className="space-y-5" role="list">
                {[
                  {
                    title: "Wir stabilisieren Ihre Lieferkette",
                    body: "Wir bauen von Anfang an Redundanz und Diversifikation in Ihre Beschaffung ein. Wenn ein Lieferant durch Zölle oder Handelsbeschränkungen ausfällt, haben wir qualifizierte Alternativen bereit.",
                  },
                  {
                    title: "Wir reduzieren Marktschocks",
                    body: "Unser globales Lieferantennetzwerk erstreckt sich über Europa, Indien und China. Mit Vor-Ort-Präsenz an wichtigen Fertigungsstandorten absorbieren wir Marktvolatilität, bevor sie Ihre Produktionslinie erreicht.",
                  },
                  {
                    title: "Wir senken die Kosten globaler Beschaffung",
                    body: "Wir kennen die wahren Gesamtkosten von Komponenten aus jeder Beschaffungsregion — Zollauswirkungen, Logistik, Versicherung, Zoll — und finden den kosteneffizientesten Weg zu Ihrer Spezifikation.",
                  },
                  {
                    title: "Wir sind vor Ort",
                    body: "Vor-Ort-Qualitätssicherung, Vor-Ort-Logistikmanagement, Vor-Ort-Regulierungskonformität. Wir übernehmen die gesamte Komplexität globaler Beschaffung — damit Sie es nicht müssen.",
                  },
                  {
                    title: "Wir managen die durchgängige Logistik",
                    body: "Transport, Zolldokumentation, Import-/Exportkonformität, behördliche Zertifizierungen — alles koordiniert durch ERHO. Ein Lieferant, eine Lieferung, ein Dokumentationspaket.",
                  },
                ].map(({ title, body }) => (
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
                <p className="font-body text-white/65 text-sm leading-relaxed">
                  Wir sind ein{" "}
                  <span className="text-gold font-semibold">integrierter Industrielieferspezialist</span>
                  {" "}— kein Katalogwiederverkäufer und kein Spot-Buy-Broker. Wir verstehen Ihr Projekt, Ihre Montagereihenfolge und Ihre Qualitätsanforderungen. Wir konfigurieren das vollständige Komponentenpaket. Sie konzentrieren sich auf die Fertigung.
                </p>
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
              &ldquo;Durch die Kombination von Schmiede-, Guss- und Zerspanungsdienstleistungen
              mit strategischer Lagerhaltung und Finanzierung bieten wir europäischen OEMs
              etwas wirklich Anderes — einen einzigen Partner, der das gesamte Projekt
              versteht, die gesamte technische Komplexität managt und vollständige
              Komponentensätze aus einer vertrauenswürdigen Quelle liefert.&rdquo;
            </blockquote>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 justify-center">
              {boldStatements.map((s) => (
                <p key={s} className="font-body text-navy text-sm font-semibold tracking-wide">
                  {s}
                </p>
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
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
                Komplettpaket-Lösungen
              </p>
              <h2 id="showcase-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
                So sieht ein Komplettpaket aus
              </h2>
              <span className="gold-rule" aria-hidden="true" />
              <p className="mt-4 font-body text-mid-gray text-base max-w-2xl leading-relaxed">
                Für jede Branche, die wir bedienen, liefern wir keine Einzelkomponenten —
                wir liefern alles, was Ihr Team benötigt, aus einer Hand.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {showcase.map(({ slug, name, context, components, advantage, image, imageAlt }, i) => {
          const isNavy = i % 2 === 0;
          const isDark = isNavy || !!image;
          return (
            <div
              key={slug}
              className={`relative overflow-hidden min-h-[420px] ${
                image ? "" : isNavy ? "bg-navy" : "bg-white border-t border-gray-100"
              }`}
            >
              {image && (
                <>
                  <Image
                    src={image}
                    alt={imageAlt ?? ""}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-[#1A2540]/72" aria-hidden="true" />
                </>
              )}
              <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-16">
                <ScrollReveal>
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
                    {/* Left: context + advantage */}
                    <div className="lg:col-span-3">
                      <p className={`font-mono text-[10px] uppercase tracking-widest mb-2 ${isDark ? "text-gold/80" : "text-mid-gray/50"}`}>
                        ERHO Komplettpaket
                      </p>
                      <h3 className={`font-display text-2xl lg:text-3xl font-semibold mb-4 leading-snug ${isDark ? "text-white" : "text-navy"}`}>
                        {name}
                      </h3>
                      <p className={`font-body text-base leading-relaxed mb-6 ${isDark ? "text-white/80" : "text-mid-gray"}`}>
                        {context}
                      </p>
                      <p className={`font-body text-sm font-semibold leading-relaxed mb-6 ${isDark ? "text-gold" : "text-navy"}`}>
                        &ldquo;{advantage}&rdquo;
                      </p>
                      <Link
                        href={`/sectors/${slug}`}
                        className={`inline-flex items-center gap-1.5 font-body text-sm font-medium transition-colors duration-200 ${isDark ? "text-gold hover:text-gold/80" : "text-navy hover:text-gold"}`}
                      >
                        Branchendetails anzeigen <ArrowRight size={13} aria-hidden="true" />
                      </Link>
                    </div>

                    {/* Right: component list */}
                    <div className="lg:col-span-2">
                      <p className={`font-mono text-[10px] uppercase tracking-widest mb-3 ${isDark ? "text-gold/80" : "text-mid-gray/50"}`}>
                        Was wir liefern
                      </p>
                      <div className="rounded-sm p-5 bg-white/8 border border-white/15">
                        <ul className="space-y-2.5" role="list">
                          {components.map(({ name: cName, note }) => (
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
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
              Warum ERHO
            </p>
            <h2 id="pillars-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Was wir in jede Partnerschaft einbringen
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map(({ title, body }, i) => (
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
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
              Unsere Geschäftsbereiche
            </p>
            <h2 id="bu-heading" className="font-display text-navy text-3xl lg:text-4xl font-semibold">
              Drei Kompetenzen. Eine Gruppe. Ein Gespräch.
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {businessUnits.map(({ name, href, accent, accentText, image, desc, services }, i) => (
              <ScrollReveal key={name} delay={i * 80}>
                <div className={`relative rounded-sm border-t-4 ${accent} overflow-hidden h-full flex flex-col`}>
                  <Image
                    src={image}
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-[#1A2540]/70" aria-hidden="true" />
                  <div className="relative z-10 p-6 flex flex-col h-full">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/35 mb-1">ERHO</p>
                    <h3 className={`font-display text-lg font-semibold mb-3 ${accentText}`}>{name}</h3>
                    <p className="font-body text-white/65 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
                    <ul className="space-y-1 mb-5" role="list">
                      {services.map((s) => (
                        <li key={s} className="font-body text-xs flex items-start gap-1.5">
                          <span className={accentText} aria-hidden="true">·</span>
                          <span className="text-white/50">{s}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={href}
                      className={`font-body text-xs font-medium ${accentText} hover:opacity-75 transition-opacity duration-200 inline-flex items-center gap-1`}
                    >
                      Mehr erfahren <ArrowRight size={11} aria-hidden="true" />
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
        <Image
          src="/images/AdobeStock_390654783.jpeg"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A2540]/75" aria-hidden="true" />
        <div className="absolute inset-0 hero-texture opacity-25 pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal>
              <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
                Globale Beschaffung
              </p>
              <h2 id="global-heading" className="font-display text-white text-2xl lg:text-3xl font-semibold">
                Globale Reichweite. Schweizer Standards.
              </h2>
              <span className="gold-rule" aria-hidden="true" />
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div className="space-y-4 font-body text-white/60 text-base leading-relaxed">
                <p>
                  Wir beschaffen bei den besten Herstellern weltweit — und bringen europäische
                  Qualitätsstandards in jedes Werk, mit dem wir zusammenarbeiten. Unsere
                  Vor-Ort-QA-Präsenz bei globalen Lieferantenwerken bedeutet volle
                  Verantwortlichkeit, unabhängig davon, wo die Komponente gefertigt wird.
                </p>
                <p>
                  Wir wählen unsere Lieferanten mit Sorgfalt und bauen langfristige
                  Beziehungen auf. Wir jagen nicht dem günstigsten Angebot nach — wir
                  qualifizieren Partner, die unseren technischen und kaufmännischen Standards
                  entsprechen, und investieren dann in langfristige Beziehungen, die auf
                  Vertrauen, Transparenz und gemeinsamer Verantwortung beruhen.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────────────── */}
      <section className="bg-navy border-t border-white/8 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {[
              { end: 3, suffix: "", label: "Geschäftsbereiche" },
              { end: 9, suffix: "+", label: "Bediente Marktsegmente" },
              { end: 20, suffix: "+", label: "Qualifizierte Lieferantenpartner" },
              { end: 3, suffix: "", label: "Standorte in Europa" },
              { end: 24, suffix: "h", label: "Reaktionszeit auf jede Anfrage" },
            ].map(({ end, suffix, label }) => (
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
            <p className="font-mono text-gold text-[11px] tracking-[0.22em] uppercase mb-3">
              Endmärkte
            </p>
            <h2 id="sectors-heading" className="font-display text-navy text-2xl lg:text-3xl font-semibold mb-2">
              Alle Branchen, die wir bedienen
            </h2>
            <span className="gold-rule" aria-hidden="true" />
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sectors.map(({ slug, name, tagline }, i) => (
              <ScrollReveal key={slug} delay={i * 40}>
                <Link
                  href={`/sectors/${slug}`}
                  className="group flex items-start justify-between gap-3 bg-white border border-gray-100 rounded-sm p-5 hover:border-gold/35 transition-all duration-200"
                >
                  <div>
                    <h3 className="font-display text-navy text-base font-semibold mb-1 group-hover:text-gold transition-colors duration-200">
                      {name}
                    </h3>
                    <p className="font-body text-mid-gray text-xs leading-relaxed">{tagline}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-gold shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Client Trust Band ─────────────────────────────────────────────── */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-body text-mid-gray/60 text-xs text-center mb-6 tracking-wider uppercase">
            Vertraut von Beschaffungs- und Technikteams führender europäischer OEMs
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
            {trustBrands.map((brand) => (
              <span
                key={brand}
                className="font-display text-navy/30 text-sm font-semibold tracking-wide"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="bg-navy hero-texture py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-white text-3xl font-semibold">
              Haben Sie einen Projektbedarf?
            </h2>
            <p className="mt-4 font-body text-white/60 text-base max-w-lg mx-auto leading-relaxed">
              Teilen Sie Ihre Komponentenliste oder Ihr Zeichnungspaket mit uns. Wir prüfen
              es und melden uns innerhalb von 24 Stunden mit einem vollständigen Beschaffungsangebot.
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
