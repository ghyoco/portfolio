import { Mail } from "lucide-react";

import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/data/site";

const links = [
  { href: site.github, label: "GitHub", Icon: GithubIcon, external: true },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedinIcon, external: true },
  { href: site.instagram, label: "Instagram", Icon: InstagramIcon, external: true },
  { href: `mailto:${site.email}`, label: `Email ${site.email}`, Icon: Mail, external: false },
];

export default function SocialLinks({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <ul className={`flex items-center gap-1 ${className}`}>
      {links.map(({ href, label, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label}
            className="inline-flex rounded-md p-2 text-muted transition-colors hover:text-accent"
          >
            <Icon size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
