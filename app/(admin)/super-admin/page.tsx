// app/(admin)/super-admin/page.tsx
"use client";

import SuperAdminDashboard from "@/components/admin/SuperAdminDashboard";

export default function SuperAdminPage() {
  return (
    <div className="flex h-screen">
      <SuperAdminDashboard />
    </div>
  );
}
