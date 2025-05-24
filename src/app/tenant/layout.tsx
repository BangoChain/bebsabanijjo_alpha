// app/tenant/layout.tsx
// import React from "react";
// import AuthProvider from "@/app/(components)/auth/AuthProvider";
// export default function TenantLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       {" "}
//       <AuthProvider>{children} </AuthProvider>
//     </>
//   );
// }
"use client";

import React from "react";
// import Sidebar from "@/components/Sidebar";
import TenantNavbar from "@/app/(components)/commons/TenantNavbar";
import TenantSidebar from "@/app/(components)/commons/TenantSidebar";
import AuthProvider from "@/app/(components)/auth/AuthProvider";
import { useAppSelector } from "@/store/hooks";

export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <AuthProvider>
      <div className="flex min-h-screen">
        <TenantSidebar />
        <main
          className={`flex flex-col w-full transition-all ${
            isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
          }`}
        >
          <TenantNavbar />
          {children}
        </main>
      </div>
    </AuthProvider>
  );
}
