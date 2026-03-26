"use client";
import React, { useEffect, useState, useRef } from 'react';

export default function MagneticCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const animationRef = useRef(null);

  // Smooth follow animation
  useEffect(() => {
    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.2,
        y: prev.y + (targetPosition.y - prev.y) * 0.2
      }));
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [targetPosition]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      
      const target = e.target;
      const clickableElement = target.closest('button, a, .cursor-pointer, [role="button"]');
      const isClickable = !!clickableElement;
      setIsPointer(isClickable);
      
      // Magnetic effect: if close to a button, pull the cursor slightly
      if (isClickable && clickableElement) {
        const rect = clickableElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const dist = Math.sqrt(distX * distX + distY * distY);
        const maxDist = 80;
        
        if (dist < maxDist) {
          // Magnetic pull strength based on distance
          const strength = 1 - (dist / maxDist) * 0.5;
          x = centerX + distX * (1 - strength);
          y = centerY + distY * (1 - strength);
          setIsHovering(true);
        } else {
          setIsHovering(false);
        }
      } else {
        setIsHovering(false);
      }
      
      setTargetPosition({ x, y });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    // Hide default cursor
    const style = document.createElement('style');
    style.textContent = `
      * { cursor: none !important; }
      @media (max-width: 768px) {
        * { cursor: auto !important; }
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.head.removeChild(style);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      {/* Main Cursor Ring */}
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden sm:block"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          transition: 'transform 0.05s ease-out'
        }}
      >
        {/* Outer Ring */}
        <div 
          className={`
            w-8 h-8 rounded-full border-2 transition-all duration-300
            ${isClicking ? 'scale-75' : isPointer ? 'scale-150' : 'scale-100'}
            ${isPointer ? 'border-[#ffaa44] bg-[#ffaa44]/10' : 'border-[#00f0ff] bg-[#00f0ff]/10'}
            shadow-[0_0_15px_rgba(0,240,255,0.3)]
          `}
        >
          {/* Inner Dot */}
          <div 
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-1.5 h-1.5 rounded-full transition-all duration-200
              ${isPointer ? 'bg-[#ffaa44] w-2 h-2' : 'bg-[#00f0ff]'}
            `}
          />
        </div>
      </div>

      {/* Secondary Glow Effect for Hover */}
      {isHovering && (
        <div 
          className="fixed pointer-events-none z-[9998] hidden sm:block"
          style={{
            transform: `translate(${targetPosition.x}px, ${targetPosition.y}px) translate(-50%, -50%)`,
          }}
        >
          <div className="w-16 h-16 rounded-full bg-[#ffaa44]/20 animate-ping" />
        </div>
      )}

      {/* Custom styles for cursor hiding */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
          
          a:hover, button:hover, [role="button"]:hover {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}