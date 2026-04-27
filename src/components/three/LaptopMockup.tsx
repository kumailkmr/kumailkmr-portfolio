"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, MeshDistortMaterial, Sphere } from "@react-three/drei";

const FloatingSphere = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 100]} scale={2}>
        <MeshDistortMaterial
          color="#d4af37"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

interface LaptopMockupProps {
  className?: string;
}

const LaptopMockup: React.FC<LaptopMockupProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas style={{ height: "500px" }}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#00d4ff" />
        <FloatingSphere />
      </Canvas>
    </div>
  );
};

export default LaptopMockup;
