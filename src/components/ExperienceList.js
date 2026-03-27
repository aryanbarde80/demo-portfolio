import OSWindow from "./OSWindow";
import { Network, Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceList() {
  const experiences = [
    {
      period: "Sep 2025 - Dec 2025",
      role: "Frappe Developer Intern",
      company: "Alfastack Solutions Pvt Ltd",
      location: "On-site",
      color: "#818cf8",
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
      location: "Remote",
      color: "#f472b6",
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
      location: "Virtual",
      color: "#fb923c",
      details: [
        "Mastered cloud security architecture, deploying AWS security configurations including VPC, IAM policies, and encryption protocols.",
        "Studied and implemented advanced penetration testing methodologies and network defense systems.",
        "Gained hands-on experience with network infrastructure security and vulnerability assessment."
      ]
    },
    {
      period: "Jul 2023 - Aug 2023",
      role: "Cybersecurity Intern",
      company: "AICTE Cisco Virtual Internship",
      location: "Virtual",
      color: "#818cf8",
      details: [
        "Completed Cybersecurity Essentials certification track covering threat analysis and mitigation.",
        "Implemented network defense configurations using Cisco Packet Tracer simulations.",
        "Studied encryption protocols and secure communication architecture."
      ]
    }
  ];

  return (
    <OSWindow title="Work Experience" icon={<Network size={18} className="text-[#818cf8]" />} width="max-w-7xl">
            <div className="space-y-4">
              {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <Briefcase size={14} className="text-[#818cf8]" />
            <span className="text-xs mono text-gray-400">Professional Experience</span>
          </div>
          <div className="text-xs mono text-[#818cf8] bg-[#818cf8]/10 px-3 py-1 rounded">
            {experiences.length} Roles
          </div>
        </div>

        {/* Experience Cards - Full Width Stacked */}
                <div className="space-y-4">
                  {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group relative p-4 sm:p-5 md:p-6 border border-gray-800 hover:border-[#818cf8]/30 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#12121a]/80 to-[#030712]/40 transition-all duration-300 overflow-hidden"
            >
              {/* Accent Line */}
              <div
                className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl"
                style={{ backgroundColor: exp.color }}
              ></div>

              <div className="pl-2 sm:pl-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white leading-tight group-hover:text-[#818cf8] transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-sm font-medium mt-1 flex items-center gap-2" style={{ color: exp.color }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: exp.color }}></div>
                      {exp.company}
                    </h4>
                  </div>
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
                                      <span className="text-[10px] sm:text-xs mono px-2 sm:px-3 py-1 bg-[#818cf8]/10 text-[#818cf8] rounded-lg flex items-center gap-1.5">
                                        <Calendar size={12} />
                                        {exp.period}
                                      </span>
                                      <span className="text-[9px] sm:text-[10px] mono px-2 py-0.5 border border-gray-700 text-gray-400 rounded flex items-center gap-1">
                                        <MapPin size={10} />
                                        {exp.location}
                                      </span>
                                    </div>
                </div>

                {/* Details */}
                <ul className="list-none space-y-2.5 mt-4">
                  {exp.details.map((detail, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[#a1a1b5] font-sans leading-relaxed flex gap-2 sm:gap-3">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: exp.color, opacity: 0.5 }}></span>
                      <span className="group-hover:text-gray-300 transition-colors">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-3 pt-3 border-t border-[#818cf8]/20 flex flex-wrap justify-between items-center gap-3 text-xs mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Briefcase size={12} className="text-[#818cf8]" />
              <span className="text-gray-500">{experiences.length} Professional Roles</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={12} className="text-[#f472b6]" />
              <span className="text-gray-500">2+ Years Experience</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-600">Currently Available</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
