import { ChevronRight } from "lucide-react";
import { mockEvents } from "@/lib/mock-dashboard";

export default function EventsCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-gray-900">Today's Events</h3>
        <button className="p-1 hover:bg-gray-50 rounded border border-gray-100">
          <ChevronRight size={16} className="text-gray-400" />
        </button>
      </div>

      <div className="border border-gray-100 rounded-lg overflow-hidden">
        {mockEvents.map((event, index) => (
          <div
            key={event.id}
            className={`flex items-center justify-between p-4 ${
              index !== mockEvents.length - 1 ? "border-b border-gray-100" : ""
            }`}
          >
            <span className="text-sm font-semibold text-gray-800">{event.name}</span>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>{event.date}</span>
              <span className="text-gray-200">|</span>
              <span>{event.classes}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}