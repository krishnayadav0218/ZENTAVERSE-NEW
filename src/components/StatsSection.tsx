"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Award, Users, ShieldCheck } from "lucide-react";
import { statsData } from "@/data/siteData";
import TiltCard from "@/components/ui/TiltCard";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const iconMap = {
  projects: Layers,
  experience: Award,
  clients: Users,
  commitment: ShieldCheck,
};

const accentStyles = {
  cyan: {
    border: "border-cyan-400/40",
    text: "text-cyan-300",
    numberGradient: "from-cyan-300 via-sky-400 to-blue-500",
    bg: "bg-gradient-to-br from-cyan-500/25 to-blue-600/10",
    glow: "rgba(0, 240, 255, 0.3)",
    bar: "from-cyan-400 via-blue-500 to-purple-500",
  },
  purple: {
    border: "border-purple-400/40",
    text: "text-purple-300",
    numberGradient: "from-purple-300 via-fuchsia-400 to-pink-500",
    bg: "bg-gradient-to-br from-purple-500/25 to-pink-600/10",
    glow: "rgba(168, 85, 247, 0.3)",
    bar: "from-purple-400 via-pink-500 to-amber-400",
  },
  magenta: {
    border: "border-pink-400/40",
    text: "text-pink-300",
    numberGradient: "from-pink-300 via-rose-400 to-amber-400",
    bg: "bg-gradient-to-br from-pink-500/25 to-rose-600/10",
    glow: "rgba(236, 72, 153, 0.3)",
    bar: "from-pink-500 via-amber-400 to-emerald-400",
  },
  blue: {
    border: "border-emerald-400/40",
    text: "text-emerald-300",
    numberGradient: "from-emerald-300 via-teal-400 to-cyan-400",
    bg: "bg-gradient-to-br from-emerald-500/25 to-cyan-600/10",
    glow: "rgba(16, 185, 129, 0.3)",
    bar: "from-emerald-400 via-cyan-400 to-blue-500",
  },
};

export default function StatsSection() {
  return (
    <section aria-label="Key Statistics" className="relative py-12 sm:py-16 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => {
            const Icon = iconMap[stat.id as keyof typeof iconMap] || Layers;
            const style = accentStyles[stat.accent];

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <TiltCard glowColor={style.glow} intensity={11}>
                  <div className="p-6 sm:p-7 flex flex-col justify-between h-full space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${style.border} ${style.bg} ${style.text} shadow-lg`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span
                        className={`font-mono text-[11px] font-bold uppercase tracking-widest ${style.text}`}
                      >
                        0{index + 1} // METRIC
                      </span>
                    </div>

                    <div>
                      <div
                        className={`font-display text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r ${style.numberGradient} bg-clip-text text-transparent`}
                      >
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                        />
                      </div>
                      <h3 className="mt-1.5 text-base font-bold text-white">
                        {stat.label}
                      </h3>
                      <p className="mt-1 text-xs text-slate-300/80">
                        {stat.sublabel}
                      </p>
                    </div>

                    {/* Multi-color animated energy bar */}
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800/90">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.25 + index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${style.bar}`}
                      />
                    </div>
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
