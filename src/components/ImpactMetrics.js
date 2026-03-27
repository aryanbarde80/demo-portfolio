"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from './OSWindow';
import { TrendingUp, Zap, Target, BarChart3, Database, Cpu, Award, Activity, GitBranch, Cloud, Gauge } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactMetrics() {
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const [chartAnimated, setChartAnimated] = useState(false);

  const metrics = [
    { label: "API Latency Reduction", value: "40%", numVal: 40, icon: Zap, color: "#818cf8", desc: "via Redis caching & optimized query pipelines in IoT platform at Ouranos Robotics", impact: "Performance" },
    { label: "AI Model Accuracy", value: "95%", numVal: 95, icon: Target, color: "#f472b6", desc: "YOLOv8 defect detection deployed in manufacturing QC pipeline at Alfastack Solutions", impact: "Accuracy" },
    { label: "Organic Traffic Growth", value: "30%", numVal: 30, icon: TrendingUp, color: "#fb923c", desc: "through SEO automation & Next.js optimization for Krapto Technologies marketing client", impact: "Growth" },
    { label: "ML Prediction Accuracy", value: "100%", numVal: 100, icon: BarChart3, color: "#818cf8", desc: "Zerve Data Challenge 2026 — user success prediction from 409K events", impact: "Precision" },
    { label: "Database Query Optimization", value: "40%", numVal: 40, icon: Database, color: "#f472b6", desc: "reduced query execution time through indexing and query restructuring in RoomieQ India project", impact: "Efficiency" },
    { label: "Web Performance Score", value: "95+", numVal: 95, icon: Activity, color: "#fb923c", desc: "Google PageSpeed score achieved for Trisight Global Solutions corporate website", impact: "Speed" },
    { label: "Team Leadership", value: "5+", numVal: 5, icon: GitBranch, color: "#818cf8", desc: "team members led and mentored at Ouranos Robotics with agile processes implementation", impact: "Leadership" },
    { label: "Search Ranking Improvement", value: "40", numVal: 40, unit: "positions", icon: Award, color: "#f472b6", desc: "improved search ranking for MGGP India Foundation NGO website through SEO optimization", impact: "Visibility" }
  ];

  const barChartData = [
    { label: "API Opt.", value: 40, color: "#818cf8" },
    { label: "AI Acc.", value: 95, color: "#f472b6" },
    { label: "Traffic", value: 30, color: "#fb923c" },
    { label: "ML Pred.", value: 100, color: "#818cf8" },
    { label: "DB Opt.", value: 40, color: "#f472b6" },
    { label: "PageSpd", value: 95, color: "#fb923c" },
  ];

  useEffect(() => {
    if (!chartRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !chartAnimated) {
          setChartAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, [chartAnimated]);

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

  const overallScore = 87;
  const circumference = 2 * Math.PI * 40;
  const dashOffset = circumference - (overallScore / 100) * circumference;

  return (
    <OSWindow title="ANALYTICS/IMPACT_METRICS.SYS" icon={<BarChart3 size={16} className="text-[#818cf8] animate-pulse" />} width="max-w-5xl">
      <div className="space-y-5">
        
        {/* Header with Stats */}
                <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#818cf8]/20">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={14} className="text-[#fb923c]" />
                    <span className="text-[10px] sm:text-xs mono text-gray-400">PERFORMANCE_DASHBOARD</span>
                  </div>
                  <div className="flex gap-2 text-[10px] sm:text-xs mono">
            <span className="text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">{totalMetrics} METRICS</span>
            <span className="text-[#fb923c] bg-[#fb923c]/10 px-2 py-0.5 rounded">+{Math.round(avgImprovement)}% AVG</span>
          </div>
        </div>

        {/* Visualization Row: Radial Gauge + Bar Chart */}
        <div ref={chartRef} className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Radial Gauge */}
          <div className="relative p-3 sm:p-5 border border-[#818cf8]/15 bg-[#030712]/60 rounded-xl overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(129,140,248,0.04)_0%,transparent_70%)]"></div>
            <div className="flex items-center gap-2 mb-3 relative z-10">
              <Gauge size={14} className="text-[#818cf8]" />
              <span className="text-[10px] mono text-[#818cf8] font-bold uppercase tracking-wider">Overall Performance Score</span>
            </div>
            <div className="relative z-10">
              <svg width="160" height="160" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(129,140,248,0.1)" strokeWidth="6" />
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gaugeGrad)" strokeWidth="6" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={chartAnimated ? dashOffset : circumference} transform="rotate(-90 50 50)" className="transition-all duration-[2s] ease-out" />
                <circle cx="50" cy="50" r="32" fill="none" stroke="rgba(129,140,248,0.05)" strokeWidth="1" />
                <text x="50" y="45" textAnchor="middle" fill="#818cf8" fontSize="20" fontWeight="bold" fontFamily="monospace" className={`transition-opacity duration-1000 ${chartAnimated ? 'opacity-100' : 'opacity-0'}`}>{overallScore}</text>
                <text x="50" y="57" textAnchor="middle" fill="#6b6b80" fontSize="7" fontFamily="monospace">PERCENTILE</text>
                <defs>
                  <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#818cf8" />
                    <stop offset="50%" stopColor="#f472b6" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex gap-4 mt-2 text-[9px] mono text-gray-500 relative z-10">
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#34d399]"></span> Excellent</span>
              <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-[#818cf8]"></span> 87th %ile</span>
            </div>
          </div>

          {/* Horizontal Bar Chart */}
          <div className="relative p-3 sm:p-5 border border-[#818cf8]/15 bg-[#030712]/60 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,114,182,0.03)_0%,transparent_70%)]"></div>
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <BarChart3 size={14} className="text-[#f472b6]" />
              <span className="text-[10px] mono text-[#f472b6] font-bold uppercase tracking-wider">Key Benchmarks</span>
            </div>
            <div className="space-y-3 relative z-10">
              {barChartData.map((bar, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[9px] mono text-gray-500 w-14 text-right shrink-0">{bar.label}</span>
                  <div className="flex-1 h-4 bg-gray-900/60 rounded-full overflow-hidden relative">
                    <div
                      className="h-full rounded-full transition-all duration-[1.5s] ease-out relative"
                      style={{
                        width: chartAnimated ? `${bar.value}%` : '0%',
                        backgroundColor: bar.color,
                        boxShadow: `0 0 10px ${bar.color}40`,
                        transitionDelay: `${i * 150}ms`
                      }}
                    >
                      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] mono text-white/80 font-bold">{bar.value}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div 
                key={i} 
                className="metric-card group relative p-3 sm:p-4 border border-gray-800 hover:border-[#818cf8]/50 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#030712] to-[#0a0f1a] hover:bg-[#818cf8]/5 transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Animated Background Glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ background: `radial-gradient(circle at 30% 40%, ${m.color}15, transparent 70%)` }} 
                />
                
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#818cf8] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  {/* Header with Icon and Impact Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon size={18} style={{ color: m.color }} className="shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[10px] mono text-gray-500 uppercase tracking-wider">{m.impact}</span>
                    </div>
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-gray-900 text-gray-600">LIVE</span>
                  </div>
                  
                  {/* Value */}
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black tabular-nums tracking-tight" style={{ color: m.color, textShadow: `0 0 15px ${m.color}60` }}>
                    {m.value}{m.unit && <span className="text-base sm:text-lg ml-0.5">{m.unit}</span>}
                  </p>
                  
                  {/* Mini Progress Bar */}
                  <div className="w-full h-1 bg-gray-900 rounded-full mt-2 overflow-hidden">
                    <div className="h-full rounded-full" style={{ width: `${Math.min(m.numVal, 100)}%`, backgroundColor: m.color, boxShadow: `0 0 6px ${m.color}40` }}></div>
                  </div>
                  
                  {/* Label */}
                  <p className="text-xs sm:text-sm font-semibold text-gray-300 mt-2 tracking-wide">{m.label}</p>
                  
                  {/* Description */}
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-2 leading-relaxed">{m.desc}</p>
                  
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
        <div className="mt-3 pt-3 border-t border-[#818cf8]/20 flex flex-wrap justify-between items-center gap-3 text-xs mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Cpu size={10} className="text-[#818cf8]" />
              <span className="text-gray-500">TOTAL_IMPACT: {totalMetrics} key metrics</span>
            </span>
            <span className="flex items-center gap-1">
              <Award size={10} className="text-[#fb923c]" />
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
