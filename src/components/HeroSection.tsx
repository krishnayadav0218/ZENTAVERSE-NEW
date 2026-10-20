"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Cpu,
  Database,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { BrandConfig } from "@/data/siteData";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroWorkstationCanvas = dynamic(
  () => import("@/components/three/HeroWorkstationCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[440px] sm:h-[520px] lg:h-[620px] w-full items-center justify-center rounded-3xl border border-cyan-400/25 bg-slate-950/40 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-12 w-12 rounded-full border-2 border-cyan-400 border-r-pink-500 border-b-amber-400 border-t-transparent animate-spin" />
          <p className="font-mono text-xs tracking-widest text-gradient-cyber uppercase">
            Initializing Multi-Spectrum 3D Workstation...
          </p>
        </div>
      </div>
    ),
  }
);

interface HeroSectionProps {
  brand: BrandConfig;
}

const capabilityBadges = [
  {
    icon: Code2,
    label: "Full-Stack Web",
    sub: "React & Next.js",
    border: "border-cyan-400/30",
    bg: "from-cyan-500/15 to-blue-500/5",
    iconColor: "text-cyan-400",
  },
  {
    icon: Cpu,
    label: "AI & Agents",
    sub: "Python & LLMs",
    border: "border-purple-400/30",
    bg: "from-purple-500/15 to-pink-500/5",
    iconColor: "text-purple-400",
  },
  {
    icon: Database,
    label: "Data & BI",
    sub: "SQL & Dashboards",
    border: "border-emerald-400/30",
    bg: "from-emerald-500/15 to-teal-500/5",
    iconColor: "text-emerald-400",
  },
  {
    icon: ShieldCheck,
    label: "Enterprise Scale",
    sub: "Cloud & Automation",
    border: "border-amber-400/30",
    bg: "from-amber-500/15 to-pink-500/5",
    iconColor: "text-amber-400",
  },
];

export default function HeroSection({ brand }: HeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener("resize", checkViewport);
    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* =================================================== */}
          {/* LEFT SIDE: BADGE, HEADLINE, DESCRIPTION, CTAs       */}
          {/* =================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Multi-Color Futuristic Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_25px_rgba(0,240,255,0.25)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500" />
              </span>
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-gradient-cyber uppercase">
                TECHNOLOGY • DEVELOPMENT • AI
              </span>
            </div>

            {/* Brand Tagline Pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Terminal className="h-3.5 w-3.5 text-pink-400" />
              <span>{brand.tagline}</span>
            </div>

            {/* Large Headline with Multi-Color Gradient Highlight */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              I Build{" "}
              <span className="text-gradient-cyber">Digital Solutions</span>{" "}
              That Turn{" "}
              <span className="text-gradient-aurora">Ideas Into Reality</span>
            </h1>

            {/* Short Description */}
            <p className="max-w-xl text-base sm:text-lg text-slate-200/90 leading-relaxed">
              I design and develop modern websites, web applications,
              AI-powered solutions and data-driven digital products.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton href="#projects" variant="primary">
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>

              <MagneticButton href="#contact" variant="secondary">
                <Sparkles className="h-4 w-4 text-pink-400" />
                <span>Start a Project</span>
              </MagneticButton>
            </div>

            {/* Multi-Color Capability Micro-Cards */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {capabilityBadges.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2.5 rounded-xl border ${item.border} bg-gradient-to-br ${item.bg} px-3 py-2.5 backdrop-blur-md transition-transform hover:-translate-y-0.5`}
                >
                  <item.icon
                    className={`h-4 w-4 ${item.iconColor} shrink-0`}
                  />
                  <div>
                    <div className="text-xs font-bold text-white">
                      {item.label}
                    </div>
                    <div className="text-[10px] font-mono text-slate-300">
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =================================================== */}
          {/* RIGHT SIDE: 3D FLOATING DEVELOPER WORKSTATION       */}
          {/* =================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-6 relative"
          >
            <HeroWorkstationCanvas
              brandName={brand.name}
              isMobile={isMobile}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
