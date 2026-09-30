"use client";

import { useState } from "react";
import Link from "next/link";
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

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
        <div className="shell flex h-14 items-center justify-between font-mono text-sm">
          <Link href="/" className="font-bold text-heading">
            <span className="text-muted">~/</span>
            {site.handle}
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted transition-colors hover:text-heading"
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
