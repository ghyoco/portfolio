"use client";

import { useState } from "react";
import { Download, FileText } from "lucide-react";
import ActionButton from "@/components/ActionButton";
import CVModal from "@/components/CVModal";
import { site } from "@/data/site";

export default function CVBand() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section id="cv" className="border-t border-border py-16 lg:py-20">
      <div className="shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="prompt">
            <span className="text-muted">$ cp </span>
            ~/cv.pdf
            <span className="text-muted"> ~/Downloads</span>
          </p>
          <p className="mt-2 text-sm text-text">
            One page, current as of August 2026. Preview it here or keep a copy.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ActionButton
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCvOpen(true);
            }}
            icon={<FileText size={16} />}
          >
            Preview
          </ActionButton>
          <ActionButton
            variant="outline"
            href={site.resume.href}
            download={site.resume.downloadName}
            icon={<Download size={16} />}
          >
            Download PDF
          </ActionButton>
        </div>
      </div>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
