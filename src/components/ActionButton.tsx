import type { ReactNode } from "react";

/**
 * Every call to action on the site is a link, so this is one component instead
 * of four sets of classes. `onClick` is optional so buttons can also open the
 * CV modal instead of navigating.
 */
export default function ActionButton({
  href,
  children,
  icon,
  variant = "solid",
  external = false,
  download,
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  download?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const styles: Record<"solid" | "outline", string> = {
    solid: "bg-accent text-paper hover:bg-ink",
    outline: "border border-line bg-mist text-ink hover:border-accent/60 hover:text-accent",
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
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${styles[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
