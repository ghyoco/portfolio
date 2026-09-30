"use client";

import Image from "next/image";
import { ExternalLink, Images } from "lucide-react";
import { useState } from "react";

import { GithubIcon } from "@/components/icons";
import GalleryModal from "@/components/GalleryModal";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const hasGallery = (project.gallery?.length ?? 0) > 0;

  return (
    <article className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-5 transition-colors duration-150 hover:border-heading/25">
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-border bg-white">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            unoptimized={project.image.endsWith(".svg")}
            className="object-contain"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col gap-3">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <p className="font-mono text-xs text-muted">~/{project.slug}</p>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>

        <h3 className="text-lg font-semibold tracking-tight text-heading">
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

        <p className="text-sm leading-relaxed text-text line-clamp-3">{project.description}</p>

        {project.hard && (
          <p className="text-sm leading-relaxed text-text">
            <span className="font-medium text-heading">The hard part — </span>
            {project.hard}
          </p>
        )}

        <p className="mt-auto font-mono text-xs text-muted">
          {project.stack.map((tech, i) => (
            <span key={tech}>
              {i > 0 && " · "}
              {tech}
            </span>
          ))}
        </p>

        {(project.githubUrl || project.liveUrl || hasGallery) && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {hasGallery && (
              <button
                type="button"
                onClick={() => setGalleryOpen(true)}
                className="inline-flex cursor-pointer items-center gap-1.5 text-sm text-text transition-colors hover:text-heading"
              >
                <Images size={14} />
                photos
              </button>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-text transition-colors hover:text-heading"
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
                className="inline-flex items-center gap-1.5 text-sm text-text transition-colors hover:text-heading"
              >
                <ExternalLink size={14} />
                Live demo
              </a>
            )}
          </div>
        )}
      </div>

      <GalleryModal
        open={galleryOpen}
        title={project.slug}
        images={project.gallery ?? []}
        onClose={() => setGalleryOpen(false)}
      />
    </article>
  );
}
