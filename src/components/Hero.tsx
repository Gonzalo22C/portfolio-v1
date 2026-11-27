"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const avatarY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#F7F6F2]"
    >
      {/* ── Parallax Background Texture ── */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "url('/bg-texture.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </motion.div>

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-6 sm:px-10 pt-36 pb-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* ── Left: Editorial Identity (Gestalt Proximity & Alignment) ── */}
          <div className="space-y-8">
            {/* Identity & Status Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <span className="text-xs font-semibold tracking-tight text-[#111111]">
                {personalInfo.name}
              </span>
              <span className="w-px h-3 bg-black/15" />
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5C5C60]">
                <MapPin className="w-3 h-3 shrink-0" />
                {personalInfo.location}
              </span>
              <span className="w-px h-3 bg-black/15" />
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5C5C60]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
                {personalInfo.availability}
              </span>
            </motion.div>

            {/* Headline & Concise Subheadline (Tightly Grouped) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="space-y-4"
            >
              <h1 className="text-[clamp(2.85rem,5.8vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-[#111111]">
                {personalInfo.headline}
              </h1>
              <p className="text-base sm:text-lg text-[#5C5C60] max-w-lg leading-[1.55] font-normal">
                Arquitectura de sistemas e interfaces de alta precisión. Ingeniería robusta con estética sensorial pulida.
              </p>
            </motion.div>

            {/* Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#0E0E10] hover:bg-[#1f1f22] active:scale-[0.98] transition-all tracking-tight"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-[#111111] border border-black/15 hover:border-black/30 hover:bg-black/[0.03] active:scale-[0.98] transition-all tracking-tight"
              >
                Contacto
              </a>
            </motion.div>

            {/* Editorial Bio Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.42 }}
              className="text-xs text-[#5C5C60] max-w-sm leading-relaxed border-l-2 border-black/[0.12] pl-3.5"
            >
              {personalInfo.bio}
            </motion.p>
          </div>

          {/* ── Right: Clean Avatar (/avatar2.jpg) without heavy frames ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: avatarY }}
            className="flex flex-col items-center md:items-end gap-3"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-[272px] md:h-[272px] rounded-3xl overflow-hidden bg-[#ECEAE4] shadow-[0_14px_44px_rgba(0,0,0,0.09)] hover:shadow-[0_20px_56px_rgba(0,0,0,0.14)] transition-shadow duration-500">
              <Image
                src="/avatar2.jpg"
                alt={`${personalInfo.name} — ${personalInfo.title}`}
                fill
                priority
                sizes="(max-width: 768px) 256px, 272px"
                className="object-cover object-center"
              />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#5C5C60]/70">
              {personalInfo.title}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        className="relative z-10 pb-8 flex flex-col items-center"
      >
        <a
          href="#metrics"
          className="group flex flex-col items-center gap-2 text-[#5C5C60] hover:text-[#111111] transition-colors"
          aria-label="Ir a métricas"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-55 group-hover:opacity-90 transition-opacity">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-7 rounded-full border border-black/[0.12] flex items-center justify-center group-hover:border-black/30 transition-colors"
          >
            <ArrowDown className="w-3 h-3" />
          </motion.div>
        </a>
      </motion.div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-black/[0.06] z-10" />
    </section>
  );
}
