"use client";
import { motion } from 'framer-motion';

export default function OSWindow({ title, children, width = "max-w-4xl", icon = "📁" }) {
  return (
    <motion.div 
      drag 
      dragMomentum={false}
      dragElastic={0.1}
      whileDrag={{ scale: 1.02, zIndex: 50 }}
      layout
      className={`glass-panel mx-auto w-full ${width} relative group transition-all duration-500 hover:shadow-[0_8px_40px_rgba(0,240,255,0.2)] mb-4 sm:mb-6 rounded-lg cursor-grab active:cursor-grabbing border border-[#00f0ff]/10 hover:border-[#00f0ff]/50 bg-black/40 backdrop-blur-md`}
    >
      {/* Neon Pulsing Border overlay */}
      <div className="absolute inset-0 rounded-lg pointer-events-none border-2 border-[#00f0ff] opacity-0 group-hover:opacity-100 group-hover:animate-[pulsion_2s_ease-in-out_infinite] transition-opacity duration-300"></div>

      {/* Top bar (drag handle) */}
      <div className="flex border-b border-[#00f0ff]/30 p-2 sm:p-3 px-3 sm:px-4 items-center justify-between bg-[#030712]/90 rounded-t-[7px]">
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 text-[#00f0ff]/80 mono text-[10px] sm:text-sm tracking-wider uppercase font-semibold truncate max-w-[60%] select-none">
          <span className="shrink-0">{icon}</span> <span className="truncate">{title}</span>
        </div>
        <div className="w-[40px] sm:w-[52px] shrink-0"></div>
      </div>

      {/* Body */}
      <div className="p-3 sm:p-5 md:p-8 cursor-text">
        {children}
      </div>
    </motion.div>
  );
}
