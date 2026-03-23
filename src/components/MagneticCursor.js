"use client";
import React, { useEffect, useState, useRef } from 'react';

export default function MagneticCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      const isClickable = target.closest('button') || target.closest('a') || target.closest('.cursor-pointer');
      setIsPointer(!!isClickable);

      // Magnetic effect: if close to a button, pull the cursor slightly
      if (isClickable) {
        const rect = target.closest('button, a, .cursor-pointer').getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dist = Math.sqrt(Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2));
        
        if (dist < 50) {
          setPosition({
            x: centerX + (e.clientX - centerX) * 0.3,
            y: centerY + (e.clientY - centerY) * 0.3
          });
        }
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] transition-transform duration-75 ease-out hidden sm:block"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isClicking ? 0.8 : isPointer ? 1.5 : 1})`,
      }}
    >
      <div className={`w-full h-full rounded-full border-2 transition-colors duration-300 ${isPointer ? 'border-[#ffaa44] bg-[#ffaa44]/10' : 'border-[#00f0ff]/50 bg-[#00f0ff]/10'} shadow-[0_0_15px_rgba(0,240,255,0.3)]`}></div>
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full ${isPointer ? 'bg-[#ffaa44]' : 'bg-[#00f0ff]'}`}></div>
    </div>
  );
}
