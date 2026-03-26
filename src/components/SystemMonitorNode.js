"use client";
import { useEffect, useRef } from 'react';
import OSWindow from './OSWindow';
import { Activity, Briefcase, Calendar, MapPin, GraduationCap, BarChart3 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SystemMonitorNode() {
  const containerRef = useRef(null);

  const timeline = [
    { year: "2026", role: "Full-Stack Developer Intern", company: "Ouranos Robotics", type: "work", color: "#00f0ff", highlight: "40% latency reduction via Redis caching" },
    { year: "2025", role: "Web Developer Intern", company: "Krapto Technologies", type: "work", color: "#ff003c", highlight: "30% organic traffic growth" },
    { year: "2025", role: "AI/ML Intern", company: "Alfastack Solutions", type: "work", color: "#ffaa44", highlight: "95% YOLOv8 defect detection accuracy" },
    { year: "2025", role: "TCS CodeVita Season 13", company: "AIR 4900+ (Top 5%)", type: "achievement", color: "#00f0ff", highlight: "Competitive programming" },
    { year: "2024", role: "Hacktoberfest Contributor", company: "4 PRs Merged", type: "achievement", color: "#ff003c", highlight: "Open source contributions" },
    { year: "2023-27", role: "B.Tech CSE", company: "GGITS, Jabalpur", type: "education", color: "#ffaa44", highlight: "CGPA: 7.5+" },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.timeline-item');
    gsap.fromTo(items,
      { x: -30, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const getIcon = (type) => {
    if (type === 'work') return Briefcase;
    if (type === 'education') return GraduationCap;
    return Activity;
  };

  return (
    <OSWindow title="MODULES/CAREER_TIMELINE.LOG" icon={<Activity size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-5">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-2 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <BarChart3 size={12} className="text-[#00f0ff]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">CAREER_TRAJECTORY</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] sm:text-[10px] mono">
            <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">{timeline.length} MILESTONES</span>
          </div>
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative space-y-4 pl-6">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#00f0ff] via-[#ff003c] to-[#ffaa44] opacity-30"></div>
          
          {timeline.map((item, idx) => {
            const Icon = getIcon(item.type);
            return (
              <div key={idx} className="timeline-item group relative flex items-start gap-4 p-3 border border-gray-800 hover:border-[#00f0ff]/40 rounded-lg bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#00f0ff]/5 transition-all duration-300">
                {/* Timeline Dot */}
                <div className="absolute -left-[19px] top-4 w-3 h-3 rounded-full border-2 group-hover:scale-125 transition-transform" style={{ borderColor: item.color, backgroundColor: `${item.color}30` }}>
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: item.color }}></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <Icon size={12} style={{ color: item.color }} />
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#00f0ff] transition-colors">{item.role}</span>
                    <span className="text-[8px] mono px-1.5 py-0.5 rounded" style={{ backgroundColor: `${item.color}15`, color: item.color }}>{item.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-gray-400">
                    <MapPin size={10} className="shrink-0" />
                    <span>{item.company}</span>
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 mt-1 italic">{item.highlight}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-[7px] sm:text-[8px] mono text-gray-600 pt-2 border-t border-[#00f0ff]/10">
          <span className="flex items-center gap-1"><Calendar size={10} className="text-[#00f0ff]" /> ACTIVE_SINCE: 2023</span>
          <span className="flex items-center gap-1"><MapPin size={10} className="text-[#ffaa44]" /> LOCATION: JABALPUR, IND</span>
        </div>
      </div>
    </OSWindow>
  );
}
