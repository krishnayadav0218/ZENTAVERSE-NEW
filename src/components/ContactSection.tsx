"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
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
  MessageCircle,
  Calendar,
  MapPin,
  Maximize2,
  Scan,
  X,
} from "lucide-react";
import QRCode from "qrcode";
import { BrandConfig, servicesData } from "@/data/siteData";
import MagneticButton from "@/components/ui/MagneticButton";

const HolographicQRCanvas = dynamic(
  () => import("@/components/three/HolographicQRCanvas"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[320px] sm:h-[370px] w-full items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-950/50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
          <span className="font-mono text-xs text-cyan-300">
            Initializing Holographic Matrix...
          </span>
        </div>
      </div>
    ),
  }
);

interface ContactSectionProps {
  brand: BrandConfig;
  onOpenBooking?: () => void;
}

const budgetRanges = [
  "₹25,000 – ₹50,000 (Quick Sprint)",
  "₹50,000 – ₹1,50,000 (Full MVP)",
  "₹1,50,000 – ₹5,00,000 (Scale / SaaS)",
  "₹5,00,000+ (Enterprise Custom)",
];

const timelineOptions = [
  "1 – 2 Weeks (Rush Priority)",
  "3 – 6 Weeks (Standard Sprint)",
  "2 – 3 Months (Full Enterprise)",
  "Flexible / Retainer Partnership",
];

const VCARD_DATA = `BEGIN:VCARD
VERSION:3.0
N:Technologies;Zyntaverse;;;
FN:Zyntaverse Technologies
ORG:Zyntaverse Technologies
TITLE:Full-Stack Technology Partner
TEL;TYPE=CELL,VOICE,WHATSAPP:+917992153750
EMAIL:zyntaversetechnologies@gmail.com
URL:https://www.zyntaverse.com
ADR;TYPE=WORK:;;Mumbai;Maharashtra;;India
NOTE:Innovate • Build • Scale - Web & App Development, AI, Cloud
END:VCARD`;

const WHATSAPP_URL =
  "https://wa.me/917992153750?text=Hello%20Zyntaverse%20Technologies,%20I%20would%20like%20to%20connect%20regarding%20a%20project.";

