import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const de = locale === "de";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: de ? "ERHO Industrietechnik" : "ERHO Industry Solutions",
    url: "https://erho-group.com",
    description: de
      ? "Schweizerischer Industriebeschaffungspartner — Schmiedeteile, Gussteile und Präzisionszerspanung für europäische OEMs."
      : "Swiss industrial procurement partner — forgings, castings and precision machining for European OEMs.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rütistrasse 6",
      addressLocality: "Baden",
      postalCode: "5400",
      addressCountry: "CH",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+41-44-406-20-01",
      contactType: "sales",
      email: "sales@integag.ch",
      availableLanguage: ["English", "German", "Italian", "French"],
    },
    parentOrganization: { "@type": "Organization", name: "ERHO Holding Group" },
  };

  return {
    metadataBase: new URL("https://erho-group.com"),
    title: {
      default: de
        ? "ERHO Industrietechnik | Ein Partner. Die vollständige Lieferkette."
        : "ERHO Industry Solutions | One Partner. The Complete Supply Chain.",
      template: de ? "%s | ERHO Industrietechnik" : "%s | ERHO Industry Solutions",
    },
    description: de
      ? "ERHO Industrietechnik bietet europäischen OEMs einen einzigen, technisch kompetenten Partner für Schmiedeteile, Gussteile und Präzisionszerspanung."
      : "ERHO Industry Solutions gives European OEMs a single, technically qualified partner for forgings, castings and precision machining.",
    keywords: de
      ? ["Industriebeschaffungspartner", "Schmiedeteile", "Gussteile", "Lieferkettensicherheit", "Schweizer Industrie"]
      : ["industrial procurement partner", "forged components", "cast components", "supply chain security", "Swiss industry"],
    openGraph: {
      type: "website",
      locale: de ? "de_DE" : "en_GB",
      siteName: de ? "ERHO Industrietechnik" : "ERHO Industry Solutions",
    },
    other: {
      "application/ld+json": JSON.stringify(organizationSchema),
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <>
      <Navbar locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} />
    </>
  );
}
