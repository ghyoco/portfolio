import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

/**
 * `grid` is the card used in the homepage grid: preview on top, short copy.
 * `row` is the wider card used on /projects, where the preview sits beside the
 * full description and the "hard part" note.
 *
 * Hover effects are deliberately small: border warms to the accent, the title
 * tints, and the preview image scales 1.03 — smooth, no bouncing.
 */
export default function ProjectCard({
  project,
  index,
  variant = "grid",
}: {
  project: Project;
  /** Optional 01/02 index number, repo-file style. */
  index?: number;
  variant?: "grid" | "row";
}) {
  const isRow = variant === "row";

  return (
    <article
      className={`group flex overflow-hidden rounded-2xl border border-line bg-mist transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.8)] ${
        isRow ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      {/* Previews are optional: add one to /public/projects and set `image`. */}
      {project.image && (
        <div
          className={`relative overflow-hidden border-line bg-soft ${
            isRow
              ? "border-b lg:w-80 lg:shrink-0 lg:border-r lg:border-b-0"
              : "aspect-[16/10] border-b"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={1200}
            height={675}
            sizes={
              isRow
                ? "(min-width: 1024px) 320px, 100vw"
                : "(min-width: 1280px) 400px, (min-width: 640px) 50vw, 100vw"
            }
            /* SVGs are served as-is: the optimiser refuses them otherwise. */
            unoptimized={project.image.endsWith(".svg")}
            className={`w-full opacity-90 transition-[transform,opacity] duration-500 ease-out group-hover:scale-[1.03] group-hover:opacity-100 ${
              isRow ? "lg:h-full lg:object-cover" : ""
            }`}
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="flex items-baseline gap-3 text-lg font-semibold tracking-tight">
            {index !== undefined && (
              <span className="font-mono text-xs font-normal text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {project.title}
              </a>
            ) : (
              <span className="transition-colors group-hover:text-accent">
                {project.title}
              </span>
            )}
          </h3>
          <span className="font-mono text-xs text-faint">{project.year}</span>
        </div>

        <p
          className={`mt-3 leading-relaxed text-muted ${
            isRow ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        {isRow && (
          <p className="mt-4 rounded-xl bg-soft p-4 text-sm leading-relaxed text-muted">
            <span className="font-medium text-accent">The hard part: </span>
            {project.hard}
          </p>
        )}

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line bg-soft px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-5 pt-6 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
            >
              <GithubIcon size={15} />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-ink transition-colors hover:text-accent"
            >
              <ExternalLink size={15} />
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
