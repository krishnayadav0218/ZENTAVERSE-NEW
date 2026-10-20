"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Send,
  CheckCircle2,
  Copy,
  Check,
  QrCode,
  Sparkles,
  Download,
} from "lucide-react";
import { BrandConfig } from "@/data/siteData";
import MagneticButton from "@/components/ui/MagneticButton";

const HolographicQRCanvas = dynamic(
  () => import("@/components/three/HolographicQRCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[320px] sm:h-[360px] w-full items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-950/50">
        <div className="h-8 w-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      </div>
    ),
  }
);

interface ContactSectionProps {
  brand: BrandConfig;
}

const projectTypes = [
  "Full-Stack Web Application",
  "AI & Machine Learning Solution",
  "Data Analytics & BI Dashboard",
  "UI/UX & 3D Interactive Website",
  "Database & Backend Architecture",
  "Business Process Automation",
];

const budgetRanges = [
  "< $2,500 (MVP / Sprint)",
  "$2,500 – $7,500 (Full Product)",
  "$7,500 – $15,000+ (Enterprise)",
  "Custom / Retainer Partnership",
];

export default function ContactSection({ brand }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: projectTypes[0],
    budget: budgetRanges[1],
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadVCard = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${brand.name}`,
      `TITLE:${brand.role}`,
      `EMAIL:${brand.email}`,
      `TEL:${brand.phone}`,
      `URL:${brand.portfolioUrl}`,
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcard], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${brand.shortName.toLowerCase()}-contact.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>INITIATE TRANSMISSION // CONTACT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Let&apos;s Build{" "}
            <span className="text-gradient-cyber">Something Great</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90">
            Have an idea, business problem or project in mind? Let&apos;s turn
            it into a powerful digital solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* ======================================================= */}
          {/* LEFT: MODERN INTERACTIVE CONTACT FORM                   */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-9 border border-cyan-400/25"
          >
            {submitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 shadow-neon-cyan">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Project Transmission Received
                </h3>
                <p className="max-w-md mx-auto text-sm text-slate-300 leading-relaxed">
                  Thank you,{" "}
                  <span className="text-cyan-300 font-semibold">
                    {formData.name || "Partner"}
                  </span>
                  ! Your inquiry for{" "}
                  <span className="text-purple-300 font-semibold">
                    {formData.projectType}
                  </span>{" "}
                  has been logged. I will respond within 24 hours.
                </p>
                <div className="pt-4">
                  <MagneticButton
                    onClick={() => setSubmitted(false)}
                    variant="secondary"
                  >
                    <span>Send Another Message</span>
                  </MagneticButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                    PROJECT BRIEF CONFIGURATION
                  </span>
                  <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Direct Architect Response
                  </span>
                </div>

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Company / Organization
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      placeholder="Acme Technologies Inc."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                {/* Row 3: Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    >
                      {projectTypes.map((pt) => (
                        <option key={pt} value={pt} className="bg-slate-950">
                          {pt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Estimated Budget
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    >
                      {budgetRanges.map((b) => (
                        <option key={b} value={b} className="bg-slate-950">
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Project Goals & Message *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell me about your vision, timeline, and key objectives..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <MagneticButton
                    type="submit"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    <span>Start a Conversation →</span>
                    <Send className="h-4 w-4" />
                  </MagneticButton>

                  <span className="font-mono text-[11px] text-slate-400">
                    100% Confidential • NDA Ready
                  </span>
                </div>
              </form>
            )}
          </motion.div>

          {/* ======================================================= */}
          {/* RIGHT: 3D HOLOGRAPHIC QR CODE + DIRECT CONTACT CHANNELS */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Large 3D Holographic QR Code Card */}
            <div className="glass-panel rounded-3xl p-6 border border-cyan-400/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <QrCode className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    3D Holographic Contact Key
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleDownloadVCard}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                >
                  <Download className="h-3 w-3" />
                  <span>Save vCard</span>
                </button>
              </div>

              <HolographicQRCanvas />

              <div className="text-center font-mono text-[11px] text-slate-400">
                ROTATE 3D QR MATRIX • INSTANT DIGITAL BUSINESS PASS
              </div>
            </div>

            {/* Direct Contact Channels (Email, Phone, LinkedIn, GitHub, Portfolio) */}
            <div className="glass-panel rounded-3xl p-6 space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">
                Direct Communication Channels
              </div>

              {[
                {
                  label: "Email",
                  value: brand.email,
                  href: `mailto:${brand.email}`,
                  icon: Mail,
                  color: "#00F0FF",
                },
                {
                  label: "Phone",
                  value: brand.phone,
                  href: `tel:${brand.phone}`,
                  icon: Phone,
                  color: "#38BDF8",
                },
                {
                  label: "LinkedIn",
                  value: brand.linkedin.replace("https://", ""),
                  href: brand.linkedin,
                  icon: Linkedin,
                  color: "#8B5CF6",
                },
                {
                  label: "GitHub",
                  value: brand.github.replace("https://", ""),
                  href: brand.github,
                  icon: Github,
                  color: "#EC4899",
                },
                {
                  label: "Portfolio",
                  value: brand.portfolioUrl.replace("https://", ""),
                  href: brand.portfolioUrl,
                  icon: Globe,
                  color: "#10B981",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/65 px-4 py-3 hover:border-cyan-400/40 transition-colors"
                >
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 min-w-0 flex-1"
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10"
                      style={{
                        backgroundColor: `${item.color}18`,
                        color: item.color,
                      }}
                    >
                      <item.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-white truncate">
                        {item.value}
                      </div>
                    </div>
                  </a>

                  <button
                    type="button"
                    onClick={() => handleCopy(item.label, item.value)}
                    title={`Copy ${item.label}`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {copiedField === item.label ? (
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
