"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const supportOptions = [
  "Komplettpaket-Beschaffung",
  "Einzelkomponenten",
  "Zerspanungsdienstleistungen",
  "Lager & Finanzierung",
  "Technische Beratung",
  "Noch nicht sicher",
] as const;

const schema = z.object({
  fullName: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen ein"),
  company: z.string().min(2, "Bitte geben Sie Ihren Firmennamen ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  country: z.string().min(2, "Bitte wählen Sie Ihr Land aus"),
  sector: z.string().optional(),
  supportWith: z.array(z.string()).min(1, "Bitte wählen Sie mindestens einen Bereich aus"),
  requirementDescription: z.string().min(10, "Bitte beschreiben Sie Ihre Anforderung (mind. 10 Zeichen)"),
  materialGrade: z.string().optional(),
  responseLanguage: z.enum(["EN", "DE", "IT", "FR"]).optional(),
});

type FormData = z.infer<typeof schema>;

const europeanCountries = [
  "Österreich", "Belgien", "Kroatien", "Tschechische Republik", "Dänemark", "Estland",
  "Finnland", "Frankreich", "Deutschland", "Griechenland", "Ungarn", "Irland", "Italien",
  "Lettland", "Litauen", "Luxemburg", "Niederlande", "Norwegen", "Polen",
  "Portugal", "Rumänien", "Slowakei", "Slowenien", "Spanien", "Schweden",
  "Schweiz", "Vereinigtes Königreich", "Sonstige",
];

const sectorOptions = [
  "Wärmetauscher",
  "Armaturen & Armaturenbaugruppen",
  "Kompressoren & Pumpen",
  "Kunststoff- & Extrusionsanlagen",
  "Öl & Gas",
  "Marine & Schiffbau",
  "Bergbau",
  "Getriebe & Antriebstechnik",
  "Energie & Stromerzeugung",
  "Sonstige",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { responseLanguage: "DE", supportWith: [] },
  });

  const selectedSupport = watch("supportWith") ?? [];

  function toggleSupport(value: string) {
    if (selectedSupport.includes(value)) {
      setValue("supportWith", selectedSupport.filter((v) => v !== value), { shouldValidate: true });
    } else {
      setValue("supportWith", [...selectedSupport, value], { shouldValidate: true });
    }
  }

  const onSubmit = async (data: FormData) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <CheckCircle2 className="text-gold w-12 h-12 mb-4" aria-hidden="true" />
        <h3 className="font-display text-navy text-2xl font-semibold mb-3">
          Vielen Dank — wir prüfen Ihre Anforderung und melden uns innerhalb von 24 Stunden.
        </h3>
        <p className="font-body text-mid-gray text-base max-w-sm leading-relaxed">
          Wir haben Ihre Nachricht erhalten und werden Ihnen mit einem vollständigen Beschaffungsangebot antworten.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 font-body text-sm text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Anfrageformular">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <Field label="Vollständiger Name" required error={errors.fullName?.message}>
          <input {...register("fullName")} type="text" autoComplete="name" className={inputCls(!!errors.fullName)} />
        </Field>

        <Field label="Unternehmen" required error={errors.company?.message}>
          <input {...register("company")} type="text" autoComplete="organization" className={inputCls(!!errors.company)} />
        </Field>

        <Field label="E-Mail" required error={errors.email?.message}>
          <input {...register("email")} type="email" autoComplete="email" className={inputCls(!!errors.email)} />
        </Field>

        <Field label="Telefon" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" autoComplete="tel" className={inputCls(false)} />
        </Field>

        <Field label="Land" required error={errors.country?.message}>
          <select {...register("country")} className={inputCls(!!errors.country)}>
            <option value="">Land auswählen…</option>
            {europeanCountries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </Field>

        <Field label="Branche / Anwendung" error={errors.sector?.message}>
          <select {...register("sector")} className={inputCls(false)}>
            <option value="">Branche auswählen…</option>
            {sectorOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </Field>

        {/* Ich benötige Unterstützung bei — multi-select */}
        <div className="sm:col-span-2">
          <p className="font-body text-sm font-medium text-dark-text mb-2">
            Ich benötige Unterstützung bei <span className="text-gold" aria-hidden="true">*</span>
          </p>
          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Auswahl des Unterstützungsbereichs">
            {supportOptions.map((opt) => {
              const active = selectedSupport.includes(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => toggleSupport(opt)}
                  aria-pressed={active}
                  className={[
                    "font-body text-sm px-4 py-2 rounded-sm border transition-colors duration-150",
                    active
                      ? "bg-navy text-white border-navy"
                      : "bg-white text-dark-text border-gray-200 hover:border-navy/40",
                  ].join(" ")}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {errors.supportWith && (
            <p className="mt-1.5 font-body text-xs text-red-600" role="alert">
              {errors.supportWith.message as string}
            </p>
          )}
        </div>

        <Field label="Projekt- oder Anforderungsbeschreibung" required error={errors.requirementDescription?.message} className="sm:col-span-2">
          <textarea
            {...register("requirementDescription")}
            rows={4}
            className={`${inputCls(!!errors.requirementDescription)} resize-y`}
            placeholder="Beschreiben Sie den Komponentensatz, das Projekt oder die Herausforderung — Geometrie, Gewichtsbereich, Mengen, Zeitplan, oder senden Sie Referenzzeichnungen nach der Anfrage per E-Mail."
          />
        </Field>

        <Field label="Werkstoffgüte (falls bekannt)" error={errors.materialGrade?.message}>
          <input
            {...register("materialGrade")}
            type="text"
            placeholder="z. B. 42CrMo4, F316L, Inconel 625"
            className={inputCls(false)}
          />
        </Field>

        <Field label="Bevorzugte Antwortsprache" error={errors.responseLanguage?.message}>
          <select {...register("responseLanguage")} className={inputCls(false)}>
            <option value="DE">Deutsch</option>
            <option value="EN">English</option>
            <option value="IT">Italiano</option>
            <option value="FR">Français</option>
          </select>
        </Field>
      </div>

      {status === "error" && (
        <div className="mt-4 flex items-start gap-2 text-red-600 text-sm font-body" role="alert">
          <AlertCircle size={15} className="shrink-0 mt-0.5" aria-hidden="true" />
          <span>
            Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder senden Sie eine E-Mail an{" "}
            <a href="mailto:sales@integag.ch" className="underline">sales@integag.ch</a>.
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
      >
        {status === "submitting" ? (
          <>
            <span className="animate-spin w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full" aria-hidden="true" />
            Wird gesendet…
          </>
        ) : (
          <>
            Anfrage senden <Send size={14} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="mt-3 font-body text-xs text-mid-gray">
        Wir prüfen alle Anfragen und melden uns innerhalb von 24 Geschäftsstunden mit einem Beschaffungsangebot.
      </p>
    </form>
  );
}

function inputCls(hasError: boolean) {
  return [
    "w-full rounded-sm border px-3.5 py-2.5 font-body text-sm text-dark-text bg-white placeholder:text-mid-gray/55",
    "focus:outline-none focus:ring-2 focus:ring-gold/55 focus:border-gold transition-colors duration-150",
    hasError ? "border-red-400" : "border-gray-200 hover:border-gray-300",
  ].join(" ");
}

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

function Field({ label, required, error, children, className = "" }: FieldProps) {
  return (
    <div className={className}>
      <label className="block font-body text-sm font-medium text-dark-text mb-1.5">
        {label}
        {required && <span className="text-gold ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 font-body text-xs text-red-600" role="alert">{error}</p>
      )}
    </div>
  );
}
