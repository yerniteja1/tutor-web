import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-50">

      <header className="flex items-center justify-between border-b bg-white px-8 py-4 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-800">School Name</p>
            <p className="text-xs text-blue-500">SCH-001</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              className="text-sm border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center gap-4 px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl text-bold">Dashboard</h1>
        </div>
      </main>

    </div>
  );
}