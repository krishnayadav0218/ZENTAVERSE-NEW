"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Map,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { workProcessData } from "@/data/siteData";
import TiltCard from "@/components/ui/TiltCard";

const stepIcons = [
  Search,
  Map,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
];

const experienceMilestones = [
  {
    period: "2024 — PRESENT",
    role: "Lead Full-Stack & AI Systems Architect",
    focus:
      "Architecting bespoke Next.js platforms, autonomous LLM/RAG agents, and enterprise BI systems for global clients.",
    accent: "#00F0FF",
  },
  {
    period: "2022 — 2024",
    role: "Full-Stack Developer & Data Solutions Engineer",
    focus:
      "Engineered scalable React/Node.js web apps, SQL/MongoDB backends, and interactive Power BI / Tableau analytics suites.",
    accent: "#8B5CF6",
  },
  {
    period: "2021 — 2022",
    role: "Software Engineering & AI Research Foundation",
    focus:
      "Built machine learning pipelines in Python, REST APIs, and responsive modern web interfaces across 20+ projects.",
    accent: "#EC4899",
  },
];

export default function WorkProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = workProcessData[activeIndex];

  return (
    <section id="experience" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>WORK PROCESS & EXPERIENCE // 01 — 07</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            From Blueprint to{" "}
            <span className="text-gradient-cyber">Global Launch</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90">
            A transparent, battle-tested 7-stage engineering protocol designed
            to eliminate risk and deliver high-ROI digital systems on schedule.
          </p>
        </motion.div>

        {/* ======================================================= */}
        {/* HORIZONTAL FUTURISTIC TIMELINE WITH GLOWING CONNECTIONS */}
        {/* ======================================================= */}
        <div className="relative mb-12">
          {/* Desktop Horizontal Glowing Conduit Track */}
          <div
            className="hidden lg:block absolute top-10 left-[6%] right-[6%] h-0.5 bg-slate-800"
            aria-hidden="true"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_16px_rgba(0,240,255,0.85)]"
              initial={{ width: "0%" }}
              animate={{
                width: `${(activeIndex / (workProcessData.length - 1)) * 100}%`,
              }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
            {workProcessData.map((stage, idx) => {
              const Icon = stepIcons[idx] || Code2;
              const isPassed = idx <= activeIndex;
              const isCurrent = idx === activeIndex;

              return (
                <motion.button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.06 }}
                  className={`group flex flex-col items-center text-center p-3 rounded-2xl transition-all ${
                    isCurrent
                      ? "bg-slate-900/90 border border-cyan-400/50 shadow-neon-cyan"
                      : "hover:bg-white/[0.03] border border-transparent"
                  }`}
                >
                  {/* Glowing Stage Node */}
                  <div
                    className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isCurrent
                        ? "scale-110 border-cyan-300 bg-slate-950 text-cyan-300 shadow-[0_0_25px_rgba(0,240,255,0.55)]"
                        : isPassed
                        ? "border-purple-400/50 bg-slate-900 text-purple-300"
                        : "border-white/10 bg-slate-950/80 text-slate-400 group-hover:border-white/30"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                    <span
                      className={`absolute -top-2 -right-2 rounded-md px-1.5 py-0.5 font-mono text-[10px] font-bold ${
                        isCurrent
                          ? "bg-cyan-400 text-slate-950"
                          : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      {stage.step}
                    </span>
                  </div>

                  <div className="mt-3 font-display text-sm font-bold text-white">
                    {stage.step} {stage.title}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] text-slate-400 line-clamp-1">
                    {stage.duration}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Holographic Inspection Panel */}
        <motion.div
          key={activeStage.step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="glass-panel rounded-3xl p-6 sm:p-9 border border-cyan-400/30 mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-3">
                <span
                  className="rounded-lg px-3 py-1 font-mono text-xs font-bold"
                  style={{
                    backgroundColor: `${activeStage.accent}20`,
                    color: activeStage.accent,
                  }}
                >
                  STAGE {activeStage.step} // {activeStage.title.toUpperCase()}
                </span>
                <span className="font-mono text-xs text-slate-400">
                  Timeline: {activeStage.duration}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {activeStage.subtitle}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeStage.description}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-5 space-y-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-cyan-300">
                  Verified Stage Deliverable
                </div>
                <div className="mt-1.5 flex items-center gap-2 text-sm font-semibold text-white">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{activeStage.deliverable}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="font-mono text-xs text-slate-400">
                  Stage {activeIndex + 1} of {workProcessData.length}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % workProcessData.length)
                  }
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-cyan-300 hover:text-white transition-colors"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience & Track Record Strip */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5">
            <Briefcase className="h-4 w-4 text-purple-400" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-purple-300">
              5+ Years Learning & Professional Engineering Trajectory
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experienceMilestones.map((item, idx) => (
              <TiltCard
                key={item.period}
                glowColor={`${item.accent}35`}
                intensity={8}
              >
                <div className="p-6 space-y-2.5 h-full flex flex-col justify-between">
                  <div>
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: item.accent }}
                    >
                      {item.period}
                    </span>
                    <h4 className="mt-1 font-display text-lg font-bold text-white">
                      {item.role}
                    </h4>
                    <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-slate-400">
                    <span>PHASE 0{3 - idx}</span>
                    <span className="text-emerald-400">VERIFIED</span>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
