import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 mx-auto max-w-3xl">
      <h2 className="mono text-sm text-[var(--accent)] mb-8 text-center">03. Where I've Worked</h2>
      
      <div className="space-y-12 border-l-2 border-[var(--border)] pl-6 ml-4 md:ml-0">
        {experience.map((job, index) => (
          <div key={index} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-[var(--bg)] border-2 border-[var(--accent)]"></div>
            
            <h3 className="text-xl font-bold text-[var(--text)]">
              {job.role} <span className="text-[var(--accent)]">@ {job.company}</span>
            </h3>
            <p className="mono text-sm text-[var(--muted)] mb-4">{job.date}</p>
            <p className="text-[var(--muted)]">{job.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}