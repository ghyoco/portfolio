import Link from "next/link";

import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

const footerLinks = [
  { href: "/#projects", label: "~/projects" },
  { href: "/#about", label: "~/about" },
  { href: "/study", label: "~/study" },
  { href: "/resume", label: "~/cv" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-soft text-ink">
      <div className="shell border-t border-white/10 py-14">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto_auto] md:gap-16">
          <div>
            <p className="font-mono text-sm font-semibold tracking-tight">
              <span className="text-accent">~/</span>
              {site.handle}
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {site.role}. Looking for a Summer 2027 internship.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-sm text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              {site.email}
            </a>
            <p className="mt-1 font-mono text-xs text-faint">{site.location}</p>
          </div>

          <nav aria-label="Footer" className="text-sm">
            <p className="font-mono text-xs text-faint">pages</p>
            <ul className="mt-3 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-xs text-faint">elsewhere</p>
            <SocialLinks className="-ml-2.5" />
          </div>
        </div>

        <p className="mt-12 font-mono text-xs text-faint">
          © {new Date().getFullYear()} {site.name} · built with Next.js, TypeScript and Tailwind
          CSS
        </p>
      </div>
    </footer>
  );
}
