"use client";
import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from './OSWindow';
import { ExternalLink, Github, Code, Cpu, Globe, Server, Database, Bot, Smartphone, Zap, Eye, GitBranch, Star, Layers } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const gridRef = useRef(null);

  const projects = [
    {
      title: "AryanOS Portfolio",
      desc: "Futuristic portfolio with Three.js 3D canvas, terminal emulator, glassmorphic UI, boot sequence, and immersive audio. Built as an Agentic OS interface.",
      tech: ["Next.js", "Three.js", "GSAP", "Tailwind CSS", "Framer Motion", "Howler.js"],
      category: "FRONTEND",
      color: "#00f0ff",
      icon: Globe,
      status: "LIVE",
      link: "https://github.com/aryanbarde80/aryanOS-2.0",
      github: "https://github.com/aryanbarde80/aryanOS-2.0"
    },
    {
      title: "IoT Real-Time Dashboard",
      desc: "Real-time IoT monitoring platform with sub-100ms telemetry, live sensor visualization, and alert system. Reduced API latency by 40% via Redis caching.",
      tech: ["React.js", "Node.js", "Socket.io", "Redis", "MQTT", "ESP32"],
      category: "FULLSTACK",
      color: "#ff003c",
      icon: Cpu,
      status: "PRODUCTION",
      github: "https://github.com/aryanbarde80/IoT-Smart-Agriculture"
    },
    {
      title: "AI Defect Detection System",
      desc: "YOLOv8-based manufacturing quality control pipeline achieving 95% defect detection accuracy. Deployed for real-time visual inspection in production lines.",
      tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "Docker"],
      category: "AI/ML",
      color: "#ffaa44",
      icon: Bot,
      status: "DEPLOYED",
      github: "https://github.com/aryanbarde80/AI-Defect-Detection"
    },
    {
      title: "RoomieQ India Platform",
      desc: "Full-stack accommodation platform with 40% query optimization. Features advanced search, real-time chat, and booking management system.",
      tech: ["Next.js", "PostgreSQL", "Node.js", "Redis", "Tailwind CSS"],
      category: "FULLSTACK",
      color: "#00f0ff",
      icon: Database,
      status: "LIVE",
      github: "https://github.com/aryanbarde80/RoomieQ-Platform"
    },
    {
      title: "Multi-Agent AI System",
      desc: "Autonomous AI agent orchestration using CrewAI and LangChain. RAG pipelines for intelligent document processing and decision-making workflows.",
      tech: ["Python", "LangChain", "CrewAI", "RAG", "OpenAI API"],
      category: "AI/ML",
      color: "#ff003c",
      icon: Bot,
      status: "ACTIVE",
      github: "https://github.com/aryanbarde80/Multi-Agent-AI"
    },
    {
      title: "SEO Automation Engine",
      desc: "Automated SEO optimization platform that improved organic traffic by 30% and search rankings by 40 positions for client websites.",
      tech: ["Next.js", "Python", "Node.js", "Analytics API"],
      category: "FULLSTACK",
      color: "#ffaa44",
      icon: Globe,
      status: "PRODUCTION",
      github: "https://github.com/aryanbarde80/SEO-Automation"
    },
    {
      title: "React Native Mobile App",
      desc: "Cross-platform mobile application with real-time data synchronization, push notifications, and offline-first architecture.",
      tech: ["React Native", "Firebase", "Redux", "Node.js"],
      category: "MOBILE",
      color: "#00f0ff",
      icon: Smartphone,
      status: "SHIPPED",
      github: "https://github.com/aryanbarde80/ReactNative-App"
    },
    {
      title: "Zerve Data Challenge 2026",
      desc: "ML prediction model achieving 100% accuracy on user success prediction from 409K behavioral events. Feature engineering and ensemble methods.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      category: "AI/ML",
      color: "#ffaa44",
      icon: Zap,
      status: "WINNER",
      github: "https://github.com/aryanbarde80/Zerve-Data-Challenge"
    }
  ];

  const categories = ["ALL", "FRONTEND", "FULLSTACK", "AI/ML", "MOBILE"];
  const filtered = activeFilter === "ALL" ? projects : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.project-card');
    gsap.fromTo(cards,
      { y: 40, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [activeFilter]);

  return (
    <OSWindow title="EXT_ARCHIVES/PROJECTS.SYS" icon={<Layers size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-6xl">
      <div className="space-y-5">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <Code size={12} className="text-[#00f0ff]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">PROJECT_REGISTRY</span>
          </div>
          <div className="flex gap-2 text-[9px] sm:text-[10px] mono">
            <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">{projects.length} PROJECTS</span>
            <span className="text-[#ffaa44] bg-[#ffaa44]/10 px-2 py-0.5 rounded">{filtered.length} SHOWING</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[9px] sm:text-[10px] mono px-3 py-1.5 rounded-md border transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#00f0ff]/20 border-[#00f0ff]/60 text-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'border-gray-800 text-gray-500 hover:border-[#00f0ff]/30 hover:text-gray-300'
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="project-card group relative p-4 border border-gray-800 hover:border-[#00f0ff]/50 rounded-xl bg-gradient-to-br from-[#030712] to-[#0a0f1a] hover:bg-[#00f0ff]/5 transition-all duration-300 overflow-hidden cursor-default flex flex-col"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 30% 40%, ${project.color}10, transparent 70%)` }}
                />
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                        <Icon size={14} style={{ color: project.color }} />
                      </div>
                    </div>
                    <span
                      className="text-[7px] sm:text-[8px] mono px-1.5 py-0.5 rounded font-bold"
                      style={{ backgroundColor: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-gray-200 group-hover:text-[#00f0ff] transition-colors mb-2">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[9px] sm:text-[10px] text-gray-500 leading-relaxed mb-3 flex-1">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-[7px] sm:text-[8px] mono px-1.5 py-0.5 bg-gray-900 text-gray-400 rounded border border-gray-800">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[7px] sm:text-[8px] mono px-1.5 py-0.5 text-gray-600">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-800/50">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#00f0ff] transition-colors p-1">
                        <Github size={12} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#ffaa44] transition-colors p-1">
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <span className="text-[7px] mono text-gray-700 ml-auto">{project.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-[#00f0ff]/20 flex flex-wrap justify-between items-center gap-3 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <GitBranch size={10} className="text-[#00f0ff]" />
              <span className="text-gray-500">TOTAL_REPOS: {projects.length}+</span>
            </span>
            <span className="flex items-center gap-1">
              <Star size={10} className="text-[#ffaa44]" />
              <span className="text-gray-500">DOMAINS: {categories.length - 1}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={10} className="text-gray-600" />
            <span className="text-gray-600">ALL_PROJECTS_OPERATIONAL</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
