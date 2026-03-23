"use client";
import { useState } from 'react';
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
import { ShieldAlert, Terminal, Cpu, Zap, Activity } from "lucide-react";

export default function Home() {
  const [booted, setBooted] = useState(false);

  return (
    <>
      <BootSequence onComplete={() => setBooted(true)} />
      {booted && <SystemHUD />}
      
      <main className={`min-h-screen p-4 md:p-8 flex flex-col font-sans relative z-10 pb-24 selection:bg-[#00f0ff] selection:text-[#030712] transition-opacity duration-1000 ${booted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden absolute inset-0'}`}>
        <div className="max-w-6xl mx-auto w-full">
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
                {new Date().toISOString().split('T')[0]} // LOC: JABALPUR, IND
              </div>
            </div>
          </header>

          <TerminalHero />

          {/* Animated Stats Banner */}
          <StatsCounter />
          
          {/* Section: Analytics & Agentic Monitor */}
          <div id="analytics" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AnalyticsDashboard />
            <SystemMonitorNode />
          </div>

          {/* Section: GitHub Live & Architecture */}
          <div id="engineering" className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
            <GitHubStatsNode />
            <SystemArchitectureNode />
          </div>
          
          {/* Performance Benchmarks */}
          <div className="mt-4">
            <PerformanceBenchmarks />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full max-w-7xl mx-auto mt-6">
            {/* Main Content Column (Left/Center) */}
            <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
              <ExperienceList />
              <ImpactMetrics />
              <HackathonWins />
              <div className="grid grid-cols-1 gap-4">
                <LeadershipNode />
              </div>
              <ProjectsShowcase />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TechnicalWritingNode />
                <ReferenceVault />
              </div>
            </div>
            
            {/* Sidebar Column (Right) */}
            <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6">
              <BioMatrix />
              <SkillsGrid />
              <OpenSourceNode />
              <CertificationsNode />
              <CourseworkGrid />
              <EducationNode />
              <ContactNode />
            </div>
          </div>
          
          <footer className="mt-16 text-center border-t border-[#00f0ff]/20 pt-8 opacity-70 hover:opacity-100 transition-opacity">
            <p className="text-xs text-[#00f0ff] mono">
              © {new Date().getFullYear()} ARYAN BARDE. All systems operational. 
              <span className="ml-2 bg-[#ff003c] text-white px-1 py-0.5 rounded-sm">V. 9.2-EXTRAORDINARY</span>
            </p>
          </footer>
        </div>
      </main>

      {booted && <RecruiterHUD />}
    </>
  );
}
