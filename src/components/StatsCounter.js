"use client";
import { useState, useEffect, useRef } from 'react';
import { Rocket, Code2, Globe, Trophy, Briefcase, GitPullRequest, Users, Zap, Award, Cpu, Database, Cloud } from 'lucide-react';

function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) startAnimation(); },
      { threshold: 0.1 }
    );
    observer.observe(el);

    // Fallback: if already visible on mount, start after a short delay
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(startAnimation, 300);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref} className="tabular-nums">{count.toLocaleString()}</span>;
}

export default function StatsCounter() {
  const stats = [
    { icon: Briefcase, label: "PROJECTS DELIVERED", value: 25, suffix: "+", color: "#00f0ff" },
    { icon: Code2, label: "LINES OF CODE", value: 85000, suffix: "+", color: "#ff003c" },
    { icon: Globe, label: "LIVE DEPLOYMENTS", value: 20, suffix: "+", color: "#ffaa44" },
    { icon: Trophy, label: "CERTIFICATIONS", value: 18, suffix: "+", color: "#00f0ff" },
    { icon: GitPullRequest, label: "OPEN SOURCE PRs", value: 4, suffix: "", color: "#ff003c" },
    { icon: Rocket, label: "TECH STACK", value: 35, suffix: "+", color: "#ffaa44" },
    { icon: Users, label: "TEAM LEAD", value: 5, suffix: "+", color: "#00f0ff" },
    { icon: Zap, label: "LATENCY REDUCTION", value: 40, suffix: "%", color: "#ff003c" },
    { icon: Award, label: "ACHIEVEMENTS", value: 12, suffix: "+", color: "#ffaa44" },
    { icon: Cpu, label: "IoT PROJECTS", value: 8, suffix: "+", color: "#00f0ff" },
    { icon: Database, label: "DB OPTIMIZATION", value: 40, suffix: "%", color: "#ff003c" },
    { icon: Cloud, label: "CLOUD DEPLOYMENTS", value: 15, suffix: "+", color: "#ffaa44" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div 
              key={idx} 
              className="group relative p-3 sm:p-4 text-center border border-[#00f0ff]/20 rounded-xl bg-gradient-to-br from-[#030712] to-[#0a0f1a] hover:border-[#00f0ff]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <Icon 
                size={20} 
                className="mx-auto mb-2 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" 
                style={{ color: stat.color }} 
              />
              
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-[#00f0ff] transition-colors">
                <AnimatedCounter target={stat.value} />{stat.suffix}
              </p>
              
              <p className="text-[7px] sm:text-[9px] mono text-gray-500 mt-1 uppercase tracking-wider leading-tight">
                {stat.label}
              </p>
              
              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-50 transition-opacity" />
            </div>
          );
        })}
      </div>
      
      {/* Footer Stats Summary */}
      <div className="mt-5 pt-3 text-center border-t border-[#00f0ff]/20">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[8px] sm:text-[9px] mono text-gray-500">
          <span className="flex items-center gap-1">
            <Zap size={10} className="text-[#ff003c]" />
            TOTAL_IMPACT: 40%+ OPTIMIZATION
          </span>
          <span className="flex items-center gap-1">
            <Award size={10} className="text-[#ffaa44]" />
            TCX_CODEVITA: AIR 4905
          </span>
          <span className="flex items-center gap-1">
            <Rocket size={10} className="text-[#00f0ff]" />
            ACTIVE_SINCE: 2023
          </span>
        </div>
      </div>
    </div>
  );
}
