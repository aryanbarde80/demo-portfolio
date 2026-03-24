"use client";
import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, useGLTF, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Placeholder or actual Avatar model
function AvatarModel({ mousePosition, isInteracting, commandState }) {
  const group = useRef();
  const avatarRef = useRef();
  const armRef = useRef();
  const [animationState, setAnimationState] = useState('far'); // far, walking, standing, pointing

  const spriteTexture = useTexture('/aryan-avatar.png');
  const pointTexture = useTexture('/aryan-avatar-3d.png'); // Fallback for pointing gesture

  useEffect(() => {
    // Sequence: Far -> Walking -> Standing -> Pointing
    const tl = gsap.timeline({ delay: 1 });
    tl.to(group.current.position, { z: 5, duration: 3, ease: "power2.inOut", onStart: () => setAnimationState('walking') })
      .to(group.current.position, { z: 2, duration: 1.5, ease: "power3.out", onComplete: () => setAnimationState('standing') })
      .to({}, { duration: 0.5, onComplete: () => setAnimationState('pointing') });
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    
    // Smooth Mouse Follow
    const targetX = (mousePosition.current.x * Math.PI) / 10;
    const targetY = (mousePosition.current.y * Math.PI) / 10;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetY, 0.05);

    // Walking Bobbing
    if (animationState === 'walking') {
      group.current.position.y = -1 + Math.sin(state.clock.elapsedTime * 8) * 0.15;
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 4) * 0.05;
    } else if (animationState === 'pointing') {
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -0.8, 0.1);
    } else {
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, -1, 0.05);
    }
  });

  return (
    <group ref={group} position={[0, -5, -20]} scale={2}>
      <group ref={avatarRef}>
        <sprite scale={[1.5, 1.5, 1]}>
          <spriteMaterial map={spriteTexture} transparent opacity={1} />
        </sprite>
        
        {/* Khabib Gesture Overlay (Animated) */}
        {animationState === 'pointing' && (
          <motion.group 
            initial={{ scale: 0, opacity: 0, y: 0.5 }}
            animate={{ scale: 1, opacity: 1, y: 0.8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <sprite position={[0.4, 0.6, 0.1]} scale={[0.5, 0.5, 1]}>
              <spriteMaterial map={pointTexture} transparent opacity={1} color="#00f0ff" />
            </sprite>
            {/* Divine Light behind the finger */}
            <pointLight position={[0.4, 0.8, 0.2]} color="#00f0ff" intensity={5} distance={2} />
          </motion.group>
        )}
      </group>

      {/* Subtle Platform */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
        <ringGeometry args={[0.5, 0.7, 32]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function SoundWaves({ active }) {
  const rings = useRef([]);

  useFrame((state) => {
    rings.current.forEach((ring, i) => {
      if (!ring) return;
      const t = (state.clock.elapsedTime + i * 0.5) % 2;
      ring.scale.set(1 + t * 5, 1 + t * 5, 1);
      ring.material.opacity = (1 - t / 2) * 0.3;
    });
  });

  return (
    <group position={[0, -0.5, -0.5]}>
      {[0, 1, 2].map(i => (
        <mesh key={i} ref={el => rings.current[i] = el}>
          <ringGeometry args={[1, 1.02, 64]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}

function SriYantra() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, -2]} scale={3}>
      {/* Outer Rings */}
      <mesh>
        <ringGeometry args={[1, 1.01, 64]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.1} />
      </mesh>
      <mesh scale={0.9}>
        <ringGeometry args={[1, 1.01, 8]} />
        <meshBasicMaterial color="#ffaa44" transparent opacity={0.2} />
      </mesh>
      
      {/* Triangle Layers (Simulated Sri Yantra geometry) */}
      {[0, 1, 2, 3].map(i => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 2]}>
          <ringGeometry args={[0.2, 0.8, 3]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.05} wireframe />
        </mesh>
      ))}
      
      {/* Central Bindu */}
      <mesh>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="#ffaa44" />
      </mesh>
    </group>
  );
}

function CursorLight({ mousePosition }) {
  const lightRef = useRef();
  const { viewport } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      const x = (mousePosition.current.x * viewport.width) / 2;
      const y = (mousePosition.current.y * viewport.height) / 2;
      lightRef.current.position.set(x, y, 2);
    }
  });

  return <pointLight ref={lightRef} color="#ff44aa" intensity={3} distance={6} />;
}

export default function DivineCanvas({ commandState = 'stable' }) {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
      setIsInteracting(true);
    };

    let timeout;
    const handleStop = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsInteracting(false), 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleStop);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleStop);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-80" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#030712']} />
        <Stars radius={100} depth={50} count={typeof window !== 'undefined' && window.innerWidth < 768 ? 2000 : 4000} factor={4} saturation={0.5} fade speed={1.5} />
        
        <Suspense fallback={null}>
          <AvatarModel 
            mousePosition={mousePosition} 
            isInteracting={isInteracting} 
            commandState={commandState} 
          />
        </Suspense>

        {/* Cinematic Glitch Overlay for R3F */}
        <mesh position={[0, 0, 1]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial transparent opacity={0.02} color="#00f0ff" />
        </mesh>
      </Canvas>
    </div>
  );
}
