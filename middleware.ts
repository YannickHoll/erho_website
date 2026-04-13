import { NextRequest, NextResponse } from "next/server";

const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
const defaultLocale: Locale = "de";

function getPreferredLocale(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferred = acceptLanguage.split(",")[0].trim().toLowerCase().slice(0, 2);
  return (locales as readonly string[]).includes(preferred)
    ? (preferred as Locale)
    : defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip non-page requests
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".") // static files
  ) {
    return NextResponse.next();
  }

  // If path already has a locale prefix, allow through
  const firstSegment = pathname.split("/")[1];
  if ((locales as readonly string[]).includes(firstSegment)) {
    return NextResponse.next();
  }

  // Redirect bare paths to localized equivalent
  const locale = getPreferredLocale(request);
  const localized = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(new URL(localized, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
