import OSWindow from "./OSWindow";
import { BookOpen, ExternalLink, Hash } from "lucide-react";

export default function TechnicalWritingNode() {
  const blogs = [
    { title: "Full-Stack Development Architectures", topic: "Next.js & Frappe Integration", date: "Nov 2025" },
    { title: "IoT Systems & Real-time Telemetry", topic: "MQTT & ESP32 Protocols", date: "Oct 2025" },
    { title: "AI/ML Applications in Enterprise", topic: "YOLOv8 & Computer Vision", date: "Dec 2025" },
    { title: "Cloud Computing & DevSecOps", topic: "AWS Architecture & Security", date: "Dec 2025" }
  ];

  return (
    <OSWindow title="PUBLISH/TECH_BLOGS.BIN" icon={<BookOpen size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-4">
        <p className="text-gray-400 text-[11px] mb-3 p-2 bg-gray-900/50 italic border-l-2 border-gray-700">
          "Researched, authored, and published technical articles for Alfastack developer community."
        </p>
        
        {blogs.map((blog, idx) => (
          <div key={idx} className="group relative border border-[#00f0ff]/10 hover:border-[#00f0ff]/40 p-3 rounded transition-all bg-[#030712]/40">
            <div className="flex justify-between items-start">
              <h4 className="text-gray-200 text-sm font-bold group-hover:text-[#00f0ff] transition-colors pr-4">{blog.title}</h4>
              <ExternalLink size={12} className="text-gray-600 group-hover:text-[#00f0ff]" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[#ff003c] text-[10px] mono">
                <Hash size={10} className="inline mr-0.5" /> 
                {blog.topic.toUpperCase()}
              </span>
              <span className="text-gray-600 text-[9px] ml-auto">{blog.date}</span>
            </div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-[#00f0ff]/5 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </OSWindow>
  );
}
