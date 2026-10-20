"use client";

import React, { useMemo, useRef } from "react";
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

const QR_MATRIX = [
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0],
  [1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1],
];

const DATA_COLORS = ["#8B5CF6", "#EC4899", "#F59E0B", "#38BDF8", "#10B981"];

function HolographicQRObject() {
  const qrGroupRef = useRef<THREE.Group>(null);
  const scanBeamRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  const voxels = useMemo(() => {
    const items: {
      x: number;
      y: number;
      isFinder: boolean;
      color: string;
    }[] = [];
    const size = QR_MATRIX.length;
    const offset = (size - 1) / 2;

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (QR_MATRIX[r][c] === 1) {
          const isTopLeft = r < 5 && c < 5;
          const isTopRight = r < 5 && c > 5;
          const isBottomLeft = r > 5 && c < 5;

          let color = DATA_COLORS[(r * size + c) % DATA_COLORS.length];
          if (isTopLeft) color = "#00F0FF"; // Cyan Finder
          else if (isTopRight) color = "#EC4899"; // Magenta Finder
          else if (isBottomLeft) color = "#10B981"; // Emerald Finder

          items.push({
            x: (c - offset) * 0.21,
            y: (offset - r) * 0.21,
            isFinder: isTopLeft || isTopRight || isBottomLeft,
            color,
          });
        }
      }
    }
    return items;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (qrGroupRef.current) {
      qrGroupRef.current.rotation.y =
        Math.sin(t * 0.55) * 0.38 + state.pointer.x * 0.35;
      qrGroupRef.current.rotation.x =
        Math.cos(t * 0.4) * 0.1 + -state.pointer.y * 0.2;
    }
    if (scanBeamRef.current) {
      scanBeamRef.current.position.y = Math.sin(t * 1.8) * 1.25;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.5;
    }
  });

  return (
    <group position={[0, 0.15, 0]}>
      <Float speed={2} rotationIntensity={0.15} floatIntensity={0.35}>
        <group ref={qrGroupRef}>
          {/* Outer Transparent Glass Hologram Slab */}
          <RoundedBox args={[2.75, 2.75, 0.18]} radius={0.12} smoothness={4}>
            <meshPhysicalMaterial
              color="#071329"
              metalness={0.2}
              roughness={0.08}
              transmission={0.78}
              thickness={0.5}
              transparent
              opacity={0.85}
            />
          </RoundedBox>

          {/* Glowing Neon Frame Border */}
          <RoundedBox args={[2.8, 2.8, 0.04]} radius={0.12} smoothness={4}>
            <meshBasicMaterial
              color="#00F0FF"
              wireframe
              transparent
              opacity={0.35}
            />
          </RoundedBox>

          {/* 3D Multi-Color Volumetric QR Voxel Cubes */}
          {voxels.map((v, i) => (
            <RoundedBox
              key={i}
              args={[0.165, 0.165, v.isFinder ? 0.28 : 0.22]}
              radius={0.025}
              position={[v.x, v.y, 0.04]}
            >
              <meshStandardMaterial
                color={v.color}
                emissive={v.color}
                emissiveIntensity={v.isFinder ? 1.05 : 0.75}
                metalness={0.8}
                roughness={0.15}
              />
            </RoundedBox>
          ))}

          {/* Sweeping Laser Scanner Beam */}
          <mesh ref={scanBeamRef} position={[0, 0, 0.18]}>
            <boxGeometry args={[2.9, 0.05, 0.08]} />
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.95} />
          </mesh>
        </group>
      </Float>

      {/* Multi-Ring Holographic Pedestal Emitter Base */}
      <group position={[0, -1.75, 0]}>
        <Cylinder args={[1.1, 1.35, 0.22, 32]}>
          <meshStandardMaterial
            color="#0f172a"
            metalness={0.9}
            roughness={0.2}
          />
        </Cylinder>
        <Torus
          ref={ringRef}
          args={[1.2, 0.024, 16, 64]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.12, 0]}
        >
          <meshBasicMaterial color="#00F0FF" />
        </Torus>
        <Torus
          args={[0.92, 0.018, 16, 48]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.19, 0]}
        >
          <meshBasicMaterial color="#EC4899" />
        </Torus>
        <Torus
          args={[0.65, 0.015, 16, 48]}
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, 0.25, 0]}
        >
          <meshBasicMaterial color="#F59E0B" />
        </Torus>
      </group>

      <Sparkles count={30} scale={4.2} size={2.2} speed={0.4} color="#00F0FF" />
      <Sparkles count={25} scale={4.0} size={2.0} speed={0.35} color="#EC4899" />
      <Sparkles count={20} scale={3.8} size={1.9} speed={0.3} color="#F59E0B" />
    </group>
  );
}

export default function HolographicQRCanvas() {
  return (
    <div className="relative h-[320px] sm:h-[360px] w-full cursor-grab active:cursor-grabbing">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.2, 4.9], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 6, 4]} intensity={1.8} color="#00F0FF" />
        <directionalLight
          position={[-4, -2, 3]}
          intensity={1.5}
          color="#EC4899"
        />
        <pointLight position={[0, 2, 2]} intensity={1.4} color="#F59E0B" />
        <HolographicQRObject />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
