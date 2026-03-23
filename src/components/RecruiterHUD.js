"use client";
import { useState } from 'react';
import { Briefcase, ChevronRight, Award, Zap, Github, Linkedin, Mail, X } from 'lucide-react';
import { gsap } from 'gsap';

export default function RecruiterHUD() {
  const [isOpen, setIsOpen] = useState(false);

  const highlights = [
    { label: "Competitive Programming", value: "TCS CodeVita AIR 4900+ (Top 5%)", icon: Award, color: "#ff003c" },
    { label: "Systems Optimization", value: "40% Latency Reduction (Redis/IoT)", icon: Zap, color: "#00f0ff" },
    { label: "AI Excellence", value: "95% YOLOv8 Defect Detection Accuracy", icon: Award, color: "#ff003c" },
    { label: "Data Mastery", value: "100% Accuracy on 409K Events (Zerve)", icon: Zap, color: "#00f0ff" },
  ];

  const toggleHUD = () => {
    if (!isOpen) {
      setIsOpen(true);
      gsap.fromTo(".hud-content", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" });
    } else {
      gsap.to(".hud-content", { y: 20, opacity: 0, duration: 0.3, onComplete: () => setIsOpen(false) });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="hud-content w-72 sm:w-80 glass-panel p-4 border-[#00f0ff]/30 shadow-[0_0_30px_rgba(0,240,255,0.2)] mb-2 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent animate-scanner"></div>
          
          <div className="flex justify-between items-center mb-4 border-b border-gray-800 pb-2">
             <div className="flex items-center gap-2">
               <Briefcase size={14} className="text-[#00f0ff]" />
               <span className="text-[10px] mono font-bold text-gray-200 uppercase tracking-widest">Recruiter_FastTrack.v1</span>
             </div>
             <button onClick={toggleHUD} className="p-1 hover:bg-gray-800 rounded transition-colors">
               <X size={14} className="text-gray-500" />
             </button>
          </div>

          <div className="space-y-4 mb-5">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={i} className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Icon size={12} style={{ color: h.color }} />
                    <span className="text-[9px] mono text-gray-400 uppercase tracking-tighter">{h.label}</span>
                  </div>
                  <p className="text-[11px] text-gray-200 leading-tight font-medium pl-5">{h.value}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-3 gap-2">
            <a href="https://github.com/aryanbarde80" className="flex flex-col items-center gap-1 p-2 rounded bg-gray-900/50 hover:bg-[#00f0ff]/10 border border-gray-800 hover:border-[#00f0ff]/30 transition-all">
              <Github size={16} className="text-gray-400" />
              <span className="text-[8px] mono">GITHUB</span>
            </a>
            <a href="https://linkedin.com/in/aryanbarde80" className="flex flex-col items-center gap-1 p-2 rounded bg-gray-900/50 hover:bg-[#00f0ff]/10 border border-gray-800 hover:border-[#00f0ff]/30 transition-all">
              <Linkedin size={16} className="text-gray-400" />
              <span className="text-[8px] mono">LINKEDIN</span>
            </a>
            <a href="mailto:aryanbarde80@gmail.com" className="flex flex-col items-center gap-1 p-2 rounded bg-gray-900/50 hover:bg-[#ff003c]/10 border border-gray-800 hover:border-[#ff003c]/30 transition-all">
              <Mail size={16} className="text-gray-400" />
              <span className="text-[8px] mono">EMAIL</span>
            </a>
          </div>
        </div>
      )}

      <button 
        onClick={toggleHUD}
        className={`group flex items-center gap-3 px-5 py-3 rounded-full bg-black/80 border transition-all duration-300 ${isOpen ? 'border-[#00f0ff] scale-95 shadow-[0_0_20px_rgba(0,240,255,0.4)]' : 'border-gray-800 hover:border-[#00f0ff] hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]'}`}
      >
        <div className="relative">
          <Briefcase size={20} className={`transition-colors duration-300 ${isOpen ? 'text-[#00f0ff]' : 'text-gray-400 group-hover:text-[#00f0ff]'}`} />
          {!isOpen && <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#ff003c] rounded-full animate-ping"></div>}
        </div>
        <span className="text-xs font-bold mono tracking-widest text-gray-200">RECRUITER_PANEL</span>
        <ChevronRight size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-90 text-[#00f0ff]' : 'text-gray-600 group-hover:translate-x-1'}`} />
      </button>
    </div>
  );
}
