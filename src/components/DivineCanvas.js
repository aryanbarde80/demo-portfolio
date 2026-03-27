"use client";
import { useRef, useEffect, Suspense, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Tech Avatar Model
function AvatarModel({ mousePosition, isInteracting, commandState }) {
  const group = useRef();
  const avatarRef = useRef();
  const [animationState, setAnimationState] = useState('far'); // far, walking, standing, coding
  const [textureLoaded, setTextureLoaded] = useState(false);

  // Load textures with fallback
  const spriteTexture = useTexture('/aryan-avatar.png', 
    () => setTextureLoaded(true),
    () => console.warn('Avatar texture not found, using fallback')
  );
  
  // Create a canvas-generated texture as fallback
  const fallbackTexture = useMemo(() => {
    if (typeof window === 'undefined') return null;
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#818cf8';
      ctx.fillRect(0, 0, 128, 128);
      ctx.fillStyle = '#030712';
      ctx.font = 'bold 40px monospace';
      ctx.fillText('AB', 40, 80);
    }
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

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

  const finalTexture = textureLoaded ? spriteTexture : fallbackTexture;

  return (
    <group ref={group} position={[0, -5, -20]} scale={2}>
      <group ref={avatarRef}>
        {finalTexture && (
          <sprite scale={[1.5, 1.5, 1]}>
            <spriteMaterial map={finalTexture} transparent opacity={1} />
          </sprite>
        )}
        
        {/* Coding Gesture Overlay - No external texture needed */}
        {animationState === 'coding' && (
          <motion.group 
            initial={{ scale: 0, opacity: 0, y: 0.5 }}
            animate={{ scale: 1, opacity: 1, y: 0.8 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {/* Tech Light Effect */}
            <pointLight position={[0.4, 0.8, 0.2]} color="#818cf8" intensity={3} distance={2} />
            
            {/* Code Particles - Procedural */}
            <ParticleSystem count={30} position={[0.5, 0.7, 0.3]} />
          </motion.group>
        )}
      </group>

      {/* Tech Platform with Holographic Effect */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
        <ringGeometry args={[0.5, 0.8, 32]} />
        <meshBasicMaterial color="#818cf8" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.82, 0]}>
        <ringGeometry args={[0.4, 0.6, 32]} />
        <meshBasicMaterial color="#f472b6" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}

// Particle System for Coding Effect
function ParticleSystem({ count = 30, position = [0, 0, 0] }) {
  const particles = useRef([]);
  const groupRef = useRef();

  // Pre-compute stable random positions using a seeded approach
  const positions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      // Use deterministic pseudo-random based on index
      const seed1 = Math.sin(i * 12.9898 + 78.233) * 43758.5453;
      const seed2 = Math.sin(i * 78.233 + 12.9898) * 43758.5453;
      const seed3 = Math.sin(i * 45.164 + 93.9898) * 43758.5453;
      pos.push([
        (seed1 - Math.floor(seed1) - 0.5) * 0.6,
        (seed2 - Math.floor(seed2) - 0.5) * 0.6,
        (seed3 - Math.floor(seed3) - 0.5) * 0.4,
      ]);
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    particles.current.forEach((particle, i) => {
      if (particle) {
        particle.position.x += Math.sin(state.clock.elapsedTime * 5 + i) * 0.008;
        particle.position.y += Math.cos(state.clock.elapsedTime * 5 + i) * 0.008;
        particle.material.opacity = 0.5 + Math.sin(state.clock.elapsedTime * 8 + i) * 0.3;
      }
    });
  });

  return (
    <group ref={groupRef} position={position}>
      {positions.map((pos, i) => (
        <mesh key={i} ref={el => particles.current[i] = el} position={pos}>
          <sphereGeometry args={[0.012, 4, 4]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#818cf8" : "#f472b6"} transparent opacity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

// Tech Mandala - Abstract geometric pattern
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
        <meshBasicMaterial color="#818cf8" transparent opacity={0.08} />
      </mesh>
      <mesh scale={0.85}>
        <ringGeometry args={[1, 1.01, 32]} />
        <meshBasicMaterial color="#fb923c" transparent opacity={0.12} />
      </mesh>
      <mesh scale={0.7}>
        <ringGeometry args={[1, 1.01, 16]} />
        <meshBasicMaterial color="#f472b6" transparent opacity={0.1} />
      </mesh>
      
      {/* Hexagon Grid Pattern */}
      {[0, 1, 2, 3, 4, 5].map(i => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
          <ringGeometry args={[0.3, 0.7, 6]} />
          <meshBasicMaterial color="#818cf8" transparent opacity={0.05} wireframe />
        </mesh>
      ))}
      
      {/* Central Core - Tech Node */}
      <mesh>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#818cf8" />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshBasicMaterial color="#fb923c" transparent opacity={0.5} />
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

  return <pointLight ref={lightRef} color="#818cf8" intensity={2.5} distance={5} />;
}

export default function TechCanvas({ commandState = 'stable' }) {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    let timeout;
    const handleMouseMove = (e) => {
      mousePosition.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      };
      setIsInteracting(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsInteracting(false), 2000);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-70" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#030712']} />
        
        {/* Enhanced Stars */}
        <Stars 
          radius={100} 
          depth={50} 
          count={typeof window !== 'undefined' && window.innerWidth < 768 ? 1500 : 2500} 
          factor={4} 
          saturation={0.4} 
          fade 
          speed={0.8} 
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
          <meshBasicMaterial transparent opacity={0.01} color="#818cf8" />
        </mesh>
        
        {/* Dynamic Cursor Light */}
        <CursorLight mousePosition={mousePosition} />
      </Canvas>
    </div>
  );
}
