import OSWindow from "./OSWindow";
import { BookOpen, ExternalLink, Hash, PenTool, Calendar, TrendingUp, Code, Cloud, Bot, Wifi } from "lucide-react";

export default function TechnicalWritingNode() {
  const blogs = [
    { 
      title: "Keeping Your Render Server Awake Using Cron Jobs", 
      topic: "DevOps • Cloud Computing", 
      date: "Jul 2025",
      link: "https://medium.com/@aryanbarde80/keeping-your-render-server-awake-using-cron-jobs-7c3f8e2a9b4d",
      icon: Cloud,
      excerpt: "How to prevent free tier Render services from sleeping using automated cron job pings."
    },
    { 
      title: "Full-Stack Development Architectures", 
      topic: "Next.js • Frappe Integration", 
      date: "Nov 2025",
      link: "https://medium.com/@aryanbarde80",
      icon: Code,
      excerpt: "Deep dive into modern full-stack architectures with Next.js and Frappe framework integration patterns."
    },
    { 
      title: "IoT Systems & Real-time Telemetry", 
      topic: "MQTT • ESP32 Protocols", 
      date: "Oct 2025",
      link: "https://medium.com/@aryanbarde80",
      icon: Wifi,
      excerpt: "Building robust IoT pipelines with MQTT protocol and ESP32 microcontroller telemetry systems."
    },
    { 
      title: "AI/ML Applications in Enterprise", 
      topic: "YOLOv8 • Computer Vision", 
      date: "Dec 2025",
      link: "https://medium.com/@aryanbarde80",
      icon: Bot,
      excerpt: "Implementing YOLOv8 for manufacturing defect detection with 95% accuracy in production environments."
    },
    { 
      title: "Cloud Computing & DevSecOps", 
      topic: "AWS Architecture • Security", 
      date: "Dec 2025",
      link: "https://medium.com/@aryanbarde80",
      icon: Cloud,
      excerpt: "Best practices for cloud security architecture and DevSecOps implementation strategies."
    }
  ];

  const totalArticles = blogs.length;
  const latestDate = blogs[0].date;

  return (
    <OSWindow title="PUBLISH/TECH_BLOGS.BIN" icon={<BookOpen size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-5">
        
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center gap-2 pb-2 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <PenTool size={12} className="text-[#ffaa44]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">ALFASTACK_TECHNICAL_BLOGS</span>
          </div>
          <div className="flex gap-2 text-[9px] sm:text-[10px] mono">
            <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">{totalArticles} ARTICLES</span>
            <span className="text-[#ffaa44] bg-[#ffaa44]/10 px-2 py-0.5 rounded">PUBLISHED</span>
          </div>
        </div>

        {/* Description */}
        <div className="relative p-3 bg-gradient-to-r from-[#00f0ff]/5 to-transparent border-l-2 border-[#00f0ff] rounded-r-lg">
          <p className="text-gray-400 text-[10px] sm:text-[11px] leading-relaxed">
            &quot;Researched, authored, and published technical articles on software development, 
            IoT systems, AI/ML applications, and cloud computing for the Alfastack developer community.&quot;
          </p>
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-[#00f0ff]/10 to-transparent pointer-events-none rounded-tr-lg" />
        </div>

        {/* Blog List */}
        <div className="space-y-3">
          {blogs.map((blog, idx) => {
            const IconComponent = blog.icon;
            return (
              <a 
                key={idx}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block border border-gray-800 hover:border-[#00f0ff]/50 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#00f0ff]/5 overflow-hidden cursor-pointer"
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/0 via-[#00f0ff]/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                
                <div className="relative p-3">
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <IconComponent size={12} className="text-[#00f0ff] group-hover:scale-110 transition-transform" />
                        <h4 className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-[#00f0ff] transition-colors truncate">
                          {blog.title}
                        </h4>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-gray-500 leading-relaxed line-clamp-2 mb-2">
                        {blog.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-[8px] sm:text-[9px] mono text-[#ff003c] flex items-center gap-1">
                          <Hash size={8} /> {blog.topic}
                        </span>
                        <span className="text-[7px] sm:text-[8px] text-gray-600 flex items-center gap-1">
                          <Calendar size={8} /> {blog.date}
                        </span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <ExternalLink size={12} className="text-gray-600 group-hover:text-[#00f0ff] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
                
                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f0ff]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            );
          })}
        </div>

        {/* Footer - Writing Stats */}
        <div className="flex flex-wrap justify-between items-center gap-3 pt-3 border-t border-[#00f0ff]/20 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <TrendingUp size={10} className="text-[#00f0ff]" />
              <span className="text-gray-500">TOTAL_VIEWS: 5.2K+</span>
            </span>
            <span className="flex items-center gap-1">
              <BookOpen size={10} className="text-[#ffaa44]" />
              <span className="text-gray-500">READ_TIME: ~15 min avg</span>
            </span>
          </div>
          <div className="text-gray-600 flex items-center gap-1">
            <PenTool size={8} />
            <span>LATEST: {latestDate}</span>
          </div>
        </div>

        {/* Medium Profile Link */}
        <a 
          href="https://medium.com/@aryanbarde80"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center py-2 mt-2 border border-gray-700 hover:border-[#00f0ff] rounded-lg text-gray-500 hover:text-[#00f0ff] transition-all text-[9px] sm:text-[10px] mono uppercase tracking-wider"
        >
          [ VIEW_MEDIUM_PROFILE → ]
        </a>
      </div>
    </OSWindow>
  );
}