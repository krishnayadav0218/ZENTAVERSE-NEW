"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sparkles,
  ArrowUpRight,
  SlidersHorizontal,
} from "lucide-react";
import { BrandConfig } from "@/data/siteData";
import MagneticButton from "@/components/ui/MagneticButton";

interface NavbarProps {
  brand: BrandConfig;
  onOpenBrandModal: () => void;
}

const navLinks = [
  { label: "Home", href: "#home", color: "#00F0FF" },
  { label: "About", href: "#about", color: "#38BDF8" },
  { label: "Services", href: "#services", color: "#8B5CF6" },
  { label: "Projects", href: "#projects", color: "#EC4899" },
  { label: "Skills", href: "#skills", color: "#10B981" },
  { label: "Experience", href: "#experience", color: "#F59E0B" },
  { label: "Contact", href: "#contact", color: "#00F0FF" },
];

export default function Navbar({ brand, onOpenBrandModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = [
        "home",
        "about",
        "services",
        "projects",
        "skills",
        "experience",
        "contact",
      ];
      const currentPos = window.scrollY + 260;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= currentPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-10 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`relative mx-auto max-w-7xl rounded-2xl transition-all duration-300 overflow-hidden ${
          scrolled
            ? "glass-panel py-3 px-4 sm:px-6 shadow-[0_15px_35px_rgba(0,0,0,0.8)] border-cyan-400/30"
            : "bg-slate-950/60 backdrop-blur-xl border border-white/15 py-3.5 px-4 sm:px-6"
        }`}
      >
        {/* Multi-color prismatic bottom laser line */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 via-amber-400 to-emerald-400 opacity-75"
          aria-hidden="true"
        />

        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="group flex items-center gap-3 focus:outline-none"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 p-[1.5px] shadow-neon-cyan">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950 font-mono text-sm font-bold text-gradient-cyber group-hover:bg-slate-900 transition-colors">
                  {brand.shortName.slice(0, 2).toUpperCase()}
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-400" />
              </div>

              <div className="flex flex-col">
                <span className="font-display text-sm sm:text-base font-bold tracking-wider text-white flex items-center gap-1.5">
                  {brand.name}
                </span>
                <span className="hidden sm:inline-block font-mono text-[10px] tracking-widest text-gradient-cyber font-semibold uppercase">
                  3D TECH • AI • FULL-STACK
                </span>
              </div>
            </a>

            {/* Subtle Brand Customizer Trigger */}
            <button
              type="button"
              onClick={onOpenBrandModal}
              title="Customize Your Name / Brand Identity"
              className="hidden xl:inline-flex items-center gap-1.5 rounded-lg border border-pink-400/30 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 px-2.5 py-1 text-[11px] font-mono text-slate-200 hover:border-cyan-400/60 hover:text-white transition-colors"
            >
              <SlidersHorizontal className="h-3 w-3 text-pink-400" />
              <span>Edit Brand</span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-1 rounded-xl border border-white/10 bg-slate-950/70 p-1">
            {navLinks.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavPill"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/25 via-purple-500/25 to-pink-500/25 border border-cyan-400/45"
                      />
                    )}
                    <span
                      className="relative z-10 h-1.5 w-1.5 rounded-full transition-transform"
                      style={{
                        backgroundColor: item.color,
                        boxShadow: isActive ? `0 0 8px ${item.color}` : "none",
                      }}
                    />
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MagneticButton
                href="#contact"
                variant="primary"
                className="!px-5 !py-2.5 !text-xs"
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Let&apos;s Talk</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </MagneticButton>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="flex lg:hidden h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-slate-900/80 text-slate-200 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Responsive Mobile Hamburger Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 border-t border-white/10 pt-4 pb-2 flex flex-col gap-1.5">
                {navLinks.map((item) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-white border border-cyan-400/40"
                          : "text-slate-300 hover:bg-white/5"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        {item.label}
                      </span>
                      <ArrowUpRight className="h-4 w-4 opacity-60" />
                    </a>
                  );
                })}

                <div className="mt-3 flex flex-col sm:flex-row gap-2 pt-2 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 px-4 py-3 text-xs font-semibold text-white"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Let&apos;s Talk</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBrandModal();
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-mono text-slate-300"
                  >
                    <SlidersHorizontal className="h-3.5 w-3.5 text-pink-400" />
                    <span>Customize Brand Name</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
