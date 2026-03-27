"use client";
import { useState, useEffect } from 'react';
import { Terminal, Download, ArrowDown, MapPin, Calendar, Zap, GitBranch, Globe, Cpu } from 'lucide-react';

export default function TerminalHero() {
  const [text, setText] = useState('');
  const [isReady, setIsReady] = useState(false);
  
  const fullText = "Hi, I'm Aryan Barde.\nFull-Stack Engineer & Systems Architect.\nI build performant web apps, IoT platforms,\nand AI-powered solutions.";

  const techStack = [
    { name: "React/Next.js", color: "#818cf8" },
    { name: "Node.js", color: "#34d399" },
    { name: "Python", color: "#fb923c" },
    { name: "AWS/GCP", color: "#f472b6" },
    { name: "MongoDB", color: "#34d399" },
    { name: "Docker", color: "#818cf8" },
  ];
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        clearInterval(typingInterval);
        setIsReady(true);
      }
    }, 30); 
    
    import('gsap').then(({ gsap }) => {
      gsap.fromTo(".terminal-hero-content", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.3 }
      );
    });
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="glass-panel w-full max-w-4xl mx-auto neon-border relative overflow-hidden group mb-4 sm:mb-6">
      {/* Window Bar */}
      <div className="flex border-b border-[#818cf8]/15 p-2 sm:p-2.5 px-3 sm:px-4 items-center justify-between bg-[#0a0a0f]/80">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#f87171]/80"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#fbbf24]/80"></div>
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#34d399]/80"></div>
          </div>
          <div className="text-[10px] sm:text-xs text-[#6b6b80] mono flex items-center gap-2">
            <Terminal size={12} /> 
            <span>aryan@portfolio ~</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[8px] sm:text-[9px] mono text-gray-600">
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            online
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-10 relative">
        <div className="terminal-hero-content flex flex-col items-start gap-4 sm:gap-6 relative z-10">
          <div className="flex-1 w-full">
            {/* Main typing text */}
            <div className="mono text-sm sm:text-lg md:text-xl lg:text-2xl neon-text whitespace-pre-line min-h-[90px] sm:min-h-[120px] md:min-h-[140px] leading-relaxed font-medium">
              {text}
              <span className="inline-block w-2 sm:w-2.5 h-[1em] bg-[#818cf8] animate-pulse ml-1 align-middle rounded-sm opacity-80"></span>
            </div>
            
            {/* Quote */}
            <p className="text-[#6b6b80] text-[10px] sm:text-xs md:text-sm mono mt-4 sm:mt-6 border-l-2 border-[#818cf8]/40 pl-3 sm:pl-4 py-1">
              &quot;Discipline and Consistency is all what is needed!&quot;
            </p>

            {/* Info badges row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
              <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] mono text-gray-400">
                <MapPin size={10} className="text-[#f472b6]" />
                India
              </span>
              <span className="w-px h-3 bg-gray-700"></span>
              <span className="flex items-center gap-1.5 text-[9px] sm:text-[10px] mono text-gray-400">
                <Calendar size={10} className="text-[#818cf8]" />
                B.Tech CSE 2022-26
              </span>
              <span className="w-px h-3 bg-gray-700 hidden sm:block"></span>
              <span className="hidden sm:flex items-center gap-1.5 text-[9px] sm:text-[10px] mono text-gray-400">
                <Zap size={10} className="text-[#fb923c]" />
                Open to opportunities
              </span>
            </div>
            
            {/* GitHub stats badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-5">
              <span className="text-[9px] sm:text-[11px] mono bg-[#818cf8]/10 border border-[#818cf8]/20 text-[#a5b4fc] px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg flex items-center gap-1.5">
                <GitBranch size={10} />
                89 Repos
              </span>
              <span className="text-[9px] sm:text-[11px] mono bg-[#f472b6]/10 border border-[#f472b6]/20 text-[#f472b6] px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg flex items-center gap-1.5">
                <Globe size={10} />
                35 Followers
              </span>
              <span className="text-[9px] sm:text-[11px] mono bg-[#fb923c]/10 border border-[#fb923c]/20 text-[#fb923c] px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg flex items-center gap-1.5">
                <Zap size={10} />
                Hacktoberfest 2024
              </span>
            </div>

            {/* Tech stack pills */}
            <div className="mt-4 sm:mt-5">
              <p className="text-[8px] sm:text-[9px] mono text-gray-600 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Cpu size={9} />
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-[8px] sm:text-[10px] mono px-2 sm:px-2.5 py-0.5 rounded-md border transition-all duration-300 hover:scale-105 cursor-default"
                    style={{ 
                      color: tech.color, 
                      borderColor: `${tech.color}30`,
                      backgroundColor: `${tech.color}08`
                    }}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        {isReady && (
          <div className="mt-5 sm:mt-8 flex flex-wrap gap-2 sm:gap-3 animate-fade-in-up relative z-10">
            <button 
              onClick={() => document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' })} 
              className="px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#818cf8] to-[#6366f1] text-white hover:from-[#6366f1] hover:to-[#818cf8] transition-all duration-300 mono text-[10px] sm:text-xs md:text-sm font-medium rounded-lg flex items-center gap-1.5 sm:gap-2 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
            >
              <ArrowDown size={12} />
              View Skills
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="px-3 sm:px-5 py-2 sm:py-2.5 border border-[#818cf8]/30 text-[#a5b4fc] hover:bg-[#818cf8]/10 hover:border-[#818cf8]/50 transition-all duration-300 mono text-[10px] sm:text-xs md:text-sm font-medium rounded-lg"
            >
              Contact Me
            </button>
            <a 
              href="/Aryan_Barde_Resume.pdf" 
              download 
              className="px-3 sm:px-5 py-2 sm:py-2.5 border border-[#f472b6]/30 text-[#f472b6] hover:bg-[#f472b6]/10 hover:border-[#f472b6]/50 transition-all duration-300 mono text-[10px] sm:text-xs md:text-sm font-medium rounded-lg flex items-center gap-1.5 sm:gap-2"
            >
              <Download size={12} />
              Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
