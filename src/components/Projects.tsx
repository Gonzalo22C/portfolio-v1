"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

// ─────────────────────────────────────────────────────────────────────────────
// Mockup 01: Telemetría / Consola de servicios  (Aura OS)
// ─────────────────────────────────────────────────────────────────────────────
function TelemtryMockup() {
  const services = [
    { name: "api-gateway", status: "ok", latency: "12ms", rps: "14.3k" },
    { name: "auth-service", status: "ok", latency: "8ms", rps: "9.7k" },
    { name: "data-pipeline", status: "warn", latency: "48ms", rps: "3.1k" },
    { name: "notify-worker", status: "ok", latency: "21ms", rps: "1.2k" },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0C] font-mono text-xs">
      {/* Terminal bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-white/30 text-[10px] tracking-wider">aura-os · telemetry · live</span>
        <span className="ml-auto flex items-center gap-1 text-[#28C840] text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#28C840] animate-pulse" />
          LIVE
        </span>
      </div>

      {/* Header row */}
      <div className="grid grid-cols-[1fr_48px_52px_52px] gap-2 px-3 py-1.5 text-[10px] text-white/25 uppercase tracking-widest border-b border-white/[0.04]">
        <span>Service</span>
        <span>Lat</span>
        <span>RPS</span>
        <span className="text-right">Status</span>
      </div>

      {/* Service rows */}
      {services.map((s) => (
        <div
          key={s.name}
          className="grid grid-cols-[1fr_48px_52px_52px] gap-2 px-3 py-2 items-center border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors"
        >
          <span className="text-white/70 truncate">{s.name}</span>
          <span className={s.status === "warn" ? "text-[#FEBC2E]" : "text-white/40"}>{s.latency}</span>
          <span className="text-white/40">{s.rps}</span>
          <span className="text-right">
            {s.status === "ok" ? (
              <span className="text-[#28C840]">●</span>
            ) : (
              <span className="text-[#FEBC2E]">▲</span>
            )}
          </span>
        </div>
      ))}

      {/* Footer metric */}
      <div className="px-3 py-2 flex items-center justify-between text-[10px] text-white/25">
        <span>P95 response time</span>
        <span className="text-[#1D4ED8] font-semibold">18.4ms ↓ 97%</span>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Mockup 02: Widget de métricas financieras en tiempo real (Chronos)
// ─────────────────────────────────────────────────────────────────────────────
function MetricsMockup() {
  const bars = [38, 52, 44, 68, 55, 72, 61, 80, 70, 88, 76, 92];

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0C] font-mono text-xs">
      {/* Top bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-white/30 text-[10px] tracking-wider">chronos · market-feed · streaming</span>
      </div>

      <div className="p-4 space-y-4">
        {/* KPI numbers */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Events/s", value: "247k", delta: "+12%" },
            { label: "Latency", value: "340ms", delta: "−99%" },
            { label: "P99", value: "1.1s", delta: "nominal" },
          ].map((k) => (
            <div key={k.label} className="space-y-0.5">
              <div className="text-[9px] text-white/30 uppercase tracking-widest">{k.label}</div>
              <div className="text-white text-base font-semibold leading-none">{k.value}</div>
              <div className={`text-[9px] ${k.delta.startsWith("−") || k.delta.startsWith("+") ? "text-[#28C840]" : "text-white/30"}`}>
                {k.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Volume chart */}
        <div className="space-y-1">
          <div className="text-[9px] text-white/25 uppercase tracking-widest">Event Volume (12h)</div>
          <div className="flex items-end gap-0.5 h-14">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm bg-[#1D4ED8] transition-all"
                style={{ height: `${h}%`, opacity: 0.3 + i * 0.055 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Mockup 03: Inspector de tokens de diseño (Vesper DS)
// ─────────────────────────────────────────────────────────────────────────────
function TokensMockup() {
  const tokens = [
    { name: "--color-primary", value: "#111111", swatch: "#111111" },
    { name: "--color-canvas", value: "#F7F6F2", swatch: "#F7F6F2", border: true },
    { name: "--color-cobalt", value: "#1D4ED8", swatch: "#1D4ED8" },
    { name: "--color-muted", value: "#5C5C60", swatch: "#5C5C60" },
    { name: "--radius-pill", value: "9999px", swatch: null },
    { name: "--font-sans", value: "SF Pro, system-ui", swatch: null },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0A0A0C] font-mono text-xs">
      {/* Top bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.04] border-b border-white/[0.06]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 text-white/30 text-[10px] tracking-wider">vesper-ds · tokens · 3 brands</span>
        <span className="ml-auto text-[#1D4ED8] text-[10px]">180 tokens</span>
      </div>

      {/* Token rows */}
      <div className="divide-y divide-white/[0.04]">
        {tokens.map((t) => (
          <div
            key={t.name}
            className="flex items-center gap-3 px-3 py-2 hover:bg-white/[0.03] transition-colors"
          >
            {t.swatch ? (
              <span
                className="w-5 h-5 rounded shrink-0"
                style={{
                  backgroundColor: t.swatch,
                  border: t.border ? "1px solid rgba(255,255,255,0.15)" : "none",
                }}
              />
            ) : (
              <span className="w-5 h-5 rounded shrink-0 bg-white/[0.06] flex items-center justify-center text-[8px] text-white/40">
                T
              </span>
            )}
            <span className="text-[#1D4ED8] text-[10px] flex-1 truncate">{t.name}</span>
            <span className="text-white/40 text-[10px] shrink-0">{t.value}</span>
          </div>
        ))}
      </div>

      {/* Consistency badge */}
      <div className="px-3 py-2 flex items-center justify-between text-[10px] text-white/25 border-t border-white/[0.04]">
        <span>WCAG 2.1 AA compliance</span>
        <span className="text-[#28C840]">94% consistent ✓</span>
      </div>
    </div>
  );
}

const mockups = [TelemtryMockup, MetricsMockup, TokensMockup];

// ─────────────────────────────────────────────────────────────────────────────
// Main Projects section
// ─────────────────────────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-6 sm:px-10 bg-[#F7F6F2]">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* ── Section Label ── */}
        <div className="flex items-center gap-3 mb-14">
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#5C5C60]">
            02 / Proyectos seleccionados
          </span>
          <div className="flex-1 h-px bg-black/[0.08]" />
        </div>

        {/* ── Project cards: bloques oscuros de alto contraste ── */}
        <div className="space-y-6">
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            const MockupComponent = mockups[i] ?? mockups[0];

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-1 md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0E0E10] hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)] transition-all duration-500"
              >
                {/* ── Text block ── */}
                <div
                  className={[
                    "flex flex-col justify-between gap-6 p-8 sm:p-10",
                    !isEven ? "md:order-2" : "",
                  ].join(" ")}
                >
                  {/* Index + Category */}
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-white/20">
                        {project.index}
                      </span>
                      <span className="w-px h-3 bg-white/10" />
                      <span className="text-[11px] font-medium text-white/40 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    {/* Title — grande, apretado, blanco sobre tinta */}
                    <h3 className="text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.025em] text-white leading-tight">
                      {project.title}
                    </h3>

                    {/* Impact headline: 1 sola frase de alto valor */}
                    <p className="text-sm text-white/50 leading-relaxed max-w-sm">
                      {project.impact}
                    </p>

                    {/* Tags — solo 3 máximo */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium text-white/40 bg-white/[0.05] border border-white/[0.08] hover:border-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 pt-2 border-t border-white/[0.06]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-white/35 hover:text-white/70 transition-colors"
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
                        className="group/link flex items-center gap-1 text-xs font-semibold text-white/60 hover:text-white transition-colors"
                      >
                        <span>Ver proyecto</span>
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>

                {/* ── Mockup UI side ── */}
                <div
                  className={[
                    "flex items-center justify-center p-6 sm:p-8 bg-[#0A0A0C]",
                    !isEven ? "md:order-1" : "",
                  ].join(" ")}
                >
                  <div className="w-full max-w-sm">
                    <MockupComponent />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
