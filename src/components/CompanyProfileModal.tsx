"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Download,
  Printer,
  Sparkles,
  Building,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Globe,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { servicesData, statsData } from "@/data/siteData";

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyProfileModal({
  isOpen,
  onClose,
}: CompanyProfileModalProps) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadDeck = () => {
    const summary = `=====================================================
ZYNTAVERSE TECHNOLOGIES — OFFICIAL CAPABILITY DECK
INNOVATE • BUILD • SCALE
Full-Stack Technology Partner (Idea to Scale)
=====================================================

ABOUT US:
We build innovative digital solutions that help businesses grow, operate smarter, and stay ahead in a digital world. Based in Mumbai, India, serving global startups and enterprises across the US, UK, UAE, and India.

HEADQUARTERS & CONTACT:
• Location: Mumbai, India | Global Remote & On-Site
• Email: zyntaversetechnologies@gmail.com
• Phone / WhatsApp: +91 7992153750
• Website: https://www.zyntaverse.com

DELIVERY RECORD & STATS:
• 50+ Production Systems Delivered
• 30+ Happy Global Clients
• 5+ Years Full-Stack, AI & Cloud Experience
• 100% Client Satisfaction & SLA Warranty

OUR 12 CORE SERVICES:
01. Web & App Development (React, Next.js, Node.js)
02. UI/UX Design & Branding (Figma, Design Systems)
03. Custom Software Development (ERP, CRM, Workflow Tools)
04. MVP Development for Startups (Rapid 2-4 Week Sprints)
05. Cloud & DevOps Services (AWS, Docker, CI/CD)
06. Cybersecurity Solutions (Zero-Trust, OAuth, Audits)
07. Mobile App Development (Flutter iOS & Android 60fps)
08. API Development & Integration (RESTful, GraphQL, Webhooks)
09. Chatbot & AI Solutions (Generative AI, RAG Copilots)
10. Data Analytics & Business Intelligence (Power BI, Tableau, SQL)
11. AR/VR Development (Three.js WebGL Spatial Scenes)
12. IT Consulting & Digital Transformation (Architecture Advisory)

CORE COMMITMENTS:
• 100% Strict Bilateral NDA Protection
• Milestone-Based Transparent Pricing
• Complimentary 30-90 Days Post-Launch Warranty
• Direct Founder & Senior Architect Communication

Connect directly on WhatsApp: https://wa.me/917992153750
=====================================================`;

    const blob = new Blob([summary], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Zyntaverse-Technologies-Capability-Deck.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xl overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.93, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.93, y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl my-8 rounded-3xl glass-panel p-6 sm:p-9 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="h-12 w-12 rounded-2xl border border-white/15 p-1.5 flex items-center justify-center bg-slate-900 shadow-md">
                  <Image
                    src="/logo.png"
                    alt="Zyntaverse"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-white">
                    ZYNTAVERSE TECHNOLOGIES
                  </div>
                  <div className="font-mono text-xs text-blue-400 font-semibold uppercase tracking-wider">
                    INNOVATE • BUILD • SCALE // CAPABILITY DECK
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadDeck}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 px-3.5 py-2 font-mono text-xs text-blue-200 hover:bg-blue-500/20 transition-all"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Download Deck</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 font-mono text-xs text-slate-300 hover:text-white transition-colors"
                  title="Print / Save PDF"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Print / PDF</span>
                </button>
              </div>
            </div>

            {/* Deck Body Preview */}
            <div className="space-y-6 text-sm text-slate-200">
              {/* Executive Summary */}
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-blue-400 font-semibold">
                  EXECUTIVE SUMMARY
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Zyntaverse Technologies is a premier full-stack software and
                  artificial intelligence engineering studio based in Mumbai, India.
                  We partner with startup founders and enterprise leaders to architect
                  high-conversion web applications, cross-platform mobile apps,
                  autonomous AI workflows, and multi-cloud infrastructure from idea to scale.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {statsData.map((stat) => (
                  <div
                    key={stat.id}
                    className="rounded-2xl border border-white/10 bg-slate-950/60 p-3.5 text-center"
                  >
                    <div className="font-display text-2xl font-bold text-white">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="font-mono text-[10px] uppercase text-slate-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* 12 Core Services Overview */}
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-indigo-400 font-semibold block mb-3">
                  OUR 12 CORE SERVICES (PAMPHLET)
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {servicesData.map((s) => (
                    <div
                      key={s.id}
                      className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 p-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                      <span className="font-medium text-white truncate">
                        {s.number} — {s.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Footer */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-white font-bold flex items-center gap-1.5 justify-center sm:justify-start">
                    <MapPin className="h-3.5 w-3.5 text-blue-400" />
                    <span>Mumbai, India • Global Delivery</span>
                  </div>
                  <div>Direct WhatsApp: +91 7992153750</div>
                  <div>Email: zyntaversetechnologies@gmail.com</div>
                </div>

                <a
                  href="https://wa.me/917992153750?text=Hello%20Zyntaverse%20Technologies,%20I%20reviewed%20your%20Company%20Capability%20Deck%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Initiate Inquiry on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
