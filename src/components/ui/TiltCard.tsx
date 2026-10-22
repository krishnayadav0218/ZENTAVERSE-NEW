"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  secondaryGlowColor?: string;
  intensity?: number;
  onClick?: () => void;
}

export default function TiltCard({
  children,
  className = "",
  glowColor = "rgba(59, 130, 246, 0.18)",
  secondaryGlowColor = "rgba(99, 102, 241, 0.12)",
  intensity = 10,
  onClick,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 22, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(smoothX, [0, 1], [-intensity, intensity]);

  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(Math.max(0, Math.min(1, px)));
    y.set(Math.max(0, Math.min(1, py)));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="perspective-1000 h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ z: 14, scale: 1.012 }}
        transition={{ duration: 0.25 }}
        className={`relative h-full rounded-2xl glass-panel-interactive overflow-hidden group ${className}`}
      >
        {/* Dynamic cursor-following atmospheric spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(360px circle at ${gx} ${gy}, ${glowColor}, ${secondaryGlowColor} 45%, transparent 75%)`
            ),
          }}
        />

        {/* Refined top edge accent highlight */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-blue-500/50 via-indigo-500/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity"
          aria-hidden="true"
        />

        {/* Subtle ambient corner glow */}
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-32 w-32 rounded-full opacity-20 group-hover:opacity-40 transition-opacity blur-2xl"
          style={{ backgroundColor: glowColor }}
          aria-hidden="true"
        />

        {/* Content container with subtle 3D elevation */}
        <div
          className="relative z-10 h-full"
          style={{
            transform: isHovered ? "translateZ(14px)" : "translateZ(0px)",
            transition: "transform 0.25s ease-out",
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
}
