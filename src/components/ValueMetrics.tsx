"use client";

import { motion } from "framer-motion";
import { valueMetrics, capabilities, techStack } from "@/data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function ValueMetrics() {
  return (
    <section id="metrics" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#F7F6F2] border-b border-black/[0.06]">
      <div className="max-w-5xl mx-auto space-y-20">
        {/* ── Section Label ── */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#5C5C60]">01 / Credenciales</span>
          <div className="flex-1 h-px bg-black/[0.08]" />
        </div>

        {/* ── Metrics Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {valueMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="group p-6 rounded-2xl bg-white border border-black/[0.08] hover:border-black/[0.16] hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#111111] leading-none">
                {m.value}
                {m.unit && (
                  <span className="text-lg font-medium text-[#5C5C60] ml-0.5">{m.unit}</span>
                )}
              </div>
              <div className="mt-2 text-xs font-semibold text-[#111111] uppercase tracking-wide">
                {m.label}
              </div>
              <p className="mt-1.5 text-xs text-[#5C5C60] leading-relaxed">{m.description}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Capabilities ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              custom={i + 4}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="space-y-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#5C5C60] opacity-60">
                  0{i + 1}
                </span>
                <h3 className="text-sm font-semibold text-[#111111]">{cap.title}</h3>
              </div>
              <p className="text-sm text-[#5C5C60] leading-relaxed pl-6">
                {cap.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Tech Stack ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#5C5C60]">
            Stack técnico principal
          </span>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-[#111111] bg-white border border-black/[0.08] hover:border-black/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
