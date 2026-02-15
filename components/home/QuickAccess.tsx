import { Monitor, BookOpen, GraduationCap, Briefcase } from "lucide-react";
import Link from "next/link";

const items = [
  { icon: Monitor, label: "Elektron Universitet", href: "/lms" },
  { icon: BookOpen, label: "Elmi Kitabxana", href: "/library" },
  { icon: GraduationCap, label: "Təqaüd Proqramları", href: "/scholarships" },
  { icon: Briefcase, label: "Vakansiyalar", href: "/careers" },
];

export default function QuickAccess() {
  return (
    <div className="relative z-20 -mt-16 container mx-auto px-4 md:px-6">
      <div className="bg-white shadow-xl rounded-sm grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100 border border-gray-100">
        {items.map((item, idx) => (
          <Link 
            key={idx} 
            href={item.href}
            className="group flex flex-col items-center justify-center py-8 px-4 hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <item.icon className="w-8 h-8 text-sdu-blue mb-3 group-hover:text-sdu-gold transition-colors duration-300" strokeWidth={1.5} />
            <span className="text-sm font-semibold text-gray-800 uppercase tracking-wide text-center">
                {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
