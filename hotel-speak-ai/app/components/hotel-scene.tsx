"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, RoundedBox, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Group, Mesh } from "three";

function LobbyScene() {
  const signRef = useRef<Group>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (signRef.current) {
      signRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.12;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.18;
    }
  });

  return (
    <>
      <ambientLight intensity={1.8} color="#dffcff" />
      <directionalLight position={[4, 6, 5]} intensity={3.5} color="#fff4cf" />
      <pointLight position={[-4, 2, 2]} intensity={14} distance={12} color="#22d3ee" />
      <pointLight position={[4, 1, -1]} intensity={10} distance={10} color="#f59e0b" />

      <Sparkles count={70} scale={[8, 5, 5]} size={2.2} speed={0.35} color="#9ff8ff" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={signRef} position={[0, 0.6, 0]}>
          <RoundedBox args={[2.7, 1.15, 0.18]} radius={0.12} smoothness={5}>
            <meshStandardMaterial color="#102b32" metalness={0.65} roughness={0.25} />
          </RoundedBox>
          <mesh position={[0, 0.12, 0.12]}>
            <boxGeometry args={[1.9, 0.06, 0.03]} />
            <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={3} />
          </mesh>
          <mesh position={[0, -0.2, 0.12]}>
            <boxGeometry args={[1.25, 0.035, 0.03]} />
            <meshStandardMaterial color="#fcd34d" emissive="#f59e0b" emissiveIntensity={2} />
          </mesh>
        </group>
      </Float>

      <mesh ref={ringRef} position={[0, -0.35, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.05, 0.025, 12, 80]} />
        <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={2} transparent opacity={0.8} />
      </mesh>

      {[-1.35, 0, 1.35].map((x, index) => (
        <Float key={x} speed={1 + index * 0.2} floatIntensity={0.25} rotationIntensity={0.1}>
          <RoundedBox args={[0.9, 1.35, 0.16]} radius={0.08} smoothness={4} position={[x, -1.05 + (index % 2) * 0.15, 0.15]} rotation={[0, 0, (index - 1) * 0.08]}>
            <meshStandardMaterial color={index === 1 ? "#164e63" : "#123039"} metalness={0.45} roughness={0.3} />
          </RoundedBox>
          <mesh position={[x, -0.95 + (index % 2) * 0.15, 0.27]} rotation={[0, 0, (index - 1) * 0.08]}>
            <boxGeometry args={[0.62, 0.04, 0.025]} />
            <meshStandardMaterial color={index === 1 ? "#fcd34d" : "#67e8f9"} emissive={index === 1 ? "#f59e0b" : "#22d3ee"} emissiveIntensity={2} />
          </mesh>
        </Float>
      ))}

      <mesh position={[0, -1.65, -0.35]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 5]} />
        <meshStandardMaterial color="#071114" metalness={0.15} roughness={0.7} />
      </mesh>
    </>
  );
}

export default function HotelScene() {
  return (
    <div className="hotel-scene" aria-label="Animated 3D hotel communication scene" role="img">
      <Canvas camera={{ position: [0, 0.1, 6.7], fov: 42 }} dpr={[1, 1.5]}>
        <LobbyScene />
        <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.7} maxPolarAngle={Math.PI / 1.9} autoRotate autoRotateSpeed={0.55} />
      </Canvas>
      <div className="scene-caption">
        <span className="scene-live-dot" />
        <span>Live hotel practice lab</span>
      </div>
    </div>
  );
}
