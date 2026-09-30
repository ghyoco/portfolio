import { study } from "@/data/site";

const entries = [
  {
    badge: study.university.badge,
    title: study.university.degree,
    org: study.university.school,
    period: study.university.period,
    detail: study.university.short,
  },
  {
    badge: study.highSchool.badge,
    title: "VWO Gymnasium",
    org: study.highSchool.school,
    period: study.highSchool.period,
    detail: study.highSchool.short,
  },
];

export default function StudyList() {
  return (
    <ul className="grid gap-4 lg:grid-cols-2">
      {entries.map((entry) => (
        <li key={entry.badge}>
          <div className="h-full rounded-md border border-border bg-surface p-5">
            <div className="flex items-baseline justify-between gap-4">
              <p className="prompt text-xs">
                <span className="text-muted">man </span>
                {entry.badge.toLowerCase()}
              </p>
              <span className="font-mono text-xs text-muted">{entry.period}</span>
            </div>
            <h3 className="mt-2 font-sans font-semibold tracking-tight text-heading">
              {entry.title}
            </h3>
            <p className="mt-0.5 text-sm text-muted">{entry.org}</p>
            <p className="mt-2 text-sm leading-relaxed text-text">{entry.detail}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
