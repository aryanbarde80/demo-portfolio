import OSWindow from "./OSWindow";
import { Award, Trophy, Star, Medal } from "lucide-react";

export default function AchievementsNode() {
  const achievements = [
    { name: "TCS CodeVita Season 13", rank: "AIR 4905 in Round 2", date: "Dec 2025", icon: Trophy },
    { name: "Code360 Leaderboard", rank: "3-Time College Topper", date: "Feb 2025", icon: Star },
    { name: "TechSynergy IoT Showcase", rank: "Second Place at Gyanotsav 2025, GGITS", date: "Jan 2025", icon: Medal },
    { name: "Internship Performance", rank: "Rating of 5/5 - Excellent at Ouranos Robotics", date: "Oct 2025", icon: Award },
    { name: "Intern of the Month", rank: "Awarded at Ouranos Robotics", date: "Sep 2024", icon: Award },
    { name: "Hacktoberfest 2024", rank: "4 Accepted Pull Requests", date: "Oct 2024", icon: Award },
    { name: "College Coding Leaderboard", rank: "Consistent Top Performer", date: "2024-2025", icon: Star }
  ];

  return (
    <OSWindow title="ACHIEVEMENTS_&_AWARDS.LOG" icon={<Award size={16} className="text-[#ffaa44] animate-pulse" />}>
      <div className="w-full relative">
        <div className="absolute left-[7px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#ffaa44] via-[#00f0ff] to-transparent opacity-40"></div>
        <ul className="space-y-3 sm:space-y-4">
          {achievements.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <li key={idx} className="relative pl-6 sm:pl-8 group">
                <div className="absolute left-1 top-1.5 w-2 h-2 rounded-full bg-[#ffaa44] shadow-[0_0_8px_rgba(255,170,68,0.8)] group-hover:scale-150 transition-transform"></div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-[#00f0ff]/10 pb-2 sm:pb-3 group-hover:border-[#ffaa44]/40 transition-colors">
                  <div className="flex items-start gap-2 sm:gap-3 flex-1">
                    <IconComponent size={14} className="text-[#ffaa44] mt-1 flex-shrink-0 hidden sm:block" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-gray-200 font-bold text-sm sm:text-base tracking-wide group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] break-words">
                        {item.name}
                      </h4>
                      <p className="text-[#00f0ff] mono text-xs sm:text-sm mt-0.5 group-hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.4)] break-words">
                        {item.rank}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs mono text-gray-500 mt-2 sm:mt-0 ml-0 sm:ml-4 flex-shrink-0 group-hover:text-[#ffaa44] transition-colors">
                    {item.date}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        
        {/* Achievement Counter Badge */}
        <div className="mt-4 pt-3 border-t border-[#00f0ff]/20 flex justify-between items-center flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <Trophy size={12} className="text-[#ffaa44]" />
            <span className="text-[10px] mono text-gray-500">TOTAL_ACHIEVEMENTS: {achievements.length}</span>
          </div>
          <div className="flex items-center gap-2">
            <Medal size={12} className="text-[#00f0ff]" />
            <span className="text-[10px] mono text-gray-500">LAST_UPDATED: 2026</span>
          </div>
        </div>
      </div>
    </OSWindow>
  );
}