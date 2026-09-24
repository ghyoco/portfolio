import Reveal from "@/components/Reveal";
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
    <ul className="grid gap-5 lg:grid-cols-2">
      {entries.map((entry, i) => (
        <li key={entry.badge}>
          <Reveal delay={i * 100}>
            <div className="group flex h-full gap-5 rounded-2xl border border-line bg-mist p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/50">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mist font-mono text-xs font-semibold text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-paper">
                {entry.badge}
              </span>
              <div>
                <h3 className="font-semibold tracking-tight">{entry.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {entry.org} · <span className="font-mono text-xs">{entry.period}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{entry.detail}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
