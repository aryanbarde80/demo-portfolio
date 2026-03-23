"use client";
import OSWindow from './OSWindow';
import { Zap, Activity, ShieldCheck, Gauge } from 'lucide-react';

export default function PerformanceBenchmarks() {
  const benchmarks = [
    { label: "API_LATENCY", before: 450, after: 85, unit: "ms", icon: Zap, color: "#00f0ff" },
    { label: "MODEL_INFERENCE", before: 120, after: 15, unit: "ms", icon: Gauge, color: "#ff003c" },
    { label: "SERVER_UPTIME", before: 99.1, after: 99.98, unit: "%", icon: Activity, color: "#00f0ff" },
    { label: "DB_QUERY_SPEED", before: 1200, after: 140, unit: "ms", icon: ShieldCheck, color: "#ff003c" },
  ];

  return (
    <OSWindow title="SYSTEM/BENCHMARKS.STAT" icon={<Gauge size={16} className="text-[#ff003c]" />} width="max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
        {benchmarks.map((b, i) => {
          const Icon = b.icon;
          const improvement = ((b.before - b.after) / b.before * 100).toFixed(0);
          return (
            <div key={i} className="space-y-3 p-4 border border-gray-800/80 bg-gray-950/40 rounded-lg group hover:border-gray-700 transition-colors">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Icon size={14} style={{ color: b.color }} />
                  <span className="text-[10px] mono font-bold text-gray-400">{b.label}</span>
                </div>
                <span className="text-[9px] mono px-1.5 py-0.5 rounded-sm bg-green-500/10 text-green-500 border border-green-500/20">-{improvement}% DELTA</span>
              </div>
              
              <div className="space-y-4">
                <div className="relative h-2 bg-gray-900 rounded-full overflow-hidden">
                   {/* Background Bar (Before) */}
                   <div className="absolute inset-0 bg-gray-800" />
                   {/* Metric Bar (After) - Inverse mapping since lower is better for latency */}
                   <div 
                     className="absolute inset-y-0 left-0 transition-all duration-1000 ease-out delay-500 opacity-80"
                     style={{ 
                       width: `${(b.after / b.before * 100)}%`, 
                       backgroundColor: b.color,
                       boxShadow: `0 0 10px ${b.color}40`
                     }} 
                   />
                </div>
                
                <div className="flex justify-between items-end">
                  <div className="text-left">
                    <p className="text-[8px] mono text-gray-500 uppercase">Legacy System</p>
                    <p className="text-xs text-gray-400 font-bold">{b.before}{b.unit}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] mono text-[#00f0ff] uppercase">Optimized Engine</p>
                    <p className="text-lg font-black" style={{ color: b.color }}>{b.after}<span className="text-xs ml-0.5">{b.unit}</span></p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </OSWindow>
  );
}
