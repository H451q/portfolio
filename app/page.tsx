import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Temporary scroll space */}
      <div className="h-[200vh] flex items-center justify-center">
        <p className="text-[var(--muted)] mono mt-20">
          Scroll down later to test animations...
        </p>
      </div>
    </main>
  );
}