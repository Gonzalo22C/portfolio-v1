"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ChevronDown, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen min-h-[680px] w-full flex flex-col justify-between items-center px-6 pt-28 pb-8 overflow-hidden"
    >
      {/* Ambient background glow (subtle VisionOS atmospheric lighting) */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[380px] rounded-full opacity-35 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(10, 132, 255, 0.18) 0%, rgba(255, 255, 255, 0.03) 60%, transparent 100%)",
        }}
      />

      {/* Subtle background grid lines for architectural precision */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      {/* Main Centered Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-3xl text-center space-y-7 my-auto">
        {/* Apple Avatar / Memoji Placeholder with Halo */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative group cursor-pointer"
        >
          {/* Subtle Halo Glow */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#0A84FF]/20 to-white/10 blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />

          {/* Double ring circular container */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-white/[0.04] backdrop-blur-xl border border-white/[0.12] shadow-2xl flex items-center justify-center">
            {/* Inner avatar area - ready for Apple Memoji / Photo */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/[0.08] flex items-center justify-center overflow-hidden">
              <span className="text-3xl sm:text-4xl select-none transform group-hover:scale-105 transition-transform duration-300">
                👨🏻‍💻
              </span>
            </div>

            {/* Active status indicator dot */}
            <span className="absolute bottom-1 right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#070709]" />
            </span>
          </div>
        </motion.div>

        {/* Status pill badge */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md"
        >
          <Sparkles className="w-3 h-3 text-[#0A84FF]" />
          <span className="text-[11px] font-medium tracking-wider text-[#86868B] uppercase">
            {personalInfo.status}
          </span>
        </motion.div>

        {/* Minimalist Futuristic Headline */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#F5F5F7] leading-[1.08]">
            Arquitectura digital <br />
            <span className="bg-gradient-to-b from-[#F5F5F7] via-white/80 to-[#86868B] bg-clip-text text-transparent">
              de alta precisión.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#86868B] max-w-xl mx-auto font-normal leading-relaxed">
            {personalInfo.subheadline}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#F5F5F7] bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.12] hover:border-white/[0.22] backdrop-blur-md transition-all shadow-sm"
          >
            <span>Ver Proyectos</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0A84FF] group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-[#86868B] hover:text-[#F5F5F7] hover:bg-white/[0.03] transition-all"
          >
            Contacto directo
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 flex flex-col items-center"
      >
        <button
          onClick={scrollToAbout}
          className="group flex flex-col items-center gap-2 text-[#86868B] hover:text-[#F5F5F7] transition-colors py-2 cursor-pointer focus:outline-none"
          aria-label="Desplazarse a la siguiente sección"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono opacity-60 group-hover:opacity-100 transition-opacity">
            Descubrir
          </span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-white/[0.02] border border-white/[0.06] group-hover:border-white/[0.14] transition-colors"
          >
            <ChevronDown className="w-4 h-4 text-[#86868B] group-hover:text-[#0A84FF] transition-colors" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
