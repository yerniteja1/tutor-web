"use client";

import { Search, User, ChevronDown } from "lucide-react";
import { mockAdmin } from "@/lib/mock-dashboard";

export default function TopBar() {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">

      {/* Left — Admin Dropdown + Nav Links */}
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-gray-900">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          {mockAdmin.name}
          <ChevronDown size={14} className="text-gray-400" />
        </button>
        <nav className="flex items-center gap-5">
          {["Customers", "Support", "Settings"].map((link) => (
            <button
              key={link}
              className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
              {link}
            </button>
          ))}
        </nav>
      </div>

      {/* Right — Search + User */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 w-72 bg-gray-50">
          <Search size={15} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Find Student by Name , ID or Mobile No"
            className="bg-transparent text-sm text-gray-600 placeholder:text-gray-400 outline-none w-full"
          />
        </div>
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">
          <User size={16} className="text-gray-500" />
        </button>
      </div>

    </header>
  );
}