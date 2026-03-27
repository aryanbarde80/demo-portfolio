"use client";
import { useState, useEffect } from 'react';

export default function BootSequence({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [isBooted, setIsBooted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  const bootSequence = [
    { text: "Initializing system kernel...", status: "OK" },
    { text: "Loading display modules...", status: "OK" },
    { text: "Establishing secure connection...", status: "OK" },
    { text: "Mounting portfolio filesystem...", status: "OK" },
    { text: "Starting interface services...", status: "OK" },
    { text: "System ready.", status: "DONE" },
  ];

  useEffect(() => {
    setMounted(true);
    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < bootSequence.length) {
        const entry = bootSequence[currentLog];
        if (!entry) { clearInterval(interval); return; }
        const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
        setLogs(prev => [...prev, { text: entry.text, status: entry.status, time: timestamp }]);
        setProgress(Math.round(((currentLog + 1) / bootSequence.length) * 100));
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsBooted(true);
          setTimeout(onComplete, 600);
        }, 400);
      }
    }, 300);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[99999] bg-[#0a0a0f] flex flex-col items-center justify-center transition-opacity duration-700 ${isBooted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="max-w-lg w-full px-4 sm:px-8">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold mono text-white tracking-tight">
            aryan<span className="text-[#818cf8]">OS</span>
          </h1>
          <p className="text-xs mono text-[#6b6b80] mt-1 tracking-widest">v2.0</p>
        </div>

        {/* Log lines */}
        <div className="space-y-2 mb-6 sm:mb-8 min-h-[140px] sm:min-h-[180px]">
          {logs.map((log, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 mono text-xs sm:text-sm animate-fade-in-up">
              <span className="text-[#6b6b80] text-xs shrink-0">{log.time}</span>
              <span className="text-[#a1a1b5] flex-1">{log.text}</span>
              <span className={`text-xs font-medium shrink-0 ${log.status === 'DONE' ? 'text-[#34d399]' : 'text-[#818cf8]'}`}>
                [{log.status}]
              </span>
            </div>
          ))}
          {!isBooted && mounted && (
            <div className="flex items-center gap-2 mt-3">
              <div className="w-1.5 h-4 bg-[#818cf8] animate-pulse rounded-sm"></div>
            </div>
          )}
        </div>

        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs mono text-[#6b6b80]">
            <span>Loading system</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 bg-[#1a1a26] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#818cf8] to-[#a5b4fc] rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
