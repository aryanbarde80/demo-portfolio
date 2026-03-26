"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from './OSWindow';
import { TrendingUp, Zap, Target, BarChart3, Database, Cpu, Award, Activity, GitBranch, Cloud } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactMetrics() {
  const containerRef = useRef(null);

  const metrics = [
    { 
      label: "API Latency Reduction", 
      value: "40%", 
      icon: Zap, 
      color: "#00f0ff", 
      desc: "via Redis caching & optimized query pipelines in IoT platform at Ouranos Robotics",
      impact: "Performance"
    },
    { 
      label: "AI Model Accuracy", 
      value: "95%", 
      icon: Target, 
      color: "#ff003c", 
      desc: "YOLOv8 defect detection deployed in manufacturing QC pipeline at Alfastack Solutions",
      impact: "Accuracy"
    },
    { 
      label: "Organic Traffic Growth", 
      value: "30%", 
      icon: TrendingUp, 
      color: "#ffaa44", 
      desc: "through SEO automation & Next.js optimization for Krapto Technologies marketing client",
      impact: "Growth"
    },
    { 
      label: "ML Prediction Accuracy", 
      value: "100%", 
      icon: BarChart3, 
      color: "#00f0ff", 
      desc: "Zerve Data Challenge 2026 — user success prediction from 409K events",
      impact: "Precision"
    },
    { 
      label: "Database Query Optimization", 
      value: "40%", 
      icon: Database, 
      color: "#ff003c", 
      desc: "reduced query execution time through indexing and query restructuring in RoomieQ India project",
      impact: "Efficiency"
    },
    { 
      label: "Web Performance Score", 
      value: "95+", 
      icon: Activity, 
      color: "#ffaa44", 
      desc: "Google PageSpeed score achieved for Trisight Global Solutions corporate website",
      impact: "Speed"
    },
    { 
      label: "Team Leadership", 
      value: "5+", 
      icon: GitBranch, 
      color: "#00f0ff", 
      desc: "team members led and mentored at Ouranos Robotics with agile processes implementation",
      impact: "Leadership"
    },
    { 
      label: "Search Ranking Improvement", 
      value: "40", 
      unit: "positions", 
      icon: Award, 
      color: "#ff003c", 
      desc: "improved search ranking for MGGP India Foundation NGO website through SEO optimization",
      impact: "Visibility"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.metric-card');
    gsap.fromTo(cards,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const totalMetrics = metrics.length;
  const avgImprovement = metrics.reduce((acc, m) => {
    const val = parseInt(m.value);
    return acc + (isNaN(val) ? 0 : val);
  }, 0) / metrics.filter(m => !isNaN(parseInt(m.value))).length;

  return (
    <OSWindow title="ANALYTICS/IMPACT_METRICS.SYS" icon={<BarChart3 size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-5xl">
      <div className="space-y-5">
        
        {/* Header with Stats */}
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <TrendingUp size={12} className="text-[#ffaa44]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">PERFORMANCE_DASHBOARD</span>
          </div>
          <div className="flex gap-2 text-[9px] sm:text-[10px] mono">
            <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">{totalMetrics} METRICS</span>
            <span className="text-[#ffaa44] bg-[#ffaa44]/10 px-2 py-0.5 rounded">+{Math.round(avgImprovement)}% AVG</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div 
                key={i} 
                className="metric-card group relative p-4 border border-gray-800 hover:border-[#00f0ff]/50 rounded-xl bg-gradient-to-br from-[#030712] to-[#0a0f1a] hover:bg-[#00f0ff]/5 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Animated Background Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ background: `radial-gradient(circle at 30% 40%, ${m.color}15, transparent 70%)` }} 
                />
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Header with Icon and Impact Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon size={18} style={{ color: m.color }} className="shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[8px] sm:text-[9px] mono text-gray-500 uppercase tracking-wider">{m.impact}</span>
                    </div>
                    <span className="text-[7px] sm:text-[8px] px-1.5 py-0.5 rounded bg-gray-900 text-gray-600">LIVE</span>
                  </div>
                  
                  {/* Value */}
                  <p className="text-3xl sm:text-4xl font-black tabular-nums tracking-tight" style={{ color: m.color, textShadow: `0 0 15px ${m.color}60` }}>
                    {m.value}{m.unit && <span className="text-base sm:text-lg ml-0.5">{m.unit}</span>}
                  </p>
                  
                  {/* Label */}
                  <p className="text-[11px] sm:text-xs font-semibold text-gray-300 mt-2 tracking-wide">{m.label}</p>
                  
                  {/* Description */}
                  <p className="text-[9px] sm:text-[10px] text-gray-500 mt-2 leading-relaxed">{m.desc}</p>
                  
                  {/* Hover Indicator */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: m.color }}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer - Summary Stats */}
        <div className="mt-3 pt-3 border-t border-[#00f0ff]/20 flex flex-wrap justify-between items-center gap-3 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Cpu size={10} className="text-[#00f0ff]" />
              <span className="text-gray-500">TOTAL_IMPACT: {totalMetrics} key metrics</span>
            </span>
            <span className="flex items-center gap-1">
              <Award size={10} className="text-[#ffaa44]" />
              <span className="text-gray-500">OPTIMIZATION_RATE: {Math.round(avgImprovement)}% avg</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud size={10} className="text-gray-600" />
            <span className="text-gray-600">PRODUCTION_READY</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}