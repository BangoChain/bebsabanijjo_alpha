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
import TenantNavbar from "@/app/(components)/commons/TenantNavbar";
import TenantSidebar from "@/app/(components)/commons/TenantSidebar";
//import SecondarySidebar from "@/app/(components)/commons/TenantSidebar";
//import AuthProvider from "@/app/(components)/auth/AuthProvider";
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
    //<AuthProvider>
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
    //</AuthProvider>
  );
}

//------------------------------- use with vs code

// "use client";

// import React, { useEffect } from "react";
// import TenantNavbar from "@/app/(components)/commons/TenantNavbar";
// import TenantSidebar from "@/app/(components)/commons/TenantSidebar";
// import SecondarySidebar from "@/app/(components)/commons/SecondarySidebar";
// import AuthProvider from "@/app/(components)/auth/AuthProvider";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
// import { usePathname } from "next/navigation";

// export default function TenantLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const dispatch = useAppDispatch();
//   const pathname = usePathname();
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   const isHomePage = pathname === "/tenant";

//   // Set initial sidebar state based on route
//   useEffect(() => {
//     dispatch(setIsSidebarCollapsed(!isHomePage)); // collapsed for all except home
//   }, [pathname, dispatch, isHomePage]);

//   return (
//     <AuthProvider>
//       <div className="flex min-h-screen">
//         {/* Main Sidebar */}
//         <TenantSidebar />

//         {/* Secondary Sidebar for non-home pages */}
//         {!isHomePage && <SecondarySidebar />}

//         {/* Main Content */}
//         <main
//           className={`flex flex-col w-full transition-all ${
//             isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
//           }`}
//         >
//           <TenantNavbar />
//           {children}
//         </main>
//       </div>
//     </AuthProvider>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import TenantNavbar from "@/app/(components)/commons/TenantNavbar";
// import TenantSidebar from "@/app/(components)/commons/TenantSidebar";
// import AuthProvider from "@/app/(components)/auth/AuthProvider";
// import { useAppSelector } from "@/store/hooks";

// export default function TenantLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [activeMenu, setActiveMenu] = useState("home");
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   return (
//     <AuthProvider>
//       <div className="flex min-h-screen">
//         <TenantSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
//         <main
//           className={`flex flex-col w-full transition-all ${
//             isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
//           }`}
//         >
//           <TenantNavbar />
//           {children}
//         </main>
//       </div>
//     </AuthProvider>
//   );
// }

// "use client";

// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import TenantNavbar from "@/app/(components)/commons/TenantNavbar";
// import TenantSidebar from "@/app/(components)/commons/TenantSidebar";
// import SecondarySidebar from "@/app/(components)/commons/SecondarySidebar"; // ✅ import secondary sidebar
// import AuthProvider from "@/app/(components)/auth/AuthProvider";
// import { useAppSelector } from "@/store/hooks";

// export default function TenantLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const [activeMenu, setActiveMenu] = useState("home");
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   // ✅ Show SecondarySidebar on all /tenant/* routes except exactly "/tenant"
//   const showSecondarySidebar =
//     pathname.startsWith("/tenant") && pathname !== "/tenant";

//   return (
//     <AuthProvider>
//       <div className="flex min-h-screen">
//         {/* Primary Sidebar */}
//         <TenantSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

//         {/* Secondary Sidebar (conditional) */}
//         {showSecondarySidebar && (
//           <div
//             className={`transition-all duration-300 ${
//               isSidebarCollapsed ? "w-0" : "w-56"
//             } hidden md:block bg-gray-100`}
//           >
//             <SecondarySidebar activeMenu={activeMenu} />
//           </div>
//         )}

//         {/* Main Content */}
//         <main
//           className={`flex flex-col w-full transition-all duration-300 ${
//             isSidebarCollapsed
//               ? showSecondarySidebar
//                 ? "md:pl-24 md:pr-56"
//                 : "md:pl-24"
//               : showSecondarySidebar
//               ? "md:pl-72 md:pr-56"
//               : "md:pl-72"
//           }`}
//         >
//           <TenantNavbar />
//           {children}
//         </main>
//       </div>
//     </AuthProvider>
//   );
// }

// 2ns vs code
// "use client";

// import React, { useState } from "react";
// import { usePathname } from "next/navigation";
// import TenantNavbar from "@/app/(components)/commons/TenantNavbar";
// import TenantSidebar from "@/app/(components)/commons/TenantSidebar";
// import SecondarySidebar from "@/app/(components)/commons/SecondarySidebar";
// import AuthProvider from "@/app/(components)/auth/AuthProvider";
// import { useAppSelector } from "@/store/hooks";

// export default function TenantLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const [activeMenu, setActiveMenu] = useState("home");
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   const showSecondarySidebar =
//     pathname.startsWith("/tenant") && pathname !== "/tenant";

//   return (
//     // <AuthProvider>
//     //   {/* Navbar stays fixed at top full width */}
//     //   <TenantNavbar />

//     //   <div className="flex min-h-[calc(100vh-64px)] pt-[64px] relative">
//     //     {/* Primary Sidebar */}
//     //     <div className="fixed top-[64px] left-0 z-40">
//     //       <TenantSidebar
//     //         activeMenu={activeMenu}
//     //         setActiveMenu={setActiveMenu}
//     //       />
//     //     </div>

//     //     {/* Secondary Sidebar */}
//     //     {showSecondarySidebar && (
//     //       <div
//     //         className={`fixed top-[64px] transition-all duration-300 ${
//     //           isSidebarCollapsed ? "left-16" : "left-64"
//     //         } w-64 hidden md:block z-30`}
//     //       >
//     //         <SecondarySidebar active={activeMenu} />
//     //       </div>
//     //     )}

//     //     {/* Main Content */}
//     //     <main
//     //       className={`flex flex-col w-full transition-all duration-300 pl-0 md:pl-16 ${
//     //         !isSidebarCollapsed ? "md:pl-64" : ""
//     //       } ${
//     //         showSecondarySidebar
//     //           ? isSidebarCollapsed
//     //             ? "md:pr-[256px]" // 64 (collapsed) + 256
//     //             : "md:pr-[320px]" // 256 (main) + 64 (secondary)
//     //           : ""
//     //       }`}
//     //     >
//     //       <div className="px-4 py-6">{children}</div>
//     //     </main>
//     //   </div>
//     // </AuthProvider>
//     <AuthProvider>
//       <div className="flex min-h-screen">
//         {/* Sidebar Section */}
//         <div className="relative">
//           {/* Main Sidebar */}
//           <TenantSidebar
//             activeMenu={activeMenu}
//             setActiveMenu={setActiveMenu}
//           />

//           {/* Secondary Sidebar only shows when sidebar is collapsed */}
//           {isSidebarCollapsed && (
//             <div className="absolute left-full top-0 h-full w-64 bg-gray-50 border-l border-gray-200 z-20">
//               <SecondarySidebar active={activeMenu} />
//             </div>
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="flex flex-col flex-1">
//           <TenantNavbar />
//           <main className="p-4">{children}</main>
//         </div>
//       </div>
//     </AuthProvider>
//   );
// }
//3rd
