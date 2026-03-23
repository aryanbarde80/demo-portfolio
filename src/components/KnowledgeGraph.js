"use client";
import React from 'react';
import { Brain, Cpu, Globe, Rocket } from 'lucide-react';

export default function KnowledgeGraph() {
  const nodes = [
    { name: "NodeJS", val: 95, icon: <Cpu size={14}/> },
    { name: "PyTorch", val: 88, icon: <Brain size={14}/> },
    { name: "ReactJS", val: 98, icon: <Globe size={14}/> },
    { name: "NextJS", val: 92, icon: <Rocket size={14}/> }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 h-full p-2">
      {nodes.map((node, i) => (
        <div key={i} className="flex flex-col gap-1 border border-[#00f0ff]/10 p-2 rounded bg-black/30">
          <div className="flex items-center justify-between">
            <span className="text-[#00f0ff] opacity-80">{node.icon}</span>
            <span className="text-[8px] mono text-gray-500 uppercase">{node.name}</span>
          </div>
          <div className="w-full h-1 bg-white/5 rounded-full mt-1 overflow-hidden">
            <div 
              className="h-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" 
              style={{ width: `${node.val}%` }}
            ></div>
          </div>
          <span className="text-[8px] mono text-[#00f0ff] text-right mt-1">{node.val}.0%</span>
        </div>
      ))}
    </div>
  );
}
