"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
import {
  House,
  List,
  CircleDollarSign,
  ShoppingCart,
  FileText,
  Users,
  Calendar,
  Settings,
  ChartNoAxesColumn,
  Store,
  Menu,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  isCollapsed: boolean;
}

const SidebarLink = ({ href, icon, label, isCollapsed }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/tenant" && href === "/tenant");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center  ${
          isCollapsed ? "justify-center py-4  " : "justify-start px-8 py-4"
        }
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}
      >
        {React.createElement(icon, { className: "w-6 h-6 !text-gray-700" })}

        {!isCollapsed && (
          <span className="font-medium text-gray-700">{label}</span>
        )}
        {/* Tooltip only when collapsed */}
        {isCollapsed && (
          <span
            className="absolute right-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap
              opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-lg"
          >
            {label}
          </span>
        )}
      </div>
    </Link>
  );
};

const TenantSidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  const user = useAppSelector((state) => state.auth.user);
  const tenantName = user?.tenant?.name || "Bebsa Banijjo";
  // const tenantLogo = user?.tenant?.logo || "/images/favicon.ico";
  const avatarUrl = "/images/favicon.ico";
  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
        <Image
          src={avatarUrl}
          alt="Tenant Logo"
          width={27}
          height={27}
          className="rounded w-8"
        />
        {!isSidebarCollapsed && (
          <h1 className="font-extrabold text-xl">{tenantName} </h1>
        )}

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/tenant"
          icon={House}
          label="Home"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={CircleDollarSign}
          label="Sales"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={List}
          label="Order"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={ShoppingCart}
          label="Purchase"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={FileText}
          label="Account"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={Users}
          label="HR & Payroll"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={Calendar}
          label="Report"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={Settings}
          label="Administration"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={ChartNoAxesColumn}
          label="Business Monitor"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={Store}
          label="MarketPlace"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER */}
      {!isSidebarCollapsed && (
        <div className="mb-10">
          <p className="text-center text-xs text-gray-500">
            &copy; 2025 Bebsa Banijjo.
          </p>
        </div>
      )}
    </div>
  );
};

export default TenantSidebar;

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

// ---------------------------------------------------------   with Vs code sidebar

// "use client";

// import {
//   Archive,
//   CircleDollarSign,
//   Clipboard,
//   Layout,
//   Menu,
//   SlidersHorizontal,
//   User,
//   LucideIcon,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import React, { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setIsSidebarCollapsed } from "@/features/global/globalSlice";

// interface SidebarLinkProps {
//   href: string;
//   icon: LucideIcon;
//   label: string;
//   id: string;
//   isCollapsed: boolean;
//   isActive: boolean;
//   onClick: () => void;
// }

// const SidebarLink = ({
//   href,
//   icon,
//   label,
//   id,
//   isCollapsed,
//   isActive,
//   onClick,
// }: SidebarLinkProps) => {
//   return (
//     <div
//       className={`group relative cursor-pointer flex items-center ${
//         isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
//       } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
//         isActive ? "bg-blue-600 text-white" : "text-gray-700"
//       }`}
//       onClick={onClick}
//     >
//       {React.createElement(icon, { className: "w-5 h-5" })}
//       {!isCollapsed && <span className="font-medium">{label}</span>}
//       {isCollapsed && (
//         <span className="absolute right-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-lg">
//           {label}
//         </span>
//       )}
//     </div>
//   );
// };

// const TenantSidebar = ({
//   activeMenu,
//   setActiveMenu,
// }: {
//   activeMenu: string;
//   setActiveMenu: (val: string) => void;
// }) => {
//   const dispatch = useAppDispatch();
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );
//   const pathname = usePathname();
//   const router = useRouter();

//   // Auto-collapse if not home
//   useEffect(() => {
//     const isHome = activeMenu === "home";
//     dispatch(setIsSidebarCollapsed(!isHome));
//   }, [activeMenu]);

//   const handleNavClick = (menu: string, href: string) => {
//     setActiveMenu(menu);
//     router.push(href);
//   };

//   const avatarUrl = "/images/favicon.ico";

//   const links = [
//     { id: "home", label: "Home", icon: Layout, href: "/tenant" },
//     { id: "sales", label: "Sales Module", icon: Archive, href: "/sales" },
//     { id: "order", label: "Order Module", icon: Clipboard, href: "/orders" },
//     { id: "purchase", label: "Purchase Module", icon: User, href: "/purchase" },
//     {
//       id: "account",
//       label: "Account Module",
//       icon: SlidersHorizontal,
//       href: "/account",
//     },
//     { id: "hr", label: "HR & Payroll", icon: CircleDollarSign, href: "/hr" },
//     {
//       id: "report",
//       label: "Report Module",
//       icon: CircleDollarSign,
//       href: "/reports",
//     },
//     {
//       id: "admin",
//       label: "Admin Module",
//       icon: CircleDollarSign,
//       href: "/admin",
//     },
//     {
//       id: "monitor",
//       label: "Business Monitor",
//       icon: CircleDollarSign,
//       href: "/monitor",
//     },
//     {
//       id: "marketplace",
//       label: "Marketplace",
//       icon: CircleDollarSign,
//       href: "/marketplace",
//     },
//     {
//       id: "system",
//       label: "Syed Emon",
//       icon: CircleDollarSign,
//       href: "/tenant/system",
//     },
//   ];

