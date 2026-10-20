"use client";

import React, { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Line, OrbitControls, Sparkles, Sphere, Icosahedron } from "@react-three/drei";
import * as THREE from "three";
import { TechNode } from "@/data/siteData";

interface TechCloudCanvasProps {
  nodes: TechNode[];
  activeCategory: string;
  selectedNode: TechNode | null;
  onSelectNode: (node: TechNode) => void;
  isMobile?: boolean;
}

function TechConstellationScene({
  nodes,
  activeCategory,
  selectedNode,
  onSelectNode,
  isMobile,
}: TechCloudCanvasProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Compute Fibonacci sphere coordinates for all 21 technologies
  const positionedNodes = useMemo(() => {
    const count = nodes.length;
    const radius = isMobile ? 2.55 : 3.15;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    return nodes.map((node, i) => {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi) * 0.82;
      const z = radius * Math.sin(phi) * Math.sin(theta);
      return {
        ...node,
        position: new THREE.Vector3(x, y, z),
      };
    });
  }, [nodes, isMobile]);

  // Compute glowing connection lines between related technologies
  const edges = useMemo(() => {
    const map = new Map(positionedNodes.map((n) => [n.id, n]));
    const pairs: {
      start: THREE.Vector3;
      end: THREE.Vector3;
      highlighted: boolean;
      color: string;
    }[] = [];
    const seen = new Set<string>();

    positionedNodes.forEach((source) => {
      source.connections.forEach((targetId) => {
        const key = [source.id, targetId].sort().join("--");
        if (seen.has(key)) return;
        const target = map.get(targetId);
        if (!target) return;
        seen.add(key);

        const isSelectedEdge =
          selectedNode?.id === source.id || selectedNode?.id === target.id;
        const isCategoryMatch =
          activeCategory === "All" ||
          source.category === activeCategory ||
          target.category === activeCategory;

        pairs.push({
          start: source.position,
          end: target.position,
          highlighted: Boolean(isSelectedEdge),
          color: isSelectedEdge
            ? "#00F0FF"
            : isCategoryMatch
            ? "#6366F1"
            : "#1E293B",
        });
      });
    });

    return pairs;
  }, [positionedNodes, selectedNode, activeCategory]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.16;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        state.pointer.y * 0.18,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Holographic Neural Core */}
      <Icosahedron args={[0.75, 1]}>
        <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.25} />
      </Icosahedron>
      <Sphere args={[0.38, 24, 24]}>
        <meshStandardMaterial
          color="#8B5CF6"
          emissive="#8B5CF6"
          emissiveIntensity={0.9}
          roughness={0.2}
        />
      </Sphere>

      {/* Glowing Neural Connection Lines */}
      {edges.map((edge, idx) => (
        <Line
          key={idx}
          points={[edge.start, edge.end]}
          color={edge.color}
          lineWidth={edge.highlighted ? 2.2 : 1}
          transparent
          opacity={edge.highlighted ? 0.85 : 0.28}
        />
      ))}

      {/* 21 Floating 3D Technology Nodes */}
      {positionedNodes.map((node) => {
        const isMatch =
          activeCategory === "All" || node.category === activeCategory;
        const isSelected = selectedNode?.id === node.id;
        const isConnectedToSelected =
          selectedNode?.connections.includes(node.id) ?? false;

        return (
          <group key={node.id} position={node.position}>
            <Sphere
              args={[isSelected ? 0.22 : 0.14, 20, 20]}
              onClick={(e) => {
                e.stopPropagation();
                onSelectNode(node);
              }}
            >
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={isSelected ? 1.5 : isMatch ? 0.85 : 0.15}
                metalness={0.8}
                roughness={0.2}
              />
            </Sphere>

            <Html center distanceFactor={8} zIndexRange={[10, 0]}>
              <button
                type="button"
                onClick={() => onSelectNode(node)}
                className={`group flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-mono transition-all duration-300 whitespace-nowrap ${
                  isSelected
                    ? "scale-110 border-cyan-300 bg-slate-900/95 text-white shadow-[0_0_20px_rgba(0,240,255,0.6)]"
                    : isConnectedToSelected
                    ? "border-purple-400/70 bg-slate-900/90 text-cyan-200"
                    : isMatch
                    ? "border-white/15 bg-slate-950/80 text-slate-200 hover:border-cyan-400/60 hover:text-white"
                    : "border-white/5 bg-slate-950/40 text-slate-500 opacity-45"
                }`}
              >
                <span
                  className="h-2 w-2 rounded-full"
                  style={{
                    backgroundColor: node.color,
                    boxShadow: `0 0 8px ${node.color}`,
                  }}
                />
                <span>{node.name}</span>
              </button>
            </Html>
          </group>
        );
      })}

      <Sparkles
        count={isMobile ? 35 : 70}
        scale={7}
        size={1.8}
        speed={0.3}
        color="#00F0FF"
      />
    </group>
  );
}

export default function TechCloudCanvas(props: TechCloudCanvasProps) {
  return (
    <div className="relative h-[440px] sm:h-[520px] w-full rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl overflow-hidden cursor-grab active:cursor-grabbing">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.12),transparent_65%)]"
        aria-hidden="true"
      />

      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.4, 7.2], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#00F0FF" />
        <pointLight position={[-5, -5, -3]} intensity={1.6} color="#8B5CF6" />

        <TechConstellationScene {...props} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.6}
        />
      </Canvas>

      <div className="pointer-events-none absolute bottom-3 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-[11px] font-mono text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" />
        <span>INTERACTIVE 3D NEURAL TECH CLOUD • CLICK ANY NODE TO INSPECT</span>
      </div>
    </div>
  );
}
