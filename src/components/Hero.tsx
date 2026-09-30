"use client";

import Image from "next/image";
import { useState } from "react";

import CVModal from "@/components/CVModal";
import { site } from "@/data/site";

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="shell py-16 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-heading sm:text-4xl lg:text-5xl">
            {site.name}
          </h1>
          <p className="mt-4 text-text">{site.role}.</p>
          <p className="mt-2 text-text">
            I like to build projects focused on {site.focus}.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-sm">
            <a
              href={`mailto:${site.email}`}
              className="text-muted transition-colors hover:text-accent"
            >
              email
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              github
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              linkedin
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
            >
              instagram
            </a>
            <button
              type="button"
              onClick={() => setCvOpen(true)}
              className="cursor-pointer text-muted transition-colors hover:text-accent"
            >
              view cv
            </button>
          </div>
        </div>

        <div className="max-w-sm overflow-hidden rounded-xl lg:justify-self-end">
          <Image
            src={site.avatar}
            alt={site.avatarAlt}
            width={400}
            height={500}
            priority
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </div>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
