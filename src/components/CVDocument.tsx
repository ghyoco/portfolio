import { certificates, education, experience, site, skills } from "@/data/site";

const githubLabel = site.github.replace(/^https?:\/\/(www\.)?/, "");

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
          <a href={`mailto:${site.email}`} className="transition-colors hover:text-zinc-900">
            {site.email}
          </a>
          <a
            href={`tel:${site.phone}`}
            className="transition-colors hover:text-zinc-900"
          >
            {site.phone}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-900"
          >
            {githubLabel}
          </a>
        </p>
      </header>

      <section className="mt-8">
        <SectionTitle>Profile</SectionTitle>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">{site.tagline}</p>
      </section>

      <section className="mt-8">
        <SectionTitle>Projects</SectionTitle>
        <div className="mt-4 space-y-6">
          <article>
            <p className="font-semibold tracking-tight">PathFinder — Real-Time Lane Detection</p>
            <p className="mt-0.5 font-mono text-xs text-zinc-500">02/2026 – 06/2026</p>
            <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-zinc-600">
              <li className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700" />
                Computer vision pipeline detecting lane boundaries and calculating vehicle lane drift across day and night lighting.
              </li>
              <li className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700" />
                Bird&apos;s-Eye View (BEV) inverse perspective mapping, sliding-window clustering, and 2nd-degree polynomial curve fitting (x = ay² + by + c).
              </li>
              <li className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700" />
                FastAPI backend deployed as a live interactive web app with Docker on Hugging Face Spaces.
              </li>
            </ul>
          </article>

          <article>
            <p className="font-semibold tracking-tight">
              Smart Building Time-Series Energy Forecasting — LSTM vs XGBoost
            </p>
            <p className="mt-0.5 font-mono text-xs text-zinc-500">02/2026 – 06/2026</p>
            <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-zinc-600">
              <li className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700" />
                Forecasting pipeline on the CU-BEMS dataset predicting 30-minute building power loads from multi-floor energy and indoor air quality sensor data.
              </li>
              <li className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700" />
                Lag, rolling-window, and cyclical time features benchmarking LSTM against XGBoost using chronological TimeSeriesSplit cross-validation.
              </li>
              <li className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700" />
                R² of 0.9818, SMAPE of 6.95%, and 68.1% RMSE reduction over baseline with XGBoost, validated via Diebold-Mariano testing.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle>Education</SectionTitle>
        <div className="mt-4 space-y-4">
          <div>
            <p className="font-semibold tracking-tight">
              {education.degree} — {education.school}
            </p>
            <p className="mt-0.5 font-mono text-xs text-zinc-500">
              {education.period} · {education.coursework}
            </p>
          </div>
          <div>
            <p className="font-semibold tracking-tight">
              SMAK Penabur Gading Serpong
            </p>
            <p className="mt-0.5 font-mono text-xs text-zinc-500">07/2021 – 05/2024</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle>Volunteering Experience</SectionTitle>
        <div className="mt-4 space-y-4">
          {experience.map((job) => (
            <article key={`${job.role}-${job.org}`}>
              <p className="font-semibold tracking-tight">
                {job.role} — {job.org}
              </p>
              <p className="mt-0.5 font-mono text-xs text-zinc-500">{job.period}</p>
              <ul className="mt-2 space-y-1 text-sm leading-relaxed text-zinc-600">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-700" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <SectionTitle>Technical Skills</SectionTitle>
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

      <section className="mt-8">
        <SectionTitle>Certificates</SectionTitle>
        <ul className="mt-4 space-y-1.5 text-sm text-zinc-600">
          {certificates.map((cert) => (
            <li key={cert.name}>
              {cert.name} — {cert.issuer}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <SectionTitle>Languages</SectionTitle>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Indonesian (native/bilingual) · English (proficient)
        </p>
      </section>

      <p className="mt-10 border-t border-zinc-200 pt-4 font-mono text-[10px] text-zinc-400">
        Updated October 2026 · the PDF download is the printable original
      </p>
    </article>
  );
}
