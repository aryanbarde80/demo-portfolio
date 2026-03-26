import OSWindow from "./OSWindow";
import { GraduationCap, Calendar, Award, MapPin, BookOpen, TrendingUp } from "lucide-react";

export default function EducationNode() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      inst: "Gyan Ganga Institute of Technology and Sciences",
      score: "CGPA: 8.14/10.0",
      year: "Nov 2022 - Present",
      status: "ACTIVE",
      location: "Jabalpur, Madhya Pradesh, India",
      highlights: ["Full-Stack Development", "IoT Systems", "Cloud Computing", "AI/ML"],
      icon: TrendingUp
    },
    {
      degree: "Higher Secondary Education (PCM)",
      inst: "Board of Secondary Education, Madhya Pradesh",
      score: "Percentage: 91%",
      year: "Apr 2020 - Feb 2021",
      status: "COMPLETED",
      location: "Madhya Pradesh, India",
      highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      icon: Award
    },
    {
      degree: "Secondary Education",
      inst: "Board of Secondary Education, Madhya Pradesh",
      score: "Percentage: 88%",
      year: "Apr 2018 - Feb 2019",
      status: "COMPLETED",
      location: "Madhya Pradesh, India",
      highlights: ["Science", "Mathematics", "English", "Computer Applications"],
      icon: BookOpen
    }
  ];

  const getStatusColor = (status) => {
    return status === 'ACTIVE' 
      ? 'bg-[#00f0ff]/20 text-[#00f0ff] border border-[#00f0ff]/30 shadow-[0_0_8px_rgba(0,240,255,0.3)]' 
      : 'bg-gray-800/80 text-gray-400 border border-gray-700';
  };

  return (
    <OSWindow title="MEM_BANKS/EDUCATION.DAT" icon={<GraduationCap size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-5">
        
        {/* Header with Stats */}
        <div className="flex justify-between items-center pb-2 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <GraduationCap size={12} className="text-[#ffaa44]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">ACADEMIC_TRANSCRIPT</span>
          </div>
          <div className="text-[9px] sm:text-[10px] mono text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">
            {education.length} RECORDS
          </div>
        </div>

        {/* Education Cards */}
        {education.map((edu, i) => {
          const IconComponent = edu.icon;
          return (
            <div 
              key={i} 
              className="group relative p-4 border border-[#00f0ff]/20 bg-gradient-to-r from-[#030712] to-transparent rounded-lg hover:border-[#00f0ff]/60 transition-all duration-300 overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/0 via-[#00f0ff]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              {/* Left Accent Border */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00f0ff] via-[#ff003c] to-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Header Section */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div className="flex items-start gap-2 flex-1">
                  <IconComponent size={16} className="text-[#ffaa44] mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-gray-100 font-bold text-sm sm:text-base tracking-wide group-hover:text-white transition-colors">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <p className="text-[#ff003c] mono text-[10px] sm:text-xs uppercase flex items-center gap-1">
                        <span>{edu.inst}</span>
                      </p>
                      {edu.location && (
                        <span className="text-[8px] sm:text-[9px] text-gray-500 flex items-center gap-0.5">
                          <MapPin size={10} />
                          {edu.location}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[9px] sm:text-[10px] mono px-2 py-0.5 rounded-sm ${getStatusColor(edu.status)}`}>
                    {edu.status}
                  </span>
                </div>
              </div>
              
              {/* Score and Year Row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3 pl-6 sm:pl-7">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[11px] sm:text-xs font-mono text-[#00f0ff] bg-[#00f0ff]/5 px-2 py-1 rounded flex items-center gap-1">
                    <Award size={10} />
                    {edu.score}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 mono flex items-center gap-1">
                    <Calendar size={10} />
                    {edu.year}
                  </span>
                </div>
              </div>
              
              {/* Highlights Tags */}
              {edu.highlights && (
                <div className="pl-6 sm:pl-7 mt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {edu.highlights.map((highlight, idx) => (
                      <span 
                        key={idx} 
                        className="text-[8px] sm:text-[9px] mono px-1.5 py-0.5 bg-gray-900/80 border border-gray-800 rounded text-gray-400 group-hover:border-[#00f0ff]/30 group-hover:text-[#00f0ff] transition-all"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {/* Footer - Academic Summary */}
        <div className="mt-3 pt-3 border-t border-[#00f0ff]/20 flex flex-wrap justify-between items-center gap-2 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <TrendingUp size={10} className="text-[#00f0ff]" />
              <span className="text-gray-500">CURRENT_CGPA: 8.14</span>
            </span>
            <span className="flex items-center gap-1">
              <Award size={10} className="text-[#ffaa44]" />
              <span className="text-gray-500">HIGHEST_SCORE: 91%</span>
            </span>
          </div>
          <div className="text-gray-600 flex items-center gap-1">
            <GraduationCap size={8} />
            <span>EXPECTED_GRAD: 2026</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}