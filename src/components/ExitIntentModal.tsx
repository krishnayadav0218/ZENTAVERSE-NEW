"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Zap,
  MessageCircle,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Clock,
} from "lucide-react";

interface ExitIntentModalProps {
  onOpenBooking?: () => void;
}

export default function ExitIntentModal({ onOpenBooking }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only run on desktop devices
    if (
      typeof window === "undefined" ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return;
    }

    const hasShown = sessionStorage.getItem("zyntaverse_exit_intent_shown");
    if (hasShown === "true") return;

    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse moves quickly up towards the browser tab bar
      if (e.clientY <= 12 && !sessionStorage.getItem("zyntaverse_exit_intent_shown")) {
        // Debounce slightly to ensure it's intentional
        timeoutId = setTimeout(() => {
          setIsOpen(true);
          sessionStorage.setItem("zyntaverse_exit_intent_shown", "true");
        }, 150);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBooking = () => {
    setIsOpen(false);
    if (onOpenBooking) onOpenBooking();
  };

  const whatsappUrl = `https://wa.me/917992153750?text=${encodeURIComponent(
    "Hello Zyntaverse Technologies! I was on your website and would like to claim my Free 15-Minute Technical Architecture Blueprint for my upcoming project."
  )}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.85)] overflow-hidden"
          >
            {/* Ambient radial glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-600/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-indigo-600/10 blur-3xl" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors z-20"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-mono text-blue-400 mb-4">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              <span>BEFORE YOU LEAVE // EXCLUSIVE OFFER</span>
            </div>

            {/* Heading */}
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Get a <span className="text-gradient-cyber">Free 15-Minute</span> Architecture Blueprint
            </h3>

            <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
              Don&apos;t build blind. Tell our senior software architects at{" "}
              <strong className="text-white">Zyntaverse Technologies</strong> your vision, and we&apos;ll formulate
              a zero-cost technical roadmap, recommended tech stack, and realistic timeline.
            </p>

            {/* Deliverables Bullet List */}
            <div className="my-5 space-y-2 rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              {[
                "Custom Cloud, Database & Frontend Stack Recommendation",
                "Scalability & API Latency Bottleneck Assessment",
                "Fixed Cost & Milestone Timeline Breakdown",
                "100% Free Consultation • Zero Sales Pressure",
              ].map((bullet) => (
                <div key={bullet} className="flex items-start gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-blue-400" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClose}
                className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Claim Blueprint on WhatsApp (Instant)</span>
              </a>

              {onOpenBooking && (
                <button
                  type="button"
                  onClick={handleBooking}
                  className="w-full inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Schedule 15-Min Strategy Call</span>
                </button>
              )}
            </div>

            <div className="mt-4 text-center">
              <button
                type="button"
                onClick={handleClose}
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
              >
                No thanks, I will explore on my own
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
