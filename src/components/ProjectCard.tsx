import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className="group relative flex flex-col border border-line bg-card rounded-lg overflow-hidden transition-colors hover:border-accent/60">
      {project.image && (
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          width={600}
          height={340}
          className="w-full h-44 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
        />
      )}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-baseline gap-3 mb-1.5">
          {index !== undefined && (
            <span className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <h3 className="font-semibold group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
        <p className="text-sm text-neutral-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        <ul className="flex flex-wrap gap-x-3 gap-y-1.5 mb-5 mt-auto font-mono text-xs text-neutral-500">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="flex gap-4 text-sm">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-accent transition-colors"
            >
              <GithubIcon size={14} /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-accent transition-colors"
            >
              <ExternalLink size={14} /> Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
