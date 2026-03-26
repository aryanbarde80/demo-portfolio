"use client";
import { useState, useEffect } from 'react';
import TerminalHero from "@/components/TerminalHero";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceList from "@/components/ExperienceList";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ContactNode from "@/components/ContactNode";
import EducationNode from "@/components/EducationNode";
import CertificationsNode from "@/components/CertificationsNode";
import SystemMonitorNode from "@/components/SystemMonitorNode";
import BioMatrix from "@/components/BioMatrix";
import LeadershipNode from "@/components/LeadershipNode";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import TechnicalWritingNode from "@/components/TechnicalWritingNode";
import ReferenceVault from "@/components/ReferenceVault";
import GitHubStatsNode from "@/components/GitHubStatsNode";
import StatsCounter from "@/components/StatsCounter";
import OpenSourceNode from "@/components/OpenSourceNode";
import CourseworkGrid from "@/components/CourseworkGrid";
import ImpactMetrics from "@/components/ImpactMetrics";
import HackathonWins from "@/components/HackathonWins";
import SystemArchitectureNode from "@/components/SystemArchitectureNode";
import PerformanceBenchmarks from "@/components/PerformanceBenchmarks";
import RecruiterHUD from "@/components/RecruiterHUD";
import BootSequence from "@/components/BootSequence";
import SystemHUD from "@/components/SystemHUD";
import DivineAudio from "@/components/DivineAudio";
import DivineCanvas from "@/components/DivineCanvas";
import MantraCLI from "@/components/MantraCLI";
import MagneticCursor from "@/components/MagneticCursor";
import NeuralMatrix from "@/components/NeuralMatrix";
import DiagnosticLog from "@/components/DiagnosticLog";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import OSWindow from "@/components/OSWindow";
import StickyNav from "@/components/StickyNav";
import CinematicQuote from "@/components/CinematicQuote";
import { ShieldAlert, Terminal, Cpu, Zap, Activity, Info, Book, Sparkles, Code } from "lucide-react";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [stabilityMode, setStabilityMode] = useState('stable');
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => { 
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentDate(new Date().toISOString().split('T')[0]); 
  }, []);

  const handleCLICommand = (cmd) => {
    if (cmd === 'show_skills') {
      document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'show_projects') {
      document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd === 'tandava') {
      setStabilityMode('unstable');
    } else if (cmd === 'reset_stability') {
      setStabilityMode('stable');
    }
  };

  return (
    <>
      <BootSequence onComplete={() => setBooted(true)} />
      {booted && <SystemHUD />}
      {booted && <StickyNav />}
      {booted && <DivineAudio />}
      {booted && <DivineCanvas commandState={stabilityMode} />}
      {booted && <MagneticCursor />}
      {booted && <NeuralMatrix />}
      
      <main id="main-content" className={`min-h-screen p-4 md:p-8 flex flex-col font-sans relative z-10 pb-40 selection:bg-[#00f0ff] selection:text-[#030712] transition-all duration-1000 ${booted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden absolute inset-0'} ${stabilityMode === 'unstable' ? 'animate-[shake_0.5s_infinite] glitch-filter' : ''}`}>
        <div className="max-w-7xl mx-auto w-full">
          {/* Floating Tech Decor */}
          <div className="fixed top-20 left-10 opacity-5 pointer-events-none select-none text-4xl font-mono hidden lg:block text-[#00f0ff]">{'<code>'}</div>
          <div className="fixed bottom-40 right-10 opacity-5 pointer-events-none select-none text-4xl font-mono hidden lg:block text-[#ff44aa]">{'</>'}</div>
          {/* Header/Nav */}
          <header className="flex justify-between items-center mb-8 border-b border-[#00f0ff]/20 pb-4 mt-4">
            <div className="text-sm mono text-[#00f0ff] flex items-center gap-2 font-bold tracking-widest uppercase">
              <ShieldAlert size={16} className="text-[#ff003c] animate-pulse" />
              SYS.ver.9.1.4 // <span className="opacity-70 text-gray-400">SECURE_CONNECTION</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-xs text-gray-400 mono hidden md:flex items-center gap-4 mr-4">
                <a href="#timeline" className="hover:text-[#00f0ff] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f0ff] rounded px-1">[ENGINEERING]</a>
                <a href="#analytics" className="hover:text-[#00f0ff] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00f0ff] rounded px-1">[ANALYTICS]</a>
                <a href="#projects-section" className="hover:text-[#ff003c] transition-colors font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#ff003c] rounded px-1">[EXT_ARCHIVES]</a>
              </div>
              <div className="text-xs text-gray-400 mono hidden sm:flex items-center gap-2">
                <Terminal size={14} className="text-[#00f0ff]" />
                {currentDate} {/* LOC: JABALPUR, IND */} {`// LOC: JABALPUR, IND`}
              </div>
            </div>
          </header>

          <div id="hero">
            <TerminalHero />
          </div>

          {/* Cinematic Quote Animation */}
          <CinematicQuote />

          {/* Animated Stats Banner */}
          <StatsCounter />
          
          {/* Main Content Grid (Structured Mosaic) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 w-full mt-10 auto-rows-min">
            
            {/* Row 1: Analytics & Career Timeline */}
            <div id="analytics" className="md:col-span-7 flex flex-col"><AnalyticsDashboard /></div>
            <div id="timeline" className="md:col-span-5 flex flex-col"><SystemMonitorNode /></div>
            
            {/* Row 2: Knowledge Graph & Diagnostic Logs */}
            <div className="md:col-span-5 transition-all duration-700">
              <OSWindow title="CORE_BRAIN/KNOWLEDGE_GRAPH.SYS" icon={<Book size={14}/>}>
                <KnowledgeGraph />
              </OSWindow>
            </div>
            <div className="md:col-span-7">
              <OSWindow title="SYSTEM_KERNEL/DIAGNOSTIC_REPORTS.LOG" icon={<Terminal size={14}/>}>
                <DiagnosticLog />
              </OSWindow>
            </div>
            
            {/* Row 3: GitHub Stats & System Architecture */}
            <div id="github" className="md:col-span-5 flex flex-col"><GitHubStatsNode /></div>
            <div className="md:col-span-7 flex flex-col"><SystemArchitectureNode /></div>

            {/* Row 4: Performance Benchmarks (Full Width) */}
            <div className="md:col-span-12 flex flex-col"><PerformanceBenchmarks /></div>

            {/* Row 5: Experience & Bio Matrix */}
            <div className="md:col-span-7 flex flex-col"><ExperienceList /></div>
            <div className="md:col-span-5 flex flex-col"><BioMatrix /></div>

            {/* Row 6: Impact Metrics (Full Width - has 8 metric cards) */}
            <div className="md:col-span-12 flex flex-col"><ImpactMetrics /></div>

            {/* Row 7: Skills Grid & Education */}
            <div id="skills-section" className="md:col-span-7 flex flex-col"><SkillsGrid /></div>
            <div className="md:col-span-5 flex flex-col"><EducationNode /></div>

            {/* Row 8: Hackathon Wins & Reference Vault */}
            <div className="md:col-span-7 flex flex-col"><HackathonWins /></div>
            <div className="md:col-span-5 flex flex-col"><ReferenceVault /></div>

            {/* Row 9: Certifications & Coursework */}
            <div className="md:col-span-6 flex flex-col"><CertificationsNode /></div>
            <div className="md:col-span-6 flex flex-col"><CourseworkGrid /></div>

            {/* Row 10: Technical Writing & Leadership */}
            <div className="md:col-span-6 flex flex-col"><TechnicalWritingNode /></div>
            <div className="md:col-span-6 flex flex-col"><LeadershipNode /></div>
            
            {/* Row 11: Projects Showcase (Full Width) */}
            <div id="projects-section" className="md:col-span-12 flex flex-col mt-4">
              <ProjectsShowcase />
            </div>
            
            {/* Row 12: Open Source (Full Width) */}
            <div className="md:col-span-12 flex flex-col"><OpenSourceNode /></div>

            {/* Row 13: Contact (Full Width) */}
            <div id="contact" className="md:col-span-12 mt-4"><ContactNode /></div>
          </div>
          
          <footer className="mt-16 text-center border-t border-[#00f0ff]/20 pt-8 opacity-70 hover:opacity-100 transition-opacity">
            <p className="text-xs text-[#00f0ff] mono">
              © 2026 ARYAN BARDE. All systems operational. 
              <span className="ml-2 bg-[#ff003c] text-white px-1 py-0.5 rounded-sm">V. 9.3-CORE</span>
            </p>
          </footer>
        </div>
      </main>

      {booted && <RecruiterHUD />}
      {booted && <MantraCLI onCommand={handleCLICommand} />}
    </>
  );
}
