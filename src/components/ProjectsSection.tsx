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
  TrendingUp,
  AlertCircle,
  ShieldCheck,
  MessageCircle,
  Calendar,
  Layers,
  Zap,
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/siteData";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

const categories = ["All", "AI & ML", "Full-Stack", "Data & BI"] as const;

const TECH_PILL_COLORS = [
  { border: "border-blue-500/25", text: "text-blue-300", dot: "#3B82F6" },
  { border: "border-indigo-500/25", text: "text-indigo-300", dot: "#6366F1" },
  { border: "border-sky-500/25", text: "text-sky-300", dot: "#0EA5E9" },
  { border: "border-emerald-500/25", text: "text-emerald-300", dot: "#10B981" },
  { border: "border-slate-700", text: "text-slate-300", dot: "#94A3B8" },
  { border: "border-blue-500/25", text: "text-sky-300", dot: "#38BDF8" },
];

// Rich Case Study Details for Each Project
interface CaseStudyDetail {
  industry: string;
  duration: string;
  challenge: string;
  solution: string;
  specs: { label: string; value: string }[];
  roiMetrics: { value: string; label: string; detail: string }[];
  beforeAfter: { before: string; after: string };
}

const CASE_STUDIES: Record<string, CaseStudyDetail> = {
  "ai-self-learning-game": {
    industry: "Robotics Simulation & Gaming AI",
    duration: "5 Weeks Sprint",
    challenge:
      "Client required an autonomous agent capable of high-speed spatial navigation without pre-programmed heuristic paths, while needing real-time visual telemetries at 60+ FPS in the browser.",
    solution:
      "Zyntaverse engineered a distributed Deep Q-Network (DQN) with real-time WebSocket tensor streaming. We decoupled Python PyTorch model inference from the Three.js WebGL rendering thread to guarantee smooth 120 FPS playback.",
    specs: [
      { label: "Model Architecture", value: "Double DQN + Prioritized Experience Replay" },
      { label: "Inference Latency", value: "< 4.2ms per action step" },
      { label: "Streaming Bridge", value: "Binary WebSockets (Protobuf)" },
      { label: "Client Rendering", value: "Three.js / React Three Fiber GPU Shaders" },
    ],
    roiMetrics: [
      { value: "98.4%", label: "Convergence Rate", detail: "Converged in 420 epochs vs 2,000+ benchmark" },
      { value: "120 FPS", label: "Render Framerate", detail: "Zero stuttering even on mobile GPUs" },
      { value: "+340%", label: "User Engagement", detail: "Interactive arena trial time skyrocketed" },
    ],
    beforeAfter: {
      before: "Heuristic bot failing 42% of complex obstacle courses with rigid behaviors.",
      after: "Self-evolving neural network adapting dynamically to unseen terrains with 98.4% success.",
    },
  },
  "enterprise-analytics-bi": {
    industry: "Fintech & Logistics Operations",
    duration: "8 Weeks Sprint",
    challenge:
      "Legacy SQL warehouse experienced 14-second query lag on 50M+ rows, locking analytical reports for 300+ executive stakeholders during morning peak hours.",
    solution:
      "Architected an event-driven telemetry pipeline combining Apache Kafka, ClickHouse columnar storage, and an ultra-lightweight Next.js dashboard with server-sent events for sub-second visual updates.",
    specs: [
      { label: "Data Pipeline", value: "Kafka Event Stream + ClickHouse Columnar DB" },
      { label: "Query Time", value: "Reduced from 14.2s to 180ms" },
      { label: "Concurrency", value: "10,000+ simultaneous executive queries" },
      { label: "Infrastructure", value: "Dockerized Kubernetes on AWS Graviton" },
    ],
    roiMetrics: [
      { value: "98.7%", label: "Query Latency Cut", detail: "14.2s dropped down to sub-200ms" },
      { value: "72%", label: "Cloud Cost Saved", detail: "Columnar compression slashed disk and RAM footprint" },
      { value: "100%", label: "Real-Time Sync", detail: "Live financial telemetry refreshed every second" },
    ],
    beforeAfter: {
      before: "14-second dashboard freeze and expensive monthly AWS compute spikes.",
      after: "Sub-second streaming analytics with automatic anomaly detection and zero lag.",
    },
  },
  "cloud-erp-system": {
    industry: "Enterprise Manufacturing & Supply Chain",
    duration: "10 Weeks Sprint",
    challenge:
      "Client suffered from siloed manual inventory spreadsheets, delayed invoicing cycles, and zero unified access control across 4 regional warehouses.",
    solution:
      "Delivered a bespoke multi-tenant ERP platform on Next.js 14 and Node.js with strict Role-Based Access Control (RBAC), automated recurring GST invoicing, and live warehouse inventory synchronization.",
    specs: [
      { label: "Architecture", value: "Microservices with Redis Event Pub/Sub" },
      { label: "Database", value: "PostgreSQL with Citus Distributed Sharding" },
      { label: "Security", value: "Role-Based Access Control (RBAC) + MFA" },
      { label: "Integration", value: "Razorpay / Stripe + WhatsApp Webhooks" },
    ],
    roiMetrics: [
      { value: "100%", label: "Audit Accuracy", detail: "Zero discrepancy in physical vs digital inventory" },
      { value: "-45%", label: "Billing Cycle Time", detail: "Invoices generated & reconciled automatically" },
      { value: "99.99%", label: "System Availability", detail: "Zero unplanned downtime across peak shifts" },
    ],
    beforeAfter: {
      before: "3-day delayed manual spreadsheet inventory counts and invoicing friction.",
      after: "Live single-pane ERP system with automated billing and audit trails.",
    },
  },
};

