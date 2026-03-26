import OSWindow from "./OSWindow";
import { Cpu, Code, Database, Cloud, Braces, Server, Wifi, Layout, GitBranch, Bot } from "lucide-react";

export default function SkillsGrid() {
  const skillsConfig = [
    {
      category: "PROGRAMMING_LANGUAGES",
      icon: Code,
      color: "#00f0ff",
      items: ["Python", "JavaScript", "C/C++", "Java", "SQL", "Bash/Shell", "HTML5/CSS3"]
    },
    {
      category: "FRONTEND_TECHNOLOGIES",
      icon: Layout,
      color: "#ffaa44",
      items: ["React.js", "Next.js", "React Native", "Three.js", "Tailwind CSS", "Redux/Zustand"]
    },
    {
      category: "BACKEND_TECHNOLOGIES",
      icon: Server,
      color: "#ff003c",
      items: ["Node.js", "Express.js", "Flask", "FastAPI", "Frappe Framework", "Socket.io"]
    },
    {
      category: "DATABASES",
      icon: Database,
      color: "#00f0ff",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase Realtime DB"]
    },
    {
      category: "CLOUD_&_DEVOPS",
      icon: Cloud,
      color: "#ffaa44",
      items: ["AWS", "Google Cloud Platform", "Docker", "Git", "CI/CD", "Linux Administration"]
    },
    {
      category: "IOT_&_EMBEDDED",
      icon: Wifi,
      color: "#ff003c",
      items: ["ESP32 Microcontroller", "MQTT Protocol", "C++ for IoT", "Sensor Integration"]
    },
    {
      category: "AI_&_AUTOMATION",
      icon: Bot,
      color: "#00f0ff",
      items: ["LangChain", "CrewAI", "YOLOv8", "OpenCV", "RAG Pipelines", "Agentic Workflows"]
    },
    {
      category: "TOOLS_&_OTHERS",
      icon: GitBranch,
      color: "#ffaa44",
      items: ["VS Code", "Postman", "Figma", "Cisco Packet Tracer", "JWT", "REST APIs"]
    }
  ];

  return (
    <OSWindow title="MODULES/SKILLS.DAT" icon={<Cpu size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-5">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-2 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <Cpu size={12} className="text-[#00f0ff]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">TECHNICAL_COMPETENCY_MATRIX</span>
          </div>
          <div className="text-[9px] sm:text-[10px] mono text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">
            {skillsConfig.reduce((acc, cat) => acc + cat.items.length, 0)} SKILLS
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillsConfig.map((group, idx) => {
            const IconComponent = group.icon;
            return (
              <div 
                key={idx} 
                className="group relative border border-[#00f0ff]/20 bg-gradient-to-br from-[#030712] to-[#0a0f1a] rounded-xl overflow-hidden hover:border-[#00f0ff]/60 transition-all duration-500 hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-transparent via-[#00f0ff]/5 to-transparent" />
                
                {/* Category Header */}
                <div className="relative p-4 pb-2 border-b border-[#00f0ff]/10 bg-[#030712]/50">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#00f0ff]/10 group-hover:scale-110 transition-transform">
                      <IconComponent size={14} style={{ color: group.color }} />
                    </div>
                    <div>
                      <h3 className="text-[11px] sm:text-xs font-black tracking-wider" style={{ color: group.color }}>
                        {group.category}
                      </h3>
                      <div className="h-0.5 w-8 bg-gradient-to-r from-[#00f0ff] to-transparent mt-1 group-hover:w-12 transition-all duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="p-4 pt-3">
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <div 
                        key={i} 
                        className="group/skill relative px-3 py-1.5 bg-[#030712]/80 border border-gray-800 hover:border-[#00f0ff] rounded-md transition-all duration-300 cursor-default overflow-hidden"
                      >
                        {/* Scanner Animation */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#00f0ff]/10 to-transparent -translate-x-full group-hover/skill:translate-x-full transition-transform duration-700 ease-in-out" />
                        
                        {/* Bottom Glow Line */}
                        <div className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#00f0ff] to-transparent w-0 group-hover/skill:w-full transition-all duration-500" />
                        
                        <span className="text-[10px] sm:text-[11px] text-gray-300 group-hover/skill:text-white relative z-10 transition-colors font-mono">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Skill Count Badge */}
                  <div className="mt-3 pt-2 text-right">
                    <span className="text-[7px] sm:text-[8px] mono text-gray-600 bg-gray-900/50 px-2 py-0.5 rounded">
                      {group.items.length} modules
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex flex-wrap justify-between items-center gap-3 pt-2 text-[8px] sm:text-[9px] mono text-gray-600 border-t border-[#00f0ff]/10">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Braces size={10} className="text-[#00f0ff]" />
              <span>PRIMARY_STACK: MERN + IoT + AI</span>
            </span>
            <span className="flex items-center gap-1">
              <Database size={10} className="text-[#ffaa44]" />
              <span>CLOUD_READY</span>
            </span>
          </div>
          <div>
            <span>LAST_UPDATED: 2026</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}