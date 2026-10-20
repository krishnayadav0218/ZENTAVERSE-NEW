"use client";

import React, { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioToggle() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Check saved preference
    const saved = localStorage.getItem("zyntaverse_sound_effects");
    if (saved === "true") {
      setSoundEnabled(true);
    }
  }, []);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  const playChime = (freq: number, duration: number, type: OscillatorType = "sine") => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // AudioContext policy catch
    }
  };

  const playClick = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(1200, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.06);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      // AudioContext policy catch
    }
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem("zyntaverse_sound_effects", String(next));

    if (next) {
      // Play sci-fi startup activation sound
      playChime(523.25, 0.12);
      setTimeout(() => playChime(659.25, 0.12), 100);
      setTimeout(() => playChime(783.99, 0.18), 200);
    }
  };

  // Attach global click sounds when audio is enabled
  useEffect(() => {
    if (!soundEnabled) return;

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        target.closest("button, a, input[type='submit'], [role='button']")
      ) {
        playClick();
      }
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [soundEnabled]);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2">
      <button
        type="button"
        onClick={toggleSound}
        className={`group relative flex items-center gap-2 rounded-2xl border px-3.5 py-2.5 backdrop-blur-xl transition-all duration-300 shadow-lg ${
          soundEnabled
            ? "border-cyan-400/50 bg-slate-950/80 text-cyan-300 shadow-neon-cyan"
            : "border-white/15 bg-slate-950/70 text-slate-400 hover:border-white/30 hover:text-slate-200"
        }`}
        title={soundEnabled ? "Mute Sci-Fi Sound FX" : "Enable Sci-Fi Sound FX"}
      >
        {soundEnabled ? (
          <>
            <Volume2 className="h-4 w-4 text-cyan-400 animate-pulse" />
            <div className="flex items-end gap-0.5 h-3">
              <span className="w-0.5 h-full bg-cyan-400 rounded-full animate-bounce" />
              <span
                className="w-0.5 h-2/3 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: "150ms" }}
              />
              <span
                className="w-0.5 h-4/5 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: "300ms" }}
              />
            </div>
            <span className="font-mono text-[11px] font-semibold text-cyan-300">
              AUDIO ON
            </span>
          </>
        ) : (
          <>
            <VolumeX className="h-4 w-4 text-slate-400 group-hover:text-slate-200" />
            <span className="font-mono text-[11px] text-slate-400 group-hover:text-slate-200">
              SFX OFF
            </span>
          </>
        )}
      </button>
    </div>
  );
}
