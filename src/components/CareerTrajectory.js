"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from './OSWindow';
import { TrendingUp, Briefcase, GraduationCap, Award, Code, Rocket, Star, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CareerTrajectory() {
  const timelineRef = useRef(null);
  const graphRef = useRef(null);
  const [activePoint, setActivePoint] = useState(null);
  const [graphAnimated, setGraphAnimated] = useState(false);

  const milestones = [
    { year: "2022", month: "Nov", title: "Started B.Tech in CSE", org: "GGITS, Jabalpur", type: "education", icon: GraduationCap, color: "#818cf8", desc: "Began Bachelor of Technology in Computer Science & Engineering with CGPA 8.14/10", growthScore: 10 },
    { year: "2023", month: "Jul", title: "Cybersecurity Intern", org: "AICTE Cisco Virtual", type: "work", icon: Briefcase, color: "#f472b6", desc: "Cloud security architecture, AWS VPC/IAM configurations, network defense", growthScore: 25 },
    { year: "2023", month: "Oct", title: "E-Cell Creative Lead", org: "Udyam, GGITS", type: "leadership", icon: Star, color: "#fb923c", desc: "Graphic design & branding for entrepreneurship events and competitions", growthScore: 30 },
    { year: "2024", month: "Jul", title: "Cloud Security Intern", org: "AICTE Cisco Virtual", type: "work", icon: Briefcase, color: "#f472b6", desc: "Penetration testing methodologies, encryption protocols, network infrastructure", growthScore: 40 },
    { year: "2024", month: "Aug", title: "Full Stack Dev & Team Lead", org: "Ouranos Robotics", type: "work", icon: Rocket, color: "#818cf8", desc: "Led 5+ member team, built IoT console, 3D website, mobile app. Reduced API latency 40%", growthScore: 55 },
    { year: "2024", month: "Sep", title: "Intern of the Month", org: "Ouranos Robotics", type: "achievement", icon: Award, color: "#fb923c", desc: "Recognized for outstanding contribution to IoT dashboard development", growthScore: 60 },
    { year: "2024", month: "Oct", title: "Hacktoberfest 2024", org: "Open Source", type: "achievement", icon: Code, color: "#818cf8", desc: "4 accepted pull requests across JavaScript and Python repositories", growthScore: 62 },
    { year: "2024", month: "Oct", title: "RoomieQ India", org: "Freelance Project", type: "project", icon: Code, color: "#f472b6", desc: "MERN stack roommate platform with real-time chat, 40% latency reduction", growthScore: 65 },
    { year: "2025", month: "Jan", title: "TechSynergy IoT - 2nd Place", org: "Gyanotsav 2025, GGITS", type: "achievement", icon: Award, color: "#fb923c", desc: "Real-time IoT monitoring platform with sub-100ms telemetry and live dashboard", growthScore: 72 },
    { year: "2025", month: "Feb", title: "3x College Topper", org: "Code360 Leaderboard", type: "achievement", icon: Star, color: "#818cf8", desc: "Ranked #1 in college coding leaderboard across multiple semesters", growthScore: 75 },
    { year: "2025", month: "Sep", title: "Frappe Developer Intern", org: "Alfastack Solutions", type: "work", icon: Briefcase, color: "#f472b6", desc: "Supplier/Customer portals, AI defect detection (95% accuracy), ERP automation", growthScore: 82 },
    { year: "2025", month: "Oct", title: "5/5 Performance Rating", org: "Ouranos Robotics", type: "achievement", icon: Award, color: "#fb923c", desc: "Excellent rating for exceptional technical contributions during internship", growthScore: 85 },
    { year: "2025", month: "Dec", title: "TCS CodeVita - AIR 4905", org: "TCS CodeVita Season 13", type: "achievement", icon: Award, color: "#818cf8", desc: "All India Rank 4905 in Round 2 among 500,000+ participants", growthScore: 88 },
    { year: "2026", month: "Feb", title: "ClickMyze Agency Website", org: "Freelance", type: "project", icon: Code, color: "#f472b6", desc: "High-performance creative tech agency website with 8-step methodology showcase", growthScore: 92 },
    { year: "2026", month: "Mar", title: "IAENG Membership", org: "International Association of Engineers", type: "achievement", icon: Star, color: "#fb923c", desc: "Member of global engineering professional community", growthScore: 94 },
    { year: "2026", month: "Mar", title: "Fly with Zara", org: "Freelance - IATA Travel Agency", type: "project", icon: Rocket, color: "#818cf8", desc: "Complete digital transformation for IATA-certified travel agency", growthScore: 97 }
  ];

  const graphWidth = 800;
  const graphHeight = 200;
  const padT = 20, padR = 30, padB = 35, padL = 45;
  const plotW = graphWidth - padL - padR;
  const plotH = graphHeight - padT - padB;

  const points = milestones.map((m, i) => ({
    x: padL + (i / (milestones.length - 1)) * plotW,
    y: padT + plotH - (m.growthScore / 100) * plotH,
    ...m,
    index: i
  }));

  const createSmoothPath = (pts) => {
    if (pts.length < 2) return '';
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const curr = pts[i];
      const next = pts[i + 1];
      const cpx1 = curr.x + (next.x - curr.x) * 0.4;
      const cpy1 = curr.y;
      const cpx2 = next.x - (next.x - curr.x) * 0.4;
      const cpy2 = next.y;
      d += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${next.x} ${next.y}`;
    }
    return d;
  };

  const createAreaPath = (pts) => {
    const lp = createSmoothPath(pts);
    return `${lp} L ${pts[pts.length - 1].x} ${padT + plotH} L ${pts[0].x} ${padT + plotH} Z`;
  };

  const linePath = createSmoothPath(points);
  const areaPath = createAreaPath(points);
  const yLabels = [0, 25, 50, 75, 100];
  const yearLabels = ["2022", "2023", "2024", "2025", "2026"];

  useEffect(() => {
    if (!graphRef.current) return;
    const node = graphRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !graphAnimated) {
          setGraphAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [graphAnimated]);

  useEffect(() => {
    if (!timelineRef.current) return;
    const items = timelineRef.current.querySelectorAll('.trajectory-item');
    gsap.fromTo(items,
      { x: -30, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 85%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const typeColors = {
    work: { bg: "bg-[#f472b6]/10", border: "border-[#f472b6]/30", text: "text-[#f472b6]" },
    education: { bg: "bg-[#818cf8]/10", border: "border-[#818cf8]/30", text: "text-[#818cf8]" },
    achievement: { bg: "bg-[#fb923c]/10", border: "border-[#fb923c]/30", text: "text-[#fb923c]" },
    project: { bg: "bg-[#34d399]/10", border: "border-[#34d399]/30", text: "text-[#34d399]" },
    leadership: { bg: "bg-[#fbbf24]/10", border: "border-[#fbbf24]/30", text: "text-[#fbbf24]" }
  };

  const typeIconColors = {
    work: "#f472b6",
    education: "#818cf8",
    achievement: "#fb923c",
    project: "#34d399",
    leadership: "#fbbf24"
  };

  return (
    <OSWindow title="CAREER_TRAJECTORY.SYS" icon={<TrendingUp size={16} className="text-[#818cf8]" />} width="max-w-7xl">
      <div className="space-y-5">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-[#818cf8]" />
            <span className="text-xs mono text-gray-400">Career Timeline &mdash; 2022 to Present</span>
          </div>
          <div className="flex gap-3 text-[10px] mono">
            <span className="text-[#f472b6] bg-[#f472b6]/10 px-2 py-0.5 rounded">Work</span>
            <span className="text-[#fb923c] bg-[#fb923c]/10 px-2 py-0.5 rounded">Awards</span>
            <span className="text-[#34d399] bg-[#34d399]/10 px-2 py-0.5 rounded">Projects</span>
            <span className="text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">Education</span>
          </div>
        </div>

        {/* Career Growth Graph */}
        <div ref={graphRef} className="relative p-4 border border-[#818cf8]/15 bg-[#030712]/60 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(129,140,248,0.03)_0%,transparent_70%)]"></div>
          <div className="flex items-center justify-between mb-3 relative z-10">
            <div className="flex items-center gap-2">
              <TrendingUp size={14} className="text-[#818cf8]" />
              <span className="text-[11px] mono text-[#818cf8] font-bold uppercase tracking-wider">Growth Trajectory</span>
            </div>
            <div className="flex items-center gap-2 text-[9px] mono">
              <span className="flex items-center gap-1 text-[#34d399]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse"></span>
                ASCENDING
              </span>
              <span className="text-gray-600">Score: {milestones[milestones.length - 1].growthScore}%</span>
            </div>
          </div>

          <div className="relative z-10 w-full overflow-x-auto">
            <svg viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="w-full min-w-[600px]" style={{ height: '220px' }}>
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#818cf8" />
                  <stop offset="50%" stopColor="#f472b6" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
                <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#818cf8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.01" />
                </linearGradient>
                <filter id="glowF">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {yLabels.map((val) => {
                const y = padT + plotH - (val / 100) * plotH;
                return (
                  <g key={`y-${val}`}>
                    <line x1={padL} y1={y} x2={graphWidth - padR} y2={y} stroke="rgba(129,140,248,0.08)" strokeWidth="0.5" strokeDasharray="4,4" />
                    <text x={padL - 8} y={y + 3} textAnchor="end" fill="#6b6b80" fontSize="8" fontFamily="monospace">{val}</text>
                  </g>
                );
              })}

              {yearLabels.map((year, i) => {
                const x = padL + (i / (yearLabels.length - 1)) * plotW;
                return (
                  <text key={`x-${year}`} x={x} y={graphHeight - 5} textAnchor="middle" fill="#6b6b80" fontSize="9" fontFamily="monospace">{year}</text>
                );
              })}

              <path d={areaPath} fill="url(#areaGrad)" className={`transition-all duration-1000 ${graphAnimated ? 'opacity-100' : 'opacity-0'}`} />
              <path d={linePath} fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowF)" className={`transition-all duration-1000 ${graphAnimated ? 'opacity-100' : 'opacity-0'}`} style={{ strokeDasharray: graphAnimated ? '0' : '2000', strokeDashoffset: graphAnimated ? '0' : '2000', transition: 'stroke-dasharray 2s ease-out, stroke-dashoffset 2s ease-out, opacity 0.5s ease' }} />

              {points.map((pt, i) => (
                <g key={`pt-${i}`} className={`transition-all duration-500 ${graphAnimated ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${i * 80}ms` }}>
                  <circle cx={pt.x} cy={pt.y} r="6" fill="none" stroke={pt.color} strokeWidth="0.5" opacity={activePoint === i ? 0.6 : 0} className="transition-opacity duration-300" />
                  <circle cx={pt.x} cy={pt.y} r={activePoint === i ? 5 : 3.5} fill={pt.color} stroke="#0a0a0f" strokeWidth="1.5" className="cursor-pointer transition-all duration-200" onMouseEnter={() => setActivePoint(i)} onMouseLeave={() => setActivePoint(null)} />
                  {activePoint === i && (
                    <g>
                      <rect x={Math.max(5, Math.min(pt.x - 70, graphWidth - 145))} y={pt.y - 42} width="140" height="32" rx="6" fill="#0a0a0f" stroke={pt.color} strokeWidth="0.5" opacity="0.95" />
                      <text x={Math.max(75, Math.min(pt.x, graphWidth - 75))} y={pt.y - 27} textAnchor="middle" fill={pt.color} fontSize="8" fontFamily="monospace" fontWeight="bold">{pt.title}</text>
                      <text x={Math.max(75, Math.min(pt.x, graphWidth - 75))} y={pt.y - 17} textAnchor="middle" fill="#a1a1b5" fontSize="7" fontFamily="monospace">{pt.month} {pt.year} | Score: {pt.growthScore}</text>
                    </g>
                  )}
                </g>
              ))}

              <line x1={padL} y1={padT} x2={padL} y2={padT + plotH} stroke="rgba(129,140,248,0.15)" strokeWidth="1" />
              <line x1={padL} y1={padT + plotH} x2={graphWidth - padR} y2={padT + plotH} stroke="rgba(129,140,248,0.15)" strokeWidth="1" />
            </svg>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-3 text-[9px] mono relative z-10">
            {Object.entries(typeIconColors).map(([type, color]) => (
              <span key={type} className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></span>
                <span className="text-gray-500 capitalize">{type}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative pl-6 border-l-2 border-[#818cf8]/20 space-y-4">
          {milestones.map((m, i) => {
            const Icon = m.icon;
            const tc = typeColors[m.type];
            return (
              <div key={i} className="trajectory-item group relative">
                <div className="absolute -left-[31px] top-3 w-4 h-4 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center transition-transform group-hover:scale-125" style={{ backgroundColor: m.color }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/80"></div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 p-4 rounded-xl border border-gray-800/60 hover:border-[#818cf8]/30 bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#818cf8]/5 transition-all duration-300">
                  <div className="flex items-center gap-2 sm:w-24 shrink-0">
                    <span className="text-sm font-bold mono" style={{ color: m.color }}>{m.month} {m.year}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <Icon size={16} style={{ color: m.color }} />
                      <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors">{m.title}</h4>
                      <span className={`text-[9px] mono px-2 py-0.5 rounded ${tc.bg} ${tc.border} ${tc.text} border uppercase`}>{m.type}</span>
                    </div>
                    <p className="text-xs text-[#818cf8] mono mb-1">{m.org}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="flex flex-col items-center px-3 py-1.5 bg-[#030712] border border-gray-800 rounded-lg">
                      <span className="text-[8px] mono text-gray-600 uppercase">Growth</span>
                      <span className="text-sm font-bold mono" style={{ color: m.color }}>{m.growthScore}%</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-[#818cf8]/20 flex flex-wrap justify-between items-center gap-3 text-[10px] mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Briefcase size={12} className="text-[#f472b6]" /><span className="text-gray-500">3+ Professional Roles</span></span>
            <span className="flex items-center gap-1"><Award size={12} className="text-[#fb923c]" /><span className="text-gray-500">7+ Awards</span></span>
            <span className="flex items-center gap-1"><Code size={12} className="text-[#34d399]" /><span className="text-gray-500">10+ Projects</span></span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-600">TRAJECTORY: ASCENDING</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
