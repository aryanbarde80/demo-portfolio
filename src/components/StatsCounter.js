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
    { icon: Briefcase, label: "Projects Delivered", value: 25, suffix: "+", color: "#818cf8" },
    { icon: Code2, label: "Lines of Code", value: 85000, suffix: "+", color: "#f472b6" },
    { icon: Globe, label: "Live Deployments", value: 20, suffix: "+", color: "#fb923c" },
    { icon: Trophy, label: "Certifications", value: 18, suffix: "+", color: "#818cf8" },
    { icon: GitPullRequest, label: "Open Source PRs", value: 4, suffix: "", color: "#f472b6" },
    { icon: Rocket, label: "Tech Stack", value: 35, suffix: "+", color: "#fb923c" },
    { icon: Users, label: "Team Lead", value: 5, suffix: "+", color: "#818cf8" },
    { icon: Zap, label: "Latency Reduction", value: 40, suffix: "%", color: "#f472b6" },
    { icon: Award, label: "Achievements", value: 12, suffix: "+", color: "#fb923c" },
    { icon: Cpu, label: "IoT Projects", value: 8, suffix: "+", color: "#818cf8" },
    { icon: Database, label: "DB Optimization", value: 40, suffix: "%", color: "#f472b6" },
    { icon: Cloud, label: "Cloud Deployments", value: 15, suffix: "+", color: "#fb923c" }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto mb-4 sm:mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div 
              key={idx} 
              className="group relative p-2 sm:p-3 md:p-4 text-center border border-[#818cf8]/10 rounded-lg sm:rounded-xl bg-[#12121a]/60 hover:border-[#818cf8]/25 hover:bg-[#12121a]/80 transition-all duration-300 cursor-default overflow-hidden"
            >
              <Icon 
                size={18} 
                className="mx-auto mb-2 transition-all duration-300 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                style={{ color: stat.color }} 
              />
              
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white transition-colors">
                <AnimatedCounter target={stat.value} />{stat.suffix}
              </p>
              
              <p className="text-[10px] sm:text-xs mono text-[#6b6b80] mt-1 tracking-wide leading-tight">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
      
      <div className="mt-4 pt-3 text-center border-t border-[#818cf8]/8">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs mono text-[#6b6b80]">
          <span className="flex items-center gap-1">
            <Zap size={10} className="text-[#f472b6]" />
            40%+ Optimization
          </span>
          <span className="flex items-center gap-1">
            <Award size={10} className="text-[#fb923c]" />
            CodeVita AIR 4905
          </span>
          <span className="flex items-center gap-1">
            <Rocket size={10} className="text-[#818cf8]" />
            Active since 2023
          </span>
        </div>
      </div>
    </div>
  );
}
