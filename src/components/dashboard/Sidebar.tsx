"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  School,
  BookOpen,
  GraduationCap,
  UserCheck,
  ClipboardList,
  BarChart2,
  CalendarCheck,
  FileText,
  ChevronDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { mockNavItems, mockSchool } from "@/lib/mock-dashboard";
import Image from "next/image";

const iconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={18} />,
  Users: <Users size={18} />,
  School: <School size={18} />,
  BookOpen: <BookOpen size={18} />,
  GraduationCap: <GraduationCap size={18} />,
  UserCheck: <UserCheck size={18} />,
  ClipboardList: <ClipboardList size={18} />,
  BarChart2: <BarChart2 size={18} />,
  CalendarCheck: <CalendarCheck size={18} />,
  FileText: <FileText size={18} />,
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-56 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* School Brand */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg items-center justify-center flex">
            <Image
              src="/school_badge.svg"
              alt="School Badge"
              height={32}
              width={32}
              className="object-contain"
              priority
            />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-900 leading-tight">
              {mockSchool.name}
            </p>
            <p className="text-xs text-gray-400">{mockSchool.id}</p>
          </div>
        </div>
        <ChevronDown size={14} className="text-gray-400" />
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-3 px-2">
        {mockNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.id}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2 rounded-lg mb-0.5 group transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={
                    isActive
                      ? "text-blue-600"
                      : "text-gray-400 group-hover:text-gray-600"
                  }
                >
                  {iconMap[item.icon]}
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.badge && (
                <Badge className="bg-blue-600 text-white text-xs px-1.5 py-0 h-5 min-w-5 flex items-center justify-center">
                  {item.badge}
                </Badge>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
