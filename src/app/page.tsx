import CVBand from "@/components/CVBand";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import StudyList from "@/components/StudyList";
import { featuredProjects } from "@/data/projects";
import { about, skills } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="projects" className="shell scroll-mt-20 py-16 lg:py-20">
        <SectionHeading path="projects" title="Projects" />

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
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
                      <li key={item} className="text-sm text-text">
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
        <SectionHeading path="education" title="Education" />
        <div className="mt-8">
          <StudyList />
        </div>
      </section>

      <CVBand />
    </>
  );
}
