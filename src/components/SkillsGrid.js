import OSWindow from "./OSWindow";
import { Cpu, Code, Database, Cloud, Braces, Server, Wifi, Layout, GitBranch, Bot } from "lucide-react";

export default function SkillsGrid() {
  const skillsConfig = [
    {
      category: "Programming Languages",
      icon: Code,
      color: "#818cf8",
      items: ["Python", "JavaScript", "C/C++", "Java", "SQL", "Bash/Shell", "HTML5/CSS3"]
    },
    {
      category: "Frontend Technologies",
      icon: Layout,
      color: "#fb923c",
      items: ["React.js", "Next.js", "React Native", "Three.js", "Tailwind CSS", "Redux/Zustand"]
    },
    {
      category: "Backend Technologies",
      icon: Server,
      color: "#f472b6",
      items: ["Node.js", "Express.js", "Flask", "FastAPI", "Frappe Framework", "Socket.io"]
    },
    {
      category: "Databases",
      icon: Database,
      color: "#818cf8",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase Realtime DB"]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "#fb923c",
      items: ["AWS", "Google Cloud Platform", "Docker", "Git", "CI/CD", "Linux Administration"]
    },
    {
      category: "IoT & Embedded",
      icon: Wifi,
      color: "#f472b6",
      items: ["ESP32 Microcontroller", "MQTT Protocol", "C++ for IoT", "Sensor Integration"]
    },
    {
      category: "AI & Automation",
      icon: Bot,
      color: "#818cf8",
      items: ["LangChain", "CrewAI", "YOLOv8", "OpenCV", "RAG Pipelines", "Agentic Workflows"]
    },
    {
      category: "Tools & Others",
      icon: GitBranch,
      color: "#fb923c",
      items: ["VS Code", "Postman", "Figma", "Cisco Packet Tracer", "JWT", "REST APIs"]
    }
  ];

  return (
    <OSWindow title="Skills & Technologies" icon={<Cpu size={16} className="text-[#818cf8]" />}>
      <div className="space-y-5">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-2 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <Cpu size={12} className="text-[#818cf8]" />
            <span className="text-[9px] sm:text-[10px] mono text-[#6b6b80]">Technical Competency</span>
          </div>
          <div className="text-[9px] sm:text-[10px] mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">
            {skillsConfig.reduce((acc, cat) => acc + cat.items.length, 0)} Skills
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillsConfig.map((group, idx) => {
            const IconComponent = group.icon;
            return (
              <div 
                key={idx} 
                className="group relative border border-[#818cf8]/10 bg-[#12121a]/60 rounded-xl overflow-hidden hover:border-[#818cf8]/25 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="relative p-4 pb-2 border-b border-[#818cf8]/8 bg-[#0a0a0f]/40">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#818cf8]/10 group-hover:scale-110 transition-transform">
                      <IconComponent size={14} style={{ color: group.color }} />
                    </div>
                    <div>
                      <h3 className="text-[11px] sm:text-xs font-semibold tracking-wide" style={{ color: group.color }}>
                        {group.category}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="p-4 pt-3">
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <div 
                        key={i} 
                        className="px-3 py-1.5 bg-[#0a0a0f]/60 border border-[#818cf8]/8 hover:border-[#818cf8]/25 rounded-lg transition-all duration-300 cursor-default"
                      >
                        <span className="text-[10px] sm:text-[11px] text-[#a1a1b5] hover:text-white transition-colors font-mono">
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
        <div className="flex flex-wrap justify-between items-center gap-3 pt-2 text-[8px] sm:text-[9px] mono text-gray-600 border-t border-[#818cf8]/10">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Braces size={10} className="text-[#818cf8]" />
              <span>Primary: MERN + IoT + AI</span>
            </span>
            <span className="flex items-center gap-1">
              <Database size={10} className="text-[#fb923c]" />
              <span>Cloud Ready</span>
            </span>
          </div>
          <div>
            <span>Updated 2026</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
