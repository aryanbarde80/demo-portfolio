"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import OSWindow from './OSWindow';
import { Share2, Server, Database, Cpu, Zap, GitBranch, Cloud, Shield } from 'lucide-react';

export default function SystemArchitectureNode() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const paths = svgRef.current.querySelectorAll('.flow-line');
    gsap.fromTo(paths, 
      { strokeDashoffset: 1000, opacity: 0 }, 
      { strokeDashoffset: 0, opacity: 1, duration: 2, stagger: 0.2, ease: "power2.inOut", repeat: -1, repeatDelay: 1 }
    );
    
    const pulses = svgRef.current.querySelectorAll('.pulse-dot');
    gsap.to(pulses, {
      scale: 1.5,
      opacity: 0,
      repeat: -1,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out"
    });
  }, []);

  const architectureLayers = [
    { layer: "PRESENTATION", items: ["React Dashboard", "Real-time WebSocket", "Mobile React Native"], color: "#818cf8", icon: Server },
    { layer: "GATEWAY", items: ["KRP Load Balancer", "Rate Limiting", "JWT Validation"], color: "#f472b6", icon: Shield },
    { layer: "SERVICES", items: ["IoT Telemetry", "ML Inference", "User Management"], color: "#fb923c", icon: Cpu },
    { layer: "DATA", items: ["PostgreSQL", "Redis Cache", "MongoDB"], color: "#818cf8", icon: Database }
  ];

  return (
    <OSWindow title="System Architecture" icon={<Share2 size={16} className="text-[#818cf8]" />} width="max-w-7xl">
      <div className="space-y-4 sm:space-y-5">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-3 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <GitBranch size={14} className="text-[#818cf8]" />
            <span className="text-xs mono text-gray-400">Architecture Diagram</span>
          </div>
          <div className="text-xs mono text-[#818cf8] bg-[#818cf8]/10 px-3 py-1 rounded">
            v2.0 — Production
          </div>
        </div>

        {/* Main Content - Stacked */}
                <div className="space-y-4 sm:space-y-5">
          
                  {/* Diagram - Full Width */}
                  <div className="relative border border-gray-800 bg-gradient-to-br from-[#030712] to-[#0a0f1a] rounded-xl p-3 sm:p-4 md:p-6 overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center gap-2 z-10">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] mono text-gray-400">Live Synced</span>
            </div>
            
            <svg ref={svgRef} viewBox="0 0 500 260" className="w-full h-auto max-h-[300px] sm:max-h-[400px]">
              {/* Client Layer */}
              <rect x="10" y="30" width="90" height="80" rx="8" className="fill-[#818cf8]/10 stroke-[#818cf8] stroke-[1.5]" />
              <text x="55" y="60" textAnchor="middle" className="fill-[#818cf8]" style={{fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold'}}>WEB_UI</text>
              <text x="55" y="80" textAnchor="middle" className="fill-gray-400" style={{fontSize: '9px', fontFamily: 'monospace'}}>React / Next.js</text>
              <circle cx="55" cy="100" r="3" className="fill-[#818cf8] pulse-dot" />
              
              <rect x="10" y="130" width="90" height="80" rx="8" className="fill-[#818cf8]/10 stroke-[#818cf8] stroke-[1.5]" />
              <text x="55" y="160" textAnchor="middle" className="fill-[#818cf8]" style={{fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold'}}>MOBILE</text>
              <text x="55" y="180" textAnchor="middle" className="fill-gray-400" style={{fontSize: '9px', fontFamily: 'monospace'}}>React Native</text>
              <circle cx="55" cy="200" r="3" className="fill-[#818cf8] pulse-dot" />
              
              {/* Gateway Layer */}
              <rect x="140" y="55" width="110" height="130" rx="8" className="fill-[#f472b6]/10 stroke-[#f472b6] stroke-[1.5]" />
              <text x="195" y="85" textAnchor="middle" className="fill-[#f472b6]" style={{fontSize: '12px', fontFamily: 'monospace', fontWeight: 'bold'}}>GATEWAY</text>
              <text x="195" y="108" textAnchor="middle" className="fill-gray-400" style={{fontSize: '9px', fontFamily: 'monospace'}}>Load Balancer</text>
              <text x="195" y="128" textAnchor="middle" className="fill-gray-400" style={{fontSize: '9px', fontFamily: 'monospace'}}>Rate Limiter</text>
              <text x="195" y="148" textAnchor="middle" className="fill-gray-400" style={{fontSize: '9px', fontFamily: 'monospace'}}>JWT Auth</text>
              <circle cx="195" cy="175" r="3" className="fill-[#f472b6] pulse-dot" />
              
              {/* Service Layer */}
              <rect x="290" y="15" width="100" height="60" rx="6" className="fill-[#fb923c]/10 stroke-[#fb923c] stroke-[1.5]" />
              <text x="340" y="40" textAnchor="middle" className="fill-[#fb923c]" style={{fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold'}}>IOT_SVC</text>
              <text x="340" y="60" textAnchor="middle" className="fill-gray-400" style={{fontSize: '9px', fontFamily: 'monospace'}}>MQTT / ESP32</text>
              
              <rect x="290" y="90" width="100" height="60" rx="6" className="fill-[#fb923c]/10 stroke-[#fb923c] stroke-[1.5]" />
              <text x="340" y="115" textAnchor="middle" className="fill-[#fb923c]" style={{fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold'}}>ML_PROC</text>
              <text x="340" y="135" textAnchor="middle" className="fill-gray-400" style={{fontSize: '9px', fontFamily: 'monospace'}}>YOLOv8 / CV</text>
              
              <rect x="290" y="165" width="100" height="60" rx="6" className="fill-[#fb923c]/10 stroke-[#fb923c] stroke-[1.5]" />
              <text x="340" y="190" textAnchor="middle" className="fill-[#fb923c]" style={{fontSize: '11px', fontFamily: 'monospace', fontWeight: 'bold'}}>USER_SVC</text>
              <text x="340" y="210" textAnchor="middle" className="fill-gray-400" style={{fontSize: '9px', fontFamily: 'monospace'}}>Auth / Profile</text>
              
              {/* Data Layer */}
              <rect x="430" y="25" width="60" height="55" rx="6" className="fill-[#818cf8]/10 stroke-[#818cf8] stroke-[1.5]" />
              <text x="460" y="48" textAnchor="middle" className="fill-[#818cf8]" style={{fontSize: '10px', fontFamily: 'monospace', fontWeight: 'bold'}}>PG SQL</text>
              <text x="460" y="68" textAnchor="middle" className="fill-gray-400" style={{fontSize: '8px', fontFamily: 'monospace'}}>Primary</text>
              
              <rect x="430" y="100" width="60" height="55" rx="6" className="fill-[#fb923c]/10 stroke-[#fb923c] stroke-[1.5]" />
              <text x="460" y="123" textAnchor="middle" className="fill-[#fb923c]" style={{fontSize: '10px', fontFamily: 'monospace', fontWeight: 'bold'}}>REDIS</text>
              <text x="460" y="143" textAnchor="middle" className="fill-gray-400" style={{fontSize: '8px', fontFamily: 'monospace'}}>Cache</text>
              
              <rect x="430" y="175" width="60" height="55" rx="6" className="fill-[#f472b6]/10 stroke-[#f472b6] stroke-[1.5]" />
              <text x="460" y="198" textAnchor="middle" className="fill-[#f472b6]" style={{fontSize: '10px', fontFamily: 'monospace', fontWeight: 'bold'}}>MONGO</text>
              <text x="460" y="218" textAnchor="middle" className="fill-gray-400" style={{fontSize: '8px', fontFamily: 'monospace'}}>Analytics</text>
              
              {/* Connection Lines */}
              <path d="M100 70 L140 100" className="flow-line stroke-[#818cf8]/50 stroke-[1.5] fill-none" strokeDasharray="800" />
              <path d="M100 170 L140 140" className="flow-line stroke-[#818cf8]/50 stroke-[1.5] fill-none" strokeDasharray="800" />
              <path d="M250 120 L290 45" className="flow-line stroke-[#f472b6]/50 stroke-[1.5] fill-none" strokeDasharray="800" />
              <path d="M250 120 L290 120" className="flow-line stroke-[#f472b6]/50 stroke-[1.5] fill-none" strokeDasharray="800" />
              <path d="M250 120 L290 195" className="flow-line stroke-[#f472b6]/50 stroke-[1.5] fill-none" strokeDasharray="800" />
              <path d="M390 45 L430 52" className="flow-line stroke-[#fb923c]/50 stroke-[1.5] fill-none" strokeDasharray="800" />
              <path d="M390 120 L430 127" className="flow-line stroke-[#fb923c]/50 stroke-[1.5] fill-none" strokeDasharray="800" />
              <path d="M390 195 L430 202" className="flow-line stroke-[#fb923c]/50 stroke-[1.5] fill-none" strokeDasharray="800" />
            </svg>
            
            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-gray-800">
                            <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs mono text-gray-400"><div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#818cf8]"></div>Presentation</span>
                            <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs mono text-gray-400"><div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#f472b6]"></div>Gateway</span>
                            <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs mono text-gray-400"><div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#fb923c]"></div>Services</span>
                            <span className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs mono text-gray-400"><div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#818cf8]"></div>Data</span>
            </div>
          </div>

          {/* Technical Details - Below Diagram */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {/* Architecture Overview */}
                                  <div className="space-y-3 p-3 sm:p-4 border border-gray-800 rounded-xl bg-[#030712]/40">
                          <div className="flex items-center gap-2">
                            <Cpu size={16} className="text-[#818cf8]" />
                            <h4 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wider">Architecture Overview</h4>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                High-concurrency IoT & ML pipeline architecture designed for real-time telemetry processing and automated defect detection at scale.
              </p>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-center gap-2">
                  <Zap size={14} className="text-[#f472b6]" />
                  <h5 className="text-xs font-bold text-gray-300 uppercase">Performance Metrics</h5>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 text-sm">
                    <span className="text-[#f472b6] font-bold shrink-0">/01</span>
                    <span className="text-gray-400"><strong className="text-gray-200">KRP_GATEWAY:</strong> Custom load balancer handling 1,000+ concurrent requests with optimized round-robin.</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="text-[#f472b6] font-bold shrink-0">/02</span>
                    <span className="text-gray-400"><strong className="text-gray-200">CACHE_LAYER:</strong> Redis-based acceleration reducing API latency by <span className="text-[#818cf8] font-bold">40%</span>.</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="text-[#f472b6] font-bold shrink-0">/03</span>
                    <span className="text-gray-400"><strong className="text-gray-200">YOLOv8_EDGE:</strong> ML processing achieving <span className="text-[#818cf8] font-bold">95% accuracy</span> in defect detection.</span>
                  </li>
                  <li className="flex gap-3 text-sm">
                    <span className="text-[#f472b6] font-bold shrink-0">/04</span>
                    <span className="text-gray-400"><strong className="text-gray-200">MQTT_BROKER:</strong> Real-time sensor streaming with QoS Level 2 guaranteed delivery.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Architecture Layers */}
                                                <div className="space-y-3 p-3 sm:p-4 border border-gray-800 rounded-xl bg-[#030712]/40">
                                                  <div className="flex items-center gap-2">
                                                    <Share2 size={14} className="text-[#818cf8]" />
                            <h4 className="text-xs sm:text-sm font-bold text-gray-200 uppercase tracking-wider">Layer Breakdown</h4>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {architectureLayers.map((layer, idx) => {
                  const LayerIcon = layer.icon;
                  return (
                    <div key={idx} className="p-3 border border-gray-800 rounded-lg hover:border-[#818cf8]/30 transition-all hover:bg-[#818cf8]/5">
                      <div className="flex items-center gap-2 mb-2">
                        <LayerIcon size={14} style={{ color: layer.color }} />
                        <p className="text-xs font-bold mono" style={{ color: layer.color }}>{layer.layer}</p>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {layer.items.map((item, i) => (
                          <span key={i} className="text-[11px] mono px-2 py-0.5 bg-gray-900 text-gray-400 rounded border border-gray-800">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="flex flex-wrap justify-between items-center gap-3 pt-3 text-xs mono text-gray-500 border-t border-[#818cf8]/10">
          <span className="flex items-center gap-1.5">
            <Cloud size={12} className="text-[#818cf8]" />
            Deployed: AWS / GCP — Docker
          </span>
          <span className="flex items-center gap-1.5">
            <Shield size={12} className="text-[#fb923c]" />
            Security: JWT — Rate Limit — Encrypted
          </span>
          <span>Last sync: 2026</span>
        </div>
      </div>
    </OSWindow>
  );
}
