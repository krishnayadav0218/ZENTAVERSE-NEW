"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Code2,
  Layers,
  Sparkles,
  MessageCircle,
  Calendar,
  ChevronDown,
  ExternalLink,
  Laptop,
  Check,
  Zap,
} from "lucide-react";
import { ServiceItem, servicesData, defaultBrandConfig } from "@/data/siteData";
import AppointmentBookingModal from "@/components/AppointmentBookingModal";
import AIAssistantWidget from "@/components/AIAssistantWidget";

interface ServicePageClientProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export default function ServicePageClient({
  service,
  relatedServices,
}: ServicePageClientProps) {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const whatsappInquiryUrl = `https://wa.me/917992153750?text=${encodeURIComponent(
    `Hello Zyntaverse Technologies! I am interested in your "${service.title}" services. I would like to schedule a technical discovery call to discuss our scope and timeline.`
  )}`;

  const serviceFaqs = [
    {
      q: `How long does a typical ${service.title} sprint take?`,
      a: `Most projects in this domain run between ${service.timeline}. We work in weekly agile milestone sprints with staging preview environments, so you see working software every 5–7 days.`,
    },
    {
      q: "Who owns the code and intellectual property (IP)?",
      a: "You retain 100% full legal ownership of all source code, Figma designs, database schemas, and documentation from day one. Everything is handed over in your private GitHub repositories under strict bilateral NDA protection.",
    },
    {
      q: "Do you offer post-launch maintenance and warranty?",
      a: "Yes. Every engagement includes a complimentary 30 to 60-day post-launch warranty covering bug fixes, latency optimization, and operational monitoring. We also provide ongoing fractional engineering retainers for continuous feature iterations.",
    },
    {
      q: "How do we get started with Zyntaverse?",
      a: "It starts with a complimentary 30-minute technical architecture consultation where we review your requirements, formulate a milestone roadmap, and provide a fixed-scope proposal within 24 hours.",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter Sprint",
      tagline: "Ideal for PoCs, interactive prototypes & targeted feature modules.",
      priceInr: "₹45,000 – ₹85,000",
      priceUsd: "$650 – $1,150",
      duration: "1 – 2 Weeks",
      features: [
        "Architecture & tech stack specification",
        "High-fidelity UI/UX prototype & design system",
        "Core functional MVP module",
        "Weekly staging build deployment",
        "14-day post-launch bug warranty",
      ],
      highlight: false,
    },
    {
      name: "Full Production MVP",
      tagline: "Complete production-ready platform built for market launch & seed funding.",
      priceInr: "₹95,000 – ₹1,95,000",
      priceUsd: "$1,350 – $2,700",
      duration: "3 – 5 Weeks",
      features: [
        "Full-stack scalable architecture",
        "Custom APIs, secure authentication & databases",
        "Third-party integrations (Payments, WhatsApp, AI)",
        "Automated CI/CD deployment on AWS / Vercel",
        "Bilateral strict NDA & 100% IP transfer",
        "45-day post-launch SLA warranty",
      ],
      highlight: true,
    },
    {
      name: "Enterprise Architecture",
      tagline: "High-throughput custom systems, legacy modernizations & dedicated teams.",
      priceInr: "₹2,25,000+",
      priceUsd: "$3,200+",
      duration: "6+ Weeks / Retainer",
      features: [
        "Multi-cloud microservices & zero-trust security",
        "Sub-100ms API latency & database clustering",
        "Advanced AI vector pipelines & custom agents",
        "Dedicated senior lead engineer & sprint architect",
        "Executive telemetry & 99.9% uptime SLA",
        "60-day post-launch SLA warranty",
      ],
      highlight: false,
    },
  ];

  const processStages = [
    {
      number: "01",
      title: "Discovery & Blueprinting",
      duration: "Sprint Week 1",
      description:
        "We dissect your business model, map edge cases, determine optimal cloud infrastructure, and produce a fixed-scope technical roadmap.",
    },
    {
      number: "02",
      title: "Architecture & Interactive Design",
      duration: "Sprint Week 2",
      description:
        "Creating high-conversion Figma UI components, database schema definitions, and API contracts before laying down production code.",
    },
    {
      number: "03",
      title: "Core Milestone Engineering",
      duration: "Sprint Weeks 3–4",
      description:
        "Writing clean, tested TypeScript and microservices with daily Git commits and staging URL access for live feature verification.",
    },
    {
      number: "04",
      title: "Launch, QA & Post-Launch SLA",
      duration: "Sprint Week 5+",
      description:
        "End-to-end security audits, load stress tests, automated CI/CD deployment, followed by our complimentary 30–60 day warranty.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#080b11] text-slate-100 selection:bg-blue-600/30 selection:text-blue-100 font-sans">
      {/* Ambient Atmospheric Pools */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-[140px] opacity-25"
          style={{ backgroundColor: service.accentColor }}
        />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-indigo-600/15 blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Top Floating Service Navigation Bar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl border-b border-white/10 bg-[#080b11]/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform hover:scale-105"
          >
            <div className="h-10 w-10 rounded-xl border border-white/15 bg-slate-900 p-1 flex items-center justify-center shadow-md">
              <Image
                src="/logo.png"
                alt="Zyntaverse Technologies"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-display font-bold text-sm tracking-wider text-white">
                ZYNTAVERSE
              </div>
              <div className="font-mono text-[9px] text-blue-400 font-semibold tracking-widest uppercase">
                TECHNOLOGIES
              </div>
            </div>
          </Link>

          {/* Nav links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">All Services</span>
            </Link>

            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-blue-600/25 transition-all"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book Strategy Call</span>
            </button>
          </div>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <div className="relative z-10 border-b border-white/5 bg-slate-950/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 text-xs font-mono text-slate-400 flex items-center gap-2">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-blue-400 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-white font-medium truncate">
            {service.title}
          </span>
        </div>
      </div>

      <main className="relative z-10">
        {/* ========================================================= */}
        {/* HERO SECTION                                              */}
        {/* ========================================================= */}
        <section className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-blue-300 mb-6">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                <span>SERVICE {service.number} // PRODUCTION SPECIFICATION</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                {service.title}
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
                {service.fullDescription}
              </p>

              {/* KPI Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs font-mono">
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3.5 py-2 text-slate-300">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>Timeline: <strong>{service.timeline}</strong></span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3.5 py-2 text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Strict Bilateral NDA Included</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/70 px-3.5 py-2 text-slate-300">
                  <Code2 className="h-4 w-4 text-indigo-400" />
                  <span>100% IP &amp; Code Ownership</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all hover:-translate-y-0.5"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Free 30-Min Strategy Call</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 px-6 py-3.5 text-sm font-semibold text-emerald-300 transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  <span>Discuss Requirements on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CORE DELIVERABLES GRID                                    */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-white/10 bg-slate-950/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold block mb-2">
                WHAT YOU RECEIVE
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Comprehensive Engineering Deliverables
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                Every milestone is deterministic, source-controlled, and audited for security, scalability, and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 flex items-start gap-4 transition-all hover:border-blue-500/40 hover:bg-slate-900/90 shadow-lg"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border"
                    style={{
                      borderColor: `${service.accentColor}55`,
                      backgroundColor: `${service.accentColor}15`,
                      color: service.accentColor,
                    }}
                  >
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white mb-1.5">
                      {item}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Engineered to enterprise standards with automated tests, documentation, zero-trust authentication, and seamless handoff to your internal team.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* PRODUCTION TECH STACK WALL                                */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 sm:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
                    TECH STACK &amp; FRAMEWORKS
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    Technologies Utilized for {service.title}
                  </h3>
                </div>
                <div className="font-mono text-xs text-slate-400">
                  Production-Proven • Enterprise SLA Compatible
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {service.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-mono text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                  >
                    <Laptop className="h-4 w-4 text-blue-400" />
                    <span className="font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4-STAGE SPRINT ROADMAP                                    */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-white/10 bg-slate-950/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold block mb-2">
                AGILE DELIVERY SPRINT
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                How We Deliver: From Idea to Production Launch
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                Transparent weekly sprints, staging deployments, and direct communication with senior engineers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {processStages.map((stage) => (
                <div
                  key={stage.number}
                  className="rounded-3xl border border-white/10 bg-slate-900/60 p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-2xl font-bold text-blue-400/40">
                        {stage.number}
                      </span>
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-300 uppercase">
                        {stage.duration}
                      </span>
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TRANSPARENT PRICING TIERS                                 */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold block mb-2">
                TRANSPARENT INVESTMENT
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Milestone-Based Investment Tiers
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300">
                No hidden costs. Predictable sprint estimates with milestones tied directly to working software delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all ${
                    tier.highlight
                      ? "border-2 border-blue-500 bg-slate-950 shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
                      : "border border-white/10 bg-slate-900/60"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 font-mono text-[10px] uppercase font-bold text-white tracking-widest shadow-md">
                      MOST POPULAR SPRINT
                    </div>
                  )}

                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-400 min-h-[32px]">
                      {tier.tagline}
                    </p>

                    <div className="mt-6 mb-6 pb-6 border-b border-white/10">
                      <div className="font-display text-2xl sm:text-3xl font-bold text-white">
                        {tier.priceInr}
                      </div>
                      <div className="font-mono text-xs text-blue-400 mt-1">
                        approx. {tier.priceUsd} • {tier.duration}
                      </div>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => setBookingModalOpen(true)}
                      className={`w-full rounded-xl py-3 text-xs font-semibold transition-all ${
                        tier.highlight
                          ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30"
                          : "border border-white/15 bg-white/5 hover:bg-white/10 text-white"
                      }`}
                    >
                      Inquire for {tier.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS                                */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-white/10 bg-slate-950/40">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold block mb-2">
                COMMON QUESTIONS
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {serviceFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-display text-sm sm:text-base font-semibold text-white hover:text-blue-300 transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 text-blue-400 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 border-t border-white/5 pt-3 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* RELATED SERVICES CROSS-LINKS                              */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold block mb-1">
                  EXPLORE MORE CAPABILITIES
                </span>
                <h3 className="font-display text-2xl font-bold text-white">
                  Related Core Services
                </h3>
              </div>
              <Link
                href="/#services"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>View all 12 services</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/services/${rel.id}`}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 hover:border-blue-500/40 hover:bg-slate-900/80 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs text-blue-400 font-bold block mb-2">
                      {rel.number}
                    </span>
                    <h4 className="font-display text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {rel.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-400 line-clamp-2">
                      {rel.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span>{rel.timeline}</span>
                    <span className="text-blue-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* BOTTOM HIGH-CONVERSION CTA BANNER                         */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-white/10 bg-gradient-to-b from-blue-950/30 to-slate-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-3xl border border-blue-500/30 bg-slate-950/90 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-600/20 blur-3xl" />

              <span className="inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-blue-300 mb-4">
                READY TO ARCHITECT?
              </span>

              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white max-w-2xl mx-auto">
                Let&apos;s Build Your {service.title} Solution
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
                Schedule a confidential 30-minute consultation with our senior engineering team to get an exact technical scope, tech stack recommendation, and milestone quote.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white shadow-xl shadow-blue-600/30 transition-all hover:scale-105"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Free Strategy Consultation</span>
                </button>

                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 hover:bg-emerald-500/25 px-6 py-3.5 text-xs sm:text-sm font-semibold text-emerald-300 transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-emerald-400" />
                  <span>Direct WhatsApp Line: +91 7992153750</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 text-xs font-mono text-slate-400">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Zyntaverse Technologies. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href="mailto:zyntaversetechnologies@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </footer>

      {/* Strategy Call Booking Modal */}
      <AppointmentBookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultService={service.title}
      />

      {/* Live AI Copilot & WhatsApp Widget */}
      <AIAssistantWidget
        phoneNumber={defaultBrandConfig.whatsapp || defaultBrandConfig.phone}
        businessName={defaultBrandConfig.name}
      />
    </div>
  );
}
