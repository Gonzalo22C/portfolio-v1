"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/portfolio";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-6 px-4 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[#070709]/80 backdrop-blur-2xl border-white/[0.12] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-white/[0.04] backdrop-blur-xl border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.25)]"
          }`}
        >
          {/* Brand mark */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 pl-2 text-sm font-medium tracking-tight text-[#F5F5F7] hover:opacity-80 transition-opacity"
          >
            <span className="w-2 h-2 rounded-full bg-[#0A84FF] shadow-[0_0_8px_rgba(10,132,255,0.6)]" />
            <span className="font-semibold text-xs uppercase tracking-widest text-white/90">Portfolio</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                    isActive ? "text-[#F5F5F7]" : "text-[#86868B] hover:text-[#F5F5F7]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.1]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#F5F5F7] bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] hover:border-white/[0.18] transition-all"
            >
              <span>Hablemos</span>
              <ArrowUpRight className="w-3 h-3 text-[#0A84FF]" />
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-[#86868B] hover:text-[#F5F5F7] transition-colors"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 inset-x-4 z-40 md:hidden p-4 rounded-2xl bg-[#070709]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl flex flex-col gap-2"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-[#86868B] hover:text-[#F5F5F7] hover:bg-white/[0.05] transition-all"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
