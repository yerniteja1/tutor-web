import { mockAttendance } from "@/lib/mock-dashboard";

export default function AttendanceCard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {mockAttendance.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-2"
        >
          {/* Label + Icon */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-gray-700">{item.label}</p>
            <span className="text-gray-300 text-base">⊙</span>
          </div>

          {/* Percent */}
          <p className={`text-3xl font-extrabold ${item.color}`}>
            {item.percent}
          </p>

          {/* Count */}
          <p className="text-sm text-gray-500"><b>{item.count}</b> Students</p>

          {/* Divider */}
          <div className="pt-2">
            <p className="text-xs text-gray-400">{item.updated}</p>
          </div>
        </div>
      ))}
    </div>
  );
}