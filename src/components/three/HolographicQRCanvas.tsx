"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  RoundedBox,
  Torus,
  Cylinder,
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
N:Technologies;Zyntaverse;;;
FN:Zyntaverse Technologies
ORG:Zyntaverse Technologies
TITLE:Full-Stack Technology Partner
TEL;TYPE=CELL,VOICE,WHATSAPP:+917992153750
EMAIL:zyntaversetechnologies@gmail.com
URL:https://www.zyntaverse.com
ADR;TYPE=WORK:;;Mumbai;Maharashtra;;India
NOTE:Innovate • Build • Scale - Web & App Development, AI, Cloud
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
  const ringRef = useRef<THREE.Mesh>(null);
  const [textureUrl, setTextureUrl] = useState<string | null>(null);

  // Generate real QR matrix
  const { voxels, qrSize } = useMemo(() => {
    try {
      const qr = QRCode.create(dataString, {
        errorCorrectionLevel: "L",
      });
      const size = qr.modules.size;
      const data = qr.modules.data;
      const items: {
        x: number;
        y: number;
        isFinder: boolean;
        color: string;
      }[] = [];
      const offset = (size - 1) / 2;
      const step = 2.3 / size;

      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          const isDark = Boolean(data[r * size + c]);
          if (isDark) {
            const isTopLeft = r < 7 && c < 7;
            const isTopRight = r < 7 && c >= size - 7;
            const isBottomLeft = r >= size - 7 && c < 7;
            const isFinder = isTopLeft || isTopRight || isBottomLeft;

            let color = "#38BDF8"; // Cyber sky blue
            if (isFinder) {
              color = isTopLeft
                ? "#00F0FF"
                : isTopRight
                ? "#EC4899"
                : "#10B981";
            } else if ((r + c) % 5 === 0) {
              color = "#8B5CF6";
            }

            items.push({
              x: (c - offset) * step,
              y: (offset - r) * step,
              isFinder,
              color,
            });
          }
        }
      }
      return { voxels: items, qrSize: size };
    } catch {
      return { voxels: [], qrSize: 21 };
    }
  }, [dataString]);

  // Generate crisp high-contrast texture for guaranteed scanner recognition
  useEffect(() => {
    QRCode.toDataURL(dataString, {
      width: 512,
      margin: 2,
      color: {
        dark: "#00F0FFFF",
        light: "#030712E6",
      },
    })
      .then((url) => setTextureUrl(url))
      .catch(() => {});
  }, [dataString]);

  // Load Three.js texture
  const texture = useMemo(() => {
    if (!textureUrl) return null;
    const loader = new THREE.TextureLoader();
    const tex = loader.load(textureUrl);
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipMapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    return tex;
  }, [textureUrl]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (qrGroupRef.current) {
      if (isFrozen) {
        // Center and face camera perfectly for scanning
        qrGroupRef.current.rotation.y = THREE.MathUtils.lerp(
          qrGroupRef.current.rotation.y,
          0,
          0.1
        );
        qrGroupRef.current.rotation.x = THREE.MathUtils.lerp(
          qrGroupRef.current.rotation.x,
          0,
          0.1
        );
      } else {
        qrGroupRef.current.rotation.y =
          Math.sin(t * 0.45) * 0.28 + state.pointer.x * 0.25;
        qrGroupRef.current.rotation.x =
          Math.cos(t * 0.35) * 0.08 + -state.pointer.y * 0.15;
      }
    }
    if (scanBeamRef.current) {
      scanBeamRef.current.position.y = Math.sin(t * 1.8) * 1.25;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.5;
    }
  });

  const step = 2.3 / (qrSize || 25);
  const cubeSize = step * 0.92;

  return (
    <group position={[0, 0.12, 0]}>
      <Float
        speed={isFrozen ? 0 : 1.8}
        rotationIntensity={isFrozen ? 0 : 0.1}
        floatIntensity={isFrozen ? 0 : 0.25}
      >
        <group ref={qrGroupRef}>
          {/* Outer Transparent Glass Hologram Slab */}
          <RoundedBox args={[2.85, 2.85, 0.18]} radius={0.12} smoothness={4}>
            <meshPhysicalMaterial
              color="#040b17"
              metalness={0.25}
              roughness={0.08}
              transmission={0.8}
              thickness={0.5}
              transparent
              opacity={0.88}
            />
          </RoundedBox>

          {/* Scannable Texture Face Plate */}
          {texture && (
            <mesh position={[0, 0, 0.095]}>
              <planeGeometry args={[2.55, 2.55]} />
              <meshBasicMaterial
                map={texture}
                transparent
                opacity={0.92}
                depthWrite={false}
              />
            </mesh>
          )}

          {/* Glowing Neon Frame Border */}
          <RoundedBox args={[2.92, 2.92, 0.04]} radius={0.12} smoothness={4}>
            <meshBasicMaterial
              color="#00F0FF"
              wireframe
              transparent
              opacity={0.4}
            />
          </RoundedBox>

          {/* 3D Volumetric QR Voxel Cubes */}
          {voxels.map((v, i) => (
            <RoundedBox
              key={i}
              args={[cubeSize, cubeSize, v.isFinder ? 0.24 : 0.16]}
              radius={0.02}
              position={[v.x, v.y, 0.07]}
            >
              <meshStandardMaterial
                color={v.color}
                emissive={v.color}
                emissiveIntensity={v.isFinder ? 1.1 : 0.8}
                metalness={0.85}
                roughness={0.15}
              />
            </RoundedBox>
          ))}

          {/* Sweeping Laser Scanner Beam */}
          <mesh ref={scanBeamRef} position={[0, 0, 0.19]}>
            <boxGeometry args={[2.95, 0.04, 0.08]} />
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.95} />
          </mesh>
        </group>
      </Float>

      {/* Multi-Ring Holographic Pedestal Emitter Base */}
      <group position={[0, -1.75, 0]}>
        <Cylinder args={[1.15, 1.4, 0.22, 32]}>
          <meshStandardMaterial
            color="#090f1d"
            metalness={0.9}
            roughness={0.2}
          />
        </Cylinder>
        <Torus
          ref={ringRef}
          args={[1.25, 0.024, 16, 64]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.12, 0]}
        >
          <meshBasicMaterial color="#00F0FF" />
        </Torus>
        <Torus
          args={[0.95, 0.018, 16, 48]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.19, 0]}
        >
          <meshBasicMaterial color="#EC4899" />
        </Torus>
        <Torus
          args={[0.68, 0.015, 16, 48]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.25, 0]}
        >
          <meshBasicMaterial color="#8B5CF6" />
        </Torus>
      </group>

      <Sparkles count={30} scale={4.2} size={2.2} speed={0.4} color="#00F0FF" />
      <Sparkles count={25} scale={4.0} size={2.0} speed={0.35} color="#EC4899" />
      <Sparkles count={20} scale={3.8} size={1.9} speed={0.3} color="#8B5CF6" />
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
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.15, 4.8], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.0} />
        <directionalLight position={[4, 6, 4]} intensity={2.0} color="#00F0FF" />
        <directionalLight
          position={[-4, -2, 3]}
          intensity={1.6}
          color="#EC4899"
        />
        <pointLight position={[0, 2, 2.5]} intensity={1.5} color="#8B5CF6" />
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
