"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, Home, MessageCircle } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log unexpected client error to monitoring console
    console.error("Zyntaverse App Error Boundary caught:", error);
  }, [error]);

  return (
    <div className="relative min-h-screen bg-[#080b11] text-slate-100 flex items-center justify-center px-4 overflow-hidden selection:bg-rose-600/30">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center py-12 px-6 sm:px-10 rounded-3xl border border-rose-500/20 bg-slate-950/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        {/* Error Icon */}
        <div className="flex justify-center mb-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-500/15 text-rose-400 shadow-[0_0_25px_rgba(244,63,94,0.25)]">
            <AlertTriangle className="h-8 w-8" />
          </div>
        </div>

        <span className="font-mono text-xs uppercase tracking-widest text-rose-400 bg-rose-950/50 px-3 py-1 rounded-full border border-rose-500/30">
          Runtime Exception
        </span>

        <h1 className="font-display text-2xl font-bold text-white mt-4 mb-2">
          Something went sideways
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm mx-auto">
          An unexpected interface anomaly occurred. You can attempt to reload the
          view or return to the safe homepage.
        </p>

        {error?.digest && (
          <div className="mb-6 rounded-xl border border-white/10 bg-slate-900/60 p-2.5 font-mono text-[11px] text-slate-400">
            Incident Hash: {error.digest}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:opacity-95 transition-all"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <Home className="h-4 w-4" />
            <span>Go to Homepage</span>
          </Link>
        </div>

        <div className="mt-8 pt-5 border-t border-white/10 text-xs text-slate-400">
          <span>Continuous issue? </span>
          <a
            href="https://wa.me/917992153750?text=Hi%20Zyntaverse%20Technologies,%20I%20encountered%20a%20system%20error%20on%20the%20website."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:underline inline-flex items-center gap-1 font-medium"
          >
            <MessageCircle className="h-3 w-3" />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
