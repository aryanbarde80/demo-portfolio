"use client";
import React, { useState, useEffect } from 'react';
import { Clock, Shield, ChevronUp } from 'lucide-react';

export default function SystemHUD() {
  const [uptime, setUptime] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev + 1);
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  if (!visible) return (
    <button 
      onClick={() => setVisible(true)}
      className="fixed top-2 left-1/2 -translate-x-1/2 z-[90] hidden md:flex items-center gap-1 px-3 py-1 bg-black/70 backdrop-blur-md border border-[#00f0ff]/20 rounded-full text-[8px] mono text-gray-500 hover:text-[#00f0ff] transition-colors"
      aria-label="Show HUD"
    >
      <ChevronUp size={10} /> SHOW_HUD
    </button>
  );

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-[90] hidden md:flex items-center gap-3 px-4 py-1.5 bg-black/70 backdrop-blur-md border border-[#00f0ff]/20 rounded-full text-[8px] mono text-gray-400 shadow-[0_0_20px_rgba(0,240,255,0.1)]">
      <button onClick={() => setVisible(false)} className="text-gray-600 hover:text-[#ff003c] transition-colors mr-1" aria-label="Hide HUD">
        <Shield size={10} />
      </button>

      <div className="flex items-center gap-1">
        <Clock size={10} className="text-[#00f0ff]" />
        <span>{currentTime || "--:--:--"}</span>
      </div>

      <div className="w-px h-3 bg-gray-700" />

      <div className="flex items-center gap-1">
        <span className="text-gray-500">SESSION:</span>
        <span className="text-[#00f0ff]">{formatUptime(uptime)}</span>
      </div>

      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse ml-1" />
    </div>
  );
}
