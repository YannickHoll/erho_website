import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "de" }, { locale: "en" }];
}

export default async function CapabilitiesRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  redirect(`/${locale}/solutions`);
}
