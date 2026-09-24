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
  description: `Selected software projects by ${site.name}: what each one does, the stack it uses and the hard part of building it.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="shell py-16 lg:py-20">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={14} />
        back home
      </Link>

      <SectionHeading
        className="mt-8"
        path="projects"
        title="All projects"
        description="Everything I've built that I'd defend in a code review — coursework included, because the interesting bugs were in there too."
        action={
          <ActionButton href={site.github} external>
            More on GitHub
          </ActionButton>
        }
      />

      <div className="mt-10 grid gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} variant="row" />
        ))}
      </div>
    </div>
  );
}
