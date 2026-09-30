import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import ActionButton from "@/components/ActionButton";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: `Selected software projects by ${site.name}.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="shell py-14 lg:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} />
        cd ~
      </Link>

      <SectionHeading
        className="mt-6"
        path="projects"
        title="All projects"
        description="Everything I've built that I'd show in a code review."
        action={
          <ActionButton href={site.github} external>
            GitHub
          </ActionButton>
        }
      />

      <div className="mt-8 grid gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} variant="row" />
        ))}
      </div>
    </div>
  );
}
