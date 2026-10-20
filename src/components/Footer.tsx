"use client";

import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  ArrowUp,
  SlidersHorizontal,
} from "lucide-react";
import { BrandConfig, servicesData } from "@/data/siteData";

interface FooterProps {
  brand: BrandConfig;
  onOpenBrandModal: () => void;
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer({ brand, onOpenBrandModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/90 backdrop-blur-2xl pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Logo & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[1px] shadow-neon-cyan">
                <div className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950 font-mono text-sm font-bold text-cyan-300">
                  {brand.shortName.slice(0, 2).toUpperCase()}
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
              Personal technology studio & full-stack software architecture
              partner building modern web platforms, autonomous AI systems, and
              executive data analytics solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Github, href: brand.github, label: "GitHub" },
                { icon: Linkedin, href: brand.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${brand.email}`, label: "Email" },
                { icon: Globe, href: brand.portfolioUrl, label: "Portfolio" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 hover:-translate-y-0.5 transition-all"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}

              <button
                type="button"
                onClick={onOpenBrandModal}
                className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-mono text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-all"
              >
                <SlidersHorizontal className="h-3.5 w-3.5 text-cyan-400" />
                <span>Customize Brand</span>
              </button>
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
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-purple-300">
              Core Services
            </h3>
            <ul className="space-y-2">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
                  >
                    <span className="font-mono text-xs text-slate-500">
                      {s.number}
                    </span>
                    <span>{s.title}</span>
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
            rights reserved.
          </div>

          <div className="font-mono text-xs text-slate-300">
            Designed &amp; Built with ❤️ and Technology
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
