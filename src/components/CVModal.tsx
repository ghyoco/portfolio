"use client";

import { Download, X } from "lucide-react";
import { useEffect, useRef } from "react";

import CVDocument from "@/components/CVDocument";
import { site } from "@/data/site";

export default function CVModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${site.name} CV`}
      className="backdrop-in fixed inset-0 z-[100] flex items-center justify-center bg-bg/90 p-2 backdrop-blur-sm sm:p-5"
      onClick={onClose}
    >
      <div
        className="modal-in flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3.5">
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">~/</span>cv.pdf
          </p>
          <div className="flex items-center gap-2">
            <a
              href={site.resume.href}
              download={site.resume.downloadName}
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-elevated px-3.5 py-1.5 text-sm font-medium text-heading transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Download size={14} />
              Download PDF
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="grid size-8 place-items-center rounded-lg text-muted transition-colors hover:bg-elevated hover:text-heading"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-6">
          <CVDocument />
        </div>
      </div>
    </div>
  );
}
