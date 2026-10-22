"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Sparkles,
  Check,
  Calendar,
  MessageCircle,
  Clock,
  ArrowRight,
  Layers,
  Smartphone,
  Globe,
  Database,
  Bot,
  CreditCard,
  BarChart3,
  Box,
  Cloud,
  ShieldCheck,
  Palette,
  Code2,
} from "lucide-react";

interface ProjectCostEstimatorProps {
  onOpenBooking?: () => void;
}

const platforms = [
  {
    id: "web-app",
    title: "Next.js Web Application",
    description: "SaaS platform, web portal or high-speed conversion site",
    baseInr: 40000,
    baseUsd: 600,
    weeks: "3 – 4 Weeks",
    icon: Globe,
  },
  {
    id: "mobile-app",
    title: "Mobile App (iOS & Android)",
    description: "Cross-platform Flutter application with 60fps animations",
    baseInr: 65000,
    baseUsd: 950,
    weeks: "4 – 6 Weeks",
    icon: Smartphone,
  },
  {
    id: "full-ecosystem",
    title: "Full Web + Mobile Ecosystem",
    description: "Unified web platform, iOS/Android apps, shared database & API",
    baseInr: 95000,
    baseUsd: 1400,
    weeks: "6 – 8 Weeks",
    icon: Layers,
  },
  {
    id: "enterprise-tool",
    title: "Custom ERP / Business Software",
    description: "Tailor-made internal operations tool, inventory & invoicing",
    baseInr: 80000,
    baseUsd: 1200,
    weeks: "5 – 7 Weeks",
    icon: Database,
  },
];

const addOns = [
  {
    id: "ai-copilot",
    label: "Custom AI Copilot & RAG Chatbot",
    inr: 25000,
    usd: 350,
    icon: Bot,
    category: "AI & Automation",
  },
  {
    id: "payment-gateway",
    label: "Payment Gateway & Recurring Billing",
    inr: 15000,
    usd: 200,
    icon: CreditCard,
    category: "Monetization",
  },
  {
    id: "analytics-dashboard",
    label: "Data Analytics & BI Dashboard",
    inr: 20000,
    usd: 300,
    icon: BarChart3,
    category: "Telemetry",
  },
  {
    id: "spatial-3d",
    label: "3D Spatial WebGL Graphics (Three.js)",
    inr: 20000,
    usd: 300,
    icon: Box,
    category: "Creative Media",
  },
  {
    id: "cloud-devops",
    label: "AWS Cloud CI/CD & Auto-Scaling",
    inr: 15000,
    usd: 220,
    icon: Cloud,
    category: "DevOps",
  },
  {
    id: "security-audit",
    label: "Zero-Trust Security & OWASP Hardening",
    inr: 15000,
    usd: 200,
    icon: ShieldCheck,
    category: "Security",
  },
];

const designTiers = [
  {
    id: "code-only",
    title: "Engineering Only",
    sub: "You provide existing design / Figma files",
    inr: 0,
    usd: 0,
    icon: Code2,
  },
  {
    id: "full-uiux",
    title: "Full Brand & UI/UX Design System",
    sub: "Brand identity, high-fidelity prototypes & design tokens",
    inr: 20000,
    usd: 300,
    icon: Palette,
  },
];

