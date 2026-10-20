"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  ArrowUp,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { BrandConfig, servicesData } from "@/data/siteData";

interface FooterProps {
  brand: BrandConfig;
  onOpenBrandModal?: () => void;
  onOpenBooking?: () => void;
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#skills" },
  { label: "Why Choose Us", href: "#why-me" },
  { label: "Contact & Inquiry", href: "#contact" },
];

export default function Footer({
  brand,
  onOpenBrandModal,
  onOpenBooking,
}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/90 backdrop-blur-2xl pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Logo & Information */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[1.5px] shadow-neon-cyan">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950 p-1">
                  <Image
                    src="/logo.png"
                    alt={brand.name}
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <div className="font-display text-lg font-bold tracking-wider text-white">
                  {brand.name}
                </div>
                <div className="font-mono text-[11px] text-cyan-400">
                  {brand.tagline}
                </div>
              </div>
            </div>

            <p className="max-w-sm text-sm text-slate-400 leading-relaxed">
              Full-stack technology partner building modern web &amp; mobile
              applications, autonomous AI solutions, and cloud architectures
              from idea to scale.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 font-mono">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-3.5 w-3.5 text-pink-400" />
                <span>{brand.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="h-3.5 w-3.5 text-cyan-400" />
                <a
                  href={`mailto:${brand.email}`}
                  className="hover:text-cyan-300 transition-colors"
                >
                  {brand.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="h-3.5 w-3.5 text-emerald-400" />
                <a
                  href={`https://wa.me/917992153750`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors"
                >
                  {brand.phone} (WhatsApp Available)
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                {
                  icon: MessageCircle,
                  href: "https://wa.me/917992153750",
                  label: "WhatsApp",
                  color: "#10B981",
                },
                {
                  icon: Linkedin,
                  href: brand.linkedin,
                  label: "LinkedIn",
                  color: "#8B5CF6",
                },
                {
                  icon: Mail,
                  href: `mailto:${brand.email}`,
                  label: "Email",
                  color: "#00F0FF",
                },
                {
                  icon: Github,
                  href: brand.github,
                  label: "GitHub",
                  color: "#EC4899",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:-translate-y-0.5 transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-cyan-300">
              Quick Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {onOpenBooking && (
                <li>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-sm text-cyan-400 hover:text-cyan-200 transition-colors"
                  >
                    Book a Strategy Call →
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-purple-300">
              Core Services (Pamphlet)
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {servicesData.slice(0, 10).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-xs text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="font-mono text-[10px] text-slate-500">
                      {s.number}
                    </span>
                    <span className="truncate">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Credit Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">{brand.name}</span>. All
            rights reserved. | Mumbai, India
          </div>

          <div className="font-mono text-xs text-slate-300">
            Smart technology. Real solutions. Lasting impact.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-3.5 py-2 font-mono text-xs text-cyan-300 hover:bg-cyan-500/20 transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
