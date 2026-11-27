"use client";

import { motion } from "framer-motion";
import { valueMetrics, capabilities, techStack } from "@/data/portfolio";

export default function ValueMetrics() {
  return (
    <section
      id="metrics"
      className="py-24 sm:py-32 px-6 sm:px-10 bg-[#F7F6F2] border-b border-black/[0.06]"
    >
      <div className="max-w-5xl mx-auto space-y-20">
        {/* ── Section Label ── */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#5C5C60]">
            01 / Credenciales
          </span>
          <div className="flex-1 h-px bg-black/[0.08]" />
        </div>

        {/* ── Unified Metrics Strip (Gestalt: Common Region & Proximity) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-3xl bg-white border border-black/[0.08] divide-y sm:divide-y-0 sm:divide-x divide-black/[0.08] overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.03)]"
        >
          {valueMetrics.map((m) => (
            <div
              key={m.label}
              className="p-7 sm:p-8 flex flex-col justify-between gap-4 hover:bg-[#F7F6F2]/50 transition-colors duration-200"
            >
              <div className="text-4xl font-semibold tracking-[-0.03em] text-[#111111] leading-none">
                {m.value}
                {m.unit && (
                  <span className="text-lg font-medium text-[#5C5C60] ml-0.5">
                    {m.unit}
                  </span>
                )}
              </div>
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#111111] uppercase tracking-wider">
                  {m.label}
                </div>
                <p className="text-xs text-[#5C5C60] leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Capabilities + Stack (Asymmetric Figure-Ground Layout) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-start">
          {/* Left: Capabilities list separated by hairlines */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="divide-y divide-black/[0.08] border-t border-b border-black/[0.08]"
          >
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className="py-6 grid grid-cols-[32px_1fr] gap-4 items-baseline"
              >
                <span className="text-xs font-mono text-[#5C5C60]/70">
                  0{i + 1}
                </span>
                <div className="space-y-1.5">
                  <h3 className="text-base font-semibold text-[#111111] tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#5C5C60] leading-relaxed max-w-lg">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right: Stack in a dedicated Common Region */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="p-6 sm:p-7 rounded-2xl bg-[#F0EFEA] border border-black/[0.06] space-y-5"
          >
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#5C5C60]">
                Stack técnico principal
              </span>
              <p className="text-xs text-[#5C5C60]/80">
                Herramientas seleccionadas por estabilidad, rendimiento y mantenibilidad.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#111111] bg-white border border-black/[0.07] hover:border-black/20 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
