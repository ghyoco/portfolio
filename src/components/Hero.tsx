"use client";

import Image from "next/image";
import { useState } from "react";

import CVModal from "@/components/CVModal";
import { site } from "@/data/site";

export default function Hero() {
  const [cvOpen, setCvOpen] = useState(false);

  return (
    <section className="shell pb-16 pt-12 lg:pb-24 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
        <div className="term max-w-xl">
          <div className="term-bar">
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-dot" />
            <span className="term-title">{site.handle}: ~</span>
          </div>

          <div className="space-y-6 p-5 sm:p-7">
            <p className="prompt">
              <span className="prompt-user">{site.handle}</span>
              <span className="text-muted">:~$ </span>
              <span className="type-in">whoami</span>
              <span className="cursor" aria-hidden="true" />
            </p>

            <div className="space-y-1.5">
              <h1 className="font-sans text-3xl font-semibold tracking-tight text-heading sm:text-4xl">
                {site.name}
              </h1>
              <p className="out">
                {site.role}
              </p>
              <p className="out">
                Right now that means {site.focus}.
              </p>
            </div>

            <div className="grid gap-1.5 font-mono text-[13px] sm:grid-cols-2">
              <p>
                <span className="whitespace-pre text-muted">location  </span>
                {site.location}
              </p>
              <p>
                <span className="whitespace-pre text-muted">focus     </span>
                {site.focus}
              </p>
            </div>

            <div>
              <p className="comment"># ls contact</p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
                <li>
                  <a href={`mailto:${site.email}`} className="text-text hover:text-heading">
                    email/
                  </a>
                </li>
                <li>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-heading"
                  >
                    github/
                  </a>
                </li>
                <li>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-heading"
                  >
                    linkedin/
                  </a>
                </li>
                <li>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-heading"
                  >
                    instagram/
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setCvOpen(true)}
                    className="cursor-pointer text-text hover:text-heading"
                  >
                    cv.pdf
                  </button>
                </li>
                <li>
                  <a href="#projects" className="text-text hover:text-heading">
                    projects/
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <figure className="hidden lg:block">
          <div className="term w-64 overflow-hidden p-2">
            <Image
              src={site.avatar}
              alt={site.avatarAlt}
              width={400}
              height={500}
              priority
              className="aspect-[4/5] w-full rounded-md object-cover"
            />
          </div>
          <figcaption className="mt-2 text-center font-mono text-xs text-muted">
            avatar.png
          </figcaption>
        </figure>
      </div>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </section>
  );
}
