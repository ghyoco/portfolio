import type { Metadata } from "next";
import { Download } from "lucide-react";

import ActionButton from "@/components/ActionButton";
import SectionHeading from "@/components/SectionHeading";
import { education, experience, site, skills } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: `CV of ${site.name}, ${site.role.toLowerCase()}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="shell py-14 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          path="cv"
          title="CV"
          description="One page, updated August 2026."
          action={
            <ActionButton
              href={site.resume.href}
              download={site.resume.downloadName}
              icon={<Download size={14} />}
            >
              Download PDF
            </ActionButton>
          }
        />

        <div className="mt-8 overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-2.5">
            <p className="font-mono text-sm text-muted">
              ~/cv.pdf
            </p>
            <a
              href={site.resume.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              open in new tab →
            </a>
          </div>
          <iframe
            src={`${site.resume.href}#view=Fit&toolbar=0&navpanes=0`}
            title={`${site.name} CV (PDF preview)`}
            className="h-[85vh] w-full bg-surface"
          />
        </div>

        <p className="mt-3 text-sm text-muted">
          PDF not showing?{" "}
          <a
            href={site.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent"
          >
            Open directly
          </a>
          {" "}or{" "}
          <a
            href={site.resume.href}
            download={site.resume.downloadName}
            className="text-text underline decoration-border underline-offset-4 transition-colors hover:text-accent"
          >
            download
          </a>
          .
        </p>

        {/* Structured fallback below the embed */}
        <section className="mt-12 space-y-10">
          <div>
            <h2 className="font-mono text-xs text-muted">experience</h2>
            <div className="mt-4 space-y-6">
              {experience.map((job) => (
                <div key={`${job.role}-${job.org}`}>
                  <p className="font-semibold text-heading">{job.role}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {job.org} · <span className="font-mono text-xs">{job.period}</span>
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-text">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-mono text-xs text-muted">education</h2>
            <div className="mt-4">
              <p className="font-semibold text-heading">{education.degree}</p>
              <p className="mt-0.5 text-sm text-muted">
                {education.school} · <span className="font-mono text-xs">{education.period}</span>
              </p>
              <p className="mt-2 text-sm text-text">{education.coursework}</p>
            </div>
          </div>

          <div>
            <h2 className="font-mono text-xs text-muted">skills</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.group}>
                  <p className="text-sm font-medium text-heading">{group.group}</p>
                  <p className="mt-1 text-sm text-text">{group.items.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
