"use client";
import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Placeholder or actual Avatar model
function AvatarModel({ mousePosition, isInteracting, commandState }) {
  const group = useRef();
  const spriteTexture = THREE.ImageUtils.loadTexture('/aryan-avatar-3d.png');
  
  // ==========================================
  // 🔴 USER ACTION REQUIRED: ADD YOUR 3D AVATAR
  // 1. Export your GLB from Ready Player Me
  // 2. Save it to: public/models/aryan-avatar.glb
  // 3. Uncomment the line below to activate it!
  // ==========================================
  
  // const { scene } = useGLTF('/models/aryan-avatar.glb');
  const scene = null; 

  useFrame((state) => {
    if (!group.current) return;
    
    const speed = commandState === 'unstable' ? 0.2 : 0.05;
    const targetX = (mousePosition.current.x * Math.PI) / 8;
    const targetY = (mousePosition.current.y * Math.PI) / 8;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, speed);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetY, speed);

    if (commandState === 'unstable') {
      group.current.position.x = Math.sin(state.clock.elapsedTime * 20) * 0.1;
    } else {
      group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 - 1;
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]} scale={2.5}>
      {scene ? (
        <primitive object={scene} />
      ) : (
        <group>
          {/* High-quality Sprite Fallback */}
          <sprite scale={[1.2, 1.2, 1]}>
            <spriteMaterial map={spriteTexture} transparent opacity={0.9} />
          </sprite>
          {/* Subtle Backglow */}
          <mesh position={[0, 0, -0.1]}>
            <circleGeometry args={[0.6, 32]} />
            <meshStandardMaterial color="#00f0ff" transparent opacity={0.1} />
          </mesh>
        </group>
      )}
      
      {/* Third Eye Glow */}
      <pointLight 
        position={[0, 0.4, 0.5]} 
        color="#ffaa44" 
        intensity={isInteracting || commandState === 'unstable' ? 8 : 2} 
        distance={2} 
      />
    </group>
  );
}

function SoundWaves({ active }) {
  const rings = useRef([]);

  useFrame((state) => {
    rings.current.forEach((ring, i) => {
      if (!ring) return;
      const t = (state.clock.elapsedTime + i * 0.5) % 2;
      ring.scale.set(1 + t * 2, 1 + t * 2, 1);
      ring.material.opacity = (1 - t / 2) * 0.2;
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

  return <pointLight ref={lightRef} color="#ff44aa" intensity={2} distance={5} />;
}

export default function DivineCanvas({ commandState = 'stable' }) {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = React.useState(false);

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
        <ambientLight intensity={0.4} />
        <Environment preset="night" />
        <CursorLight mousePosition={mousePosition} />
        <SoundWaves active={isInteracting} />
        
        {/* Cosmic Particles */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1.5} />
        
        <Suspense fallback={null}>
          <AvatarModel 
            mousePosition={mousePosition} 
            isInteracting={isInteracting} 
            commandState={commandState} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
