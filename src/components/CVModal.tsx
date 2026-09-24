"use client";

import { Download, X } from "lucide-react";
import { useEffect, useRef } from "react";

import { site } from "@/data/site";

/**
 * A modal popup that previews the CV as an embedded PDF, with a download
 * button for people who'd rather take the file. Opens from the nav "./cv"
 * link, hero, and CV band.
 */
export default function CVModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Close on Escape, lock body scroll, and focus the close button.
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
      className="backdrop-in fixed inset-0 z-[100] flex items-center justify-center bg-paper/85 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <div
        className="modal-in flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-soft shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5">
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">~/</span>cv.pdf
          </p>
          <div className="flex items-center gap-2">
            <a
              href={site.resume.href}
              download={site.resume.downloadName}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-mist px-3.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Download size={14} />
              Download
            </a>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close CV preview"
              className="grid size-8 place-items-center rounded-full text-muted transition-colors hover:bg-mist hover:text-ink"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <iframe
          src={`${site.resume.href}#view=FitH`}
          title={`${site.name} CV (PDF preview)`}
          className="h-[75vh] w-full flex-1 bg-mist"
        />
      </div>
    </div>
  );
}
