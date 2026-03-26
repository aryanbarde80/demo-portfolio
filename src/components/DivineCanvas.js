"use client";
import React, { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, useGLTF, Environment, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Tech Avatar Model
function AvatarModel({ mousePosition, isInteracting, commandState }) {
  const group = useRef();
  const avatarRef = useRef();
  const [animationState, setAnimationState] = useState('far'); // far, walking, standing, coding

  const spriteTexture = useTexture('/aryan-avatar.png');
  const codeTexture = useTexture('/code-particles.png'); // Tech overlay texture

  useEffect(() => {
    // Sequence: Far -> Walking -> Standing -> Coding Gesture
    const tl = gsap.timeline({ delay: 1 });
    tl.to(group.current.position, { z: 5, duration: 3, ease: "power2.inOut", onStart: () => setAnimationState('walking') })
      .to(group.current.position, { z: 2, duration: 1.5, ease: "power3.out", onComplete: () => setAnimationState('standing') })
      .to({}, { duration: 0.5, onComplete: () => setAnimationState('coding') });
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
    } else if (animationState === 'coding') {
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
        
        {/* Coding Gesture Overlay with Tech Particles */}
        {animationState === 'coding' && (
          <motion.group 
            initial={{ scale: 0, opacity: 0, y: 0.5 }}
            animate={{ scale: 1, opacity: 1, y: 0.8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <sprite position={[0.4, 0.6, 0.1]} scale={[0.5, 0.5, 1]}>
              <spriteMaterial map={codeTexture} transparent opacity={0.8} color="#00f0ff" />
            </sprite>
            {/* Tech Light Effect */}
            <pointLight position={[0.4, 0.8, 0.2]} color="#00f0ff" intensity={3} distance={2} />
          </motion.group>
        )}
        
        {/* Code Particles Effect */}
        {animationState === 'coding' && (
          <ParticleSystem count={50} position={[0.5, 0.7, 0.3]} />
        )}
      </group>

      {/* Tech Platform with Holographic Effect */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
        <ringGeometry args={[0.5, 0.8, 32]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.82, 0]}>
        <ringGeometry args={[0.4, 0.6, 32]} />
        <meshBasicMaterial color="#ff003c" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

// Particle System for Coding Effect
function ParticleSystem({ count = 50, position = [0, 0, 0] }) {
  const particles = useRef([]);
  const groupRef = useRef();

  useFrame((state) => {
    particles.current.forEach((particle, i) => {
      if (particle) {
        particle.position.x += Math.sin(state.clock.elapsedTime * 5 + i) * 0.005;
        particle.position.y += Math.cos(state.clock.elapsedTime * 5 + i) * 0.005;
        particle.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 8 + i) * 0.3;
      }
    });
  });

  return (
    <group ref={groupRef} position={position}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} ref={el => particles.current[i] = el} position={[(Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.8, (Math.random() - 0.5) * 0.5]}>
          <sphereGeometry args={[0.01, 4, 4]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#00f0ff" : "#ff003c"} transparent opacity={0.6} />
        </mesh>
      ))}
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

// Tech Mandala - Abstract geometric pattern instead of Sri Yantra
function TechMandala() {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, -2]} scale={2.5}>
      {/* Outer Rings */}
      <mesh>
        <ringGeometry args={[1, 1.02, 64]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.08} />
      </mesh>
      <mesh scale={0.85}>
        <ringGeometry args={[1, 1.01, 32]} />
        <meshBasicMaterial color="#ffaa44" transparent opacity={0.12} />
      </mesh>
      <mesh scale={0.7}>
        <ringGeometry args={[1, 1.01, 16]} />
        <meshBasicMaterial color="#ff003c" transparent opacity={0.1} />
      </mesh>
      
      {/* Hexagon Grid Pattern */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
          <ringGeometry args={[0.3, 0.7, 6]} />
          <meshBasicMaterial color="#00f0ff" transparent opacity={0.05} wireframe />
        </mesh>
      ))}
      
      {/* Central Core - Tech Node */}
      <mesh>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#00f0ff" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#ffaa44" transparent opacity={0.5} />
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

  return <pointLight ref={lightRef} color="#00f0ff" intensity={2.5} distance={5} />;
}

export default function TechCanvas({ commandState = 'stable' }) {
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
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-70" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#030712']} />
        
        {/* Enhanced Stars with more depth */}
        <Stars 
          radius={100} 
          depth={50} 
          count={typeof window !== 'undefined' && window.innerWidth < 768 ? 3000 : 5000} 
          factor={4} 
          saturation={0.4} 
          fade 
          speed={1.2} 
        />
        
        <Suspense fallback={null}>
          <AvatarModel 
            mousePosition={mousePosition} 
            isInteracting={isInteracting} 
            commandState={commandState} 
          />
          <TechMandala />
        </Suspense>

        {/* Tech Grid Overlay */}
        <mesh position={[0, 0, 1]}>
          <planeGeometry args={[20, 20]} />
          <meshBasicMaterial transparent opacity={0.01} color="#00f0ff" />
        </mesh>
        
        {/* Dynamic Cursor Light */}
        <CursorLight mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}