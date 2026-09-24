import { FileText } from "lucide-react";

import ActionButton from "@/components/ActionButton";
import CVBand from "@/components/CVBand";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import StudyList from "@/components/StudyList";
import { GithubIcon } from "@/components/icons";
import { featuredProjects, projects } from "@/data/projects";
import { about, education, quickFacts, site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />

      <section id="projects" className="shell scroll-mt-20 py-20 lg:py-24">
        <SectionHeading
          path="projects"
          title="Featured projects"
          description="Three of the five I'd defend in a code review. Each one answers the same three questions: what it does, what it's built with, and what was hard about it."
          action={
            <ActionButton variant="outline" href="/projects">
              All {projects.length} projects
            </ActionButton>
          }
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-y border-line bg-soft">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-16 lg:py-24">
          <div>
            <SectionHeading path="about" title="A short version of me" />
            <div className="mt-6 max-w-prose space-y-4">
              {about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="leading-relaxed text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="h-fit rounded-2xl border border-line bg-mist p-6">
            <p className="font-mono text-xs text-muted">quick facts</p>
            <dl className="mt-4 text-sm">
              {quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-t border-line py-3.5 first:border-t-0 first:pt-0"
                >
                  <dt className="font-mono text-xs text-faint">{fact.label}</dt>
                  <dd className="mt-1">{fact.value}</dd>
                </div>
              ))}
              <div className="border-t border-line py-3.5">
                <dt className="font-mono text-xs text-faint">Education</dt>
                <dd className="mt-1">
                  {education.degree}, {education.school}{" "}
                  <span className="text-muted">({education.period})</span>
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-3">
              <ActionButton variant="outline" href="/resume" icon={<FileText size={15} />}>
                My CV
              </ActionButton>
              <ActionButton
                variant="outline"
                href={site.github}
                external
                icon={<GithubIcon size={15} />}
              >
                GitHub
              </ActionButton>
            </div>
          </div>
        </div>
      </section>

      <section id="study" className="shell scroll-mt-20 py-20 lg:py-24">
        <SectionHeading
          path="study"
          title="Study background"
          description="Where the last nine years of maths, physics and compiler construction happened."
          action={
            <ActionButton variant="outline" href="/study">
              Full details
            </ActionButton>
          }
        />
        <div className="mt-10">
          <StudyList />
        </div>
      </section>

      <CVBand />
    </>
  );
}
