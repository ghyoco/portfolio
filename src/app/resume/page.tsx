import CVButton from "@/components/CVButton";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export const metadata = {
  title: `CV — ${profile.name}`,
};

export default function ResumePage() {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <section className="py-16">
        <SectionHeading path="cv" />
        <Reveal>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-semibold tracking-tight">CV</h1>
            <CVButton />
          </div>
          <iframe
            src={profile.cvPath}
            className="w-full h-[80vh] rounded-lg border border-line bg-card"
            title="CV preview"
          />
          <p className="mt-4 font-mono text-xs text-neutral-500">
            * if the preview doesn&apos;t load, use the download button above
          </p>
        </Reveal>
      </section>
      <div className="pb-20" />
    </div>
  );
}