export default function ContactSection({
  brand,
  onOpenBooking,
}: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    selectedService: servicesData[0].title,
    timeline: timelineOptions[1],
    budget: budgetRanges[1],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [scanMode, setScanMode] = useState<"vcard" | "whatsapp">("vcard");
  const [isFrozen, setIsFrozen] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>("");

  useEffect(() => {
    const dataToEncode = scanMode === "whatsapp" ? WHATSAPP_URL : VCARD_DATA;
    QRCode.toDataURL(dataToEncode, {
      width: 400,
      margin: 2,
      color: {
        dark: "#00F0FFFF",
        light: "#030712FF",
      },
    })
      .then((url) => setQrCodeDataUrl(url))
      .catch(() => {});
  }, [scanMode]);

  const handleCopy = (label: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleDownloadVCard = () => {
    const blob = new Blob([VCARD_DATA], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `zyntaverse-technologies.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*New Project Inquiry — Zyntaverse Technologies*
*Client Name:* ${formData.name || "Client"}
*Company:* ${formData.company || "N/A"}
*Email:* ${formData.email || "N/A"}
*Phone/WhatsApp:* ${formData.phone || "N/A"}
*Required Service:* ${formData.selectedService}
*Timeline:* ${formData.timeline}
*Estimated Budget:* ${formData.budget}
*Project Brief:* ${formData.message || "Looking to discuss project requirements."}`;

    window.open(
      `https://wa.me/917992153750?text=${encodeURIComponent(text)}`,
      "_blank"
    );
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
            <span>INITIATE TRANSMISSION // CONTACT & INQUIRY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Let&apos;s Build{" "}
            <span className="text-gradient-cyber">Something Great</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90">
            Have an idea or a project in mind? Let&apos;s connect and turn it into
            an innovative digital reality that scales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* ======================================================= */}
          {/* LEFT: CUSTOM INQUIRY FORM                                */}
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
                  Project Inquiry Transmitted!
                </h3>
                <p className="max-w-md mx-auto text-sm text-slate-300 leading-relaxed">
                  Thank you,{" "}
                  <span className="text-cyan-300 font-semibold">
                    {formData.name || "Partner"}
                  </span>
                  ! Your inquiry for{" "}
                  <span className="text-purple-300 font-semibold">
                    {formData.selectedService}
                  </span>{" "}
                  has been securely logged. Our technical team in Mumbai will
                  respond within 24 hours.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:opacity-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Send Copy to WhatsApp (+91 7992153750)</span>
                  </button>

                  <MagneticButton
                    onClick={() => setSubmitted(false)}
                    variant="secondary"
                  >
                    <span>Submit Another Inquiry</span>
                  </MagneticButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">
                    CUSTOM PROJECT INQUIRY FORM
                  </span>
                  <span className="font-mono text-xs text-emerald-400 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Direct Team Response
                  </span>
                </div>

                {/* Service Selector */}
                <div>
                  <label
                    htmlFor="inquiry-service"
                    className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Select Required Service *
                  </label>
                  <select
                    id="inquiry-service"
                    value={formData.selectedService}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        selectedService: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-white/15 bg-slate-950/90 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title} className="bg-slate-950">
                        {s.number} — {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Your Name *
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
                      Email Address *
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
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 7992153750"
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
                      placeholder="Acme Technologies"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    />
                  </div>
                </div>

                {/* Row 3: Timeline & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-timeline"
                      className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Expected Timeline
                    </label>
                    <select
                      id="contact-timeline"
                      value={formData.timeline}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          timeline: e.target.value,
                        })
                      }
                      className="w-full rounded-xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                    >
                      {timelineOptions.map((t) => (
                        <option key={t} value={t} className="bg-slate-950">
                          {t}
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

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2"
                  >
                    Project Goals &amp; Scope *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    required
                    placeholder="Tell us about your project vision, target users, and key features..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Dual Action CTAs: Submit Form & Direct WhatsApp */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                    <MagneticButton
                      type="submit"
                      variant="primary"
                      className="w-full sm:w-auto"
                    >
                      <span>Submit Inquiry</span>
                      <Send className="h-4 w-4" />
                    </MagneticButton>

                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/15 px-4 py-3 text-xs font-bold text-emerald-300 hover:bg-emerald-500/25 transition-all shadow-sm"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Inquire via WhatsApp</span>
                    </button>
                  </div>

                  {onOpenBooking && (
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="font-mono text-xs text-cyan-300 hover:text-cyan-200 underline underline-offset-4 flex items-center gap-1"
                    >
                      <Calendar className="h-3.5 w-3.5" />
                      <span>Book a Discovery Call Instead →</span>
                    </button>
                  )}
                </div>
              </form>
            )}
          </motion.div>

          {/* ======================================================= */}
          {/* RIGHT: 3D HOLOGRAPHIC SCANNABLE CONTACT KEY             */}
          {/* ======================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* 3D Holographic QR Code Card */}
            <div className="glass-panel rounded-3xl p-6 border border-cyan-400/30 relative overflow-hidden">
              {/* Header with Mode Toggles */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <QrCode className="h-4 w-4 text-cyan-400" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    3D Holographic Contact Key
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      setScanMode(scanMode === "vcard" ? "whatsapp" : "vcard")
                    }
                    className="rounded-lg border border-purple-400/30 bg-purple-500/10 px-2.5 py-1 font-mono text-[11px] text-purple-200 hover:bg-purple-500/20 transition-colors"
                  >
                    {scanMode === "vcard" ? "Switch: WhatsApp" : "Switch: vCard"}
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadVCard}
                    title="Download vCard .vcf file"
                    className="inline-flex items-center gap-1 rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 font-mono text-[11px] text-cyan-200 hover:bg-cyan-500/20 transition-colors"
                  >
                    <Download className="h-3 w-3" />
                    <span>.vcf</span>
                  </button>
                </div>
              </div>

              {/* 3D WebGL Canvas */}
              <HolographicQRCanvas scanMode={scanMode} isFrozen={isFrozen} />

              {/* Scannability Controls Bar */}
              <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-3">
                <button
                  type="button"
                  onClick={() => setIsFrozen(!isFrozen)}
                  className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 font-mono text-[11px] transition-all ${
                    isFrozen
                      ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                      : "border-cyan-400/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20"
                  }`}
                >
                  <Scan className="h-3.5 w-3.5" />
                  <span>{isFrozen ? "Unfreeze 3D" : "Hold & Focus for Scan"}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowQRModal(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-300 hover:text-white"
                >
                  <Maximize2 className="h-3 w-3" />
                  <span>2D High-Res View</span>
                </button>
              </div>

              <div className="mt-2 text-center font-mono text-[10px] text-cyan-300/80">
                POINT PHONE CAMERA AT QR CODE TO AUTO-IMPORT CONTACT DETAILS
              </div>
            </div>

            {/* Direct Communication Channels (Phone/WhatsApp, Email, Mumbai Address, Web) */}
            <div className="glass-panel rounded-3xl p-6 space-y-3">
              <div className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">
                Official Business Channels
              </div>

              {[
                {
                  label: "Phone / WhatsApp",
                  value: brand.phone,
                  href: `https://wa.me/917992153750`,
                  icon: MessageCircle,
                  color: "#10B981",
                },
                {
                  label: "Direct Email",
                  value: brand.email,
                  href: `mailto:${brand.email}`,
                  icon: Mail,
                  color: "#00F0FF",
                },
                {
                  label: "Office Address",
                  value: brand.location,
                  href: "https://maps.google.com/?q=Mumbai,India",
                  icon: MapPin,
                  color: "#EC4899",
                },
                {
                  label: "Website",
                  value: brand.portfolioUrl.replace("https://", ""),
                  href: brand.portfolioUrl,
                  icon: Globe,
                  color: "#38BDF8",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/company/zyntaverse-technologies",
                  href: brand.linkedin,
                  icon: Linkedin,
                  color: "#8B5CF6",
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

      {/* 2D High-Res Scannable QR Code Modal */}
      <AnimatePresence>
        {showQRModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowQRModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-3xl glass-panel p-6 border border-cyan-400/40 text-center space-y-4"
            >
              <button
                type="button"
                onClick={() => setShowQRModal(false)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="font-mono text-xs text-cyan-300 uppercase tracking-widest">
                DIRECT MOBILE SCAN PASS
              </div>

              <h4 className="font-display text-lg font-bold text-white">
                {scanMode === "whatsapp"
                  ? "Connect on WhatsApp"
                  : "Save Contact Pass (vCard)"}
              </h4>

              {qrCodeDataUrl ? (
                <div className="mx-auto flex justify-center p-3 rounded-2xl bg-slate-950 border border-cyan-400/40 shadow-neon-cyan">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={qrCodeDataUrl}
                    alt="Zyntaverse QR Code"
                    className="w-64 h-64 object-contain rounded-xl"
                  />
                </div>
              ) : null}

              <p className="text-xs text-slate-300">
                Point your smartphone camera or Google Lens directly at this QR
                code to {scanMode === "whatsapp" ? "start chatting" : "save Zyntaverse Technologies contact"}.
              </p>

              <div className="pt-2 flex justify-center gap-2">
                <button
                  type="button"
                  onClick={handleDownloadVCard}
                  className="rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-4 py-2 font-mono text-xs text-cyan-300 hover:bg-cyan-500/25"
                >
                  Download .vcf File
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 font-mono text-xs font-bold text-slate-950 hover:opacity-95"
                >
                  Open WhatsApp Directly
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
