import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { sectors } from "@/lib/sectors";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "de"
    ? { title: "Branchen — Endmärkte", description: "ERHO Industrietechnik bedient neun Industriebranchen mit vollständigen Komponentenpaketen." }
    : { title: "Sectors — End Markets", description: "ERHO Industry Solutions serves nine industrial sectors with complete component packages." };
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

const pageT = {
  de: {
    eyebrow: "Endmärkte",
    h1: "Komplettsätze für neun Industriebranchen",
    heroSub: "Jede Branche hat ihre eigenen Werkstoffstandards, Zertifizierungsanforderungen und Beschaffungsdynamiken. Wir kennen sie alle — und wir liefern vollständige Komponentensätze für jede einzelne.",
    viewSector: "Branche ansehen",
  },
  en: {
    eyebrow: "End Markets",
    h1: "Complete packages for nine industrial sectors",
    heroSub: "Every sector has its own material standards, certification requirements and procurement dynamics. We know them all — and we deliver complete component sets for each one.",
    viewSector: "View sector",
  },
};

export default async function SectorsPage({ params }: Props) {
  const { locale } = await params;
  const t = pageT[locale as Locale] ?? pageT.de;
  const isEn = locale === "en";
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

      <section className="bg-off-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sectors.map(({ slug, name, nameEn, tagline, taglineEn }, i) => (
              <ScrollReveal key={slug} delay={i * 55}>
                <Link
                  href={p(`/sectors/${slug}`)}
                  className="group block bg-white border border-gray-100 rounded-sm p-7 hover:border-gold/35 transition-all duration-200 h-full"
                >
                  <h2 className="font-display text-navy text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-200 leading-snug">
                    {isEn ? (nameEn ?? name) : name}
                  </h2>
                  <p className="font-body text-mid-gray text-sm leading-relaxed">
                    {isEn ? (taglineEn ?? tagline) : tagline}
                  </p>
                  <div className="mt-5 flex items-center gap-1 font-body text-gold text-xs font-medium">
                    {t.viewSector}
                    <ChevronRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
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
