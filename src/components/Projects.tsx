"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="mb-14 space-y-2">
        <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0A84FF]">
          <span>02</span>
          <span className="w-4 h-[1px] bg-[#0A84FF]/40" />
          <span>Showcase</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F5F7]">
          Proyectos seleccionados
        </h2>
        <p className="text-sm sm:text-base text-[#86868B] max-w-xl">
          Una selección de trabajos representativos enfocados en rendimiento, arquitectura y diseño de interacción.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col justify-between rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.16] backdrop-blur-xl p-5 overflow-hidden transition-all duration-300"
          >
            {/* Project Preview Window Mockup */}
            <div className="relative aspect-[16/10] w-full rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/[0.06] overflow-hidden mb-5 flex flex-col justify-between p-4">
              {/* Window Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                {project.metrics && (
                  <span className="text-[10px] font-mono font-medium text-[#0A84FF] px-2 py-0.5 rounded-full bg-[#0A84FF]/10 border border-[#0A84FF]/20">
                    {project.metrics}
                  </span>
                )}
              </div>

              {/* Ambient Canvas Glow inside preview */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${project.previewGradient} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
              />

              {/* Preview Center Graphic / Placeholder */}
              <div className="relative z-10 my-auto text-center">
                <span className="text-xs font-mono text-white/40 tracking-widest uppercase">
                  Preview Container
                </span>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#86868B]">
                <span>v1.0.0</span>
                <span>Active</span>
              </div>
            </div>

            {/* Content info */}
            <div className="space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#F5F5F7] tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-[#86868B] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium text-[#86868B] bg-white/[0.03] border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* External Links */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#86868B] hover:text-[#F5F5F7] transition-colors p-1"
                        aria-label={`Ver código fuente de ${project.title}`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#86868B] hover:text-[#F5F5F7] transition-colors p-1"
                        aria-label={`Abrir proyecto ${project.title}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <a
                    href={project.link || "#"}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#F5F5F7] hover:text-[#0A84FF] transition-colors group/link"
                  >
                    <span>Detalles</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
