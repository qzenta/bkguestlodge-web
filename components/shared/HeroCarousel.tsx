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
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-charcoal-ink/80 via-charcoal-ink/20 to-transparent">
          <div className="mx-auto w-full max-w-8xl px-4 pb-10 text-soft-ivory md:px-8 md:pb-16">
            {children}
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
