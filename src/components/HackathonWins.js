"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from './OSWindow';
import { Trophy, Medal, Flame, Star, Award, Code, Zap, TrendingUp, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HackathonWins() {
  const listRef = useRef(null);

  const wins = [
    {
      event: "TCS CodeVita Season 13",
      result: "AIR 4905 · Round 2",
      icon: "🚀",
      color: "#ff003c",
      detail: "Ranked 4905 in Round 2 of TCS CodeVita Season 13, a national-level competitive programming contest with 500,000+ participants across India.",
      date: "Dec 2025"
    },
    {
      event: "TechSynergy IoT Showcase",
      result: "2nd Place Winner",
      icon: "🏆",
      color: "#00f0ff",
      detail: "Secured Second Place at Gyanotsav 2025, GGITS with a real-time IoT monitoring platform featuring sub-100ms telemetry and live dashboard visualization.",
      date: "Jan 2025"
    },
    {
      event: "Code360 College Leaderboard",
      result: "3-Time College Topper",
      icon: "👑",
      color: "#ffaa44",
      detail: "Achieved 3-Time College Topper status on Code360 Leaderboard (February 2025), ranking #1 in college coding leaderboard across multiple semesters.",
      date: "Feb 2025"
    },
    {
      event: "Intern of the Month",
      result: "Ouranos Robotics",
      icon: "⭐",
      color: "#00f0ff",
      detail: "Awarded Intern of the Month at Ouranos Robotics (September 2024) for outstanding contribution to IoT dashboard development and team mentoring.",
      date: "Sep 2024"
    },
    {
      event: "Internship Performance Rating",
      result: "5/5 - Excellent",
      icon: "💎",
      color: "#ff003c",
      detail: "Achieved a perfect 5/5 rating - Excellent for internship performance at Ouranos Robotics (October 2025), recognized for exceptional technical contributions.",
      date: "Oct 2025"
    },
    {
      event: "Hacktoberfest 2024",
      result: "4 PRs Merged",
      icon: "🔓",
      color: "#ffaa44",
      detail: "Successfully contributed to 4 open-source projects during Hacktoberfest 2024 with 4 accepted pull requests, including bug fixes and feature enhancements.",
      date: "Oct 2024"
    }
  ];

  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll('.win-item');
    gsap.fromTo(items,
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: listRef.current, start: 'top 85%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  const totalAwards = wins.length;

  return (
    <OSWindow title="RECORDS/HACKATHON_WINS.LOG" icon={<Trophy size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-5xl">
      <div className="space-y-4">
        
        {/* Header with Stats */}
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <Award size={12} className="text-[#ffaa44]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">ACHIEVEMENT_DATABASE</span>
          </div>
          <div className="flex gap-2 text-[9px] sm:text-[10px] mono">
            <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">{totalAwards} WINS</span>
            <span className="text-[#ffaa44] bg-[#ffaa44]/10 px-2 py-0.5 rounded">✦ ACTIVE</span>
          </div>
        </div>

        {/* Wins List */}
        <div ref={listRef} className="space-y-3 sm:space-y-4">
          {wins.map((w, i) => (
            <div 
              key={i} 
              className="win-item group flex flex-col sm:flex-row gap-3 p-4 border border-gray-800/60 hover:border-[#00f0ff]/40 rounded-xl bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#00f0ff]/5 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: `${w.color}20`, border: `1px solid ${w.color}40` }}
                >
                  {w.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-sm sm:text-base font-bold text-gray-200 group-hover:text-[#00f0ff] transition-colors">
                    {w.event}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2">
                    <span 
                      className="text-[9px] sm:text-[10px] mono px-2 py-1 rounded-md font-bold shrink-0 inline-flex items-center gap-1"
                      style={{ backgroundColor: `${w.color}20`, color: w.color, border: `1px solid ${w.color}40` }}
                    >
                      <Zap size={10} />
                      {w.result}
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-gray-600 flex items-center gap-1">
                      <Calendar size={10} />
                      {w.date}
                    </span>
                  </div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-gray-500 leading-relaxed">{w.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer - Summary Stats */}
        <div className="mt-4 pt-3 border-t border-[#00f0ff]/20 flex flex-wrap justify-between items-center gap-3 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Medal size={10} className="text-[#ffaa44]" />
              <span className="text-gray-500">NATIONAL_RANK: 4905</span>
            </span>
            <span className="flex items-center gap-1">
              <Flame size={10} className="text-[#ff003c]" />
              <span className="text-gray-500">HACKTOBERFEST: 4 PRs</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={10} className="text-[#00f0ff]" />
            <span className="text-gray-600">LAST_UPDATED: 2026</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}