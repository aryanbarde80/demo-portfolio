import OSWindow from "./OSWindow";
import { FolderGit2 } from "lucide-react";

export default function ProjectsShowcase() {
  const projects = [
    {
      id: "FWZ-01",
      name: "IATA Travel Agency Portal",
      tech: "Next.js, Next-SEO, Tailwind CSS",
      desc: "Complete digital transformation for an IATA-certified agency. Simplified travel booking with an intuitive UI and enforced mobile-first accessibility across regions."
    },
    {
      id: "CMY-02",
      name: "Creative Tech Agency UI",
      tech: "React, Framer Motion, GSAP",
      desc: "High-performance agency platform highlighting custom 8-step methodology matrices to secure enterprise startup founders."
    },
    {
      id: "TLB-03",
      name: "Scalable Job Portal Engine",
      tech: "WordPress, PHP, MySQL",
      desc: "Developed a comprehensive job recruitment platform featuring complex user role hierarchies and automated candidate application workflows."
    },
    {
      id: "TGS-04",
      name: "Corporate Global Solutions",
      tech: "Next.js, Tailwind, SEO",
      desc: "Engineered a corporate architecture with dynamic CMS integrations, achieving rigorous Google PageSpeed scores of 95+ globally."
    },
    {
      id: "MGF-05",
      name: "Global Peace NGO Maps",
      tech: "React, Google Maps API, i18n",
      desc: "Responsive web presence for a global NGO, integrating fully interactive event maps and multilingual localization layers."
    },
    {
      id: "RMI-06",
      name: "Real-time P2P Matching Engine",
      tech: "MERN, Socket.io, Redis",
      desc: "High-concurrency application matching users in real-time. Reduced matching latency by 40% via optimized DB queries and active caching layers."
    },
    {
      id: "PGD-07",
      name: "Cloud Database Support Console",
      tech: "PERN, NeonDB, JWT",
      desc: "Cloud-native PostgreSQL management interface with strict RBAC, active query optimization, and dynamic API protection protocols."
    },
    {
      id: "CNS-08",
      name: "Smart Network Simulation",
      tech: "Python, Cisco Packet Tracer",
      desc: "Architected smart campus infrastructure with VLAN segmentation, DHCP/DNS configs, and Python-automated IoT lab environments."
    },
    {
      id: "QCN-09",
      name: "QuickConnect Messenger",
      tech: "MERN, Socket.io, JWT",
      desc: "Scalable real-time chat with bidirectional WebSocket communication, typing indicators, media sharing, and end-to-end encryption."
    },
    {
      id: "KRP-10",
      name: "E-Commerce Analytics Suite",
      tech: "Next.js, SEO, Analytics",
      desc: "Marketing agency platform with e-commerce storefronts, SEO automation achieving 30% organic traffic growth, and analytics dashboards."
    }
  ];

  return (
    <OSWindow title="ARCHIVES/PROJECTS.BIN" icon={<FolderGit2 size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="group relative flex flex-col justify-between border-l-2 border-[#ff003c]/40 hover:border-[#ff003c] p-4 bg-[#030712]/60 hover:bg-[#ff003c]/5 transition-all overflow-hidden h-full shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_4px_25px_rgba(255,0,60,0.15)] rounded-r-lg">
            {/* Scanner Line */}
            <div className="absolute inset-0 w-full h-[200%] bg-gradient-to-b from-transparent via-[#ff003c]/10 to-transparent -translate-y-full group-hover:animate-[scanner_2s_ease-in-out_infinite] pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="mono text-xs text-[#ff003c] mb-2 opacity-70 flex justify-between">
                <span>ID: {proj.id}</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 glitch-anim">SYS.MATCH</span>
              </div>
              <h3 className="text-gray-100 font-bold mb-3 font-sans group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,0,60,0.5)] transition-all">{proj.name}</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-4 group-hover:text-gray-300 transition-colors">{proj.desc}</p>
            </div>
            
            <div className="text-xs text-[#00f0ff] mono relative z-10 mt-auto border-t border-[#00f0ff]/20 pt-3 flex flex-wrap gap-1.5">
              {proj.tech.split(', ').map((t, i) => (
                <span key={i} className="bg-[#00f0ff]/10 border border-[#00f0ff]/30 px-1.5 py-0.5 rounded-sm shadow-[0_0_5px_rgba(0,240,255,0.05)] group-hover:border-[#00f0ff]/60 transition-colors">[{t}]</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
         <button className="px-6 py-2 border border-gray-600 text-gray-400 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-colors mono text-xs uppercase tracking-widest">
            Load_More_Records()
         </button>
      </div>
    </OSWindow>
  );
}
