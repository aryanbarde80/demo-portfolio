"use client";
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from './OSWindow';
import { ExternalLink, Github, Code, Globe, Database, Bot, Smartphone, Zap, Eye, GitBranch, Star, Layers, Cpu } from 'lucide-react';

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
      color: "#818cf8",
      icon: Globe,
      status: "LIVE",
      link: "https://github.com/aryanbarde80/aryanOS-2.0",
      github: "https://github.com/aryanbarde80/aryanOS-2.0"
    },
    {
      title: "Fly with Zara",
      desc: "Complete digital transformation for an IATA-certified travel agency. Booking system, itinerary management, and customer portal with responsive design.",
      tech: ["Next.js", "React", "Tailwind CSS", "Node.js"],
      category: "FREELANCE",
      color: "#f472b6",
      icon: Globe,
      status: "LIVE",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "ClickMyze Agency",
      desc: "High-performance creative tech agency website featuring an 8-step methodology showcase, portfolio gallery, and client testimonials.",
      tech: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion"],
      category: "FREELANCE",
      color: "#818cf8",
      icon: Globe,
      status: "LIVE",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "IoT Real-Time Dashboard",
      desc: "Real-time IoT monitoring platform with sub-100ms telemetry, live sensor visualization, and alert system. Reduced API latency by 40% via Redis caching.",
      tech: ["React.js", "Node.js", "Socket.io", "Redis", "MQTT", "ESP32"],
      category: "FULLSTACK",
      color: "#f472b6",
      icon: Cpu,
      status: "PRODUCTION",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "AI Defect Detection System",
      desc: "YOLOv8-based manufacturing quality control pipeline achieving 95% defect detection accuracy. Deployed for real-time visual inspection.",
      tech: ["Python", "YOLOv8", "OpenCV", "FastAPI", "Docker"],
      category: "AI/ML",
      color: "#fb923c",
      icon: Bot,
      status: "DEPLOYED",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "TalentBloom Job Portal",
      desc: "WordPress-based job portal with advanced filtering, employer dashboards, and applicant tracking. Custom theme with responsive design.",
      tech: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
      category: "FREELANCE",
      color: "#fb923c",
      icon: Globe,
      status: "LIVE",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "Trisight Global Solutions",
      desc: "Corporate website achieving 95+ Google PageSpeed score. Built with Next.js SSR for optimal SEO and performance.",
      tech: ["Next.js", "React", "Tailwind CSS", "SEO"],
      category: "FREELANCE",
      color: "#818cf8",
      icon: Globe,
      status: "LIVE",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "RoomieQ India Platform",
      desc: "Full-stack accommodation platform with 40% query optimization. Features advanced search, real-time chat, and booking management.",
      tech: ["Next.js", "PostgreSQL", "Node.js", "Redis", "Socket.io"],
      category: "FULLSTACK",
      color: "#818cf8",
      icon: Database,
      status: "LIVE",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "Krapto Technologies",
      desc: "E-commerce platform with SEO automation that boosted organic traffic by 30% and improved search rankings by 40 positions.",
      tech: ["Next.js", "Node.js", "MongoDB", "Analytics API"],
      category: "FREELANCE",
      color: "#f472b6",
      icon: Globe,
      status: "PRODUCTION",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "MGGP India Foundation",
      desc: "NGO website with multilingual support, donation system, and event management. Improved search ranking by 40 positions through SEO.",
      tech: ["Next.js", "Node.js", "i18n", "SEO"],
      category: "FREELANCE",
      color: "#fb923c",
      icon: Globe,
      status: "LIVE",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "PostgreStore",
      desc: "Cloud-based RDBMS management system with visual schema designer, query builder, and performance analytics dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Express"],
      category: "FULLSTACK",
      color: "#818cf8",
      icon: Database,
      status: "ACTIVE",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "QuickConnect",
      desc: "Real-time chat application with Socket.io, message encryption, file sharing, and group chat functionality.",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "FULLSTACK",
      color: "#f472b6",
      icon: Code,
      status: "ACTIVE",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "Advanced Network Simulation",
      desc: "Cisco Packet Tracer network simulation with VLAN, OSPF routing, ACL security, and multi-site WAN connectivity.",
      tech: ["Cisco", "Packet Tracer", "OSPF", "VLAN", "ACL"],
      category: "IOT",
      color: "#fb923c",
      icon: Cpu,
      status: "COMPLETED",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "React Native IoT App",
      desc: "Cross-platform mobile app for IoT device management with real-time sensor data, push notifications, and offline-first architecture.",
      tech: ["React Native", "Expo", "Firebase", "Redux"],
      category: "MOBILE",
      color: "#818cf8",
      icon: Smartphone,
      status: "SHIPPED",
      github: "https://github.com/aryanbarde80"
    },
    {
      title: "Zerve Data Challenge 2026",
      desc: "ML prediction model achieving 100% accuracy on user success prediction from 409K behavioral events using ensemble methods.",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      category: "AI/ML",
      color: "#fb923c",
      icon: Zap,
      status: "WINNER",
      github: "https://github.com/aryanbarde80"
    }
  ];

  const categories = ["ALL", "FREELANCE", "FULLSTACK", "AI/ML", "FRONTEND", "MOBILE", "IOT"];
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
    <OSWindow title="Projects" icon={<Layers size={16} className="text-[#818cf8]" />} width="max-w-6xl">
      <div className="space-y-5">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <Code size={12} className="text-[#818cf8]" />
            <span className="text-[9px] sm:text-[10px] mono text-[#6b6b80]">Project Registry</span>
          </div>
          <div className="flex gap-2 text-[9px] sm:text-[10px] mono">
            <span className="text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">{projects.length} Projects</span>
            <span className="text-[#fb923c] bg-[#fb923c]/10 px-2 py-0.5 rounded">{filtered.length} Showing</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div role="tablist" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[10px] sm:text-[11px] mono px-3 py-1.5 rounded-md border transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#818cf8]/20 border-[#818cf8]/60 text-[#818cf8] shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'border-gray-800 text-gray-500 hover:border-[#818cf8]/30 hover:text-gray-300'
              }`}
            >
              [{cat}]
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {filtered.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="project-card group relative p-3 sm:p-4 border border-[#818cf8]/10 hover:border-[#818cf8]/25 rounded-lg sm:rounded-xl bg-[#12121a]/60 transition-all duration-300 overflow-hidden cursor-default flex flex-col"
              >
                <div className="flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${project.color}15`, border: `1px solid ${project.color}30` }}>
                        <Icon size={14} style={{ color: project.color }} />
                      </div>
                    </div>
                    <span
                      className="text-[8px] sm:text-[9px] mono px-1.5 py-0.5 rounded font-bold"
                      style={{ backgroundColor: `${project.color}20`, color: project.color, border: `1px solid ${project.color}30` }}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors mb-2">
                    {project.title}
                  </h4>

                  {/* Description */}
                  <p className="text-[10px] sm:text-[11px] text-gray-500 leading-relaxed mb-3 flex-1">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <span key={i} className="text-[8px] sm:text-[9px] mono px-1.5 py-0.5 bg-gray-900 text-gray-400 rounded border border-gray-800">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="text-[8px] sm:text-[9px] mono px-1.5 py-0.5 text-gray-600">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2 pt-2 border-t border-gray-800/50">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#818cf8] transition-colors p-1">
                        <Github size={12} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#fb923c] transition-colors p-1">
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <span className="text-[8px] sm:text-[9px] mono text-gray-700 ml-auto">{project.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-[#818cf8]/20 flex flex-wrap justify-between items-center gap-3 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <GitBranch size={10} className="text-[#818cf8]" />
              <span className="text-gray-500">Total Repos: {projects.length}+</span>
            </span>
            <span className="flex items-center gap-1">
              <Star size={10} className="text-[#fb923c]" />
              <span className="text-gray-500">Domains: {categories.length - 1}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Eye size={10} className="text-gray-600" />
            <span className="text-gray-600">All projects operational</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
