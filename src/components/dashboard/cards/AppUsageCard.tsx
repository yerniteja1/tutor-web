import { mockAppUsage } from "@/lib/mock-dashboard";

export default function AppUsageCard() {
  const weeks = ["Week 1", "Week 2", "Week 3", "Week 4"];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 h-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold text-gray-900">App Usage</h3>
        <span className="text-[12px] text-gray-400">in the last 30 days</span>
      </div>

      {/* Stats Header from mockAppUsage */}
      <div className="grid grid-cols-3 border border-gray-100 rounded-xl p-2">
        {mockAppUsage.map((item) => (
          <div key={item.app} className="text-center border-r last:border-r-0 border-gray-100">
            <p className="text-[12px] text-gray-400 mb-1">{item.app}</p>
            <p className="text-2xl font-bold text-gray-900">{item.count}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <div className="flex items-center justify-between h-24">
        {weeks.map((week, weekIndex) => (
          <div key={week} className="flex flex-col items-center gap-2 flex-1">
            <div className="flex items-end gap-1 h-24">
              {mockAppUsage.map((appData) => (
                <div
                  key={appData.app}
                  className="w-5 rounded-sm"
                  style={{ 
                    height: `${appData.weeks[weekIndex]}%`, 
                    backgroundColor: appData.color 
                  }}
                />
              ))}
            </div>
            <span className="text-[12px] text-gray-400">{week}</span>
          </div>
        ))}

        {/* Legend from mockAppUsage */}
        <div className="flex flex-col gap-1.5">
          {mockAppUsage.map((item) => (
            <div key={item.app} className="flex items-center gap-2">
              <div 
                className="w-3 h-3" 
                style={{ backgroundColor: item.color }} 
              />
              <span className="text-[12px] text-gray-400">{item.app}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}