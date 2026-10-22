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
    border: "border-blue-500/30",
    text: "text-blue-400",
    numberGradient: "from-white via-slate-100 to-blue-200",
    bg: "bg-blue-500/10",
    glow: "rgba(59, 130, 246, 0.2)",
    bar: "from-blue-600 to-indigo-600",
  },
  purple: {
    border: "border-indigo-500/30",
    text: "text-indigo-400",
    numberGradient: "from-white via-slate-100 to-indigo-200",
    bg: "bg-indigo-500/10",
    glow: "rgba(99, 102, 241, 0.2)",
    bar: "from-indigo-600 to-blue-600",
  },
  magenta: {
    border: "border-sky-500/30",
    text: "text-sky-400",
    numberGradient: "from-white via-slate-100 to-sky-200",
    bg: "bg-sky-500/10",
    glow: "rgba(14, 165, 233, 0.2)",
    bar: "from-sky-500 to-blue-600",
  },
  blue: {
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    numberGradient: "from-white via-slate-100 to-emerald-200",
    bg: "bg-emerald-500/10",
    glow: "rgba(16, 185, 129, 0.2)",
    bar: "from-emerald-500 to-teal-500",
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
                <TiltCard glowColor={style.glow} intensity={10}>
                  <div className="p-6 sm:p-7 flex flex-col justify-between h-full space-y-4">
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${style.border} ${style.bg} ${style.text} shadow-sm`}
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
                      <p className="mt-1 text-xs text-slate-300">
                        {stat.sublabel}
                      </p>
                    </div>

                    <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${style.bar}`}
                        style={{ width: `${Math.min(100, stat.value * 2)}%` }}
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
