export interface ComponentItem {
  name: string;
  note: string;
}

export interface MaterialItem {
  grade: string;
  standard: string;
  note?: string;
}

export interface HeroSlide {
  src: string;
  objectPosition?: string;
  imageScale?: number; // CSS scale transform on the image (e.g. 0.8 to zoom out)
}

export interface Sector {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;          // "The ERHO complete package" paragraph
  advantage?: string;        // bold advantage sentence (lead sectors)
  componentList?: ComponentItem[]; // structured monospace list (lead sectors)
  components: string[];      // simple list (legacy sectors)
  materials: MaterialItem[];
  standards: string[];
  heroImages?: HeroSlide[];  // hero carousel slides (1 = static, 2+ = carousel)
  heroOverlay?: number;      // navy overlay opacity 0–100, default 65
}

export const sectors: Sector[] = [
  // ── Lead sectors ────────────────────────────────────────────────────────────
  {
    slug: "heat-exchangers",
    name: "Prozess-Wärmetauscher",
    tagline: "Vollständige Komponentensätze für Rohrbündel- und Plattenwärmetauscher.",
    description:
      "Die Beschaffung von Wärmetauschern ist per se fragmentiert. Rohrplatten, Rohre, Trennwände, Stutzen und Flansche kommen typischerweise von verschiedenen Speziallieferanten — jeder mit eigenen Lieferzeiten, Qualitätssystemen und Dokumentationsanforderungen.",
    challenge:
      "Die Beschaffung von Wärmetauschern ist per se fragmentiert. Jeder Komponententyp — Rohrplatten, Rohre, Stutzen, Flansche — kommt typischerweise von einem anderen Spezialisten. Das Ergebnis sind mehrere Lieferzeiten zu verwalten, mehrere Qualitätssysteme zu auditieren und mehrere Lieferungen zu koordinieren. Eine verspätete Komponente blockiert die gesamte Montage.",
    solution:
      "ERHO Industry Solutions liefert den vollständigen Wärmetauscher-Komponentensatz aus einer Hand. Jede Position wird nach Ihrer Zeichnung und Ihrem Standard gefertigt, vollständig bearbeitet und mit einem einzigen EN-10204-3.1- oder -3.2-Zertifikatspaket geliefert. Ihr Montageteam erhält alles Notwendige in einer Lieferung.",
    advantage:
      "Jede Komponente für Ihren Wärmetauscher — vollständig bearbeitet und zertifiziert, aus einer einzigen Bestellung. Ihre Montagehalle erhält ein Komplettpaket — kein Koordinationsaufwand.",
    componentList: [
      { name: "Rohrplatten", note: "geschmiedet oder Walzplatte, vollständig bearbeitet, nach Bohrschema gebohrt" },
      { name: "Rohre", note: "nahtlos, U-Rohre, verschiedene Güten (CS, SS, Duplex, Titan)" },
      { name: "Trennwände", note: "geschmiedet oder aus Platte bearbeitet" },
      { name: "Stutzen", note: "geschmiedet, präzisionsgedreht, schweisskantenbearbeitet" },
      { name: "Flansche", note: "EN 1092 / ANSI B16.5, alle Druckstufen" },
      { name: "Zuganker & Abstandshalter", note: "Stabmaterial bearbeitet, nach Zeichnung gewindegefertigt" },
      { name: "Mantelschüsse", note: "Walzplatte oder geschmiedete Mantelringe (auf Anfrage)" },
    ],
    components: [],
    materials: [
      { grade: "P265GH / P355GH", standard: "EN 10222-2", note: "Kohlenstoffstahl-Rohrplatten & Stutzen" },
      { grade: "316L / 316L(N)", standard: "EN 10222-5", note: "Edelstahl-Rohrplatten & Rohre" },
      { grade: "1.4462 Duplex", standard: "EN 10222-5", note: "Rohrplatten für korrosive Anwendungen" },
      { grade: "1.4410 Superduplex", standard: "EN 10222-5", note: "Hochlegiert für korrosive Anwendungen" },
      { grade: "Titanium Gr.2 / Gr.12", standard: "ASTM B381", note: "Rohre für Meerwasser-/Säureanwendungen" },
      { grade: "Inconel 625", standard: "ASME SB-564", note: "Hochtemperatur / korrosiv" },
    ],
    standards: ["EN 10222", "ASME VIII", "PED 2014/68/EU", "AD 2000", "TEMA", "EN 10204 3.1/3.2"],
    heroImages: [
      { src: "/images/AdobeStock_1944076883.jpeg" },
      { src: "/images/AdobeStock_316400601.jpeg" },
      { src: "/images/AdobeStock_1538685332.jpeg" },
      { src: "/images/AdobeStock_1944072510.jpeg" },
    ],
    heroOverlay: 72,
  },
  {
    slug: "valves-pipelines",
    name: "Armaturen & Armaturengruppen",
    tagline: "Vollständige Komponentensätze für Schieber-, Kugel-, Schmetterlings- und Rückschlagarmaturen.",
    description:
      "Die Beschaffung von Armaturengruppen umfasst mehrere Präzisionskomponenten aus mehreren Spezialquellen. Die Verwaltung dieser Fragmentierung — insbesondere unter engen Projektzeitplänen — schafft Risiken auf jedem Schritt.",
    challenge:
      "Die Beschaffung von Armaturengruppen umfasst mehrere Präzisionskomponenten aus mehreren Spezialquellen. Die Verwaltung dieser Fragmentierung — insbesondere unter engen Projektzeitplänen — schafft Risiken auf jedem Schritt. Eine einzige nicht konforme Komponente kann eine gesamte Armatur verzögern und damit eine gesamte Anlageninbetriebnahme.",
    solution:
      "Wir liefern den vollständigen Komponentensatz für Schieber-, Kugel-, Schmetterlings- und Rückschlagarmaturen — vollständig bearbeitet, geprüft und zertifiziert. Alle Komponenten kommen gemeinsam an, dokumentiert unter einem einzigen Qualitätspaket. Ihr Montageteam kann sofort loslegen.",
    advantage:
      "Wir liefern alle Armaturenkomponenten aus einer Hand — bearbeitet, zertifiziert und montagefertig. Eine Lieferung. Ein Qualitätszertifikat. Null Koordinationsaufwand.",
    componentList: [
      { name: "Armaturengehäuse", note: "geschmiedet oder gegossen, API 6A / EN 13709" },
      { name: "Deckel", note: "Schmiedestahl, flanschiert oder gewindet" },
      { name: "Spindeln", note: "präzisionsgedreht, Stellite-Panzerschicht auf Anfrage" },
      { name: "Scheiben / Keile", note: "geschmiedet, gehärtet, geschliffen" },
      { name: "Sitze", note: "bearbeitet, Hartauftragsschweissung auf Anfrage" },
      { name: "Endflansche", note: "ANSI B16.5 / EN 1092, alle Klassen" },
      { name: "Schraubensätze", note: "werkstoffzertifiziert, Güte nach Spezifikation" },
    ],
    components: [],
    materials: [
      { grade: "A105 / F11 / F22", standard: "ASME A182", note: "Standard Kohlenstoff-/CrMo-Armaturenschmiedestücke" },
      { grade: "316L / F316L", standard: "ASME A182", note: "Edelstahl-Armaturengehäuse" },
      { grade: "1.4462 Duplex", standard: "EN 10222-5", note: "Korrosionsbeständige Armaturengehäuse" },
      { grade: "Inconel 625 / 718", standard: "ASME SB-564", note: "Hochtemperatur / H2S-Anwendungen" },
      { grade: "CA6NM", standard: "ASTM A743", note: "Gegossene Armaturengehäuse, Wasseranwendungen" },
    ],
    standards: ["API 6A", "API 6D", "EN 13709", "ASME B16.34", "EN 10204 3.1/3.2"],
    heroImages: [
      { src: "/images/AdobeStock_1934105316.jpeg" },
      { src: "/images/AdobeStock_154331289.jpeg" },
      { src: "/images/AdobeStock_1944072510.jpeg" },
    ],
    heroOverlay: 65,
  },
  {
    slug: "compressors-pumps",
    name: "Kompressoren & Pumpen",
    tagline: "Vollständige Komponentensätze für Kolben-, Schrauben-, Kreisel- und Drehkolbenmaschinen.",
    description:
      "Kompressoren- und Pumpenhersteller arbeiten mit einer anspruchsvollen Mischung aus gegossenen und zerspanten Komponenten — jede mit engen Toleranzen, Oberflächengüteanforderungen und Werkstoffzertifizierungen. Die Komponentenbasis variiert je nach Maschinentyp erheblich.",
    challenge:
      "Kompressoren- und Pumpenhersteller arbeiten mit einer anspruchsvollen Mischung aus gegossenen und zerspanten Komponenten — jede mit engen Toleranzen, Oberflächengüteanforderungen und Werkstoffzertifizierungen. Die Komponentenbasis variiert je nach Maschinentyp: Kolben, Schrauben, Kreiselpumpen, Drehkolben. Die Verwaltung von Speziallieferanten für jeden Komponententyp schafft Komplexität, Kosten und Risiken.",
    solution:
      "Ob Sie Kolbenpumpen, Schraubenverdichter, Kreiselpumpen oder Drehkolbeneinheiten bauen — ERHO liefert den vollständigen Komponentensatz, von gegossenen Gehäusen bis zu präzisen Innenelementen. Wir verstehen die mechanischen Anforderungen von Rotationsmaschinen und konfigurieren unsere Lieferung entsprechend.",
    advantage:
      "Vom Gussgehäuse bis zu den inneren Arbeitselementen — wir liefern den vollständigen Komponentensatz für Ihren Kompressor oder Ihre Pumpe — nach Ihrer Zeichnung bearbeitet, nach Ihrem Standard zertifiziert, als Komplettpaket geliefert.",
    componentList: [
      { name: "Gussgehäuse", note: "Sand- oder Feinguss, nach Zeichnung bearbeitet" },
      { name: "Zylinderlaufbuchsen", note: "präzisionsgespindelt, gehonte Oberfläche" },
      { name: "Kolben & Stangen", note: "geschmiedet, gedreht, gehärtet" },
      { name: "Schraubenrotoren", note: "präzisionsgefräst, Steuerungsgewindeprofil" },
      { name: "Laufräder", note: "gegossen oder geschmiedet, dynamisch gewuchtet" },
      { name: "Lagergehäuse", note: "gegossen, auf Toleranz gespindelt" },
      { name: "Wellen & Kupplungen", note: "geschmiedet, geschliffene Oberfläche" },
    ],
    components: [],
    materials: [
      { grade: "42CrMo4", standard: "EN 10083", note: "Wellen, Kolben, Pleuelstangen" },
      { grade: "GJS-500 / GJL-250", standard: "EN 1563", note: "Gusseisen-Gehäuse & Lagergehäuse" },
      { grade: "1.4408 / CF8M", standard: "EN 10283", note: "Edelstahl-Pumpengehäuse" },
      { grade: "CA6NM", standard: "ASTM A743", note: "Martensitische Edelstahl-Gehäuse, Wasserpumpen" },
      { grade: "Duplex 1.4462", standard: "EN 10283", note: "Pumpengehäuse für korrosive Anwendungen" },
      { grade: "Bronze / Gunmetal", standard: "EN 1982", note: "Laufräder, Verschleissringe" },
    ],
    standards: ["EN 10204 3.1/3.2", "ISO 9001", "API 610", "API 618", "ATEX (auf Anfrage)"],
    heroImages: [
      { src: "/images/AdobeStock_1581156194.jpeg" },
      { src: "/images/AdobeStock_401028158.jpeg" },
      { src: "/images/AdobeStock_1934105316.jpeg" },
    ],
    heroOverlay: 72,
  },
  {
    slug: "plastics-extrusion",
    name: "Kunststoff & Extrusionsanlagen",
    tagline: "Verschleissfeste Zylinder, Schnecken und Präzisionskomponenten für Kunststoffverarbeitungsmaschinen.",
    description:
      "Extrusionsmaschinen sind auf hochverschleissfeste, hochpräzise Komponenten angewiesen, die unter extremem thermischem und mechanischem Stress standhalten müssen. Zylinder und Schnecken erfordern insbesondere Sonderwerkstoffe und Oberflächenbehandlungen.",
    challenge:
      "Extrusionsmaschinen sind auf hochverschleissfeste, hochpräzise Komponenten angewiesen, die unter extremem thermischem und mechanischem Stress standhalten müssen. Zylinder und Schnecken erfordern insbesondere Sonderwerkstoffe und Oberflächenbehandlungen. Die Beschaffung dieser Komponenten über mehrere Lieferanten schafft Inkonsistenzen — in Qualität, Lieferzeit und Dokumentation.",
    solution:
      "Wir liefern den vollständigen Verschleiss- und Präzisionskomponentensatz für Ein- und Doppelschneckenextruder, Blasformmaschinen und Nachfolgeausrüstung. Alle Komponenten werden nach Ihrer Zeichnung in der richtigen Werkstoffspezifikation gefertigt, mit vollständiger Masshaltigkeits- und Werkstoffzertifizierung.",
    advantage:
      "Jede Verschleisskomponente und jedes Präzisionselement für Ihre Extrusionslinie — aus einer einzigen qualifizierten Quelle. Gleichbleibende Qualität, gleichbleibende Lieferzeiten, eine Lieferantenbeziehung zu pflegen.",
    componentList: [
      { name: "Extruderzylinder", note: "bimetallisch (Xaloy-Typ), nitriert oder Werkzeugstahl" },
      { name: "Extruderschnecken", note: "Ein- oder Doppelschnecke, präzisionsgeschliffen, verschiedene Gangprofile" },
      { name: "Düsenköpfe", note: "nach Zeichnung bearbeitet, verschiedene Polymertypen" },
      { name: "Kolben", note: "gehont, verchromt oder nitriert" },
      { name: "Siebträgerplatten", note: "gebohrt, präzisionsgespindelt" },
      { name: "Adapterabschnitte", note: "bearbeitet, Flanschanschlüsse" },
      { name: "Getriebegehäuse", note: "gegossen, nach Zeichnung bearbeitet" },
    ],
    components: [],
    materials: [
      { grade: "X155CrVMo12-1 (D2)", standard: "EN ISO 4957", note: "Werkzeugstahl-Zylinderauskleidungen" },
      { grade: "1.2379", standard: "EN ISO 4957", note: "Hochverschleiss-Schneckensegmente" },
      { grade: "42CrMo4", standard: "EN 10250-3", note: "Schneckenkerne, Wellen" },
      { grade: "316L", standard: "EN 10250-4", note: "Lebensmittelgerechte / korrosionsbeständige Varianten" },
      { grade: "GJL-250 / GJS-400", standard: "EN 1561 / EN 1563", note: "Gussgehäuse und Einzugsabschnitte" },
    ],
    standards: ["EN ISO 4957", "EN 10250", "EN 10204 3.1/3.2", "ISO 9001", "DIN 16756"],
  },

  // ── Supporting sectors ───────────────────────────────────────────────────────
  {
    slug: "oil-gas",
    name: "Öl & Gas",
    tagline: "Drucktragende Komponenten für Upstream-, Midstream- und Downstream-Anwendungen.",
    description:
      "Der Öl- und Gassektor erfordert Komponenten, die die strengsten Anforderungen an Druck, Temperatur und Korrosionsbeständigkeit erfüllen. Wir liefern geschmiedete und gegossene Komponenten, die API-, ASME- und EN-Normen entsprechen.",
    challenge:
      "Beschaffungsteams stehen vor langen Lieferzeiten aus Spezialschmieden, komplexen Werkstoffzertifizierungen und dem Bedarf an rückverfolgbaren, drucktragenden Komponenten, die API- und ASME-Spezifikationen erfüllen.",
    solution:
      "ERHO Industry Solutions unterhält direkte Beziehungen zu europäischen Schmiedewerken, die für Öl- und Gasanwendungen qualifiziert sind. Wir verwalten die vollständige Dokumentation — einschliesslich 3.1- oder 3.2-Werkstoffprüfzeugnissen, NACE-Konformität und Rückverfolgbarkeit von der Schmelze bis zur Lieferung.",
    components: [
      "Flansche (Vorschweiss-, Blind-, Vorschweiss- und Gewindeflansche)",
      "Armaturengehäuse und Deckel",
      "Druckbehälterböden und -schüsse",
      "Rohrplatten und Wärmetauscherkomponenten",
      "Verteilerblöcke und Fittings",
    ],
    materials: [
      { grade: "F316L / F316", standard: "ASTM A182" },
      { grade: "F51 Duplex / F55 Superduplex", standard: "ASTM A182" },
      { grade: "F625 Inconel", standard: "ASTM B564" },
      { grade: "42CrMo4", standard: "EN 10250-3" },
      { grade: "CA6NM", standard: "ASTM A743" },
      { grade: "P265GH / P355GH", standard: "EN 10222-2" },
    ],
    standards: ["API 6A", "API 6D", "ASME VIII", "ASME B16.5", "EN 10222", "NACE MR0175"],
    heroImages: [{ src: "/images/AdobeStock_827330529.jpeg", objectPosition: "center 40%" }],
    heroOverlay: 65,
  },
  {
    slug: "naval-marine",
    name: "Schiffbau & Marine",
    tagline: "Klassifikationsgesellschafts-zertifizierte Schmiedestücke für Schiffe, Offshore-Plattformen und Marinebauten.",
    description:
      "Marine- und Marineanwendungen erfordern Komponenten, die von Klassifikationsgesellschaften wie DNV GL, Bureau Veritas und Lloyd's Register zertifiziert sind. Wir liefern Schmiedestücke und Gussteile mit den erforderlichen Klassenzertifikaten.",
    challenge:
      "Die marine Beschaffung erfordert die Einbindung von Klassifikationsgesellschaften, lange Genehmigungsverfahren und Dokumentationspakete, die Besichtiger zufriedenstellen. Lieferzeiten für grosse marine Schmiedestücke sind typischerweise länger.",
    solution:
      "Wir arbeiten mit Schmiedepartnern zusammen, die von DNV GL, BV und LR vorab genehmigt sind. Unser Projektmanagement umfasst die Koordination von Überwachungsinspektionen, die Ausstellung von Klassenzertifikaten und die Masshaltigkeit.",
    components: [
      "Antriebswellen und Zwischenwellen",
      "Propellernaben und Nabendeckel",
      "Ruderschafte und Ruderbolzen",
      "Stevenrohrkomponenten",
      "Deckmaschinenspangen und Flansche",
    ],
    materials: [
      { grade: "42CrMo4 / 34CrNiMo6", standard: "EN 10250-3" },
      { grade: "1.4462 Duplex", standard: "EN 10228-4" },
      { grade: "316L", standard: "EN 10228-4" },
      { grade: "Carbon steel C45E", standard: "EN 10250-2" },
      { grade: "Cu-Al bronze", standard: "EN 1982" },
    ],
    standards: ["DNV GL", "Bureau Veritas (BV)", "Lloyd's Register (LR)", "EN 10228", "ISO 9001"],
    heroImages: [{ src: "/images/AdobeStock_1924204614.jpeg", objectPosition: "left center" }],
    heroOverlay: 60,
  },
  {
    slug: "mining",
    name: "Bergbau",
    tagline: "Schwere Schmiedestücke für den kontinuierlichen Hochlast-Betrieb.",
    description:
      "Bergbauausrüstung arbeitet unter extremen Bedingungen — hohe Lasten, abrasive Umgebungen und kontinuierliche Betriebszyklen. ERHO Industry Solutions liefert die schweren Schmiedestücke und Gussteile, die Brecher, Mühlen und Fördersysteme am Laufen halten.",
    challenge:
      "Bergbau-OEMs benötigen grosse, schwere Schmiedestücke mit engen Masstoleranzen und gleichbleibenden mechanischen Eigenschaften. Lieferkontinuität und Lieferzeitvorhersagbarkeit sind entscheidend, um kostspielige Anlagenstillstände zu vermeiden.",
    solution:
      "Wir beschaffen grosse Freiformschmiedestücke aus schweren Schmiedewerken in Italien und Deutschland. Unsere Projektleiter verfolgen Produktionsmeilensteine und koordinieren Drittpartei-Inspektionen, um pünktliche Lieferung sicherzustellen.",
    components: [
      "Brecherwellen und Exzenterbuchsen",
      "Ritzel- und Zahnradrohlinge",
      "Lagergehäuse und Zapfenlager",
      "Mühlenmantel- und -kopfauskleidungen",
      "Antriebswellen und Kupplungsnaben",
    ],
    materials: [
      { grade: "42CrMo4 / 42CrMoS4", standard: "EN 10250-3" },
      { grade: "34CrNiMo6", standard: "EN 10250-3" },
      { grade: "S355J2 / S355NL", standard: "EN 10250-2" },
      { grade: "Mn13 Hadfield steel", standard: "EN 10293" },
    ],
    standards: ["EN 10250", "EN 10293", "ISO 9001", "ASTM A668"],
  },
  {
    slug: "gearbox-transmission",
    name: "Getriebe & Antrieb",
    tagline: "Präzisionsschmiedestücke für Getriebe in industriellen, Wind- und Meeresantrieben.",
    description:
      "Getriebe- und Antriebskomponenten erfordern enge Masshaltigkeit, sauberen Stahl und gleichbleibende mechanische Eigenschaften nach der Wärmebehandlung. Wir liefern gewalzte und freiformgeschmiedete Schmiedestücke in Einsatz- und Vergütungsgüten.",
    challenge:
      "Getriebe-OEMs benötigen Schmiedestücke mit vorhersehbarer Zerspanbarkeit, geringem Einschlussgehalt und gleichmässiger Kornstruktur — unabdingbar für zuverlässige Getriebeleistung über Jahrzehnte.",
    solution:
      "Wir spezifizieren Schmiedeparameter und Wärmebehandlung, um sicherzustellen, dass das Material in optimalem Zustand für die Zerspanungs- und Verzahnungsoperationen ist. Alle Schmiedestücke werden mit vollständigen Ultraschallprüfberichten geliefert.",
    components: [
      "Zahnradrohlinge (Stirn-, Schräg-, Kegelzahn)",
      "Ritzelwellen",
      "Hohlräder und Zahnkränze",
      "Planetenträgernaben",
      "Abtriebsflansche und Kupplungswellen",
    ],
    materials: [
      { grade: "18CrNiMo7-6", standard: "EN 10084" },
      { grade: "17CrNiMo6", standard: "EN 10084" },
      { grade: "20MnCr5", standard: "EN 10084" },
      { grade: "42CrMo4", standard: "EN 10083-3" },
      { grade: "34CrNiMo6", standard: "EN 10083-3" },
    ],
    standards: ["EN 10084", "EN 10250-3", "EN 10228-3 (UT)", "AGMA 6014", "ISO 6336"],
  },
  {
    slug: "energy-power",
    name: "Energie & Kraftwerke",
    heroImages: [
      { src: "/images/AdobeStock_670995999.jpeg" },
      { src: "/images/AdobeStock_299842359.jpeg" },
      { src: "/images/AdobeStock_353999438.jpeg" },
    ],
    heroOverlay: 60,
    tagline: "Hochintegrierte Schmiedestücke für Turbinen, Generatoren und Kraftwerksausrüstung.",
    description:
      "Stromerzeugungsanlagen arbeiten über Jahrzehnte unter extremen Temperaturen und Drücken. Komponentenintegrität ist nicht verhandelbar. Wir liefern Turbinenscheiben, Rotorwellen und Generatorschmiedestücke nach den anspruchsvollsten Spezifikationen.",
    challenge:
      "Die Beschaffung im Energiesektor erfordert vollständige Rückverfolgbarkeit, Abnahmeprüfung durch den Endnutzer oder seinen Vertreter sowie Dokumentation nach RCC-M-, AD-2000- oder EN-10222-Standards. Lange Lieferzeiten müssen weit im Voraus geplant werden.",
    solution:
      "Wir managen die vollständige Lieferkette vom Schmieden bis zur Endinspektion und koordinieren dabei mit Kundenvertretern und benannten Stellen. Unser Team ist erfahren in den Dokumentationsanforderungen kerntechnisch-naher und konventioneller Kraftwerksanwendungen.",
    components: [
      "Turbinenscheiben und beschaufelte Scheiben",
      "Rotorwellen und Stumpfwellen",
      "Generatorlagerschilder und Halteringe",
      "Frischdampfgehäuse und Armaturengehäuse",
      "Druckbehälterstutzen und -verschlüsse",
    ],
    materials: [
      { grade: "P91 / X10CrMoVNb9-1", standard: "EN 10222-2" },
      { grade: "26NiCrMoV11-5", standard: "EN 10250-3" },
      { grade: "316L(N)", standard: "RCC-M" },
      { grade: "Inconel 625 / 718", standard: "AMS 5666" },
      { grade: "CA6NM (martensitic stainless)", standard: "ASTM A743" },
    ],
    standards: ["EN 10222", "RCC-M", "AD 2000", "ASME III", "ISO 9001", "EN 10204 3.2"],
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return sectors.find((s) => s.slug === slug);
}
