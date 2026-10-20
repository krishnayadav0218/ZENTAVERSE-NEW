"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  BrainCircuit,
  Workflow,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Cpu,
} from "lucide-react";
import { aboutPillars, BrandConfig } from "@/data/siteData";
import TiltCard from "@/components/ui/TiltCard";

interface AboutSectionProps {
  brand: BrandConfig;
}

const pillarIcons = {
  fullstack: Code2,
  analytics: BarChart3,
  ai: BrainCircuit,
  automation: Workflow,
  problemsolving: Lightbulb,
};

export default function AboutSection({ brand }: AboutSectionProps) {
  const [activePillar, setActivePillar] = useState(aboutPillars[0]);

  return (
    <section id="about" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>ABOUT // ARCHITECTURAL PROFILE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Turning Technology Into{" "}
            <span className="text-gradient-cyber">Business Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90 leading-relaxed">
            I partner with ambitious founders, executives, and growing teams to
            architect full-stack applications, autonomous AI workflows, and
            decision-grade analytics systems that scale reliably from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* ======================================================= */}
          {/* LEFT: 3D HOLOGRAPHIC PROFILE CARD                       */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5"
          >
            <TiltCard glowColor="rgba(0, 240, 255, 0.28)" intensity={12}>
              <div className="relative p-6 sm:p-8 flex flex-col justify-between h-full overflow-hidden">
                {/* Animated holographic scanline */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-cyan-400/10 via-purple-500/5 to-transparent animate-scanline"
                  aria-hidden="true"
                />

                {/* Top Hologram Status Bar */}
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="font-mono text-xs text-emerald-300 tracking-wider">
                        VERIFIED ARCHITECT ID
                      </span>
                    </div>
                    <span className="font-mono text-xs text-cyan-300/80">
                      SYS // 3D-HOLO
                    </span>
                  </div>

                  {/* 3D Stylized Holographic Avatar Emblem */}
                  <div className="my-6 relative mx-auto flex h-44 w-44 items-center justify-center rounded-3xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/15 via-slate-900 to-purple-600/20 shadow-neon-cyan">
                    {/* Rotating outer HUD ring */}
                    <div className="absolute inset-2 rounded-2xl border border-dashed border-cyan-400/40 animate-spin-slow" />
                    <div className="absolute inset-5 rounded-full border border-purple-400/30" />

                    {/* Center Holographic Core */}
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[1.5px] shadow-lg">
                        <div className="flex h-full w-full items-center justify-center rounded-[14px] bg-slate-950">
                          <Cpu className="h-8 w-8 text-cyan-300" />
                        </div>
                      </div>
                      <span className="mt-2.5 font-mono text-[11px] font-semibold tracking-widest text-cyan-300 uppercase">
                        {brand.shortName}.CORE
                      </span>
                    </div>
                  </div>

                  {/* Identity & Role */}
                  <div className="text-center space-y-1.5">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {brand.name}
                    </h3>
                    <p className="text-xs font-mono text-cyan-300">
                      {brand.role}
                    </p>
                    <p className="text-xs text-slate-400 pt-1">
                      {brand.tagline}
                    </p>
                  </div>

                  {/* Holographic Telemetry Matrix */}
                  <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">
                        Architecture
                      </div>
                      <div className="text-xs font-semibold text-white mt-0.5">
                        Full-Stack & Cloud
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">
                        Intelligence
                      </div>
                      <div className="text-xs font-semibold text-purple-300 mt-0.5">
                        AI / ML & RAG Agents
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">
                        Data Systems
                      </div>
                      <div className="text-xs font-semibold text-cyan-300 mt-0.5">
                        SQL, BI & Telemetry
                      </div>
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase text-slate-400">
                        Availability
                      </div>
                      <div className="text-xs font-semibold text-emerald-300 mt-0.5">
                        Open for Projects
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Verified Footer */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-300">
                    <ShieldCheck className="h-4 w-4" />
                    100% Direct Execution
                  </span>
                  <span>IDEA → SCALE</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ======================================================= */}
          {/* RIGHT: PROFESSIONAL INTRO & 5 INTERACTIVE CORE PILLARS  */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Narrative Intro Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Bridging Complex Engineering & Real-World Business Impact
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Modern businesses need more than static templates—they need
                intelligent, connected digital ecosystems. Whether launching a
                high-converting SaaS platform, automating repetitive workflows
                with custom AI agents, or unifying company data into executive
                dashboards, I engineer solutions designed for speed, clarity,
                and long-term scalability.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Full-Stack Development",
                  "Data Analytics",
                  "Artificial Intelligence",
                  "Automation",
                  "Problem Solving",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/25 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* 5 Interactive Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {aboutPillars.map((pillar) => {
                const Icon =
                  pillarIcons[pillar.id as keyof typeof pillarIcons] || Code2;
                const isSelected = activePillar.id === pillar.id;

                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActivePillar(pillar)}
                    className={`text-left rounded-2xl p-4 transition-all duration-300 border backdrop-blur-xl ${
                      isSelected
                        ? "bg-slate-900/90 border-cyan-400/60 shadow-neon-cyan"
                        : "bg-slate-950/55 border-white/10 hover:border-white/25"
                    } ${pillar.id === "problemsolving" ? "sm:col-span-2" : ""}`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15"
                        style={{
                          backgroundColor: `${pillar.accent}20`,
                          color: pillar.accent,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-display text-sm sm:text-base font-bold text-white">
                            {pillar.title}
                          </h4>
                          <span
                            className="font-mono text-[10px] px-2 py-0.5 rounded-full border border-white/10"
                            style={{ color: pillar.accent }}
                          >
                            {pillar.metrics}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
