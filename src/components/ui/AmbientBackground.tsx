"use client";

import React, { useEffect, useState } from "react";

export default function AmbientBackground() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Base deep obsidian canvas */}
      <div className="absolute inset-0 bg-[#080b11]" />

      {/* Top subtle sapphire atmosphere */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-gradient-to-b from-blue-950/20 via-indigo-950/10 to-transparent" />

      {/* Interactive mouse-following atmospheric glow */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(59, 130, 246, 0.06), rgba(99, 102, 241, 0.03) 40%, transparent 75%)`,
        }}
      />

      {/* Refined Atmospheric Lighting Pools */}
      <div className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-blue-600/10 blur-[150px] animate-float-orb" />
      <div
        className="absolute top-[18%] -right-32 h-[540px] w-[540px] rounded-full bg-indigo-600/08 blur-[160px] animate-float-orb"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-[52%] left-[12%] h-[460px] w-[460px] rounded-full bg-sky-600/06 blur-[150px] animate-float-orb"
        style={{ animationDelay: "6s" }}
      />
      <div className="absolute -bottom-40 left-1/3 h-[500px] w-[500px] rounded-full bg-blue-900/10 blur-[150px]" />

      {/* Subtle modern architectural perspective grid */}
      <div
        className="absolute inset-0 hologram-grid opacity-35"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 25%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 25%, transparent 100%)",
        }}
      />
    </div>
  );
}
