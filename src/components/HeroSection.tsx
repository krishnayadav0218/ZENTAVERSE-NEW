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
  Smartphone,
  Terminal,
  Calendar,
  MessageCircle,
  FileText,
} from "lucide-react";
import { BrandConfig } from "@/data/siteData";
import MagneticButton from "@/components/ui/MagneticButton";

const HeroWorkstationCanvas = dynamic(
  () => import("@/components/three/HeroWorkstationCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[440px] sm:h-[520px] lg:h-[620px] w-full items-center justify-center rounded-3xl border border-white/10 bg-slate-950/40 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="h-10 w-10 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
          <p className="font-mono text-xs tracking-widest text-slate-400 uppercase">
            Initializing 3D Interactive Workstation...
          </p>
        </div>
      </div>
    ),
  }
);

interface HeroSectionProps {
  brand: BrandConfig;
  onOpenBooking?: () => void;
  onOpenDeck?: () => void;
}

const capabilityBadges = [
  {
    icon: Code2,
    label: "Web & Apps",
    sub: "Next.js & React",
    border: "border-blue-500/20",
    bg: "from-blue-500/10 to-transparent",
    iconColor: "text-blue-400",
  },
  {
    icon: Cpu,
    label: "AI & Chatbots",
    sub: "Python & LLMs",
    border: "border-indigo-500/20",
    bg: "from-indigo-500/10 to-transparent",
    iconColor: "text-indigo-400",
  },
  {
    icon: Smartphone,
    label: "Mobile Apps",
    sub: "Flutter & iOS/Android",
    border: "border-sky-500/20",
    bg: "from-sky-500/10 to-transparent",
    iconColor: "text-sky-400",
  },
  {
    icon: Database,
    label: "Cloud & DevOps",
    sub: "AWS & Docker",
    border: "border-emerald-500/20",
    bg: "from-emerald-500/10 to-transparent",
    iconColor: "text-emerald-400",
  },
];

export default function HeroSection({
  brand,
  onOpenBooking,
  onOpenDeck,
}: HeroSectionProps) {
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
            {/* Modern Enterprise Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-xl shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-300 uppercase">
                INNOVATE • BUILD • SCALE
              </span>
            </div>

            {/* Brand Tagline Pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Terminal className="h-3.5 w-3.5 text-blue-400" />
              <span>{brand.subTagline || "Smart technology. Real solutions. Lasting impact."}</span>
            </div>

            {/* Large Headline with Refined Gradient Highlight */}
            <h1 className="font-display text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Full-Stack{" "}
              <span className="text-gradient-cyber">Technology Partner</span>,{" "}
              from{" "}
              <span className="text-gradient-aurora">Idea to Scale</span>
            </h1>

            {/* Short Description */}
            <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed">
              We build innovative digital solutions that help businesses grow,
              operate smarter, and stay ahead in a digital world. From scalable web
              platforms to AI copilots and enterprise cloud architecture.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <MagneticButton href="#contact" variant="primary">
                <span>Get a Free Quote</span>
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>

              {onOpenBooking && (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 rounded-2xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-xs font-mono font-medium text-blue-200 hover:bg-blue-500/20 transition-all"
                >
                  <Calendar className="h-4 w-4 text-blue-300" />
                  <span>Book Free Strategy Call</span>
                </button>
              )}

              {onOpenDeck && (
                <button
                  type="button"
                  onClick={onOpenDeck}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-xs font-mono text-slate-300 hover:border-slate-600 hover:text-white transition-all"
                >
                  <FileText className="h-4 w-4 text-slate-400" />
                  <span>Company Profile</span>
                </button>
              )}

              <a
                href="https://wa.me/917992153750"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-xs font-mono text-emerald-300 hover:bg-emerald-500/20 transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Capability Micro-Cards */}
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
                    <div className="text-[10px] font-mono text-slate-400">
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
