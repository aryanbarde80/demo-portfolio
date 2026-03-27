"use client";
import { useEffect, useState, useRef } from 'react';

export default function MagneticCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorRef = useRef(null);
  const hoverRingRef = useRef(null);
  const animationRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const animateFnRef = useRef(null);

  useEffect(() => {
    const animate = () => {
      posRef.current = {
        x: posRef.current.x + (targetRef.current.x - posRef.current.x) * 0.2,
        y: posRef.current.y + (targetRef.current.y - posRef.current.y) * 0.2
      };
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%, -50%)`;
      }
      if (hoverRingRef.current) {
        hoverRingRef.current.style.transform = `translate(${targetRef.current.x}px, ${targetRef.current.y}px) translate(-50%, -50%)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animateFnRef.current = animate;
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    const stateRef = { isPointer: false, isHovering: false, isClicking: false };
    
    const handleMouseMove = (e) => {
      let x = e.clientX;
      let y = e.clientY;
      
      const target = e.target;
      const clickableElement = target.closest('button, a, .cursor-pointer, [role="button"]');
      const isClickable = !!clickableElement;
      
      if (stateRef.isPointer !== isClickable) {
        stateRef.isPointer = isClickable;
        setIsPointer(isClickable);
      }
      
      if (isClickable && clickableElement) {
        const rect = clickableElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const dist = Math.sqrt(distX * distX + distY * distY);
        const maxDist = 80;
        
        if (dist < maxDist) {
          const strength = 1 - (dist / maxDist) * 0.5;
          x = centerX + distX * (1 - strength);
          y = centerY + distY * (1 - strength);
          if (!stateRef.isHovering) {
            stateRef.isHovering = true;
            setIsHovering(true);
          }
        } else if (stateRef.isHovering) {
          stateRef.isHovering = false;
          setIsHovering(false);
        }
      } else if (stateRef.isHovering) {
        stateRef.isHovering = false;
        setIsHovering(false);
      }
      
      targetRef.current = { x, y };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const style = document.createElement('style');
    style.textContent = `
      @media (min-width: 768px) {
        * { cursor: none !important; }
      }
    `;
    document.head.appendChild(style);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
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

  if (typeof window !== 'undefined' && window.innerWidth < 768) return null;

  return (
    <>
      <div 
        ref={cursorRef}
          className="fixed top-0 left-0 pointer-events-none z-[9999] hidden sm:block"
          style={{ 
            transform: `translate(0px, 0px) translate(-50%, -50%)`,
            willChange: 'transform'
          }}
      >
        <div 
          className={`
            w-8 h-8 rounded-full border-2 transition-all duration-300
            ${isClicking ? 'scale-75' : isPointer ? 'scale-150' : 'scale-100'}
            ${isPointer ? 'border-[#fb923c] bg-[#fb923c]/10' : 'border-[#818cf8] bg-[#818cf8]/10'}
            shadow-[0_0_15px_rgba(0,240,255,0.3)]
          `}
        >
          <div 
            className={`
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
              w-1.5 h-1.5 rounded-full transition-all duration-200
              ${isPointer ? 'bg-[#fb923c] w-2 h-2' : 'bg-[#818cf8]'}
            `}
          />
        </div>
      </div>

      <div 
        ref={hoverRingRef}
        className="fixed pointer-events-none z-[9998] hidden sm:block"
        style={{
          transform: 'translate(0px, 0px) translate(-50%, -50%)',
          willChange: 'transform',
          opacity: isHovering ? 1 : 0,
        }}
      >
        <div className="w-16 h-16 rounded-full bg-[#fb923c]/20 animate-ping" />
      </div>
    </>
  );
}
