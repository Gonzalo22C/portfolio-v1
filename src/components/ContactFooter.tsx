"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Send, Mail, CheckCircle2, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";

const socialLinks = [
  { label: "GitHub", href: "https://github.com", Icon: GithubIcon },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: LinkedinIcon },
  { label: "Twitter / X", href: "https://x.com", Icon: TwitterIcon },
];

export default function ContactFooter() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <footer
      id="contact"
      className="relative bg-[#0E0E10] text-white overflow-hidden"
    >
      {/* Subtle warm grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 py-24 sm:py-32">
        {/* ── Top: Headline + Form ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Left: Invitation text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="space-y-8"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-white/40">
                03 / Contacto
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.025em] leading-[1.08] text-white">
              Construyamos algo que valga la pena.
            </h2>

            <p className="text-sm text-white/50 leading-relaxed max-w-sm">
              Si tienes un producto ambicioso que necesita arquitectura sólida, diseño de interfaz de alta precisión o liderazgo técnico ejecutivo, escríbeme.
            </p>

            {/* Direct email */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/30">
                Canal directo
              </span>
              <div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#1D4ED8]" />
                  <span>{personalInfo.email}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="space-y-3">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/30">
                Redes
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-full border border-white/[0.12] hover:border-white/30 flex items-center justify-center text-white/50 hover:text-white transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "name", label: "Nombre", type: "text", placeholder: "Tu nombre completo", key: "name" as const },
                { id: "email", label: "Email", type: "email", placeholder: "tu@empresa.com", key: "email" as const },
              ].map(({ id, label, type, placeholder, key }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-[11px] font-mono uppercase tracking-widest text-white/40 mb-1.5">
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] focus:border-white/30 focus:bg-white/[0.08] text-white placeholder-white/25 text-sm outline-none transition-all"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-[11px] font-mono uppercase tracking-widest text-white/40 mb-1.5">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto o desafío técnico..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] focus:border-white/30 focus:bg-white/[0.08] text-white placeholder-white/25 text-sm outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sent"}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold transition-all disabled:opacity-70 cursor-pointer bg-white text-[#0E0E10] hover:bg-white/90"
              >
                {status === "sent" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>¡Listo, en breve te escribo!</span>
                  </>
                ) : (
                  <>
                    <span>Enviar mensaje</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-24 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-white/30">
          <span>
            © 2026 {personalInfo.name}. Todos los derechos reservados.
          </span>
          <span className="hidden sm:block">
            Next.js · Tailwind CSS · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
