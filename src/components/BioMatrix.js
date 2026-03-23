import OSWindow from "./OSWindow";
import { User, Languages, Zap } from "lucide-react";

export default function BioMatrix() {
  const attributes = ["Problem-Solving", "Full-Stack Native", "Team Leadership", "IoT Architect", "Cloud Security", "Adaptability", "Agile Methodology", "Technical Writing", "Public Speaking"];
  const languages = [
    { name: "English", level: "Fluent", val: 95 },
    { name: "Hindi", level: "Native", val: 100 },
    { name: "Marathi", level: "Conversational", val: 40 }
  ];

  return (
    <OSWindow title="SYS_BIO/PROFILE.DAT" icon={<User size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-6">
        {/* Professional Summary */}
        <div className="relative group">
          <div className="absolute -left-2 top-0 bottom-0 w-0.5 bg-[#00f0ff]/30 group-hover:bg-[#00f0ff] transition-colors"></div>
          <p className="text-gray-300 text-sm leading-relaxed mono leading-6 pl-4">
            <span className="text-[#00f0ff]/60 mr-2">&gt;</span>
            Motivated CS student specializing in full-stack, IoT, and cloud systems. Proven track record leading dev teams of 5+ members and delivering scalable ERP/CRM solutions. Expert in bridging hardware telemetry with modern web architectures. Published tech writer and open-source contributor.
          </p>
        </div>

        {/* Attribute Chips */}
        <div className="flex flex-wrap gap-2">
          {attributes.map((attr, idx) => (
            <span key={idx} className="text-[10px] mono border border-[#ff003c]/30 text-[#ff003c] px-2 py-0.5 rounded-full hover:bg-[#ff003c]/10 transition-colors cursor-default">
              #{attr.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Languages Matrix */}
        <div className="pt-4 border-t border-[#00f0ff]/10">
          <h4 className="flex items-center gap-2 text-[#00f0ff] mono text-xs mb-3 font-bold">
            <Languages size={14} /> COMM_PROTOCOLS.PROTO
          </h4>
          <div className="space-y-3">
            {languages.map((lang, idx) => (
              <div key={idx} className="group">
                <div className="flex justify-between text-[10px] mono text-gray-400 mb-1">
                  <span>{lang.name}</span>
                  <span className="text-[#00f0ff]/60 group-hover:text-[#00f0ff]">{lang.level}</span>
                </div>
                <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#00f0ff] to-[#ff003c] opacity-60 group-hover:opacity-100 transition-all duration-700" 
                    style={{ width: `${lang.val}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning */}
        <div className="pt-4 border-t border-[#ff003c]/10">
          <h4 className="flex items-center gap-2 text-[#ff003c] mono text-xs mb-3 font-bold">
            <Zap size={14} /> ACTIVE_LEARNING.QUEUE
          </h4>
          <div className="flex flex-wrap gap-2">
            {["Advanced AI/ML", "LLM Fine-Tuning", "Kubernetes", "System Design"].map((item, i) => (
              <span key={i} className="text-[10px] mono px-2 py-1 bg-[#ff003c]/10 border border-[#ff003c]/30 text-[#ff003c] rounded-sm animate-pulse">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
