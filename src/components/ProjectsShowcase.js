"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import OSWindow from "./OSWindow";
import { FolderGit2, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsShowcase() {
  const gridRef = useRef(null);

  const projects = [
    { id: "FWZ-01", name: "IATA Travel Agency Portal", tech: "Next.js, Next-SEO, Tailwind", desc: "Complete digital transformation for IATA-certified agency. Mobile-first, 95+ PageSpeed score.", github: null },
    { id: "CMY-02", name: "Creative Tech Agency UI", tech: "React, Framer Motion, GSAP", desc: "Premium agency platform with 8-step methodology matrix. Secured enterprise startup founders.", github: null },
    { id: "AAI-03", name: "AI Defect Inspector", tech: "YOLOv8, OpenCV, Python, Streamlit", desc: "Enterprise manufacturing QC system achieving 95% defect detection accuracy. Deployed on Render.", github: "https://github.com/aryanbarde80/alfastack-ai-inspector" },
    { id: "ZRV-04", name: "Zerve ML Challenge", tech: "Python, scikit-learn, Pandas", desc: "100% accuracy user retention model on 409K events. Session depth (17.1%) = top predictor.", github: "https://github.com/aryanbarde80/Zerve-Data-Challenge---User-Success-Prediction" },
    { id: "SWL-05", name: "SwiftLink C++ URL Shortener", tech: "C++, Crow Framework, HTML", desc: "High-performance URL shortener with real-time redirect engine. Deployed on Render via Replit.", github: "https://github.com/aryanbarde80/SwiftLink-Cpp" },
    { id: "AGT-06", name: "Agent0 AI Framework", tech: "Python, GPT-4, Claude API", desc: "Minimal modular AI agent with pluggable tools and LLM support (GPT/Claude). MIT licensed.", github: "https://github.com/aryanbarde80/agent0" },
    { id: "CRM-07", name: "Smart Vehicle CRM", tech: "JavaScript, Node.js, MongoDB", desc: "Automotive CRM with maintenance scheduling, service history tracking, and multi-role dashboards.", github: "https://github.com/aryanbarde80/Smart-Vehicle-Maintenance-CRM" },
    { id: "PGD-08", name: "Cloud Database Console", tech: "PERN, NeonDB, JWT", desc: "Cloud-native PostgreSQL management with strict RBAC, query optimization, and active API protection.", github: null },
    { id: "RMI-09", name: "Real-time P2P Matcher", tech: "MERN, Socket.io, Redis", desc: "High-concurrency matching engine. Reduced latency 40% via Redis caching + optimized queries.", github: null },
    { id: "QCN-10", name: "QuickConnect Messenger", tech: "MERN, Socket.io, JWT", desc: "Scalable real-time chat with WebSocket, typing indicators, media sharing, E2E encryption.", github: null },
    { id: "TML-11", name: "Tiny ML Hackathon", tech: "TypeScript, Next.js, TinyML", desc: "Edge AI hackathon project deploying lightweight ML models on microcontrollers. Live on Vercel.", github: "https://github.com/aryanbarde80/Tiny-ML-Hackathon" },
    { id: "VSF-12", name: "VectorShift Pipeline UI", tech: "TypeScript, React, Node.js", desc: "YC S23 startup assignment: visual pipeline builder with DAG validation and real-time node execution.", github: "https://github.com/aryanbarde80/vectorshift-assignment-YC-s23" },
    { id: "CNS-13", name: "Smart Network Simulation", tech: "Python, Cisco Packet Tracer", desc: "Campus infrastructure with VLAN segmentation, DHCP/DNS configs, Python-automated IoT lab.", github: null },
  ];

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.proj-card');
    gsap.fromTo(cards,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 85%', once: true }
      }
    );
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <OSWindow title="ARCHIVES/PROJECTS.BIN" icon={<FolderGit2 size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-5xl">
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {projects.map((proj) => (
          <div key={proj.id} className="proj-card group relative flex flex-col justify-between border-l-2 border-[#ff003c]/40 hover:border-[#ff003c] p-3 sm:p-4 bg-[#030712]/60 hover:bg-[#ff003c]/5 transition-all overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_25px_rgba(255,0,60,0.15)] rounded-r-lg">
            {/* Scanner Line */}
            <div className="absolute inset-0 overflow-hidden rounded-r-lg">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff003c]/40 to-transparent translate-y-[-100%] group-hover:translate-y-[500%] transition-transform duration-1000 ease-linear" />
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <span className="text-[9px] mono text-[#ff003c]/60 font-bold">[{proj.id}]</span>
                {proj.github && (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={11} className="text-[#00f0ff]" />
                  </a>
                )}
              </div>
              <h3 className="text-sm font-bold text-gray-200 group-hover:text-white mb-1 leading-snug">{proj.name}</h3>
              <p className="text-[10px] text-gray-500 leading-relaxed mb-2">{proj.desc}</p>
            </div>
            <div className="flex flex-wrap gap-1 mt-auto">
              {proj.tech.split(', ').map((t, i) => (
                <span key={i} className="text-[8px] mono px-1.5 py-0.5 bg-[#ff003c]/10 border border-[#ff003c]/20 text-[#ff003c]/80 rounded-sm">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </OSWindow>
  );
}


