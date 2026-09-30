"use client";

import { useEffect, useRef } from "react";

/**
 * Fades content in when it scrolls into view and back out when it leaves.
 * Observes itself and toggles the animation classes on the same element.
 * Keep fixed-position elements (e.g. modals) outside of it: the transform
 * used while hidden makes position: fixed relative to this box.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Before JS runs (and during SSR), content stays fully visible so the
    // page never renders blank. The observer then arms the effect.
    el.classList.add("reveal-armed");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          el.classList.toggle("is-visible", entry.isIntersecting);
        }
      },
      // Start the fade once a small part of the block is in view and
      // reverse it while it is still partially visible on the way out.
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
