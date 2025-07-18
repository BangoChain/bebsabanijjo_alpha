"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CircleDollarSign,
  ShoppingCart,
  Settings,
  Users,
  FileText,
  List,
  House,
  LucideIcon,
  Calendar,
  ChartNoAxesColumn,
  Store,
  Car,
  Recycle,
  // Menu,
} from "lucide-react";
import Image from "next/image";
import Tooltip from "@mui/material/Tooltip";

const sidebarItems: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: House, href: "/tenant", label: "Home" },
  { icon: CircleDollarSign, href: "/tenant/sales", label: "Sales" },
  { icon: List, href: "/tenant/sales2", label: "Order" },

  // { icon: ShoppingCart, href: "#", label: "Purchase" },
  // { icon: FileText, href: "#", label: "Accounts" },
  // { icon: Users, href: "#", label: "HR & Payroll" },
  // { icon: Calendar, href: "#", label: "Reports" },
  // { icon: Settings, href: "#", label: "Administration" },

  // {
  //   icon: ChartNoAxesColumn,
  //   href: "/tenant/sales",
  //   label: "Business Monitor",
  // },
  // { icon: Car, href: "/tenant/system", label: "Syed Emon" },
  // { icon: Store, href: "/tenant/sales", label: "MarketPlace" },
  { icon: Recycle, href: "/tenant/test", label: "Test" },
];

const TenantSidebar = () => {
  const pathname = usePathname();
  const avatarUrl = "/images/favicon.ico";
  return (
    <aside className="w-16 bg-gray-900 text-white h-screen flex flex-col items-center py-4 space-y-6">
      <Image
        src={avatarUrl}
        alt="Tenant Logo"
        width={27}
        height={27}
        className="rounded w-8"
      />
      {sidebarItems.map(({ icon: Icon, href, label }) => {
        // const isActive = pathname.startsWith(href);
        const isActive =
          href === "/tenant"
            ? pathname === "/tenant"
            : pathname.startsWith(href);

        return (
          // <Link
          //   key={href}
          //   href={href}
          //   className={`p-2 rounded hover:bg-gray-700 ${
          //     isActive ? "bg-blue-600" : ""
          //   }`}
          //   title={label}
          // >
          //   <Icon className="w-6 h-6" />
          // </Link>
          <Tooltip key={href} title={label} placement="right" arrow>
            <Link
              href={href}
              className={`flex items-center justify-center p-2 rounded hover:bg-gray-700 ${
                isActive ? "bg-blue-600" : ""
              }`}
            >
              <Icon className="w-6 h-6" />
            </Link>
          </Tooltip>
        );
      })}
    </aside>
  );
};
export default TenantSidebar;
// ---------------------------------------------------------  end of  VS Code Sidebar
//---------------------------------------------Start main side menu and after go to system only system menu show
// "use client";

// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
// import {
//   House,
//   List,
//   CircleDollarSign,
//   ShoppingCart,
//   FileText,
//   Users,
//   Calendar,
//   Settings,
//   ChartNoAxesColumn,
//   Store,
//   Car,
//   Menu,
//   LucideIcon,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// interface SidebarLinkProps {
//   href: string;
//   icon: LucideIcon;
//   label: string;
//   isCollapsed: boolean;
// }

// const SidebarLink = ({ href, icon, label, isCollapsed }: SidebarLinkProps) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;

//   return (
//     <Link href={href}>
//       <div
//         className={`group relative cursor-pointer flex items-center ${
//           isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
//         }
//         hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
//           isActive ? "bg-blue-200 text-white" : ""
//         }`}
//       >
//         {React.createElement(icon, { className: "w-6 h-6 !text-gray-700" })}
//         {!isCollapsed && (
//           <span className="font-medium text-gray-700">{label}</span>
//         )}
//         {isCollapsed && (
//           <span
//             className="absolute right-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap
//             opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-lg"
//           >
//             {label}
//           </span>
//         )}
//       </div>
//     </Link>
//   );
// };

// const TenantSidebar = () => {
//   const dispatch = useAppDispatch();
//   const pathname = usePathname();

//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   const isSubmenuSidebar =
//     pathname.startsWith("/tenant/system") ||
//     pathname.startsWith("/tenant/invoice");

//   const toggleSidebar = () => {
//     dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
//   };

//   const sidebarClassNames = `fixed flex flex-col ${
//     isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
//   } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

//   const user = useAppSelector((state) => state.auth.user);
//   const tenantName = user?.tenant?.name || "Bebsa Banijjo";
//   const avatarUrl = "/images/favicon.ico";

//   return (
//     <div className={sidebarClassNames}>
//       {/* TOP LOGO */}
//       <div
//         className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
//           isSidebarCollapsed ? "px-5" : "px-8"
//         }`}
//       >
//         <Image
//           src={avatarUrl}
//           alt="Tenant Logo"
//           width={27}
//           height={27}
//           className="rounded w-8"
//         />
//         {!isSidebarCollapsed && (
//           <h1 className="font-extrabold text-xl">{tenantName}</h1>
//         )}
//         <button
//           className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
//           onClick={toggleSidebar}
//         >
//           <Menu className="w-4 h-4" />
//         </button>
//       </div>

