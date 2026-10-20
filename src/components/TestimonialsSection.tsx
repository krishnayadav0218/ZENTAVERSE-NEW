"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Star,
  Quote,
  CheckCircle2,
  Building,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { testimonialsData } from "@/data/siteData";
import TiltCard from "@/components/ui/TiltCard";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>CLIENT REVIEWS // VERIFIED SOCIAL PROOF</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Trusted by Founders,{" "}
            <span className="text-gradient-cyber">Loved by Teams</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90">
            Real feedback from startup founders and engineering leaders across the
            US, UK, UAE, and India who scaled their digital products with Zyntaverse.
          </p>
        </motion.div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <TiltCard glowColor={`${item.accent}30`} intensity={10}>
                <div className="relative p-7 sm:p-8 flex flex-col justify-between h-full space-y-6">
                  {/* Ambient corner light */}
                  <div
                    className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full blur-2xl opacity-20"
                    style={{ backgroundColor: item.accent }}
                  />

                  <div>
                    {/* Top Row: Stars + Project Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>

                      <span
                        className="rounded-full px-3 py-1 font-mono text-[10px] font-semibold border"
                        style={{
                          color: item.accent,
                          borderColor: `${item.accent}40`,
                          backgroundColor: `${item.accent}12`,
                        }}
                      >
                        {item.projectDelivered}
                      </span>
                    </div>

                    {/* Quote Icon & Text */}
                    <div className="relative">
                      <Quote className="h-8 w-8 text-white/10 mb-2" />
                      <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans italic">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                  {/* Client Info Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold text-slate-950 shadow-md"
                        style={{
                          background: `linear-gradient(135deg, ${item.accent}, #ffffff)`,
                        }}
                      >
                        {item.avatarText}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 font-display text-sm font-bold text-white">
                          <span>{item.name}</span>
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        </div>
                        <div className="font-mono text-xs text-slate-400 flex items-center gap-1">
                          <Building className="h-3 w-3" />
                          <span>
                            {item.role}, {item.company}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-slate-400">
                      <MapPin className="h-3 w-3 text-pink-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
