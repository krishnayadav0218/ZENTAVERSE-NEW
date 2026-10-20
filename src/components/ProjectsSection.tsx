"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Cpu,
  BarChart2,
  Bot,
  ShoppingBag,
  Globe,
  CheckCircle2,
  X,
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/siteData";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

const categories = ["All", "AI & ML", "Full-Stack", "Data & BI"] as const;

const TECH_PILL_COLORS = [
  { border: "border-cyan-400/35", text: "text-cyan-300", dot: "#00F0FF" },
  { border: "border-purple-400/35", text: "text-purple-300", dot: "#A855F7" },
  { border: "border-pink-400/35", text: "text-pink-300", dot: "#EC4899" },
  { border: "border-emerald-400/35", text: "text-emerald-300", dot: "#10B981" },
  { border: "border-amber-400/35", text: "text-amber-300", dot: "#F59E0B" },
  { border: "border-sky-400/35", text: "text-sky-300", dot: "#38BDF8" },
];

function HolographicScreenMockup({ project }: { project: ProjectItem }) {
  return (
    <div className="relative h-52 w-full overflow-hidden rounded-xl border border-white/15 bg-slate-950 p-3 flex flex-col justify-between group-hover:border-cyan-400/50 transition-colors">
      {/* Top Holographic Browser / Monitor Bezel */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="rounded-md bg-white/[0.05] px-2.5 py-0.5 font-mono text-[10px] text-slate-300 border border-white/10 truncate max-w-[170px]">
          https://{project.id}.nexus.app
        </div>
        <span
          className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `${project.accentColor}25`,
            color: project.accentColor,
            border: `1px solid ${project.accentColor}55`,
          }}
        >
          3D LIVE
        </span>
      </div>

      {/* Dynamic Procedural Multi-Color Hologram Mockup Graphics */}
      <div className="relative flex-1 my-2 flex items-center justify-center overflow-hidden rounded-lg bg-slate-900/80 border border-white/10 p-3">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${project.accentColor}, rgba(236,72,153,0.35) 50%, transparent 80%)`,
          }}
        />

        {project.visualType === "ai-game" && (
          <div className="relative z-10 w-full flex items-center justify-between gap-3">
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-300">
                <Cpu className="h-3.5 w-3.5 text-pink-400" />
                <span>DQN POLICY NETWORK</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 12 }).map((_, idx) => {
                  const colors = [
                    "bg-cyan-400/40 border-cyan-400/60",
                    "bg-purple-400/40 border-purple-400/60",
                    "bg-pink-400/40 border-pink-400/60",
                    "bg-emerald-400/40 border-emerald-400/60",
                  ];
                  return (
                    <div
                      key={idx}
                      className={`h-3 rounded border animate-pulse ${
                        colors[idx % colors.length]
                      }`}
                      style={{ animationDelay: `${idx * 100}ms` }}
                    />
                  );
                })}
              </div>
              <div className="text-[10px] font-mono text-amber-300">
                Epoch #420 • Reward +98.4%
              </div>
            </div>
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/50 bg-gradient-to-br from-cyan-500/20 to-pink-500/20 shadow-neon-cyan">
              <Cpu className="h-9 w-9 text-cyan-300 animate-spin-slow" />
            </div>
          </div>
        )}

        {project.visualType === "analytics-bi" && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-purple-300">
              <span className="flex items-center gap-1">
                <BarChart2 className="h-3.5 w-3.5 text-cyan-400" />
                REAL-TIME TELEMETRY
              </span>
              <span className="text-emerald-400 font-bold">+24.8% YoY</span>
            </div>
            <div className="flex items-end gap-1.5 h-16 pt-2 px-1">
              {[
                { h: 38, c: "from-cyan-500 to-blue-400" },
                { h: 62, c: "from-blue-500 to-purple-400" },
                { h: 48, c: "from-purple-500 to-pink-400" },
                { h: 80, c: "from-pink-500 to-rose-400" },
                { h: 68, c: "from-amber-500 to-yellow-400" },
                { h: 92, c: "from-emerald-500 to-teal-400" },
                { h: 75, c: "from-cyan-500 to-purple-400" },
                { h: 100, c: "from-pink-500 to-amber-400" },
              ].map((bar, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t bg-gradient-to-t ${bar.c} transition-all duration-500`}
                  style={{ height: `${bar.h}%` }}
                />
              ))}
            </div>
          </div>
        )}

        {project.visualType === "erp-system" && (
          <div className="relative z-10 w-full grid grid-cols-3 gap-2">
            {[
              {
                title: "CRM Pipeline",
                border: "border-cyan-400/40",
                text: "text-cyan-300",
                bar: "bg-cyan-400/60",
              },
              {
                title: "Auto Billing",
                border: "border-pink-400/40",
                text: "text-pink-300",
                bar: "bg-pink-400/60",
              },
              {
                title: "RBAC Core",
                border: "border-amber-400/40",
                text: "text-amber-300",
                bar: "bg-amber-400/60",
              },
            ].map((col, idx) => (
              <div
                key={col.title}
                className={`rounded-lg border ${col.border} bg-slate-950/85 p-2 space-y-1.5`}
              >
                <div className={`font-mono text-[9px] ${col.text} truncate`}>
                  {col.title}
                </div>
                <div className={`h-1.5 w-full rounded ${col.bar}`} />
                <div className="h-1.5 w-2/3 rounded bg-purple-400/50" />
                <div className="text-[9px] font-mono text-emerald-400">
                  99.9% Sync #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        )}

        {project.visualType === "ai-chatbot" && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-slate-950/85 px-2.5 py-1.5 text-[10px] text-slate-200">
              <Bot className="h-4 w-4 text-cyan-400 shrink-0" />
              <span className="truncate">
                Querying 14,200 vector embeddings + SQL...
              </span>
            </div>
            <div className="rounded-lg border border-pink-400/40 bg-gradient-to-r from-pink-500/15 to-purple-500/15 px-2.5 py-1.5 text-[10px] font-mono text-pink-200 flex items-center justify-between">
              <span>Verified Answer • 3 Citations</span>
              <span className="text-amber-300 font-bold">0.8s TTFT</span>
            </div>
          </div>
        )}

        {project.visualType === "ecommerce-3d" && (
          <div className="relative z-10 w-full flex items-center justify-between gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/50 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20">
              <ShoppingBag className="h-8 w-8 text-emerald-300" />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="font-mono text-[10px] text-emerald-300">
                360° WEBGL CONFIGURATOR
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-emerald-400 via-cyan-400 to-pink-500" />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-300">
                <span>Edge Checkout</span>
                <span className="text-amber-300 font-bold">+42% Conv.</span>
              </div>
            </div>
          </div>
        )}

        {project.visualType === "portfolio-3d" && (
          <div className="relative z-10 w-full flex items-center justify-between gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/50 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20">
              <Globe className="h-8 w-8 text-cyan-300 animate-pulse" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="font-mono text-[10px] text-gradient-cyber font-bold">
                SPATIAL R3F EXPERIENCE
              </div>
              <p className="text-[10px] text-slate-200">
                Interactive 3D Workstation + Multi-Color Glass UI
              </p>
              <span className="inline-block font-mono text-[9px] text-amber-300">
                60 FPS • Desktop & Mobile
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Multi-Color Metric Strip */}
      <div className="flex items-center justify-between gap-2 text-[10px] font-mono relative z-10">
        {project.metrics.map((m, i) => {
          const textColors = [
            "text-cyan-300",
            "text-pink-300",
            "text-emerald-300",
          ];
          return (
            <span
              key={m}
              className={`truncate rounded bg-white/[0.04] border border-white/10 px-2 py-0.5 ${
                textColors[i % textColors.length]
              }`}
            >
              {m}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(
    null
  );

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/35 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-pink-300 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>HOLOGRAPHIC SHOWCASE // FEATURED WORK</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Engineered for{" "}
              <span className="text-gradient-cyber">Real-World Scale</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300/90">
              Explore flagship full-stack platforms, self-learning AI systems,
              and enterprise analytics dashboards inside interactive 3D
              holographic screens.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/15 bg-slate-950/75 p-1.5 backdrop-blur-xl self-start">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                    active
                      ? "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-white font-bold shadow-neon-cyan"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <TiltCard glowColor={`${project.accentColor}45`} intensity={12}>
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    {/* Floating Glass/Holographic Screen Mockup */}
                    <HolographicScreenMockup project={project} />

                    {/* Category & Title */}
                    <div className="mt-5 flex items-center justify-between gap-2">
                      <span
                        className="font-mono text-[11px] font-bold uppercase tracking-wider"
                        style={{ color: project.accentColor }}
                      >
                        {project.category}
                      </span>
                      <span className="font-mono text-[11px] text-amber-300/90">
                        SYS // 0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs font-mono text-purple-300">
                      {project.tagline}
                    </p>
                    <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-4">
                    {/* Multi-Color Technologies Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => {
                        const pill =
                          TECH_PILL_COLORS[tIdx % TECH_PILL_COLORS.length];
                        return (
                          <span
                            key={tech}
                            className={`inline-flex items-center gap-1.5 rounded-lg border ${pill.border} bg-slate-950/80 px-2.5 py-1 font-mono text-[11px] ${pill.text}`}
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ backgroundColor: pill.dot }}
                            />
                            {tech}
                          </span>
                        );
                      })}
                    </div>

                    {/* GitHub & Live Demo Action Buttons */}
                    <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:border-cyan-400/60 hover:text-white transition-all"
                      >
                        <Github className="h-3.5 w-3.5 text-cyan-400" />
                        <span>GitHub</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setPreviewProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 px-3.5 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all shadow-neon-cyan"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Live Demo / Architecture Inspection Modal */}
      <AnimatePresence>
        {previewProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl glass-panel p-6 sm:p-8 border border-cyan-400/40 shadow-neon-cyan"
            >
              <button
                type="button"
                onClick={() => setPreviewProject(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <span
                className="inline-block rounded-lg px-2.5 py-1 font-mono text-xs font-bold mb-3"
                style={{
                  backgroundColor: `${previewProject.accentColor}20`,
                  color: previewProject.accentColor,
                }}
              >
                {previewProject.category} // INTERACTIVE ARCHITECTURE PREVIEW
              </span>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {previewProject.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-cyan-300">
                {previewProject.tagline}
              </p>

              <div className="my-5">
                <HolographicScreenMockup project={previewProject} />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {previewProject.description}
              </p>

              <div className="mt-5 space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                  System Architecture Highlights
                </h4>
                {previewProject.architectureHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-slate-900/70 p-3 text-xs text-slate-200"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 mt-0.5"
                      style={{ color: previewProject.accentColor }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <MagneticButton
                    href="#contact"
                    onClick={() => setPreviewProject(null)}
                    variant="primary"
                  >
                    <span>Request Similar Solution</span>
                  </MagneticButton>
                  <a
                    href={previewProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold text-white hover:border-cyan-400/50"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Source</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  className="text-xs font-mono text-slate-400 hover:text-white"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
