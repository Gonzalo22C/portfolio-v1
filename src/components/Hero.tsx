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

  // Parallax: texture moves slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#F7F6F2]"
    >
      {/* Parallax Background Texture */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        {/* bg-texture.webp — se carga si existe, si no, fondo liso */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: "url('/bg-texture.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Fallback subtle paper grain via SVG */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full px-6 sm:px-10 pt-32 pb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
          {/* Left: Identity & Headline */}
          <div className="space-y-8">
            {/* Location / role tag */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5C5C60] tracking-wide">
                <MapPin className="w-3 h-3" />
                {personalInfo.location}
              </span>
              <span className="w-px h-3 bg-black/15" />
              <span className="inline-flex items-center gap-1.5 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[#5C5C60]">{personalInfo.availability}</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <h1 className="text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-[#111111]">
                {personalInfo.headline}
              </h1>
              <p className="text-base sm:text-lg text-[#5C5C60] max-w-lg leading-relaxed font-normal">
                {personalInfo.subheadline}
              </p>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0E0E10] hover:bg-[#1f1f22] transition-colors tracking-tight"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-[#111111] bg-transparent border border-black/15 hover:border-black/30 hover:bg-black/[0.03] transition-all tracking-tight"
              >
                Contacto directo
              </a>
            </motion.div>

            {/* Bio / credential line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xs text-[#5C5C60] max-w-sm leading-relaxed border-l-2 border-black/10 pl-3"
            >
              {personalInfo.bio}
            </motion.p>
          </div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative group">
              {/* Outer ring / frame */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-[2rem] overflow-hidden bg-[#F0EFEA] border border-black/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-shadow group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.12)]">
                {/* Avatar image — replace /avatar.png with actual Memoji */}
                <Image
                  src="/avatar.png"
                  alt={`Avatar de ${personalInfo.name}`}
                  fill
                  className="object-cover object-top"
                  priority
                  onError={() => {
                    // Falls back gracefully if image missing
                  }}
                />
                {/* Fallback initials overlay (shows if image not loaded) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F0EFEA] opacity-0 [img_error+&]:opacity-100">
                  <span className="text-6xl font-semibold text-[#111111] tracking-tight">
                    {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              </div>

              {/* Name tag */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-white border border-black/[0.08] shadow-sm text-xs font-semibold text-[#111111] tracking-tight">
                {personalInfo.name} · {personalInfo.title}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 pb-8 flex flex-col items-center"
      >
        <a
          href="#metrics"
          className="group flex flex-col items-center gap-2 text-[#5C5C60] hover:text-[#111111] transition-colors"
          aria-label="Ir a métricas"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-7 h-7 rounded-full border border-black/15 flex items-center justify-center group-hover:border-black/30 transition-colors"
          >
            <ArrowDown className="w-3 h-3" />
          </motion.div>
        </a>
      </motion.div>

      {/* Bottom edge separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-black/[0.06] z-10" />
    </section>
  );
}
