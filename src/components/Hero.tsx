import { GithubIcon } from "./BrandIcons";
import { profile } from "@/data/profile";
import CVButton from "./CVButton";
import TypingLine from "./TypingLine";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
      <Reveal>
        {/* Availability pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs text-neutral-300">
            {profile.availability}
          </span>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight mb-5">
          {profile.name}
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="text-lg text-neutral-400 max-w-xl mb-3">{profile.identity}</p>
        <p className="font-mono text-base sm:text-lg mb-10 min-h-7">
          <TypingLine phrases={profile.typingPhrases} />
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="flex flex-wrap gap-3">
          <CVButton />
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-card px-4 py-2 text-sm font-medium hover:border-accent transition-colors"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}
