import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy hero-texture flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-mono text-gold text-xs tracking-[0.25em] uppercase mb-4">
          404
        </p>
        <h1 className="font-display text-white text-4xl font-semibold mb-4">
          Page Not Found
        </h1>
        <span className="gold-rule mx-auto" aria-hidden="true" />
        <p className="mt-6 font-body text-white/60 text-base leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. It may have been
          moved or the URL is incorrect.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-navy font-body font-semibold text-sm rounded-sm hover:bg-gold/90 transition-colors duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
