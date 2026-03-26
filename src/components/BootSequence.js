"use client";
import { useState, useEffect, useRef } from 'react';

export default function BootSequence({ onComplete }) {
  const [logs, setLogs] = useState([]);
  const [isBooted, setIsBooted] = useState(false);
  const [mounted, setMounted] = useState(false);

  const bootSequence = [
    "INIT SYSTEM CORE... [OK]",
    "LOADING NEURAL WEIGHTS... [OK]",
    "ESTABLISHING SECURE CONNECTION...",
    "DECRYPTING PORTFOLIO ASSETS... [OK]",
    "BYPASSING FIREWALL... [BYPASSED]",
    "STARTING AGENTIC UI MODULES...",
    "ACCESS GRANTED."
  ];

  useEffect(() => {
    setMounted(true);
    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < bootSequence.length) {
        // Use a client-side timestamp to avoid hydration mismatch
        const timestamp = new Date().toISOString().split('T')[1].slice(0, 12);
        setLogs(prev => [...prev, { text: bootSequence[currentLog], time: timestamp }]);
        currentLog++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsBooted(true);
          setTimeout(onComplete, 500); // fade out time
        }, 600);
      }
    }, 250); // Speed of boot logs

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[99999] bg-[#030712] flex flex-col justify-end p-8 transition-opacity duration-500 ${isBooted ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="max-w-3xl w-full mx-auto space-y-2 mb-20">
        {logs.map((log, i) => (
          <div key={i} className="text-[#00f0ff] mono text-sm sm:text-base md:text-lg animate-in fade-in slide-in-from-bottom-2 duration-300">
            <span className="opacity-50 mr-4">{`[${log.time}]`}</span>
            <span className={i === bootSequence.length - 1 ? "text-[#ff003c] font-bold text-xl glitch-anim inline-block" : ""}>{log.text}</span>
          </div>
        ))}
        {!isBooted && mounted && (
          <div className="inline-block w-3 h-5 bg-[#00f0ff] animate-pulse mt-2 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
        )}
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
    </div>
  );
}
