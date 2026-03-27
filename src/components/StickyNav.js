"use client";
import { useState, useEffect } from 'react';
import { ChevronUp, Terminal, Activity, Code, Briefcase, FolderOpen, Mail, Download } from 'lucide-react';

const navItems = [
  { id: "hero", label: "Home", icon: Terminal },
  { id: "analytics", label: "Skills", icon: Activity },
  { id: "timeline", label: "Timeline", icon: Briefcase },
  { id: "github", label: "GitHub", icon: Code },
  { id: "projects-section", label: "Projects", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      setShowBackToTop(window.scrollY > 600);

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
      <nav aria-label="Main navigation" className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between py-2 px-2 sm:px-4 mt-2.5 bg-[#0a0a0f]/85 backdrop-blur-2xl border border-[#818cf8]/12 rounded-xl sm:rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]">
            <button onClick={scrollToTop} className="flex items-center gap-2 text-white hover:text-[#a5b4fc] transition-colors">
              <Terminal size={14} className="text-[#818cf8]" />
              <span className="text-[11px] mono font-semibold tracking-wide hidden sm:inline">aryanOS</span>
            </button>

            <div className="flex items-center gap-0.5 sm:gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 md:px-3 py-1.5 rounded-lg text-[9px] sm:text-[10px] md:text-[11px] mono transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#818cf8]/15 text-[#a5b4fc]' 
                        : 'text-[#6b6b80] hover:text-[#a1a1b5] hover:bg-white/5'
                    }`}
                  >
                    <Icon size={12} />
                    <span className="hidden md:inline">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <a 
              href="/Aryan_Barde_Resume.pdf" 
              download 
              className="flex items-center gap-1.5 px-3 py-1.5 bg-[#818cf8]/15 text-[#a5b4fc] hover:bg-[#818cf8]/25 rounded-lg text-[10px] mono font-medium transition-all duration-300"
            >
              <Download size={10} />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </div>
      </nav>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-20 right-6 z-50 p-2.5 bg-[#12121a]/90 backdrop-blur-md border border-[#818cf8]/15 rounded-xl text-[#818cf8] hover:bg-[#818cf8]/15 hover:border-[#818cf8]/30 transition-all duration-300 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp size={16} />
      </button>
    </>
  );
}
