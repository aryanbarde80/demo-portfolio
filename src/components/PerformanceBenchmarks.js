"use client";
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from './OSWindow';
import { Activity, Cpu, Zap, Clock, Server, Database, Globe, TrendingUp, BarChart3, Gauge } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function PerformanceBenchmarks() {
  const containerRef = useRef(null);
  const [animatedValues, setAnimatedValues] = useState({});

  const benchmarks = [
    { label: "API Latency Reduction", value: 40, max: 100, unit: "%", color: "#00f0ff", icon: Zap, category: "Ouranos Robotics", desc: "Redis caching + query optimization" },
    { label: "YOLOv8 Defect Detection", value: 95, max: 100, unit: "%", color: "#ff003c", icon: Activity, category: "Alfastack Solutions", desc: "Manufacturing QC pipeline accuracy" },
    { label: "Organic Traffic Growth", value: 30, max: 100, unit: "%", color: "#ffaa44", icon: TrendingUp, category: "Krapto Technologies", desc: "SEO + Next.js optimization" },
    { label: "DB Query Optimization", value: 40, max: 100, unit: "%", color: "#00f0ff", icon: Database, category: "RoomieQ India", desc: "Indexing & query restructuring" },
    { label: "Search Ranking Boost", value: 40, max: 100, unit: "pos", color: "#ff003c", icon: Globe, category: "MGGP Foundation", desc: "SEO optimization for NGO site" },
    { label: "ML Prediction (Zerve)", value: 100, max: 100, unit: "%", color: "#ffaa44", icon: BarChart3, category: "Data Challenge 2026", desc: "409K event user success prediction" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const bars = containerRef.current.querySelectorAll('.benchmark-bar');
    gsap.fromTo(bars,
      { scaleX: 0, transformOrigin: 'left' },
      {
        scaleX: 1, duration: 0.8, stagger: 0.05, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const getPerformanceGrade = (value, max) => {
    const pct = (value / max) * 100;
    if (pct >= 90) return { grade: "A+", color: "#00f0ff" };
    if (pct >= 80) return { grade: "A", color: "#00f0ff" };
    if (pct >= 70) return { grade: "B", color: "#ffaa44" };
    return { grade: "C", color: "#ff003c" };
  };

  return (
    <OSWindow title="BENCHMARK/PERFORMANCE_METRICS.SYS" icon={<Gauge size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-5">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <Activity size={12} className="text-[#00f0ff]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">PERFORMANCE_BENCHMARKS</span>
          </div>
          <div className="flex gap-2 text-[9px] sm:text-[10px] mono">
            <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">{benchmarks.length} METRICS</span>
            <span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded">ALL PASSING</span>
          </div>
        </div>

        {/* Benchmarks Grid */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {benchmarks.map((b, idx) => {
            const Icon = b.icon;
            const pct = Math.min((b.value / b.max) * 100, 100);
            const isLowerBetter = b.unit === 's' || b.unit === 'ms' || b.unit === 'KB';
            const displayPct = isLowerBetter ? Math.max(100 - pct, 10) : pct;
            const { grade, color: gradeColor } = getPerformanceGrade(
              isLowerBetter ? (b.max - b.value) : b.value,
              b.max
            );

            return (
              <div key={idx} className="group p-3 border border-gray-800 hover:border-[#00f0ff]/40 rounded-lg bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#00f0ff]/5 transition-all duration-300">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon size={12} style={{ color: b.color }} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[9px] sm:text-[10px] text-gray-400 group-hover:text-white transition-colors font-mono">
                      {b.label}
                    </span>
                  </div>
                  <span className="text-sm font-bold font-mono" style={{ color: b.color }}>
                    {b.value}{b.unit}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-gray-900 rounded-full overflow-hidden">
                  <div
                    className="benchmark-bar h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${displayPct}%`,
                      backgroundColor: b.color,
                      boxShadow: `0 0 8px ${b.color}60`
                    }}
                  />
                </div>
                <div className="flex justify-between mt-1.5">
                  <span className="text-[8px] text-gray-600 mono">{b.category}</span>
                </div>
                {b.desc && <p className="text-[8px] text-gray-500 mt-1 italic">{b.desc}</p>}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-[#00f0ff]/20 flex flex-wrap justify-between items-center gap-3 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Zap size={10} className="text-[#00f0ff]" />
              <span className="text-gray-500">OVERALL: OPTIMIZED</span>
            </span>
            <span className="flex items-center gap-1">
              <TrendingUp size={10} className="text-[#ffaa44]" />
              <span className="text-gray-500">GRADE: A+</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-gray-600">ALL_BENCHMARKS_PASSING</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
