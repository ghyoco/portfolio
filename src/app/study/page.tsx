import type { Metadata } from "next";
import { ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

import ActionButton from "@/components/ActionButton";
import SectionHeading from "@/components/SectionHeading";
import { site, study } from "@/data/site";

export const metadata: Metadata = {
  title: "Study background",
  description: `Where ${site.name} studied: a B.Sc. in Computer Science at Delft University of Technology, and the gymnasium diploma before it.`,
  alternates: { canonical: "/study" },
};

const { university, highSchool } = study;

export default function StudyPage() {
  return (
    <div className="shell py-16 lg:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} />
        back home
      </Link>

      <SectionHeading
        className="mt-8"
        path="study"
        title="Study background"
        description={study.intro}
        action={
          <ActionButton variant="outline" href="/resume" icon={<FileText size={15} />}>
            One-page version
          </ActionButton>
        }
      />

      <div className="mt-12 grid gap-6">
        {/* University */}
        <article className="rounded-2xl border border-line bg-mist p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex gap-5">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink font-mono text-sm font-semibold text-paper">
                {university.badge}
              </span>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {university.degree} · {university.school}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  {university.location} ·{" "}
                  <span className="font-mono text-xs">{university.period}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 max-w-prose space-y-4">
            {university.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {university.stats.map((stat) => (
              <div key={stat.label} className="bg-soft px-5 py-4">
                <dt className="font-mono text-xs text-faint">{stat.label}</dt>
                <dd className="mt-1.5 text-sm font-medium">{stat.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12">
            <div>
              <h3 className="text-sm font-semibold tracking-tight">Selected courses</h3>
              <ul className="mt-4 text-sm">
                {university.courses.map((course) => (
                  <li
                    key={course.code}
                    className="flex items-baseline gap-4 border-t border-line py-3 transition-colors first:border-t-0 first:pt-0 hover:text-ink"
                  >
                    <span className="w-16 shrink-0 font-mono text-xs text-accent">
                      {course.code}
                    </span>
                    <span className="flex-1 text-muted">{course.name}</span>
                    <span className="hidden font-mono text-xs text-muted sm:inline">
                      {course.term}
                    </span>
                    <span className="w-8 text-right font-mono text-xs">{course.grade}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 font-mono text-xs text-faint">
                Grades on the Dutch 1–10 scale, where 5.5 is a pass.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold tracking-tight">Outside the curriculum</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {university.activities.map((activity) => (
                  <li key={activity} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* High school */}
        <article className="rounded-2xl border border-line bg-mist p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8">
          <div className="flex gap-5">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink font-mono text-sm font-semibold text-paper">
              {highSchool.badge}
            </span>
            <div>
              <h2 className="text-lg font-semibold tracking-tight">{highSchool.school}</h2>
              <p className="mt-1 text-sm text-muted">
                {highSchool.programme} ·{" "}
                <span className="font-mono text-xs">{highSchool.period}</span>
              </p>
            </div>
          </div>

          <div className="mt-6 max-w-prose space-y-4">
            {highSchool.summary.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>

          <h3 className="mt-9 text-sm font-semibold tracking-tight">Subjects</h3>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {highSchool.subjects.map((subject) => (
              <li
                key={subject}
                className="rounded-full border border-line bg-soft px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-accent/50 hover:text-ink"
              >
                {subject}
              </li>
            ))}
          </ul>

          <dl className="mt-9 grid gap-4 sm:grid-cols-3">
            {highSchool.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-xl bg-soft p-5 transition-colors duration-300 hover:bg-mist"
              >
                <dt className="font-mono text-xs text-faint">{highlight.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed">{highlight.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </div>
    </div>
  );
}
