import Image from "next/image";
import { ExternalLink } from "lucide-react";

import { GithubIcon } from "@/components/icons";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
  variant = "grid",
}: {
  project: Project;
  index?: number;
  variant?: "grid" | "row";
}) {
  const isRow = variant === "row";

  return (
    <article
      className={`border border-border rounded-lg p-5 hover:border-border flex flex-col ${
        isRow ? "lg:flex-row gap-5" : "gap-4"
      }`}
    >
      {project.image && (
        <div className={`overflow-hidden rounded-lg self-start ${isRow ? "w-full lg:w-72 lg:shrink-0" : "w-full"}`}>
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={675}
            unoptimized={project.image.endsWith(".svg")}
            className="h-auto w-full object-cover rounded-lg"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-baseline gap-2">
            {index !== undefined && (
              <span className="font-mono text-xs text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            <h3 className="font-semibold text-heading">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent"
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
          </div>
          <span className="shrink-0 font-mono text-xs text-muted">
            {project.year}
          </span>
        </div>

        <p
          className={`text-sm leading-relaxed text-text ${
            isRow ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        {isRow && project.hard && (
          <p className="bg-surface rounded-lg p-4 text-sm leading-relaxed text-text">
            <span className="font-medium text-accent">The hard part — </span>
            {project.hard}
          </p>
        )}

        <p className="font-mono text-xs text-muted">
          {project.stack.map((tech, i) => (
            <span key={tech}>
              {i > 0 && " · "}
              {tech}
            </span>
          ))}
        </p>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-auto flex flex-wrap items-center gap-4 pt-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text hover:text-accent"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text hover:text-accent"
              >
                <ExternalLink size={14} />
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
