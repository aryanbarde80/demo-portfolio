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
    <OSWindow title="RECORDS/EXPERIENCE.LOG" icon={<Network size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#00f0ff] before:via-[#00f0ff]/50 before:to-transparent">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-[#030712] bg-[#00f0ff] shadow-[0_0_10px_rgba(0,240,255,0.8)] absolute left-0 md:left-1/2 -translate-x-1/2 z-10"></div>
            
            {/* Content Box */}
            <div className="w-[calc(100%-2rem)] md:w-[calc(50%-2rem)] ml-8 md:ml-0 p-4 border border-[#00f0ff]/20 bg-[#030712]/60 hover:border-[#00f0ff]/60 transition-colors backdrop-blur-sm rounded">
              <div className="flex flex-col mb-2">
                <span className="text-[#00f0ff] mono text-xs opacity-80 mb-1">[{exp.period}]</span>
                <h3 className="text-lg font-bold text-gray-100 font-sans tracking-wide">{exp.role}</h3>
                <h4 className="text-sm text-[#ff003c] mono uppercase">{exp.company}</h4>
              </div>
              <ul className="list-disc list-outside ml-4 mt-3 space-y-2">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-400 font-sans leading-relaxed">
                    {detail}
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
