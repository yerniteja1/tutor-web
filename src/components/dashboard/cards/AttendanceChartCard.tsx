"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  mockAttendanceChart,
  mockAttendanceSummary,
} from "@/lib/mock-dashboard";

export default function AttendanceChartCard() {
  const [selectedClass] = useState("Class");
  const [selectedDiv] = useState("Div");
  const maxValue = 100;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-4">
      <div className="flex gap-6 items-start">
        
        {/* Bar Chart Section (60% Width) */}
        <div className="flex-[0.6]">
          <h3 className="text-sm font-bold text-gray-900 mb-3">
            Students Attendance Status
          </h3>
          <div className="flex gap-3">
            {/* Y-axis Labels - h-20 for slightly more height */}
            <div className="flex flex-col justify-between h-20 py-1">
              {[100, 50, 0].map((tick) => (
                <span key={tick} className="text-[10px] text-gray-400 font-medium">
                  {tick}
                </span>
              ))}
            </div>

            {/* Bars Container */}
            <div className="flex-1 flex items-end gap-4">
              {mockAttendanceChart.map((item) => {
                const isThursday = item.day === "Thu";
                const barHeight = (item.present / maxValue) * 80; // 80px = h-20

                return (
                  <div key={item.day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full flex justify-center h-20 items-end">
                      <div
                        className={`w-7 rounded-sm transition-all ${
                          isThursday ? "bg-gray-900" : "bg-gray-400 hover:bg-gray-500"
                        }`}
                        style={{ height: `${barHeight}px` }}
                      />
                    </div>
                    <p className={`text-[11px] font-medium ${isThursday ? "text-gray-900 font-bold" : "text-gray-400"}`}>
                      {item.day}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Summary Section (40% Width) */}
        <div className="flex-[0.4] flex flex-col gap-4 pt-1">
          {/* Bigger, Full-Width Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-between text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 hover:bg-gray-100">
              {selectedClass} <ChevronDown size={14} className="text-gray-400" />
            </button>
            <button className="flex-1 flex items-center justify-between text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 hover:bg-gray-100">
              {selectedDiv} <ChevronDown size={14} className="text-gray-400" />
            </button>
          </div>
          
          {/* Status List */}
          <div className="space-y-2 px-1">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Present:</span>
              <span className="text-sm font-bold text-green-600">
                {mockAttendanceSummary.present}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Absent:</span>
              <span className="text-sm font-bold text-red-600">
                {mockAttendanceSummary.absent}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">Leave:</span>
              <span className="text-sm font-bold text-yellow-600">
                {mockAttendanceSummary.leave}
              </span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}