function HolographicScreenMockup({ project }: { project: ProjectItem }) {
  return (
    <div className="relative w-full h-48 rounded-xl bg-slate-950/90 border border-white/10 p-3 overflow-hidden flex flex-col justify-between">
      {/* Top Browser Bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 relative z-10">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-rose-500/80" />
          <span className="h-2 w-2 rounded-full bg-amber-500/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
        </div>
        <div className="rounded-md bg-white/[0.05] px-2.5 py-0.5 font-mono text-[10px] text-slate-300 border border-white/10 truncate max-w-[170px]">
          https://{project.id}.zyntaverse.com
        </div>
        <span
          className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `${project.accentColor}20`,
            color: project.accentColor,
            border: `1px solid ${project.accentColor}40`,
          }}
        >
          LIVE CASE
        </span>
      </div>

      {/* Procedural Graphics */}
      <div className="relative flex-1 my-2 flex items-center justify-center overflow-hidden rounded-lg bg-slate-900/80 border border-white/10 p-3">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            background: `radial-gradient(circle at 30% 40%, ${project.accentColor}30, rgba(99,102,241,0.15) 50%, transparent 80%)`,
          }}
        />

        {project.visualType === "ai-game" && (
          <div className="relative z-10 w-full flex items-center justify-between gap-3">
            <div className="space-y-1.5 flex-1">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-blue-300">
                <Cpu className="h-3.5 w-3.5 text-blue-400" />
                <span>DQN POLICY NETWORK</span>
              </div>
              <div className="grid grid-cols-4 gap-1">
                {Array.from({ length: 12 }).map((_, idx) => {
                  const colors = [
                    "bg-blue-500/40 border-blue-500/60",
                    "bg-indigo-500/40 border-indigo-500/60",
                    "bg-sky-500/40 border-sky-500/60",
                    "bg-emerald-500/40 border-emerald-500/60",
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
              <div className="text-[10px] font-mono text-blue-300">
                Epoch #420 • Reward +98.4%
              </div>
            </div>
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-500/30 bg-slate-900 shadow-sm">
              <Cpu className="h-8 w-8 text-blue-400 animate-spin-slow" />
            </div>
          </div>
        )}

        {project.visualType === "analytics-bi" && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-indigo-300">
              <span className="flex items-center gap-1">
                <BarChart2 className="h-3.5 w-3.5 text-blue-400" />
                REAL-TIME TELEMETRY
              </span>
              <span className="text-emerald-400 font-bold">+24.8% YoY</span>
            </div>
            <div className="flex items-end gap-1.5 h-16 pt-2 px-1">
              {[
                { h: 38, c: "from-blue-600 to-blue-400" },
                { h: 62, c: "from-blue-500 to-indigo-500" },
                { h: 48, c: "from-indigo-600 to-indigo-400" },
                { h: 80, c: "from-sky-600 to-sky-400" },
                { h: 68, c: "from-blue-500 to-sky-400" },
                { h: 92, c: "from-emerald-500 to-teal-400" },
                { h: 75, c: "from-indigo-500 to-blue-400" },
                { h: 100, c: "from-blue-600 to-indigo-500" },
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
                border: "border-blue-500/30",
                text: "text-blue-300",
                bar: "bg-blue-500/60",
              },
              {
                title: "Auto Billing",
                border: "border-indigo-500/30",
                text: "text-indigo-300",
                bar: "bg-indigo-500/60",
              },
              {
                title: "RBAC Core",
                border: "border-emerald-500/30",
                text: "text-emerald-300",
                bar: "bg-emerald-500/60",
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
                <div className="h-1.5 w-2/3 rounded bg-blue-400/40" />
                <div className="text-[9px] font-mono text-emerald-400">
                  99.9% Sync #{idx + 1}
                </div>
              </div>
            ))}
          </div>
        )}

        {project.visualType === "ai-chatbot" && (
          <div className="relative z-10 w-full space-y-2">
            <div className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-slate-950/85 px-2.5 py-1.5 text-[10px] text-slate-200">
              <Bot className="h-4 w-4 text-blue-400 shrink-0" />
              <span className="truncate">
                Vector pgvector search • 14,200 chunks...
              </span>
            </div>
            <div className="rounded-lg border border-indigo-500/30 bg-indigo-950/30 px-2.5 py-1.5 text-[10px] font-mono text-indigo-200 flex items-center justify-between">
              <span>Verified Citations • Zero Hallucination</span>
              <span className="text-blue-300 font-bold">0.75s TTFT</span>
            </div>
          </div>
        )}

        {project.visualType === "ecommerce-3d" && (
          <div className="relative z-10 w-full flex items-center justify-between gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10">
              <ShoppingBag className="h-7 w-7 text-emerald-300" />
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="font-mono text-[10px] text-emerald-300">
                360° WEBGL CONFIGURATOR
              </div>
              <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-emerald-500 to-teal-400" />
              </div>
              <div className="flex justify-between text-[9px] font-mono text-slate-300">
                <span>WebXR Live AR</span>
                <span className="text-emerald-300 font-bold">+44% Conv.</span>
              </div>
            </div>
          </div>
        )}

        {project.visualType === "portfolio-3d" && (
          <div className="relative z-10 w-full flex items-center justify-between gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10">
              <Globe className="h-7 w-7 text-blue-400 animate-pulse" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="font-mono text-[10px] text-blue-300 font-bold">
                SPATIAL R3F EXPERIENCE
              </div>
              <p className="text-[10px] text-slate-300">
                Interactive 3D Workstation + Clean UI
              </p>
              <span className="inline-block font-mono text-[9px] text-slate-400">
                60 FPS • Desktop & Mobile
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Metric Strip */}
      <div className="flex items-center justify-between gap-2 text-[10px] font-mono relative z-10">
        {project.metrics.map((m) => (
          <span
            key={m}
            className="truncate rounded bg-white/[0.04] border border-white/10 px-2 py-0.5 text-slate-300"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

interface ProjectsSectionProps {
  onOpenBooking?: () => void;
}

export default function ProjectsSection({ onOpenBooking }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");
  const [previewProject, setPreviewProject] = useState<ProjectItem | null>(null);
  const [activeTab, setActiveTab] = useState<
    "overview" | "challenge" | "architecture" | "roi"
  >("overview");

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const selectedCaseStudy = previewProject
    ? CASE_STUDIES[previewProject.id] || {
        industry: "Enterprise Software",
        duration: "6 Weeks",
        challenge: "Client required a modern scalable solution with high security and rapid deployment.",
        solution: "Engineered a custom cloud-native architecture utilizing Next.js, Node.js and AWS infrastructure.",
        specs: [
          { label: "Architecture", value: "Microservices & Serverless Edge" },
          { label: "Security", value: "End-to-End Encryption & RBAC" },
          { label: "Database", value: "High-Availability Multi-Region" },
          { label: "Uptime", value: "99.9% SLA Guarantee" },
        ],
        roiMetrics: [
          { value: "3x", label: "Speed Increase", detail: "Performance improved across all modules" },
          { value: "99.9%", label: "Uptime SLA", detail: "Zero unplanned outages post-launch" },
          { value: "+65%", label: "Productivity", detail: "Automated manual operational tasks" },
        ],
        beforeAfter: {
          before: "Legacy manual workflows prone to delays and errors.",
          after: "Streamlined automated system driving tangible business growth.",
        },
      }
    : null;

  const handleOpenProject = (project: ProjectItem) => {
    setPreviewProject(project);
    setActiveTab("overview");
  };

  const getWhatsAppMessage = (project: ProjectItem) => {
    const text = `Hello Zyntaverse Technologies! I explored your case study for "${project.title}" (${project.category}) on your website. I have a similar project requirement and would like to discuss technical architecture and pricing.`;
    return `https://wa.me/917992153750?text=${encodeURIComponent(text)}`;
  };

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
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-blue-300 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>CASE STUDIES // PROVEN ROI & ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Engineered for{" "}
              <span className="text-gradient-cyber">Real-World Scale</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300">
              Explore in-depth case studies with measurable business ROI, system architecture blueprints,
              and live performance telemetries engineered by Zyntaverse Technologies.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-slate-950/75 p-1.5 backdrop-blur-xl self-start">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                    active
                      ? "bg-blue-600 text-white font-bold shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project, index) => {
            const cs = CASE_STUDIES[project.id];
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <TiltCard glowColor={`${project.accentColor}25`} intensity={10}>
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Floating Screen Mockup */}
                      <HolographicScreenMockup project={project} />

                      {/* Category & Industry */}
                      <div className="mt-5 flex items-center justify-between gap-2">
                        <span
                          className="font-mono text-[11px] font-bold uppercase tracking-wider"
                          style={{ color: project.accentColor }}
                        >
                          {project.category}
                        </span>
                        <span className="font-mono text-[10px] text-slate-400">
                          {cs ? cs.duration : "Full Sprint"}
                        </span>
                      </div>

                      <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs font-mono text-indigo-300">
                        {project.tagline}
                      </p>
                      <p className="mt-2.5 text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-3">
                        {project.technologies.map((t, idx) => {
                          const pillStyle =
                            TECH_PILL_COLORS[idx % TECH_PILL_COLORS.length];
                          return (
                            <span
                              key={t}
                              className={`inline-flex items-center gap-1 rounded-md border ${pillStyle.border} bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] ${pillStyle.text}`}
                            >
                              <span
                                className="h-1.5 w-1.5 rounded-full"
                                style={{ backgroundColor: pillStyle.dot }}
                              />
                              <span>{t}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => handleOpenProject(project)}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3.5 py-2 font-mono text-xs font-semibold text-blue-200 hover:bg-blue-500/20 transition-all"
                      >
                        <Zap className="h-3.5 w-3.5" />
                        <span>Case Study &amp; ROI</span>
                      </button>

                      <div className="flex items-center gap-1.5">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-slate-300 hover:border-blue-400/60 hover:text-white transition-all"
                          title="View GitHub Source"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study & Live ROI Inspection Modal */}
      <AnimatePresence>
        {previewProject && selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-3 sm:p-5 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel p-5 sm:p-8 border border-slate-700 shadow-2xl my-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setPreviewProject(null)}
                className="absolute right-4 sm:right-6 top-4 sm:top-6 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-20"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-2 mb-2 pr-12">
                <span
                  className="rounded-lg px-2.5 py-0.5 font-mono text-[11px] font-bold"
                  style={{
                    backgroundColor: `${previewProject.accentColor}20`,
                    color: previewProject.accentColor,
                    border: `1px solid ${previewProject.accentColor}40`,
                  }}
                >
                  {previewProject.category}
                </span>
                <span className="rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 font-mono text-[11px] text-indigo-300">
                  {selectedCaseStudy.industry}
                </span>
                <span className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 font-mono text-[11px] text-blue-300">
                  {selectedCaseStudy.duration}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {previewProject.title}
              </h3>
              <p className="mt-1 font-mono text-xs sm:text-sm text-blue-300">
                {previewProject.tagline}
              </p>

              {/* Case Study Tab Navigation */}
              <div className="mt-6 flex flex-wrap gap-2 border-b border-white/10 pb-3">
                {[
                  { id: "overview", label: "Overview & Visuals" },
                  { id: "challenge", label: "Problem & Solution" },
                  { id: "architecture", label: "System Architecture" },
                  { id: "roi", label: "Business ROI & Metrics" },
                ].map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`rounded-xl px-3.5 py-1.5 text-xs font-mono transition-all ${
                        active
                          ? "bg-blue-600 text-white font-medium shadow-sm"
                          : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: Overview */}
              {activeTab === "overview" && (
                <div className="mt-5 space-y-4">
                  <HolographicScreenMockup project={previewProject} />

                  <p className="text-sm text-slate-200 leading-relaxed">
                    {previewProject.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-blue-300">
                      Core Stack & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {previewProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 font-mono text-xs text-blue-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Challenge vs Solution */}
              {activeTab === "challenge" && (
                <div className="mt-5 space-y-4">
                  {/* Before / Challenge */}
                  <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider font-bold mb-2">
                      <AlertCircle className="h-4 w-4" />
                      <span>The Business Challenge & Bottleneck</span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {selectedCaseStudy.challenge}
                    </p>
                    <div className="mt-3 pt-3 border-t border-rose-500/20 text-xs font-mono text-rose-300">
                      <span className="font-bold">Prior State: </span>
                      {selectedCaseStudy.beforeAfter.before}
                    </div>
                  </div>

                  {/* After / Solution */}
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-bold mb-2">
                      <ShieldCheck className="h-4 w-4" />
                      <span>The Zyntaverse Engineering Solution</span>
                    </div>
                    <p className="text-sm text-slate-200 leading-relaxed">
                      {selectedCaseStudy.solution}
                    </p>
                    <div className="mt-3 pt-3 border-t border-emerald-500/20 text-xs font-mono text-emerald-300">
                      <span className="font-bold">Outcome Delivered: </span>
                      {selectedCaseStudy.beforeAfter.after}
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: System Architecture */}
              {activeTab === "architecture" && (
                <div className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCaseStudy.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-xl border border-white/10 bg-slate-900/70 p-3.5 space-y-1"
                      >
                        <div className="font-mono text-[10px] text-blue-300 uppercase tracking-wider">
                          {spec.label}
                        </div>
                        <div className="font-mono text-xs text-white font-semibold">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-indigo-300">
                      Architecture Blueprint Highlights
                    </h4>
                    {previewProject.architectureHighlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-slate-900/60 p-3 text-xs text-slate-200"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5 text-blue-400"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Measurable ROI & Metrics */}
              {activeTab === "roi" && (
                <div className="mt-5 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {selectedCaseStudy.roiMetrics.map((roi) => (
                      <div
                        key={roi.label}
                        className="rounded-2xl border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-transparent p-4 text-center space-y-1"
                      >
                        <div className="font-display text-2xl sm:text-3xl font-extrabold text-blue-300">
                          {roi.value}
                        </div>
                        <div className="font-mono text-xs font-bold text-white uppercase">
                          {roi.label}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">
                          {roi.detail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-indigo-500/25 bg-indigo-950/20 p-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-indigo-300 font-bold uppercase mb-1">
                      <TrendingUp className="h-4 w-4 text-blue-400" />
                      <span>Commercial Impact Summary</span>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      By deploying this architecture, the client transitioned from reactive manual workflows to an
                      autonomous, high-throughput digital pipeline—achieving full ROI recovery in under 90 days.
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons & WhatsApp CTA */}
              <div className="mt-7 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={getWhatsAppMessage(previewProject)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-95 transition-all"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Discuss on WhatsApp</span>
                  </a>

                  {onOpenBooking && (
                    <button
                      type="button"
                      onClick={() => {
                        setPreviewProject(null);
                        onOpenBooking();
                      }}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:opacity-95 transition-all"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Free Strategy Call</span>
                    </button>
                  )}

                  <a
                    href={previewProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-white hover:border-blue-400/50"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setPreviewProject(null)}
                  className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
