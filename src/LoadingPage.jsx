// LoadingPage.jsx

import React, { useEffect, useRef, useState } from "react";
import "./LoadingPage.css";

import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, OrbitControls } from "@react-three/drei";

function RotatingRing() {
  const groupRef = useRef();

  useFrame(() => {
    // LEFT → RIGHT Rotation
    groupRef.current.rotation.y -= 0.004;

    // Floating motion
    groupRef.current.rotation.x =
      Math.sin(Date.now() * 0.0003) * 0.15;
  });

  const quote = "CODE THE FUTURE";
  const radius = 2.6; // smaller radius reduces letter spacing

  return (
    <group ref={groupRef}>
      {/* Transparent Glass Bangle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.12, 32, 200]} />

        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
          roughness={0}
          transmission={1}
          thickness={1}
          metalness={0.3}
          clearcoat={1}
        />
      </mesh>

      {/* Circular Letters (preserve spaces as gaps) */}
      {quote.split("").map((char, i) => {
        const angle = Math.PI / 2 - (i / quote.length) * Math.PI * 2;

        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        if (char === " ") return null;

        return (
          <Text3D
            key={i}
            font="https://threejs.org/examples/fonts/helvetiker_bold.typeface.json"
            size={0.26}
            height={0.035}
            curveSegments={12}
            position={[x, 0, z]}
            rotation={[0, -angle + Math.PI / 2, 0]}
          >
            {char}

            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.6}
            />
          </Text3D>
        );
      })}
    </group>
  );
}

export default function LoadingPage({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setHide(true);

            setTimeout(() => {
              if (onFinish) onFinish();
            }, 1400);
          }, 400);

          return 100;
        }

        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loader-container ${hide ? "hide-loader" : ""}`}>
      {/* Background Glow */}
      <div className="bg-light"></div>

      {/* 3D Canvas */}
      <Canvas
        orthographic
        gl={{ antialias: true, alpha: false }}
        style={{ background: "#050505" }}
        camera={{ position: [0, 0, 8], zoom: 80 }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={2}
        />

        <pointLight position={[-5, -5, -5]} intensity={1.5} />

        <RotatingRing />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>

      {/* Loading Percentage */}
      <div className="loading-text">
        <h1>{progress}%</h1>
      </div>

      {/* Spark Particles */}
      <div className="spark spark1"></div>
      <div className="spark spark2"></div>
      <div className="spark spark3"></div>
      <div className="spark spark4"></div>
      <div className="spark spark5"></div>
    </div>
  );
}