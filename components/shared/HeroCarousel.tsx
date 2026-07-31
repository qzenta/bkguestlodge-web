"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "./useReducedMotion";

type Slide = { src: string; alt: string };

export default function HeroCarousel({
  slides,
  children,
}: {
  slides: Slide[];
  children?: React.ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || slides.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [reducedMotion, slides.length]);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {children && (
        <div className="absolute inset-0">
          {/* Mobile: full solid scrim, since there's no room to show the photo through anyway */}
          <div className="absolute inset-0 bg-charcoal-ink/80 md:hidden" />
          {/* Desktop: left-panel gradient so the photo shows through on the right */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-charcoal-ink/95 via-charcoal-ink/70 to-transparent md:block" />
          <div className="relative flex h-full items-center">
            <div className="mx-auto w-full max-w-8xl px-4 py-10 text-soft-ivory md:px-8">
              <div className="max-w-lg md:max-w-xl">{children}</div>
            </div>
          </div>
        </div>
      )}

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-charcoal-ink/40 p-2 text-soft-ivory transition hover:bg-charcoal-ink/60"
          >
            <span aria-hidden="true">‹</span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-charcoal-ink/40 p-2 text-soft-ivory transition hover:bg-charcoal-ink/60"
          >
            <span aria-hidden="true">›</span>
          </button>
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 w-2 rounded-full transition ${
                  i === index ? "bg-soft-ivory" : "bg-soft-ivory/40"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
