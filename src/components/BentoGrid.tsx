"use client";

import { motion } from "framer-motion";
import { techStack, personalInfo } from "@/data/portfolio";
import { Cpu, Globe, Layers, Zap, Terminal } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="about" className="relative py-28 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0A84FF]">
          <span>01</span>
          <span className="w-4 h-[1px] bg-[#0A84FF]/40" />
          <span>Sobre mí & Stack</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F7]">
          Filosofía técnica & capacidades
        </h2>
        <p className="text-sm sm:text-base text-[#86868B] max-w-xl">
          Construyo sobre la intersección de ingeniería de software robusta y diseño sensorial pulido.
        </p>
      </div>

      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Core Specialization (2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl relative overflow-hidden group hover:border-white/[0.14] transition-all"
        >
          <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#0A84FF]">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-[#86868B] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                Especialidad
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-[#F5F5F7] tracking-tight">
                Sistemas Frontend de Alto Rendimiento & Arquitectura
              </h3>
              <p className="text-sm text-[#86868B] leading-relaxed">
                Especializado en diseñar aplicaciones web complejas manteniendo tiempos de carga casi instantáneos, renderizado a 60 FPS y una arquitectura modular fácil de escalar.
              </p>
            </div>

            {/* Code / Visual highlight snippet */}
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] font-mono text-xs text-[#86868B] flex items-center gap-3">
              <Terminal className="w-4 h-4 text-[#0A84FF] shrink-0" />
              <span className="text-[#F5F5F7]/90 font-medium truncate">
                const architect = &#123; latency: &quot;&lt;50ms&quot;, reliability: &quot;99.99%&quot;, ux: &quot;VisionOS&quot; &#125;;
              </span>
            </div>
          </div>
        </motion.div>

        {/* Card 2: Tech Stack (1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between space-y-6 group hover:border-white/[0.14] transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#0A84FF]">
              <Cpu className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono text-[#86868B] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              Core Tech
            </span>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#F5F5F7] tracking-tight mb-3">
              Stack Tecnológico
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium text-[#F5F5F7]/90 bg-white/[0.04] border border-white/[0.06] hover:border-white/[0.18] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Card 3: Location / Remote (1 col) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between space-y-6 group hover:border-white/[0.14] transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#0A84FF]">
              <Globe className="w-5 h-5" />
            </div>
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Online
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-xl font-semibold text-[#F5F5F7] tracking-tight">
              {personalInfo.location}
            </h3>
            <p className="text-xs text-[#86868B] font-mono">
              Zona horaria {personalInfo.timezone} · Colaboración fluida en remoto con equipos internacionales.
            </p>
          </div>
        </motion.div>

        {/* Card 4: Engineering Standard (2 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:col-span-2 p-7 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl flex flex-col justify-between space-y-6 group hover:border-white/[0.14] transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#0A84FF]">
              <Zap className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-mono text-[#86868B] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
              Estándar
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-[#F5F5F7] tracking-tight">
              Simplicidad radical respaldada por rigor técnico
            </h3>
            <p className="text-sm text-[#86868B] leading-relaxed">
              Cada componente, animación y capa de datos es optimizada con una sola meta: ofrecer interfaces que se sientan ingrávidas e inmediatas sin comprometer la estabilidad ni la mantenibilidad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
