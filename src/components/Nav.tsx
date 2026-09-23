"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "cv" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkCls = (href: string) =>
    `font-mono text-sm transition-colors ${
      pathname === href ? "text-accent" : "text-neutral-400 hover:text-neutral-100"
    }`;

  return (
    <header className="border-b border-line bg-background/85 backdrop-blur sticky top-0 z-50">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          <span className="text-accent">~/</span>{profile.name}
        </Link>

        <div className="hidden sm:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkCls(link.href)}>
              <span className="text-neutral-600">./</span>
              {link.label}
            </Link>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
          >
            <span className="text-neutral-600">./</span>github
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="sm:hidden text-neutral-400 hover:text-neutral-100"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-line bg-background px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={linkCls(link.href)}
            >
              <span className="text-neutral-600">./</span>
              {link.label}
            </Link>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-neutral-400 hover:text-neutral-100"
          >
            <span className="text-neutral-600">./</span>github
          </a>
        </div>
      )}
    </header>
  );
}
