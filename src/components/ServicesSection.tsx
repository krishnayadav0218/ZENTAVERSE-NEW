"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  BrainCircuit,
  BarChart3,
  Palette,
  Database,
  Workflow,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
  X,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/siteData";
import TiltCard from "@/components/ui/TiltCard";
import MagneticButton from "@/components/ui/MagneticButton";

const serviceIconMap = {
  fullstack: Layers,
  ai: BrainCircuit,
  data: BarChart3,
  uiux: Palette,
  backend: Database,
  automation: Workflow,
};

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null
  );

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
            <span>CAPABILITIES // 01 — 06</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            High-Impact{" "}
            <span className="text-gradient-cyber">3D Digital Services</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90">
            End-to-end engineering tailored for modern businesses—from scalable
            full-stack platforms to custom AI automation and executive data
            intelligence.
          </p>
        </motion.div>

        {/* 6 Floating 3D Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((service, index) => {
            const Icon = serviceIconMap[service.iconType] || Layers;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
              >
                <TiltCard
                  glowColor={`${service.accentColor}38`}
                  intensity={10}
                  onClick={() => setSelectedService(service)}
                >
                  <div className="relative p-7 flex flex-col justify-between h-full cursor-pointer">
                    {/* Ambient corner radial glow */}
                    <div
                      className={`pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-gradient-to-br ${service.glowClass} blur-2xl transition-transform duration-500 group-hover:scale-150`}
                      aria-hidden="true"
                    />

                    <div>
                      {/* Top Row: 3D Volumetric Icon + Number Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="relative group/icon">
                          {/* 3D layered pedestal behind icon */}
                          <div
                            className="absolute -inset-1 rounded-2xl blur-md opacity-50 transition-opacity group-hover:opacity-90"
                            style={{ backgroundColor: service.accentColor }}
                          />
                          <div
                            className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-slate-950/90 shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3"
                            style={{
                              boxShadow: `inset 0 1px 2px rgba(255,255,255,0.25), 0 10px 25px -5px ${service.accentColor}55`,
                            }}
                          >
                            <Icon
                              className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
                              style={{ color: service.accentColor }}
                            />
                          </div>
                        </div>

                        <span
                          className="font-mono text-2xl font-extrabold tracking-tighter opacity-40 group-hover:opacity-90 transition-opacity"
                          style={{ color: service.accentColor }}
                        >
                          {service.number}
                        </span>
                      </div>

                      {/* Service Title & Short Description */}
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {service.number} — {service.title}
                      </h3>
                      <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      {/* Key Deliverables Preview */}
                      <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                        {service.deliverables.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-slate-300/90"
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

                    {/* Bottom Explore Service Interaction */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/[0.04] border border-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedService(service);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-transform group-hover:translate-x-1"
                        style={{ color: service.accentColor }}
                      >
                        <span>Explore Service</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Service Exploration Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl glass-panel p-6 sm:p-8 border border-cyan-400/35 shadow-neon-cyan"
            >
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span
                  className="rounded-lg px-2.5 py-1 font-mono text-xs font-bold"
                  style={{
                    backgroundColor: `${selectedService.accentColor}22`,
                    color: selectedService.accentColor,
                  }}
                >
                  SERVICE // {selectedService.number}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                  <Clock className="h-3.5 w-3.5 text-cyan-400" />
                  Typical Delivery: {selectedService.timeline}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                {selectedService.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {selectedService.fullDescription}
              </p>

              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-cyan-300 mb-3">
                  Included Deliverables & Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-slate-900/70 p-3 text-xs text-slate-200"
                    >
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 mt-0.5"
                        style={{ color: selectedService.accentColor }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2.5">
                  Core Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/15 bg-white/[0.04] px-3 py-1 font-mono text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <MagneticButton
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  variant="primary"
                >
                  <span>Book {selectedService.title}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </MagneticButton>

                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="text-xs font-mono text-slate-400 hover:text-white"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
