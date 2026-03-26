"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import OSWindow from "./OSWindow";
import { Github, GitFork, Star, Users, BookOpen, ExternalLink, Trophy, Zap, Calendar, Code, Award } from "lucide-react";

const FALLBACK_PROFILE = {
  login: "aryanbarde80",
  name: "Aryan Barde",
  avatar_url: "https://avatars.githubusercontent.com/u/aryanbarde80",
  bio: "Discipline and Consistency is all what is needed!",
  public_repos: 89,
  followers: 35,
  following: 20,
  created_at: "2022-06-01T00:00:00Z",
  public_gists: 0,
  html_url: "https://github.com/aryanbarde80",
  company: null
};

const FALLBACK_REPOS = [
  { id: 1, name: "aryanOS-2.0", description: "AI-OS themed portfolio with terminal interface", html_url: "https://github.com/aryanbarde80/aryanOS-2.0", language: "JavaScript", stargazers_count: 2, forks_count: 0, pushed_at: new Date().toISOString(), fork: false },
  { id: 2, name: "IoT-Smart-Agriculture", description: "ESP32-based smart agriculture monitoring system", html_url: "https://github.com/aryanbarde80/IoT-Smart-Agriculture", language: "C++", stargazers_count: 3, forks_count: 1, pushed_at: new Date().toISOString(), fork: false },
  { id: 3, name: "AI-Defect-Detection", description: "YOLOv8-based manufacturing defect detection pipeline", html_url: "https://github.com/aryanbarde80/AI-Defect-Detection", language: "Python", stargazers_count: 1, forks_count: 0, pushed_at: new Date().toISOString(), fork: false },
  { id: 4, name: "RoomieQ-Platform", description: "Full-stack room booking platform with real-time availability", html_url: "https://github.com/aryanbarde80/RoomieQ-Platform", language: "JavaScript", stargazers_count: 2, forks_count: 0, pushed_at: new Date().toISOString(), fork: false },
];

