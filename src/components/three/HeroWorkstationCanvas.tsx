"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Html,
  OrbitControls,
  Sparkles,
  RoundedBox,
  Torus,
  Icosahedron,
  Cylinder,
  Sphere,
} from "@react-three/drei";
import * as THREE from "three";

interface WorkstationSceneProps {
  brandName: string;
  isMobile: boolean;
}

function DeveloperWorkstationGroup({
  brandName,
  isMobile,
}: WorkstationSceneProps) {
  const rootRef = useRef<THREE.Group>(null);
  const aiCoreRef = useRef<THREE.Mesh>(null);
  const aiOuterRef = useRef<THREE.Mesh>(null);
  const orbitRing1Ref = useRef<THREE.Group>(null);
  const orbitRing2Ref = useRef<THREE.Group>(null);
  const dbStackRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  // Orbiting Multi-Color Tech Icons
  const orbitingIcons = useMemo(
    () => [
      {
        label: "React",
        badge: "⚛",
        color: "#00F0FF",
        bg: "rgba(0, 240, 255, 0.2)",
        angle: 0,
        radius: 2.9,
        yOffset: 0.55,
      },
      {
        label: "Python",
        badge: "PY",
        color: "#10B981",
        bg: "rgba(16, 185, 129, 0.2)",
        angle: (Math.PI * 2) / 5,
        radius: 2.9,
        yOffset: -0.25,
      },
      {
        label: "JavaScript",
        badge: "JS",
        color: "#F59E0B",
        bg: "rgba(245, 158, 11, 0.22)",
        angle: (Math.PI * 4) / 5,
        radius: 2.9,
        yOffset: 0.75,
      },
      {
        label: "SQL",
        badge: "SQL",
        color: "#A855F7",
        bg: "rgba(168, 85, 247, 0.22)",
        angle: (Math.PI * 6) / 5,
        radius: 2.9,
        yOffset: -0.4,
      },
      {
        label: "AI Core",
        badge: "AI",
        color: "#EC4899",
        bg: "rgba(236, 72, 153, 0.22)",
        angle: (Math.PI * 8) / 5,
        radius: 2.9,
        yOffset: 0.3,
      },
    ],
    []
  );

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (rootRef.current) {
      const targetRotY =
        state.pointer.x * 0.35 + Math.sin(t * 0.35) * 0.12 - 0.22;
      const targetRotX =
        -state.pointer.y * 0.2 + Math.cos(t * 0.25) * 0.05 + 0.08;
      rootRef.current.rotation.y = THREE.MathUtils.lerp(
        rootRef.current.rotation.y,
        targetRotY,
        0.06
      );
      rootRef.current.rotation.x = THREE.MathUtils.lerp(
        rootRef.current.rotation.x,
        targetRotX,
        0.06
      );
    }

    if (headRef.current) {
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        state.pointer.x * 0.25,
        0.08
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        -state.pointer.y * 0.12 + 0.05,
        0.08
      );
    }

    if (aiCoreRef.current) {
      aiCoreRef.current.rotation.y += delta * 1.2;
      aiCoreRef.current.rotation.x += delta * 0.7;
    }
    if (aiOuterRef.current) {
      aiOuterRef.current.rotation.y -= delta * 0.6;
      aiOuterRef.current.rotation.z += delta * 0.4;
    }

    if (orbitRing1Ref.current) {
      orbitRing1Ref.current.rotation.y = t * 0.34;
    }
    if (orbitRing2Ref.current) {
      orbitRing2Ref.current.rotation.z = -t * 0.28;
      orbitRing2Ref.current.rotation.x =
        Math.PI / 2.3 + Math.sin(t * 0.4) * 0.08;
    }

    if (dbStackRef.current) {
      dbStackRef.current.position.y = 0.35 + Math.sin(t * 1.8) * 0.12;
      dbStackRef.current.rotation.y = t * 0.45;
    }
  });

  return (
    <group
      ref={rootRef}
      scale={isMobile ? 0.78 : 0.96}
      position={[0, -0.15, 0]}
    >
      <Float speed={1.6} rotationIntensity={0.12} floatIntensity={0.35}>
        {/* ======================================================= */}
        {/* 1. MULTI-COLOR FLOATING WORKSTATION PLATFORM / DESK     */}
        {/* ======================================================= */}
        <group position={[0, -0.85, 0]}>
          <RoundedBox
            args={[3.55, 0.12, 1.85]}
            radius={0.05}
            smoothness={4}
            position={[0, 0, 0]}
          >
            <meshPhysicalMaterial
              color="#0b132b"
              metalness={0.85}
              roughness={0.16}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </RoundedBox>

          {/* Top Cyan Neon Desk Trim */}
          <RoundedBox
            args={[3.58, 0.028, 1.89]}
            radius={0.02}
            smoothness={2}
            position={[0, 0.025, 0]}
          >
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.85} />
          </RoundedBox>

          {/* Bottom Magenta Neon Underglow Trim */}
          <RoundedBox
            args={[3.52, 0.022, 1.83]}
            radius={0.02}
            smoothness={2}
            position={[0, -0.05, 0]}
          >
            <meshBasicMaterial color="#EC4899" transparent opacity={0.75} />
          </RoundedBox>

          {/* Under-desk Multi-Color Anti-Gravity Thruster Core */}
          <Cylinder args={[1.1, 0.65, 0.22, 32]} position={[0, -0.18, 0]}>
            <meshStandardMaterial
              color="#090d16"
              metalness={0.9}
              roughness={0.2}
            />
          </Cylinder>
          <Torus
            args={[0.95, 0.026, 16, 64]}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -0.28, 0]}
          >
            <meshBasicMaterial color="#00F0FF" />
          </Torus>
          <Torus
            args={[0.72, 0.022, 16, 56]}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -0.38, 0]}
          >
            <meshBasicMaterial color="#EC4899" />
          </Torus>
          <Torus
            args={[0.48, 0.018, 16, 48]}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -0.48, 0]}
          >
            <meshBasicMaterial color="#F59E0B" />
          </Torus>

          {/* RGB Illuminated Holographic Mechanical Keyboard */}
          <group position={[0, 0.09, 0.38]}>
            <RoundedBox args={[1.15, 0.035, 0.38]} radius={0.01} smoothness={2}>
              <meshStandardMaterial
                color="#111827"
                metalness={0.8}
                roughness={0.2}
              />
            </RoundedBox>
            {/* Multi-color RGB key zones */}
            <mesh position={[-0.34, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.32, 0.3]} />
              <meshBasicMaterial color="#00F0FF" transparent opacity={0.6} />
            </mesh>
            <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.34, 0.3]} />
              <meshBasicMaterial color="#8B5CF6" transparent opacity={0.6} />
            </mesh>
            <mesh position={[0.34, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
              <planeGeometry args={[0.32, 0.3]} />
              <meshBasicMaterial color="#EC4899" transparent opacity={0.6} />
            </mesh>
          </group>

          {/* 3D RGB Holographic Computer Tower on Right Desk Corner */}
          <group position={[1.36, 0.42, -0.25]}>
            <RoundedBox args={[0.46, 0.78, 0.68]} radius={0.03} smoothness={4}>
              <meshPhysicalMaterial
                color="#0f172a"
                metalness={0.9}
                roughness={0.15}
                transmission={0.35}
                transparent
                opacity={0.92}
              />
            </RoundedBox>
            {/* Multi-color internal GPU & Neural cores */}
            <RoundedBox
              args={[0.34, 0.11, 0.5]}
              radius={0.02}
              position={[0, 0.2, 0]}
            >
              <meshBasicMaterial color="#00F0FF" />
            </RoundedBox>
            <RoundedBox
              args={[0.34, 0.11, 0.5]}
              radius={0.02}
              position={[0, 0.02, 0]}
            >
              <meshBasicMaterial color="#EC4899" />
            </RoundedBox>
            <RoundedBox
              args={[0.34, 0.11, 0.5]}
              radius={0.02}
              position={[0, -0.16, 0]}
            >
              <meshBasicMaterial color="#10B981" />
            </RoundedBox>
          </group>
        </group>

        {/* ======================================================= */}
        {/* 2. TRIPLE TRANSPARENT GLASS HOLOGRAPHIC MONITORS        */}
        {/* ======================================================= */}
        <group position={[0, 0.18, -0.35]}>
          <Cylinder
            args={[0.06, 0.1, 0.85, 16]}
            position={[0, -0.55, -0.15]}
          >
            <meshStandardMaterial
              color="#1e293b"
              metalness={0.9}
              roughness={0.2}
            />
          </Cylinder>

          {/* Center Ultrawide Transparent Glass Monitor */}
          <RoundedBox args={[2.35, 1.25, 0.05]} radius={0.04} smoothness={4}>
            <meshPhysicalMaterial
              color="#061224"
              metalness={0.2}
              roughness={0.05}
              transmission={0.75}
              thickness={0.4}
              transparent
              opacity={0.88}
            />
          </RoundedBox>

          {/* Glowing Multi-Color Monitor Frame */}
          <RoundedBox
            args={[2.39, 1.29, 0.02]}
            radius={0.04}
            smoothness={4}
            position={[0, 0, -0.01]}
          >
            <meshBasicMaterial
              color="#00F0FF"
              wireframe
              transparent
              opacity={0.32}
            />
          </RoundedBox>

          {/* Multi-Color Syntax Code & Telemetry Bars inside Center Monitor */}
          <mesh position={[-0.55, 0.34, 0.035]}>
            <planeGeometry args={[0.92, 0.055]} />
            <meshBasicMaterial color="#00F0FF" />
          </mesh>
          <mesh position={[-0.65, 0.2, 0.035]}>
            <planeGeometry args={[0.72, 0.04]} />
            <meshBasicMaterial color="#EC4899" />
          </mesh>
          <mesh position={[-0.48, 0.07, 0.035]}>
            <planeGeometry args={[1.05, 0.04]} />
            <meshBasicMaterial color="#F59E0B" />
          </mesh>
          <mesh position={[-0.6, -0.06, 0.035]}>
            <planeGeometry args={[0.82, 0.04]} />
            <meshBasicMaterial color="#A855F7" />
          </mesh>
          <mesh position={[-0.45, -0.2, 0.035]}>
            <planeGeometry args={[1.1, 0.04]} />
            <meshBasicMaterial color="#10B981" />
          </mesh>

          {/* Right half of monitor: Multi-Color Holographic Rings */}
          <mesh position={[0.58, 0.05, 0.035]}>
            <ringGeometry args={[0.25, 0.3, 32]} />
            <meshBasicMaterial color="#00F0FF" side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0.58, 0.05, 0.035]}>
            <ringGeometry args={[0.16, 0.2, 28]} />
            <meshBasicMaterial color="#EC4899" side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[0.58, 0.05, 0.035]}>
            <ringGeometry args={[0.07, 0.11, 24]} />
            <meshBasicMaterial color="#F59E0B" side={THREE.DoubleSide} />
          </mesh>

          {/* Left Tilted Vertical Glass Monitor (Purple/Magenta Theme) */}
          <group position={[-1.58, 0.05, 0.28]} rotation={[0, 0.42, 0]}>
            <RoundedBox args={[0.75, 1.15, 0.04]} radius={0.03} smoothness={4}>
              <meshPhysicalMaterial
                color="#140c2e"
                metalness={0.3}
                roughness={0.1}
                transmission={0.7}
                transparent
                opacity={0.85}
              />
            </RoundedBox>
            <mesh position={[0, 0.35, 0.025]}>
              <planeGeometry args={[0.55, 0.045]} />
              <meshBasicMaterial color="#EC4899" />
            </mesh>
            <mesh position={[-0.05, 0.22, 0.025]}>
              <planeGeometry args={[0.45, 0.035]} />
              <meshBasicMaterial color="#00F0FF" />
            </mesh>
            <mesh position={[0.02, 0.1, 0.025]}>
              <planeGeometry args={[0.5, 0.035]} />
              <meshBasicMaterial color="#F59E0B" />
            </mesh>
            <mesh position={[-0.04, -0.1, 0.025]}>
              <planeGeometry args={[0.5, 0.25]} />
              <meshBasicMaterial color="#A855F7" transparent opacity={0.35} />
            </mesh>
          </group>
        </group>

        {/* ======================================================= */}
        {/* 3. DEVELOPER SITTING AT THE WORKSTATION (CYBER AVATAR)  */}
        {/* ======================================================= */}
        <group position={[0, -0.65, 0.95]}>
          <RoundedBox
            args={[0.78, 1.15, 0.14]}
            radius={0.05}
            position={[0, 0.28, 0.34]}
            rotation={[-0.08, 0, 0]}
          >
            <meshStandardMaterial
              color="#090f1f"
              metalness={0.85}
              roughness={0.25}
            />
          </RoundedBox>
          {/* Chair Multi-Color Neon Spine */}
          <RoundedBox
            args={[0.12, 0.95, 0.04]}
            radius={0.02}
            position={[0, 0.3, 0.42]}
            rotation={[-0.08, 0, 0]}
          >
            <meshBasicMaterial color="#EC4899" />
          </RoundedBox>
          <RoundedBox
            args={[0.76, 0.12, 0.65]}
            radius={0.04}
            position={[0, -0.25, 0.06]}
          >
            <meshStandardMaterial
              color="#0f172a"
              metalness={0.8}
              roughness={0.3}
            />
          </RoundedBox>

          {/* Developer Torso */}
          <RoundedBox
            args={[0.64, 0.74, 0.34]}
            radius={0.12}
            position={[0, 0.22, 0.06]}
          >
            <meshPhysicalMaterial
              color="#111c38"
              metalness={0.75}
              roughness={0.25}
              clearcoat={0.6}
            />
          </RoundedBox>
          <Torus
            args={[0.18, 0.024, 12, 32]}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, 0.58, 0.06]}
          >
            <meshBasicMaterial color="#00F0FF" />
          </Torus>

          {/* Developer Arms */}
          <group position={[-0.38, 0.25, -0.15]} rotation={[0.65, 0.2, 0]}>
            <RoundedBox args={[0.15, 0.58, 0.15]} radius={0.06}>
              <meshStandardMaterial
                color="#1e293b"
                metalness={0.8}
                roughness={0.25}
              />
            </RoundedBox>
          </group>
          <group position={[0.38, 0.25, -0.15]} rotation={[0.65, -0.2, 0]}>
            <RoundedBox args={[0.15, 0.58, 0.15]} radius={0.06}>
              <meshStandardMaterial
                color="#1e293b"
                metalness={0.8}
                roughness={0.25}
              />
            </RoundedBox>
          </group>

          {/* Developer Head & Dual-Tone Visor */}
          <group ref={headRef} position={[0, 0.85, 0.04]}>
            <RoundedBox args={[0.42, 0.44, 0.42]} radius={0.14} smoothness={4}>
              <meshPhysicalMaterial
                color="#0f172a"
                metalness={0.9}
                roughness={0.15}
                clearcoat={1}
              />
            </RoundedBox>
            <RoundedBox
              args={[0.36, 0.12, 0.45]}
              radius={0.04}
              position={[0, 0.03, 0]}
            >
              <meshBasicMaterial color="#00F0FF" />
            </RoundedBox>
          </group>
        </group>

        {/* ======================================================= */}
        {/* 4. AI HOLOGRAM PROJECTOR ON DESK                        */}
        {/* ======================================================= */}
        <group position={[-1.28, -0.22, 0.32]}>
          <Cylinder
            args={[0.32, 0.38, 0.06, 32]}
            position={[0, -0.52, 0]}
          >
            <meshStandardMaterial
              color="#1e293b"
              metalness={0.9}
              roughness={0.2}
            />
          </Cylinder>
          <Torus
            args={[0.28, 0.018, 16, 48]}
            rotation={[Math.PI / 2, 0, 0]}
            position={[0, -0.48, 0]}
          >
            <meshBasicMaterial color="#10B981" />
          </Torus>

          <Icosahedron ref={aiOuterRef} args={[0.36, 1]} position={[0, 0, 0]}>
            <meshBasicMaterial
              color="#00F0FF"
              wireframe
              transparent
              opacity={0.85}
            />
          </Icosahedron>
          <Sphere ref={aiCoreRef} args={[0.18, 24, 24]} position={[0, 0, 0]}>
            <meshBasicMaterial color="#EC4899" />
          </Sphere>
        </group>

        {/* ======================================================= */}
        {/* 5. MULTI-COLOR FLOATING DATABASE CYLINDER STACK         */}
        {/* ======================================================= */}
        <group ref={dbStackRef} position={[2.05, 0.4, 0.35]}>
          {[
            { y: 0, color: "#00F0FF" },
            { y: 0.24, color: "#EC4899" },
            { y: 0.48, color: "#10B981" },
          ].map((ring, idx) => (
            <group key={idx} position={[0, ring.y, 0]}>
              <Cylinder args={[0.34, 0.34, 0.16, 32]}>
                <meshPhysicalMaterial
                  color="#0f172a"
                  metalness={0.9}
                  roughness={0.15}
                  clearcoat={1}
                />
              </Cylinder>
              <Torus
                args={[0.348, 0.015, 12, 48]}
                rotation={[Math.PI / 2, 0, 0]}
                position={[0, 0, 0]}
              >
                <meshBasicMaterial color={ring.color} />
              </Torus>
            </group>
          ))}
        </group>

        {/* ======================================================= */}
        {/* 6. FLOATING MULTI-COLOR HOLOGRAPHIC CODE PANELS         */}
        {/* ======================================================= */}
        {!isMobile && (
          <>
            <Html
              position={[-1.95, 1.35, -0.2]}
              center
              distanceFactor={6.5}
              zIndexRange={[10, 0]}
            >
              <div className="w-56 rounded-xl border border-cyan-400/50 bg-slate-950/90 p-3 backdrop-blur-md shadow-[0_0_30px_rgba(0,240,255,0.28)] select-none pointer-events-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="ml-1 font-mono text-[10px] tracking-wider text-cyan-300 uppercase">
                      neural_ai.py
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-amber-300">
                    99.8%
                  </span>
                </div>
                <pre className="font-mono text-[10px] leading-relaxed text-slate-200">
                  <span className="text-pink-400">async def</span>{" "}
                  <span className="text-cyan-300">scale_idea</span>(vision):
                  {"\n"}
                  {"  "}agent = <span className="text-amber-300">AICore</span>()
                  {"\n"}
                  {"  "}
                  <span className="text-emerald-400">return await</span>{" "}
                  agent.launch()
                </pre>
              </div>
            </Html>

            <Html
              position={[1.95, 1.4, -0.1]}
              center
              distanceFactor={6.5}
              zIndexRange={[10, 0]}
            >
              <div className="w-56 rounded-xl border border-pink-400/50 bg-slate-950/90 p-3 backdrop-blur-md shadow-[0_0_30px_rgba(236,72,153,0.28)] select-none pointer-events-none">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
                  <span className="font-mono text-[10px] tracking-wider text-pink-300 uppercase">
                    {brandName}
                  </span>
                  <span className="rounded bg-emerald-500/20 border border-emerald-400/40 px-1.5 py-0.5 font-mono text-[9px] text-emerald-300">
                    LIVE 3D
                  </span>
                </div>
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div className="flex justify-between text-slate-200">
                    <span>Multi-Cloud Engine</span>
                    <span className="text-amber-300">60 FPS</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full w-[94%] bg-gradient-to-r from-cyan-400 via-purple-500 via-pink-500 to-amber-400" />
                  </div>
                  <div className="text-[9px] text-cyan-300">
                    SELECT * FROM revenue_growth;
                  </div>
                </div>
              </div>
            </Html>
          </>
        )}

        {/* ======================================================= */}
        {/* 7. ANIMATED MULTI-COLOR ORBITAL RINGS & TECH ICONS      */}
        {/* ======================================================= */}
        <group ref={orbitRing1Ref}>
          {orbitingIcons.map((item) => {
            const x = Math.cos(item.angle) * item.radius;
            const z = Math.sin(item.angle) * item.radius;
            return (
              <group key={item.label} position={[x, item.yOffset, z]}>
                <Sphere args={[0.17, 20, 20]}>
                  <meshStandardMaterial
                    color={item.color}
                    emissive={item.color}
                    emissiveIntensity={1.1}
                    metalness={0.7}
                    roughness={0.2}
                  />
                </Sphere>
                <Html center distanceFactor={7.5} zIndexRange={[5, 0]}>
                  <div
                    className="flex items-center gap-1.5 rounded-full border px-2.5 py-1 backdrop-blur-md shadow-lg select-none pointer-events-none whitespace-nowrap"
                    style={{
                      borderColor: `${item.color}88`,
                      backgroundColor: "rgba(3, 7, 18, 0.88)",
                      boxShadow: `0 0 18px ${item.color}55`,
                    }}
                  >
                    <span
                      className="flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      {item.badge}
                    </span>
                    <span className="font-mono text-[10px] font-semibold text-white">
                      {item.label}
                    </span>
                  </div>
                </Html>
              </group>
            );
          })}
        </group>

        {/* Triple Multi-Color Glowing Orbital Rings */}
        <group ref={orbitRing2Ref} rotation={[Math.PI / 2.3, 0.2, 0]}>
          <Torus args={[2.9, 0.014, 16, 100]}>
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.45} />
          </Torus>
          <Torus args={[2.35, 0.012, 16, 90]} rotation={[0.35, 0, 0]}>
            <meshBasicMaterial color="#EC4899" transparent opacity={0.4} />
          </Torus>
          <Torus args={[1.85, 0.01, 16, 80]} rotation={[-0.3, 0.2, 0]}>
            <meshBasicMaterial color="#F59E0B" transparent opacity={0.35} />
          </Torus>
        </group>
      </Float>

      {/* Multi-Color Ambient Floating Particles */}
      <Sparkles
        count={isMobile ? 35 : 70}
        scale={6.5}
        size={2.3}
        speed={0.45}
        color="#00F0FF"
      />
      <Sparkles
        count={isMobile ? 25 : 50}
        scale={6}
        size={2.1}
        speed={0.38}
        color="#EC4899"
      />
      <Sparkles
        count={isMobile ? 20 : 40}
        scale={5.5}
        size={2.0}
        speed={0.32}
        color="#F59E0B"
      />
      <Sparkles
        count={isMobile ? 20 : 40}
        scale={5.5}
        size={1.9}
        speed={0.35}
        color="#10B981"
      />
    </group>
  );
}

