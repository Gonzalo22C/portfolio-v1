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
      const offset = window.scrollY + 120;

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
      {/* Floating Pill */}
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={[
            "pointer-events-auto",
            "flex items-center gap-1 px-2 py-2 rounded-full",
            "bg-white/65 backdrop-blur-2xl",
            "border border-black/10",
            scrolled
              ? "shadow-[0_8px_32px_rgba(0,0,0,0.10)]"
              : "shadow-[0_4px_16px_rgba(0,0,0,0.06)]",
            "transition-shadow duration-300",
          ].join(" ")}
        >
          {/* Logo dot */}
          <a
            href="#hero"
            className="flex items-center gap-2 pl-2 pr-3 text-xs font-semibold tracking-tight text-[#111111]"
          >
            <span className="w-5 h-5 rounded-full bg-[#0E0E10] flex items-center justify-center">
              <span className="text-[8px] font-bold text-white tracking-widest">GC</span>
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden sm:flex items-center gap-0.5">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const active = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    "relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200",
                    active ? "text-[#111111]" : "text-[#5C5C60] hover:text-[#111111]",
                  ].join(" ")}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-black/[0.07]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex ml-1 mr-1 items-center px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-[#0E0E10] hover:bg-[#1a1a1c] transition-colors tracking-wide"
          >
            Hablemos
          </a>

          {/* Mobile toggle */}
          <button
            className="sm:hidden p-1.5 ml-1 mr-0.5 text-[#5C5C60] hover:text-[#111111] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menú"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] inset-x-4 z-40 sm:hidden rounded-2xl bg-white/90 backdrop-blur-2xl border border-black/10 shadow-lg p-3 flex flex-col gap-1"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#5C5C60] hover:text-[#111111] hover:bg-black/[0.04] transition-all"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-1 mt-1 border-t border-black/[0.06]">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#0E0E10] text-center transition-colors"
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
