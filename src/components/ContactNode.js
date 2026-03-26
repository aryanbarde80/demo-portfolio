import OSWindow from "./OSWindow";
import { Satellite, ExternalLink, Mail, Github, Linkedin, Code2, FileText, PenTool } from "lucide-react";

export default function ContactNode() {
  const links = [
    { 
      label: "EMAIL", 
      value: "aryanbarde80@gmail.com", 
      href: "mailto:aryanbarde80@gmail.com",
      icon: Mail,
      color: "#ff003c"
    },
    { 
      label: "LINKEDIN", 
      value: "linkedin.com/in/aryanbarde80", 
      href: "https://linkedin.com/in/aryanbarde80",
      icon: Linkedin,
      color: "#0077b5"
    },
    { 
      label: "GITHUB", 
      value: "github.com/aryanbarde80", 
      href: "https://github.com/aryanbarde80",
      icon: Github,
      color: "#00f0ff"
    },
    { 
      label: "PORTFOLIO", 
      value: "aryanbarde80.github.io/My-Portfolio", 
      href: "https://aryanbarde80.github.io/My-Portfolio",
      icon: Code2,
      color: "#ffaa44"
    },
    { 
      label: "LEETCODE", 
      value: "leetcode.com/aryanbarde80", 
      href: "https://leetcode.com/aryanbarde80",
      icon: PenTool,
      color: "#ffaa44"
    },
    { 
      label: "MEDIUM BLOG", 
      value: "medium.com/@aryanbarde80", 
      href: "https://medium.com/@aryanbarde80",
      icon: FileText,
      color: "#00f0ff",
      description: "Technical Writing & Insights"
    }
  ];

  const totalConnections = links.length;

  return (
    <OSWindow title="NETWORK/CONTACT.SYS" icon={<Satellite size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-4xl">
      <div className="space-y-4">
        
        {/* Header with Stats */}
        <div className="flex justify-between items-center pb-3 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <Satellite size={12} className="text-[#00f0ff]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">ACTIVE_NETWORK_NODES</span>
          </div>
          <div className="text-[9px] sm:text-[10px] mono text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">
            {totalConnections} CONNECTIONS
          </div>
        </div>

        {/* Links Grid - Responsive 2x3 Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {links.map((link, idx) => {
            const IconComponent = link.icon;
            return (
              <a
                key={idx}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col p-3 sm:p-4 border border-[#00f0ff]/20 bg-gradient-to-br from-[#030712] to-[#0a0f1a] hover:from-[#00f0ff]/5 hover:to-[#ff003c]/5 hover:border-[#00f0ff]/60 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300 rounded-lg overflow-hidden"
              >
                {/* Animated Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00f0ff]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                {/* Left Accent Border */}
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#00f0ff] via-[#ff003c] to-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Header Section */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <IconComponent 
                      size={14} 
                      className="transition-all duration-300 group-hover:scale-110" 
                      style={{ color: link.color }}
                    />
                    <span 
                      className="text-[10px] sm:text-[11px] mono font-bold tracking-wider"
                      style={{ color: link.color }}
                    >
                      {link.label}
                    </span>
                  </div>
                  <ExternalLink 
                    size={10} 
                    className="text-gray-600 group-hover:text-[#00f0ff] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                  />
                </div>
                
                {/* Value Section */}
                <div className="pl-5 sm:pl-6 border-l border-gray-800 group-hover:border-[#00f0ff]/50 transition-all">
                  <p className="text-[10px] sm:text-[11px] font-mono text-gray-300 group-hover:text-white transition-colors break-all">
                    {link.value}
                  </p>
                  {link.description && (
                    <p className="text-[8px] sm:text-[9px] text-gray-500 mt-1 group-hover:text-gray-400 transition-colors">
                      {link.description}
                    </p>
                  )}
                </div>
                
                {/* Hover Connect Badge */}
                <div className="absolute bottom-2 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <span className="text-[7px] sm:text-[8px] mono text-[#00f0ff] flex items-center gap-1">
                    <span>CONNECT</span>
                    <span className="text-[10px]">→</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Footer with Contact Info */}
        <div className="mt-4 pt-3 border-t border-[#00f0ff]/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="flex items-center gap-1">
              <Satellite size={8} className="text-[#00f0ff]" />
              <span className="text-gray-500">STATUS: ACTIVE</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-gray-500">READY_FOR_CONNECTION</span>
            </span>
          </div>
          <div className="text-gray-600">
            {new Date().getFullYear()} • ARYAN BARDE
          </div>
        </div>
      </div>
    </OSWindow>
  );
}