"use client";
import { useEffect, useRef, useState } from 'react';
import OSWindow from './OSWindow';
import { Activity, Briefcase, Calendar, MapPin, GraduationCap, BarChart3, Award, Code, Rocket, Star, Clock, Zap, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SystemMonitorNode() {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const timeline = [
    { year: "2026", month: "Mar", role: "Fly with Zara - IATA Travel Agency", company: "Freelance", type: "project", color: "#34d399", highlight: "Complete digital transformation for IATA-certified travel agency with booking system", duration: "2 months", tech: ["Next.js", "React", "Tailwind CSS"] },
    { year: "2026", month: "Feb", role: "ClickMyze Agency Website", company: "Freelance", type: "project", color: "#34d399", highlight: "High-performance creative tech agency website with 8-step methodology showcase", duration: "1 month", tech: ["Next.js", "GSAP", "Framer Motion"] },
    { year: "2026", month: "Mar", role: "IAENG Member", company: "International Association of Engineers", type: "achievement", color: "#fb923c", highlight: "Member of global engineering professional community", duration: "", tech: [] },
    { year: "2025", month: "Sep", role: "Frappe Developer Intern", company: "Alfastack Solutions", type: "work", color: "#818cf8", highlight: "Supplier/Customer portals, AI defect detection (95% accuracy), ERP automation", duration: "4 months", tech: ["Python", "Frappe", "YOLOv8", "ERPNext"] },
    { year: "2025", month: "Dec", role: "TCS CodeVita Season 13", company: "AIR 4905 (Top 1%)", type: "achievement", color: "#fb923c", highlight: "Round 2 qualification among 500,000+ participants nationwide", duration: "", tech: ["C++", "Python", "DSA"] },
    { year: "2025", month: "Oct", role: "5/5 Performance Rating", company: "Ouranos Robotics", type: "achievement", color: "#fb923c", highlight: "Excellent rating for exceptional technical contributions during internship", duration: "", tech: [] },
    { year: "2025", month: "Feb", role: "3x College Topper", company: "Code360 Leaderboard", type: "achievement", color: "#fb923c", highlight: "Ranked #1 in college coding leaderboard across multiple semesters", duration: "", tech: ["DSA", "Problem Solving"] },
    { year: "2025", month: "Jan", role: "TechSynergy IoT - 2nd Place", company: "Gyanotsav 2025, GGITS", type: "achievement", color: "#fb923c", highlight: "Real-time IoT monitoring platform with sub-100ms telemetry", duration: "", tech: ["React", "Socket.io", "ESP32"] },
    { year: "2024", month: "Aug", role: "Full Stack Dev & Team Lead", company: "Ouranos Robotics", type: "work", color: "#818cf8", highlight: "Led 5+ member team, built IoT console, 3D website, mobile app. 40% latency reduction", duration: "6 months", tech: ["React", "Node.js", "Redis", "Three.js"] },
    { year: "2024", month: "Oct", role: "Hacktoberfest 2024 Contributor", company: "Open Source", type: "achievement", color: "#fb923c", highlight: "4 accepted pull requests across JavaScript and Python repositories", duration: "", tech: ["JavaScript", "Python"] },
    { year: "2024", month: "Oct", role: "RoomieQ India Platform", company: "Freelance Project", type: "project", color: "#34d399", highlight: "MERN stack roommate platform with real-time chat, 40% DB query optimization", duration: "2 months", tech: ["React", "Node.js", "MongoDB", "Socket.io"] },
    { year: "2024", month: "Jul", role: "Cloud Security Intern", company: "AICTE Cisco Virtual", type: "work", color: "#818cf8", highlight: "Penetration testing, encryption protocols, network infrastructure security", duration: "2 months", tech: ["AWS", "Linux", "Network Security"] },
    { year: "2023", month: "Oct", role: "E-Cell Creative Lead", company: "Udyam, GGITS", type: "leadership", color: "#fbbf24", highlight: "Led graphic design & branding for entrepreneurship events and competitions", duration: "1 year", tech: ["Design", "Branding", "Leadership"] },
    { year: "2023", month: "Jul", role: "Cybersecurity Intern", company: "AICTE Cisco Virtual", type: "work", color: "#818cf8", highlight: "Cloud security architecture, AWS VPC/IAM configurations, network defense", duration: "2 months", tech: ["AWS", "VPC", "IAM", "Cybersecurity"] },
    { year: "2022", month: "Nov", role: "B.Tech CSE", company: "GGITS, Jabalpur", type: "education", color: "#f472b6", highlight: "Computer Science & Engineering | CGPA: 8.14/10 | Expected 2027", duration: "4 years", tech: ["DSA", "OS", "DBMS", "CN"] },
  ];

  const filteredTimeline = activeFilter === 'all' ? timeline : timeline.filter(item => item.type === activeFilter);

  const filters = [
    { key: 'all', label: 'All', count: timeline.length },
    { key: 'work', label: 'Work', count: timeline.filter(t => t.type === 'work').length },
    { key: 'project', label: 'Projects', count: timeline.filter(t => t.type === 'project').length },
    { key: 'achievement', label: 'Awards', count: timeline.filter(t => t.type === 'achievement').length },
    { key: 'education', label: 'Education', count: timeline.filter(t => t.type === 'education').length },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll('.timeline-item');
    gsap.fromTo(items,
      { x: -30, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const getIcon = (type) => {
    if (type === 'work') return Briefcase;
    if (type === 'education') return GraduationCap;
    if (type === 'project') return Code;
    if (type === 'achievement') return Award;
    if (type === 'leadership') return Star;
    return Activity;
  };

  const typeStyles = {
    work: { bg: "bg-[#818cf8]/10", border: "border-[#818cf8]/30", text: "text-[#818cf8]" },
    education: { bg: "bg-[#f472b6]/10", border: "border-[#f472b6]/30", text: "text-[#f472b6]" },
    achievement: { bg: "bg-[#fb923c]/10", border: "border-[#fb923c]/30", text: "text-[#fb923c]" },
    project: { bg: "bg-[#34d399]/10", border: "border-[#34d399]/30", text: "text-[#34d399]" },
    leadership: { bg: "bg-[#fbbf24]/10", border: "border-[#fbbf24]/30", text: "text-[#fbbf24]" }
  };

  return (
    <OSWindow title="MODULES/CAREER_TIMELINE.LOG" icon={<Activity size={16} className="text-[#818cf8] animate-pulse" />} width="max-w-5xl">
      <div className="space-y-5">
        
        {/* Header with Stats Summary */}
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <BarChart3 size={12} className="text-[#818cf8]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">CAREER_TIMELINE — 2022 to Present</span>
          </div>
          <div className="flex items-center gap-2 text-[9px] sm:text-[10px] mono">
            <span className="text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">{timeline.length} ENTRIES</span>
            <span className="text-[#34d399] bg-[#34d399]/10 px-2 py-0.5 rounded flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse"></span>
              ACTIVE
            </span>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 border border-[#818cf8]/15 rounded-lg bg-[#030712]/50 text-center group hover:border-[#818cf8]/40 transition-all">
            <Briefcase size={16} className="text-[#818cf8] mx-auto mb-1" />
            <p className="text-lg font-bold text-[#818cf8]">4</p>
            <p className="text-[8px] mono text-gray-500 uppercase">Internships</p>
          </div>
          <div className="p-3 border border-[#34d399]/15 rounded-lg bg-[#030712]/50 text-center group hover:border-[#34d399]/40 transition-all">
            <Rocket size={16} className="text-[#34d399] mx-auto mb-1" />
            <p className="text-lg font-bold text-[#34d399]">10+</p>
            <p className="text-[8px] mono text-gray-500 uppercase">Projects</p>
          </div>
          <div className="p-3 border border-[#fb923c]/15 rounded-lg bg-[#030712]/50 text-center group hover:border-[#fb923c]/40 transition-all">
            <Award size={16} className="text-[#fb923c] mx-auto mb-1" />
            <p className="text-lg font-bold text-[#fb923c]">7+</p>
            <p className="text-[8px] mono text-gray-500 uppercase">Awards</p>
          </div>
          <div className="p-3 border border-[#f472b6]/15 rounded-lg bg-[#030712]/50 text-center group hover:border-[#f472b6]/40 transition-all">
            <Target size={16} className="text-[#f472b6] mx-auto mb-1" />
            <p className="text-lg font-bold text-[#f472b6]">8.14</p>
            <p className="text-[8px] mono text-gray-500 uppercase">CGPA</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`text-[9px] mono px-3 py-1 rounded-full border transition-all duration-200 ${
                activeFilter === f.key
                  ? 'bg-[#818cf8]/20 border-[#818cf8]/50 text-[#818cf8]'
                  : 'bg-transparent border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-400'
              }`}
            >
              {f.label} ({f.count})
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div ref={containerRef} className="relative space-y-3 pl-6">
          {/* Vertical Line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#818cf8] via-[#f472b6] to-[#fb923c] opacity-30"></div>
          
          {filteredTimeline.map((item, idx) => {
            const Icon = getIcon(item.type);
            const ts = typeStyles[item.type] || typeStyles.work;
            return (
              <div key={idx} className="timeline-item group relative flex items-start gap-4 p-3 sm:p-4 border border-gray-800 hover:border-[#818cf8]/40 rounded-lg bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#818cf8]/5 transition-all duration-300">
                {/* Timeline Dot */}
                <div className="absolute -left-[19px] top-4 w-3 h-3 rounded-full border-2 group-hover:scale-125 transition-transform" style={{ borderColor: item.color, backgroundColor: `${item.color}30` }}>
                  <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: item.color }}></div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <Icon size={14} style={{ color: item.color }} />
                    <span className="text-xs sm:text-sm font-bold text-white group-hover:text-[#818cf8] transition-colors">{item.role}</span>
                    <span className={`text-[8px] mono px-1.5 py-0.5 rounded border ${ts.bg} ${ts.border} ${ts.text} uppercase`}>{item.type}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-[10px] sm:text-[11px] text-gray-400 mb-1.5">
                    <span className="flex items-center gap-1">
                      <MapPin size={10} className="shrink-0" />
                      {item.company}
                    </span>
                    <span className="flex items-center gap-1" style={{ color: item.color }}>
                      <Calendar size={10} />
                      {item.month} {item.year}
                    </span>
                    {item.duration && (
                      <span className="flex items-center gap-1 text-gray-500">
                        <Clock size={10} />
                        {item.duration}
                      </span>
                    )}
                  </div>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 leading-relaxed">{item.highlight}</p>
                  {item.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tech.map((t, j) => (
                        <span key={j} className="text-[8px] mono px-1.5 py-0.5 bg-[#030712] border border-gray-800 text-gray-500 rounded">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap justify-between items-center text-[7px] sm:text-[8px] mono text-gray-600 pt-2 border-t border-[#818cf8]/10 gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Calendar size={10} className="text-[#818cf8]" /> ACTIVE_SINCE: 2022</span>
            <span className="flex items-center gap-1"><Zap size={10} className="text-[#fb923c]" /> EXPERIENCE: 3+ years</span>
          </div>
          <span className="flex items-center gap-1"><MapPin size={10} className="text-[#f472b6]" /> LOCATION: JABALPUR, IND</span>
        </div>
      </div>
    </OSWindow>
  );
}
