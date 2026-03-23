import OSWindow from "./OSWindow";
import { Lock, Mail, Phone, ShieldCheck } from "lucide-react";

export default function ReferenceVault() {
  const references = [
    { name: "CONFIDENTIAL_REF_01", role: "HOD, COMPUTER SCIENCE", org: "GGITS", contact: "SECURE_UPLINK" },
    { name: "CONFIDENTIAL_REF_02", role: "PROFESSOR", org: "GGITS", contact: "SECURE_UPLINK" },
    { name: "CONFIDENTIAL_REF_03", role: "HR MANAGER / TALENT ACQ.", org: "OURANOS ROBOTICS", contact: "SECURE_UPLINK" }
  ];

  return (
    <OSWindow title="SECURITY/REFERENCES.SEC" icon={<ShieldCheck size={16} className="text-[#ff003c] animate-pulse" />}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4 p-2 border border-yellow-500/20 bg-yellow-500/5 rounded text-[10px] mono text-yellow-500/80 uppercase">
          <Lock size={12} /> SECURE_CREDENTIALS_ACCESS: GRANTED
        </div>

        {references.map((item, idx) => (
          <div key={idx} className="p-3 border border-gray-800 hover:border-gray-700 rounded bg-[#030712]/30 group transition-all">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-gray-400 font-bold text-[10px] tracking-widest mono">{item.name}</h4>
              <span className="text-[9px] mono text-gray-600 group-hover:text-gray-400 uppercase tracking-tighter">{item.org}</span>
            </div>
            <p className="text-[#ff003c] mono text-[11px] mb-3 font-black">{item.role}</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-[9px] text-gray-600 hover:text-[#00f0ff] transition-colors cursor-pointer uppercase font-bold">
                <Mail size={10} className="text-[#00f0ff]" />
                <span className="mono">UPLINK_SECURE</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] text-gray-600 hover:text-[#00f0ff] transition-colors cursor-pointer ml-auto uppercase font-bold">
                <Phone size={10} className="text-[#00f0ff]" />
                <span className="mono">VERIFY_REQUEST</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </OSWindow>
  );
}
