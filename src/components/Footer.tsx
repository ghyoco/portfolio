import SocialLinks from "@/components/SocialLinks";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="shell py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold tracking-tight text-heading">
              <span className="text-muted">~/</span>
              {site.handle}
            </p>
            <p className="mt-1 text-sm text-muted">{site.role}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block font-mono text-sm text-text transition-colors hover:text-heading"
            >
              {site.email}
            </a>
          </div>

          <div>
            <SocialLinks className="-ml-2.5 sm:ml-0" />
          </div>
        </div>

        <p className="mt-8 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
