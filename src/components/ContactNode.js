import OSWindow from "./OSWindow";
import { Satellite } from "lucide-react";

export default function ContactNode() {
  const links = [
    { label: "EMAIL", value: "[ENCRYPTED_UPLINK]", href: "mailto:aryanbarde80@gmail.com" },
    { label: "PHONE", value: "+91-XXXXXXXXXX", href: "#" },
    { label: "LINKEDIN", value: "linkedin.com/in/aryanbarde80", href: "https://linkedin.com/in/aryanbarde80" },
    { label: "GITHUB", value: "github.com/aryanbarde80", href: "https://github.com/aryanbarde80" },
    { label: "PORTFOLIO", value: "aryanbarde80.github.io/My-Portfolio", href: "https://aryanbarde80.github.io/My-Portfolio" },
    { label: "LEETCODE", value: "leetcode.com/aryanbarde80", href: "https://leetcode.com/aryanbarde80" }
  ];

  return (
    <OSWindow title="NETWORK/CONTACT.SYS" icon={<Satellite size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-3xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col p-4 border border-[#00f0ff]/20 bg-[#030712]/50 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/60 hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300 group rounded group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-[3px] h-full bg-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.9)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <span className="text-[#ff003c] mono text-xs font-bold tracking-widest mb-1 opacity-80 group-hover:opacity-100 flex items-center justify-between group-hover:text-shadow-[0_0_5px_rgba(255,0,60,0.5)]">
              <span>{link.label} //:</span>
              <span className="text-[#00f0ff] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">{"[ CONNECT ]"}</span>
            </span>
            <span className="text-gray-300 mono text-sm group-hover:text-white transition-colors pl-2 border-l border-gray-700 group-hover:border-[#00f0ff] group-hover:shadow-[-2px_0_10px_rgba(0,240,255,0.2)] mt-1">{link.value}</span>
          </a>
        ))}
      </div>
    </OSWindow>
  );
}
