import OSWindow from "./OSWindow";
import { GitPullRequest, CheckCircle, GitBranch, Star } from "lucide-react";

export default function OpenSourceNode() {
  const contributions = [
    { repo: "JavaScript UI Library", type: "Feature Enhancement", status: "MERGED", lang: "JavaScript" },
    { repo: "Python Utility Toolkit", type: "Bug Fix + Docs", status: "MERGED", lang: "Python" },
    { repo: "React Component Library", type: "Feature Addition", status: "MERGED", lang: "TypeScript" },
    { repo: "Node.js REST Framework", type: "Documentation", status: "MERGED", lang: "JavaScript" }
  ];

  return (
    <OSWindow title="CONTRIB/OPEN_SOURCE.GIT" icon={<GitPullRequest size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 bg-green-500/5 border border-green-500/20 rounded">
          <CheckCircle size={16} className="text-green-400 shrink-0" />
          <div>
            <p className="text-xs font-bold text-green-400 mono">HACKTOBERFEST 2024 COMPLETE</p>
            <p className="text-[10px] text-gray-500 mono">4/4 Pull Requests Accepted</p>
          </div>
          <Star size={14} className="text-yellow-500 ml-auto animate-pulse" />
        </div>

        <div className="space-y-3">
          {contributions.map((c, idx) => (
            <div key={idx} className="flex items-center gap-3 p-2 border border-gray-800 hover:border-[#00f0ff]/30 rounded group transition-all">
              <GitBranch size={14} className="text-[#00f0ff] shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-200 truncate group-hover:text-[#00f0ff]">{c.repo}</p>
                <p className="text-[10px] text-gray-500 mono">{c.type}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[9px] mono text-gray-600">{c.lang}</span>
                <span className="text-[8px] mono px-1.5 py-0.5 bg-green-500/20 text-green-400 rounded-sm">{c.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </OSWindow>
  );
}