export default function ProjectCostEstimator({
  onOpenBooking,
}: ProjectCostEstimatorProps) {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([
    "ai-copilot",
    "payment-gateway",
  ]);
  const [selectedDesign, setSelectedDesign] = useState(designTiers[1]);
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculate dynamic investment estimate
  const addOnsCostInr = selectedAddOns.reduce((acc, id) => {
    const item = addOns.find((a) => a.id === id);
    return acc + (item ? item.inr : 0);
  }, 0);

  const addOnsCostUsd = selectedAddOns.reduce((acc, id) => {
    const item = addOns.find((a) => a.id === id);
    return acc + (item ? item.usd : 0);
  }, 0);

  const totalInrMin = selectedPlatform.baseInr + addOnsCostInr + selectedDesign.inr;
  const totalInrMax = Math.round(totalInrMin * 1.25);

  const totalUsdMin = selectedPlatform.baseUsd + addOnsCostUsd + selectedDesign.usd;
  const totalUsdMax = Math.round(totalUsdMin * 1.25);

  const handleSendToWhatsApp = () => {
    const activeAddOnLabels = addOns
      .filter((a) => selectedAddOns.includes(a.id))
      .map((a) => `• ${a.label}`)
      .join("\n");

    const estimateString =
      currency === "INR"
        ? `₹${totalInrMin.toLocaleString("en-IN")} – ₹${totalInrMax.toLocaleString("en-IN")}`
        : `$${totalUsdMin.toLocaleString("en-US")} – $${totalUsdMax.toLocaleString("en-US")}`;

    const text = `*New Scope Estimate Request — Zyntaverse Technologies*
*Selected Platform:* ${selectedPlatform.title}
*Design Scope:* ${selectedDesign.title}
*Features Included:*
${activeAddOnLabels || "• Core System Features"}
*Estimated Delivery:* ${selectedPlatform.weeks}
*Budget Estimate (${currency}):* ${estimateString}

_Hello Zyntaverse team, I calculated this project scope on your website and would like to discuss next steps._`;

    window.open(
      `https://wa.me/917992153750?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section id="estimator" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-blue-300 mb-4">
            <Calculator className="h-3.5 w-3.5" />
            <span>TRANSPARENT PRICING // INSTANT ESTIMATOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Estimate Your{" "}
            <span className="text-gradient-cyber">Project Investment</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Select your platform, features, and design requirements to calculate
            an instant estimated budget and timeline for your digital project.
          </p>

          {/* Currency Switcher */}
          <div className="mt-6 inline-flex items-center rounded-xl border border-white/10 bg-slate-950/80 p-1">
            <button
              type="button"
              onClick={() => setCurrency("INR")}
              className={`rounded-lg px-4 py-1.5 font-mono text-xs font-bold transition-all ${
                currency === "INR"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              INR (₹)
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`rounded-lg px-4 py-1.5 font-mono text-xs font-bold transition-all ${
                currency === "USD"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              USD ($)
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Configuration Options */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Platform Selection */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-700/60">
              <span className="font-mono text-xs uppercase tracking-widest text-blue-300 flex items-center gap-2">
                <span>01. SELECT PRIMARY PLATFORM</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {platforms.map((p) => {
                  const Icon = p.icon;
                  const isSelected = selectedPlatform.id === p.id;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlatform(p)}
                      className={`text-left rounded-2xl p-4 border transition-all ${
                        isSelected
                          ? "border-blue-500 bg-blue-500/15 shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                          : "border-white/10 bg-slate-950/60 hover:border-white/20 hover:bg-slate-900/60"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                            isSelected
                              ? "border-blue-400/50 bg-blue-400/20 text-blue-300"
                              : "border-white/10 bg-white/5 text-slate-400"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-display text-sm font-bold text-white">
                            {p.title}
                          </div>
                          <div className="font-mono text-[10px] text-blue-300">
                            {p.weeks}
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {p.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Feature Add-Ons */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-700/60">
              <span className="font-mono text-xs uppercase tracking-widest text-indigo-300 flex items-center gap-2">
                <span>02. SELECT FEATURE CAPABILITIES</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addOns.map((addon) => {
                  const Icon = addon.icon;
                  const isChecked = selectedAddOns.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddOn(addon.id)}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all ${
                        isChecked
                          ? "border-indigo-500/60 bg-indigo-500/15 text-white shadow-sm"
                          : "border-white/10 bg-slate-950/60 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                            isChecked
                              ? "bg-indigo-500/20 text-indigo-300"
                              : "bg-white/5 text-slate-400"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-medium truncate">
                            {addon.label}
                          </div>
                          <div className="font-mono text-[10px] text-slate-400">
                            {currency === "INR"
                              ? `+₹${addon.inr.toLocaleString("en-IN")}`
                              : `+$${addon.usd}`}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border ${
                          isChecked
                            ? "border-indigo-500 bg-indigo-600 text-white"
                            : "border-white/20 bg-transparent"
                        }`}
                      >
                        {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Design Scope */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-700/60">
              <span className="font-mono text-xs uppercase tracking-widest text-sky-300 flex items-center gap-2">
                <span>03. DESIGN &amp; BRANDING TIER</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {designTiers.map((d) => {
                  const Icon = d.icon;
                  const isSelected = selectedDesign.id === d.id;
                  return (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setSelectedDesign(d)}
                      className={`text-left rounded-2xl p-4 border transition-all ${
                        isSelected
                          ? "border-sky-500 bg-sky-500/15 shadow-[0_0_20px_rgba(14,165,233,0.15)]"
                          : "border-white/10 bg-slate-950/60 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <Icon className="h-4 w-4 text-sky-400" />
                        <span className="font-display text-sm font-bold text-white">
                          {d.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{d.sub}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Live Dynamic Estimate Card */}
          <div className="lg:col-span-4 sticky top-28">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-300">
                  ESTIMATED SUMMARY
                </span>
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 px-2.5 py-0.5 font-mono text-[10px] text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Quote
                </span>
              </div>

              {/* Price Calculation */}
              <div>
                <div className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  Estimated Investment ({currency})
                </div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white mt-1 text-gradient-cyber">
                  {currency === "INR" ? (
                    <>
                      ₹{totalInrMin.toLocaleString("en-IN")}{" "}
                      <span className="text-lg text-slate-400 font-normal">
                        – ₹{totalInrMax.toLocaleString("en-IN")}
                      </span>
                    </>
                  ) : (
                    <>
                      ${totalUsdMin.toLocaleString("en-US")}{" "}
                      <span className="text-lg text-slate-400 font-normal">
                        – ${totalUsdMax.toLocaleString("en-US")}
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Timeline & Inclusions */}
              <div className="space-y-2.5 text-xs text-slate-300 border-y border-white/10 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-indigo-400" />
                    <span>Estimated Timeline:</span>
                  </span>
                  <span className="font-mono font-semibold text-white">
                    {selectedPlatform.weeks}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Post-Launch Warranty:</span>
                  </span>
                  <span className="font-mono font-semibold text-emerald-300">
                    60 Days Included
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 text-blue-400" />
                    <span>Active Features:</span>
                  </span>
                  <span className="font-mono font-semibold text-blue-300">
                    {selectedAddOns.length} Add-Ons
                  </span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-1">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-xs font-bold text-slate-950 shadow-sm hover:opacity-95 transition-opacity"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Estimate to WhatsApp</span>
                </button>

                {onOpenBooking && (
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-3 text-xs font-mono font-semibold text-blue-200 hover:bg-blue-500/20 transition-all"
                  >
                    <Calendar className="h-4 w-4 text-blue-300" />
                    <span>Book Call with this Estimate</span>
                  </button>
                )}
              </div>

              <div className="text-center font-mono text-[10px] text-slate-400">
                100% Milestone-Based Payments • NDA Protected
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