export default function GitHubStatsNode() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    Promise.all([
      fetch("https://api.github.com/users/aryanbarde80", { signal: controller.signal }).then(r => r.json()),
      fetch("https://api.github.com/users/aryanbarde80/repos?sort=pushed&per_page=8", { signal: controller.signal }).then(r => r.json())
    ]).then(([profileData, reposData]) => {
      clearTimeout(timeout);
      // Check for rate-limit or error responses
      if (profileData && profileData.login) {
        setProfile(profileData);
        setIsLive(true);
      } else {
        setProfile(FALLBACK_PROFILE);
      }
      const filteredRepos = Array.isArray(reposData) 
        ? reposData.filter(r => !r.fork && r.name !== 'demo-portfolio' && r.name !== 'aryanbarde80')
        : [];
      setRepos(filteredRepos.length > 0 ? filteredRepos : FALLBACK_REPOS);
      setIsLoading(false);
    }).catch(() => {
      clearTimeout(timeout);
      setProfile(FALLBACK_PROFILE);
      setRepos(FALLBACK_REPOS);
      setIsLoading(false);
    });

    return () => { clearTimeout(timeout); controller.abort(); };
  }, []);

  // Key achievements from GitHub profile
  const achievements = [
    { name: "TCS CodeVita 2025", value: "AIR 4900+", icon: Trophy, color: "#ffaa44" },
    { name: "TechSynergy IoT", value: "2nd Place", icon: Award, color: "#00f0ff" },
    { name: "Hacktoberfest 2024", value: "4 PRs Merged", icon: GitFork, color: "#ff003c" },
    { name: "Code360 Leaderboard", value: "3x College Topper", icon: Zap, color: "#ffaa44" }
  ];

  if (isLoading) {
    return (
      <OSWindow title="NETWORK/GITHUB.SYS" icon={<Github size={16} className="text-[#00f0ff] animate-pulse" />}>
        <div className="flex justify-center items-center h-64">
          <div className="text-[#00f0ff] mono animate-pulse">FETCHING_GITHUB_DATA...</div>
        </div>
      </OSWindow>
    );
  }

  if (!profile) return null;

  return (
    <OSWindow title="NETWORK/GITHUB.SYS" icon={<Github size={16} className="text-[#00f0ff] animate-pulse" />} width="max-w-5xl">
      <div className="space-y-6">
        
        {/* Data Source Indicator */}
        {!isLive && (
          <div className="flex items-center gap-2 text-[9px] mono text-gray-500 bg-gray-900/50 px-3 py-1.5 rounded-md border border-gray-800">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ffaa44]"></div>
            CACHED_DATA — GitHub API rate-limited. Showing last known stats.
          </div>
        )}

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-5 p-5 border border-[#00f0ff]/20 bg-gradient-to-r from-[#030712] to-[#0a0f1a] rounded-xl">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#00f0ff] shadow-[0_0_25px_rgba(0,240,255,0.4)] overflow-hidden">
            <Image 
              src={profile.avatar_url} 
              alt="GitHub Avatar" 
              fill
              className="object-cover"
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{profile.name || profile.login}</h3>
              <span className="text-[10px] mono px-2 py-1 bg-[#00f0ff]/10 text-[#00f0ff] rounded-full flex items-center gap-1">
                <Github size={10} /> @{profile.login}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 italic">&ldquo;{profile.bio || "Discipline and Consistency is all what is needed!"}&rdquo;</p>
            {profile.company && (
              <p className="text-[10px] sm:text-[11px] text-[#ff003c] mono flex items-center gap-1 justify-center md:justify-start">
                <Code size={10} /> {profile.company}
              </p>
            )}
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="p-2 sm:p-3 border border-[#00f0ff]/20 rounded-lg text-center hover:border-[#00f0ff]/60 transition-all hover:bg-[#00f0ff]/5">
              <p className="text-xl sm:text-2xl font-bold text-[#00f0ff]">{profile.public_repos}</p>
              <p className="text-[8px] sm:text-[9px] mono text-gray-500">REPOS</p>
            </div>
            <div className="p-2 sm:p-3 border border-[#00f0ff]/20 rounded-lg text-center hover:border-[#00f0ff]/60 transition-all hover:bg-[#00f0ff]/5">
              <p className="text-xl sm:text-2xl font-bold text-[#00f0ff]">{profile.followers}</p>
              <p className="text-[8px] sm:text-[9px] mono text-gray-500">FOLLOWERS</p>
            </div>
            <div className="p-2 sm:p-3 border border-[#00f0ff]/20 rounded-lg text-center hover:border-[#00f0ff]/60 transition-all hover:bg-[#00f0ff]/5">
              <p className="text-xl sm:text-2xl font-bold text-[#00f0ff]">{profile.following}</p>
              <p className="text-[8px] sm:text-[9px] mono text-gray-500">FOLLOWING</p>
            </div>
          </div>
        </div>

        {/* Achievements Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {achievements.map((ach, idx) => {
            const IconComp = ach.icon;
            return (
              <div key={idx} className="p-2 sm:p-3 border border-gray-800 rounded-lg text-center group hover:border-[#00f0ff]/40 transition-all hover:bg-[#00f0ff]/5">
                <IconComp size={18} className="mx-auto mb-1" style={{ color: ach.color }} />
                <p className="text-[10px] sm:text-[11px] font-bold text-white">{ach.value}</p>
                <p className="text-[8px] sm:text-[9px] text-gray-500">{ach.name}</p>
              </div>
            );
          })}
        </div>

        {/* Recent Repos */}
        <div>
          <h4 className="text-[#ff003c] mono text-xs sm:text-sm font-bold mb-3 flex items-center gap-2">
            <BookOpen size={14} /> RECENT_REPOSITORIES.LOG
            <span className="text-[8px] text-gray-500 ml-2">({repos.length} active)</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {repos.slice(0, 6).map((repo) => (
              <a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 border border-gray-800 hover:border-[#00f0ff]/50 rounded-lg bg-[#030712]/40 group transition-all hover:bg-[#00f0ff]/5"
              >
                <div className="flex justify-between items-start mb-2">
                  <h5 className="text-sm font-bold text-gray-200 group-hover:text-[#00f0ff] transition-colors truncate pr-2">
                    {repo.name.replace(/-/g, ' ')}
                  </h5>
                  <ExternalLink size={12} className="text-gray-600 group-hover:text-[#00f0ff] shrink-0" />
                </div>
                {repo.description && (
                  <p className="text-[10px] text-gray-500 line-clamp-2 mb-2">{repo.description.slice(0, 80)}</p>
                )}
                <div className="flex flex-wrap items-center gap-3 text-[9px] sm:text-[10px] mono text-gray-500">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full" style={{ 
                        background: repo.language === 'JavaScript' ? '#f7df1e' : 
                                    repo.language === 'Python' ? '#3776ab' : 
                                    repo.language === 'C++' ? '#f34b7d' : '#00f0ff'
                      }}></span>
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Star size={10} /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork size={10} /> {repo.forks_count}</span>
                  <span className="flex items-center gap-1"><Calendar size={10} /> {new Date(repo.pushed_at).toLocaleDateString()}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* GitHub Profile Link */}
        <a 
          href="https://github.com/aryanbarde80" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block text-center py-2.5 border border-gray-700 hover:border-[#00f0ff] text-gray-400 hover:text-[#00f0ff] transition-all mono text-xs sm:text-sm uppercase tracking-wider rounded-lg bg-[#030712]/40"
        >
          [ VIEW_FULL_PROFILE() ]
        </a>

        {/* Footer Stats */}
        <div className="flex flex-wrap justify-between items-center gap-2 pt-2 text-[8px] sm:text-[9px] mono text-gray-600 border-t border-[#00f0ff]/10">
          <span className="flex items-center gap-1">
            <Users size={10} className="text-[#00f0ff]" />
            JOINED: {new Date(profile.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1">
            <Zap size={10} className="text-[#ffaa44]" />
            TOTAL_CONTRIBUTIONS: {profile.public_repos + profile.public_gists} repos
          </span>
        </div>
      </div>
    </OSWindow>
  );
}
