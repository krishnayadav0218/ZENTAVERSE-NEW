"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  Calendar,
  CheckCircle2,
  RefreshCw,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

interface AIAssistantWidgetProps {
  phoneNumber?: string;
  businessName?: string;
  onOpenBooking?: () => void;
}

interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  recommendation?: {
    service: string;
    stack: string;
    timeline: string;
    budget: string;
  };
}

const quickChips = [
  { label: "💰 Estimate cost & timeline", query: "Can you estimate cost and timeline for my software project?" },
  { label: "📱 Flutter vs React Native", query: "Which mobile app framework do you recommend: Flutter or React Native?" },
  { label: "🤖 AI RAG Copilot capabilities", query: "How do your enterprise AI RAG chatbots and vector search copilots work?" },
  { label: "🚀 Startup MVP sprint scope", query: "What is included in a 3-week startup MVP sprint?" },
  { label: "🔒 NDA & IP ownership", query: "Do you sign strict NDAs and transfer 100% code ownership?" },
  { label: "📅 Book strategy call", query: "I want to schedule a strategy call with a senior engineer." },
];

const whatsappPresets = [
  "Get a Free Quote for My Project",
  "Web & App Development Inquiry",
  "AI & Chatbot Solutions",
  "Book a Free Strategy Call",
];

function generateBotResponse(input: string): {
  text: string;
  recommendation?: {
    service: string;
    stack: string;
    timeline: string;
    budget: string;
  };
} {
  const lower = input.toLowerCase();

  // Mobile App query
  if (lower.includes("mobile") || lower.includes("app") || lower.includes("flutter") || lower.includes("react native") || lower.includes("ios") || lower.includes("android")) {
    return {
      text: "For cross-platform mobile apps, we strongly recommend **Flutter 3.x** or **React Native**. Flutter gives buttery-smooth 60fps native performance with custom shaders, single codebase efficiency for both iOS & Android, offline sync, and instant payment gateways (Razorpay/Stripe).",
      recommendation: {
        service: "Mobile App Engineering (iOS & Android)",
        stack: "Flutter 3.x • Dart • Node.js / FastAPI • Firebase / PostgreSQL",
        timeline: "3 – 6 Weeks (Milestone Sprints)",
        budget: "₹65,000 – ₹1,60,000 ($950 – $2,300)",
      },
    };
  }

  // AI / Bot / RAG query
  if (lower.includes("ai") || lower.includes("bot") || lower.includes("chatbot") || lower.includes("rag") || lower.includes("llm") || lower.includes("copilot")) {
    return {
      text: "Our AI Copilots are built using **Retrieval-Augmented Generation (RAG)** over your PDFs, database catalogs, and internal Notion/Docs with zero-hallucination guardrails. We also build 24/7 autonomous WhatsApp Business API bots and live human-agent handoffs.",
      recommendation: {
        service: "Enterprise AI Copilot & WhatsApp RAG Agent",
        stack: "Python FastAPI • LangChain • OpenAI GPT-4o / Gemini • Pinecone Vector DB",
        timeline: "2 – 4 Weeks",
        budget: "₹50,000 – ₹1,30,000 ($750 – $1,900)",
      },
    };
  }

  // Cost / Budget query
  if (lower.includes("cost") || lower.includes("price") || lower.includes("rate") || lower.includes("budget") || lower.includes("quote") || lower.includes("estimate") || lower.includes("how much")) {
    return {
      text: "At Zyntaverse Technologies, we work on **transparent fixed-milestone pricing** with zero hidden fees. We divide development into weekly agile milestones so you only release payment upon seeing working software deployed to staging.",
      recommendation: {
        service: "Milestone-Based Engineering Sprints",
        stack: "• Starter Module: ₹45k–₹85k ($650–$1.2k)\n• Full MVP Platform: ₹95k–₹1.95L ($1.4k–$2.7k)\n• Enterprise Scale: ₹2.25L+ ($3.2k+)",
        timeline: "2 – 6 Weeks Average",
        budget: "100% Code & IP Ownership Included",
      },
    };
  }

  // NDA / IP / Guarantee query
  if (lower.includes("nda") || lower.includes("ownership") || lower.includes("ip") || lower.includes("security") || lower.includes("guarantee") || lower.includes("warranty")) {
    return {
      text: "Client security is our top priority: \n1. **Strict Bilateral NDA** executed before any technical disclosure.\n2. **100% Legal IP & Code Ownership** transferred to your private GitHub repos.\n3. **30–60 Days Complimentary Post-Launch Warranty** covering all bug fixes and operational monitoring.",
    };
  }

  // Call / Booking query
  if (lower.includes("call") || lower.includes("book") || lower.includes("meeting") || lower.includes("schedule") || lower.includes("consultation")) {
    return {
      text: "We offer **Free 30-Minute Technical Architecture Consultations** directly with our senior engineers via Google Meet, WhatsApp, or Direct Phone. You can book an instant slot right here or chat directly on WhatsApp (+91 7992153750).",
    };
  }

  // Web & Full-stack default
  return {
    text: "Zyntaverse Technologies builds high-throughput Next.js 14 web platforms, multi-tenant B2B SaaS, and custom microservices engineered for <100ms API response times and 99.9% uptime SLA.",
    recommendation: {
      service: "Full-Stack Web & SaaS Platform",
      stack: "Next.js 14 (App Router) • TypeScript • Tailwind CSS • Node.js • PostgreSQL",
      timeline: "3 – 5 Weeks",
      budget: "₹65,000 – ₹1,50,000 ($950 – $2,200)",
    },
  };
}

