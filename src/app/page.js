"use client";
import { useState } from 'react';
import TerminalHero from "@/components/TerminalHero";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceList from "@/components/ExperienceList";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ContactNode from "@/components/ContactNode";
import EducationNode from "@/components/EducationNode";
import CertificationsNode from "@/components/CertificationsNode";
import AchievementsNode from "@/components/AchievementsNode";
import BioMatrix from "@/components/BioMatrix";
import LeadershipNode from "@/components/LeadershipNode";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import TechnicalWritingNode from "@/components/TechnicalWritingNode";
import ReferenceVault from "@/components/ReferenceVault";
import GitHubStatsNode from "@/components/GitHubStatsNode";
import StatsCounter from "@/components/StatsCounter";
import OpenSourceNode from "@/components/OpenSourceNode";
import CourseworkGrid from "@/components/CourseworkGrid";
import BootSequence from "@/components/BootSequence";
import SystemHUD from "@/components/SystemHUD";
import { ShieldAlert, Terminal } from "lucide-react";

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
            <div className="text-xs text-gray-400 mono hidden sm:flex items-center gap-2">
              <Terminal size={14} className="text-[#00f0ff]" />
              {new Date().toISOString().split('T')[0]} // LOC: JABALPUR, IND
            </div>
          </header>

          <TerminalHero />

          {/* Animated Stats Banner */}
          <StatsCounter />
          
          {/* Section: Analytics */}
          <div id="analytics">
            <AnalyticsDashboard />
          </div>

          {/* Section: GitHub Live */}
          <div id="github" className="mt-2">
            <GitHubStatsNode />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 w-full max-w-7xl mx-auto mt-6">
            {/* Main Content Column (Left/Center) */}
            <div className="lg:col-span-8 flex flex-col gap-4 sm:gap-6">
              <ExperienceList />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <AchievementsNode />
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
              <span className="ml-2 bg-[#ff003c] text-white px-1 py-0.5 rounded-sm">V. 9.1</span>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
