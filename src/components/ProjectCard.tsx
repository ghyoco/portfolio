import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  variant = "grid",
}: {
  project: Project;
  variant?: "grid" | "row";
}) {
  const isRow = variant === "row";
  const path = isRow ? `~/projects/${project.slug}` : `${project.slug}`;

  return (
    <article
      className={`group border border-border bg-surface transition-colors duration-150 hover:border-heading/25 ${
        isRow ? "flex flex-col gap-6 p-5 lg:flex-row lg:p-6" : "flex flex-col gap-4 p-5"
      }`}
    >
      {project.image && (
        <div
          className={`overflow-hidden rounded-md border border-border ${
            isRow ? "w-full shrink-0 self-start lg:w-72" : "w-full"
          }`}
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            width={1200}
            height={675}
            unoptimized={project.image.endsWith(".svg")}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          {isRow ? (
            <p className="prompt">
              <span className="text-muted">$ cat </span>
              {path}
            </p>
          ) : (
            <p className="font-mono text-xs text-muted">{path}</p>
          )}
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="font-sans text-lg font-semibold tracking-tight text-heading">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-offset-4 hover:underline"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className={`out text-sm ${isRow ? "" : "line-clamp-3"}`}>
          {project.description}
        </p>

        {isRow && project.hard && (
          <div className="rounded-md border border-border bg-bg p-4">
            <p className="prompt text-xs">
              <span className="text-muted">diff --git a/README.md b/README.md</span>
            </p>
            <p className="prompt mt-1 text-xs">
              <span className="font-semibold text-heading">+ </span>
              <span className="text-text">{project.hard}</span>
            </p>
          </div>
        )}

        <p className="mt-auto font-mono text-xs text-muted">
          {project.stack.map((tech, i) => (
            <span key={tech}>
              {i > 0 && " · "}
              {tech}
            </span>
          ))}
        </p>

        {(project.githubUrl || project.liveUrl) && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text transition-colors hover:text-heading"
              >
                <GithubIcon size={14} />
                source
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text transition-colors hover:text-heading"
              >
                <ExternalLink size={14} />
                run it
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
