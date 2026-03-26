"use client";
import React from 'react';
import { 
  Brain, Cpu, Globe, Rocket, Database, Cloud, 
  Shield, Code, Server, GitBranch, Layout, Zap,
  Bot, Workflow, Network, Smartphone
} from 'lucide-react';

export default function KnowledgeGraph() {
  const categories = [
    {
      title: "FRONTEND",
      color: "#00f0ff",
      skills: [
        { name: "React.js", val: 95, icon: Globe },
        { name: "Next.js", val: 92, icon: Rocket },
        { name: "React Native", val: 88, icon: Smartphone },
        { name: "Three.js", val: 85, icon: Layout },
        { name: "Tailwind CSS", val: 94, icon: Code },
        { name: "Redux/Zustand", val: 90, icon: GitBranch }
      ]
    },
    {
      title: "BACKEND",
      color: "#ff003c",
      skills: [
        { name: "Node.js", val: 92, icon: Server },
        { name: "Express.js", val: 90, icon: Code },
        { name: "Flask", val: 88, icon: Zap },
        { name: "FastAPI", val: 86, icon: Zap },
        { name: "Frappe", val: 85, icon: Brain },
        { name: "Socket.io", val: 89, icon: Network }
      ]
    },
    {
      title: "DATABASES",
      color: "#ffaa44",
      skills: [
        { name: "PostgreSQL", val: 88, icon: Database },
        { name: "MySQL", val: 87, icon: Database },
        { name: "MongoDB", val: 86, icon: Database },
        { name: "Redis", val: 84, icon: Zap },
        { name: "Firebase", val: 85, icon: Cloud }
      ]
    },
    {
      title: "CLOUD & DEVOPS",
      color: "#00f0ff",
      skills: [
        { name: "AWS", val: 85, icon: Cloud },
        { name: "GCP", val: 84, icon: Cloud },
        { name: "Docker", val: 88, icon: Server },
        { name: "CI/CD", val: 86, icon: GitBranch },
        { name: "Linux", val: 90, icon: Terminal }
      ]
    },
    {
      title: "AI & AUTOMATION",
      color: "#ff003c",
      skills: [
        { name: "LangChain", val: 85, icon: Bot },
        { name: "CrewAI", val: 82, icon: Workflow },
        { name: "YOLOv8", val: 90, icon: Brain },
        { name: "OpenCV", val: 88, icon: Cpu },
        { name: "RAG Pipelines", val: 86, icon: Workflow }
      ]
    },
    {
      title: "IOT & EMBEDDED",
      color: "#ffaa44",
      skills: [
        { name: "ESP32", val: 92, icon: Cpu },
        { name: "MQTT", val: 90, icon: Network },
        { name: "C++", val: 89, icon: Code },
        { name: "Telemetry", val: 87, icon: Zap }
      ]
    }
  ];

  // Calculate overall proficiency
  const allSkills = categories.flatMap(cat => cat.skills);
  const avgProficiency = Math.round(allSkills.reduce((acc, s) => acc + s.val, 0) / allSkills.length);

  return (
    <div className="space-y-4 p-1">
      
      {/* Header */}
      <div className="flex justify-between items-center pb-2 border-b border-[#00f0ff]/20">
        <div className="flex items-center gap-2">
          <Brain size={12} className="text-[#00f0ff]" />
          <span className="text-[8px] sm:text-[9px] mono text-gray-500">TECH_STACK_PROFICIENCY</span>
        </div>
        <div className="text-[8px] sm:text-[9px] mono text-[#ffaa44] bg-[#ffaa44]/10 px-2 py-0.5 rounded">
          {allSkills.length} TECHNOLOGIES
        </div>
      </div>

      {/* Skills Grid - Categorized */}
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
        {categories.map((category, idx) => (
          <div key={idx} className="space-y-2">
            {/* Category Header */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
              <h4 className="text-[9px] sm:text-[10px] mono font-bold tracking-wider" style={{ color: category.color }}>
                {category.title}
              </h4>
              <div className="flex-1 h-px bg-gradient-to-r from-[#00f0ff]/20 to-transparent"></div>
              <span className="text-[7px] text-gray-600">{category.skills.length} items</span>
            </div>
            
            {/* Skills in this category */}
            <div className="grid grid-cols-2 gap-2">
              {category.skills.map((skill, i) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={i} 
                    className="group flex flex-col gap-1 p-2 border border-gray-800/60 hover:border-[#00f0ff]/40 rounded-lg bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#00f0ff]/5 transition-all duration-300 cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <IconComponent size={12} style={{ color: category.color }} className="group-hover:scale-110 transition-transform" />
                        <span className="text-[9px] sm:text-[10px] font-mono text-gray-400 group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[7px] sm:text-[8px] mono" style={{ color: category.color }}>
                        {skill.val}%
                      </span>
                    </div>
                    <div className="w-full h-1 bg-gray-900 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-500 group-hover:shadow-[0_0_5px]"
                        style={{ 
                          width: `${skill.val}%`, 
                          backgroundColor: category.color,
                          boxShadow: `0 0 8px ${category.color}80`
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer - Summary */}
      <div className="mt-3 pt-2 border-t border-[#00f0ff]/20 flex flex-wrap justify-between items-center gap-2 text-[7px] sm:text-[8px] mono">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Zap size={8} className="text-[#00f0ff]" />
            <span className="text-gray-500">AVG_PROFICIENCY: {avgProficiency}%</span>
          </span>
          <span className="flex items-center gap-1">
            <Brain size={8} className="text-[#ff003c]" />
            <span className="text-gray-500">PRIMARY_STACK: MERN + IoT</span>
          </span>
        </div>
        <div className="text-gray-600">
          {categories.length} DOMAINS
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 240, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 240, 255, 0.3);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}