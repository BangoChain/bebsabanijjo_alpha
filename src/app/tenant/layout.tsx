// app/tenant/layout.tsx
import React from "react";
import AuthProvider from "@/app/(components)/auth/AuthProvider";
export default function TenantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
      <AuthProvider>{children} </AuthProvider>
    </>
  );
}
