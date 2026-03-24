import OSWindow from "./OSWindow";
import { Activity, BarChart3, Binary, Radar } from "lucide-react";

export default function AnalyticsDashboard() {
  const stats = [
    { label: "FRONTEND", val: 92 },
    { label: "BACKEND", val: 88 },
    { label: "IOT/EMB", val: 95 },
    { label: "CLOUD/OPS", val: 85 },
    { label: "AI/CV", val: 90 }
  ];

  return (
    <OSWindow title="MODULES/ANALYSIS.STAT" icon={<Activity size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Radar Map (SVG) */}
        <div className="relative group flex items-center justify-center p-4 border border-[#00f0ff]/10 bg-[#030712]/50 rounded overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]"></div>
          
          <svg viewBox="0 0 100 100" className="w-full max-w-[250px] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
            {/* Hexagon Background Rings */}
            {[20, 40, 60, 80].map((r) => (
              <circle key={r} cx="50" cy="50" r={r/2} fill="none" stroke="rgba(0,240,255,0.1)" strokeWidth="0.5" />
            ))}
            
            {/* Spider Lines */}
            {[0, 72, 144, 216, 288].map((angle) => {
              const x2 = (50 + 40 * Math.cos(angle * Math.PI / 180)).toFixed(4);
              const y2 = (50 + 40 * Math.sin(angle * Math.PI / 180)).toFixed(4);
              return (
                <line 
                  key={angle} 
                  x1="50" y1="50" 
                  x2={x2} 
                  y2={y2} 
                  stroke="rgba(0,240,255,0.15)" strokeWidth="0.5" 
                />
              );
            })}

            {/* Data Polygon */}
            <polygon 
              points="
                50,15 
                88,40 
                75,80 
                25,80 
                12,40
              "
              fill="rgba(0,240,255,0.2)"
              stroke="#00f0ff"
              strokeWidth="1.5"
              className="animate-pulse"
            />
          </svg>

          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            <Radar size={12} className="text-[#00f0ff]" />
            <span className="text-[9px] mono text-[#00f0ff]/60 uppercase tracking-widest">Neural Domain Mapping</span>
          </div>
        </div>

        {/* Skill Entropy (Bar Charts) */}
        <div className="space-y-4">
          <h4 className="text-[#ff003c] mono text-[11px] font-bold flex items-center gap-2 mb-4">
            <BarChart3 size={14} /> DOMAIN_ENTROPY.VAL
          </h4>
          
          {stats.map((stat, i) => (
            <div key={i} className="group">
              <div className="flex justify-between text-[10px] mono text-gray-400 mb-1.5">
                <span>{stat.label}</span>
                <span className="text-[#ff003c]/80 group-hover:text-[#ff003c]">{stat.val}% EFFICIENCY</span>
              </div>
              <div className="relative h-2 w-full bg-gray-900 border border-gray-800 rounded-sm overflow-hidden p-[1px]">
                <div 
                  className="h-full bg-[#ff003c] transition-all duration-1000 shadow-[0_0_10px_rgba(255,0,60,0.5)]" 
                  style={{ width: `${stat.val}%`, transitionDelay: `${i * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Neural Traffic Graph */}
          <div className="mt-8 space-y-2">
            <div className="flex justify-between items-center text-[9px] mono text-[#00f0ff]/60 uppercase">
              <span>Neural_Network_Traffic</span>
              <span className="animate-pulse">Active</span>
            </div>
            <div className="h-16 relative bg-black/30 border border-gray-800/50 rounded overflow-hidden">
              <svg viewBox="0 0 100 40" className="w-full h-full">
                <path d="M0 20 Q 25 10, 50 20 T 100 20" fill="none" stroke="#00f0ff" strokeWidth="0.5" className="animate-[pulsion_3s_ease-in-out_infinite]" />
                <path d="M0 25 Q 25 15, 50 25 T 100 25" fill="none" stroke="#ff003c" strokeWidth="0.3" className="opacity-30 animate-[pulsion_4s_ease-in-out_infinite]" />
              </svg>
            </div>
          </div>

          <div className="mt-6 p-3 border border-[#00f0ff]/10 bg-[#00f0ff]/5 rounded flex items-center gap-3">
            <Binary size={20} className="text-[#00f0ff] animate-bounce" />
            <div>
              <p className="text-[10px] mono text-gray-300">SYSTEM_IQ: <span className="text-[#00f0ff]">OPTIMIZED</span></p>
              <div className="h-1 w-24 bg-gray-800 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-[#00f0ff] animate-[loading_3s_linear_infinite]" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
