"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { HeroSlide } from "@/lib/sectors";

interface HeroCarouselProps {
  slides: HeroSlide[];
  overlayOpacity?: number; // 0–100, default 65
  showTexture?: boolean;
  interval?: number;       // ms between slides, default 4500
  showControls?: boolean;  // show prev/next + dots, default true
}

export function HeroCarousel({
  slides,
  overlayOpacity = 65,
  showTexture = true,
  interval = 4500,
  showControls = true,
}: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Reset the interval on every slide change (handles manual nav reset too)
  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [current, slides.length, interval]);

  if (!slides.length) return null;

  return (
    <>
      {/* Slides — crossfade */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.src}
            alt=""
            fill
            className="object-cover"
            style={{
              objectPosition: slide.objectPosition ?? "center center",
              ...(slide.imageScale !== undefined && {
                transform: `scale(${slide.imageScale})`,
                transformOrigin: "center center",
              }),
            }}
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Navy overlay */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(26,37,64,${overlayOpacity / 100})` }}
        aria-hidden="true"
      />

      {/* Grid texture */}
      {showTexture && (
        <div
          className="absolute inset-0 hero-texture opacity-30 pointer-events-none"
          aria-hidden="true"
        />
      )}

      {/* Controls — only rendered when multiple slides and showControls is true */}
      {showControls && slides.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors duration-200"
          >
            <ChevronLeft size={16} className="text-white/80" aria-hidden="true" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors duration-200"
          >
            <ChevronRight size={16} className="text-white/80" aria-hidden="true" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-5 bg-gold"
                    : "w-1.5 bg-white/35 hover:bg-white/55"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
