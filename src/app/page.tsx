import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueMetrics from "@/components/ValueMetrics";
import Projects from "@/components/Projects";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F6F2]">
      <Navbar />
      <main>
        <Hero />
        <ValueMetrics />
        <Projects />
      </main>
      <ContactFooter />
    </div>
  );
}
