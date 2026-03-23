"use client";
import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, ShieldCheck, Activity } from 'lucide-react';

export default function DiagnosticLog() {
  const [logs, setLogs] = useState([
    "INITIALIZING_UPLINK...",
    "HANDSHAKE_COMPLETE: 0x982F",
    "CORE_STABILITY: 99.9%"
  ]);

  useEffect(() => {
    const messages = [
      "SYNAPS_TICK: CACHE_SYNC",
      "QUERY_ML_MODEL: OPTIMIZING...",
      "DATA_LEAK_PREVENTED: 0.00ms",
      "DIVINE_CHANNEL: ACTIVE",
      "GARBAGE_COLLECTION: RUNNING",
      "UPLINK_STRENGTH: 5/5",
      "OM_NAMAH_SHIVAYA: BROADCASTING",
      "NEURAL_LINK_ESTABLISHED"
    ];

    const interval = setInterval(() => {
      setLogs(prev => [
        `[${new Date().toLocaleTimeString()}] ${messages[Math.floor(Math.random() * messages.length)]}`,
        ...prev.slice(0, 15)
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-2 h-full">
      <div className="flex items-center gap-2 mb-2 p-2 border-b border-[#00f0ff]/20">
        <Activity size={12} className="text-[#00f0ff]" />
        <span className="text-[10px] mono font-bold text-[#00f0ff] uppercase tracking-tighter">System Diagnostic Log</span>
      </div>
      <div className="space-y-1 overflow-hidden h-full">
        {logs.map((log, i) => (
          <div key={i} className={`text-[9px] mono truncate ${i === 0 ? 'text-[#00f0ff] font-bold' : 'text-gray-500 opacity-60'}`}>
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}
