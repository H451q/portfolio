"use client";

import { useEffect, useState } from "react";

export default function Reveal({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This ensures the animation triggers immediately after the page loads
    setIsMounted(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}