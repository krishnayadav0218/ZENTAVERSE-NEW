"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 240, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 240, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || disabled) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.22);
    y.set((e.clientY - centerY) * 0.22);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-[0_0_28px_rgba(0,240,255,0.4),0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_38px_rgba(0,240,255,0.65),0_0_30px_rgba(236,72,153,0.5)] border border-white/30",
    secondary:
      "bg-slate-900/80 text-slate-100 border border-purple-400/45 hover:border-cyan-400/80 hover:bg-slate-900/95 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_rgba(139,92,246,0.2)] hover:shadow-neon-cyan backdrop-blur-xl",
    ghost:
      "bg-white/[0.05] text-slate-200 border border-white/15 hover:border-pink-400/60 hover:text-white hover:bg-white/[0.09] backdrop-blur-md",
  };

  const innerContent = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.97 }}
      className={`relative inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm tracking-wide transition-all duration-300 cursor-pointer select-none overflow-hidden group ${variantStyles[variant]} ${
        disabled ? "opacity-50 pointer-events-none" : ""
      } ${className}`}
    >
      {/* Shimmer sweep on hover */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        aria-hidden="true"
      />
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={onClick}
        className="inline-block focus:outline-none"
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block focus:outline-none"
    >
      {innerContent}
    </button>
  );
}
