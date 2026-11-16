import { siteData } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-73px)] flex-col justify-center px-6 py-20 mx-auto max-w-5xl">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-10 blur-[100px]"></div>

      <p className="mono mb-4 text-sm text-[var(--muted)]">
        Hi, I'm {siteData.name}.
      </p>
      
      <h1 className="text-fluid-hero max-w-4xl font-bold tracking-tight">
        I build things for the <span className="text-[var(--accent)]">web.</span>
      </h1>
      
      <p className="mt-6 max-w-xl text-lg text-[var(--muted)]">
        {siteData.role} based in your city. {siteData.tagline}
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="mono flex min-h-[44px] items-center bg-[var(--accent)] px-6 text-sm font-bold text-black transition-opacity hover:opacity-80"
        >
          View My Work
        </a>
        <a
          href={`mailto:${siteData.email}`}
          className="mono flex min-h-[44px] items-center border border-[var(--border)] px-6 text-sm font-bold text-[var(--text)] transition-colors hover:border-[var(--muted)]"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}