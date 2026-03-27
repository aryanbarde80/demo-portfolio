"use client";
import { useState, useEffect } from 'react';
import { Clock, X } from 'lucide-react';

export default function SystemHUD() {
  const [uptime, setUptime] = useState(0);
  const [visible, setVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState("");
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setUptime(prev => prev + 1);
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatUptime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  if (!visible) return null;

  return (
    <div className={`fixed left-1/2 -translate-x-1/2 z-[70] hidden md:flex items-center gap-3 px-4 py-1.5 bg-[#0a0a0f]/80 backdrop-blur-xl border border-[#818cf8]/10 rounded-xl text-[9px] mono text-[#6b6b80] transition-all duration-500 ${isNavVisible ? 'top-14' : 'top-2'}`}>
      <div className="flex items-center gap-1.5">
        <Clock size={10} className="text-[#818cf8]" />
        <span className="text-[#a1a1b5]">{currentTime || "--:--:--"}</span>
      </div>

      <div className="w-px h-3 bg-[#1a1a26]" />

      <div className="flex items-center gap-1.5">
        <span>Session</span>
        <span className="text-[#818cf8]">{formatUptime(uptime)}</span>
      </div>

      <div className="w-1.5 h-1.5 rounded-full bg-[#34d399] ml-1" />
      
      <button onClick={() => setVisible(false)} className="text-[#6b6b80] hover:text-[#a1a1b5] transition-colors ml-1" aria-label="Hide HUD">
        <X size={10} />
      </button>
    </div>
  );
}
