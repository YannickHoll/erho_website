import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erho-industry.com"),
  title: {
    default: "ERHO Industry Solutions | Ein Partner. Die vollständige Lieferkette.",
    template: "%s | ERHO Industry Solutions",
  },
  description:
    "ERHO Industry Solutions bietet europäischen OEMs einen einzigen, technisch kompetenten Partner für geschmiedete, gegossene und zerspante Komponenten — Lieferkettensicherheit, Beschaffungsvereinfachung und technisches Know-how.",
  keywords: [
    "industrieller Beschaffungspartner",
    "geschmiedete Metallkomponenten",
    "gegossene Metallkomponenten",
    "Lieferkettensicherheit",
    "Beschaffungsvereinfachung",
    "europäische OEM-Lieferkette",
    "Freiformschmieden",
    "Ringwalzen",
    "42CrMo4",
    "Duplexstahl",
    "Inconel",
    "Schweizer Industrie",
  ],
  authors: [{ name: "ERHO Industry Solutions" }],
  creator: "ERHO Industry Solutions",
  publisher: "ERHO Industry Solutions",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "ERHO Industry Solutions",
    title: "ERHO Industry Solutions | Präzisionskomponenten. Europäische Lieferkette.",
    description:
      "Schweizerisches B2B-Industriehandelsunternehmen, spezialisiert auf geschmiedete und gegossene Metallkomponenten für europäische OEMs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ERHO Industry Solutions",
    description:
      "Schweizerischer B2B-Industriehandel — geschmiedete, gegossene und zerspante Komponenten für europäische OEMs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ERHO Industry Solutions",
  url: "https://erho-industry.com",
  logo: "https://erho-industry.com/logo.svg",
  description:
    "Schweizerisches B2B-Industriehandelsunternehmen, spezialisiert auf geschmiedete und gegossene Metallkomponenten für europäische OEMs.",
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
  parentOrganization: {
    "@type": "Organization",
    name: "ERHO Holding Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrains.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-off-white font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