export default function HeroWorkstationCanvas({
  brandName,
  isMobile = false,
}: WorkstationSceneProps) {
  return (
    <div className="relative h-[440px] sm:h-[520px] lg:h-[620px] w-full cursor-grab active:cursor-grabbing">
      {/* Vibrant Multi-Color Radial Glow Behind 3D Canvas */}
      <div
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 via-pink-500/15 to-amber-500/15 blur-3xl"
        aria-hidden="true"
      />

      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 1.15, 6.2], fov: 42 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[5, 8, 5]} intensity={1.9} color="#00F0FF" />
        <directionalLight
          position={[-5, 4, -4]}
          intensity={1.6}
          color="#EC4899"
        />
        <pointLight
          position={[0, 1.2, 1.5]}
          intensity={2.2}
          color="#8B5CF6"
          distance={6}
        />
        <pointLight
          position={[2, -0.5, 1.5]}
          intensity={1.8}
          color="#10B981"
          distance={5}
        />
        <pointLight
          position={[-2, -0.5, 1.5]}
          intensity={1.8}
          color="#F59E0B"
          distance={5}
        />

        <DeveloperWorkstationGroup brandName={brandName} isMobile={isMobile} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.85}
          minPolarAngle={Math.PI / 3.2}
          rotateSpeed={0.55}
        />
      </Canvas>

      {/* Interactive 3D HUD Corner Hint */}
      <div className="pointer-events-none absolute bottom-3 right-4 flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/80 px-3.5 py-1 text-[11px] font-mono text-slate-300 backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 animate-ping" />
        <span>DRAG OR MOVE CURSOR TO INSPECT 3D WORKSTATION</span>
      </div>
    </div>
  );
}
