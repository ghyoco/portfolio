"use client";

import { useEffect, useState } from "react";

type TypingLineProps = {
  phrases: string[];
  /** ms per character typed/deleted */
  speed?: number;
  /** ms pause on a fully-typed phrase */
  holdMs?: number;
};

export default function TypingLine({
  phrases,
  speed = 55,
  holdMs = 1800,
}: TypingLineProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;
    const current = phrases[phraseIndex % phrases.length];

    // Pause while a phrase is fully shown
    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    // Move to next phrase once fully deleted
    if (deleting && text === "") {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(
      () => {
        setText(
          deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1),
        );
      },
      deleting ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, deleting, phraseIndex, phrases, speed, holdMs]);

  return (
    <span className="font-mono text-accent">
      <span className="text-neutral-500 select-none">$ </span>
      {text}      <span className="type-caret" aria-hidden="true" />
    </span>
  );
}
