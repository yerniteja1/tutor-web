import DashboardLayout from "@/components/dashboard/DashboardLayout";
import CollectionCard from "@/components/dashboard/cards/CollectionCard";
import FeeStatusCard from "@/components/dashboard/cards/FeeStatusCard";
import StatCard from "@/components/dashboard/cards/StatCard";
import { mockStatCards } from "@/lib/mock-dashboard";
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
      <div className="flex flex-col gap-4">

        {/* Row 1 — Collection + Fee Status */}
        <div className="grid grid-cols-2 gap-4">
          <CollectionCard />
          <FeeStatusCard />
        </div>

        {/* Row 2 — 4 Stat Cards */}
        <div className="grid grid-cols-4 gap-4">
          {mockStatCards.map((card) => (
            <StatCard
              key={card.id}
              label={card.label}
              value={card.value}
              sub={card.sub}
              icon={card.icon}
              progress={card.progress}
            />
          ))}
        </div>

        {/* More cards coming soon */}

      </div>
    </DashboardLayout>
  );
}