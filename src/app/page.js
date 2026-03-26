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
import { ShieldAlert, Terminal, Cpu, Zap, Activity, Info, Book, Sparkles, Code } from "lucide-react";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [stabilityMode, setStabilityMode] = useState('stable');
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
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
      {booted && <DivineAudio />}
      {booted && <DivineCanvas commandState={stabilityMode} />}
      {booted && <MagneticCursor />}
      {booted && <NeuralMatrix />}
      
      <main className={`min-h-screen p-4 md:p-8 flex flex-col font-sans relative z-10 pb-40 pointer-events-none selection:bg-[#00f0ff] selection:text-[#030712] transition-all duration-1000 ${booted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden absolute inset-0'} ${stabilityMode === 'unstable' ? 'animate-[shake_0.5s_infinite] glitch-filter' : ''}`}>
        <div className="max-w-6xl mx-auto w-full pointer-events-auto">
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
                <a href="#engineering" className="hover:text-[#00f0ff] transition-colors">[ENGINEERING]</a>
                <a href="#analytics" className="hover:text-[#00f0ff] transition-colors">[ANALYTICS]</a>
                <a href="#projects" className="hover:text-[#ff003c] transition-colors font-bold">[EXT_ARCHIVES]</a>
              </div>
              <div className="text-xs text-gray-400 mono hidden sm:flex items-center gap-2">
                <Terminal size={14} className="text-[#00f0ff]" />
                {currentDate} {`// LOC: JABALPUR, IND`}
              </div>
            </div>
          </header>

          <TerminalHero />

          {/* Animated Stats Banner */}
          <StatsCounter />
          
          {/* Main Content Grid (Structured Mosaic) */}
          <div className="grid grid-cols-1 md:grid-cols-6 xl:grid-cols-12 gap-8 sm:gap-10 w-full mt-10 auto-rows-min">
            
            {/* Row 1: Analytics & Monitor */}
            <div className="md:col-span-3 xl:col-span-6 flex flex-col"><AnalyticsDashboard /></div>
            <div className="md:col-span-3 xl:col-span-6 flex flex-col"><SystemMonitorNode /></div>
            
            {/* New Deep-Think Row: Intelligence & Logs */}
            <div className="md:col-span-3 xl:col-span-4 transition-all duration-700">
              <OSWindow title="CORE_BRAIN/KNOWLEDGE_GRAPH.SYS" icon={<Book size={14}/>}>
                <KnowledgeGraph />
              </OSWindow>
            </div>
            <div className="md:col-span-3 xl:col-span-8">
              <OSWindow title="SYSTEM_KERNEL/DIAGNOSTIC_REPORTS.LOG" icon={<Terminal size={14}/>}>
                <DiagnosticLog />
              </OSWindow>
            </div>
            
            {/* Row 2: Live Stats & Architecture */}
            <div className="md:col-span-6 xl:col-span-4 flex flex-col"><GitHubStatsNode /></div>
            <div className="md:col-span-6 xl:col-span-8 flex flex-col"><SystemArchitectureNode /></div>

            {/* Row 3: Performance */}
            <div className="md:col-span-6 xl:col-span-12 flex flex-col"><PerformanceBenchmarks /></div>

            {/* Main Mosaic Area */}
            {/* Col 1 */}
            <div className="md:col-span-6 xl:col-span-5 flex flex-col gap-4 sm:gap-6">
              <ExperienceList />
            </div>
            
            {/* Col 2 */}
            <div className="md:col-span-3 xl:col-span-4 flex flex-col gap-4 sm:gap-6">
              <ImpactMetrics />
              <HackathonWins />
              <BioMatrix />
              <ReferenceVault />
            </div>

            {/* Col 3 */}
            <div id="skills-section" className="md:col-span-3 xl:col-span-3 flex flex-col gap-4 sm:gap-6">
              <SkillsGrid />
              <CertificationsNode />
              <CourseworkGrid />
              <EducationNode />
              <TechnicalWritingNode />
              <LeadershipNode />
            </div>
            
            {/* Projects Span */}
            <div id="projects-section" className="md:col-span-6 xl:col-span-12 flex flex-col mt-4">
              <ProjectsShowcase />
            </div>
            
            {/* Footer Span */}
            <div className="md:col-span-6 xl:col-span-12 flex flex-col gap-4 sm:gap-6"><OpenSourceNode /></div>
            <div className="md:col-span-6 xl:col-span-12 mt-4"><ContactNode /></div>
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