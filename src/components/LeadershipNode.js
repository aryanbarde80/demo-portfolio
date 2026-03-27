import OSWindow from "./OSWindow";
import { Flag, Users, Globe, Calendar, Award, Paintbrush, Mic, UsersRound, Star, Sparkles } from "lucide-react";

export default function LeadershipNode() {
  const leadership = [
    {
      role: "Core Team Lead",
      org: "Hunar Canvas Art Club, GGITS",
      period: "September 2024 - September 2025",
      desc: "Led core team of creative members, coordinated multiple art exhibitions and workshops on campus, managed logistics and promotion. Successfully organized an art gallery exhibition with participation from 50+ artists.",
      icon: Paintbrush,
      achievements: ["50+ artists", "Art Gallery Exhibition", "Workshops organized"]
    },
    {
      role: "Graphic Designer & Visual Identity Creator",
      org: "Udyam (Entrepreneurship Cell), GGITS",
      period: "October 2023 - September 2024",
      desc: "Created promotional graphics, posters, banners, and digital content for entrepreneurship events and competitions. Developed visual identity elements, logos, and branding materials for E-Cell initiatives. Designed engaging social media content for platform promotion.",
      icon: UsersRound,
      achievements: ["Branding materials", "Social media content", "Event promotion"]
    },
    {
      role: "Launch Crew Member",
      org: "Give My Certificate",
      period: "December 2025 - Present",
      desc: "Selected as a Launch Crew community member after a profile-based review process. Contributing by sharing structured product feedback and user experience insights through platforms like G2. Actively participating in community initiatives and collaborative activities.",
      icon: Star,
      achievements: ["Product feedback", "Community engagement", "UX insights"]
    }
  ];

  const affiliations = [
    {
      name: "International Association of Engineers (IAENG)",
      id: "MARCH2026_ACTIVE",
      period: "March 2026 - Present",
      desc: "Member of the International Association of Engineers, engaging with international engineering communities and participating in technical discussions."
    }
  ];

  return (
    <OSWindow title="COMMAND_DECK/LEADERSHIP.LOG" icon={<Flag size={16} className="text-[#818cf8] animate-pulse" />}>
            <div className="space-y-4">
        
              {/* Header */}
        <div className="flex justify-between items-center pb-2 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <Users size={12} className="text-[#fb923c]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">LEADERSHIP_TIMELINE</span>
          </div>
          <div className="text-[9px] sm:text-[10px] mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">
            {leadership.length} POSITIONS
          </div>
        </div>

        {/* Leadership Roles */}
                <div className="space-y-3">
                  {leadership.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="group relative">
                {/* Timeline Line */}
                <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gradient-to-b from-[#f472b6] via-[#f472b6]/40 to-transparent group-hover:from-[#818cf8] group-hover:via-[#818cf8]/60 transition-all"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#030712] border-2 border-[#f472b6] group-hover:border-[#818cf8] group-hover:scale-110 transition-all duration-300 z-10"></div>
                
                {/* Content */}
                <div className="pl-7 pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <IconComponent size={14} className="text-[#fb923c] group-hover:text-[#818cf8] transition-colors" />
                      <h4 className="text-sm sm:text-base font-bold text-gray-100 group-hover:text-white transition-colors">
                        {item.role}
                      </h4>
                    </div>
                    <span className="text-[8px] sm:text-[9px] mono text-gray-500 flex items-center gap-1">
                      <Calendar size={10} />
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-[#f472b6] mono text-[10px] sm:text-[11px] mb-2 font-semibold flex items-center gap-1">
                    <span>{item.org}</span>
                  </p>
                  
                  <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed mb-2">
                    {item.desc}
                  </p>
                  
                  {/* Achievement Tags */}
                  {item.achievements && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {item.achievements.map((ach, i) => (
                        <span key={i} className="text-[7px] sm:text-[8px] mono px-1.5 py-0.5 bg-gray-900/80 border border-gray-800 rounded text-gray-500 group-hover:border-[#818cf8]/30 transition-all">
                          🏆 {ach}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Affiliations Section */}
        <div className="mt-4 pt-3 border-t border-[#818cf8]/20">
          <h4 className="flex items-center gap-2 text-[#818cf8] mono text-[10px] sm:text-[11px] mb-4 font-bold uppercase tracking-wider">
            <Globe size={14} /> PROFESSIONAL_AFFILIATIONS
          </h4>
          
          <div className="space-y-3">
            {affiliations.map((aff, idx) => (
              <div 
                key={idx} 
                className="group relative p-3 bg-gradient-to-r from-[#818cf8]/5 to-transparent border border-[#818cf8]/20 rounded-lg hover:border-[#818cf8]/60 hover:bg-[#818cf8]/10 transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Award size={12} className="text-[#fb923c]" />
                      <p className="text-gray-300 text-[11px] sm:text-xs font-mono font-semibold">
                        {aff.name}
                      </p>
                    </div>
                    <p className="text-gray-500 text-[9px] sm:text-[10px] leading-relaxed">
                      {aff.desc}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] sm:text-[9px] mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">
                      {aff.id}
                    </span>
                    <p className="text-[7px] sm:text-[8px] text-gray-600 mt-1 flex items-center gap-1">
                      <Calendar size={8} /> {aff.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer - Summary Stats */}
        <div className="mt-4 pt-3 border-t border-[#818cf8]/20 flex flex-wrap justify-between items-center gap-2 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Users size={10} className="text-[#818cf8]" />
              <span className="text-gray-500">TOTAL_ROLES: {leadership.length}</span>
            </span>
            <span className="flex items-center gap-1">
              <Sparkles size={10} className="text-[#fb923c]" />
              <span className="text-gray-500">ACTIVE_SINCE: 2023</span>
            </span>
          </div>
          <div className="text-gray-600 flex items-center gap-1">
            <Mic size={8} />
            <span>MENTORSHIP_ACTIVE</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
