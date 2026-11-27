"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/portfolio";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 32);
      const sections = ["hero", "metrics", "projects", "contact"];
      const offset = window.scrollY + 140;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && offset >= el.offsetTop && offset < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={[
            "pointer-events-auto w-fit",
            "flex items-center gap-2 px-3 py-2 rounded-full",
            "bg-white/75 backdrop-blur-2xl",
            "border border-black/15",
            scrolled
              ? "shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
              : "shadow-[0_8px_30px_rgba(0,0,0,0.07)]",
            "transition-shadow duration-300",
          ].join(" ")}
        >
          {/* Monogram badge */}
          <a
            href="#hero"
            className="flex items-center pl-0.5 pr-1.5"
            aria-label="Inicio"
          >
            <span className="w-8 h-8 rounded-full bg-[#0E0E10] flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105">
              <span className="text-[11px] font-bold text-white tracking-widest leading-none">
                GC
              </span>
            </span>
          </a>

          {/* Separator */}
          <span className="hidden sm:block w-px h-4 bg-black/10" />

          {/* Nav Links with sliding pill */}
          <div className="hidden sm:flex items-center gap-1 px-1">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const active = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative px-4 py-2 rounded-full text-[13px] font-medium tracking-tight",
                    "transition-colors duration-150",
                    active
                      ? "text-[#111111]"
                      : "text-[#5C5C60] hover:text-[#111111]",
                  ].join(" ")}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-black/[0.07]"
                      transition={{ type: "spring", stiffness: 450, damping: 35, mass: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Separator */}
          <span className="hidden sm:block w-px h-4 bg-black/10" />

          {/* Hablemos CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-5 py-2 rounded-full text-[13px] font-semibold text-white bg-[#0E0E10] hover:bg-[#1f1f22] active:scale-[0.97] transition-all tracking-tight"
          >
            Hablemos
          </a>

          {/* Mobile toggle */}
          <button
            className="sm:hidden p-2 text-[#5C5C60] hover:text-[#111111] transition-colors active:scale-90"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed top-[80px] inset-x-4 z-40 sm:hidden rounded-2xl bg-white/95 backdrop-blur-2xl border border-black/10 shadow-[0_12px_40px_rgba(0,0,0,0.10)] p-3 flex flex-col gap-1"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-[#5C5C60] hover:text-[#111111] hover:bg-black/[0.04] active:bg-black/[0.07] transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 mt-1 border-t border-black/[0.06]">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-semibold text-white bg-[#0E0E10] text-center active:scale-95 transition-transform"
              >
                Hablemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
