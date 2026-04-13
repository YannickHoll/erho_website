import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { sectors } from "@/lib/sectors";

export const metadata: Metadata = {
  title: "Branchen — Endmärkte",
  description:
    "ERHO Industry Solutions bedient neun Industriebranchen mit vollständigen Komponentenpaketen — von Wärmetauschern und Armaturen bis zu Kompressoren, Bergbauausrüstung und Stromerzeugung.",
};

export default function SectorsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">
            Endmärkte
          </p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Komplettsätze für neun Industriebranchen
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">
            Jede Branche hat ihre eigenen Werkstoffstandards, Zertifizierungsanforderungen
            und Beschaffungsdynamiken. Wir kennen sie alle — und wir liefern vollständige
            Komponentensätze für jede einzelne.
          </p>
        </div>
      </section>

      {/* Sectors grid */}
      <section className="bg-off-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map(({ slug, name, tagline }, i) => (
              <ScrollReveal key={slug} delay={i * 55}>
                <Link
                  href={`/sectors/${slug}`}
                  className="group block bg-white border border-gray-100 rounded-sm p-7 hover:border-gold/35 transition-all duration-200 h-full"
                >
                  <h2 className="font-display text-navy text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
                    {name}
                  </h2>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">{tagline}</p>
                  <div className="mt-5 flex items-center gap-1 font-body text-gold text-xs font-medium">
                    Branche ansehen{" "}
                    <ChevronRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
