import OSWindow from "./OSWindow";
import { BookMarked, GraduationCap, Code, Database, Network, Brain, Cloud, Shield, Cpu, Layout } from "lucide-react";

export default function CourseworkGrid() {
  const courses = [
    { name: "Data Structures & Algorithms", category: "Core CS", icon: Code },
    { name: "Operating Systems", category: "Core CS", icon: Cpu },
    { name: "Database Management Systems", category: "Core CS", icon: Database },
    { name: "Computer Networks", category: "Core CS", icon: Network },
    { name: "Machine Learning", category: "Advanced", icon: Brain },
    { name: "Software Engineering", category: "Core CS", icon: Layout },
    { name: "Object-Oriented Programming", category: "Core CS", icon: Code },
    { name: "Internet & Web Technologies", category: "Web Dev", icon: Cloud },
    { name: "Cloud Computing", category: "Advanced", icon: Cloud },
    { name: "Cybersecurity & Network Defense", category: "Advanced", icon: Shield },
    { name: "IoT & Embedded Systems", category: "Advanced", icon: Cpu },
    { name: "Artificial Intelligence", category: "Advanced", icon: Brain },
    { name: "Computer Architecture", category: "Core CS", icon: Layout },
    { name: "Design & Analysis of Algorithms", category: "Core CS", icon: Code },
    { name: "Distributed Systems", category: "Advanced", icon: Network },
    { name: "Big Data Analytics", category: "Advanced", icon: Database }
  ];

  // Group courses by category
  const categories = {
    "Core CS": courses.filter(c => c.category === "Core CS"),
    "Advanced": courses.filter(c => c.category === "Advanced"),
    "Web & Cloud": courses.filter(c => c.category === "Web Dev")
  };

  const totalCourses = courses.length;

  return (
    <OSWindow title="Coursework" icon={<BookMarked size={16} className="text-[#818cf8]" />}>
      <div className="space-y-4">
        
        {/* Header with Stats */}
        <div className="flex justify-between items-center pb-2 border-b border-[#818cf8]/20">
          <div className="flex items-center gap-2">
            <GraduationCap size={12} className="text-[#fb923c]" />
            <span className="text-[9px] sm:text-[10px] mono text-gray-500">B.TECH CSE • CURRICULUM</span>
          </div>
          <div className="text-[9px] sm:text-[10px] mono text-[#818cf8] bg-[#818cf8]/10 px-2 py-0.5 rounded">
            {totalCourses} Courses
          </div>
        </div>

        {/* Course Categories */}
        {Object.entries(categories).map(([category, categoryCourses]) => (
          categoryCourses.length > 0 && (
            <div key={category} className="space-y-2">
              <h4 className="text-[9px] sm:text-[10px] mono text-[#f472b6] tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#f472b6] animate-pulse"></span>
                {category}
                <span className="text-[8px] text-gray-600">({categoryCourses.length})</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {categoryCourses.map((course, idx) => {
                  const IconComponent = course.icon;
                  return (
                    <div 
                      key={idx} 
                      className="group flex items-center gap-2 p-2 border border-gray-800/50 hover:border-[#818cf8]/40 rounded-lg transition-all duration-300 bg-gradient-to-r from-[#030712] to-transparent hover:bg-[#818cf8]/5 cursor-default"
                    >
                      <div className="flex-shrink-0">
                        <IconComponent size={12} className="text-[#818cf8]/60 group-hover:text-[#818cf8] transition-colors" />
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-gray-300 group-hover:text-white transition-colors flex-1">
                        {course.name}
                      </span>
                      <span className="text-[7px] sm:text-[8px] mono text-gray-600 group-hover:text-[#818cf8]/60 transition-colors">
                        {course.category === "Core CS" ? "CORE" : course.category === "Advanced" ? "ADV" : "WEB"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        ))}

        {/* Footer - Additional Info */}
        <div className="mt-3 pt-3 border-t border-[#818cf8]/20 flex flex-wrap justify-between items-center gap-2 text-[8px] sm:text-[9px] mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#818cf8]"></div>
              <span className="text-gray-500">Core CS: {categories["Core CS"].length}</span>
            </span>
            <span className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f472b6]"></div>
              <span className="text-gray-500">Advanced: {categories["Advanced"].length}</span>
            </span>
          </div>
          <span className="text-gray-600 flex items-center gap-1">
            <BookMarked size={8} />
            GGITS • 2022-2026
          </span>
        </div>
      </div>
    </OSWindow>
  );
}
