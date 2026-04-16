"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { mockNavItems } from "@/lib/mock-dashboard";
import Image from "next/image";
import { useAuth } from "@/lib/useAuth";
import { useEffect, useState } from "react";
import { auth } from "@/lib/auth";
import { api } from "@/lib/api";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Institution } from "@/types";

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
  const router = useRouter();
  const [institutions, setInstitutions] = useState<Institution[]>([]);
  const { institution, updateSession } = useAuth();

  useEffect(() => {
    const load = async () => {
      try {
        const token = auth.getToken();
        if (!token) return;
        const data = await api.getMyInstitutions(token);
        setInstitutions(data);
      } catch (err) {
        console.error(err);
      }
    };
    load();
  }, []);

  const handleSelectInstitution = async (instId: string) => {
    try {
      const token = auth.getToken();
      if (!token) return;

      const response = await api.selectInstitution(token, instId);
      
      auth.setToken(response.token);

      router.refresh(); 
      updateSession(response.token);
    } catch (err) {
      console.error("Failed to switch institution:", err);
    }
  };

  return (
    <aside className="w-56 min-h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* School Brand */}
      <div className="border-b border-gray-200">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors text-left outline-none">
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-8 h-8 rounded-lg shrink-0">
                <Image
                  src="/school_badge.svg"
                  alt="Logo"
                  height={32}
                  width={32}
                  className="object-contain"
                />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-gray-900 leading-tight truncate">
                  {institution?.name || "Select Institution"}
                </p>
                <p className="text-[10px] text-gray-400 truncate uppercase tracking-wider">
                  {institution?.code || "---"}
                </p>
              </div>
            </div>
            <ChevronDown size={14} className="text-gray-400 shrink-0" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="w-52">
            <p className="px-2 py-1.5 text-[10px] font-semibold text-gray-400 uppercase">
              Switch Institution
            </p>
            {institutions.map((inst) => (
              <DropdownMenuItem 
                key={inst.id} 
                onClick={() => handleSelectInstitution(inst.id)}
                className={`flex flex-col items-start gap-0.5 cursor-pointer ${inst.id === institution?.id ? 'bg-blue-50' : ''}`}
              >
                <span className="text-sm font-medium">{inst.name}</span>
                <span className="text-[10px] text-gray-400">{inst.code}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
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
                <span className={isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}>
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
