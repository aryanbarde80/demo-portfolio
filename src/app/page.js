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
import { Terminal, Book } from "lucide-react";

export default function Home() {
  const [booted, setBooted] = useState(false);
  const [stabilityMode, setStabilityMode] = useState('stable');

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
      
      <main id="main-content" className={`min-h-screen px-4 md:px-8 py-6 flex flex-col font-sans relative z-10 pb-40 transition-all duration-1000 ${booted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden absolute inset-0'} ${stabilityMode === 'unstable' ? 'animate-[shake_0.5s_infinite] glitch-filter' : ''}`}>
        <div className="max-w-6xl mx-auto w-full">

          {/* Hero */}
          <div id="hero" className="mt-12">
            <TerminalHero />
          </div>

          {/* Quote */}
          <CinematicQuote />

          {/* Stats */}
          <StatsCounter />
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 w-full mt-8 auto-rows-min">
            
            {/* Analytics & Timeline */}
            <div id="analytics" className="md:col-span-7 flex flex-col"><AnalyticsDashboard /></div>
            <div id="timeline" className="md:col-span-5 flex flex-col"><SystemMonitorNode /></div>
            
            {/* Knowledge & Diagnostics */}
            <div className="md:col-span-5">
              <OSWindow title="Knowledge Graph" icon={<Book size={14}/>}>
                <KnowledgeGraph />
              </OSWindow>
            </div>
            <div className="md:col-span-7">
              <OSWindow title="Diagnostic Reports" icon={<Terminal size={14}/>}>
                <DiagnosticLog />
              </OSWindow>
            </div>
            
            {/* GitHub & Architecture */}
            <div id="github" className="md:col-span-5 flex flex-col"><GitHubStatsNode /></div>
            <div className="md:col-span-7 flex flex-col"><SystemArchitectureNode /></div>

            {/* Performance */}
            <div className="md:col-span-12 flex flex-col"><PerformanceBenchmarks /></div>

            {/* Experience & Bio */}
            <div className="md:col-span-7 flex flex-col"><ExperienceList /></div>
            <div className="md:col-span-5 flex flex-col"><BioMatrix /></div>

            {/* Impact */}
            <div className="md:col-span-12 flex flex-col"><ImpactMetrics /></div>

            {/* Skills & Education */}
            <div id="skills-section" className="md:col-span-7 flex flex-col"><SkillsGrid /></div>
            <div className="md:col-span-5 flex flex-col"><EducationNode /></div>

            {/* Hackathons & References */}
            <div className="md:col-span-7 flex flex-col"><HackathonWins /></div>
            <div className="md:col-span-5 flex flex-col"><ReferenceVault /></div>

            {/* Certifications & Coursework */}
            <div className="md:col-span-6 flex flex-col"><CertificationsNode /></div>
            <div className="md:col-span-6 flex flex-col"><CourseworkGrid /></div>

            {/* Writing & Leadership */}
            <div className="md:col-span-6 flex flex-col"><TechnicalWritingNode /></div>
            <div className="md:col-span-6 flex flex-col"><LeadershipNode /></div>
            
            {/* Projects */}
            <div id="projects-section" className="md:col-span-12 flex flex-col">
              <ProjectsShowcase />
            </div>
            
            {/* Open Source */}
            <div className="md:col-span-12 flex flex-col"><OpenSourceNode /></div>

            {/* Contact */}
            <div id="contact" className="md:col-span-12"><ContactNode /></div>
          </div>
          
          {/* Footer */}
          <footer className="mt-20 text-center border-t border-[#818cf8]/10 pt-8 pb-4 space-y-3">
            <div className="flex justify-center items-center gap-3 text-xs mono text-[#6b6b80]">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                All systems operational
              </span>
            </div>
            <p className="text-[11px] text-[#6b6b80] mono tracking-wide">
              &copy; {new Date().getFullYear()} Aryan Barde &middot; Crafted with discipline &amp; consistency
            </p>
            <p className="text-[9px] text-[#6b6b80]/50 mono">
              Built with Next.js &middot; Three.js &middot; GSAP &middot; Tailwind CSS
            </p>
          </footer>
        </div>
      </main>

      {booted && <RecruiterHUD />}
      {booted && <MantraCLI onCommand={handleCLICommand} />}
    </>
  );
}
