"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, ArrowUpRight } from "lucide-react";
import { faqData } from "@/data/siteData";

interface FAQSectionProps {
  onOpenBooking?: () => void;
}

export default function FAQSection({ onOpenBooking }: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faqData[0].id);

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-24 sm:py-32 z-10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-blue-300 mb-4">
            <HelpCircle className="h-3.5 w-3.5" />
            <span>KNOWLEDGE BASE // FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Everything You Need{" "}
            <span className="text-gradient-cyber">To Know</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Clear answers about our development timelines, intellectual property,
            milestones, and ongoing support.
          </p>
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "border-blue-500/40 bg-slate-900/90 shadow-[0_0_20px_rgba(59,130,246,0.12)]"
                    : "border-white/10 bg-slate-950/60 hover:border-white/20 hover:bg-slate-900/50"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className="font-mono text-xs font-bold text-blue-400 opacity-80">
                      0{index + 1}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-blue-500/20 text-blue-300 border-blue-500/30"
                        : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
                        <p>{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 rounded-3xl border border-slate-700/60 bg-gradient-to-r from-blue-500/10 via-indigo-500/05 to-transparent p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-display text-lg font-bold text-white">
              Have a question not answered here?
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Connect with our founders in Mumbai directly on WhatsApp or schedule
              a call.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {onOpenBooking && (
              <button
                type="button"
                onClick={onOpenBooking}
                className="rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-xs font-mono font-semibold text-blue-200 hover:bg-blue-500/20"
              >
                Book Discovery Call
              </button>
            )}

            <a
              href="https://wa.me/917992153750?text=Hi%20Zyntaverse%20Technologies,%20I%20have%20a%20question%20regarding%20a%20potential%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-4 py-2 text-xs font-bold text-slate-950 hover:opacity-95"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