//       {/* LINKS */}
//       <div className="flex-grow mt-8">
//         {isSubmenuSidebar ? (
//           <>
//             <SidebarLink
//               href="/tenant/system/users"
//               icon={Users}
//               label="Users"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/system/settings"
//               icon={Settings}
//               label="Settings"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/invoice/sales"
//               icon={CircleDollarSign}
//               label="Sales Invoice"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/invoice/purchase"
//               icon={ShoppingCart}
//               label="Purchase Invoice"
//               isCollapsed={isSidebarCollapsed}
//             />
//           </>
//         ) : (
//           <>
//             <SidebarLink
//               href="/tenant"
//               icon={House}
//               label="Home"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/sales"
//               icon={CircleDollarSign}
//               label="Sales"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/order"
//               icon={List}
//               label="Order"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/purchase"
//               icon={ShoppingCart}
//               label="Purchase"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/accounts"
//               icon={FileText}
//               label="Account"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/hr"
//               icon={Users}
//               label="HR & Payroll"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/report"
//               icon={Calendar}
//               label="Report"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/admin"
//               icon={Settings}
//               label="Administration"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/monitor"
//               icon={ChartNoAxesColumn}
//               label="Business Monitor"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/market"
//               icon={Store}
//               label="MarketPlace"
//               isCollapsed={isSidebarCollapsed}
//             />
//             <SidebarLink
//               href="/tenant/system"
//               icon={Car}
//               label="Syed Emon"
//               isCollapsed={isSidebarCollapsed}
//             />
//           </>
//         )}
//       </div>

//       {/* FOOTER */}
//       {!isSidebarCollapsed && (
//         <div className="mb-10">
//           <p className="text-center text-xs text-gray-500">
//             &copy; 2025 Bebsa Banijjo.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TenantSidebar;
//---------------------------------------------Start main
// "use client";

// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
// import {
//   House,
//   List,
//   CircleDollarSign,
//   ShoppingCart,
//   FileText,
//   Users,
//   Calendar,
//   Settings,
//   ChartNoAxesColumn,
//   Store,
//   Car,
//   Menu,
//   LucideIcon,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React from "react";

// interface SidebarLinkProps {
//   href: string;
//   icon: LucideIcon;
//   label: string;
//   isCollapsed: boolean;
// }

// const SidebarLink = ({ href, icon, label, isCollapsed }: SidebarLinkProps) => {
//   const pathname = usePathname();
//   const isActive =
//     pathname === href || (pathname === "/tenant" && href === "/tenant");

//   return (
//     <Link href={href}>
//       <div
//         className={`cursor-pointer flex items-center  ${
//           isCollapsed ? "justify-center py-4  " : "justify-start px-8 py-4"
//         }
//         hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
//           isActive ? "bg-blue-200 text-white" : ""
//         }`}
//       >
//         {React.createElement(icon, { className: "w-6 h-6 !text-gray-700" })}

//         {!isCollapsed && (
//           <span className="font-medium text-gray-700">{label}</span>
//         )}
//         {/* Tooltip only when collapsed */}
//         {isCollapsed && (
//           <span
//             className="absolute right-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap
//               opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-lg"
//           >
//             {label}
//           </span>
//         )}
//       </div>
//     </Link>
//   );
// };

