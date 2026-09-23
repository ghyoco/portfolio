import { Download } from "lucide-react";
import { profile } from "@/data/profile";

export default function CVButton() {
  return (
    <a
      href={profile.cvPath}
      download={profile.cvFileName}
      className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-neutral-950 hover:brightness-110 transition-[filter]"
    >
      <Download size={16} />
      Download CV
    </a>
  );
}
