"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Responsive photo grid with a keyboard-accessible lightbox.
 * `photos` is an array of { src, alt }. Click a thumbnail to open;
 * Esc closes, ← / → navigate.
 */
export default function GalleryGrid({ photos = [] }) {
  const [index, setIndex] = useState(-1);
  const open = index >= 0;

  const close = useCallback(() => setIndex(-1), []);
  const prev = useCallback(
    () => setIndex((i) => (i <= 0 ? photos.length - 1 : i - 1)),
    [photos.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i >= photos.length - 1 ? 0 : i + 1)),
    [photos.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  const active = open ? photos[index] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open photo ${i + 1} of ${photos.length}`}
            className="group relative aspect-[3/2] overflow-hidden border border-line bg-panel"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <span
              className="pointer-events-none absolute inset-0 bg-asphalt/0 transition-colors group-hover:bg-asphalt/20"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>

      {open && active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-asphalt/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center border border-line bg-panel/80 text-paper transition-colors hover:border-chrome hover:text-accent"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-line bg-panel/80 text-paper transition-colors hover:border-chrome hover:text-accent sm:left-6"
          >
            <ChevronLeft size={24} />
          </button>

          <div
            className="relative h-[78vh] w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              priority
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-line bg-panel/80 text-paper transition-colors hover:border-chrome hover:text-accent sm:right-6"
          >
            <ChevronRight size={24} />
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.18em] text-chrome">
            {index + 1} / {photos.length}
          </p>
        </div>
      )}
    </>
  );
}
