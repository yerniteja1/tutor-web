import DashboardLayout from "@/components/dashboard/DashboardLayout";
import PeopleManagement from "@/components/dashboard/PeopleManagement";

export default function PeopleManagementPage() {
  return (
    <DashboardLayout title="People Management">
      <PeopleManagement />
    </DashboardLayout>
  );
}