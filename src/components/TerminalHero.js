"use client";
import { useState, useEffect } from 'react';
import { Terminal, Download, ArrowDown } from 'lucide-react';

export default function TerminalHero() {
  const [text, setText] = useState('');
  const [isReady, setIsReady] = useState(false);
  
  const fullText = "Hi, I'm Aryan Barde.\nFull-Stack Engineer & Systems Architect.\nI build performant web apps, IoT platforms,\nand AI-powered solutions.";
  
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
    <div className="glass-panel w-full max-w-4xl mx-auto neon-border relative overflow-hidden group mb-10">
      {/* Window Bar */}
      <div className="flex border-b border-[#818cf8]/15 p-2.5 px-4 items-center gap-3 bg-[#0a0a0f]/80">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#f87171]/80"></div>
          <div className="w-3 h-3 rounded-full bg-[#fbbf24]/80"></div>
          <div className="w-3 h-3 rounded-full bg-[#34d399]/80"></div>
        </div>
        <div className="text-xs text-[#6b6b80] mono flex items-center gap-2">
          <Terminal size={13} /> 
          <span>aryan@portfolio ~ </span>
        </div>
      </div>

      <div className="p-5 sm:p-8 md:p-12 relative">
        <div className="terminal-hero-content flex flex-col items-start gap-6 relative z-10">
          <div className="flex-1 w-full">
            <div className="mono text-base sm:text-lg md:text-xl lg:text-2xl neon-text whitespace-pre-line min-h-[100px] sm:min-h-[120px] md:min-h-[140px] leading-relaxed font-medium">
              {text}
              <span className="inline-block w-2.5 h-[1em] bg-[#818cf8] animate-pulse ml-1 align-middle rounded-sm opacity-80"></span>
            </div>
            
            <p className="text-[#6b6b80] text-xs sm:text-sm mono mt-5 sm:mt-8 border-l-2 border-[#818cf8]/40 pl-3 sm:pl-4 py-1">
              &quot;Discipline and Consistency is all what is needed!&quot;
            </p>
            
            <div className="flex flex-wrap gap-2 mt-6">
              <span className="text-[11px] mono bg-[#818cf8]/10 border border-[#818cf8]/20 text-[#a5b4fc] px-3 py-1 rounded-lg">89 Repos</span>
              <span className="text-[11px] mono bg-[#f472b6]/10 border border-[#f472b6]/20 text-[#f472b6] px-3 py-1 rounded-lg">35 Followers</span>
              <span className="text-[11px] mono bg-[#fb923c]/10 border border-[#fb923c]/20 text-[#fb923c] px-3 py-1 rounded-lg">Hacktoberfest 2024</span>
            </div>
          </div>
        </div>
        
        {isReady && (
          <div className="mt-6 sm:mt-10 flex flex-wrap gap-2 sm:gap-3 animate-fade-in-up relative z-10">
            <button 
              onClick={() => document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' })} 
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-[#818cf8] text-white hover:bg-[#6366f1] transition-all duration-300 mono text-xs sm:text-sm font-medium rounded-lg flex items-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
            >
              <ArrowDown size={14} />
              View Skills
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="px-4 sm:px-6 py-2 sm:py-2.5 border border-[#818cf8]/30 text-[#a5b4fc] hover:bg-[#818cf8]/10 hover:border-[#818cf8]/50 transition-all duration-300 mono text-xs sm:text-sm font-medium rounded-lg"
            >
              Contact Me
            </button>
            <a 
              href="/Aryan_Barde_Resume.pdf" 
              download 
              className="px-4 sm:px-6 py-2 sm:py-2.5 border border-[#f472b6]/30 text-[#f472b6] hover:bg-[#f472b6]/10 hover:border-[#f472b6]/50 transition-all duration-300 mono text-xs sm:text-sm font-medium rounded-lg flex items-center gap-2"
            >
              <Download size={14} />
              Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
