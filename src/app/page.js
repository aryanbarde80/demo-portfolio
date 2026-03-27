"use client";
import { useState, lazy, Suspense } from 'react';
import TerminalHero from "@/components/TerminalHero";
import StatsCounter from "@/components/StatsCounter";
import BootSequence from "@/components/BootSequence";
import StickyNav from "@/components/StickyNav";
import OSWindow from "@/components/OSWindow";
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
const SectionDivider = lazy(() => import("@/components/SectionDivider"));
const AmbientParticles = lazy(() => import("@/components/AmbientParticles"));
const SideDecorations = lazy(() => import("@/components/SideDecorations"));
const OrbitalFiller = lazy(() => import("@/components/OrbitalFiller"));

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
      {booted && (
        <Suspense fallback={null}>
          <AmbientParticles />
        </Suspense>
      )}
      {booted && (
        <Suspense fallback={null}>
          <SideDecorations />
        </Suspense>
      )}
      
      <main id="main-content" role="main" className={`min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 flex flex-col font-sans relative z-10 pb-12 sm:pb-16 transition-all duration-1000 ${booted ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden absolute inset-0'} ${stabilityMode === 'unstable' ? 'animate-[shake_0.5s_infinite] glitch-filter' : ''}`}>
        <div className="max-w-7xl mx-auto w-full">

          {/* Hero Section */}
          <section id="hero" aria-label="Introduction" className="mt-2 sm:mt-4 md:mt-6">
            <TerminalHero />
          </section>

          {/* Stats */}
          <section aria-label="Statistics">
            <StatsCounter />
          </section>
          
          {/* Content - Stacked Vertical Layout */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full mt-3 sm:mt-4">
            
            {/* Analytics & Timeline - Side by Side */}
            <section aria-label="Analytics and Timeline" className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <div id="analytics" className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <AnalyticsDashboard />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[140px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="pulse" />
                  </Suspense>
                </div>
              </div>
              <div id="timeline" className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <SystemMonitorNode />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[140px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="rings" />
                  </Suspense>
                </div>
              </div>
            </section>

            <Suspense fallback={null}><SectionDivider variant="circuit" /></Suspense>

            {/* Knowledge & Diagnostics - Side by Side */}
            <section aria-label="Knowledge and Diagnostics" className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <div className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <OSWindow title="Knowledge Graph" icon={<Book size={14}/>}>
                    <KnowledgeGraph />
                  </OSWindow>
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[140px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="grid" />
                  </Suspense>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <OSWindow title="Diagnostic Reports" icon={<Terminal size={14}/>}>
                    <DiagnosticLog />
                  </OSWindow>
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[180px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="rings" />
                  </Suspense>
                </div>
              </div>
            </section>
            
            <Suspense fallback={null}><SectionDivider variant="dataStream" /></Suspense>

            {/* Career Trajectory - Full Width */}
            <section id="career" aria-label="Career Trajectory">
              <Suspense fallback={<SectionFallback />}>
                <CareerTrajectory />
              </Suspense>
            </section>

            <Suspense fallback={null}><SectionDivider variant="pulse" /></Suspense>

            {/* GitHub - Full Width */}
            <section id="github" aria-label="GitHub Statistics">
              <Suspense fallback={<SectionFallback />}>
                <GitHubStatsNode />
              </Suspense>
            </section>

            <Suspense fallback={null}><SectionDivider variant="waveform" /></Suspense>

            {/* System Architecture - Full Width */}
            <section aria-label="System Architecture">
              <Suspense fallback={<SectionFallback />}>
                <SystemArchitectureNode />
              </Suspense>
            </section>

            <Suspense fallback={null}><SectionDivider variant="matrix" /></Suspense>

            {/* Impact Metrics - Full Width */}
            <section aria-label="Impact Metrics">
              <Suspense fallback={<SectionFallback />}>
                <ImpactMetrics />
              </Suspense>
            </section>

            <Suspense fallback={null}><SectionDivider variant="circuit" /></Suspense>

            {/* Performance Benchmarks - Full Width */}
            <section aria-label="Performance Benchmarks">
              <Suspense fallback={<SectionFallback />}>
                <PerformanceBenchmarks />
              </Suspense>
            </section>

            <Suspense fallback={null}><SectionDivider variant="pulse" /></Suspense>

            {/* Hackathon Wins - Full Width */}
            <section aria-label="Hackathon Achievements">
              <Suspense fallback={<SectionFallback />}>
                <HackathonWins />
              </Suspense>
            </section>

            <Suspense fallback={null}><SectionDivider variant="dataStream" /></Suspense>

            {/* Experience - Full Width */}
            <section aria-label="Work Experience">
              <Suspense fallback={<SectionFallback />}>
                <ExperienceList />
              </Suspense>
            </section>

            <Suspense fallback={null}><SectionDivider variant="waveform" /></Suspense>

            {/* Bio - Full Width */}
            <section aria-label="Professional Bio">
              <Suspense fallback={<SectionFallback />}>
                <BioMatrix />
              </Suspense>
            </section>

            <Suspense fallback={null}><SectionDivider variant="matrix" /></Suspense>

            {/* Skills & Education - Side by Side */}
            <section aria-label="Skills and Education" className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <div id="skills-section" className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <SkillsGrid />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[140px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="helix" />
                  </Suspense>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <EducationNode />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[180px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="grid" />
                  </Suspense>
                </div>
              </div>
            </section>

            <Suspense fallback={null}><SectionDivider variant="circuit" /></Suspense>

            {/* Achievements & References - Side by Side */}
            <section aria-label="Achievements and References" className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <div className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <AchievementsNode />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[180px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="pulse" />
                  </Suspense>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <ReferenceVault />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[140px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="grid" />
                  </Suspense>
                </div>
              </div>
            </section>

            <Suspense fallback={null}><SectionDivider variant="pulse" /></Suspense>

            {/* Certifications & Coursework - Side by Side */}
            <section aria-label="Certifications and Coursework" className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <div className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <CertificationsNode />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[140px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="rings" />
                  </Suspense>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <CourseworkGrid />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[180px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="helix" />
                  </Suspense>
                </div>
              </div>
            </section>

            <Suspense fallback={null}><SectionDivider variant="dataStream" /></Suspense>

            {/* Writing & Leadership - Side by Side */}
            <section aria-label="Technical Writing and Leadership" className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <div className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <TechnicalWritingNode />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[140px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="pulse" />
                  </Suspense>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:gap-4">
                <Suspense fallback={<SectionFallback />}>
                  <LeadershipNode />
                </Suspense>
                <div className="hidden lg:block flex-1 min-h-[140px] glass-panel rounded-2xl overflow-hidden">
                  <Suspense fallback={null}>
                    <OrbitalFiller variant="helix" />
                  </Suspense>
                </div>
              </div>
            </section>
            
            <Suspense fallback={null}><SectionDivider variant="waveform" /></Suspense>

            {/* Projects - Full Width */}
            <section id="projects-section" aria-label="Projects Portfolio">
              <Suspense fallback={<SectionFallback />}>
                <ProjectsShowcase />
              </Suspense>
            </section>
            
            <Suspense fallback={null}><SectionDivider variant="matrix" /></Suspense>

            {/* Open Source - Full Width */}
            <section aria-label="Open Source Contributions">
              <Suspense fallback={<SectionFallback />}>
                <OpenSourceNode />
              </Suspense>
            </section>

            <Suspense fallback={null}><SectionDivider variant="circuit" /></Suspense>

            {/* Contact - Full Width */}
            <section id="contact" aria-label="Contact Information">
              <Suspense fallback={<SectionFallback />}>
                <ContactNode />
              </Suspense>
            </section>
          </div>
          
          {/* Footer */}
          <footer className="mt-6 sm:mt-8 text-center pt-4 pb-3 space-y-2 relative" role="contentinfo">
            <div className="absolute inset-0 bg-[#030712]/80 backdrop-blur-sm rounded-lg border border-[#818cf8]/10"></div>
            <div className="relative z-10 py-3 px-4">
              <div className="flex justify-center items-center gap-3 text-xs mono text-[#a1a1b5] mb-2">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  All systems operational
                </span>
              </div>
              <p className="text-[11px] text-[#a1a1b5] mono tracking-wide">
                &copy; {new Date().getFullYear()} Aryan Barde &middot; Crafted with discipline &amp; consistency
              </p>
              <p className="text-[9px] text-[#6b6b80] mono mt-1">
                Built with Next.js &middot; Three.js &middot; GSAP &middot; Tailwind CSS
              </p>
            </div>
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
