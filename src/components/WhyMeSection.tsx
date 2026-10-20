"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Users,
  ShieldCheck,
  TrendingUp,
  Clock,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { whyMeData } from "@/data/siteData";
import TiltCard from "@/components/ui/TiltCard";

const cardIcons = [Layers, Users, ShieldCheck, TrendingUp, Clock];

export default function WhyMeSection() {
  return (
    <section id="why-me" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-400/30 bg-pink-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-pink-300 mb-4">
            <Sparkles className="h-3.5 w-3.5" />
            <span>THE ADVANTAGE // WHY CHOOSE US</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Full-Stack Technology Partner,{" "}
            <span className="text-gradient-cyber">From Idea to Scale</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300/90">
            Five core commitments that set Zyntaverse Technologies apart—built
            around speed, architectural rigor, and direct business ROI.
          </p>
        </motion.div>

        {/* Five Premium Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyMeData.map((item, idx) => {
            const Icon = cardIcons[idx] || ShieldCheck;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className={idx === 4 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <TiltCard glowColor={`${item.accentColor}35`} intensity={10}>
                  <div className="p-7 flex flex-col justify-between h-full space-y-6">
                    <div>
                      {/* Top Header & Metric Pill */}
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div
                          className="flex h-13 w-13 items-center justify-center rounded-2xl border border-white/15 bg-slate-950/90 shadow-lg"
                          style={{
                            boxShadow: `0 8px 22px -5px ${item.accentColor}45`,
                          }}
                        >
                          <Icon
                            className="h-6 w-6"
                            style={{ color: item.accentColor }}
                          />
                        </div>

                        <div className="text-right">
                          <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                            {item.metricLabel}
                          </div>
                          <div
                            className="font-mono text-sm font-bold"
                            style={{ color: item.accentColor }}
                          >
                            {item.metricValue}
                          </div>
                        </div>
                      </div>

                      <h3 className="font-display text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs text-cyan-300/90">
                        {item.subtitle}
                      </p>
                      <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <ul className="space-y-2 border-t border-white/10 pt-4">
                      {item.highlights.map((pt) => (
                        <li
                          key={pt}
                          className="flex items-center gap-2.5 text-xs text-slate-200"
                        >
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0"
                            style={{ color: item.accentColor }}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
