import { siteData } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="animate-fade-up px-6 py-32 mx-auto max-w-2xl text-center">
      <h2 className="mono text-sm text-[var(--highlight)] mb-4">04. What's Next?</h2>
      <h3 className="text-fluid-h2 font-bold mb-6">Let's talk.</h3>
      <p className="text-[var(--muted)] mb-10 max-w-md mx-auto">
        I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
      </p>
      
      <a
        href={`mailto:${siteData.email}`}
        className="mono inline-flex min-h-[44px] items-center bg-[var(--highlight)] px-8 text-sm font-bold text-black transition-opacity hover:opacity-80"
      >
        Say Hello
      </a>
    </section>
  );
}