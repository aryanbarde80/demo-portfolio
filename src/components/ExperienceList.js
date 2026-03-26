import OSWindow from "./OSWindow";
import { Network } from "lucide-react";

export default function ExperienceList() {
  const experiences = [
    {
      period: "Sep 2025 - Dec 2025",
      role: "Frappe Developer Intern",
      company: "Alfastack Solutions Pvt Ltd",
      details: [
        "Developed Enterprise Supplier Portal using Frappe framework and React Frappe SDK, reducing processing time by 40%.",
        "Built Customer Experience Portal using Frappe REST APIs for streamlined service workflows.",
        "Implemented real-time WebSocket communication between server backend and React frontend.",
        "Contributed to cross-platform connector for ERP automation, deploying Open WebUI on GCP.",
        "Engineered an AI CV defect detection system using YOLOv8 and OpenCV with 95%+ accuracy."
      ]
    },
    {
      period: "Aug 2024 - Sep 2025",
      role: "Full Stack Developer & Team Lead",
      company: "Ouranos Robotics Private Limited",
      details: [
        "Led a development team of 5+ members, mentoring juniors and establishing agile processes.",
        "Engineered a real-time IoT monitoring console using React, Node.js, and MQTT.",
        "Developed an interactive 3D platform utilizing Three.js with highly responsive design matrices.",
        "Architected a mobile-first IoT solution using React Native, Expo, and Firebase realtime architecture.",
        "Programmed ESP32 firmware in C++ for stable Wi-Fi connectivity and high-throughput sensor telemetry.",
        "Reduced overall API latency by 40% through deep database indexing and Redis caching."
      ]
    },
    {
      period: "Jul 2024 - Aug 2024",
      role: "Cybersecurity & Cloud Security Intern",
      company: "AICTE Cisco Virtual Internship",
      details: [
        "Mastered cloud security architecture, deploying AWS security configurations including VPC, IAM policies, and encryption protocols.",
        "Studied and implemented advanced penetration testing methodologies and network defense systems."
      ]
    }
  ];

  return (
    <OSWindow title="RECORDS/EXPERIENCE.LOG" icon={<Network size={18} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-6 relative pl-6">
        {/* Vertical timeline line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#00f0ff] via-[#00f0ff]/40 to-transparent"></div>
        
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-[#030712] bg-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.8)] absolute -left-6 top-4 -translate-x-[2px] z-20 transition-transform group-hover:scale-125 duration-300">
              <div className="w-2 h-2 rounded-full bg-white animate-pulsion"></div>
            </div>
            
            {/* Content Box */}
            <div className="w-full p-4 sm:p-5 border border-[#00f0ff]/10 bg-[#030712]/80 hover:border-[#00f0ff]/50 transition-all duration-500 backdrop-blur-xl rounded-xl group-hover:shadow-[0_10px_30px_rgba(0,240,255,0.15)] ring-1 ring-white/5">
              <div className="flex flex-col mb-3">
                <span className="text-[#00f0ff] mono text-[10px] sm:text-xs opacity-80 mb-1.5 font-black tracking-widest px-2 py-0.5 bg-[#00f0ff]/10 rounded-full w-fit">[{exp.period}]</span>
                <h3 className="text-base sm:text-lg font-black text-white font-header leading-tight group-hover:text-[#00f0ff] transition-colors tracking-tight">{exp.role}</h3>
                <h4 className="text-xs sm:text-sm text-[#ff003c] mono uppercase mt-1 tracking-widest font-black flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#ff003c] rounded-full animate-pulse"></div>
                  {exp.company}
                </h4>
              </div>
              <ul className="list-none space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed flex gap-2 group/li">
                    <span className="text-[#00f0ff] opacity-40 select-none group-hover/li:opacity-100 transition-opacity font-black mt-0.5 shrink-0">::</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </OSWindow>
  );
}
