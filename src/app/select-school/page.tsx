import SchoolSelector from "@/components/auth/SchoolSelector";
import AuthLayout from "@/components/layout/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout>
      <SchoolSelector />
    </AuthLayout>
  );
}
