"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  Layers,
  Clock,
  CheckCircle2,
  MessageCircle,
  Calendar,
  Cpu,
  RefreshCw,
} from "lucide-react";

interface AIProjectAdvisorProps {
  onOpenBooking?: () => void;
}

interface BlueprintResult {
  title: string;
  tagline: string;
  techStack: { frontend: string; backend: string; aiCloud: string; db: string };
  modules: string[];
  timeline: string;
  budgetInr: string;
  budgetUsd: string;
  architectureTier: string;
}

const presets = [
  {
    label: "AI Customer Copilot & RAG",
    prompt: "Enterprise AI customer support copilot with vector search over PDFs, SQL catalogs and WhatsApp integration.",
  },
  {
    label: "Full-Stack SaaS Platform",
    prompt: "Multi-tenant B2B SaaS web app with role-based access control, Stripe subscriptions, and executive telemetry.",
  },
  {
    label: "Flutter Mobile Delivery App",
    prompt: "Cross-platform mobile app for iOS & Android with live geolocation tracking, Razorpay payments and 60fps UI.",
  },
  {
    label: "3D E-Commerce Storefront",
    prompt: "Headless e-commerce platform with 360-degree interactive 3D WebGL product customizer and edge checkout.",
  },
];

const mockBlueprints: Record<string, BlueprintResult> = {
  default: {
    title: "AI-Augmented Full-Stack Enterprise Platform",
    tagline: "High-throughput cloud architecture with predictive automation",
    techStack: {
      frontend: "Next.js 14 (App Router) • TypeScript • Tailwind CSS",
      backend: "Node.js Microservices • Python FastAPI",
      aiCloud: "OpenAI / Gemini Vector RAG • AWS ECS Docker • CloudFront",
      db: "PostgreSQL (Prisma) • Redis Cache • Pinecone Vector DB",
    },
    modules: [
      "Sub-100ms API Gateway with Zero-Trust JWT Authentication",
      "Retrieval-Augmented Generation (RAG) Neural Pipeline",
      "Real-Time Telemetry Dashboard with WebSockets",
      "Automated Webhook Billing & Invoice Reconciliation",
      "Automated CI/CD Pipeline with 99.9% Uptime Guarantee",
    ],
    timeline: "3 – 6 Weeks (Agile Milestone Sprints)",
    budgetInr: "₹65,000 – ₹1,40,000",
    budgetUsd: "$950 – $2,100",
    architectureTier: "Production Grade • Investor Ready",
  },
  copilot: {
    title: "Enterprise AI RAG Copilot & Support Suite",
    tagline: "Autonomous knowledge retrieval with WhatsApp & Web handoff",
    techStack: {
      frontend: "Next.js 14 • Framer Motion • Tailwind CSS",
      backend: "Python FastAPI • LangChain / LlamaIndex",
      aiCloud: "OpenAI GPT-4o / Gemini 1.5 • Vector Embeddings",
      db: "Pinecone / Qdrant • MongoDB Atlas • Redis",
    },
    modules: [
      "Deterministic PDF/SQL Ingestion & Chunking Engine",
      "Source Citation Grounding with Zero Hallucination Guardrails",
      "Direct WhatsApp Business API Automated Router",
      "Live Human Agent Escalation with Full Chat Context",
      "Executive Analytics on Auto-Resolution & Token Efficiency",
    ],
    timeline: "3 – 5 Weeks",
    budgetInr: "₹50,000 – ₹1,10,000",
    budgetUsd: "$750 – $1,600",
    architectureTier: "AI-Native • Enterprise SLA",
  },
  mobile: {
    title: "Cross-Platform High-Performance Mobile Ecosystem",
    tagline: "Native 60fps Flutter app for iOS & Android with unified backend",
    techStack: {
      frontend: "Flutter 3.x (Dart) • Riverpod • Custom Shaders",
      backend: "Node.js Express • GraphQL Gateway",
      aiCloud: "Firebase Cloud Messaging • AWS S3 CDN",
      db: "PostgreSQL • Redis Live Pub/Sub",
    },
    modules: [
      "Single Codebase 60fps Performance on iOS & Android",
      "Real-Time GPS Geolocation & Route Optimization",
      "Biometric Authentication (FaceID & Fingerprint)",
      "Instant Payment Gateway (Razorpay, Stripe, Apple Pay)",
      "Offline-First Data Sync with Optimistic UI State",
    ],
    timeline: "4 – 7 Weeks",
    budgetInr: "₹75,000 – ₹1,60,000",
    budgetUsd: "$1,100 – $2,400",
    architectureTier: "App Store & Play Store Certified",
  },
};

