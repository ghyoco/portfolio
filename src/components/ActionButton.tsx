import type { ReactNode, MouseEvent } from "react";

interface ActionButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  download?: string;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

export default function ActionButton({
  href,
  children,
  icon,
  variant = "solid",
  external = false,
  download,
  className = "",
  onClick,
}: ActionButtonProps) {
  const styles = {
    solid: "bg-heading text-bg hover:bg-white",
    outline: "border border-border text-text hover:border-heading/40 hover:text-heading",
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : download
      ? { download }
      : {};

  return (
    <a
      href={href}
      {...linkProps}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${styles[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
