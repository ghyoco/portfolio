"use client";

import { ArrowDown, FileText } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import ActionButton from "@/components/ActionButton";
import CVModal from "@/components/CVModal";
import { site } from "@/data/site";

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="hero-bg grain relative overflow-hidden bg-soft text-ink">
      <div className="shell relative z-10 grid gap-14 pb-16 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <span className="animate-reveal inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3 py-1.5 font-mono text-xs text-muted">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
            </span>
            {site.status}
          </span>

          <h1
            className="animate-reveal mt-7 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "70ms" }}
          >
            Hi, I&apos;m {site.name}.
          </h1>

          <p
            className="animate-reveal mt-6 max-w-xl text-lg leading-relaxed text-muted"
            style={{ animationDelay: "140ms" }}
          >
            <span className="text-ink">{site.role}.</span> I write backend services, data
            pipelines and the tooling that keeps a team&apos;s feedback loop short.
          </p>

          <div
            className="animate-reveal mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "210ms" }}
          >
            <ActionButton href="/#projects" icon={<ArrowDown size={16} />}>
              See my work
            </ActionButton>
            <ActionButton
              variant="outline"
              href="#cv"
              onClick={(e) => {
                e.preventDefault();
                setCvOpen(true);
              }}
              icon={<FileText size={16} />}
            >
              View CV
            </ActionButton>
          </div>

          <p
            className="animate-reveal mt-10 font-mono text-xs text-faint"
            style={{ animationDelay: "280ms" }}
          >
            {site.location} ·{" "}
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
              {site.email}
            </a>
          </p>
        </div>

        {/* Portrait: swap site.avatar for a real photo, 4:5 works best. */}
        <div
          className="animate-reveal relative mx-auto w-60 sm:w-72 lg:mx-0 lg:w-full lg:max-w-sm lg:justify-self-end"
          style={{ animationDelay: "350ms" }}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-full bg-accent/15 blur-3xl"
          />
          <div className="overflow-hidden rounded-[2rem] border border-line bg-mist transition-colors duration-300">
            <Image
              src={site.avatar}
              alt={site.avatarAlt}
              width={800}
              height={1000}
              priority
              unoptimized={site.avatar.endsWith(".svg")}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
