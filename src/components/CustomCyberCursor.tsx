"use client";

import React, { useEffect, useState } from "react";

export default function CustomCyberCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device to prevent rendering custom cursor on mobile / tablets
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(pointer: coarse)").matches
    ) {
      setIsTouchDevice(true);
      return;
    }
    setIsTouchDevice(false);

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          "button, a, input, textarea, select, [role='button'], .clickable"
        );
        setIsHovered(!!interactive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lerp for trailing ring
  useEffect(() => {
    if (isTouchDevice) return;

    let animId: number;
    const followCursor = () => {
      setTrailingPos((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.22,
          y: prev.y + dy * 0.22,
        };
      });
      animId = requestAnimationFrame(followCursor);
    };
    animId = requestAnimationFrame(followCursor);

    return () => cancelAnimationFrame(animId);
  }, [pos, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300">
      {/* Central Precision Dot */}
      <div
        className="fixed top-0 left-0 h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)] will-change-transform"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) scale(${
            isClicking ? 0.6 : 1
          })`,
          transition: "transform 0.05s ease-out",
        }}
      />

      {/* Trailing Precision Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full border will-change-transform transition-all duration-200 ease-out ${
          isHovered
            ? "h-10 w-10 -ml-5 -mt-5 border-blue-400/80 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-110"
            : "h-7 w-7 -ml-3.5 -mt-3.5 border-slate-500/40 bg-white/[0.02] shadow-[0_0_10px_rgba(59,130,246,0.15)] scale-100"
        } ${isClicking ? "scale-75" : ""}`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      />
    </div>
  );
}
