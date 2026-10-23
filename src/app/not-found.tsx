import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Sparkles, MessageCircle, Layers } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#080b11] text-slate-100 flex items-center justify-center px-4 overflow-hidden selection:bg-blue-600/30">
      {/* Background radial glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-xl w-full text-center py-16 px-6 sm:px-10 rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        {/* Brand Logo & Pill */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-mono text-blue-300">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>404  PAGE NOT FOUND</span>
          </div>
        </div>

        {/* 404 Glitch Graphic */}
        <div className="relative mb-6">
          <h1 className="font-display text-8xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-700 select-none">
            404
          </h1>
          <div className="absolute inset-x-0 bottom-2 flex justify-center">
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400 bg-slate-950/90 px-3 py-1 rounded-full border border-blue-500/30">
              Navigation Coordinates Lost
            </span>
          </div>
        </div>

        <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
          The requested page drifted into deep space
        </h2>
        <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-md mx-auto">
          The link you followed may be broken, or the page might have been moved
          during our latest architectural upgrade.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:opacity-95 transition-all"
          >
            <Home className="h-4 w-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <Layers className="h-4 w-4 text-blue-400" />
            <span>Explore 12 Services</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-slate-400">
          <span>Need immediate assistance?</span>
          <a
            href="https://wa.me/917992153750?text=Hi%20Zyntaverse%20Technologies,%20I%20hit%20a%20404%20page%20and%20need%20help."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline flex items-center gap-1 font-medium"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
