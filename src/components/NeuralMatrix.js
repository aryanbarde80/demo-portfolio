"use client";
import { useEffect, useState, useRef, useCallback } from 'react';

export default function NeuralMatrix() {
  const [connections, setConnections] = useState([]);
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const lastUpdateRef = useRef(0);

  const updateConnections = useCallback(() => {
    const now = Date.now();
    if (now - lastUpdateRef.current < 300) return;
    lastUpdateRef.current = now;

    const windows = document.querySelectorAll('.glass-panel');
    const newConnections = [];
    const viewportHeight = window.innerHeight;
    
    for (let i = 0; i < windows.length; i++) {
      for (let j = i + 1; j < Math.min(i + 3, windows.length); j++) {
        const rectA = windows[i].getBoundingClientRect();
        const rectB = windows[j].getBoundingClientRect();
        
        // Only render connections for panels visible in viewport
        const aVisible = rectA.bottom > 0 && rectA.top < viewportHeight;
        const bVisible = rectB.bottom > 0 && rectB.top < viewportHeight;
        
        if ((aVisible || bVisible) && rectA.width > 0 && rectA.height > 0 && rectB.width > 0 && rectB.height > 0) {
          newConnections.push({
            x1: rectA.left + rectA.width / 2,
            y1: rectA.top + rectA.height / 2,
            x2: rectB.left + rectB.width / 2,
            y2: rectB.top + rectB.height / 2,
            id: `${i}-${j}`
          });
        }
      }
    }
    
    setConnections(newConnections);
  }, []);

  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateConnections, 150);
    };

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        updateConnections();
        rafRef.current = null;
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(resizeTimeout);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [updateConnections]);

  useEffect(() => {
    const initialTimeout = setTimeout(() => updateConnections(), 500);

    // Only observe childList changes, not attribute changes (much less noisy)
    const mainContent = document.getElementById('main-content');
    const observer = new MutationObserver(() => {
      updateConnections();
    });

    if (mainContent) {
      observer.observe(mainContent, {
        childList: true,
        subtree: true
      });
    }

    return () => {
      observer.disconnect();
      clearTimeout(initialTimeout);
    };
  }, [updateConnections]);

  return (
    <svg 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[5] opacity-20"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" stopOpacity="0.1">
            <animate attributeName="stopOpacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#ff44aa" stopOpacity="0.4">
            <animate attributeName="stopOpacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#818cf8" stopOpacity="0.1">
            <animate attributeName="stopOpacity" values="0.1;0.6;0.1" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {connections.map((conn, idx) => (
        <g key={conn.id}>
          <line 
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            stroke="url(#neural-gradient)"
            strokeWidth="0.8"
            strokeDasharray="4,4"
            filter="url(#glow)"
            className="neural-line"
          />
          <circle
            cx={(conn.x1 + conn.x2) / 2}
            cy={(conn.y1 + conn.y2) / 2}
            r="2"
            fill="#ff44aa"
            fillOpacity="0.4"
          >
            <animate 
              attributeName="r" 
              values="2;4;2" 
              dur={`${2 + (idx % 3)}s`} 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="fillOpacity" 
              values="0.4;0.8;0.4" 
              dur={`${2 + (idx % 3)}s`} 
              repeatCount="indefinite" 
            />
          </circle>
        </g>
      ))}
      
      <style jsx>{`
        @keyframes shimmer {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 20; }
        }
        .neural-line {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </svg>
  );
}
