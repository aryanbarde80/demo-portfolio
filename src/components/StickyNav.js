"use client";
import { useState, useEffect, useCallback } from 'react';
import { ChevronUp, Terminal, Activity, Code, Briefcase, FolderOpen, Mail, Download, Menu, X } from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      const close = () => setMobileMenuOpen(false);
      window.addEventListener('scroll', close, { passive: true });
      return () => window.removeEventListener('scroll', close);
    }
  }, [mobileMenuOpen]);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav aria-label="Main navigation" className={`fixed top-0 left-0 right-0 z-[80] transition-all duration-500 ${isScrolled ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between py-2 px-3 sm:px-4 mt-2 bg-[#0a0a0f]/90 backdrop-blur-2xl border border-[#818cf8]/15 rounded-xl sm:rounded-2xl shadow-[0_4px_30px_rgba(129,140,248,0.08)]">
            
            {/* Logo */}
            <button onClick={scrollToTop} className="flex items-center gap-2 text-white hover:text-[#a5b4fc] transition-colors">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-[#818cf8] to-[#6366f1] flex items-center justify-center shadow-[0_0_12px_rgba(129,140,248,0.3)]">
                <Terminal size={12} className="text-white" />
              </div>
              <span className="text-[11px] sm:text-xs mono font-semibold tracking-wide">aryanOS</span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden sm:flex items-center gap-0.5 sm:gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex items-center gap-1.5 px-2.5 md:px-3 py-1.5 rounded-lg text-[10px] md:text-[11px] mono transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#818cf8]/15 text-[#a5b4fc] shadow-[0_0_8px_rgba(129,140,248,0.1)]' 
                        : 'text-[#6b6b80] hover:text-[#a1a1b5] hover:bg-white/5'
                    }`}
                  >
                    <Icon size={12} />
                    <span className="hidden md:inline">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Right section */}
            <div className="flex items-center gap-2">
              <a 
                href="/Aryan_Barde_Resume.pdf" 
                download 
                className="hidden sm:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-gradient-to-r from-[#818cf8]/20 to-[#6366f1]/20 text-[#a5b4fc] hover:from-[#818cf8]/30 hover:to-[#6366f1]/30 rounded-lg text-[10px] mono font-medium transition-all duration-300 border border-[#818cf8]/20"
              >
                <Download size={10} />
                <span>Resume</span>
              </a>

              {/* Mobile hamburger */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="sm:hidden flex items-center justify-center w-8 h-8 rounded-lg text-[#a5b4fc] hover:bg-[#818cf8]/15 transition-all"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          {mobileMenuOpen && (
            <div className="sm:hidden mt-1.5 bg-[#0a0a0f]/95 backdrop-blur-2xl border border-[#818cf8]/15 rounded-xl shadow-[0_8px_40px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in-up">
              <div className="p-2 space-y-0.5">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-[11px] mono transition-all duration-200 ${
                        isActive 
                          ? 'bg-[#818cf8]/15 text-[#a5b4fc]' 
                          : 'text-[#6b6b80] hover:text-[#a1a1b5] hover:bg-white/5'
                      }`}
                    >
                      <Icon size={14} />
                      <span>{item.label}</span>
                      {isActive && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse"></div>}
                    </button>
                  );
                })}
              </div>
              <div className="border-t border-[#818cf8]/10 p-2">
                <a 
                  href="/Aryan_Barde_Resume.pdf" 
                  download 
                  className="flex items-center justify-center gap-2 w-full px-3 py-2.5 bg-gradient-to-r from-[#818cf8]/20 to-[#6366f1]/20 text-[#a5b4fc] rounded-lg text-[11px] mono font-medium border border-[#818cf8]/20"
                >
                  <Download size={12} />
                  Download Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <button
        onClick={scrollToTop}
        className={`fixed hidden sm:flex items-center justify-center bottom-20 right-6 z-50 p-2.5 bg-[#0a0a0f]/90 backdrop-blur-md border border-[#818cf8]/15 rounded-xl text-[#818cf8] hover:bg-[#818cf8]/15 hover:border-[#818cf8]/30 transition-all duration-300 shadow-[0_0_15px_rgba(129,140,248,0.1)] ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ChevronUp size={16} />
      </button>
    </>
  );
}
