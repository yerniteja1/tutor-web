import { mockCollection } from "@/lib/mock-dashboard";

export default function CollectionCard() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-center">

      {/* Left */}
      <div className="basis-[70%] flex flex-col gap-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            {mockCollection.greeting}
          </h2>
          <p className="text-sm text-gray-400">{mockCollection.subtitle}</p>
        </div>

        <div className="flex gap-4">
          {/* July Collection */}
          <div className="bg-gray-200 rounded-md px-4 py-3 flex-1">
            <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">July Collection</p>
            <p className="text-xl font-bold text-gray-900">
              {mockCollection.julyCollection}
            </p>
          </div>
          {/* Total Amount */}
          <div className="bg-gray-200 rounded-md px-4 py-3 flex-1">
            <p className="text-[10px] uppercase font-bold text-gray-500 mb-1">Total Amount</p>
            <p className="text-xl font-bold text-gray-900">
              {mockCollection.totalAmount}
            </p>
          </div>
        </div>
      </div>

      {/* Right — Bar Chart */}
      <div className="basis-[30%] flex items-end justify-center gap-3">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-gray-700">
            {mockCollection.julyPercent}%
          </span>
          <div
            className="w-8 rounded-md bg-slate-900"
            style={{ height: 110 }}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold text-gray-700">
            {mockCollection.remainPercent}%
          </span>
          <div
            className="w-8 rounded-md bg-red-400"
            style={{ height: 32 }}
          />
        </div>
      </div>

    </div>
  );
}
