import { profile, skills, techHighlights } from "@/data/profile";
import { projects } from "@/data/projects";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SocialLinks from "@/components/SocialLinks";
import CopyEmail from "@/components/CopyEmail";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="max-w-3xl mx-auto px-6">
      {/* 1. Hero */}
      <Hero />

      {/* 2. About */}
      <section id="about" className="py-12 border-t border-line">
        <SectionHeading path="about" />
        <Reveal>
          <p className="text-neutral-300 leading-relaxed max-w-2xl mb-6">
            {profile.about}
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="font-mono text-sm text-neutral-500">
            <span className="text-accent">*</span> currently learning:{" "}
            {profile.currentlyLearning}
          </p>
        </Reveal>
      </section>

      {/* 3. Featured projects */}
      <section id="projects" className="py-12 border-t border-line">
        <SectionHeading path="projects" />
        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 100}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={featured.length * 100}>
          <Link
            href="/projects"
            className="inline-block mt-8 font-mono text-sm text-neutral-400 hover:text-accent transition-colors"
          >
            view all projects →
          </Link>
        </Reveal>
      </section>

      {/* 4. Education */}
      <section id="education" className="py-12 border-t border-line">
        <SectionHeading path="education" />
        <ol className="relative border-l border-line ml-2">
          {profile.education.map((edu, i) => (
            <li key={edu.school} className="ml-6 pb-8 last:pb-0">
              <span
                className={`absolute -left-[7px] mt-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-accent ${
                  i === 0 ? "bg-accent" : "bg-background"
                }`}
              />
              <Reveal delay={i * 100}>
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="font-semibold">{edu.school}</h3>
                  <span className="font-mono text-xs text-neutral-500">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-neutral-300 mt-0.5 mb-2">
                  {edu.degree}
                </p>
                <ul className="space-y-1">
                  {edu.details.map((detail) => (
                    <li
                      key={detail}
                      className="text-sm text-neutral-400 flex gap-2"
                    >
                      <span className="text-accent shrink-0">·</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <p className="mt-8 flex items-center gap-2 text-sm text-neutral-500">
            <GraduationCap size={15} className="text-accent" />
            Full details on{" "}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </p>
        </Reveal>
      </section>

      {/* 5. Skills */}
      <section id="skills" className="py-12 border-t border-line">
        <SectionHeading path="skills" />
        <div className="grid gap-5 sm:grid-cols-2">
          {techHighlights.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <div className="border border-line bg-card rounded-lg p-4">
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">
                  {group.label}
                </p>
                <p className="text-sm text-neutral-300">{group.value}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <ul className="flex flex-wrap gap-2 mt-6">
            {skills.map((skill) => (
              <li
                key={skill}
                className="font-mono text-xs px-2.5 py-1 border border-line rounded text-neutral-400"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* 6. Contact / CTA */}
      <section id="contact" className="py-12 border-t border-line">
        <SectionHeading path="contact" />
        <Reveal>
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
            Let&apos;s build something.
          </h3>
          <p className="text-neutral-400 max-w-xl mb-6">
            I&apos;m actively looking for internship opportunities — my inbox is
            always open, whether it&apos;s a role, a project, or just a question.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <CopyEmail />
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-sm text-neutral-400 hover:text-accent transition-colors"
            >
              or open mail app →
            </a>
          </div>
          <SocialLinks />
        </Reveal>
      </section>

      <div className="pb-20" />
    </div>
  );
}
