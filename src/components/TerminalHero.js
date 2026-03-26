"use client";
import { useState, useEffect } from 'react';
import { Terminal, Fingerprint, Orbit, Download } from 'lucide-react';

export default function TerminalHero() {
  const [text, setText] = useState('');
  const [isReady, setIsReady] = useState(false);
  
  const fullText = "> SYSTEM :: ARYAN BARDE // FULL-STACK ENGINEER\n> DOMAINS: Web Systems | IoT Platforms | Cloud Architecture | AI/CV\n> DEPLOYED: 15+ Projects | 89 Repos | 18+ Certifications\n> STATUS: ONLINE & READY FOR DEPLOYMENT_";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        clearInterval(typingInterval);
        setIsReady(true);
      }
    }, 35); 
    
    // Terminal entrance animation
    import('gsap').then(({ gsap }) => {
      gsap.fromTo(".terminal-hero-content", 
        { y: 20, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.5 }
      );
    });
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="glass-panel w-full max-w-4xl mx-auto neon-border relative overflow-hidden group mb-12 mt-8">
      {/* Top OS Bar */}
      <div className="flex border-b border-[#00f0ff]/30 p-2 px-4 items-center gap-3 bg-[#030712]/80">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
        </div>
        <div className="text-xs text-[#00f0ff]/60 mono flex items-center gap-2">
          <Terminal size={14} /> 
          <span>admin@system: ~/portfolio/boot</span>
        </div>
        <div className="ml-auto flex items-center gap-2 text-[#ff003c]/60">
          <Fingerprint size={16} className="animate-pulse" />
        </div>
      </div>

      <div className="p-6 sm:p-10 relative">
        <div className="terminal-hero-content flex flex-col items-start gap-8 relative z-10">
          <div className="flex-1 w-full">
            <div className="mono text-base sm:text-xl md:text-2xl neon-text whitespace-pre-line min-h-[120px] sm:min-h-[160px] leading-relaxed relative font-bold">
              {text}
              <span className="inline-block w-3 h-[1em] bg-[#00f0ff] animate-pulse ml-1 align-middle shadow-[0_0_12px_rgba(0,240,255,1)]"></span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm mono italic mt-6 border-l-2 border-[#ff003c] pl-4 py-1 bg-[#ff003c]/5 overflow-hidden">&quot;Discipline and Consistency is all what is needed!&quot;</p>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="text-[10px] sm:text-xs mono bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] px-3 py-1 rounded-full font-black tracking-widest uppercase">89 REPOS</span>
              <span className="text-[10px] sm:text-xs mono bg-[#ff003c]/10 border border-[#ff003c]/30 text-[#ff003c] px-3 py-1 rounded-full font-black tracking-widest uppercase">35 FOLLOWERS</span>
              <span className="text-[10px] sm:text-xs mono bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] px-3 py-1 rounded-full font-black tracking-widest uppercase">HACKTOBERFEST 2024</span>
            </div>
          </div>
        </div>
        
        {isReady && (
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-6 animate-in fade-in slide-in-from-bottom-5 duration-1000 justify-between items-center relative z-10">
            <div className="flex flex-wrap gap-6 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none relative overflow-hidden px-8 py-3 border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/20 transition-all duration-500 mono text-sm sm:text-base font-black flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)] group uppercase tracking-widest">
                <span className="absolute inset-0 w-full h-[300%] bg-gradient-to-b from-transparent via-[#00f0ff]/30 to-transparent -translate-y-full group-hover:animate-[scanner_2s_ease-in-out_infinite]"></span>
                <span className="relative z-10">[ VIEW_SKILLS ]</span>
              </button>
              <button className="flex-1 sm:flex-none relative overflow-hidden px-8 py-3 border-2 border-[#ff003c] text-[#ff003c] hover:bg-[#ff003c]/20 transition-all duration-500 mono text-sm sm:text-base font-black flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,0,60,0.2)] hover:shadow-[0_0_40px_rgba(255,0,60,0.5)] group uppercase tracking-widest">
                <span className="absolute inset-0 w-full h-[300%] bg-gradient-to-b from-transparent via-[#ff003c]/30 to-transparent -translate-y-full group-hover:animate-[scanner_2s_ease-in-out_infinite]"></span>
                <span className="relative z-10">[ CONTACT_ME ]</span>
              </button>
              <a href="/Aryan_Barde_Resume.pdf" download className="flex-1 sm:flex-none relative overflow-hidden px-8 py-3 border-2 border-[#ffaa44] text-[#ffaa44] hover:bg-[#ffaa44]/20 transition-all duration-500 mono text-sm sm:text-base font-black flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,170,68,0.2)] hover:shadow-[0_0_40px_rgba(255,170,68,0.5)] group uppercase tracking-widest">
                <span className="absolute inset-0 w-full h-[300%] bg-gradient-to-b from-transparent via-[#ffaa44]/30 to-transparent -translate-y-full group-hover:animate-[scanner_2s_ease-in-out_infinite]"></span>
                <Download size={16} className="relative z-10" />
                <span className="relative z-10">[ RESUME ]</span>
              </a>
            </div>
            <div className="hidden lg:flex opacity-30 hover:opacity-80 transition-opacity duration-1000 items-center justify-center scale-150 mr-8">
              <Orbit size={60} className="text-[#00f0ff] animate-[spin-slow_15s_linear_infinite]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
