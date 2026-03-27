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
import AchievementsNode from "@/components/AchievementsNode";
import SystemArchitectureNode from "@/components/SystemArchitectureNode";
import CareerTrajectory from "@/components/CareerTrajectory";
import RecruiterHUD from "@/components/RecruiterHUD";
import HackathonWins from "@/components/HackathonWins";
import PerformanceBenchmarks from "@/components/PerformanceBenchmarks";
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
      
      <main id="main-content" className={`min-h-screen px-3 sm:px-4 md:px-8 py-4 sm:py-6 flex flex-col font-sans relative z-10 pb-24 sm:pb-40 transition-all duration-1000 ${booted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden absolute inset-0'} ${stabilityMode === 'unstable' ? 'animate-[shake_0.5s_infinite] glitch-filter' : ''}`}>
        <div className="max-w-7xl mx-auto w-full">

          {/* Hero */}
          <div id="hero" className="mt-6 sm:mt-12">
            <TerminalHero />
          </div>

          {/* Quote */}
          <CinematicQuote />

          {/* Stats */}
          <StatsCounter />
          
          {/* Content - Stacked Vertical Layout */}
          <div className="flex flex-col gap-4 sm:gap-6 w-full mt-4 sm:mt-8">
            
            {/* Analytics & Timeline - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div id="analytics"><AnalyticsDashboard /></div>
              <div id="timeline"><SystemMonitorNode /></div>
            </div>

            {/* Knowledge & Diagnostics - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <OSWindow title="Knowledge Graph" icon={<Book size={14}/>}>
                <KnowledgeGraph />
              </OSWindow>
              <OSWindow title="Diagnostic Reports" icon={<Terminal size={14}/>}>
                <DiagnosticLog />
              </OSWindow>
            </div>
            
            {/* Career Trajectory - Full Width */}
            <div id="career">
              <CareerTrajectory />
            </div>

            {/* GitHub - Full Width */}
            <div id="github">
              <GitHubStatsNode />
            </div>

            {/* System Architecture - Full Width */}
            <div>
              <SystemArchitectureNode />
            </div>

            {/* Impact Metrics - Full Width */}
            <div>
              <ImpactMetrics />
            </div>

            {/* Performance Benchmarks - Full Width */}
            <div>
              <PerformanceBenchmarks />
            </div>

            {/* Hackathon Wins - Full Width */}
            <div>
              <HackathonWins />
            </div>

            {/* Experience - Full Width */}
            <div>
              <ExperienceList />
            </div>

            {/* Bio - Full Width */}
            <div>
              <BioMatrix />
            </div>

            {/* Skills & Education - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div id="skills-section"><SkillsGrid /></div>
              <div><EducationNode /></div>
            </div>

            {/* Achievements & References - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div><AchievementsNode /></div>
              <div><ReferenceVault /></div>
            </div>

            {/* Certifications & Coursework - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div><CertificationsNode /></div>
              <div><CourseworkGrid /></div>
            </div>

            {/* Writing & Leadership - Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div><TechnicalWritingNode /></div>
              <div><LeadershipNode /></div>
            </div>
            
            {/* Projects - Full Width */}
            <div id="projects-section">
              <ProjectsShowcase />
            </div>
            
            {/* Open Source - Full Width */}
            <div>
              <OpenSourceNode />
            </div>

            {/* Contact - Full Width */}
            <div id="contact">
              <ContactNode />
            </div>
          </div>
          
          {/* Footer */}
          <footer className="mt-10 sm:mt-20 text-center border-t border-[#818cf8]/10 pt-6 sm:pt-8 pb-4 space-y-3">
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
