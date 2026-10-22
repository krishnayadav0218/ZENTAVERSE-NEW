"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  businessName?: string;
}

const quickOptions = [
  "Get a Free Quote for My Project",
  "Web & App Development Inquiry",
  "AI & Chatbot Solutions",
  "Book a Free Strategy Call",
];

export default function WhatsAppButton({
  phoneNumber = "+91 7992153750",
  businessName = "Zyntaverse Technologies",
}: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");

  const handleSendMessage = (textToSend?: string) => {
    const finalMsg = textToSend || message || "Hello Zyntaverse Technologies! I would like to inquire about your services.";
    const encoded = encodeURIComponent(finalMsg);
    window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Interactive Chat Popup Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 w-[340px] sm:w-[380px] rounded-3xl border border-emerald-500/30 bg-slate-950/95 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
              <div className="flex items-center gap-3">
                <div className="relative h-11 w-11 rounded-2xl border border-white/15 bg-slate-900 p-1 flex items-center justify-center shadow-md">
                  <Image
                    src="/logo.png"
                    alt={businessName}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-white tracking-wide">
                      {businessName}
                    </span>
                    <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Online • Instant WhatsApp Reply</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:text-white transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="py-4 space-y-3">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-950/30 p-3.5 text-xs text-slate-200 leading-relaxed">
                <p className="font-semibold text-emerald-300 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Welcome to Zyntaverse Technologies
                </p>
                <p>
                  👋 Hi! We build innovative digital solutions from idea to scale. How can our team help your business today?
                </p>
              </div>

              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 pt-1">
                Quick Inquiries:
              </div>

              <div className="flex flex-wrap gap-1.5">
                {quickOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleSendMessage(opt)}
                    className="rounded-xl border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-left text-xs text-slate-300 hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all"
                  >
                    {opt} →
                  </button>
                ))}
              </div>
            </div>

            {/* Input & Direct Send */}
            <div className="border-t border-white/10 pt-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSendMessage();
                  }}
                  className="flex-1 rounded-xl border border-white/15 bg-slate-900/90 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                />
                <button
                  type="button"
                  onClick={() => handleSendMessage()}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold hover:opacity-95 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-opacity"
                  title="Send via WhatsApp"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2 text-center text-[10px] font-mono text-slate-400">
                Direct WhatsApp Channel: {phoneNumber}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-600 text-white shadow-[0_0_30px_rgba(16,185,129,0.55)] border border-emerald-300/40 focus:outline-none"
        aria-label="Open WhatsApp Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-400 text-[10px] font-bold text-slate-950 items-center justify-center">
            1
          </span>
        </span>
        <MessageCircle className="h-7 w-7 fill-white" />
      </motion.button>
    </div>
  );
}
