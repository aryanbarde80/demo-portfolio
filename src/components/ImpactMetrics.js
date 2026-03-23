"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from './OSWindow';
import { TrendingUp, Zap, Target, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ImpactMetrics() {
  const containerRef = useRef(null);

  const metrics = [
    { label: "API Latency Reduction", value: "40%", icon: Zap, color: "#00f0ff", desc: "via Redis caching & optimized query pipelines in IoT platform" },
    { label: "AI Model Accuracy", value: "95%", icon: Target, color: "#ff003c", desc: "YOLOv8 defect detection deployed in manufacturing QC pipeline" },
    { label: "Organic Traffic Growth", value: "30%", icon: TrendingUp, color: "#00f0ff", desc: "through SEO automation & Next.js optimization for marketing client" },
    { label: "ML Prediction Accuracy", value: "100%", icon: BarChart3, color: "#ff003c", desc: "Zerve Data Challenge 2026 — user success prediction from 409K events" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const cards = containerRef.current.querySelectorAll('.metric-card');
    gsap.fromTo(cards,
      { y: 60, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <OSWindow title="ANALYTICS/IMPACT_METRICS.SYS" icon={<BarChart3 size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-5xl">
      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="metric-card group relative p-4 border border-gray-800 hover:border-[#00f0ff]/50 rounded bg-[#030712]/60 hover:bg-[#00f0ff]/5 transition-all overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(circle at 20% 50%, ${m.color}08, transparent 70%)` }} />
              <div className="flex items-center gap-3 mb-3">
                <Icon size={20} style={{ color: m.color }} className="shrink-0" />
                <span className="text-[10px] mono text-gray-400 uppercase tracking-widest">{m.label}</span>
              </div>
              <p className="text-3xl sm:text-4xl font-black tabular-nums" style={{ color: m.color, textShadow: `0 0 20px ${m.color}60` }}>{m.value}</p>
              <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">{m.desc}</p>
            </div>
          );
        })}
      </div>
    </OSWindow>
  );
}
