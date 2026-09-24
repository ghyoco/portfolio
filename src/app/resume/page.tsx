import type { Metadata } from "next";
import { Download } from "lucide-react";

import ActionButton from "@/components/ActionButton";
import SectionHeading from "@/components/SectionHeading";
import { education, experience, site, skills } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: `View or download the CV of ${site.name}, ${site.role.toLowerCase()}.`,
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <div className="shell py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          path="cv"
          title="My CV"
          description="One page, updated August 2026. Skim it right here, or download the PDF — whatever is easier for you."
          action={
            <ActionButton
              href={site.resume.href}
              download={site.resume.downloadName}
              icon={<Download size={16} />}
            >
              Download PDF
            </ActionButton>
          }
        />

        <div className="modal-in mt-10 overflow-hidden rounded-2xl border border-line bg-mist">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
            <p className="font-mono text-sm text-muted">
              <span className="text-accent">~/</span>cv.pdf
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
            src={`${site.resume.href}#view=FitH`}
            title={`${site.name} CV (PDF preview)`}
            className="h-[80vh] w-full bg-mist"
          />
        </div>

        <p className="mt-4 text-sm text-muted">
          Nothing showing?{" "}
          <a
            href={site.resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            Open the PDF in a new tab
          </a>{" "}
          or use the download button above.
        </p>

        {/* Text version, so the CV is readable (and indexable) without the PDF. */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-2">
          <section className="bg-soft p-6 sm:p-8">
            <h2 className="font-mono text-xs text-muted">education</h2>
            <p className="mt-4 font-semibold tracking-tight">
              {education.degree} · {education.school}
            </p>
            <p className="mt-1 font-mono text-xs text-faint">{education.period}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{education.coursework}</p>

            <h2 className="mt-10 font-mono text-xs text-muted">skills</h2>
            <dl className="mt-4 space-y-4 text-sm">
              {skills.map(({ group, items }) => (
                <div key={group}>
                  <dt className="font-mono text-xs text-faint">{group}</dt>
                  <dd className="mt-1 leading-relaxed">{items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="bg-soft p-6 sm:p-8">
            <h2 className="font-mono text-xs text-muted">experience</h2>
            <div className="mt-4 space-y-7">
              {experience.map((job) => (
                <article key={`${job.role}-${job.org}`}>
                  <p className="font-semibold tracking-tight">{job.role}</p>
                  <p className="mt-1 text-sm text-muted">
                    {job.org} · <span className="font-mono text-xs">{job.period}</span>
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
