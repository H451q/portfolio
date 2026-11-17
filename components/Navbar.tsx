"use client";

import { useState } from "react";
import { siteData } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)] px-6 py-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        <a href="#" className="mono text-lg font-bold text-[var(--text)]">
          {siteData.name}
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mono text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="mono flex min-h-[44px] items-center bg-[var(--highlight)] px-4 text-sm font-bold text-black transition-opacity hover:opacity-80"
          >
            Hire me
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center text-[var(--text)] md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-2 border-t border-[var(--border)] pt-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mono flex min-h-[44px] items-center text-sm text-[var(--muted)] hover:text-[var(--text)]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mono mt-2 flex min-h-[44px] items-center justify-center bg-[var(--highlight)] px-4 text-sm font-bold text-black"
          >
            Hire me
          </a>
        </div>
      )}
    </nav>
  );
}