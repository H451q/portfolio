export default function About() {
  return (
    <section id="about" className="px-6 py-24 mx-auto max-w-5xl">
      <h2 className="mono text-sm text-[var(--accent)] mb-8">01. About Me</h2>
      
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
        <div className="space-y-4 text-[var(--muted)]">
          <p>
            Hello! I'm Muhammad Hashiq, an Associate Project Manager who loves building things for the web. 
            My journey into tech started with a curiosity for how things work, which quickly turned into a passion for creating digital experiences.
          </p>
          <p>
            I focus on delivering high-quality projects, bridging the gap between design and development, and ensuring that user needs are always at the forefront of every decision.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4 mono text-sm">
            <li>▹ TypeScript</li>
            <li>▹ React</li>
            <li>▹ Next.js</li>
            <li>▹ Tailwind CSS</li>
            <li>▹ Node.js</li>
            <li>▹ Project Management</li>
          </ul>
        </div>
        
        {/* Placeholder for Photo */}
        <div className="relative group max-w-[300px] mx-auto md:mx-0 md:ml-auto">
          <div className="absolute inset-0 border-2 border-[var(--accent)] translate-x-4 translate-y-4 rounded transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="relative bg-[var(--card)] border border-[var(--border)] aspect-square flex items-center justify-center overflow-hidden">
            <span className="mono text-[var(--muted)]">Your Photo Here</span>
          </div>
        </div>
      </div>
    </section>
  );
}