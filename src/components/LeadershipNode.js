import OSWindow from "./OSWindow";
import { Flag, Users, Globe } from "lucide-react";

export default function LeadershipNode() {
  const leadership = [
    {
      role: "Core Team Lead",
      org: "Hunar Canvas Art Club, GGITS",
      period: "Sep 2024 - Sep 2025",
      desc: "Coordinated 50+ artists for exhibitions and workshops, leading strategic club growth."
    },
    {
      role: "Graphic Designer",
      org: "Udyam (E-Cell), GGITS",
      period: "Oct 2023 - Sep 2024",
      desc: "Architected visual identity and promotional mechanics for campus entrepreneurship events."
    },
    {
      role: "Launch Crew Member",
      org: "Give My Certificate",
      period: "Dec 2025 - Present",
      desc: "Community driver providing product-market feedback and user experience research."
    }
  ];

  return (
    <OSWindow title="COMMAND_DECK/LEADERSHIP.LOG" icon={<Flag size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-5">
        {leadership.map((item, idx) => (
          <div key={idx} className="relative pl-6 border-l border-[#ff003c]/20 hover:border-[#ff003c] transition-colors group">
            <div className="absolute -left-1.5 top-0 w-3 h-3 bg-[#030712] border border-[#ff003c] rotate-45 group-hover:bg-[#ff003c] transition-colors"></div>
            <h4 className="text-sm font-bold text-gray-100 mb-0.5 group-hover:text-white transition-colors">{item.role}</h4>
            <p className="text-[#ff003c] mono text-[11px] mb-1 font-semibold">{item.org}</p>
            <p className="text-gray-400 text-xs leading-relaxed italic">{item.desc}</p>
            <span className="text-[10px] mono text-gray-500 mt-2 block">{item.period}</span>
          </div>
        ))}

        <div className="mt-6 pt-4 border-t border-[#00f0ff]/10">
          <h4 className="flex items-center gap-2 text-[#00f0ff] mono text-xs mb-3 font-bold">
            <Globe size={14} /> INT_AFFILIATIONS.DAT
          </h4>
          <div className="bg-[#00f0ff]/5 border border-[#00f0ff]/20 p-3 rounded group hover:bg-[#00f0ff]/10 transition-colors">
            <p className="text-gray-300 text-[11px] mono">
              <span className="text-[#00f0ff] mr-2">[MEMBER]</span> 
              International Association of Engineers (IAENG)
            </p>
            <p className="text-gray-500 text-[9px] mono mt-1">ID: #MARCH2026_ACTIVE</p>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
