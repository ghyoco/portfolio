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
          cmd="ls ~/projects"
          output="Projects"
          description="Things I've shipped, each answering three questions: what it does, what it's built with, and what was hard."
          action={
            <ActionButton variant="outline" href="/projects">
              all {projects.length}
            </ActionButton>
          }
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-border">
        <div className="shell grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:gap-16 lg:py-20">
          <div>
            <SectionHeading cmd="cat about.md" output="About" />
            <div className="mt-5 max-w-prose space-y-3">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="out text-sm">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-80">
            <p className="prompt">
              <span className="text-muted">$ </span>deps --list
            </p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-5">
              {skills.map((group) => (
                <div key={group.group}>
                  <p className="font-mono text-xs uppercase tracking-wider text-muted">
                    {group.group}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {group.items.map((item) => (
                      <li key={item} className="font-mono text-[13px] text-text">
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
        <SectionHeading cmd="man study" output="Education" />
        <div className="mt-8">
          <StudyList />
        </div>
      </section>

      <CVBand />
    </>
  );
}
