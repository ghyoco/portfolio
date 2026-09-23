import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./BrandIcons";
import { profile } from "@/data/profile";

const links = [
  { href: profile.github, label: "GitHub", icon: GithubIcon },
  { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon },
  { href: profile.instagram, label: "Instagram", icon: InstagramIcon },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

export default function SocialLinks({ size = 20 }: { size?: number }) {
  return (
    <div className="flex gap-4">
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-neutral-500 hover:text-accent transition-colors"
        >
          <Icon size={size} />
        </a>
        ))}
    </div>
  );
}
