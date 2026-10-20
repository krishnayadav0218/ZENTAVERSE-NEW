"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  Video,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { servicesData } from "@/data/siteData";

interface AppointmentBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

const timeSlots = [
  "11:00 AM – 11:30 AM IST",
  "02:00 PM – 02:30 PM IST",
  "04:30 PM – 05:00 PM IST",
  "07:00 PM – 07:30 PM IST",
];

const meetingPlatforms = [
  { id: "google-meet", label: "Google Meet (Video)", icon: Video },
  { id: "whatsapp", label: "WhatsApp Call", icon: MessageCircle },
  { id: "phone", label: "Direct Phone Call", icon: PhoneCall },
];

export default function AppointmentBookingModal({
  isOpen,
  onClose,
  defaultService,
}: AppointmentBookingModalProps) {
  const [selectedService, setSelectedService] = useState(
    defaultService || servicesData[0].title
  );
  const [selectedPlatform, setSelectedPlatform] = useState("google-meet");
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });
  const [isBooked, setIsBooked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `*New Strategy Call Booking — Zyntaverse Technologies*
*Name:* ${formData.name || "Client"}
*Company:* ${formData.company || "N/A"}
*Email:* ${formData.email}
*Phone/WhatsApp:* ${formData.phone}
*Service Topic:* ${selectedService}
*Platform:* ${selectedPlatform.toUpperCase()}
*Date:* ${selectedDate}
*Time Slot:* ${selectedSlot}
*Project Notes:* ${formData.notes || "Ready to discuss requirements."}`;

    window.open(
      `https://wa.me/917992153750?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  const resetForm = () => {
    setIsBooked(false);
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xl overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.94, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl my-8 rounded-3xl glass-panel p-6 sm:p-9 border border-cyan-400/35 shadow-[0_20px_70px_rgba(0,240,255,0.2)]"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {isBooked ? (
              <div className="py-8 text-center space-y-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 shadow-neon-cyan">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                  Strategy Call Scheduled!
                </h3>
                <p className="max-w-md mx-auto text-sm text-slate-300 leading-relaxed">
                  Thank you,{" "}
                  <span className="text-cyan-300 font-semibold">
                    {formData.name || "Partner"}
                  </span>
                  . Your 30-minute discovery session for{" "}
                  <span className="text-purple-300 font-semibold">
                    {selectedService}
                  </span>{" "}
                  on{" "}
                  <span className="text-emerald-300 font-semibold">
                    {selectedDate} at {selectedSlot}
                  </span>{" "}
                  has been initiated.
                </p>

                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 max-w-md mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Platform:</span>
                    <span className="font-semibold text-white uppercase">
                      {selectedPlatform}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">WhatsApp / Phone:</span>
                    <span className="font-semibold text-cyan-300">
                      {formData.phone || "+91 7992153750"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Company:</span>
                    <span className="font-semibold text-white">
                      Zyntaverse Technologies
                    </span>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:opacity-95"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>Send Details on WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white hover:bg-white/10"
                  >
                    <span>Done</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Modal Title */}
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-2">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>ZYNTAVERSE // 1-ON-1 DISCOVERY</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl border border-cyan-400/30 p-1 flex items-center justify-center bg-slate-900">
                      <Image
                        src="/logo.png"
                        alt="Zyntaverse"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      Book a Free Strategy Consultation
                    </h3>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Direct technical & business consultation with the Zyntaverse
                    team. Choose your topic, preferred platform and slot.
                  </p>
                </div>

                {/* Step 1: Select Service */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2">
                    1. Select Service / Project Topic
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                  >
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.number} — {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Step 2: Platform */}
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2">
                    2. Preferred Meeting Platform
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {meetingPlatforms.map((p) => {
                      const Icon = p.icon;
                      const active = selectedPlatform === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setSelectedPlatform(p.id)}
                          className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium transition-all ${
                            active
                              ? "border-cyan-400 bg-cyan-500/15 text-cyan-200 shadow-sm"
                              : "border-white/10 bg-slate-950/60 text-slate-400 hover:border-white/20 hover:text-white"
                          }`}
                        >
                          <Icon className="h-4 w-4 shrink-0" />
                          <span>{p.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Date & Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs uppercase tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-purple-400" />
                      <span>Time Slot (IST)</span>
                    </label>
                    <select
                      value={selectedSlot}
                      onChange={(e) => setSelectedSlot(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Step 4: Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/15 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/15 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-300 mb-1">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 7992153750"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/15 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-300 mb-1">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Startup / Business"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-xl border border-white/15 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-[11px] uppercase tracking-wider text-slate-300 mb-1">
                    What would you like to discuss?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe your project requirements, goals, or timeline..."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full rounded-xl border border-white/15 bg-slate-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-6 py-2.5 text-xs font-bold text-white shadow-[0_0_20px_rgba(0,240,255,0.35)] hover:opacity-95 transition-opacity"
                  >
                    <span>Confirm Strategy Call</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <span className="font-mono text-[11px] text-slate-400">
                    Free 30-Min Discovery • No Obligation
                  </span>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
