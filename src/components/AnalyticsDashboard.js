import OSWindow from "./OSWindow";
import { Activity, BarChart3, Binary, Radar, Bot, Zap, GitBranch, Workflow, Cpu, Cloud, Database, Globe, Shield, Server, Layout, Code, Brain, Sparkles } from "lucide-react";

export default function AnalyticsDashboard() {
  const domainStats = [
    { label: "FRONTEND", icon: Layout, tags: ["React", "Next.js", "Three.js", "Tailwind"] },
    { label: "BACKEND", icon: Server, tags: ["Node.js", "Express", "Flask", "FastAPI"] },
    { label: "IOT/EMBEDDED", icon: Cpu, tags: ["ESP32", "MQTT", "C++", "Sensors"] },
    { label: "CLOUD/DEVOPS", icon: Cloud, tags: ["AWS", "Docker", "CI/CD", "GCP"] },
    { label: "AI/ML/CV", icon: Brain, tags: ["YOLOv8", "OpenCV", "RAG", "LangChain"] },
    { label: "AUTOMATION/AI_AGENTS", icon: Bot, tags: ["CrewAI", "AutoGen", "LlamaIndex"] },
    { label: "DATABASES", icon: Database, tags: ["MySQL", "MongoDB", "Redis", "PostgreSQL"] },
    { label: "CYBERSECURITY", icon: Shield, tags: ["JWT", "OAuth", "Linux Admin"] }
  ];

  const automationSkills = [
    { name: "LangChain", icon: Bot, desc: "LLM Orchestration" },
    { name: "CrewAI", icon: GitBranch, desc: "Multi-Agent Systems" },
    { name: "AutoGen", icon: Zap, desc: "Conversational Agents" },
    { name: "RAG Pipelines", icon: Workflow, desc: "Vector DB + LLM" },
    { name: "Agentic Workflows", icon: Cpu, desc: "Autonomous Agents" },
    { name: "LlamaIndex", icon: Brain, desc: "Data Frameworks" },
    { name: "LangSmith", icon: Activity, desc: "LLM Observability" },
    { name: "Flowise", icon: GitBranch, desc: "Low-Code Agents" }
  ];

  const cloudSkills = [
    { name: "AWS", icon: Cloud },
    { name: "GCP", icon: Cloud },
    { name: "Docker", icon: Server },
    { name: "Kubernetes", icon: Server },
    { name: "CI/CD", icon: GitBranch },
    { name: "Terraform", icon: Code }
  ];

  return (
    <OSWindow title="Analytics & Skills" icon={<Activity size={16} className="text-[#818cf8]" />} width="max-w-6xl">
      <div className="space-y-6">
        
        {/* Row 1: Radar + Domain Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Radar Map (SVG) */}
          <div className="relative group flex items-center justify-center p-3 sm:p-4 border border-[#818cf8]/10 bg-[#030712]/50 rounded overflow-hidden min-h-[220px] sm:min-h-[280px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_70%)]"></div>
            
            <svg viewBox="0 0 100 100" className="w-full max-w-[220px] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">
              {/* Background Rings */}
              {[20, 40, 60, 80].map((r) => (
                <circle key={r} cx="50" cy="50" r={r/2} fill="none" stroke="rgba(0,240,255,0.1)" strokeWidth="0.5" />
              ))}
              
              {/* Spider Lines - 8 directions */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                const x2 = (50 + 40 * Math.cos(angle * Math.PI / 180)).toFixed(4);
                const y2 = (50 + 40 * Math.sin(angle * Math.PI / 180)).toFixed(4);
                return (
                  <line 
                    key={angle} 
                    x1="50" y1="50" 
                    x2={x2} y2={y2} 
                    stroke="rgba(0,240,255,0.15)" strokeWidth="0.5" 
                  />
                );
              })}

              {/* Data Polygon */}
              <polygon 
                points="
                  50,15 
                  70,25 
                  85,45 
                  78,70 
                  50,85 
                  22,70 
                  15,45 
                  30,25
                "
                fill="rgba(0,240,255,0.2)"
                stroke="#818cf8"
                strokeWidth="1.2"
                className="animate-pulse"
              />
              
              {/* Center Glow */}
              <circle cx="50" cy="50" r="3" fill="#818cf8" className="animate-ping opacity-50" />
            </svg>

            <div className="absolute bottom-2 left-2 flex items-center gap-2">
              <Radar size={12} className="text-[#818cf8]" />
              <span className="text-[9px] sm:text-[10px] mono text-[#818cf8]/60 uppercase tracking-widest">8D Competency Mapping</span>
            </div>
          </div>

          {/* Domain Stats Bars */}
          <div className="space-y-3">
            <h4 className="text-[#f472b6] mono text-[11px] font-bold flex items-center gap-2 mb-3">
              <BarChart3 size={14} /> Domain Mastery
            </h4>
            
            {domainStats.map((stat, i) => {
              const IconComp = stat.icon;
              return (
                <div key={i} className="group">
                  <div className="flex items-center gap-1.5 text-[10px] mono text-gray-400 mb-1.5">
                    <IconComp size={10} className="text-[#818cf8]/60" />
                    <span className="truncate font-bold">{stat.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stat.tags.map((tag, j) => (
                      <span key={j} className="text-[9px] mono px-2 py-0.5 bg-[#030712] border border-gray-800 hover:border-[#818cf8]/40 text-gray-400 hover:text-[#818cf8] rounded transition-all duration-200 cursor-default">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: AI AGENTS & AUTOMATION SECTION */}
        <div className="border-t border-[#818cf8]/20 pt-4">
          <h4 className="text-[#818cf8] mono text-[11px] sm:text-[12px] font-bold flex items-center gap-2 mb-4">
            <Bot size={14} /> 
            AI Agents & Automation
            <span className="text-[8px] bg-[#f472b6]/20 text-[#f472b6] px-1.5 py-0.5 rounded">Agentic</span>
          </h4>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
            {automationSkills.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative p-2.5 border border-[#818cf8]/10 rounded bg-[#030712]/30 hover:border-[#818cf8]/40 hover:bg-[#818cf8]/5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <IconComp size={14} className="text-[#818cf8] group-hover:scale-110 transition-transform" />
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-mono text-gray-200 font-bold truncate">{skill.name}</p>
                      <p className="text-[9px] text-gray-500 truncate">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 3: CLOUD & DEVOPS SKILLS */}
        <div className="border-t border-[#818cf8]/20 pt-4">
          <h4 className="text-[#fb923c] mono text-[11px] sm:text-[12px] font-bold flex items-center gap-2 mb-4">
            <Cloud size={14} /> 
            Cloud & DevOps
            <span className="text-[8px] bg-[#fb923c]/20 text-[#fb923c] px-1.5 py-0.5 rounded">IaC Ready</span>
          </h4>
          
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {cloudSkills.map((skill, idx) => {
              const IconComp = skill.icon;
              return (
                <div 
                  key={idx} 
                  className="group p-2 border border-[#fb923c]/10 rounded bg-[#030712]/30 hover:border-[#fb923c]/40 transition-all duration-300 text-center"
                >
                  <IconComp size={18} className="text-[#fb923c] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <p className="text-[11px] font-mono text-gray-300">{skill.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 4: System IQ + Neural Traffic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* System IQ Card */}
          <div className="p-3 border border-[#818cf8]/10 bg-[#818cf8]/5 rounded flex items-center gap-3">
            <Binary size={20} className="text-[#818cf8] animate-bounce" />
            <div className="flex-1">
              <p className="text-[10px] mono text-gray-300">System IQ: <span className="text-[#818cf8]">Optimized</span></p>
              <div className="h-1.5 w-full bg-gray-800 rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-[#818cf8] animate-[loading_3s_linear_infinite]" style={{ width: '87%' }}></div>
              </div>
              <p className="text-[8px] text-gray-500 mt-1">Performance Score: 94.2%</p>
            </div>
          </div>

          {/* Neural Traffic Graph */}
          <div className="space-y-1">
            <div className="flex justify-between items-center text-[9px] mono text-[#818cf8]/60 uppercase">
              <span>Neural Network Traffic</span>
              <span className="animate-pulse flex items-center gap-1"><Sparkles size={8} /> Active</span>
            </div>
            <div className="h-12 relative bg-black/30 border border-gray-800/50 rounded overflow-hidden">
              <svg viewBox="0 0 100 30" className="w-full h-full">
                <path d="M0 15 Q 20 5, 40 15 T 80 15 T 100 20" fill="none" stroke="#818cf8" strokeWidth="1" className="animate-[pulsion_3s_ease-in-out_infinite]" />
                <path d="M0 20 Q 25 12, 50 20 T 100 22" fill="none" stroke="#f472b6" strokeWidth="0.6" className="opacity-50 animate-[pulsion_4s_ease-in-out_infinite]" />
                <circle cx="100" cy="20" r="1.5" fill="#f472b6" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="flex flex-wrap justify-between gap-3 pt-3 border-t border-[#818cf8]/10 text-[9px] sm:text-[10px] mono text-gray-500">
          <div className="flex items-center gap-3">
            <span>Total Skills: {domainStats.length + automationSkills.length + cloudSkills.length}</span>
            <span>Agentic Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>System Online</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
