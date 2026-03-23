import OSWindow from "./OSWindow";
import { Lock, Mail, Phone, ShieldCheck } from "lucide-react";

export default function ReferenceVault() {
  const references = [
    { name: "Dr. Ashok Kumar Verma", role: "HOD, CSE", org: "GGITS", contact: "SECURE_UPLINK" },
    { name: "Prof. Sapan Kumar Jain", role: "Professor", org: "GGITS", contact: "SECURE_UPLINK" },
    { name: "Nishi Patil", role: "HR Manager", org: "Ouranos Robotics", contact: "SECURE_UPLINK" }
  ];

  return (
    <OSWindow title="SECURITY/REFERENCES.SEC" icon={<ShieldCheck size={16} className="text-[#ff003c] animate-pulse" />}>
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4 p-2 border border-yellow-500/20 bg-yellow-500/5 rounded text-[10px] mono text-yellow-500/80">
          <Lock size={12} /> ENCRYPTED_CREDENTIALS_ACCESS: GRANTED
        </div>

        {references.map((item, idx) => (
          <div key={idx} className="p-3 border border-gray-800 hover:border-gray-700 rounded bg-[#030712]/30 group transition-all">
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-gray-100 font-bold text-sm tracking-wide">{item.name}</h4>
              <span className="text-[10px] mono text-gray-500 group-hover:text-white uppercase">{item.org}</span>
            </div>
            <p className="text-[#ff003c] mono text-[11px] mb-3">{item.role}</p>
            <div className="flex gap-4">
              <div className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors cursor-pointer">
                <Mail size={12} className="text-[#00f0ff]" />
                <span className="mono">CONTACT_SECURE</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors cursor-pointer ml-auto">
                <Phone size={12} className="text-[#00f0ff]" />
                <span className="mono">REQUEST_PIN</span>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-4 p-2 bg-[#ff003c]/5 border border-[#ff003c]/20 rounded">
          <p className="text-[10px] mono text-[#ff003c]/80 text-center uppercase tracking-tighter">
            * Fingerprint Auth Required for Direct Uplink
          </p>
        </div>
      </div>
    </OSWindow>
  );
}
