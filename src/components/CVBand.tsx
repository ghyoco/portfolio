"use client";

import { Download, FileText } from "lucide-react";
import { useState } from "react";

import ActionButton from "@/components/ActionButton";
import CVModal from "@/components/CVModal";
import Reveal from "@/components/Reveal";
import { site, study } from "@/data/site";

/** A stylised CV page, drawn with divs - decoration, so it is hidden from a11y. */
function CvMock() {
  return (
    <div aria-hidden="true" className="hidden lg:block">
      <div className="w-64 -rotate-3 rounded-2xl border border-line bg-white p-6 shadow-2xl shadow-black/60 transition-transform duration-300 hover:rotate-0">
        <div className="h-2.5 w-28 rounded-full bg-zinc-800" />
        <div className="mt-2.5 h-1.5 w-40 rounded-full bg-zinc-300" />
        <div className="mt-1.5 h-1.5 w-32 rounded-full bg-zinc-300" />
        {[0, 1, 2].map((section) => (
          <div key={section} className="mt-6">
            <div className="h-1.5 w-14 rounded-full bg-accent/80" />
            <div className="mt-2.5 space-y-1.5">
              <div className="h-1.5 w-full rounded-full bg-zinc-200" />
              <div className="h-1.5 w-11/12 rounded-full bg-zinc-200" />
              <div className="h-1.5 w-8/12 rounded-full bg-zinc-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CVBand() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section id="cv" className="grain grid-lines relative overflow-hidden border-y border-line bg-soft text-ink">
      <div className="shell relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:py-28">
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
              ~/cv.pdf
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              One page. Read it here, or take it with you.
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted">
              {study.university.degree} at {study.university.school}, plus the internships,
              teaching and projects that go with it — updated August 2026. Some people want to
              skim it in the browser; some want the file. Both are one click away.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <ActionButton
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCvOpen(true);
                }}
                icon={<FileText size={16} />}
              >
                Open CV preview
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
        </Reveal>

        <Reveal delay={120}>
          <CvMock />
        </Reveal>
      </div>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
