"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — ignore
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      title="Copy email to clipboard"
      className="inline-flex items-center gap-2 rounded-md border border-line bg-card px-4 py-2 font-mono text-sm text-neutral-300 hover:border-accent hover:text-accent transition-colors"
    >
      {profile.email}
      {copied ? (
        <Check size={14} className="text-accent" />
      ) : (
        <Copy size={14} className="text-neutral-500" />
      )}
    </button>
  );
}
