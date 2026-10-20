"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  RoundedBox,
  Torus,
  Cylinder,
  Sphere,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";
import QRCode from "qrcode";
import { BrandConfig } from "@/data/siteData";

interface HolographicQRCanvasProps {
  brand?: BrandConfig;
  scanMode?: "vcard" | "whatsapp";
  isFrozen?: boolean;
}

const VCARD_DATA = `BEGIN:VCARD
VERSION:3.0
FN:Zyntaverse Technologies
ORG:Zyntaverse Technologies
TITLE:Full-Stack Technology Partner
TEL:+917992153750
EMAIL:zyntaversetechnologies@gmail.com
URL:https://www.zyntaverse.com
ADR:;;Mumbai;;;India
END:VCARD`;

const WHATSAPP_DATA =
  "https://wa.me/917992153750?text=Hello%20Zyntaverse%20Technologies,%20I%20would%20like%20to%20connect%20regarding%20a%20project.";

function HolographicQRObject({
  dataString,
  isFrozen,
}: {
  dataString: string;
  isFrozen: boolean;
}) {
  const qrGroupRef = useRef<THREE.Group>(null);
  const scanBeamRef = useRef<THREE.Mesh>(null);
  const orbitGroupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const [qrTexture, setQrTexture] = useState<THREE.CanvasTexture | null>(null);

  // Generate an ultra-fine, attractive, high-contrast holographic canvas texture
  useEffect(() => {
    try {
      const qr = QRCode.create(dataString, {
        errorCorrectionLevel: "M",
      });
      const size = qr.modules.size;
      const data = qr.modules.data;

      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // 1. Deep Obsidian Sci-Fi Canvas Background
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, 1024, 1024);

      // Subtle radial glow behind the QR code
      const radGlow = ctx.createRadialGradient(512, 512, 50, 512, 512, 480);
      radGlow.addColorStop(0, "rgba(0, 240, 255, 0.12)");
      radGlow.addColorStop(0.6, "rgba(139, 92, 246, 0.06)");
      radGlow.addColorStop(1, "rgba(3, 7, 18, 0)");
      ctx.fillStyle = radGlow;
      ctx.fillRect(0, 0, 1024, 1024);

      // 2. High-Tech Outer Tech Frame
      ctx.strokeStyle = "rgba(0, 240, 255, 0.4)";
      ctx.lineWidth = 4;
      ctx.strokeRect(40, 40, 944, 944);

      // Corner Tech Accents
      const cornerLen = 50;
      ctx.strokeStyle = "#00F0FF";
      ctx.lineWidth = 6;
      // Top-Left
      ctx.beginPath();
      ctx.moveTo(35, 35 + cornerLen);
      ctx.lineTo(35, 35);
      ctx.lineTo(35 + cornerLen, 35);
      ctx.stroke();
      // Top-Right
      ctx.beginPath();
      ctx.moveTo(989 - cornerLen, 35);
      ctx.lineTo(989, 35);
      ctx.lineTo(989, 35 + cornerLen);
      ctx.stroke();
      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(35, 989 - cornerLen);
      ctx.lineTo(35, 989);
      ctx.lineTo(35 + cornerLen, 989);
      ctx.stroke();
      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(989 - cornerLen, 989);
      ctx.lineTo(989, 989);
      ctx.lineTo(989, 989 - cornerLen);
      ctx.stroke();

      // Header Tag on Texture
      ctx.font = "bold 22px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(0, 240, 255, 0.85)";
      ctx.fillText("ZYNTAVERSE // 3D PASS", 65, 80);

      ctx.font = "18px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(148, 163, 184, 0.8)";
      ctx.fillText("MUMBAI • GLOBAL", 760, 80);

      // 3. Draw Clean, Fine, Precision QR Modules
      const padding = 110;
      const drawArea = 1024 - padding * 2;
      const step = drawArea / size;
      const modRadius = Math.max(1, step * 0.15);

      // Reserve center for brand emblem
      const centerStart = Math.floor(size / 2) - 3;
      const centerEnd = Math.floor(size / 2) + 3;

      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          const isDark = Boolean(data[r * size + c]);
          if (!isDark) continue;

          // Check if inside center reserved area
          if (
            r >= centerStart &&
            r <= centerEnd &&
            c >= centerStart &&
            c <= centerEnd
          ) {
            continue; // Keep clear for central logo orb
          }

          const x = padding + c * step;
          const y = padding + r * step;

          // Check if within the 3 Finder Pattern zones
          const isTopLeft = r < 7 && c < 7;
          const isTopRight = r < 7 && c >= size - 7;
          const isBottomLeft = r >= size - 7 && c < 7;

          if (isTopLeft || isTopRight || isBottomLeft) {
            ctx.fillStyle = isTopLeft
              ? "#00F0FF"
              : isTopRight
              ? "#EC4899"
              : "#A855F7";
          } else {
            ctx.fillStyle = "#38BDF8"; // Fine Electric Sky Cyan
          }

          // Draw fine, slightly rounded rectangular module
          const dotSize = step * 0.92;
          ctx.beginPath();
          ctx.roundRect(x, y, dotSize, dotSize, modRadius);
          ctx.fill();
        }
      }

      // 4. Center Glowing Cyber Logo Badge
      const cx = 512;
      const cy = 512;
      const radius = 68;

      // Dark circular backing
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = "#030712";
      ctx.fill();

      // Glowing multi-color border
      const gradBorder = ctx.createLinearGradient(
        cx - radius,
        cy - radius,
        cx + radius,
        cy + radius
      );
      gradBorder.addColorStop(0, "#00F0FF");
      gradBorder.addColorStop(0.5, "#8B5CF6");
      gradBorder.addColorStop(1, "#EC4899");
      ctx.strokeStyle = gradBorder;
      ctx.lineWidth = 5;
      ctx.stroke();

      // Stylized "Z" Monogram Symbol
      ctx.font = "bold 56px 'Space Grotesk', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#00F0FF";
      ctx.shadowColor = "rgba(0, 240, 255, 0.8)";
      ctx.shadowBlur = 12;
      ctx.fillText("Z", cx, cy + 2);
      ctx.shadowBlur = 0; // reset

      // 5. Create High-Definition Three.js Canvas Texture
      const texture = new THREE.CanvasTexture(canvas);
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipMapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.needsUpdate = true;
      setQrTexture(texture);
    } catch {
      // Fallback
    }
  }, [dataString]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (qrGroupRef.current) {
      if (isFrozen) {
        // Center and face camera perfectly for instant phone scanning
        qrGroupRef.current.rotation.y = THREE.MathUtils.lerp(
          qrGroupRef.current.rotation.y,
          0,
          0.12
        );
        qrGroupRef.current.rotation.x = THREE.MathUtils.lerp(
          qrGroupRef.current.rotation.x,
          0,
          0.12
        );
      } else {
        qrGroupRef.current.rotation.y =
          Math.sin(t * 0.45) * 0.22 + state.pointer.x * 0.2;
        qrGroupRef.current.rotation.x =
          Math.cos(t * 0.35) * 0.06 + -state.pointer.y * 0.12;
      }
    }

    // Laser beam sweeping vertically
    if (scanBeamRef.current) {
      scanBeamRef.current.position.y = Math.sin(t * 1.6) * 1.25;
    }

    // Orbiting planetary ring (matching Zyntaverse logo ring)
    if (orbitGroupRef.current) {
      orbitGroupRef.current.rotation.z = t * 0.75;
    }

    // Base emitter ring rotation
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.4;
    }
  });

  return (
    <group position={[0, 0.15, 0]}>
      <Float
        speed={isFrozen ? 0 : 1.6}
        rotationIntensity={isFrozen ? 0 : 0.08}
        floatIntensity={isFrozen ? 0 : 0.2}
      >
        <group ref={qrGroupRef}>
          {/* 1. Main Transparent Cyber Glass Slab */}
          <RoundedBox args={[2.8, 2.8, 0.14]} radius={0.12} smoothness={4}>
            <meshPhysicalMaterial
              color="#040a17"
              metalness={0.2}
              roughness={0.06}
              transmission={0.85}
              thickness={0.4}
              transparent
              opacity={0.92}
            />
          </RoundedBox>

          {/* 2. Razor-Sharp Holographic QR Canvas Plate */}
          {qrTexture && (
            <mesh position={[0, 0, 0.075]}>
              <planeGeometry args={[2.55, 2.55]} />
              <meshBasicMaterial
                map={qrTexture}
                transparent
                opacity={0.98}
                depthWrite={false}
              />
            </mesh>
          )}

          {/* 3. Glowing Neon Holographic Frame */}
          <RoundedBox args={[2.86, 2.86, 0.03]} radius={0.12} smoothness={4}>
            <meshBasicMaterial
              color="#00F0FF"
              wireframe
              transparent
              opacity={0.35}
            />
          </RoundedBox>

          {/* 4. Four 3D Floating Corner HUD Brackets */}
          {[
            { x: -1.22, y: 1.22, rotZ: 0 },
            { x: 1.22, y: 1.22, rotZ: -Math.PI / 2 },
            { x: -1.22, y: -1.22, rotZ: Math.PI / 2 },
            { x: 1.22, y: -1.22, rotZ: Math.PI },
          ].map((c, idx) => (
            <group
              key={idx}
              position={[c.x, c.y, 0.1]}
              rotation={[0, 0, c.rotZ]}
            >
              <mesh position={[0.08, 0, 0]}>
                <boxGeometry args={[0.22, 0.035, 0.02]} />
                <meshStandardMaterial
                  color="#00F0FF"
                  emissive="#00F0FF"
                  emissiveIntensity={1.2}
                />
              </mesh>
              <mesh position={[0, -0.08, 0]}>
                <boxGeometry args={[0.035, 0.22, 0.02]} />
                <meshStandardMaterial
                  color="#00F0FF"
                  emissive="#00F0FF"
                  emissiveIntensity={1.2}
                />
              </mesh>
            </group>
          ))}

          {/* 5. Sweeping Neon Laser Beam */}
          <mesh ref={scanBeamRef} position={[0, 0, 0.12]}>
            <boxGeometry args={[2.85, 0.03, 0.05]} />
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.95} />
          </mesh>

          {/* 6. Orbiting Planetary Electron Ring & Orb (From Zyntaverse Logo!) */}
          <group ref={orbitGroupRef} rotation={[0.4, 0.25, 0]}>
            <Torus args={[2.15, 0.022, 16, 80]}>
              <meshStandardMaterial
                color="#00F0FF"
                emissive="#00F0FF"
                emissiveIntensity={1.2}
                transparent
                opacity={0.8}
              />
            </Torus>
            {/* Orbiting Neon Electron Orb */}
            <Sphere args={[0.075, 24, 24]} position={[2.15, 0, 0]}>
              <meshStandardMaterial
                color="#EC4899"
                emissive="#EC4899"
                emissiveIntensity={1.8}
              />
            </Sphere>
          </group>
        </group>
      </Float>

      {/* Futuristic Pedestal Base Emitter */}
      <group position={[0, -1.72, 0]}>
        <Cylinder args={[1.1, 1.35, 0.22, 32]}>
          <meshStandardMaterial
            color="#080e1c"
            metalness={0.9}
            roughness={0.2}
          />
        </Cylinder>
        <Torus
          ref={ringRef}
          args={[1.22, 0.024, 16, 64]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.12, 0]}
        >
          <meshBasicMaterial color="#00F0FF" />
        </Torus>
        <Torus
          args={[0.92, 0.018, 16, 48]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.18, 0]}
        >
          <meshBasicMaterial color="#EC4899" />
        </Torus>
        <Torus
          args={[0.66, 0.015, 16, 48]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.24, 0]}
        >
          <meshBasicMaterial color="#8B5CF6" />
        </Torus>
      </group>

      {/* Atmospheric Particles */}
      <Sparkles count={25} scale={4.0} size={2.0} speed={0.35} color="#00F0FF" />
      <Sparkles count={20} scale={3.8} size={1.8} speed={0.3} color="#EC4899" />
      <Sparkles count={15} scale={3.6} size={1.6} speed={0.25} color="#8B5CF6" />
    </group>
  );
}

export default function HolographicQRCanvas({
  scanMode = "vcard",
  isFrozen = false,
}: HolographicQRCanvasProps) {
  const currentData = scanMode === "whatsapp" ? WHATSAPP_DATA : VCARD_DATA;

  return (
    <div className="relative h-[320px] sm:h-[370px] w-full cursor-grab active:cursor-grabbing">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.12, 4.7], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[4, 6, 4]} intensity={2.2} color="#00F0FF" />
        <directionalLight
          position={[-4, -2, 3]}
          intensity={1.8}
          color="#EC4899"
        />
        <pointLight position={[0, 2, 2.5]} intensity={1.6} color="#8B5CF6" />
        <HolographicQRObject dataString={currentData} isFrozen={isFrozen} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.3}
          minPolarAngle={Math.PI / 2 - 0.3}
        />
      </Canvas>
    </div>
  );
}
