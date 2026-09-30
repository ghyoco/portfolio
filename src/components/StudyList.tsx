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
          <div className="flex h-full gap-4 rounded-lg border border-border p-5">
            <span className="shrink-0 font-mono text-xs text-accent">
              {entry.badge}
            </span>
            <div>
              <h3 className="font-semibold text-heading">{entry.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {entry.org} · <span className="font-mono text-xs">{entry.period}</span>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text">{entry.detail}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
