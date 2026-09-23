import Reveal from "./Reveal";

export default function SectionHeading({ path }: { path: string }) {
  return (
    <Reveal>
      <h2 className="font-mono text-sm text-neutral-500 mb-6">
        <span className="text-accent">→</span> ~/{path}
      </h2>
    </Reveal>
  );
}
