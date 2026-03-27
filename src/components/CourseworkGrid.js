"use client";
import { useState } from "react";
import OSWindow from "./OSWindow";
import { BookMarked, GraduationCap, Code, Database, Network, Brain, Cloud, Shield, Cpu, Layout, CheckCircle2 } from "lucide-react";

export default function CourseworkGrid() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const courses = [
    { name: "Data Structures & Algorithms", category: "Core CS", icon: Code, semester: "III" },
    { name: "Operating Systems", category: "Core CS", icon: Cpu, semester: "IV" },
    { name: "Database Management Systems", category: "Core CS", icon: Database, semester: "IV" },
    { name: "Computer Networks", category: "Core CS", icon: Network, semester: "V" },
    { name: "Machine Learning", category: "Advanced", icon: Brain, semester: "VI" },
    { name: "Software Engineering", category: "Core CS", icon: Layout, semester: "V" },
    { name: "Object-Oriented Programming", category: "Core CS", icon: Code, semester: "III" },
    { name: "Internet & Web Technologies", category: "Web Dev", icon: Cloud, semester: "IV" },
    { name: "Cloud Computing", category: "Advanced", icon: Cloud, semester: "VII" },
    { name: "Cybersecurity & Network Defense", category: "Advanced", icon: Shield, semester: "VI" },
    { name: "IoT & Embedded Systems", category: "Advanced", icon: Cpu, semester: "VII" },
    { name: "Artificial Intelligence", category: "Advanced", icon: Brain, semester: "VI" },
    { name: "Computer Architecture", category: "Core CS", icon: Layout, semester: "III" },
    { name: "Design & Analysis of Algorithms", category: "Core CS", icon: Code, semester: "IV" },
    { name: "Distributed Systems", category: "Advanced", icon: Network, semester: "VII" },
    { name: "Big Data Analytics", category: "Advanced", icon: Database, semester: "VII" }
  ];

  // Group courses by category
  const categories = {
    "Core CS": courses.filter(c => c.category === "Core CS"),
    "Advanced": courses.filter(c => c.category === "Advanced"),
    "Web & Cloud": courses.filter(c => c.category === "Web Dev")
  };

  const totalCourses = courses.length;
  const categoryColors = {
    "Core CS": "#818cf8",
    "Advanced": "#f472b6",
    "Web & Cloud": "#fb923c"
  };

  return (
    <OSWindow title="Coursework" icon={<BookMarked size={16} className="text-[#818cf8]" />}>
      <div className="space-y-2">
        
        {/* Header with Stats & Progress */}
        <div className="flex justify-between items-center pb-1.5 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <GraduationCap size={12} className="text-[#fb923c]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">B.TECH CSE</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1">
              <div className="w-16 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#818cf8] to-[#f472b6]" style={{ width: '100%' }}></div>
              </div>
              <span className="text-[8px] mono text-green-500">100%</span>
            </div>
            <div className="text-[9px] sm:text-[10px] mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded flex items-center gap-1">
              <CheckCircle2 size={9} className="text-green-500" />
              {totalCourses} Courses
            </div>
          </div>
        </div>

        {/* Course Categories */}
        {Object.entries(categories).map(([category, categoryCourses]) => (
          categoryCourses.length > 0 && (
            <div key={category} className="space-y-1">
              <h4 className="text-[9px] sm:text-[10px] mono tracking-wider flex items-center gap-2" style={{ color: categoryColors[category] || '#818cf8' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: categoryColors[category] || '#818cf8' }}></span>
                {category}
                <span className="text-[8px] text-gray-600">({categoryCourses.length})</span>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-700/40 to-transparent"></div>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {categoryCourses.map((course, idx) => {
                  const IconComponent = course.icon;
                  const globalIdx = courses.indexOf(course);
                  return (
                    <div 
                      key={idx}
                      onMouseEnter={() => setHoveredIdx(globalIdx)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="group flex items-center gap-2 p-1.5 border border-gray-800/50 hover:border-[#818cf8]/40 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#818cf8]/5 cursor-default"
                      style={hoveredIdx === globalIdx ? { boxShadow: `0 0 12px ${categoryColors[category]}15` } : {}}
                    >
                      <div className="flex-shrink-0 p-0.5">
                        <IconComponent size={11} className="text-[#818cf8]/60 group-hover:text-[#818cf8] transition-all group-hover:scale-110" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-gray-300 group-hover:text-white transition-colors flex-1 leading-tight">
                        {course.name}
                      </span>
                      <span className="text-[7px] sm:text-[8px] mono text-gray-600 group-hover:text-[#818cf8]/60 transition-colors shrink-0">
                        SEM {course.semester}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        ))}

        {/* Footer */}
        <div className="mt-1.5 pt-1.5 border-t border-[#818cf8]/20 flex flex-wrap justify-between items-center gap-2 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-3">
            {Object.entries(categories).map(([cat, items]) => items.length > 0 && (
              <span key={cat} className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: categoryColors[cat] }}></div>
                <span className="text-gray-500">{cat}: {items.length}</span>
              </span>
            ))}
          </div>
          <span className="text-gray-600 flex items-center gap-1">
            <BookMarked size={8} />
            GGITS 2022-2026
          </span>
        </div>
      </div>
    </OSWindow>
  );
}
