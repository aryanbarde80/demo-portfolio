"use client";
import OSWindow from './OSWindow';
import { User, Languages, Brain, CheckCircle2 } from 'lucide-react';

export default function BioMatrix() {
  const languages = [
    { name: "English", level: "Fluent", progress: 95, color: "#00f0ff" },
    { name: "Hindi", level: "Native", progress: 100, color: "#ff003c" },
    { name: "Marathi", level: "Conversational", progress: 70, color: "#00f0ff" },
  ];

  const attributes = ["Full-Stack Architecture", "IoT Ecosystems", "ML Pipeline Design", "Cloud Infrastructure", "API Optimization", "Team Mentorship"];

  return (
    <OSWindow title="SYS_BIO/PROFILE.DAT" icon={<User size={16} className="text-[#00f0ff]" />} width="max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Bio Summary */}
        <div className="md:col-span-2 space-y-4">
          <div className="space-y-2">
            <h4 className="text-[10px] mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Brain size={12} className="text-[#00f0ff]" />
              Professional_Neuro_Summary
            </h4>
            <p className="text-[13px] text-gray-300 leading-relaxed font-medium">
              Motivated Computer Science Engineer specializing in <span className="text-[#00f0ff]">High-Concurrency Full-Stack Development</span>, <span className="text-[#ff003c]">IoT Systems</span>, and <span className="text-[#00f0ff]">Cloud Computing</span>. 
            </p>
            <p className="text-[12px] text-gray-400 leading-relaxed italic">
              Experienced in leading cross-functional teams to deliver scalable ERP, CRM, and real-time monitoring solutions with a focus on extreme latency optimization and data accuracy.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {attributes.map((attr, i) => (
              <span key={i} className="text-[9px] mono px-2 py-1 bg-gray-900 border border-gray-800 text-gray-400 rounded-sm flex items-center gap-1.5 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors cursor-default">
                <CheckCircle2 size={10} />
                {attr}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Languages & Specs */}
        <div className="space-y-5 border-l border-gray-800 pl-6">
           <div className="space-y-4">
             <h4 className="text-[10px] mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
               <Languages size={12} className="text-[#ff003c]" />
               Linguistic_Stack
             </h4>
             <div className="space-y-3">
               {languages.map((l, i) => (
                 <div key={i} className="space-y-1">
                   <div className="flex justify-between text-[10px] mono">
                     <span className="text-gray-200">{l.name}</span>
                     <span style={{ color: l.color }}>{l.level}</span>
                   </div>
                   <div className="h-1 bg-gray-900 rounded-full overflow-hidden">
                     <div 
                       className="h-full rounded-full animate-pulse-slow" 
                       style={{ width: `${l.progress}%`, backgroundColor: l.color, boxShadow: `0 0 8px ${l.color}40` }}
                     />
                   </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="pt-2">
             <div className="p-3 bg-[#ff003c]/5 border border-[#ff003c]/20 rounded-lg">
               <p className="text-[10px] mono text-[#ff003c] font-black uppercase mb-1">Status: ACTIVE_AGENT</p>
               <p className="text-[9px] text-gray-500 leading-tight">Currently optimizing mission-critical IoT telemetry for robotics enterprise.</p>
             </div>
           </div>
        </div>
      </div>
    </OSWindow>
  );
}
