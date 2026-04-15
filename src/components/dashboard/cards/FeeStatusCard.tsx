import { ChevronDown } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { mockFeeStatus } from "@/lib/mock-dashboard";

export default function FeeStatusCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-4">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-gray-900">
          School Fee Collection Status
        </h3>
        <button className="flex items-center gap-1 text-sm text-gray-500 border border-gray-200 rounded-lg px-2 py-1">
          July <ChevronDown size={13} />
        </button>
      </div>

      {/* Percent + Students */}
      <div className="flex items-center justify-between">
        <span className="text-4xl font-extrabold text-gray-900">
          {mockFeeStatus.percent}%
        </span>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <span>👥</span>
          <span>{mockFeeStatus.totalStudents}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <Progress 
        value={mockFeeStatus.percent} 
        className="h-2 bg-gray-100 rounded-full [&>div]:bg-[#1BC469]" 
      />

      {/* Collected + Overdue */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          <span className="text-gray-500">
            Fee Collected:{" "}
            <span className="font-semibold text-gray-800">
              {mockFeeStatus.collected}
            </span>
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 inline-block" />
          <span className="text-gray-500">
            Overdue:{" "}
            <span className="font-semibold text-gray-800">
              {mockFeeStatus.overdue}
            </span>
          </span>
        </div>
      </div>

    </div>
  );
}