import { profile } from "@/data/profile";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-neutral-500 text-center sm:text-left">
          <p>
            <span className="text-accent">©</span> {new Date().getFullYear()}{" "}
            {profile.name}
          </p>
          <p className="mt-1">
            built with next.js · deployed on vercel
          </p>
        </div>
        <SocialLinks size={17} />
      </div>
    </footer>
  );
}
