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
      "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white font-medium shadow-[0_1px_2px_rgba(0,0,0,0.5),0_8px_20px_-4px_rgba(59,130,246,0.35)] hover:shadow-[0_1px_2px_rgba(0,0,0,0.5),0_12px_28px_-4px_rgba(59,130,246,0.5)] border border-blue-400/30",
    secondary:
      "bg-slate-900/90 text-slate-100 border border-slate-700/60 hover:border-blue-400/60 hover:bg-slate-800/90 shadow-sm backdrop-blur-xl",
    ghost:
      "bg-white/[0.04] text-slate-200 border border-white/10 hover:border-blue-400/40 hover:text-white hover:bg-white/[0.08] backdrop-blur-md",
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
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
        aria-hidden="true"
      />
      <span className="relative z-10 flex items-center gap-2 drop-shadow-sm font-medium">
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
