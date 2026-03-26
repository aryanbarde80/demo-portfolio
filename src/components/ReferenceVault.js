import OSWindow from "./OSWindow";
import { Lock, ShieldCheck, Key, Fingerprint, Scan, BadgeCheck, Sparkles, Shield, CircuitBoard, Cpu, LockKeyhole } from "lucide-react";

export default function ReferenceVault() {
  const verificationHash = "0x9F4E·8A2B·7C3D·1E6F·5A8D·2C7E";
  const lastSync = "2026-03-26T14:32:17Z";
  const trustScore = 98.7;

  const credentials = [
    { type: "ACADEMIC", status: "ACTIVE", level: "VERIFIED", proof: "DIGITAL_SEAL_01" },
    { type: "INDUSTRY", status: "ACTIVE", level: "VERIFIED", proof: "DIGITAL_SEAL_02" },
    { type: "TECHNICAL", status: "ACTIVE", level: "PREMIUM", proof: "DIGITAL_SEAL_03" }
  ];

  const auditLog = [
    { action: "VAULT_INITIALIZED", timestamp: "2024-09-01", hash: "0x1A2B" },
    { action: "CREDENTIALS_UPDATED", timestamp: "2024-12-15", hash: "0x3C4D" },
    { action: "SECURITY_AUDIT", timestamp: "2025-03-20", hash: "0x5E6F" },
    { action: "ENCRYPTION_UPGRADE", timestamp: "2026-01-10", hash: "0x7G8H" },
    { action: "LAST_VERIFICATION", timestamp: lastSync.slice(0, 10), hash: verificationHash.slice(0, 8) }
  ];

  return (
    <OSWindow title="SECURE/CREDENTIAL_VAULT" icon={<ShieldCheck size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-5">
        
        {/* Security Header with Fingerprint */}
        <div className="relative overflow-hidden p-4 border border-[#00f0ff]/30 bg-gradient-to-r from-[#00f0ff]/5 to-transparent rounded-xl">
          <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
            <Fingerprint size={96} className="text-[#00f0ff]" />
          </div>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 animate-pulse">
                <LockKeyhole size={16} className="text-[#00f0ff]" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] mono text-[#ffaa44] uppercase tracking-wider flex items-center gap-2">
                  <Shield size={12} /> ENCRYPTED_VAULT [v3.2.1]
                </p>
                <p className="text-[8px] sm:text-[9px] text-gray-500 font-mono mt-0.5 flex items-center gap-2">
                  <CircuitBoard size={8} />
                  VAULT_HASH: {verificationHash}
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <BadgeCheck size={12} className="text-[#00f0ff]" />
                <span className="text-[9px] mono text-[#00f0ff]">TRUST_SCORE</span>
              </div>
              <p className="text-xl font-mono font-bold text-white">{trustScore}%</p>
            </div>
          </div>
        </div>

        {/* Credential Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {credentials.map((cred, idx) => (
            <div 
              key={idx} 
              className="group p-3 border border-gray-800 hover:border-[#00f0ff]/40 rounded-lg bg-[#030712]/40 hover:bg-[#00f0ff]/5 transition-all duration-300 text-center"
            >
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-[#00f0ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                {cred.type === "ACADEMIC" && <Shield size={14} className="text-[#00f0ff]" />}
                {cred.type === "INDUSTRY" && <CircuitBoard size={14} className="text-[#ffaa44]" />}
                {cred.type === "TECHNICAL" && <Cpu size={14} className="text-[#ff003c]" />}
              </div>
              <p className="text-[10px] font-bold text-gray-300">{cred.type}</p>
              <p className="text-[8px] mono text-[#00f0ff] mt-1">{cred.status}</p>
              <p className="text-[7px] text-gray-600 mt-1">{cred.proof}</p>
            </div>
          ))}
        </div>

        {/* Audit Trail */}
        <div className="space-y-2">
          <h4 className="text-[9px] sm:text-[10px] mono text-[#ffaa44] font-bold flex items-center gap-2">
            <Scan size={10} /> AUDIT_TRAIL.log
          </h4>
          <div className="space-y-1.5 max-h-[180px] overflow-y-auto pr-1">
            {auditLog.map((log, idx) => (
              <div key={idx} className="flex items-center justify-between text-[8px] sm:text-[9px] mono border-l-2 border-[#00f0ff]/30 pl-2 py-1 hover:border-[#00f0ff] transition-all">
                <span className="text-gray-400">{log.action}</span>
                <div className="flex gap-3">
                  <span className="text-gray-600">{log.timestamp}</span>
                  <span className="text-[#00f0ff]/60">{log.hash}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Status */}
        <div className="flex flex-wrap justify-between items-center gap-2 pt-2 border-t border-[#00f0ff]/20 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-500">VAULT_STATUS: ACTIVE</span>
          </div>
          <div className="flex items-center gap-2">
            <Key size={8} className="text-[#ffaa44]" />
            <span className="text-gray-600">LAST_SYNC: {lastSync.slice(0, 10)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Sparkles size={8} className="text-[#00f0ff]" />
            <span className="text-gray-600">ENCRYPTION: AES-256</span>
          </div>
        </div>

        {/* Access Disclaimer */}
        <div className="text-center text-[7px] sm:text-[8px] text-gray-700 border-t border-gray-800 pt-2">
          <span className="flex items-center justify-center gap-1">
            <Lock size={8} /> VERIFIED_CREDENTIALS_AVAILABLE_UPON_REQUEST
          </span>
        </div>
      </div>
    </OSWindow>
  );
}