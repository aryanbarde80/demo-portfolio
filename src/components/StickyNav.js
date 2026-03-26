"use client";
import { useState, useEffect } from 'react';
import { ChevronUp, Terminal, Activity, Code, Briefcase, FolderOpen, Mail, GraduationCap, Download } from 'lucide-react';

const navItems = [
  { id: "hero", label: "HOME", icon: Terminal },
  { id: "analytics", label: "SKILLS", icon: Activity },
  { id: "timeline", label: "TIMELINE", icon: Briefcase },
  { id: "github", label: "GITHUB", icon: Code },
  { id: "projects-section", label: "PROJECTS", icon: FolderOpen },
  { id: "contact", label: "CONTACT", icon: Mail },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 600);

      // Determine active section
      const sections = navItems.map(item => ({
        id: item.id,
        el: document.getElementById(item.id)
      })).filter(s => s.el);

      for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].el.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Sticky Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-2 px-4 mt-2 bg-black/80 backdrop-blur-xl border border-[#00f0ff]/20 rounded-full shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            {/* Logo / Brand */}
            <button onClick={scrollToTop} className="flex items-center gap-2 text-[#00f0ff] hover:text-white transition-colors">
              <Terminal size={14} />
              <span className="text-[10px] mono font-bold tracking-widest hidden sm:inline">ARYAN_OS</span>
            </button>

            {/* Nav Links */}
            <div className="flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-1 px-2 sm:px-3 py-1.5 rounded-full text-[8px] sm:text-[9px] mono transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/40' 
                        : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    <Icon size={10} />
                    <span className="hidden md:inline">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Resume Download */}
            <a 
              href="/Aryan_Barde_Resume.pdf" 
              download 
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#ff003c]/20 border border-[#ff003c]/40 text-[#ff003c] hover:bg-[#ff003c]/30 rounded-full text-[8px] sm:text-[9px] mono font-bold transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,0,60,0.3)]"
            >
              <Download size={10} />
              <span className="hidden sm:inline">RESUME</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-6 z-50 p-3 bg-black/80 backdrop-blur-md border border-[#00f0ff]/30 rounded-full text-[#00f0ff] hover:bg-[#00f0ff]/20 hover:border-[#00f0ff] transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.15)] ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp size={18} />
      </button>
    </>
  );
}
