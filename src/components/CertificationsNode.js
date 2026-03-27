import OSWindow from "./OSWindow";
import { ShieldCheck, Award, Cloud, Database, Code, Terminal, Shield, Brain, FileCheck } from "lucide-react";

export default function CertificationsNode() {
  const certGroups = [
    { 
      title: "CISCO", 
      icon: Shield,
      color: "#818cf8",
      certs: [
        { name: "CCNA: Introduction to Networks (ITN)", verified: true },
        { name: "CCNA: Switching, Routing & Wireless (SRWE)", verified: true },
        { name: "CCNA: Enterprise Networking, Security & Automation (ENSA)", verified: true },
        { name: "Cybersecurity Essentials", verified: true },
        { name: "DevNet Associate", verified: true },
        { name: "Packet Tracer Proficiency", verified: true },
        { name: "Python Programming", verified: true },
        { name: "C++ Programming", verified: true }
      ] 
    },
    { 
      title: "CLOUD PLATFORMS", 
      icon: Cloud,
      color: "#fb923c",
      certs: [
        { name: "AWS Cloud Practitioner (#65058)", verified: true },
        { name: "Alibaba Cloud Certified Developer", verified: true },
        { name: "Google Cloud Platform (GCP) Fundamentals", verified: true }
      ] 
    },
    { 
      title: "ORACLE", 
      icon: Database,
      color: "#f472b6",
      certs: [
        { name: "Java Programming (Oracle Certified Associate)", verified: true },
        { name: "SQL Database Certification", verified: true },
        { name: "Database Design & Architecture", verified: true }
      ] 
    },
    { 
      title: "OPEN SOURCE & TRAINING", 
      icon: Code,
      color: "#818cf8",
      certs: [
        { name: "FreeCodeCamp — Responsive Web Design", verified: true },
        { name: "Red Hat Training — Linux Fundamentals (RH104 – RHA) v9.1", verified: true },
        { name: "Salesforce Developer Program (TCS iON)", verified: true },
        { name: "Hacktoberfest 2024 — 4 PRs Merged", verified: true }
      ] 
    },
    { 
      title: "INTERNSHIP CERTIFICATIONS", 
      icon: Brain,
      color: "#fb923c",
      certs: [
        { name: "Alfastack Solutions — Frappe Developer Internship", verified: true },
        { name: "Ouranos Robotics — Full Stack Development", verified: true },
        { name: "AICTE Cisco — Cybersecurity & Cloud Security", verified: true },
        { name: "AICTE Cisco — Cloud Security Architecture", verified: true }
      ] 
    }
  ];

  const totalCertifications = certGroups.reduce((acc, group) => acc + group.certs.length, 0);

  return (
    <OSWindow title="Certifications" icon={<ShieldCheck size={16} className="text-[#818cf8]" />}>
      <div className="space-y-4">
        
        {/* Header with Counter */}
        <div className="flex justify-between items-center pb-3 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <Award size={14} className="text-[#fb923c]" />
            <span className="text-xs mono text-gray-400">Verified Credentials</span>
          </div>
          <div className="text-xs mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-1 rounded">
            {totalCertifications} Credentials
          </div>
        </div>

        {/* Certification Groups */}
        <div className="space-y-3">
          {certGroups.map((group, idx) => {
            const IconComponent = group.icon;
            return (
              <div 
                key={idx} 
                className="group relative transition-all duration-300"
              >
                {/* Group Header */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 rounded bg-[#030712] border border-gray-800 group-hover:border-[#818cf8]/40 transition-all">
                    <IconComponent size={14} style={{ color: group.color }} />
                  </div>
                  <h4 
                    className="text-xs mono font-bold tracking-wide"
                    style={{ color: group.color }}
                  >
                    {group.title}
                  </h4>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#818cf8]/20 to-transparent"></div>
                  <span className="text-[10px] text-gray-500">{group.certs.length} items</span>
                </div>
                
                {/* Certifications List */}
                <div className="grid grid-cols-1 gap-1.5 pl-3 border-l-2 border-[#818cf8]/20 hover:border-[#f472b6]/40 transition-all">
                  {group.certs.map((cert, i) => (
                    <div 
                      key={i} 
                      className="group/cert flex items-center gap-2 p-2 rounded hover:bg-[#818cf8]/5 transition-all duration-200 cursor-default"
                    >
                      <FileCheck size={12} className="shrink-0 text-green-500/60" />
                      <span className="text-xs text-gray-300 leading-relaxed hover:text-white transition-colors">
                        {cert.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <div className="mt-4 pt-3 border-t border-[#818cf8]/20 flex flex-wrap justify-between items-center gap-3 text-[10px] mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Terminal size={12} className="text-[#818cf8]" />
              <span className="text-gray-500">Updated: 2026</span>
            </span>
            <span className="flex items-center gap-1">
              <ShieldCheck size={12} className="text-[#f472b6]" />
              <span className="text-gray-500">All Active</span>
            </span>
          </div>
          <div className="text-gray-500">
            {totalCertifications}+ verified credentials
          </div>
        </div>
      </div>
    </OSWindow>
  );
}
