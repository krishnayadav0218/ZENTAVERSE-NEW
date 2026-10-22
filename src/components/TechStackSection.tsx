"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Sparkles, Network, Cpu, Layers } from "lucide-react";
import { techStackData, TechNode } from "@/data/siteData";

const TechCloudCanvas = dynamic(
  () => import("@/components/three/TechCloudCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[440px] sm:h-[520px] w-full items-center justify-center rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
          <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
            Generating 3D Technology Constellation...
          </span>
        </div>
      </div>
    ),
  }
);

const categories = [
  "All",
  "Frontend",
  "Backend & DB",
  "AI & Data",
  "Cloud & DevOps",
] as const;

export default function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedNode, setSelectedNode] = useState<TechNode>(techStackData[0]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section id="skills" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-blue-300 mb-4">
              <Network className="h-3.5 w-3.5" />
              <span>TECH STACK // 3D NEURAL CONSTELLATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Interactive{" "}
              <span className="text-gradient-cyber">3D Technology Wall</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              21 interconnected technologies powering modern web applications,
              distributed backends, AI/ML pipelines, and executive analytics.
            </p>
          </motion.div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-slate-950/70 p-1.5 backdrop-blur-xl self-start">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-mono transition-all ${
                    active
                      ? "bg-blue-600 text-white font-bold shadow-sm"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Tech Cloud + Selected Node Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8">
            <TechCloudCanvas
              nodes={techStackData}
              activeCategory={activeCategory}
              selectedNode={selectedNode}
              onSelectNode={setSelectedNode}
              isMobile={isMobile}
            />
          </div>

          {/* Right Side: Node Inspector + Quick Matrix */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-slate-700/60 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-3.5 w-3.5 rounded-full"
                    style={{
                      backgroundColor: selectedNode.color,
                      boxShadow: `0 0 10px ${selectedNode.color}`,
                    }}
                  />
                  <span className="font-mono text-xs uppercase tracking-widest text-blue-300">
                    {selectedNode.category}
                  </span>
                </div>
                <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
                  {selectedNode.level}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  {selectedNode.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">
                  Connected Ecosystem Nodes
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedNode.connections.map((connId) => {
                    const target = techStackData.find((t) => t.id === connId);
                    if (!target) return null;
                    return (
                      <button
                        key={connId}
                        type="button"
                        onClick={() => setSelectedNode(target)}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.04] px-2.5 py-1 font-mono text-xs text-blue-200 hover:border-blue-400/60 transition-colors"
                      >
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: target.color }}
                        />
                        <span>{target.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Complete 21-Technology Wall Pills */}
            <div className="glass-panel rounded-3xl p-6 space-y-3 border border-slate-700/60">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                  <Layers className="h-3.5 w-3.5 text-blue-400" />
                  All 21 Stack Nodes
                </span>
                <span className="font-mono text-[11px] text-blue-300">
                  Click to Focus in 3D
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {techStackData.map((item) => {
                  const isSelected = selectedNode.id === item.id;
                  const isCategoryMatch =
                    activeCategory === "All" ||
                    item.category === activeCategory;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedNode(item)}
                      className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 font-mono text-xs transition-all ${
                        isSelected
                          ? "border-blue-400 bg-blue-500/20 text-white shadow-sm scale-105"
                          : isCategoryMatch
                          ? "border-white/10 bg-slate-900/70 text-slate-300 hover:border-white/30 hover:text-white"
                          : "border-white/5 bg-slate-950/30 text-slate-600 opacity-45"
                      }`}
                    >
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
