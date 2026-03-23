"use client";
import React, { useEffect, useState, useRef } from 'react';

export default function NeuralMatrix() {
  const [connections, setConnections] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateConnections = () => {
      const windows = document.querySelectorAll('.glass-panel');
      const newConnections = [];
      
      for (let i = 0; i < windows.length; i++) {
        for (let j = i + 1; j < Math.min(i + 3, windows.length); j++) {
          const rectA = windows[i].getBoundingClientRect();
          const rectB = windows[j].getBoundingClientRect();
          
          newConnections.push({
            x1: rectA.left + rectA.width / 2,
            y1: rectA.top + rectA.height / 2,
            x2: rectB.left + rectB.width / 2,
            y2: rectB.top + rectB.height / 2,
            id: `${i}-${j}`
          });
        }
      }
      setConnections(newConnections);
    };

    const interval = setInterval(updateConnections, 1000);
    window.addEventListener('resize', updateConnections);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', updateConnections);
    };
  }, []);

  return (
    <svg 
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[5] opacity-20"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#ff44aa" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {connections.map(conn => (
        <line 
          key={conn.id}
          x1={conn.x1}
          y1={conn.y1}
          x2={conn.x2}
          y2={conn.y2}
          stroke="url(#neural-gradient)"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-[shimmer_10s_linear_infinite]"
        />
      ))}
    </svg>
  );
}
