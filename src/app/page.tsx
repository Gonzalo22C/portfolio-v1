import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-[#F5F5F7] selection:bg-[#0A84FF]/25 selection:text-[#F5F5F7] overflow-x-hidden">
      {/* Floating Pill Glass Navbar */}
      <Navbar />

      {/* Hero Full Screen (h-screen) */}
      <main>
        <Hero />
        <BentoGrid />
        <Projects />
      </main>

      {/* Expansive Glass Footer */}
      <Footer />
    </div>
  );
}
