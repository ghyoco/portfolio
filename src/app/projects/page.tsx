import type { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects — Your Name",
  description: "All projects: coursework, personal builds, and experiments.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-16">
        <Reveal>
          <h1 className="text-3xl font-semibold tracking-tight mb-3">Projects</h1>
          <p className="text-neutral-400 mb-10 max-w-xl">
            Everything I&apos;ve built that&apos;s worth showing — featured ones
            first.
          </p>
        </Reveal>

        <SectionHeading path="featured" />
        <div className="grid gap-5 sm:grid-cols-2 mb-12">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        {others.length > 0 && (
          <>
            <SectionHeading path="more" />
            <div className="grid gap-5 sm:grid-cols-2">
              {others.map((project, i) => (
                <Reveal key={project.slug} delay={i * 100}>
                  <ProjectCard project={project} index={featured.length + i} />
                </Reveal>
              ))}
            </div>
          </>
        )}
      </section>
      <div className="pb-20" />
    </div>
  );
}
