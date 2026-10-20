"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Palette,
  Cpu,
  Rocket,
  Cloud,
  ShieldCheck,
  Smartphone,
  Network,
  Bot,
  BarChart3,
  Glasses,
  Lightbulb,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
  X,
  PlusCircle,
  MessageCircle,
} from "lucide-react";
import {
  servicesData,
  additionalServices,
  ServiceItem,
} from "@/data/siteData";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

const serviceIconMap = {
  fullstack: Layers,
  uiux: Palette,
  "custom-software": Cpu,
  mvp: Rocket,
  cloud: Cloud,
  cybersecurity: ShieldCheck,
  mobile: Smartphone,
  api: Network,
  ai: Bot,
  data: BarChart3,
  arvr: Glasses,
  consulting: Lightbulb,
};

interface ServicesSectionProps {
  onOpenBooking?: () => void;
}

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Development",
    "Design",
    "Infrastructure",
    "Marketing & Content",
    "Consulting",
  ];

  const filteredAdditional =
    activeCategory === "All"
      ? additionalServices
      : additionalServices.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-purple-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>OUR CORE SERVICES // 01 — 12</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Smart Technology. Real Solutions.{" "}
            <span className="text-gradient-cyber">Lasting Impact.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90">
            Full-stack digital solutions that help businesses grow, operate
            smarter, and stay ahead in a fast-evolving digital landscape.
          </p>
        </motion.div>

        {/* 12 Core Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const Icon =
              serviceIconMap[service.iconType as keyof typeof serviceIconMap] ||
              Layers;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
              >
                <TiltCard
                  glowColor={`${service.accentColor}35`}
                  intensity={10}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative p-6 sm:p-7 flex flex-col justify-between h-full cursor-pointer group">
                    {/* Ambient corner radial glow */}
                    <div
                      className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${service.glowClass} blur-2xl transition-transform duration-500 group-hover:scale-150`}
                      aria-hidden="true"
                    />

                    <div>
                      {/* Top Row: Icon + Number Badge */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative">
                          <div
                            className="absolute -inset-1 rounded-2xl blur-md opacity-40 transition-opacity group-hover:opacity-80"
                            style={{ backgroundColor: service.accentColor }}
                          />
                          <div
                            className="relative flex h-13 w-13 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/90 shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
                            style={{
                              boxShadow: `0 8px 20px -4px ${service.accentColor}45`,
                            }}
                          >
                            <Icon
                              className="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                              style={{ color: service.accentColor }}
                            />
                          </div>
                        </div>

                        <span
                          className="font-mono text-2xl font-black tracking-tighter opacity-35 group-hover:opacity-85 transition-opacity"
                          style={{ color: service.accentColor }}
                        >
                          {service.number}
                        </span>
                      </div>

                      {/* Title & Short Description */}
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Deliverables snippet */}
                      <ul className="mt-4 space-y-1.5 border-t border-white/10 pt-3">
                        {service.deliverables.slice(0, 2).map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-slate-300/80"
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: service.accentColor }}
                            />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom: Tech tags & Action */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.slice(0, 2).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/[0.04] border border-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <span
                        className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold transition-transform group-hover:translate-x-0.5"
                        style={{ color: service.accentColor }}
                      >
                        <span>Details</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* ADDITIONAL SERVICES SECTION FROM PAMPHLET                 */}
        {/* ========================================================= */}
        <div className="mt-20 glass-panel rounded-3xl p-6 sm:p-10 border border-purple-400/25">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-purple-300 mb-2">
                <PlusCircle className="h-3.5 w-3.5" />
                <span>EXPANDED CAPABILITIES</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Additional Specialized Services
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-400">
                End-to-end digital solutions covering marketing, infrastructure,
                maintenance & creative media.
              </p>
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-mono transition-all ${
                    activeCategory === cat
                      ? "border border-purple-400 bg-purple-500/20 text-purple-200 shadow-sm"
                      : "border border-white/10 bg-slate-950/60 text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {filteredAdditional.map((item) => (
              <div
                key={item.name}
                className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-slate-950/70 p-3 hover:border-cyan-400/40 hover:bg-slate-900/80 transition-all group"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-purple-400/30 bg-purple-500/10 text-purple-300 group-hover:border-cyan-400/40 group-hover:text-cyan-300 transition-colors">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors truncate block">
                    {item.name}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 block">
                    {item.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              Need a bespoke mix of services or a dedicated tech team?
            </div>
            <div className="flex items-center gap-3">
              {onOpenBooking && (
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="rounded-xl border border-cyan-400/30 bg-cyan-500/15 px-4 py-2 font-mono text-xs text-cyan-200 hover:bg-cyan-500/25 transition-colors"
                >
                  Schedule Consultation
                </button>
              )}
              <a
                href="https://wa.me/917992153750?text=Hi%20Zyntaverse%20Technologies,%20I%20would%20like%20to%20discuss%20a%20custom%20service%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-bold text-slate-950 shadow-sm hover:opacity-95"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                <span>Talk to Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl rounded-3xl glass-panel p-6 sm:p-8 border border-cyan-400/40 shadow-neon-cyan max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2">
                <Sparkles className="h-4 w-4" />
                <span>
                  SERVICE SPECIFICATION // {selectedService.number}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white">
                {selectedService.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {selectedService.fullDescription}
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">
                    Core Deliverables
                  </h4>
                  <div className="space-y-2">
                    {selectedService.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-slate-950/60 p-2.5 text-xs text-slate-200"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0"
                          style={{ color: selectedService.accentColor }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                    <div className="font-mono text-[10px] uppercase text-slate-400">
                      Standard Timeline
                    </div>
                    <div className="text-sm font-semibold text-white mt-1 flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-cyan-300" />
                      <span>{selectedService.timeline}</span>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-3">
                    <div className="font-mono text-[10px] uppercase text-slate-400">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedService.technologies.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] text-cyan-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={`https://wa.me/917992153750?text=Hi%20Zyntaverse%20Technologies,%20I%20am%20interested%20in%20your%20service:%20${encodeURIComponent(
                    selectedService.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-sm hover:opacity-95"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Inquire for this on WhatsApp</span>
                </a>

                {onOpenBooking && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(null);
                      onOpenBooking();
                    }}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-2.5 font-mono text-xs text-cyan-300 hover:bg-cyan-500/20"
                  >
                    <span>Book Strategy Call</span>
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
