"use client";
import OSWindow from './OSWindow';
import { User, Languages, Brain, CheckCircle2, MapPin, Calendar, Award, Zap, Users, Code, Cpu, Cloud, GitBranch } from 'lucide-react';

export default function BioMatrix() {
  const languages = [
    { name: "English", level: "Fluent (Professional)", progress: 95, color: "#818cf8", desc: "Reading, Writing, Speaking" },
    { name: "Hindi", level: "Native", progress: 100, color: "#f472b6", desc: "Fluent reading, writing, speaking" },
    { name: "Marathi", level: "Conversational", progress: 70, color: "#fb923c", desc: "Basic speaking and understanding" },
  ];

  const coreCompetencies = [
    "Full-Stack Architecture", "IoT Ecosystems", "ML Pipeline Design", 
    "Cloud Infrastructure", "API Optimization", "Team Mentorship",
    "ERP/CRM Solutions", "Real-Time Systems", "Performance Optimization"
  ];

  const leadershipHighlights = [
    { label: "Team Lead", value: "5+ Members", icon: Users },
    { label: "Agile Implementation", value: "Scrum/Kanban", icon: GitBranch },
    { label: "Code Review", value: "200+ PRs Reviewed", icon: Code },
    { label: "Performance Gains", value: "40% Latency Reduction", icon: Zap }
  ];

  const quickStats = [
    { label: "Location", value: "Jabalpur, Madhya Pradesh, India", icon: MapPin },
    { label: "Experience", value: "2+ Years", icon: Calendar },
    { label: "Projects Delivered", value: "12+ Production", icon: Award },
    { label: "Tech Stack", value: "25+ Technologies", icon: Cpu }
  ];

  return (
    <OSWindow title="Profile" icon={<User size={16} className="text-[#818cf8]" />} width="max-w-4xl">
            <div className="space-y-4">
        
              {/* Row 1: Main Bio - Responsive Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          
          {/* Left: Bio Summary - Spans 2 columns on desktop */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-3">
              <h4 className="text-[10px] sm:text-[11px] mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <Brain size={12} className="text-[#818cf8]" />
                Professional Summary
              </h4>
              <p className="text-[13px] sm:text-[14px] text-gray-300 leading-relaxed font-medium">
                A motivated Computer Science student skilled in <span className="text-[#818cf8]">full-stack development</span>, 
                <span className="text-[#f472b6]"> IoT systems</span>, and <span className="text-[#fb923c]"> cloud computing</span>. 
                Experienced in leading development teams and delivering scalable solutions across ERP, CRM, and IoT domains.
              </p>
              <p className="text-[12px] sm:text-[13px] text-gray-400 leading-relaxed">
                Strong technical proficiency combined with problem-solving and leadership abilities. 
                Proven track record in reducing API latency by <span className="text-[#818cf8]">40%</span> through database indexing and Redis caching,
                and developing computer vision defect detection systems with <span className="text-[#f472b6]">95% accuracy</span>.
              </p>
            </div>
            
            {/* Core Competencies Tags - Responsive Wrap */}
            <div className="flex flex-wrap gap-2 pt-3">
              {coreCompetencies.map((attr, i) => (
                <span 
                  key={i} 
                  className="text-[9px] sm:text-[10px] mono px-2 py-1 bg-gray-900/80 border border-gray-800 text-gray-400 rounded-sm flex items-center gap-1.5 hover:border-[#818cf8] hover:text-[#818cf8] hover:bg-[#818cf8]/5 transition-all duration-300 cursor-default"
                >
                  <CheckCircle2 size={10} className="text-[#f472b6]" />
                  {attr}
                </span>
              ))}
            </div>

            {/* Quick Stats Grid - Mobile Responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {quickStats.map((stat, idx) => {
                const IconComp = stat.icon;
                return (
                  <div key={idx} className="p-2 bg-[#818cf8]/5 border border-[#818cf8]/10 rounded-lg text-center group hover:border-[#818cf8]/40 transition-all">
                    <IconComp size={14} className="text-[#818cf8] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                    <p className="text-[9px] sm:text-[10px] text-gray-500">{stat.label}</p>
                    <p className="text-[10px] sm:text-[11px] font-mono text-gray-300 font-bold">{stat.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Languages & Specs */}
          <div className="space-y-5">
            <div className="space-y-4">
              <h4 className="text-[10px] sm:text-[11px] mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                <Languages size={12} className="text-[#f472b6]" />
                Languages
              </h4>
              <div className="space-y-4">
                {languages.map((l, i) => (
                  <div key={i} className="space-y-1 group">
                    <div className="flex justify-between items-center text-[10px] sm:text-[11px] mono">
                      <span className="text-gray-200 font-medium">{l.name}</span>
                      <span style={{ color: l.color }} className="text-[9px] sm:text-[10px]">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-gray-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-700 group-hover:opacity-80" 
                        style={{ width: `${l.progress}%`, backgroundColor: l.color, boxShadow: `0 0 8px ${l.color}80` }}
                      />
                    </div>
                    <p className="text-[9px] text-gray-600">{l.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Status Card */}
            <div className="p-3 bg-gradient-to-r from-[#f472b6]/10 to-transparent border-l-2 border-[#f472b6] rounded-r-lg">
              <p className="text-[10px] mono text-[#f472b6] font-black uppercase mb-1 flex items-center gap-2">
                <Zap size={10} className="animate-pulse" />
                Status: Active
              </p>
              <p className="text-[9px] sm:text-[10px] text-gray-400 leading-tight">
                Currently optimizing mission-critical IoT telemetry and leading full-stack development initiatives.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2: Leadership Highlights - New Section from CV */}
        <div className="border-t border-[#818cf8]/20 pt-3 mt-1">
          <h4 className="text-[10px] sm:text-[11px] mono text-[#fb923c] uppercase tracking-widest flex items-center gap-2 mb-4">
            <Users size={12} />
            Leadership & Impact
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {leadershipHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx} 
                  className="group p-3 bg-[#030712] border border-gray-800 rounded-lg text-center hover:border-[#fb923c] hover:bg-[#fb923c]/5 transition-all duration-300"
                >
                  <IconComp size={18} className="text-[#fb923c] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] sm:text-[11px] font-mono text-gray-300 font-bold">{item.value}</p>
                  <p className="text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-wider">{item.label}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Achievement Badge */}
          <div className="flex flex-wrap justify-between items-center gap-3 mt-4 pt-2 text-[9px] mono text-gray-600">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1"><Award size={10} className="text-[#fb923c]" /> TCS CodeVita AIR 4905</span>
              <span className="flex items-center gap-1"><Zap size={10} className="text-[#818cf8]" /> 3x College Topper</span>
            </div>
            <span className="text-[9px] text-gray-700">Updated 2026</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
