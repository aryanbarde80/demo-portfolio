"use client";
import { useState, useEffect, useRef } from 'react';
import { Activity, Cpu, Zap, Network } from 'lucide-react';

export default function DiagnosticLog() {
  const [logs, setLogs] = useState([
    "> SYSTEM_INITIALIZATION_COMPLETE",
    "> CORE_ENGINES: ONLINE",
    "> PERFORMANCE_METRICS: OPTIMAL",
    "> READY_FOR_OPERATIONS"
  ]);
  
  const [connectionStatus, setConnectionStatus] = useState("ACTIVE");
  const [performanceScore, setPerformanceScore] = useState(99.9);
  const logContainerRef = useRef(null);

  // Dynamic system messages based on CV achievements
  const systemMessages = [
    // System Status
    "API_LATENCY: OPTIMIZED_40%",
    "DATABASE_INDEXING: ACTIVE",
    "REDIS_CACHE: HIT_RATE_92%",
    "WEBSOCKET_CONNECTION: STABLE",
    "MQTT_BROKER: PUBLISHING",
    "ESP32_FIRMWARE: SYNCED",
    
    // Performance Metrics
    "THROUGHPUT: 2.4k_REQ/SEC",
    "RESPONSE_TIME: 124ms",
    "CPU_UTILIZATION: 34%",
    "MEMORY_USAGE: 287MB",
    "NETWORK_IO: 45MB/S",
    
    // Security
    "FIREWALL: ACTIVE",
    "ENCRYPTION: AES-256",
    "JWT_TOKENS: VALIDATED",
    "RATE_LIMITING: ENABLED",
    
    // AI/ML
    "YOLOv8_MODEL: LOADED",
    "DEFECT_DETECTION: 95%_ACCURACY",
    "ML_PIPELINE: TRAINING",
    "INFERENCE_TIME: 23ms",
    
    // Cloud & DevOps
    "AWS_S3: SYNCED",
    "GCP_DEPLOY: SUCCESS",
    "DOCKER_CONTAINERS: 4_RUNNING",
    "CI/CD_PIPELINE: PASSED",
    
    // IoT
    "SENSOR_DATA: COLLECTING",
    "TELEMETRY_STREAM: ACTIVE",
    "MQTT_QOS: LEVEL_2",
    "FIRMWARE_VERSION: v2.1.0",
    
    // Achievements
    "TCS_CODEVITA: RANK_4905",
    "HACKTOBERFEST: 4_PRS_MERGED",
    "INTERN_OF_MONTH: AWARDED",
    "TECH_SYNERGY: 2ND_PLACE"
  ];

  // Dynamic status updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Add random system log
      const randomMessage = systemMessages[Math.floor(Math.random() * systemMessages.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      });
      
      setLogs(prev => [
        `[${timestamp}] > ${randomMessage}`,
        ...prev.slice(0, 19) // Keep last 20 logs
      ]);
      
      // Update performance score with slight variation
      setPerformanceScore(prev => {
        const variation = (Math.random() - 0.5) * 0.2;
        return Math.min(99.99, Math.max(98.5, prev + variation));
      });
      
      // Random connection status updates
      const statuses = ["ACTIVE", "OPTIMAL", "STABLE", "SYNCED"];
      if (Math.random() > 0.7) {
        setConnectionStatus(statuses[Math.floor(Math.random() * statuses.length)]);
      }
      
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Auto-scroll to bottom of logs
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = 0;
    }
  }, [logs]);

  // System stats
  const systemStats = [
    { label: "UPTIME", value: "99.98%", icon: Activity, color: "#818cf8" },
    { label: "PERFORMANCE", value: `${performanceScore.toFixed(1)}%`, icon: Zap, color: "#fb923c" },
    { label: "CONNECTION", value: connectionStatus, icon: Network, color: "#818cf8" },
    { label: "AGENTS", value: "8 ACTIVE", icon: Cpu, color: "#f472b6" }
  ];

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-[#030712] to-transparent rounded-lg border border-[#818cf8]/10 overflow-hidden">
      
      {/* Header with System Stats */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-3 border-b border-[#818cf8]/20 bg-black/30">
        <div className="flex items-center gap-2">
          <Activity size={14} className="text-[#818cf8] animate-pulse" />
          <span className="text-[10px] sm:text-[11px] mono font-bold text-[#818cf8] uppercase tracking-wider">
            System Diagnostics
          </span>
          <div className="h-4 w-px bg-[#818cf8]/30 mx-1"></div>
          <span className="text-[8px] sm:text-[9px] mono text-green-500 flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            LIVE
          </span>
        </div>
        
        {/* Quick Stats */}
        <div className="flex gap-3 text-[8px] sm:text-[9px] mono">
          {systemStats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div key={idx} className="flex items-center gap-1.5">
                <IconComp size={10} style={{ color: stat.color }} />
                <span className="text-gray-400">{stat.label}:</span>
                <span className="text-white font-bold">{stat.value}</span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Logs Container */}
      <div 
        ref={logContainerRef}
        className="flex-1 p-3 space-y-1 overflow-y-auto max-h-[300px] min-h-[200px] custom-scrollbar"
      >
        {logs.map((log, i) => {
          const isLatest = i === 0;
          const hasError = log.includes("ERROR") || log.includes("FAIL");
          const hasSuccess = log.includes("SUCCESS") || log.includes("COMPLETE") || log.includes("PASSED");
          const hasMetric = log.includes("%") || log.includes("ms") || log.includes("MB");
          
          return (
            <div 
              key={i} 
              className={`
                text-[9px] sm:text-[10px] font-mono 
                ${isLatest ? 'text-[#818cf8] font-bold animate-pulse' : ''}
                ${hasError ? 'text-[#f472b6]' : ''}
                ${hasSuccess && !isLatest ? 'text-green-500' : ''}
                ${hasMetric && !isLatest && !hasError ? 'text-[#fb923c]' : ''}
                ${!isLatest && !hasError && !hasSuccess && !hasMetric ? 'text-gray-500' : ''}
                transition-all duration-300
              `}
            >
              {log}
              {isLatest && (
                <span className="inline-block ml-2 w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-ping"></span>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Footer - System Info */}
      <div className="p-2 border-t border-[#818cf8]/10 bg-black/20 flex justify-between items-center text-[8px] sm:text-[9px] mono text-gray-600">
        <div className="flex items-center gap-2">
            <span>Logs: {logs.length}</span>
            <span>v9.1.4</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="tabular-nums">Active</span>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 240, 255, 0.05);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 240, 255, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 240, 255, 0.5);
        }
      `}</style>
    </div>
  );
}
