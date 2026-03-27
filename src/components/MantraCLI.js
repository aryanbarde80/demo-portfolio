"use client";
import { useState, useEffect, useRef } from 'react';
import { Terminal, Activity, Zap, MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MantraCLI({ onCommand }) {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [history, setHistory] = useState([
    { type: 'system', text: 'MANTRA CLI v2.0 — AI-Powered Terminal' },
    { type: 'system', text: 'Ask me anything about Aryan, or try: show_skills, show_projects, decrypt_contact' }
  ]);
  const [cpuLoad, setCpuLoad] = useState(12);
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) {
      logRef.current.scrollTop = logRef.current.scrollHeight;
    }
  }, [history]);

  const simulateLoad = () => {
    setCpuLoad(Math.floor(Math.random() * 20) + 80);
    setTimeout(() => setCpuLoad(Math.floor(Math.random() * 15) + 10), 1000);
  };

  const getAIResponse = (userInput) => {
    const q = userInput.toLowerCase();

    // Built-in commands
    if (q === "show_skills") {
      onCommand('show_skills');
      return "Navigating to Skills section...";
    }
    if (q === "show_projects") {
      onCommand('show_projects');
      return "Navigating to Projects section...";
    }
    if (q === "bless_me") {
      onCommand('bless_me');
      return "Blessing sequence initiated. Divine protection enabled.";
    }
    if (q === "tandava") {
      onCommand('tandava');
      setTimeout(() => onCommand('reset_stability'), 5000);
      return "TANDAVA OVERDRIVE ENGAGED. System entering unstable mode for 5 seconds...";
    }
    if (q === "decrypt_contact" || q.includes("contact") || q.includes("email") || q.includes("phone")) {
      return "Contact Channels:\nEmail: aryanbarde80@gmail.com\nPhone: +91-7477203433\nLinkedIn: linkedin.com/in/aryanbarde80\nGitHub: github.com/aryanbarde80";
    }
    if (q === "clear") {
      return "__CLEAR__";
    }
    if (q === "help") {
      return "Available commands:\n- show_skills: Navigate to skills\n- show_projects: Navigate to projects\n- decrypt_contact: Show contact info\n- clear: Clear terminal\n\nOr ask me anything about Aryan!";
    }

    // AI-like contextual responses
    if (q.includes("who") && (q.includes("aryan") || q.includes("you"))) {
      return "Aryan Barde is a Computer Science student at GGITS, Jabalpur (CGPA: 8.14). He specializes in full-stack development, IoT systems, and AI/ML. He has worked at Ouranos Robotics as a Full Stack Dev & Team Lead and at Alfastack Solutions as a Frappe Developer Intern.";
    }
    if (q.includes("experience") || q.includes("work")) {
      return "Professional Experience:\n1. Alfastack Solutions (Sep-Dec 2025) — Frappe Developer Intern\n   Built supplier/customer portals, AI defect detection (95% accuracy)\n2. Ouranos Robotics (Aug 2024-Sep 2025) — Full Stack Dev & Team Lead\n   Led 5+ team, built IoT console, reduced API latency by 40%\n3. AICTE Cisco (Jul 2023 & Jul 2024) — Cybersecurity & Cloud Intern";
    }
    if (q.includes("skill") || q.includes("tech") || q.includes("stack")) {
      return "Tech Stack:\nFrontend: React.js, Next.js, React Native, Three.js, Tailwind\nBackend: Node.js, Express, Flask, FastAPI, Frappe\nDatabases: PostgreSQL, MySQL, MongoDB, Redis, Firebase\nCloud: AWS, GCP, Docker, CI/CD\nAI/ML: YOLOv8, OpenCV, LangChain, CrewAI\nIoT: ESP32, MQTT, C++";
    }
    if (q.includes("project")) {
      return "Key Projects:\n- AryanOS Portfolio: Futuristic 3D portfolio with terminal & boot sequence\n- IoT Real-Time Dashboard: Sub-100ms telemetry with Redis caching\n- AI Defect Detection: YOLOv8 pipeline with 95% accuracy\n- RoomieQ India: MERN roommate platform with real-time chat\n- PostgreStore: Cloud RDBMS management system\n- QuickConnect: Real-time chat with Socket.io";
    }
    if (q.includes("education") || q.includes("college") || q.includes("degree")) {
      return "Education:\nB.Tech in CSE — GGITS, Jabalpur (Nov 2022 - Present)\nCGPA: 8.14/10.0\n12th Grade (PCM): 91% — MP Board\n10th Grade: 88% — MP Board";
    }
    if (q.includes("certif")) {
      return "Certifications:\n- Cisco: CCNA (ITN, SRWE, ENSA), DevNet Associate, Cybersecurity\n- Oracle: Java (OCA), SQL Database, Database Design\n- Cloud: AWS Cloud Practitioner (#65058), Alibaba Cloud Developer\n- Red Hat: Linux Fundamentals (RH104)\n- FreeCodeCamp: Responsive Web Design";
    }
    if (q.includes("achievement") || q.includes("award") || q.includes("hackathon")) {
      return "Achievements:\n- TCS CodeVita 2025: AIR 4905 in Round 2 (500K+ participants)\n- Code360: 3-Time College Topper\n- TechSynergy IoT: 2nd Place at Gyanotsav 2025\n- Ouranos Robotics: 5/5 Rating + Intern of the Month\n- Hacktoberfest 2024: 4 PRs Merged";
    }
    if (q.includes("freelance") || q.includes("client")) {
      return "Freelance Projects:\n- Fly with Zara: IATA travel agency digital transformation\n- ClickMyze: Creative tech agency website\n- TalentBloom: WordPress job portal\n- Trisight Global: Next.js corporate site (PageSpeed 95+)\n- Krapto Technologies: E-commerce + SEO (30% traffic boost)\n- MGGP India Foundation: NGO website with multilingual support";
    }
    if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
      return "Hello! I'm Aryan's AI assistant. Ask me about his skills, experience, projects, certifications, or anything else. I'm here to help!";
    }
    if (q.includes("resume") || q.includes("cv") || q.includes("download")) {
      return "You can explore Aryan's full profile right here on this portfolio. Scroll through the sections to see skills, experience, projects, and more. For direct contact: aryanbarde80@gmail.com";
    }
    if (q.includes("hire") || q.includes("available") || q.includes("open to")) {
      return "Aryan is open to full-time opportunities, internships, and freelance projects. He specializes in Full Stack Development, IoT, and AI/ML. Reach out at aryanbarde80@gmail.com or +91-7477203433.";
    }

    return `I understand you're asking about "${userInput}". I'm Aryan's portfolio assistant. Try asking about his skills, experience, projects, certifications, achievements, or education. You can also use commands like show_skills, show_projects, or decrypt_contact.`;
  };

  const handleCommand = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    simulateLoad();
    const cmd = input.trim();
    
    setHistory(prev => [...prev, { type: 'user', text: `> ${cmd}` }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getAIResponse(cmd);
      if (response === "__CLEAR__") {
        setHistory([{ type: 'system', text: 'Terminal cleared. Ready for input.' }]);
      } else {
        setHistory(prev => [...prev, { type: 'system', text: response }]);
      }
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  return (
    <>
      {/* Floating Icon Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 2, duration: 0.4, type: "spring" }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 left-4 sm:left-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#818cf8] hover:bg-[#6366f1] text-white flex items-center justify-center shadow-[0_0_30px_rgba(129,140,248,0.4)] hover:shadow-[0_0_40px_rgba(129,140,248,0.6)] transition-all duration-300 group"
            aria-label="Open Mantra CLI"
          >
            <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-[#0a0a0f]"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* CLI Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: 300, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 300, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.2 }}
            className="fixed bottom-20 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-auto z-50 w-auto sm:w-[380px] md:w-[440px] max-h-[60vh] sm:max-h-[500px] flex flex-col"
          >
            <div className="glass-panel border border-[#818cf8]/30 bg-black/90 backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(129,140,248,0.2)] flex flex-col max-h-[500px]">
              
              {/* Header Bar */}
              <div className="flex justify-between items-center bg-[#030712] px-4 py-2.5 border-b border-[#818cf8]/20 shrink-0">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-[#818cf8]" />
                  <span className="text-xs mono text-[#818cf8] font-bold uppercase tracking-wider">Mantra CLI</span>
                  <span className="text-[9px] mono px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded">AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex gap-3 text-[9px] mono text-gray-500 mr-2">
                    <span className="flex items-center gap-1">
                      <Activity size={9} className="text-green-500" />
                      <span className="text-green-500">Online</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap size={9} className={cpuLoad > 50 ? 'text-[#f472b6]' : 'text-[#fb923c]'} />
                      <span className={cpuLoad > 50 ? 'text-[#f472b6]' : 'text-[#fb923c]'}>{cpuLoad}%</span>
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-white transition-colors p-1 rounded hover:bg-white/10"
                    aria-label="Close CLI"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Log Window */}
              <div ref={logRef} className="flex-1 overflow-y-auto p-4 space-y-2 min-h-[200px] max-h-[340px]">
                {history.map((msg, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    key={idx} 
                    className={`text-xs mono whitespace-pre-line leading-relaxed ${
                      msg.type === 'user' 
                        ? 'text-gray-300 bg-[#818cf8]/10 p-2.5 rounded-lg border border-[#818cf8]/20 ml-8' 
                        : 'text-[#818cf8] bg-[#030712]/60 p-2.5 rounded-lg border border-gray-800/40 mr-8'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
                {isTyping && (
                  <div className="text-[#818cf8] text-xs mono p-2.5 mr-8 bg-[#030712]/60 rounded-lg border border-gray-800/40">
                    <span className="animate-pulse">Thinking...</span>
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={handleCommand} className="flex border-t border-[#818cf8]/20 bg-[#030712] p-3 items-center gap-2 shrink-0">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="bg-transparent border border-gray-800 rounded-lg outline-none text-[#818cf8] text-xs mono w-full py-2 px-3 caret-[#818cf8] focus:border-[#818cf8]/50 transition-colors placeholder:text-gray-600"
                  placeholder="Ask about Aryan or type a command..."
                  spellCheck="false"
                  autoComplete="off"
                  autoFocus
                  aria-label="Enter message or command"
                />
                <button 
                  type="submit" 
                  className="p-2 bg-[#818cf8] hover:bg-[#6366f1] rounded-lg text-white transition-colors shrink-0"
                  aria-label="Send"
                >
                  <Send size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
