import OSWindow from "./OSWindow";
import { BookMarked } from "lucide-react";

export default function CourseworkGrid() {
  const courses = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Database Management",
    "Computer Networks",
    "Machine Learning",
    "Software Engineering",
    "Object-Oriented Programming",
    "Internet & Web Technologies"
  ];

  return (
    <OSWindow title="ACADEMICS/COURSEWORK.SYL" icon={<BookMarked size={16} className="text-[#00f0ff] animate-pulse" />}>
      <div className="grid grid-cols-2 gap-2">
        {courses.map((course, idx) => (
          <div key={idx} className="flex items-center gap-2 p-2 border border-gray-800/50 hover:border-[#00f0ff]/30 rounded group transition-all bg-[#030712]/40 hover:bg-[#00f0ff]/5">
            <span className="text-[#00f0ff] mono text-[9px] opacity-50 group-hover:opacity-100 shrink-0">[{String(idx + 1).padStart(2, '0')}]</span>
            <span className="text-[10px] sm:text-xs text-gray-300 group-hover:text-[#00f0ff] transition-colors">{course}</span>
          </div>
        ))}
      </div>
    </OSWindow>
  );
}
