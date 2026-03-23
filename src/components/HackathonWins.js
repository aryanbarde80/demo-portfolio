"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from './OSWindow';
import { Trophy, Medal, Flame, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HackathonWins() {
  const listRef = useRef(null);

  const wins = [
    {
      event: "TCS CodeVita 2025",
      result: "AIR 4900+ · Top 5% National",
      icon: "🚀",
      color: "#ff003c",
      detail: "National competitive programming contest. Ranked in top 5% out of 500,000+ participants across India."
    },
    {
      event: "TechSynergy IoT Showcase",
      result: "2nd Place Winner",
      icon: "🏆",
      color: "#00f0ff",
      detail: "Built a real-time IoT monitoring platform with sub-100ms telemetry and live dashboard visualization."
    },
    {
      event: "Zerve Data Challenge 2026",
      result: "100% ML Model Accuracy",
      icon: "🧠",
      color: "#ff003c",
      detail: "User retention analysis on 409,000+ events. Session depth (17.1% importance) identified as top predictor."
    },
    {
      event: "Wingify Debug Challenge",
      result: "Qualified · Python Track",
      icon: "⚡",
      color: "#00f0ff",
      detail: "Enterprise-grade debugging challenge by Wingify. Identified and resolved complex async race conditions."
    },
    {
      event: "Code360 College Ranking",
      result: "3× Coding Topper",
      icon: "👑",
      color: "#ff003c",
      detail: "Three consecutive semesters ranked #1 in college coding leaderboard on Naukri Code360 platform."
    },
    {
      event: "Intern of the Month",
      result: "Ouranos Robotics",
      icon: "⭐",
      color: "#00f0ff",
      detail: "Recognized for outstanding contribution to IoT dashboard development and team mentoring during internship."
    }
  ];

  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll('.win-item');
    gsap.fromTo(items,
      { x: -40, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: listRef.current, start: 'top 88%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <OSWindow title="RECORDS/COMPETITIONS.SQL" icon={<Trophy size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-5xl">
      <div ref={listRef} className="space-y-3">
        {wins.map((w, i) => (
          <div key={i} className="win-item group flex gap-3 p-3 border border-gray-800/60 hover:border-[#00f0ff]/40 rounded bg-[#030712]/40 hover:bg-[#00f0ff]/5 transition-all">
            <span className="text-xl shrink-0 mt-0.5">{w.icon}</span>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap justify-between items-start gap-1">
                <h4 className="text-sm font-bold text-gray-200 group-hover:text-[#00f0ff] transition-colors">{w.event}</h4>
                <span className="text-[9px] mono px-2 py-0.5 rounded-sm font-bold shrink-0" style={{ backgroundColor: `${w.color}20`, color: w.color, border: `1px solid ${w.color}40` }}>{w.result}</span>
              </div>
              <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">{w.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </OSWindow>
  );
}
