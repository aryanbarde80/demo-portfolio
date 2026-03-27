"use client";
import { useEffect, useRef } from 'react';

export default function CursorGlow({ children }) {
  const glowRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.background = `radial-gradient(600px circle at ${posRef.current.x}px ${posRef.current.y}px, rgba(0, 240, 255, 0.08), transparent 40%)`;
          }
          rafRef.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div 
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden="true"
        style={{ willChange: 'background' }}
      />
      {children}
    </div>
  );
}
