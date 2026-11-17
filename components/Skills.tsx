import { skills } from "@/lib/data";

export default function Skills() {
  // We duplicate the array to create a seamless infinite scroll effect
  const marqueeItems = [...skills, ...skills];

  return (
    <section className="border-y border-[var(--border)] bg-[var(--card)] py-6 overflow-hidden flex">
      <div className="flex whitespace-nowrap animate-marquee">
        {marqueeItems.map((skill, index) => (
          <div key={index} className="flex items-center mx-6">
            <span className="mono text-sm font-bold text-[var(--muted)]">
              {skill}
            </span>
            <span className="ml-12 text-[var(--highlight)] text-xs">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}