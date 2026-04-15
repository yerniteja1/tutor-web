import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  action?: React.ReactNode;
}

export default function DashboardLayout({
  children,
  title,
  action,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Bar */}
        <TopBar />

        {/* Page Content */}
        <main className="flex-1 p-6">

          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {action && <div>{action}</div>}
          </div>

          {children}
        </main>

      </div>
    </div>
  );
}