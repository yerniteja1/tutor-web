import { Clock } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center flex-1 min-h-96 gap-3">
      <Clock size={40} className="text-gray-300" />
      <h2 className="text-xl font-semibold text-gray-400">{title}</h2>
      <p className="text-sm text-gray-400">This section is coming soon.</p>
    </div>
  );
}