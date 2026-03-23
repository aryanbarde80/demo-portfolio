"use client";
import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars, useGLTF, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Placeholder or actual Avatar model
function AvatarModel({ mousePosition, isInteracting, commandState }) {
  const group = useRef();
  
  // ==========================================
  // 🔴 USER ACTION REQUIRED: ADD YOUR 3D AVATAR
  // 1. Export your GLB from Ready Player Me
  // 2. Save it to: public/models/aryan-avatar.glb
  // 3. Uncomment the line below to activate it!
  // ==========================================
  
  // const { scene } = useGLTF('/models/aryan-avatar.glb');
  const scene = null; // Remove this line when you uncomment the line above

  useFrame((state) => {
    if (!group.current) return;
    
    // Smoothly rotate the entire group towards the mouse to simulate "eye tracking"
    // (A true bone-based eye tracking requires exact bone references like 'Head', 'Neck')
    const targetX = (mousePosition.current.x * Math.PI) / 8;
    const targetY = (mousePosition.current.y * Math.PI) / 8;
    
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetX, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetY, 0.05);

    // Idle floating animation
    group.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 - 1;
  });

  return (
    <group ref={group} position={[0, -1, 0]} scale={2}>
      {scene ? (
        <primitive object={scene} />
      ) : (
        // Fallback placeholder to visualize the 3D space until GLB is provided
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#00f0ff" wireframe />
        </mesh>
      )}
      
      {/* Third Eye Glow */}
      <pointLight 
        position={[0, 1.5, 0.5]} 
        color="#ffaa44" 
        intensity={isInteracting ? 5 : 1} 
        distance={2} 
      />
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

export default function DivineCanvas({ commandState = 'idle' }) {
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
