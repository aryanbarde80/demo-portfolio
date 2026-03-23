"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import OSWindow from './OSWindow';
import { Share2, Server, Database, Activity, Cpu } from 'lucide-react';

export default function SystemArchitectureNode() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('.flow-line');
    gsap.fromTo(paths, 
      { strokeDashoffset: 1000, opacity: 0 }, 
      { strokeDashoffset: 0, opacity: 1, duration: 2, stagger: 0.3, ease: "power2.inOut", repeat: -1 }
    );
  }, []);

  return (
    <OSWindow title="ENGINEERING/ARCHITECTURE_01.MD" icon={<Share2 size={16} className="text-[#00f0ff]" />} width="max-w-5xl">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-4">
        {/* Left: Diagram */}
        <div className="relative w-full max-w-lg aspect-video border border-gray-800 bg-black/40 rounded-lg p-6 flex items-center justify-center overflow-hidden">
          <svg ref={svgRef} viewBox="0 0 400 240" className="w-full h-full">
            {/* UI Tier */}
            <rect x="20" y="90" width="60" height="60" rx="4" className="fill-[#00f0ff]/10 stroke-[#00f0ff] stroke-2" />
            <text x="50" y="125" textAnchor="middle" className="fill-[#00f0ff] text-[10px] mono font-bold">EDGE_UI</text>
            
            {/* API / Load Balancer */}
            <rect x="150" y="90" width="80" height="60" rx="4" className="fill-[#ff003c]/10 stroke-[#ff003c] stroke-2" />
            <text x="190" y="125" textAnchor="middle" className="fill-[#ff003c] text-[10px] mono font-bold">KRP_GATEWAY</text>
            <text x="190" y="138" textAnchor="middle" className="fill-gray-500 text-[8px] mono">LOAD_BALANCER</text>

            {/* Backend Services */}
            <rect x="300" y="30" width="80" height="50" rx="4" className="fill-gray-800 stroke-gray-600 stroke-2" />
            <text x="340" y="60" textAnchor="middle" className="fill-gray-300 text-[9px] mono">IOT_SVC</text>
            
            <rect x="300" y="100" width="80" height="50" rx="4" className="fill-gray-800 stroke-gray-600 stroke-2" />
            <text x="340" y="130" textAnchor="middle" className="fill-gray-300 text-[9px] mono">REDIS_CACHE</text>
            
            <rect x="300" y="170" width="80" height="50" rx="4" className="fill-gray-800 stroke-gray-600 stroke-2" />
            <text x="340" y="200" textAnchor="middle" className="fill-gray-300 text-[9px] mono">ML_PROC</text>

            {/* Connection Lines */}
            <path d="M80 120 H150" className="flow-line stroke-[#00f0ff]/40 stroke-2 fill-none" strokeDasharray="1000" />
            <path d="M230 110 L300 55" className="flow-line stroke-[#ff003c]/40 stroke-2 fill-none" strokeDasharray="1000" />
            <path d="M230 120 L300 125" className="flow-line stroke-[#ff003c]/40 stroke-2 fill-none" strokeDasharray="1000" />
            <path d="M230 130 L300 195" className="flow-line stroke-[#ff003c]/40 stroke-2 fill-none" strokeDasharray="1000" />
          </svg>
          
          <div className="absolute top-2 right-2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[8px] mono text-gray-500">LIVE_SYSTEM_SYNC</span>
          </div>
        </div>

        {/* Right: Technical Explanation */}
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-[#00f0ff]" />
              <h4 className="text-xs font-bold text-gray-200 uppercase tracking-tighter">Architecture Deep Dive</h4>
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed italic">
              Visualizing the High-Concurrency IoT & ML pipeline designed for Ouranos Robotics.
            </p>
          </div>
          
          <ul className="space-y-2">
            <li className="flex gap-2 text-[11px]">
              <span className="text-[#ff003c] font-bold">/01</span>
              <span className="text-gray-400"><strong className="text-gray-200">KRP_GATEWAY:</strong> Custom Load Balancer handling 1,000+ simultaneous requests via optimized Round-Robin implementation.</span>
            </li>
            <li className="flex gap-2 text-[11px]">
              <span className="text-[#ff003c] font-bold">/02</span>
              <span className="text-gray-400"><strong className="text-gray-200">Cache Layer:</strong> Redis-based query acceleration reducing telemetry latency by <span className="text-[#00f0ff]">40%</span>.</span>
            </li>
            <li className="flex gap-2 text-[11px]">
              <span className="text-[#ff003c] font-bold">/03</span>
              <span className="text-gray-400"><strong className="text-gray-200">YOLOv8 Edge:</strong> Distributed ML processing node for real-time manufacturing defect detection.</span>
            </li>
          </ul>
        </div>
      </div>
    </OSWindow>
  );
}
