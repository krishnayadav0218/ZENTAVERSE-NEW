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
  { border: "border-cyan-400/35", text: "text-cyan-300", dot: "#00F0FF" },
  { border: "border-purple-400/35", text: "text-purple-300", dot: "#A855F7" },
  { border: "border-pink-400/35", text: "text-pink-300", dot: "#EC4899" },
  { border: "border-emerald-400/35", text: "text-emerald-300", dot: "#10B981" },
  { border: "border-amber-400/35", text: "text-amber-300", dot: "#F59E0B" },
  { border: "border-sky-400/35", text: "text-sky-300", dot: "#38BDF8" },
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
      "Disparate spreadsheet siloes, manual inventory reconciliation errors causing ₹18 Lakhs in quarterly stock slippage, and no unified multi-branch access control.",
    solution:
      "Built a unified modular Cloud ERP with granular RBAC, automated GST invoicing, real-time inventory triggers, and encrypted audit logs with automatic database backups.",
    specs: [
      { label: "Architecture", value: "Clean Architecture Modular Monolith with NestJS" },
      { label: "Security & RBAC", value: "OAuth2, JWT, AES-256 encrypted fields" },
      { label: "Database", value: "PostgreSQL with read replicas & Redis caching" },
      { label: "Compliance", value: "Automated GST e-Invoicing & E-Way Bill integration" },
    ],
    roiMetrics: [
      { value: "₹24L+", label: "Annual Cost Saved", detail: "Completely eliminated stockout slippage & manual errors" },
      { value: "85%", label: "Workflow Automation", detail: "PO approvals and invoicing trigger automatically" },
      { value: "99.99%", label: "System Uptime", detail: "High-availability deployment with failover" },
    ],
    beforeAfter: {
      before: "Fragmented Excel sheets, frequent inventory stockouts, and 3-day invoicing delays.",
      after: "Single unified pane of glass across 4 factory branches with instant 1-click GST invoices.",
    },
  },
  "rag-knowledge-bot": {
    industry: "EdTech & Corporate Legal Support",
    duration: "4 Weeks Sprint",
    challenge:
      "Customer support team overwhelmed with 5,000+ weekly repetitive policy queries, leading to 6-hour average ticket resolution time and high support staff burn out.",
    solution:
      "Engineered an enterprise Retrieval-Augmented Generation (RAG) assistant utilizing pgvector semantic embeddings, hybrid keyword reranking, and citation verifiers with WhatsApp & Slack webhooks.",
    specs: [
      { label: "Embedding Engine", value: "Text-Embedding-3 with pgvector index" },
      { label: "Reranker Model", value: "Cohere Rerank v3 with citation verification" },
      { label: "First Token Latency", value: "< 750ms Streaming TTFT" },
      { label: "Channels", value: "Web Widget, WhatsApp Business API, Slack Bot" },
    ],
    roiMetrics: [
      { value: "82%", label: "Deflection Rate", detail: "Resolved 82% of inquiries without human intervention" },
      { value: "< 2s", label: "Instant Resolution", detail: "Average response time dropped from 6 hours to 2s" },
      { value: "4.9 / 5", label: "Customer CSAT", detail: "User satisfaction rating across 15,000+ queries" },
    ],
    beforeAfter: {
      before: "6-hour wait times, overwhelmed support reps, and recurring customer dissatisfaction.",
      after: "24/7 instant verified answers in English & Hindi with exact document source citations.",
    },
  },
  "ecommerce-3d-experience": {
    industry: "Luxury Retail & Home Furniture",
    duration: "6 Weeks Sprint",
    challenge:
      "High product return rate (28%) because customers could not visualize texture, materials, and scale inside their physical living spaces before purchasing.",
    solution:
      "Developed a 3D WebGL product configurator allowing real-time material swapping, photorealistic lighting, and instant mobile WebXR augmented reality projection.",
    specs: [
      { label: "3D Pipeline", value: "Three.js + Draco Compressed GLTF (< 1.8MB asset sizes)" },
      { label: "Checkout Engine", value: "Next.js 14 App Router + Stripe / Razorpay" },
      { label: "Lighthouse Score", value: "98 Performance Score on mobile devices" },
      { label: "Augmented Reality", value: "WebXR & QuickLook with zero app installation" },
    ],
    roiMetrics: [
      { value: "+44%", label: "Checkout Conversion", detail: "Shoppers interacting with 3D converted at 1.44x" },
      { value: "-62%", label: "Product Return Rate", detail: "Accurate spatial preview eliminated sizing regrets" },
      { value: "2.8x", label: "Time on Site", detail: "Users explored multiple colors and custom configurations" },
    ],
    beforeAfter: {
      before: "Static 2D photos leading to 28% return rates and hesitant online buyers.",
      after: "Full 360-degree interactive 3D configurator with AR room preview boosting sales by 44%.",
    },
  },
  "portfolio-3d-nexus": {
    industry: "High-Tech Agency & SaaS Showcase",
    duration: "3 Weeks Sprint",
    challenge:
      "Standard agency templates failed to communicate deep technical expertise, resulting in generic inbound inquiries with low conversion to premium development retainers.",
    solution:
      "Created a cinematic Cyberpunk spatial experience powered by React Three Fiber, custom procedural GLSL shaders, and frictionless WhatsApp lead capture workflows.",
    specs: [
      { label: "Graphics Framework", value: "React Three Fiber, Drei, Custom GLSL Shaders" },
      { label: "Performance", value: "Locked 60 FPS across modern mobile & desktop" },
      { label: "SEO & Metas", value: "Dynamic OpenGraph, JSON-LD schema, 100% SEO audit" },
      { label: "Lead Funnel", value: "Instant WhatsApp pre-fill and interactive cost estimator" },
    ],
    roiMetrics: [
      { value: "3.2x", label: "Qualified Inbound Leads", detail: "High-value clients booking direct architecture audits" },
      { value: "99%", label: "Mobile Compatibility", detail: "Graceful WebGL fallback for low-spec devices" },
      { value: "98/100", label: "Core Web Vitals", detail: "Blazing fast hydration and minimal bundle footprint" },
    ],
    beforeAfter: {
      before: "Boring static portfolio overlooked by venture-funded startups and enterprise clients.",
      after: "Futuristic interactive tech showcase converting casual visitors into high-ticket clients.",
    },
  },
};

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
          https://{project.id}.zyntaverse.com
        </div>
        <span
          className="font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded-full"
          style={{
            backgroundColor: `${project.accentColor}25`,
            color: project.accentColor,
            border: `1px solid ${project.accentColor}55`,
          }}
        >
          LIVE CASE
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
                Vector pgvector search • 14,200 chunks...
              </span>
            </div>
            <div className="rounded-lg border border-pink-400/40 bg-gradient-to-r from-pink-500/15 to-purple-500/15 px-2.5 py-1.5 text-[10px] font-mono text-pink-200 flex items-center justify-between">
              <span>Verified Citations • Zero Hallucination</span>
              <span className="text-amber-300 font-bold">0.75s TTFT</span>
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
                <span>WebXR Live AR</span>
                <span className="text-amber-300 font-bold">+44% Conv.</span>
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
                Interactive 3D Workstation + Cyber Hologram UI
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
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/35 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-pink-300 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span>CASE STUDIES // PROVEN ROI & ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Engineered for{" "}
              <span className="text-gradient-cyber">Real-World Scale</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300/90">
              Explore in-depth case studies with measurable business ROI, system architecture blueprints,
              and live performance telemetries engineered by Zyntaverse Technologies.
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
                <TiltCard glowColor={`${project.accentColor}45`} intensity={12}>
                  <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Floating Glass/Holographic Screen Mockup */}
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

                      <h3 className="mt-1 font-display text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-xs font-mono text-purple-300">
                        {project.tagline}
                      </p>
                      <p className="mt-2.5 text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Top ROI Pill */}
                      {cs && cs.roiMetrics[0] && (
                        <div className="mt-3.5 inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-mono text-emerald-300">
                          <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
                          <span>ROI: {cs.roiMetrics[0].value} {cs.roiMetrics[0].label}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 space-y-4">
                      {/* Multi-Color Technologies Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 4).map((tech, tIdx) => {
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
                        {project.technologies.length > 4 && (
                          <span className="rounded-lg border border-white/10 bg-slate-900 px-2 py-1 font-mono text-[10px] text-slate-400">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Case Study Details & GitHub Action Buttons */}
                      <div className="pt-3 border-t border-white/10 flex items-center gap-3">
                        <button
                          type="button"
                          onClick={() => handleOpenProject(project)}
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 px-3.5 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all shadow-neon-cyan"
                        >
                          <Zap className="h-3.5 w-3.5" />
                          <span>Case Study & ROI</span>
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] p-2.5 text-slate-300 hover:border-cyan-400/60 hover:text-white transition-all"
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

      {/* Comprehensive Case Study & Live ROI Inspection Modal */}
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
              className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel p-5 sm:p-8 border border-cyan-400/40 shadow-neon-cyan my-auto"
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
                <span className="rounded-lg border border-purple-400/30 bg-purple-500/10 px-2.5 py-0.5 font-mono text-[11px] text-purple-300">
                  {selectedCaseStudy.industry}
                </span>
                <span className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[11px] text-cyan-300">
                  {selectedCaseStudy.duration}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {previewProject.title}
              </h3>
              <p className="mt-1 font-mono text-xs sm:text-sm text-cyan-300">
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
                          ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white font-bold shadow-neon-cyan"
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
                    <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-300">
                      Core Stack & Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {previewProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 font-mono text-xs text-cyan-200"
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
                        <div className="font-mono text-[10px] text-cyan-300 uppercase tracking-wider">
                          {spec.label}
                        </div>
                        <div className="font-mono text-xs text-white font-semibold">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className="font-mono text-xs uppercase tracking-widest text-purple-300">
                      Architecture Blueprint Highlights
                    </h4>
                    {previewProject.architectureHighlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-slate-900/60 p-3 text-xs text-slate-200"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0 mt-0.5 text-cyan-400"
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
                        className="rounded-2xl border border-cyan-400/30 bg-gradient-to-b from-cyan-500/10 to-transparent p-4 text-center space-y-1"
                      >
                        <div className="font-display text-2xl sm:text-3xl font-extrabold text-cyan-300">
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

                  <div className="rounded-2xl border border-purple-400/25 bg-purple-950/20 p-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-purple-300 font-bold uppercase mb-1">
                      <TrendingUp className="h-4 w-4 text-pink-400" />
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
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 text-xs font-semibold text-white hover:from-emerald-400 hover:to-teal-500 shadow-neon-cyan transition-all"
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
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 px-4 py-2.5 text-xs font-semibold text-white hover:opacity-95 shadow-neon-cyan transition-all"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Book Free Strategy Call</span>
                    </button>
                  )}

                  <a
                    href={previewProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-white hover:border-cyan-400/50"
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
