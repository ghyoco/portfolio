import type { ReactNode } from "react";

import Reveal from "@/components/Reveal";

/**
 * Section heading in repo style: a mono `~/path` label instead of an eyebrow
 * chip, then title, description and an optional action button on the right.
 */
export default function SectionHeading({
  path,
  title,
  description,
  action,
  className = "",
}: {
  path: string;
  title?: string;
  description?: string;
  /** Optional link or button on the right, e.g. "All projects". */
  action?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <div className={`flex flex-wrap items-end justify-between gap-x-10 gap-y-6 ${className}`}>
        <div className="max-w-2xl">
          <span className="font-mono text-sm text-faint">
            <span className="text-accent">→</span> ~/{path}
          </span>
          {title ? (
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
          ) : null}
          {description ? (
            <p className="mt-3 max-w-prose leading-relaxed text-muted">{description}</p>
          ) : null}
        </div>
        {action}
      </div>
    </Reveal>
  );
}
