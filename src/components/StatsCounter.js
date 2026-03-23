"use client";
import { useState, useEffect, useRef } from 'react';
import { Rocket, Code2, Globe, Trophy, Briefcase, GitPullRequest } from 'lucide-react';

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}</span>;
}

export default function StatsCounter() {
  const stats = [
    { icon: Briefcase, label: "PROJECTS DELIVERED", value: 15, suffix: "+" },
    { icon: Code2, label: "LINES OF CODE", value: 50000, suffix: "+" },
    { icon: Globe, label: "LIVE DEPLOYMENTS", value: 12, suffix: "" },
    { icon: Trophy, label: "CERTIFICATIONS", value: 18, suffix: "+" },
    { icon: GitPullRequest, label: "OPEN SOURCE PRs", value: 4, suffix: "" },
    { icon: Rocket, label: "TECHNOLOGIES", value: 30, suffix: "+" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="group relative glass-panel p-3 sm:p-4 text-center hover:border-[#00f0ff]/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all overflow-hidden cursor-default">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Icon size={18} className="mx-auto mb-2 text-[#00f0ff] group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all" />
              <p className="text-lg sm:text-2xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                <AnimatedCounter target={stat.value} />{stat.suffix}
              </p>
              <p className="text-[8px] sm:text-[10px] mono text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
