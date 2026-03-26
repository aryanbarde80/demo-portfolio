"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cpu, Database, Hash, Maximize2, Minimize2, X } from 'lucide-react';

export default function OSWindow({ title, children, width = "max-w-4xl", icon = "📁", defaultExpanded = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [load, setLoad] = useState(12);
  const [mounted, setMounted] = useState(false);
  const reactId = React.useId();
  
  const windowId = useMemo(() => {
    if (!mounted) return "0x000000";
    // Generate a stable hex-like ID from the reactId
    return `0x${reactId.replace(/:/g, '').padEnd(6, '0').slice(0, 6).toUpperCase()}`;
  }, [reactId, mounted]);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isHovered) {
      const interval = setInterval(() => {
        setLoad(prev => Math.min(Math.max(prev + (Math.random() * 10 - 5), 5), 95));
      }, 800);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  const toggleExpand = useCallback((e) => {
    e.stopPropagation();
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <motion.div 
      drag={!isExpanded}
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={!isExpanded ? { scale: 1.02, zIndex: 100 } : {}}
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        glass-panel mx-auto w-full ${width} relative group transition-all duration-500 
        hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] mb-4 sm:mb-6 rounded-lg 
        ${!isExpanded ? 'cursor-grab active:cursor-grabbing' : 'cursor-default'}
        border border-[#00f0ff]/10 hover:border-[#00f0ff]/60 bg-black/50 backdrop-blur-xl overflow-hidden
      `}
    >
      {/* Scanning Laser Effect */}
      <AnimatePresence>
        {isHovered && !isExpanded && (
          <motion.div 
            initial={{ top: '-10%' }}
            animate={{ top: '110%' }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-[#00f0ff] opacity-40 blur-[2px] z-20 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Cyber Noise: Tiny Hex IDs in corners */}
      <div className="absolute top-1 right-12 text-[6px] sm:text-[7px] mono text-[#00f0ff]/20 pointer-events-none select-none hidden md:block">
        <span className="mr-2">HASH: {windowId}</span>
        <span>STBL: 0.9997</span>
      </div>

      {/* Top bar */}
      <div className="flex border-b border-[#00f0ff]/30 p-2 sm:p-3 px-3 sm:px-4 items-center justify-between bg-[#030712]/95 rounded-t-[7px] relative z-30">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
        </div>
        
        <div className="flex flex-col items-center gap-1 text-[#00f0ff]/90 mono text-[10px] sm:text-xs tracking-widest uppercase font-bold truncate max-w-[60%] sm:max-w-[70%] select-none header-font">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="shrink-0 scale-110 text-sm sm:text-base">{icon}</span> 
            <span className="truncate">{title}</span>
          </div>
          {/* Header Diagnostic Bar */}
          <div className="w-20 sm:w-32 h-0.5 bg-white/5 rounded-full overflow-hidden hidden md:block">
            <motion.div 
              animate={{ width: `${load}%` }}
              transition={{ duration: 0.3 }}
              className={`h-full ${load > 80 ? 'bg-[#ff003c]' : 'bg-[#00f0ff]'} shadow-[0_0_8px_currentColor]`}
            />
          </div>
        </div>

        {/* Window Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Expand/Collapse Button */}
          <button
            onClick={toggleExpand}
            className="text-gray-500 hover:text-[#00f0ff] transition-colors p-1 rounded hover:bg-[#00f0ff]/10"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
          </button>
          
          {/* Diagnostic Stats */}
          <div className="hidden lg:flex items-center gap-2 sm:gap-3 text-[8px] sm:text-[9px] mono text-gray-500">
            <div className="flex items-center gap-1 hover:text-[#ffaa44] transition-colors">
              <Cpu size={10} className="text-[#ffaa44]" /> 
              <span className="hidden sm:inline">{load.toFixed(0)}%</span>
            </div>
            <div className="flex items-center gap-1 hover:text-[#00f0ff] transition-colors">
              <Database size={10} className="text-[#00f0ff]" /> 
              <span className="hidden md:inline">{windowId.substring(0, 6)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <motion.div 
        animate={{ 
          height: isExpanded ? 'auto' : 'auto',
          opacity: 1
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="p-4 sm:p-6 md:p-8 cursor-text relative leading-relaxed font-sans text-xs sm:text-sm selection:bg-[#00f0ff]/30">
          {/* Subtle background code leak noise */}
          <div className="absolute inset-0 opacity-[0.008] pointer-events-none select-none font-mono text-[7px] sm:text-[8px] p-3 leading-normal overflow-hidden hidden sm:block">
            {Array(10).fill(`// sys.init("${windowId}"); await uplink.verify();`).join(' ')}
          </div>
          <div className="relative z-20">
            {children}
          </div>
        </div>
      </motion.div>

      {/* Responsive styles for mobile */}
      <style jsx>{`
        @media (max-width: 640px) {
          .glass-panel {
            backdrop-filter: blur(8px);
          }
        }
      `}</style>
    </motion.div>
  );
}