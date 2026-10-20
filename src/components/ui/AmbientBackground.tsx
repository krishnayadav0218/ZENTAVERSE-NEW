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
      {/* Base deep space obsidian gradient */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* Top Prismatic Multi-Color Aurora Ribbon */}
      <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-b from-indigo-950/40 via-purple-950/15 to-transparent" />

      {/* Interactive multi-color mouse-following ambient aura */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(680px circle at ${mousePos.x}% ${mousePos.y}%, rgba(0, 240, 255, 0.08), rgba(168, 85, 247, 0.06) 35%, rgba(236, 72, 153, 0.04) 60%, transparent 80%)`,
        }}
      />

      {/* Rich Multi-Color Glowing Nebula Orbs */}
      <div className="absolute -top-36 -left-36 h-[540px] w-[540px] rounded-full bg-cyan-500/15 blur-[140px] animate-float-orb" />
      <div
        className="absolute top-[12%] -right-36 h-[560px] w-[560px] rounded-full bg-purple-600/15 blur-[150px] animate-float-orb"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-[38%] left-[18%] h-[460px] w-[460px] rounded-full bg-pink-500/12 blur-[145px] animate-float-orb"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute top-[60%] -left-32 h-[500px] w-[500px] rounded-full bg-emerald-500/12 blur-[145px] animate-float-orb"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-[75%] right-[10%] h-[480px] w-[480px] rounded-full bg-amber-500/10 blur-[150px] animate-float-orb"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-blue-600/15 blur-[150px]" />

      {/* Subtle multi-color architectural perspective grid */}
      <div
        className="absolute inset-0 hologram-grid opacity-55"
        style={{
          maskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 75% at 50% 40%, black 35%, transparent 100%)",
        }}
      />
    </div>
  );
}