// const TenantSidebar = () => {
//   const dispatch = useAppDispatch();
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   const toggleSidebar = () => {
//     dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
//   };

//   const sidebarClassNames = `fixed flex flex-col ${
//     isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
//   } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

//   const user = useAppSelector((state) => state.auth.user);
//   const tenantName = user?.tenant?.name || "Bebsa Banijjo";
//   // const tenantLogo = user?.tenant?.logo || "/images/favicon.ico";
//   const avatarUrl = "/images/favicon.ico";
//   return (
//     <div className={sidebarClassNames}>
//       {/* TOP LOGO */}
//       <div
//         className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
//           isSidebarCollapsed ? "px-5" : "px-8"
//         }`}
//       >
//         <Image
//           src={avatarUrl}
//           alt="Tenant Logo"
//           width={27}
//           height={27}
//           className="rounded w-8"
//         />
//         {!isSidebarCollapsed && (
//           <h1 className="font-extrabold text-xl">{tenantName} </h1>
//         )}

//         <button
//           className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
//           onClick={toggleSidebar}
//         >
//           <Menu className="w-4 h-4" />
//         </button>
//       </div>

//       {/* LINKS */}
//       <div className="flex-grow mt-8">
//         <SidebarLink
//           href="/tenant"
//           icon={House}
//           label="Home"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/"
//           icon={CircleDollarSign}
//           label="Sales"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/"
//           icon={List}
//           label="Order"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/"
//           icon={ShoppingCart}
//           label="Purchase"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/"
//           icon={FileText}
//           label="Account"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/"
//           icon={Users}
//           label="HR & Payroll"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/"
//           icon={Calendar}
//           label="Report"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/"
//           icon={Settings}
//           label="Administration"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/"
//           icon={ChartNoAxesColumn}
//           label="Business Monitor"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/"
//           icon={Store}
//           label="MarketPlace"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/tenant/system"
//           icon={Car}
//           label="Syed Emon"
//           isCollapsed={isSidebarCollapsed}
//         />
//       </div>

//       {/* FOOTER */}
//       {!isSidebarCollapsed && (
//         <div className="mb-10">
//           <p className="text-center text-xs text-gray-500">
//             &copy; 2025 Bebsa Banijjo.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TenantSidebar;

//------------------------------------------------------------------------------ with sub menu  nested menu
// "use client";

// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
// import {
//   Archive,
//   CircleDollarSign,
//   Clipboard,
//   Layout,
//   Menu,
//   SlidersHorizontal,
//   User,
//   ChevronDown,
//   ChevronRight,
//   LucideIcon,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState } from "react";

// interface SidebarLinkProps {
//   href?: string;
//   icon: LucideIcon;
//   label: string;
//   isCollapsed: boolean;
//   children?: React.ReactNode;
// }

// const SidebarLink = ({
//   href,
//   icon,
//   label,
//   isCollapsed,
//   children,
// }: SidebarLinkProps) => {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const isActive = href && (pathname === href || pathname.startsWith(href));
//   const hasChildren = !!children;

//   return (
//     <div className="group relative">
//       <div
//         className={`cursor-pointer flex items-center ${
//           isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
//         } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
//           isActive ? "bg-blue-200 text-white" : ""
//         }`}
//         onClick={() => {
//           if (hasChildren) setOpen(!open);
//         }}
//       >
//         {React.createElement(icon, { className: "w-5 h-5 text-gray-700" })}

//         {!isCollapsed && (
//           <>
//             <span className="font-medium text-gray-700 flex-1">{label}</span>
//             {hasChildren &&
//               (open ? (
//                 <ChevronDown className="w-4 h-4 text-gray-500" />
//               ) : (
//                 <ChevronRight className="w-4 h-4 text-gray-500" />
//               ))}
//           </>
//         )}

//         {isCollapsed && (
//           <span className="absolute right-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-lg">
//             {label}
//           </span>
//         )}
//       </div>

//       {/* Submenu */}
//       {!isCollapsed && hasChildren && open && (
//         <div className="ml-10 mt-1 flex flex-col gap-1">{children}</div>
//       )}
//     </div>
//   );
// };

// const SubSidebarLink = ({ href, label }: { href: string; label: string }) => {
//   const pathname = usePathname();
//   const isActive = pathname === href;
//   return (
//     <Link href={href}>
//       <div
//         className={`text-sm pl-4 py-2 rounded-md cursor-pointer ${
//           isActive ? "bg-blue-100 text-blue-600" : "hover:bg-gray-100"
//         }`}
//       >
//         {label}
//       </div>
//     </Link>
//   );
// };

// const TenantSidebar = () => {
//   const dispatch = useAppDispatch();
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   const toggleSidebar = () => {
//     dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
//   };

//   const sidebarClassNames = `fixed flex flex-col ${
//     isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
//   } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

//   const user = useAppSelector((state) => state.auth.user);
//   const tenantName = user?.tenant?.name || "Bebsa Banijjo";
//   const avatarUrl = "/images/favicon.ico";

//   return (
//     <div className={sidebarClassNames}>
//       {/* TOP LOGO */}
//       <div
//         className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
//           isSidebarCollapsed ? "px-5" : "px-8"
//         }`}
//       >
//         <Image
//           src={avatarUrl}
//           alt="Tenant Logo"
//           width={27}
//           height={27}
//           className="rounded w-8"
//         />
//         {!isSidebarCollapsed && (
//           <h1 className="font-extrabold text-xl">{tenantName}</h1>
//         )}

//         <button
//           className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
//           onClick={toggleSidebar}
//         >
//           <Menu className="w-4 h-4" />
//         </button>
//       </div>

//       {/* LINKS */}
//       <div className="flex-grow mt-8">
//         <SidebarLink
//           href="/tenant"
//           icon={Layout}
//           label="Dashboard"
//           isCollapsed={isSidebarCollapsed}
//         />

//         <SidebarLink
//           icon={Archive}
//           label="Inventory"
//           isCollapsed={isSidebarCollapsed}
//         >
//           <SubSidebarLink href="/inventory/categories" label="Categories" />
//           <SubSidebarLink href="/inventory/warehouses" label="Warehouses" />
//         </SidebarLink>

//         <SidebarLink
//           href="/products"
//           icon={Clipboard}
//           label="Products"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/users"
//           icon={User}
//           label="Users"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/settings"
//           icon={SlidersHorizontal}
//           label="Settings"
//           isCollapsed={isSidebarCollapsed}
//         />
//         <SidebarLink
//           href="/expenses"
//           icon={CircleDollarSign}
//           label="Expenses"
//           isCollapsed={isSidebarCollapsed}
//         />
//       </div>

//       {/* FOOTER */}
//       {!isSidebarCollapsed && (
//         <div className="mb-10">
//           <p className="text-center text-xs text-gray-500">
//             &copy; 2025 Bangochain Labs
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TenantSidebar;