//   return (
//     <div
//       className={`fixed z-40 flex flex-col bg-white shadow-md transition-all duration-300 h-full ${
//         isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
//       } overflow-hidden`}
//     >
//       {/* TOP */}
//       <div
//         className={`flex items-center pt-8 ${
//           isSidebarCollapsed ? "px-5" : "px-8"
//         } gap-3`}
//       >
//         <Image
//           src={avatarUrl}
//           alt="Tenant Logo"
//           width={27}
//           height={27}
//           className="w-8"
//         />
//         {!isSidebarCollapsed && (
//           <h1 className="font-extrabold text-xl">Bebsa Banijjo</h1>
//         )}
//         <button
//           className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
//           onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
//         >
//           <Menu className="w-4 h-4" />
//         </button>
//       </div>

//       {/* LINKS */}
//       <div className="mt-8 flex-grow">
//         {links.map((link) => (
//           <SidebarLink
//             key={link.id}
//             id={link.id}
//             href={link.href}
//             icon={link.icon}
//             label={link.label}
//             isCollapsed={isSidebarCollapsed}
//             isActive={activeMenu === link.id}
//             onClick={() => handleNavClick(link.id, link.href)}
//           />
//         ))}
//       </div>

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

// "use client";

// import {
//   Archive,
//   CircleDollarSign,
//   Clipboard,
//   Layout,
//   Menu,
//   SlidersHorizontal,
//   User,
//   LucideIcon,
// } from "lucide-react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
// import React, { useEffect } from "react";

// interface SidebarLinkProps {
//   href: string;
//   icon: LucideIcon;
//   label: string;
//   id: string;
//   isCollapsed: boolean;
//   isActive: boolean;
//   onClick: () => void;
// }

// const SidebarLink = ({
//   href,
//   icon,
//   label,
//   id,
//   isCollapsed,
//   isActive,
//   onClick,
// }: SidebarLinkProps) => {
//   return (
//     <div
//       className={`group relative cursor-pointer flex items-center ${
//         isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
//       } hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
//         isActive ? "bg-blue-600 text-white" : "text-gray-700"
//       }`}
//       onClick={onClick}
//     >
//       {React.createElement(icon, { className: "w-5 h-5" })}
//       {!isCollapsed && <span className="font-medium">{label}</span>}
//       {isCollapsed && (
//         <span className="absolute right-full top-1/2 -translate-y-1/2 ml-3 px-2 py-1 rounded bg-black text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 shadow-lg">
//           {label}
//         </span>
//       )}
//     </div>
//   );
// };

// const TenantSidebar = ({
//   activeMenu,
//   setActiveMenu,
// }: {
//   activeMenu: string;
//   setActiveMenu: (val: string) => void;
// }) => {
//   const dispatch = useAppDispatch();
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );
//   const router = useRouter();

//   useEffect(() => {
//     const isHome = activeMenu === "home";
//     dispatch(setIsSidebarCollapsed(!isHome));
//   }, [activeMenu]);

//   const handleNavClick = (menu: string, href: string) => {
//     setActiveMenu(menu);
//     router.push(href);
//   };

//   const avatarUrl = "/images/favicon.ico";

//   const links = [
//     { id: "home", label: "Home", icon: Layout, href: "/tenant" },
//     { id: "sales", label: "Sales Module", icon: Archive, href: "/sales" },
//     { id: "order", label: "Order Module", icon: Clipboard, href: "/orders" },
//     { id: "purchase", label: "Purchase Module", icon: User, href: "/purchase" },
//     {
//       id: "account",
//       label: "Account Module",
//       icon: SlidersHorizontal,
//       href: "/account",
//     },
//     { id: "hr", label: "HR & Payroll", icon: CircleDollarSign, href: "/hr" },
//     {
//       id: "report",
//       label: "Report Module",
//       icon: CircleDollarSign,
//       href: "/reports",
//     },
//     {
//       id: "admin",
//       label: "Admin Module",
//       icon: CircleDollarSign,
//       href: "/admin",
//     },
//     {
//       id: "monitor",
//       label: "Business Monitor",
//       icon: CircleDollarSign,
//       href: "/monitor",
//     },
//     {
//       id: "marketplace",
//       label: "Marketplace",
//       icon: CircleDollarSign,
//       href: "/marketplace",
//     },
//     {
//       id: "system",
//       label: "Syed Emon",
//       icon: CircleDollarSign,
//       href: "/tenant/system",
//     },
//   ];

//   return (
//     <div
//       className={`fixed z-40 flex flex-col bg-white shadow-md transition-all duration-300 h-full ${
//         isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
//       } overflow-hidden`}
//     >
//       <div
//         className={`flex items-center pt-8 ${
//           isSidebarCollapsed ? "px-5" : "px-8"
//         } gap-3`}
//       >
//         <Image
//           src={avatarUrl}
//           alt="Tenant Logo"
//           width={27}
//           height={27}
//           className="w-8"
//         />
//         {!isSidebarCollapsed && (
//           <h1 className="font-extrabold text-xl">Bebsa Banijjo</h1>
//         )}
//         <button
//           className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
//           onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
//         >
//           <Menu className="w-4 h-4" />
//         </button>
//       </div>

//       <div className="mt-8 flex-grow">
//         {links.map((link) => (
//           <SidebarLink
//             key={link.id}
//             {...link}
//             isCollapsed={isSidebarCollapsed}
//             isActive={activeMenu === link.id}
//             onClick={() => handleNavClick(link.id, link.href)}
//           />
//         ))}
//       </div>

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
