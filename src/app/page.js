"use client";
import { useState, lazy, Suspense } from 'react';
import TerminalHero from "@/components/TerminalHero";
import StatsCounter from "@/components/StatsCounter";
import BootSequence from "@/components/BootSequence";
import StickyNav from "@/components/StickyNav";
import OSWindow from "@/components/OSWindow";
import CinematicQuote from "@/components/CinematicQuote";
import { Terminal, Book } from "lucide-react";

// Lazy load heavy components for better initial load performance
const SkillsGrid = lazy(() => import("@/components/SkillsGrid"));
const ExperienceList = lazy(() => import("@/components/ExperienceList"));
const ProjectsShowcase = lazy(() => import("@/components/ProjectsShowcase"));
const ContactNode = lazy(() => import("@/components/ContactNode"));
const EducationNode = lazy(() => import("@/components/EducationNode"));
const CertificationsNode = lazy(() => import("@/components/CertificationsNode"));
const SystemMonitorNode = lazy(() => import("@/components/SystemMonitorNode"));
const BioMatrix = lazy(() => import("@/components/BioMatrix"));
const LeadershipNode = lazy(() => import("@/components/LeadershipNode"));
const AnalyticsDashboard = lazy(() => import("@/components/AnalyticsDashboard"));
const TechnicalWritingNode = lazy(() => import("@/components/TechnicalWritingNode"));
const ReferenceVault = lazy(() => import("@/components/ReferenceVault"));
const GitHubStatsNode = lazy(() => import("@/components/GitHubStatsNode"));
const OpenSourceNode = lazy(() => import("@/components/OpenSourceNode"));
const CourseworkGrid = lazy(() => import("@/components/CourseworkGrid"));
const ImpactMetrics = lazy(() => import("@/components/ImpactMetrics"));
const AchievementsNode = lazy(() => import("@/components/AchievementsNode"));
const SystemArchitectureNode = lazy(() => import("@/components/SystemArchitectureNode"));
const CareerTrajectory = lazy(() => import("@/components/CareerTrajectory"));
const RecruiterHUD = lazy(() => import("@/components/RecruiterHUD"));
const HackathonWins = lazy(() => import("@/components/HackathonWins"));
const PerformanceBenchmarks = lazy(() => import("@/components/PerformanceBenchmarks"));
const SystemHUD = lazy(() => import("@/components/SystemHUD"));
const DivineAudio = lazy(() => import("@/components/DivineAudio"));
const DivineCanvas = lazy(() => import("@/components/DivineCanvas"));
const MantraCLI = lazy(() => import("@/components/MantraCLI"));
const MagneticCursor = lazy(() => import("@/components/MagneticCursor"));
const NeuralMatrix = lazy(() => import("@/components/NeuralMatrix"));
const DiagnosticLog = lazy(() => import("@/components/DiagnosticLog"));
const KnowledgeGraph = lazy(() => import("@/components/KnowledgeGraph"));

