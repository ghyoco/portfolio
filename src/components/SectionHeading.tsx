import type { ReactNode } from "react";

interface SectionHeadingProps {
  cmd: string;
  output: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  cmd,
  output,
  description,
  action,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-wrap items-end justify-between gap-x-8 gap-y-4 ${className}`}>
      <div>
        <p className="prompt">
          <span className="text-muted">$ </span>
          {cmd}
        </p>
        <h2 className="mt-2 font-sans text-xl font-semibold tracking-tight text-heading">
          {output}
        </h2>
        {description ? <p className="mt-2 text-sm text-text">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
