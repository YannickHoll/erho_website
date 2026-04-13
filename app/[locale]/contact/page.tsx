import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return locale === "de"
    ? { title: "Kontakt", description: "Teilen Sie ERHO Industrietechnik mit, was Sie benötigen. Antwort innerhalb von 24 Stunden." }
    : { title: "Contact", description: "Tell ERHO Industry Solutions what you need. We respond within 24 hours." };
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

const pageT = {
  de: {
    eyebrow:      "Kontakt aufnehmen",
    h1:           "Teilen Sie uns Ihr Projekt mit.",
    heroSub:      "Wir konfigurieren das Paket — und melden uns innerhalb von 24 Stunden mit einem vollständigen Beschaffungsangebot.",
    sideTitle:    "Teilen Sie uns Ihr Projekt mit. Wir konfigurieren das Paket.",
    sideSub:      "Ein Gespräch deckt alle drei Geschäftsbereiche ab — Heavy Industry, Machining Services und Stock & Finance.",
    responseEye:  "Reaktionszeit",
    responseBody: "Alle Anfragen beantwortet innerhalb von 24 Geschäftsstunden, in der Regel schneller.",
    responseStrong: "24 Geschäftsstunden",
    langEye:      "Sprachen",
    langBody:     "Deutsch · English · Italiano · Français",
    formTitle:    "Ihre Anfrage",
    formSub:      "Mit * markierte Felder sind Pflichtfelder.",
  },
  en: {
    eyebrow:      "Get in touch",
    h1:           "Tell us about your project.",
    heroSub:      "We'll configure the package — and come back within 24 hours with a full sourcing proposal.",
    sideTitle:    "Tell us about your project. We'll configure the package.",
    sideSub:      "One conversation covers all three business units — Heavy Industry, Machining Services and Stock & Finance.",
    responseEye:  "Response time",
    responseBody: "All enquiries answered within 24 business hours, usually faster.",
    responseStrong: "24 business hours",
    langEye:      "Languages",
    langBody:     "English · Deutsch · Italiano · Français",
    formTitle:    "Your Enquiry",
    formSub:      "Fields marked with * are required.",
  },
};

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const t = pageT[locale as Locale] ?? pageT.de;

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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
            <aside aria-label={t.eyebrow}>
              <div className="bg-navy rounded-sm p-7 sticky top-24">
                <p className="font-display text-white text-lg font-semibold leading-snug mb-2">{t.sideTitle}</p>
                <p className="font-body text-white/55 text-sm leading-relaxed mb-6">{t.sideSub}</p>
                <ul className="space-y-5" role="list">
                  <li className="flex items-start gap-3">
                    <MapPin size={14} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <address className="font-body text-white/65 text-sm not-italic leading-relaxed">
                      ERHO {locale === "de" ? "Industrietechnik" : "Industry Solutions"}<br />
                      Rütistrasse 6<br />5400 Baden<br />Switzerland
                    </address>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={14} className="text-gold shrink-0" aria-hidden="true" />
                    <a href="mailto:sales@integag.ch" className="font-body text-white/65 text-sm hover:text-gold transition-colors duration-200">sales@integag.ch</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={14} className="text-gold shrink-0" aria-hidden="true" />
                    <a href="tel:+41444062001" className="font-body text-white/65 text-sm hover:text-gold transition-colors duration-200">+41 44 406 20 01</a>
                  </li>
                </ul>
                <div className="mt-7 pt-6 border-t border-white/10 space-y-5">
                  <div>
                    <p className="font-mono text-gold text-[10px] tracking-widest uppercase mb-1.5">{t.responseEye}</p>
                    <p className="font-body text-white/55 text-sm leading-relaxed">
                      {t.responseBody.split(t.responseStrong)[0]}
                      <strong className="text-white font-semibold">{t.responseStrong}</strong>
                      {t.responseBody.split(t.responseStrong)[1]}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-gold text-[10px] tracking-widest uppercase mb-1.5">{t.langEye}</p>
                    <p className="font-body text-white/55 text-sm">{t.langBody}</p>
                  </div>
                </div>
              </div>
            </aside>
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-sm p-7 lg:p-10">
                <h2 className="font-display text-navy text-2xl font-semibold mb-1">{t.formTitle}</h2>
                <p className="font-body text-mid-gray text-sm mb-8">
                  <span className="text-gold font-semibold">*</span> {t.formSub}
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
