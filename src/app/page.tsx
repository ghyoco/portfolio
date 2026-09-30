import ActionButton from "@/components/ActionButton";
import CVBand from "@/components/CVBand";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import StudyList from "@/components/StudyList";
import { featuredProjects, projects } from "@/data/projects";
import { about, skills } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="projects" className="shell scroll-mt-20 py-16 lg:py-20">
        <SectionHeading
          path="projects"
          title="Projects"
          description="Selected work. Each one answers: what it does, what it's built with, and what was hard."
          action={
            <ActionButton variant="outline" href="/projects">
              All {projects.length} projects
            </ActionButton>
          }
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-border">
        <div className="shell grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:gap-16 lg:py-20">
          <div>
            <SectionHeading path="about" title="About" />
            <div className="mt-5 max-w-prose space-y-3">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="text-sm leading-relaxed text-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-80">
            <p className="font-mono text-xs text-muted">skills</p>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-4">
              {skills.map((group) => (
                <div key={group.group}>
                  <p className="text-sm font-medium text-heading">{group.group}</p>
                  <ul className="mt-1.5 space-y-1">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-text">
                        <span className="size-1 shrink-0 rounded-full bg-muted" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="study" className="shell scroll-mt-20 py-16 lg:py-20">
        <SectionHeading
          path="education"
          title="Education"
        />
        <div className="mt-8">
          <StudyList />
        </div>
      </section>

      <CVBand />
    </>
  );
}
