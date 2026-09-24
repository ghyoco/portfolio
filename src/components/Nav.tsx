"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import ActionButton from "@/components/ActionButton";
import CVModal from "@/components/CVModal";
import { site } from "@/data/site";

const navLinks = [
  { href: "/#projects", label: "projects" },
  { href: "/#about", label: "about" },
  { href: "/#study", label: "study" },
];

const initials = site.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const pathname = usePathname();

  const linkCls = (href: string) =>
    `font-mono text-sm transition-colors ${
      pathname === href ? "text-accent" : "text-muted hover:text-ink"
    }`;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
        <div className="shell flex h-16 items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-mist font-mono text-xs font-semibold text-accent transition-colors group-hover:bg-accent group-hover:text-paper">
              {initials}
              <span className="sr-only">logo</span>
            </span>
            <span className="font-mono text-sm font-semibold tracking-tight text-ink">
              <span className="text-accent">~/</span>
              {site.handle}
            </span>
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 sm:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkCls(link.href)}>
                <span className="text-faint">./</span>
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setCvOpen(true)}
              className="font-mono text-sm text-muted transition-colors hover:text-ink"
            >
              <span className="text-faint">./</span>cv
            </button>
          </nav>

          <ActionButton
            href={site.resume.href}
            download={site.resume.downloadName}
            icon={<Download size={15} />}
            className="hidden px-4 py-2 sm:inline-flex"
          >
            Download CV
          </ActionButton>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="text-muted transition-colors hover:text-ink sm:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-line bg-paper px-6 py-4 sm:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={linkCls(link.href)}
                >
                  <span className="text-faint">./</span>
                  {link.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setCvOpen(true);
                }}
                className={`text-left font-mono text-sm ${
                  cvOpen ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                <span className="text-faint">./</span>cv
              </button>
              <ActionButton
                href={site.resume.href}
                download={site.resume.downloadName}
                icon={<Download size={15} />}
                className="mt-2 justify-center px-4 py-2"
              >
                Download CV
              </ActionButton>
            </div>
          </div>
        )}
      </header>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
}
