"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import CVModal from "@/components/CVModal";
import { site } from "@/data/site";

const navLinks = [
  { href: "/#projects", label: "./projects" },
  { href: "/#about", label: "./about" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="shell flex h-14 items-center justify-between font-mono text-sm">
        <Link href="/" className="text-heading">
          <span className="prompt-user">{site.handle}</span>
          <span className="text-muted">:~$</span>
          <span className="ml-2 inline-block h-4 w-[9px] translate-y-[3px] bg-heading/80 motion-safe:animate-[cursor-blink_1.1s_steps(2,start)_infinite]" aria-hidden="true" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href || (link.href === "/#projects" && pathname === "/")
                  ? "text-heading underline decoration-border underline-offset-4"
                  : "text-muted hover:text-heading"
              }
            >
              {link.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setCvOpen(true)}
            className="cursor-pointer text-muted transition-colors hover:text-heading"
          >
            ./cv
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="text-muted transition-colors hover:text-heading md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface py-4 md:hidden">
          <div className="shell flex flex-col gap-3 font-mono text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-muted hover:text-heading"
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setCvOpen(true);
              }}
              className="cursor-pointer text-left text-muted transition-colors hover:text-heading"
            >
              ./cv
            </button>
          </div>
        </div>
      )}
      </header>

      <CVModal open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  );
}
