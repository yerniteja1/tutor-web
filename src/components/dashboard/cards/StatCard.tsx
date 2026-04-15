import { Progress } from "@/components/ui/progress";

interface StatCardProps {
  label: string;
  value: string;
  sub: string;
  icon: string;
  progress: number;
}

export default function StatCard({
  label,
  value,
  sub,
  icon,
  progress,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-2">

      {/* Label + Icon */}
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">{label}</p>
        <span className="text-base text-gray-400">{icon}</span>
      </div>

      {/* Value */}
      <p className="text-2xl font-extrabold text-gray-900">{value}</p>

      {/* Sub + Progress */}
      <div className="flex flex-col gap-4">
        <p className="text-xs text-gray-400">{sub}</p>
        <Progress value={progress} className="h-2 bg-gray-100 rounded-full" />
      </div>

    </div>
  );
}