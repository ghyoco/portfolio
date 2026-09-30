import { education, experience, site, skills } from "@/data/site";

const githubLabel = site.github.replace(/^https?:\/\/(www\.)?/, "");
const linkedinLabel = site.linkedin.replace(/^https?:\/\/(www\.)?/, "");

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-zinc-700">
      <span aria-hidden="true" className="size-1.5 rounded-full bg-zinc-700" />
      {children}
    </h2>
  );
}

export default function CVDocument() {
  return (
    <article className="mx-auto w-full max-w-3xl rounded-xl border-t-4 border-zinc-900 bg-white p-6 text-zinc-900 shadow-xl sm:p-10">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{site.name}</h1>
        <p className="mt-1.5 text-sm text-zinc-600">{site.role}</p>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-zinc-500">
          <span>{site.location}</span>
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-zinc-900"
          >
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900"
          >
            {githubLabel}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900"
          >
            {linkedinLabel}
          </a>
        </p>
      </header>

      <section className="mt-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="mt-4 space-y-6">
          {experience.map((job) => (
            <article key={`${job.role}-${job.org}`}>
              <p className="font-semibold tracking-tight">{job.role}</p>
              <p className="mt-0.5 text-sm text-zinc-600">
                {job.org} · <span className="font-mono text-xs">{job.period}</span>
              </p>
              <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-zinc-600">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle>Education</SectionTitle>
        <div className="mt-4">
          <p className="font-semibold tracking-tight">
            {education.degree} · {education.school}
          </p>
          <p className="mt-0.5 font-mono text-xs text-zinc-500">{education.period}</p>
          <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
            {education.coursework}
          </p>
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle>Skills</SectionTitle>
        <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {skills.map(({ group, items }) => (
            <div key={group}>
              <dt className="font-mono text-[11px] uppercase tracking-wider text-zinc-500">
                {group}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-zinc-700">{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      <p className="mt-10 border-t border-zinc-200 pt-4 font-mono text-[10px] text-zinc-400">
        Updated August 2026 · the PDF download is the printable original
      </p>
    </article>
  );
}
