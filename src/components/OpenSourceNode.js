import OSWindow from "./OSWindow";
import { GitPullRequest, CheckCircle, GitBranch, Star, Github, Code, Users, Award, Calendar } from "lucide-react";

export default function OpenSourceNode() {
  const contributions = [
    { 
      repo: "Hacktoberfest 2024 Contributions", 
      type: "Multiple Open Source Projects", 
      status: "MERGED", 
      lang: "JavaScript/Python",
      details: "4 accepted pull requests across various repositories",
      mergedDate: "Oct 2024"
    },
    { 
      repo: "JavaScript Repositories", 
      type: "Bug Fixes & Feature Enhancements", 
      status: "MERGED", 
      lang: "JavaScript",
      details: "Fixed critical bugs and added feature enhancements",
      mergedDate: "Oct 2024"
    },
    { 
      repo: "Python Repositories", 
      type: "Documentation & Code Quality", 
      status: "MERGED", 
      lang: "Python",
      details: "Improved documentation and code quality standards",
      mergedDate: "Oct 2024"
    }
  ];

  const stats = {
    totalPRs: 4,
    hacktoberfestYear: 2024,
    contributions: "Bug fixes, Feature enhancements, Documentation"
  };

  return (
    <OSWindow title="CONTRIB/OPEN_SOURCE.GIT" icon={<GitPullRequest size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-5">
        
        {/* Header with Stats */}
        <div className="flex flex-wrap justify-between items-center gap-3 pb-3 border-b border-[#00f0ff]/20">
          <div className="flex items-center gap-2">
            <Github size={12} className="text-[#00f0ff]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">OPEN_SOURCE_CONTRIBUTIONS</span>
          </div>
          <div className="flex gap-2 text-[9px] sm:text-[10px] mono">
            <span className="text-[#00f0ff] bg-[#00f0ff]/10 px-2 py-0.5 rounded">{stats.totalPRs} PRs</span>
            <span className="text-[#ffaa44] bg-[#ffaa44]/10 px-2 py-0.5 rounded">Hacktoberfest {stats.hacktoberfestYear}</span>
          </div>
        </div>

        {/* Hacktoberfest Badge */}
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffaa44]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 bg-gradient-to-r from-[#ffaa44]/5 to-transparent border border-[#ffaa44]/20 rounded-xl hover:border-[#ffaa44]/50 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffaa44]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Award size={18} className="text-[#ffaa44]" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#ffaa44] mono flex items-center gap-2">
                  HACKTOBERFEST 2024 COMPLETE
                  <Star size={12} className="text-yellow-500 animate-pulse" />
                </p>
                <p className="text-[9px] sm:text-[10px] text-gray-400 mono">{stats.totalPRs}/4 Pull Requests Accepted</p>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <CheckCircle size={14} className="text-green-400" />
              <span className="text-[8px] sm:text-[9px] mono text-green-400">CERTIFIED_CONTRIBUTOR</span>
            </div>
          </div>
        </div>

        {/* Contributions List */}
        <div className="space-y-3">
          <h4 className="text-[10px] sm:text-[11px] mono text-[#ff003c] font-bold flex items-center gap-2">
            <GitBranch size={12} /> MERGED_PULL_REQUESTS.LOG
          </h4>
          
          <div className="space-y-2">
            {contributions.map((c, idx) => (
              <div key={idx} className="group relative p-3 border border-gray-800 hover:border-[#00f0ff]/40 rounded-lg bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#00f0ff]/5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  {/* Icon */}
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#00f0ff]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <GitPullRequest size={14} className="text-[#00f0ff]" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-[#00f0ff] transition-colors truncate">
                        {c.repo}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[8px] sm:text-[9px] mono px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-sm flex items-center gap-1">
                          <CheckCircle size={8} />
                          {c.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-[9px] sm:text-[10px] text-gray-500 mono mt-1">{c.type}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-[8px] sm:text-[9px] mono text-gray-600 flex items-center gap-1">
                        <Code size={8} />
                        {c.lang}
                      </span>
                      <span className="text-[7px] sm:text-[8px] text-gray-600 flex items-center gap-1">
                        <Calendar size={8} />
                        {c.mergedDate}
                      </span>
                      <span className="text-[7px] sm:text-[8px] text-gray-600">
                        {c.details}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contribution Summary */}
        <div className="mt-4 pt-3 border-t border-[#00f0ff]/20">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-2 text-center border border-gray-800 rounded-lg hover:border-[#00f0ff]/30 transition-all">
              <GitPullRequest size={14} className="text-[#00f0ff] mx-auto mb-1" />
              <p className="text-xs font-bold text-white">{stats.totalPRs}</p>
              <p className="text-[8px] text-gray-500">PULL REQUESTS</p>
            </div>
            <div className="p-2 text-center border border-gray-800 rounded-lg hover:border-[#00f0ff]/30 transition-all">
              <Users size={14} className="text-[#ffaa44] mx-auto mb-1" />
              <p className="text-xs font-bold text-white">4+</p>
              <p className="text-[8px] text-gray-500">PROJECTS</p>
            </div>
            <div className="p-2 text-center border border-gray-800 rounded-lg hover:border-[#00f0ff]/30 transition-all">
              <Star size={14} className="text-yellow-500 mx-auto mb-1" />
              <p className="text-xs font-bold text-white">ACCEPTED</p>
              <p className="text-[8px] text-gray-500">ALL MERGED</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap justify-between items-center gap-2 pt-2 text-[8px] sm:text-[9px] mono text-gray-600">
          <span className="flex items-center gap-1">
            <Github size={10} className="text-[#00f0ff]" />
            OPEN_SOURCE_CONTRIBUTOR
          </span>
          <span className="flex items-center gap-1">
            <Award size={10} className="text-[#ffaa44]" />
            HACKTOBERFEST 2024
          </span>
        </div>
      </div>
    </OSWindow>
  );
}