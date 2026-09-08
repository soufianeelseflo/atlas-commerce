import type { ReactNode } from "react";
import { AdminNav } from "@/components/admin/admin-nav";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f3f2ee] lg:grid lg:grid-cols-[240px_1fr]">
      <AdminNav />
      <main className="min-w-0">{children}</main>
    </div>
  );
}
