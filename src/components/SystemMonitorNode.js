"use client";
import { useEffect, useState, useRef } from 'react';
import OSWindow from './OSWindow';
import { Activity, Cpu, Network, Zap, Thermometer, Clock, Wifi, BarChart3 } from 'lucide-react';
import { gsap } from 'gsap';

export default function SystemMonitorNode() {
  const [cpuLoad, setCpuLoad] = useState(24);
  const [memUsage, setMemUsage] = useState(42);
  const [networkLatency, setNetworkLatency] = useState(12);
  const [throughput, setThroughput] = useState(1024);
  const waveRef = useRef(null);
  const secondWaveRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(prev => Math.min(65, Math.max(15, prev + (Math.random() - 0.5) * 6)));
      setMemUsage(prev => Math.min(75, Math.max(35, prev + (Math.random() - 0.5) * 4)));
      setNetworkLatency(prev => Math.min(25, Math.max(8, prev + (Math.random() - 0.5) * 2)));
      setThroughput(prev => Math.min(2500, Math.max(800, prev + (Math.random() - 0.5) * 80)));
    }, 2000);

    // Animate wave patterns
    if (waveRef.current) {
      gsap.to(waveRef.current, {
        strokeDashoffset: -100,
        duration: 3,
        repeat: -1,
        ease: "none"
      });
    }
    
    if (secondWaveRef.current) {
      gsap.to(secondWaveRef.current, {
        strokeDashoffset: -80,
        duration: 2.5,
        repeat: -1,
        ease: "none",
        delay: 0.5
      });
    }

    return () => clearInterval(interval);
  }, []);

  const getCpuStatus = (load) => {
    if (load < 30) return { text: "OPTIMAL", color: "#00f0ff" };
    if (load < 50) return { text: "NOMINAL", color: "#ffaa44" };
    return { text: "ELEVATED", color: "#ff003c" };
  };

  const cpuStatus = getCpuStatus(cpuLoad);

  return (
    <OSWindow title="MODULES/SYSTEM_MONITOR.LOG" icon={<Activity size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-4xl">
      <div className="space-y-5">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-2 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <BarChart3 size={12} className="text-[#00f0ff]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">REALTIME_METRICS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[8px] sm:text-[9px] mono text-green-500">DATA_STREAM_ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left: Live Wave Graph */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Network size={12} className="text-[#00f0ff]" />
                <span className="text-[9px] sm:text-[10px] mono text-gray-400">NEURAL_CONNECTIVITY</span>
              </div>
              <span className="text-[8px] sm:text-[9px] mono text-[#00f0ff] animate-pulse">LIVE_FEED</span>
            </div>
            
            <div className="relative h-28 bg-gradient-to-b from-black/60 to-[#030712] border border-gray-800 rounded-lg overflow-hidden">
              <svg viewBox="0 0 100 28" className="w-full h-full">
                <defs>
                  <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.3">
                      <animate attributeName="stopOpacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#ff003c" stopOpacity="0.3">
                      <animate attributeName="stopOpacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                </defs>
                
                {/* Background Grid */}
                {[0, 25, 50, 75, 100].map(x => (
                  <line key={x} x1={x} y1="0" x2={x} y2="28" stroke="#00f0ff" strokeWidth="0.2" opacity="0.1" />
                ))}
                {[7, 14, 21].map(y => (
                  <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#00f0ff" strokeWidth="0.2" opacity="0.1" />
                ))}
                
                {/* Main Wave */}
                <path 
                  ref={waveRef}
                  d="M0 14 Q 12 4, 24 14 T 48 14 T 72 14 T 96 14 T 100 14" 
                  fill="none" 
                  stroke="url(#waveGradient)" 
                  strokeWidth="1.2"
                  strokeDasharray="6,4"
                  className="animate-[shimmer_8s_linear_infinite]"
                />
                
                {/* Secondary Wave */}
                <path 
                  ref={secondWaveRef}
                  d="M0 18 Q 15 10, 30 18 T 60 18 T 90 18 T 100 18" 
                  fill="none" 
                  stroke="#ff003c" 
                  strokeWidth="0.8" 
                  opacity="0.5"
                  strokeDasharray="4,6"
                />
                
                {/* Animated Pulse Dot */}
                <circle cx="100" cy="14" r="1.2" fill="#00f0ff">
                  <animate attributeName="r" values="1.2;2;1.2" dur="1.5s" repeatCount="indefinite" />
                  <animate attributeName="fillOpacity" values="0.8;1;0.8" dur="1.5s" repeatCount="indefinite" />
                </circle>
              </svg>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none"></div>
            </div>
            
            <div className="flex justify-between text-[8px] sm:text-[9px] mono text-gray-600">
              <span>LATENCY: {networkLatency}ms</span>
              <span>THROUGHPUT: {throughput} pkt/s</span>
              <span>BANDWIDTH: {Math.floor(throughput * 0.12)} Mbps</span>
            </div>
          </div>

          {/* Right: Real-time Metrics */}
          <div className="space-y-4">
            {/* CPU Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Cpu size={12} className="text-[#00f0ff]" />
                  <span className="text-[9px] sm:text-[10px] mono text-gray-400">CPU_LOAD</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-mono font-bold" style={{ color: cpuStatus.color }}>
                    {cpuLoad.toFixed(1)}%
                  </span>
                  <span className="text-[7px] sm:text-[8px] mono px-1.5 py-0.5 rounded" style={{ backgroundColor: `${cpuStatus.color}20`, color: cpuStatus.color }}>
                    {cpuStatus.text}
                  </span>
                </div>
              </div>
              <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full transition-all duration-500 ease-out shadow-[0_0_8px]"
                  style={{ 
                    width: `${cpuLoad}%`, 
                    backgroundColor: cpuStatus.color,
                    boxShadow: `0 0 10px ${cpuStatus.color}`
                  }}
                />
              </div>
              <div className="flex justify-between text-[7px] sm:text-[8px] mono text-gray-600">
                <span>MIN: 15%</span>
                <span>AVG: 24%</span>
                <span>MAX: 42%</span>
              </div>
            </div>

            {/* Memory Section */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Zap size={12} className="text-[#ffaa44]" />
                  <span className="text-[9px] sm:text-[10px] mono text-gray-400">MEM_USAGE</span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-[#ffaa44]">{memUsage.toFixed(1)}%</span>
              </div>
              <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#ffaa44] rounded-full transition-all duration-500 ease-out shadow-[0_0_8px_#ffaa44]"
                  style={{ width: `${memUsage}%` }}
                />
              </div>
            </div>

            {/* Network Latency */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Wifi size={12} className="text-[#00f0ff]" />
                  <span className="text-[9px] sm:text-[10px] mono text-gray-400">NET_LATENCY</span>
                </div>
                <span className="text-[11px] sm:text-xs font-mono font-bold text-white">{networkLatency}ms</span>
              </div>
              <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#00f0ff] to-[#ff003c] rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (networkLatency / 30) * 100)}%` }}
                />
              </div>
              <div className="flex justify-between text-[7px] sm:text-[8px] mono text-gray-600">
                <span>P95: 18ms</span>
                <span>JITTER: 2.3ms</span>
                <span>PACKET_LOSS: 0%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional System Stats */}
        <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#00f0ff]/10">
          <div className="text-center p-2 border border-gray-800 rounded-lg">
            <Thermometer size={10} className="mx-auto mb-1 text-[#ffaa44]" />
            <p className="text-[8px] sm:text-[9px] font-mono text-white">42°C</p>
            <p className="text-[6px] sm:text-[7px] text-gray-600">THERMAL</p>
          </div>
          <div className="text-center p-2 border border-gray-800 rounded-lg">
            <Clock size={10} className="mx-auto mb-1 text-[#00f0ff]" />
            <p className="text-[8px] sm:text-[9px] font-mono text-white">14d 8h</p>
            <p className="text-[6px] sm:text-[7px] text-gray-600">UPTIME</p>
          </div>
          <div className="text-center p-2 border border-gray-800 rounded-lg">
            <Activity size={10} className="mx-auto mb-1 text-[#ff003c]" />
            <p className="text-[8px] sm:text-[9px] font-mono text-white">98.7%</p>
            <p className="text-[6px] sm:text-[7px] text-gray-600">AVAILABILITY</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[7px] sm:text-[8px] mono text-gray-600 pt-2 border-t border-[#00f0ff]/10">
          <span>SAMPLE_RATE: 2Hz</span>
          <span>BUFFER: 1024KB</span>
          <span>LAST_UPDATE: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </OSWindow>
  );
}