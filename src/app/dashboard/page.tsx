import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Calendar } from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout
      title="Dashboard"
      action={
        <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-1.5 bg-white">
          <Calendar size={15} className="text-gray-400" />
          <span>Academic Year 2023-24</span>
        </div>
      }
    >
      <p className="text-gray-400 text-sm">Cards coming soon</p>
    </DashboardLayout>
  );
}