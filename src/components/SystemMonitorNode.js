"use client";
import { useEffect, useState, useRef } from 'react';
import OSWindow from './OSWindow';
import { Activity, Cpu, Network, Zap } from 'lucide-react';
import { gsap } from 'gsap';

export default function SystemMonitorNode() {
  const [cpuLoad, setCpuLoad] = useState(42);
  const [memUsage, setMemUsage] = useState(65);
  const waveRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(prev => Math.min(95, Math.max(10, prev + (Math.random() - 0.5) * 10)));
      setMemUsage(prev => Math.min(90, Math.max(40, prev + (Math.random() - 0.5) * 5)));
    }, 2000);

    if (waveRef.current) {
      gsap.to(waveRef.current, {
        strokeDashoffset: -100,
        duration: 2,
        repeat: -1,
        ease: "none"
      });
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <OSWindow title="MODULES/SYSTEM_MONITOR.LOG" icon={<Activity size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        {/* Live Wave Graph */}
        <div className="space-y-4">
          <div className="flex justify-between items-center text-[10px] mono text-gray-400">
            <span className="flex items-center gap-2"><Network size={12} className="text-[#00f0ff]" /> NEURAL_CONNECTIVITY</span>
            <span className="text-[#00f0ff] animate-pulse">LIVE_FEED</span>
          </div>
          <div className="h-24 bg-black/40 border border-gray-800 rounded relative overflow-hidden flex items-center">
            <svg viewBox="0 0 100 20" className="w-full h-full opacity-60">
              <path 
                ref={waveRef}
                d="M0 10 Q 5 0, 10 10 T 20 10 T 30 10 T 40 10 T 50 10 T 60 10 T 70 10 T 80 10 T 90 10 T 100 10" 
                fill="none" 
                stroke="#00f0ff" 
                strokeWidth="0.5"
                strokeDasharray="5,5"
              />
              <path 
                d="M0 15 Q 10 5, 20 15 T 40 15 T 60 15 T 80 15 T 100 15" 
                fill="none" 
                stroke="#ff003c" 
                strokeWidth="0.3" 
                className="opacity-40"
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          </div>
          <div className="flex justify-between text-[9px] mono text-gray-600">
            <span>0.0ms</span>
            <span>DATA_STREAM_STABLE</span>
            <span>1024_PKT/S</span>
          </div>
        </div>

        {/* Real-time Metrics Bars */}
        <div className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] mono">
              <span className="text-gray-400 flex items-center gap-2"><Cpu size={12} /> AGENT_STABILITY</span>
              <span className={cpuLoad > 80 ? 'text-[#ff003c]' : 'text-[#00f0ff]'}>{cpuLoad.toFixed(1)}%</span>
            </div>
            <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-500 ease-out" 
                style={{ width: `${cpuLoad}%`, backgroundColor: cpuLoad > 80 ? '#ff003c' : '#00f0ff', boxShadow: `0 0 10px ${cpuLoad > 80 ? '#ff003c' : '#00f0ff'}40` }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-[10px] mono">
              <span className="text-gray-400 flex items-center gap-2"><Zap size={12} /> COGNITIVE_LOAD</span>
              <span className="text-[#ff003c]">{memUsage.toFixed(1)}%</span>
            </div>
            <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
              <div 
                className="h-full transition-all duration-500 ease-out" 
                style={{ width: `${memUsage}%`, backgroundColor: '#ff003c', boxShadow: '0 0 10px rgba(255,0,60,0.4)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
