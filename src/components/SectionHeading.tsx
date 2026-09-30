import type { ReactNode } from "react";

interface SectionHeadingProps {
  path: string;
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  path,
  title,
  description,
  action,
  className = "",
}: SectionHeadingProps) {
  const displayPath = path.startsWith("~") ? path : `~/${path}`;

  return (
    <div className={`flex flex-wrap items-end justify-between gap-x-8 gap-y-4 ${className}`}>
      <div>
        <p className="font-mono text-sm text-muted">{displayPath}</p>
        {title ? <h2 className="text-xl font-semibold text-heading">{title}</h2> : null}
        {description ? <p className="mt-2 text-text">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