function SectionFallback() {
  return (
    <div className="w-full min-h-[60px] flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-[#818cf8]/30 border-t-[#818cf8] rounded-full animate-spin" />
    </div>
  );
}

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
      {booted && (
        <Suspense fallback={null}>
          <SystemHUD />
        </Suspense>
      )}
      {booted && <StickyNav />}
      {booted && (
        <Suspense fallback={null}>
          <DivineAudio />
        </Suspense>
      )}
      {booted && (
        <Suspense fallback={null}>
          <DivineCanvas commandState={stabilityMode} />
        </Suspense>
      )}
      {booted && (
        <Suspense fallback={null}>
          <MagneticCursor />
        </Suspense>
      )}
      {booted && (
        <Suspense fallback={null}>
          <NeuralMatrix />
        </Suspense>
      )}
      
      <main id="main-content" role="main" className={`min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 flex flex-col font-sans relative z-10 pb-24 sm:pb-32 transition-all duration-1000 ${booted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden absolute inset-0'} ${stabilityMode === 'unstable' ? 'animate-[shake_0.5s_infinite] glitch-filter' : ''}`}>
        <div className="max-w-7xl mx-auto w-full">

          {/* Hero Section */}
          <section id="hero" aria-label="Introduction" className="mt-4 sm:mt-8 md:mt-12">
            <TerminalHero />
          </section>

          {/* Quote */}
          <CinematicQuote />

          {/* Stats */}
          <section aria-label="Statistics">
            <StatsCounter />
          </section>
          
          {/* Content - Stacked Vertical Layout */}
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full mt-4 sm:mt-6">
            
            {/* Analytics & Timeline - Side by Side */}
            <section aria-label="Analytics and Timeline" className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div id="analytics">
                <Suspense fallback={<SectionFallback />}>
                  <AnalyticsDashboard />
                </Suspense>
              </div>
              <div id="timeline">
                <Suspense fallback={<SectionFallback />}>
                  <SystemMonitorNode />
                </Suspense>
              </div>
            </section>

            {/* Knowledge & Diagnostics - Side by Side */}
            <section aria-label="Knowledge and Diagnostics" className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <Suspense fallback={<SectionFallback />}>
                <OSWindow title="Knowledge Graph" icon={<Book size={14}/>}>
                  <KnowledgeGraph />
                </OSWindow>
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <OSWindow title="Diagnostic Reports" icon={<Terminal size={14}/>}>
                  <DiagnosticLog />
                </OSWindow>
              </Suspense>
            </section>
            
            {/* Career Trajectory - Full Width */}
            <section id="career" aria-label="Career Trajectory">
              <Suspense fallback={<SectionFallback />}>
                <CareerTrajectory />
              </Suspense>
            </section>

            {/* GitHub - Full Width */}
            <section id="github" aria-label="GitHub Statistics">
              <Suspense fallback={<SectionFallback />}>
                <GitHubStatsNode />
              </Suspense>
            </section>

            {/* System Architecture - Full Width */}
            <section aria-label="System Architecture">
              <Suspense fallback={<SectionFallback />}>
                <SystemArchitectureNode />
              </Suspense>
            </section>

            {/* Impact Metrics - Full Width */}
            <section aria-label="Impact Metrics">
              <Suspense fallback={<SectionFallback />}>
                <ImpactMetrics />
              </Suspense>
            </section>

            {/* Performance Benchmarks - Full Width */}
            <section aria-label="Performance Benchmarks">
              <Suspense fallback={<SectionFallback />}>
                <PerformanceBenchmarks />
              </Suspense>
            </section>

            {/* Hackathon Wins - Full Width */}
            <section aria-label="Hackathon Achievements">
              <Suspense fallback={<SectionFallback />}>
                <HackathonWins />
              </Suspense>
            </section>

            {/* Experience - Full Width */}
            <section aria-label="Work Experience">
              <Suspense fallback={<SectionFallback />}>
                <ExperienceList />
              </Suspense>
            </section>

            {/* Bio - Full Width */}
            <section aria-label="Professional Bio">
              <Suspense fallback={<SectionFallback />}>
                <BioMatrix />
              </Suspense>
            </section>

            {/* Skills & Education - Side by Side */}
            <section aria-label="Skills and Education" className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div id="skills-section">
                <Suspense fallback={<SectionFallback />}>
                  <SkillsGrid />
                </Suspense>
              </div>
              <div>
                <Suspense fallback={<SectionFallback />}>
                  <EducationNode />
                </Suspense>
              </div>
            </section>

            {/* Achievements & References - Side by Side */}
            <section aria-label="Achievements and References" className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <Suspense fallback={<SectionFallback />}>
                <AchievementsNode />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <ReferenceVault />
              </Suspense>
            </section>

            {/* Certifications & Coursework - Side by Side */}
            <section aria-label="Certifications and Coursework" className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <Suspense fallback={<SectionFallback />}>
                <CertificationsNode />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <CourseworkGrid />
              </Suspense>
            </section>

            {/* Writing & Leadership - Side by Side */}
            <section aria-label="Technical Writing and Leadership" className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <Suspense fallback={<SectionFallback />}>
                <TechnicalWritingNode />
              </Suspense>
              <Suspense fallback={<SectionFallback />}>
                <LeadershipNode />
              </Suspense>
            </section>
            
            {/* Projects - Full Width */}
            <section id="projects-section" aria-label="Projects Portfolio">
              <Suspense fallback={<SectionFallback />}>
                <ProjectsShowcase />
              </Suspense>
            </section>
            
            {/* Open Source - Full Width */}
            <section aria-label="Open Source Contributions">
              <Suspense fallback={<SectionFallback />}>
                <OpenSourceNode />
              </Suspense>
            </section>

            {/* Contact - Full Width */}
            <section id="contact" aria-label="Contact Information">
              <Suspense fallback={<SectionFallback />}>
                <ContactNode />
              </Suspense>
            </section>
          </div>
          
          {/* Footer */}
          <footer className="mt-8 sm:mt-12 text-center border-t border-[#818cf8]/10 pt-6 pb-4 space-y-3" role="contentinfo">
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

      {booted && (
        <Suspense fallback={null}>
          <RecruiterHUD />
        </Suspense>
      )}
      {booted && (
        <Suspense fallback={null}>
          <MantraCLI onCommand={handleCLICommand} />
        </Suspense>
      )}
    </>
  );
}