export default function AIAssistantWidget({
  phoneNumber = "+91 7992153750",
  businessName = "Zyntaverse Technologies",
  onOpenBooking,
}: AIAssistantWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"ai" | "whatsapp">("ai");
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "msg-1",
      sender: "bot",
      text: "👋 Hi! I am the **Zyntaverse AI Engineering Copilot**.\n\nI can calculate your project timeline, recommend the best tech stack, provide instant budget estimates, and connect you directly with our senior team. How can I help you today?",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputVal).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Just now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // Simulate AI synthesis latency
    setTimeout(() => {
      const response = generateBotResponse(query);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.text,
        timestamp: "Just now",
        recommendation: response.recommendation,
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleWhatsAppDirect = (customText?: string) => {
    const text =
      customText ||
      inputVal ||
      "Hello Zyntaverse Technologies! I was chatting with your AI Copilot on your website and would like to discuss my project.";
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 font-sans">
      {/* Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-3 w-[330px] sm:w-[380px] max-w-[calc(100vw-32px)] rounded-3xl border border-blue-500/30 bg-[#080b11]/98 shadow-[0_20px_70px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden flex flex-col h-[460px] sm:h-[480px] max-h-[calc(100vh-105px)]"
          >
            {/* Header */}
            <div className="p-3.5 sm:p-4 border-b border-white/10 bg-slate-950/80 shrink-0">
              <div className="flex items-center justify-between mb-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="relative h-9 w-9 shrink-0 rounded-xl border border-white/15 bg-slate-900 p-1 flex items-center justify-center shadow-md">
                    <Image
                      src="/logo.png"
                      alt={businessName}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-slate-950 bg-emerald-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                        {businessName}
                      </span>
                      <span className="shrink-0 rounded bg-blue-500/20 border border-blue-400/30 px-1 py-0.2 font-mono text-[9px] text-blue-300 font-semibold uppercase">
                        AI
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="truncate">Online • Instant Technical Copilot</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white transition-colors"
                  aria-label="Close Assistant"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Mode Switcher Tabs */}
              <div className="grid grid-cols-2 gap-1 rounded-xl bg-slate-900/90 p-1 border border-white/10 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setMode("ai")}
                  className={`flex items-center justify-center gap-1.5 py-1 rounded-lg transition-all ${
                    mode === "ai"
                      ? "bg-blue-600 text-white font-bold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Bot className="h-3 w-3" />
                  <span>AI Copilot</span>
                </button>

                <button
                  type="button"
                  onClick={() => setMode("whatsapp")}
                  className={`flex items-center justify-center gap-1.5 py-1 rounded-lg transition-all ${
                    mode === "whatsapp"
                      ? "bg-emerald-600 text-white font-bold shadow-md"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <MessageCircle className="h-3 w-3" />
                  <span>WhatsApp Direct</span>
                </button>
              </div>
            </div>

            {/* Chat Body (AI Mode) */}
            {mode === "ai" ? (
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${
                      msg.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl p-3.5 leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-slate-900/90 border border-white/10 text-slate-200 rounded-bl-none shadow-md"
                      }`}
                    >
                      <div className="whitespace-pre-line font-sans">
                        {msg.text}
                      </div>

                      {/* Architecture Recommendation Blueprint Snippet */}
                      {msg.recommendation && (
                        <div className="mt-3 pt-3 border-t border-white/10 space-y-2 font-mono text-[11px] text-slate-300">
                          <div className="text-blue-300 font-bold uppercase text-[10px]">
                            Recommended Scope Blueprint:
                          </div>
                          <div className="bg-slate-950/80 p-2.5 rounded-xl border border-white/10 space-y-1.5">
                            <div>
                              <span className="text-slate-400 block text-[9px] uppercase">Service Track:</span>
                              <span className="text-white font-semibold">{msg.recommendation.service}</span>
                            </div>
                            <div>
                              <span className="text-slate-400 block text-[9px] uppercase">Tech Stack:</span>
                              <span className="text-blue-300">{msg.recommendation.stack}</span>
                            </div>
                            <div className="flex justify-between pt-1 border-t border-white/5">
                              <div>
                                <span className="text-slate-400 block text-[9px] uppercase">Sprint:</span>
                                <span className="text-white">{msg.recommendation.timeline}</span>
                              </div>
                              <div className="text-right">
                                <span className="text-slate-400 block text-[9px] uppercase">Investment:</span>
                                <span className="text-emerald-400 font-bold">{msg.recommendation.budget}</span>
                              </div>
                            </div>
                          </div>

                          <div className="pt-1 flex flex-wrap gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                handleWhatsAppDirect(
                                  `Hi Zyntaverse! I got this scope from your AI Copilot for "${msg.recommendation?.service}" and would like to review the details.`
                                )
                              }
                              className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-[10px] font-bold text-white transition-colors"
                            >
                              <MessageCircle className="h-3 w-3" />
                              <span>Discuss on WhatsApp</span>
                            </button>

                            {onOpenBooking && (
                              <button
                                type="button"
                                onClick={() => {
                                  setIsOpen(false);
                                  onOpenBooking();
                                }}
                                className="inline-flex items-center gap-1 rounded-lg border border-blue-500/40 bg-blue-500/10 px-2.5 py-1.5 text-[10px] text-blue-300 hover:bg-blue-500/20 transition-colors"
                              >
                                <Calendar className="h-3 w-3" />
                                <span>Book Call</span>
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] font-mono text-slate-400 mt-1 px-1">
                      {msg.timestamp}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-center gap-2 rounded-2xl bg-slate-900/90 border border-white/10 p-3 max-w-[120px] text-slate-400 font-mono text-xs">
                    <RefreshCw className="h-3.5 w-3.5 animate-spin text-blue-400" />
                    <span>Thinking...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            ) : (
              /* WhatsApp Direct Mode */
              <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 text-slate-200 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Direct Technical Support Line</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    Chat directly with our senior engineers on WhatsApp. Average response time: <strong>&lt; 15 minutes</strong>.
                  </p>
                </div>

                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 pt-1">
                  Choose an inquiry template:
                </div>

                <div className="space-y-2">
                  {whatsappPresets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleWhatsAppDirect(preset)}
                      className="w-full text-left rounded-xl border border-white/10 bg-slate-900/60 p-3 hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-300 transition-all flex items-center justify-between text-slate-300 group"
                    >
                      <span>{preset}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Chips in AI mode */}
            {mode === "ai" && (
              <div className="px-4 py-2 border-t border-white/5 bg-slate-950/50 flex gap-1.5 overflow-x-auto no-scrollbar">
                {quickChips.map((chip) => (
                  <button
                    key={chip.label}
                    type="button"
                    onClick={() => handleSendMessage(chip.query)}
                    className="shrink-0 rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slate-300 hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/10 transition-all"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 border-t border-white/10 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={
                    mode === "ai"
                      ? "Ask anything about tech, cost, timeline..."
                      : "Type message to send on WhatsApp..."
                  }
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (mode === "ai") handleSendMessage();
                      else handleWhatsAppDirect();
                    }
                  }}
                  className="flex-1 rounded-xl border border-white/15 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                />

                <button
                  type="button"
                  onClick={() => {
                    if (mode === "ai") handleSendMessage();
                    else handleWhatsAppDirect();
                  }}
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white font-bold transition-all shadow-md ${
                    mode === "ai"
                      ? "bg-blue-600 hover:bg-blue-500 shadow-blue-600/30"
                      : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30"
                  }`}
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
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
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white shadow-[0_10px_35px_rgba(59,130,246,0.5)] border border-blue-400/40 focus:outline-none"
        aria-label="Open AI Assistant"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 text-[9px] font-bold text-white items-center justify-center">
            AI
          </span>
        </span>
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Bot className="h-7 w-7 text-white" />
        )}
      </motion.button>
    </div>
  );
}
