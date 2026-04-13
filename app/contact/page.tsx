import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Teilen Sie ERHO Industry Solutions mit, was Sie benötigen. Senden Sie eine Zeichnung, Spezifikation oder einfach eine Anforderung — wir antworten innerhalb von 24 Stunden.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-navy hero-texture pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="font-mono text-gold text-[11px] tracking-[0.28em] uppercase mb-4">
            Kontakt aufnehmen
          </p>
          <h1 className="font-display text-white text-4xl lg:text-5xl font-semibold max-w-2xl leading-tight">
            Teilen Sie uns Ihr Projekt mit.
          </h1>
          <span className="gold-rule" aria-hidden="true" />
          <p className="mt-6 font-body text-white/60 text-lg max-w-xl leading-relaxed">
            Wir konfigurieren das Paket — und melden uns innerhalb von 24 Stunden mit einem vollständigen Beschaffungsangebot.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="bg-off-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

            {/* Left: positioning + contact details */}
            <aside aria-label="Kontaktinformationen">
              <div className="bg-navy rounded-sm p-7 sticky top-24">
                <p className="font-display text-white text-lg font-semibold leading-snug mb-2">
                  Teilen Sie uns Ihr Projekt mit. Wir konfigurieren das Paket.
                </p>
                <p className="font-body text-white/55 text-sm leading-relaxed mb-6">
                  Ein Gespräch deckt alle drei Geschäftsbereiche ab — Heavy Industry, Machining Services und Stock &amp; Finance.
                </p>

                <ul className="space-y-5" role="list">
                  <li className="flex items-start gap-3">
                    <MapPin size={14} className="text-gold shrink-0 mt-0.5" aria-hidden="true" />
                    <address className="font-body text-white/65 text-sm not-italic leading-relaxed">
                      ERHO Industry Solutions<br />
                      Rütistrasse 6<br />
                      5400 Baden<br />
                      Switzerland
                    </address>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail size={14} className="text-gold shrink-0" aria-hidden="true" />
                    <a
                      href="mailto:sales@integag.ch"
                      className="font-body text-white/65 text-sm hover:text-gold transition-colors duration-200"
                    >
                      sales@integag.ch
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone size={14} className="text-gold shrink-0" aria-hidden="true" />
                    <a
                      href="tel:+41444062001"
                      className="font-body text-white/65 text-sm hover:text-gold transition-colors duration-200"
                    >
                      +41 44 406 20 01
                    </a>
                  </li>
                </ul>

                <div className="mt-7 pt-6 border-t border-white/10 space-y-5">
                  <div>
                    <p className="font-mono text-gold text-[10px] tracking-widest uppercase mb-1.5">
                      Reaktionszeit
                    </p>
                    <p className="font-body text-white/55 text-sm leading-relaxed">
                      Alle Anfragen beantwortet innerhalb von{" "}
                      <strong className="text-white font-semibold">24 Geschäftsstunden</strong>,
                      in der Regel schneller.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-gold text-[10px] tracking-widest uppercase mb-1.5">
                      Sprachen
                    </p>
                    <p className="font-body text-white/55 text-sm">
                      Deutsch · English · Italiano · Français
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-100 rounded-sm p-7 lg:p-10">
                <h2 className="font-display text-navy text-2xl font-semibold mb-1">
                  Ihre Anfrage
                </h2>
                <p className="font-body text-mid-gray text-sm mb-8">
                  Mit <span className="text-gold font-semibold">*</span> markierte Felder sind Pflichtfelder.
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
