"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

// Minimal architectural mockup for each project
function ProjectMockup({ index, accent }: { index: string; accent?: string }) {
  const color = accent ?? "#1D4ED8";
  const isInk = color === "#0E0E10";
  return (
    <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#F0EFEA] border border-black/[0.08]">
      {/* Window chrome */}
      <div className="absolute top-0 inset-x-0 h-8 bg-white/50 border-b border-black/[0.06] flex items-center px-3 gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-black/10" />
        <div className="flex-1 ml-2 h-3.5 rounded-full bg-black/[0.06] max-w-[120px]" />
      </div>

      {/* Mock UI content */}
      <div className="absolute inset-0 top-8 p-4 flex flex-col gap-2">
        {/* Accent bar */}
        <div
          className="h-1 w-16 rounded-full"
          style={{ backgroundColor: isInk ? "#0E0E10" : color, opacity: 0.9 }}
        />
        {/* Skeleton rows */}
        <div className="h-2 w-3/4 rounded bg-black/[0.08]" />
        <div className="h-2 w-1/2 rounded bg-black/[0.06]" />
        <div className="h-2 w-5/6 rounded bg-black/[0.06]" />

        {/* Mini chart placeholder */}
        <div className="mt-auto flex items-end gap-1 h-12">
          {[40, 65, 50, 80, 55, 70, 90, 60, 85, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                backgroundColor: isInk ? "#0E0E10" : color,
                opacity: 0.12 + i * 0.08,
              }}
            />
          ))}
        </div>
      </div>

      {/* Project index number */}
      <span
        className="absolute bottom-3 right-4 text-5xl font-bold tracking-tighter leading-none select-none"
        style={{ color: isInk ? "#0E0E10" : color, opacity: 0.08 }}
      >
        {index}
      </span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#F7F6F2]">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* ── Section Label ── */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#5C5C60]">
            02 / Proyectos seleccionados
          </span>
          <div className="flex-1 h-px bg-black/[0.08]" />
        </div>

        {/* ── Project List (editorial numbered alternating layout) ── */}
        <div className="space-y-10">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-12 items-center p-6 sm:p-8 rounded-3xl bg-white border border-black/[0.08] hover:border-black/[0.16] hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-all duration-300"
              >
                {/* Text side */}
                <div className={`space-y-5 ${!isEven ? "md:order-2" : ""}`}>
                  {/* Index + Category */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#5C5C60] opacity-50">
                      {project.index}
                    </span>
                    <span className="w-px h-3 bg-black/15" />
                    <span className="text-xs font-medium text-[#5C5C60] uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-[-0.025em] text-[#111111] leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#5C5C60] leading-relaxed">{project.description}</p>

                  {/* Problem / Solution / Impact table */}
                  <div className="space-y-3 pt-1">
                    {[
                      { label: "Problema", text: project.problem },
                      { label: "Solución", text: project.solution },
                      { label: "Impacto", text: project.impact },
                    ].map(({ label, text }) => (
                      <div key={label} className="grid grid-cols-[72px_1fr] gap-2">
                        <span className="text-[11px] font-mono uppercase tracking-wide text-[#5C5C60] opacity-60 pt-0.5">
                          {label}
                        </span>
                        <span className="text-xs text-[#111111] leading-relaxed">{text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium text-[#5C5C60] bg-[#F0EFEA] border border-black/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-[#5C5C60] hover:text-[#111111] transition-colors"
                        aria-label="Ver código fuente"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>Código</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs font-semibold text-[#111111] hover:text-[#1D4ED8] transition-colors group/link"
                      >
                        <span>Ver proyecto</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Mockup visual side */}
                <div className={`${!isEven ? "md:order-1" : ""}`}>
                  <ProjectMockup index={project.index} accent={project.accentColor} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
