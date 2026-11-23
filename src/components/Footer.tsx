"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Send, Mail, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

export default function Footer() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prototipo funcional limpio
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <footer id="contact" className="relative py-28 px-4 sm:px-6 w-full max-w-7xl mx-auto overflow-hidden">
      {/* Expansive Animated Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0.85 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] backdrop-blur-2xl p-8 sm:p-12 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.6)]"
      >
        {/* Soft background ambient gradient */}
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: "radial-gradient(circle, rgba(10, 132, 255, 0.25) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Direct Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#0A84FF]">
                <span>03</span>
                <span className="w-4 h-[1px] bg-[#0A84FF]/40" />
                <span>Contacto</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#F5F5F7] leading-tight">
                Construyamos algo extraordinario.
              </h2>
              <p className="text-sm sm:text-base text-[#86868B] max-w-md leading-relaxed">
                ¿Tienes en mente un producto ambicioso o una arquitectura que requiere máxima escala y estética? Hablemos de los detalles.
              </p>
            </div>

            {/* Direct Email Pill */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#86868B] uppercase tracking-wider">
                Canal preferido
              </span>
              <div>
                <a
                  href="mailto:alex@example.com"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.2] text-sm text-[#F5F5F7] transition-all group"
                >
                  <Mail className="w-4 h-4 text-[#0A84FF]" />
                  <span>alex@example.com</span>
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-[#86868B] uppercase tracking-wider">
                Redes & Presencia
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-[#86868B] hover:text-[#F5F5F7] transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-[#86868B] hover:text-[#F5F5F7] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.2] flex items-center justify-center text-[#86868B] hover:text-[#F5F5F7] transition-all"
                  aria-label="Twitter / X"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Minimalist Contact Form */}
          <div className="lg:col-span-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-[#86868B] mb-1.5 uppercase">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Steve Jobs"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-[#0A84FF] focus:bg-white/[0.05] text-[#F5F5F7] placeholder-[#86868B]/50 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-[#86868B] mb-1.5 uppercase">
                  Email de contacto
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="steve@apple.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-[#0A84FF] focus:bg-white/[0.05] text-[#F5F5F7] placeholder-[#86868B]/50 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[#86868B] mb-1.5 uppercase">
                  Mensaje / Proyecto
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Cuéntame sobre tus objetivos técnicos o de producto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.08] focus:border-[#0A84FF] focus:bg-white/[0.05] text-[#F5F5F7] placeholder-[#86868B]/50 text-sm outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formSubmitted}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-medium text-[#F5F5F7] bg-white/[0.08] hover:bg-white/[0.14] border border-white/[0.12] hover:border-white/[0.22] transition-all cursor-pointer disabled:opacity-50"
              >
                {formSubmitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>¡Mensaje preparado!</span>
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
                    <Send className="w-3.5 h-3.5 text-[#0A84FF]" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Legal / Signature Bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#86868B]">
          <div>
            © 2026 {personalInfo.name}. Arquitectura y diseño sin concesiones.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Next.js 16 · Tailwind CSS · Framer Motion</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
