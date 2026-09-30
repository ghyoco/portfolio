"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function GalleryModal({
  open,
  title,
  images,
  onClose,
}: {
  open: boolean;
  title: string;
  images: string[];
  onClose: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [wasOpen, setWasOpen] = useState(open);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Reset to the first slide each time the gallery opens (render-time reset,
  // the React-approved alternative to a setState-in-effect).
  if (open !== wasOpen) {
    setWasOpen(open);
    if (open) setIndex(0);
  }

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  if (!open || images.length === 0) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} gallery`}
      className="backdrop-in fixed inset-0 z-[100] flex items-center justify-center bg-bg/95 p-2 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="modal-in flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-surface"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
          <p className="truncate font-mono text-sm text-muted">
            <span className="text-muted">~/{title}/</span>
            <span className="text-heading">{images[index].split("/").pop()}</span>
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <span className="font-mono text-xs text-muted">
              {index + 1} / {images.length}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close gallery"
              className="grid size-8 place-items-center rounded-md text-muted transition-colors hover:bg-elevated hover:text-heading"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center p-3 sm:p-6">
          <Image
            key={images[index]}
            src={images[index]}
            alt={`${title} screenshot ${index + 1} of ${images.length}`}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-md border border-border bg-bg/80 text-muted transition-colors hover:border-heading/40 hover:text-heading sm:left-4"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="absolute right-2 top-1/2 grid size-10 -translate-y-1/2 place-items-center rounded-md border border-border bg-bg/80 text-muted transition-colors hover:border-heading/40 hover:text-heading sm:right-4"
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 border-t border-border px-5 py-3">
            {images.map((image, i) => (
              <button
                key={image}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-heading" : "w-1.5 bg-line hover:bg-muted"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
