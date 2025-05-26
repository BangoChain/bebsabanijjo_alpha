"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  Menu,
  SlidersHorizontal,
  User,
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
          // <span className="absolute left-full bg-black text-amber-300 text-xs rounded px-2 py-1">
          //   {label}
          // </span>
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
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div>

      {/* FOOTER */}
      {!isSidebarCollapsed && (
        <div className="mb-10">
          <p className="text-center text-xs text-gray-500">
            &copy; 2025 Bangochain Labs
          </p>
        </div>
      )}
    </div>
  );
};

export default TenantSidebar;
