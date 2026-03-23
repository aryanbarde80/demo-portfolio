"use client";
import React, { useState } from 'react';
import { Terminal, Activity, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MantraCLI({ onCommand }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'MANTRA CLI INITIALIZED. AWAITING INPUT_' },
    { type: 'system', text: 'AVAILABLE COMMANDS: show_skills, bless_me, tandava, decrypt_contact, show_projects' }
  ]);
  const [cpuLoad, setCpuLoad] = useState(12);

  // Simulate CPU spikes
  const simulateLoad = () => {
    setCpuLoad(Math.floor(Math.random() * 20) + 80);
    setTimeout(() => setCpuLoad(Math.floor(Math.random() * 15) + 10), 1000);
  };

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    simulateLoad();
    const cmd = input.trim().toLowerCase();
    
    setHistory(prev => [...prev, { type: 'user', text: `> GUEST@ARYAN_CORE:~$ ${cmd}` }]);
    
    let response = "COMMAND NOT RECOGNIZED. CONSULT RUNBOOKS.";
    if (cmd === "show_skills") {
      response = "EXEC: INITIATING SKILL HIGHLIGHT_";
      onCommand('show_skills');
    } else if (cmd === "bless_me") {
      response = "ॐ: BLESSING SEQUENCE INITIATED.";
      onCommand('bless_me');
    } else if (cmd === "tandava") {
      response = "ॐ: TANDAVA OVERDRIVE ENGAGED. SYSTEM UNSTABLE.";
      onCommand('tandava');
    } else if (cmd === "decrypt_contact") {
      response = "DECRYPTING SECURE CHANNELS... \nEMAIL: hi.aryanbarde@gmail.com \nPHONE: +91 79872 90159";
    } else if (cmd === "show_projects") {
      response = "FILTERING PROJECT ARCHIVES_";
      onCommand('show_projects');
    } else if (cmd === "clear") {
      setHistory([]);
      setInput('');
      return;
    }

    setTimeout(() => {
      setHistory(prev => [...prev, { type: 'system', text: response }]);
    }, 400);

    setInput('');
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8 }}
      className="fixed bottom-0 left-0 w-full z-50 pointer-events-none"
    >
      <div className="max-w-4xl mx-auto pointer-events-auto mb-4 px-4">
        <div className="glass-panel border-t border-l border-r border-[#00f0ff]/30 bg-black/80 backdrop-blur-md rounded-t-lg overflow-hidden shadow-[0_-5px_30px_rgba(0,240,255,0.15)] relative group">
          
          {/* Neon Border Glow */}
          <div className="absolute inset-0 border-t-2 border-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity blur-sm pointer-events-none"></div>

          {/* Status Bar */}
          <div className="flex justify-between items-center bg-[#030712] px-4 py-1.5 border-b border-[#00f0ff]/20">
            <div className="flex items-center gap-2 text-[10px] mono text-[#00f0ff]/80 font-bold uppercase tracking-widest">
              <Terminal size={12} /> MANTRA_CLI // ACTIVE
            </div>
            {/* Live Stats */}
            <div className="flex gap-4 text-[9px] mono text-gray-500 hidden sm:flex">
              <span className="flex items-center gap-1 font-bold">
                <Activity size={10} className="text-green-500" /> PING: <span className="text-green-500">12ms</span>
              </span>
              <span className="flex items-center gap-1 font-bold">
                <Zap size={10} className={cpuLoad > 50 ? 'text-[#ff003c]' : 'text-[#ffaa44]'} /> 
                CPU_LOAD: <span className={cpuLoad > 50 ? 'text-[#ff003c]' : 'text-[#ffaa44]'}>{cpuLoad}%</span>
              </span>
              <span className="text-[#00f0ff] font-bold">GITHUB: 2m ago (fix: UI)</span>
            </div>
          </div>

          {/* Log Window */}
          <div className="h-28 overflow-y-auto p-3 space-y-1 scrollbar-thin scrollbar-thumb-[#00f0ff]/20 flex flex-col justify-end">
            <AnimatePresence>
              {history.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  key={idx} 
                  className={`text-[11px] mono whitespace-pre-line ${msg.type === 'user' ? 'text-gray-300' : 'text-[#00f0ff]'} pb-1`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Input Form */}
          <form onSubmit={handleCommand} className="flex border-t border-[#00f0ff]/20 bg-black p-2 items-center gap-2">
            <span className="text-[#ff44aa] text-[11px] mono font-bold ml-2 shrink-0">{'>'} GUEST@ARYAN_CORE:~$</span>
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-[#00f0ff] text-[11px] mono w-full py-1 caret-[#00f0ff]"
              placeholder="ENTER MANTRA COMMAND..."
              spellCheck="false"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </motion.div>
  );
}
