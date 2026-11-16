import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 mx-auto max-w-5xl">
      <h2 className="mono text-sm text-[var(--accent)] mb-8">02. Some Things I've Built</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col justify-between bg-[var(--card)] border border-[var(--border)] p-6 transition-all hover:-translate-y-2 hover:border-[var(--accent)]"
          >
            <div>
              <div className="flex justify-between items-center mb-6">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="flex gap-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)]">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-[var(--muted)] hover:text-[var(--accent)]">
                    Live
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[var(--text)] mb-3 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--muted)] text-sm mb-6">
                {project.description}
              </p>
            </div>

            <ul className="flex flex-wrap gap-3 mono text-xs text-[var(--muted)]">
              {project.tech.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
