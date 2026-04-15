import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ComingSoon from "@/components/dashboard/ComingSoon";

export default function AttendancePage() {
  return (
    <DashboardLayout title="Attendance">
      <ComingSoon title="Attendance" />
    </DashboardLayout>
  );
}