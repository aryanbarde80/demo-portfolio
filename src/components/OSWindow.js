"use client";
import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Maximize2, Minimize2 } from 'lucide-react';

export default function OSWindow({ title, children, width = "max-w-4xl", icon = null, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpand = useCallback((e) => {
    e.stopPropagation();
    setIsExpanded(prev => !prev);
  }, []);

  return (
    <motion.div 
      layout
      role="region"
      aria-label={title}
      className={`
        glass-panel mx-auto w-full ${width} relative group transition-all duration-300 
        mb-4 sm:mb-5 overflow-hidden min-w-0
      `}
    >
      {/* Window Bar */}
      <div className="flex border-b border-[#818cf8]/10 p-2.5 px-4 items-center justify-between bg-[#0a0a0f]/80 rounded-t-[15px] relative z-30">
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f87171]/70"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]/70"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#34d399]/70"></div>
        </div>
        
        <div className="flex items-center gap-2 text-[#a1a1b5] mono text-[11px] sm:text-xs tracking-wide select-none">
          {icon && <span className="shrink-0 text-[#818cf8]">{icon}</span>}
          <span className="truncate max-w-[200px] sm:max-w-[300px]">{title}</span>
        </div>

        <button
          onClick={toggleExpand}
          className="text-[#6b6b80] hover:text-[#818cf8] transition-colors p-1 rounded-md hover:bg-[#818cf8]/10"
          aria-label={isExpanded ? "Collapse" : "Expand"}
        >
          {isExpanded ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
        </button>
      </div>

      {/* Body */}
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 0 : 'auto', opacity: isExpanded ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="p-3 sm:p-4 md:p-5 relative leading-relaxed font-sans text-sm">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