export default function AIProjectAdvisor({
  onOpenBooking,
}: AIProjectAdvisorProps) {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [blueprint, setBlueprint] = useState<BlueprintResult | null>(null);

  const handleGenerate = (customPrompt?: string) => {
    const text = customPrompt || prompt;
    if (!text.trim()) return;

    setIsGenerating(true);
    setBlueprint(null);

    // Simulate intelligent architectural parsing
    setTimeout(() => {
      const lower = text.toLowerCase();
      let selected = mockBlueprints.default;
      if (lower.includes("copilot") || lower.includes("ai") || lower.includes("bot")) {
        selected = mockBlueprints.copilot;
      } else if (lower.includes("mobile") || lower.includes("flutter") || lower.includes("app")) {
        selected = mockBlueprints.mobile;
      }

      setBlueprint({
        ...selected,
        tagline: `Engineered specifically for: "${text.slice(0, 48)}..."`,
      });
      setIsGenerating(false);
    }, 900);
  };

  const handleSendToWhatsApp = () => {
    if (!blueprint) return;
    const msg = `*New AI Blueprint Inquiry — Zyntaverse Technologies*
*User Vision:* ${prompt || "Custom Project Scope"}
*Recommended Solution:* ${blueprint.title}
*Architecture Tier:* ${blueprint.architectureTier}
*Timeline:* ${blueprint.timeline}
*Estimated Investment:* ${blueprint.budgetInr} (${blueprint.budgetUsd})

_Hi Zyntaverse team, I generated this AI blueprint on your website and would like to review the architecture with your senior engineers._`;

    window.open(
      `https://wa.me/917992153750?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="ai-advisor" className="relative py-20 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl glass-panel p-6 sm:p-10 border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Subtle Ambient Radial Glow */}
          <div className="pointer-events-none absolute -top-32 -right-32 h-72 w-72 rounded-full bg-gradient-to-br from-blue-600/15 via-indigo-600/10 to-transparent blur-3xl" />

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-blue-400">
              <Bot className="h-3.5 w-3.5" />
              <span>AI ARCHITECTURE ADVISOR // LIVE BLUEPRINT ENGINE</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Describe Your Idea,{" "}
              <span className="text-gradient-cyber">Get an Instant Architecture Blueprint</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed">
              Test our AI engineering engine. Type your project idea or pick a preset
              below to calculate recommended tech stacks, core modules, and sprint milestones.
            </p>
          </div>

          {/* Interactive Prompt Input Bar */}
          <div className="max-w-3xl mx-auto space-y-3">
            <div className="relative flex flex-col sm:flex-row items-stretch gap-2 rounded-2xl border border-white/15 bg-slate-950/90 p-2 shadow-inner focus-within:border-blue-500/60 focus-within:ring-1 focus-within:ring-blue-500/20">
              <div className="flex items-center gap-2.5 px-3 py-2 flex-1">
                <Sparkles className="h-4 w-4 text-blue-400 shrink-0" />
                <input
                  type="text"
                  placeholder="e.g. AI SaaS with WhatsApp Bot and Stripe subscriptions..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleGenerate();
                  }}
                  className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-sans"
                />
              </div>

              <button
                type="button"
                onClick={() => handleGenerate()}
                disabled={isGenerating}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-blue-600/25 disabled:opacity-50 transition-all"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>Synthesizing...</span>
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4" />
                    <span>Generate Blueprint</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Preset Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                Try Ideas:
              </span>
              {presets.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => {
                    setPrompt(preset.prompt);
                    handleGenerate(preset.prompt);
                  }}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300 hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/5 transition-colors"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generated Blueprint Card */}
          <AnimatePresence>
            {blueprint && (
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="mt-8 max-w-4xl mx-auto rounded-3xl border border-blue-500/30 bg-slate-950/95 p-6 sm:p-8 space-y-6 shadow-[0_15px_45px_rgba(0,0,0,0.8)]"
              >
                {/* Result Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <span className="inline-block rounded-md bg-blue-500/15 border border-blue-500/30 px-2.5 py-0.5 font-mono text-[10px] text-blue-300 font-bold uppercase mb-1">
                      {blueprint.architectureTier}
                    </span>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {blueprint.title}
                    </h4>
                    <p className="font-mono text-xs text-slate-400 mt-0.5">
                      {blueprint.tagline}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="font-mono text-[10px] uppercase text-slate-400">
                      Estimated Delivery
                    </div>
                    <div className="font-mono text-sm font-bold text-blue-400 flex items-center gap-1.5 justify-end">
                      <Clock className="h-3.5 w-3.5 text-indigo-400" />
                      <span>{blueprint.timeline}</span>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Specs */}
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-indigo-400 mb-2.5">
                    Recommended Production Tech Stack:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                      <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                        Frontend &amp; UX
                      </span>
                      <span className="text-white font-medium">
                        {blueprint.techStack.frontend}
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                      <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                        Backend &amp; APIs
                      </span>
                      <span className="text-white font-medium">
                        {blueprint.techStack.backend}
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                      <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                        AI Engine &amp; Cloud
                      </span>
                      <span className="text-blue-300 font-medium">
                        {blueprint.techStack.aiCloud}
                      </span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-slate-900/60 p-3">
                      <span className="font-mono text-[10px] uppercase text-slate-400 block mb-1">
                        Database &amp; Caching
                      </span>
                      <span className="text-white font-medium">
                        {blueprint.techStack.db}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Core Architecture Modules */}
                <div>
                  <div className="font-mono text-xs uppercase tracking-wider text-blue-400 mb-2">
                    Key Architectural Modules Included:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {blueprint.modules.map((mod) => (
                      <div
                        key={mod}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/50 p-2.5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Investment & Actions */}
                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="font-mono text-[10px] uppercase text-slate-400">
                      Estimated Sprint Investment:
                    </div>
                    <div className="font-display text-xl font-bold text-white text-gradient-cyber">
                      {blueprint.budgetInr}{" "}
                      <span className="text-xs text-slate-400 font-normal">
                        ({blueprint.budgetUsd})
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Discuss Blueprint on WhatsApp</span>
                    </button>

                    {onOpenBooking && (
                      <button
                        type="button"
                        onClick={onOpenBooking}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 font-mono text-xs text-blue-200 hover:bg-blue-500/20 transition-colors"
                      >
                        <Calendar className="h-3.5 w-3.5 text-blue-400" />
                        <span>Book Strategy Call</span>
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
