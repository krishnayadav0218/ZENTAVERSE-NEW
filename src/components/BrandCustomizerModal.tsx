"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, RotateCcw, Check } from "lucide-react";
import Image from "next/image";
import { BrandConfig, defaultBrandConfig } from "@/data/siteData";

interface BrandCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: BrandConfig;
  onSaveBrand: (updated: BrandConfig) => void;
}

export default function BrandCustomizerModal({
  isOpen,
  onClose,
  brand,
  onSaveBrand,
}: BrandCustomizerModalProps) {
  const [draft, setDraft] = useState<BrandConfig>(brand);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveBrand(draft);
    onClose();
  };

  const handleReset = () => {
    setDraft(defaultBrandConfig);
    onSaveBrand(defaultBrandConfig);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xl"
        >
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl glass-panel p-6 sm:p-8 border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-2">
              <Sparkles className="h-4 w-4" />
              <span>PERSONALIZE BRAND IDENTITY</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl border border-white/15 p-1 flex items-center justify-center bg-slate-900">
                <Image
                  src="/logo.png"
                  alt="Zyntaverse"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Configure Brand Identity
              </h3>
            </div>
            <p className="mt-1 text-xs text-slate-400">
              Updates the 3D Workstation Hologram, Navbar, Profile Card, Contact
              Channels, and vCard in real time.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block font-mono text-[11px] uppercase text-slate-300 mb-1">
                    Brand / Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={draft.name}
                    onChange={(e) =>
                      setDraft({ ...draft, name: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase text-slate-300 mb-1">
                    Short Badge
                  </label>
                  <input
                    type="text"
                    required
                    value={draft.shortName}
                    onChange={(e) =>
                      setDraft({ ...draft, shortName: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase text-slate-300 mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  required
                  value={draft.tagline}
                  onChange={(e) =>
                    setDraft({ ...draft, tagline: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/15 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-[11px] uppercase text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={draft.email}
                    onChange={(e) =>
                      setDraft({ ...draft, email: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[11px] uppercase text-slate-300 mb-1">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="text"
                    required
                    value={draft.phone}
                    onChange={(e) =>
                      setDraft({
                        ...draft,
                        phone: e.target.value,
                        whatsapp: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase text-slate-300 mb-1">
                  Location / Office Address
                </label>
                <input
                  type="text"
                  required
                  value={draft.location}
                  onChange={(e) =>
                    setDraft({ ...draft, location: e.target.value })
                  }
                  className="w-full rounded-xl border border-white/15 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset Default</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/25 transition-all"
                >
                  <Check className="h-4 w-4" />
                  <span>Apply Brand</span>
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
