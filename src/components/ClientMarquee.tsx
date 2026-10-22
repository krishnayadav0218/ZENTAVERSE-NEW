"use client";

import React from "react";
import { clientLogosData } from "@/data/siteData";
import { Sparkles, ShieldCheck } from "lucide-react";

export default function ClientMarquee() {
  // Duplicate for seamless infinite loop
  const logos = [...clientLogosData, ...clientLogosData, ...clientLogosData];

  return (
    <section aria-label="Trusted Partners" className="relative py-10 z-10 overflow-hidden border-y border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-5 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-blue-300">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          <span className="uppercase tracking-widest text-[11px]">
            TRUSTED PARTNER ECOSYSTEM
          </span>
        </div>
        <div className="flex items-center gap-2 text-slate-400 text-[11px]">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>STARTUPS • HIGH-GROWTH BRANDS • ENTERPRISES</span>
        </div>
      </div>

      {/* Infinite Scrolling Track */}
      <div className="relative w-full overflow-hidden mask-fade-edges">
        <div className="flex w-max items-center gap-6 animate-marquee">
          {logos.map((logo, idx) => (
            <div
              key={`${logo.name}-${idx}`}
              className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-slate-900/60 px-5 py-3 hover:border-blue-500/40 hover:bg-slate-900 transition-all cursor-default group"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border border-white/15 font-mono text-xs font-bold text-blue-300 group-hover:scale-105 transition-transform">
                {logo.iconSymbol}
              </div>
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold text-white group-hover:text-blue-200 transition-colors">
                  {logo.name}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  {logo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
