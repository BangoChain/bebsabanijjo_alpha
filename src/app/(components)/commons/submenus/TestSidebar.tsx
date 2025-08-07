"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
import {
  House,
  List,
  CircleDollarSign,
  ShoppingCart,
  Store,
  // Car,
  Menu,
  LucideIcon,
  ChartSpline,
  Archive,
  Clipboard,
} from "lucide-react";
//import Image from "next/image";
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
    pathname === href ||
    (pathname === "/tenant/test" && href === "/tenant/test");

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

const TestSidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const sidebarClassNames = `fixed flex  flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-55"
  }  transition-all duration-300 overflow-hidden h-full shadow-md z-40 shadow-sm bg-white`;

  const user = useAppSelector((state) => state.auth.user);
  const tenantName = user?.tenant?.name || "Bebsa Banijjo";
  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "px-8"
        }`}
      >
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
          href="/tenant/test"
          icon={House}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />

        <SidebarLink
          href="/tenant/test/datagrid"
          icon={CircleDollarSign}
          label="DataGrid"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/tenant/test/chart"
          icon={ChartSpline}
          label="Chart"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/tenant/test/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/tenant/test/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/tenant/test/order"
          icon={List}
          label="Order"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/tenant/test/home"
          icon={ShoppingCart}
          label="Purchase"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/tenant/test/home"
          icon={Store}
          label="MarketPlace"
          isCollapsed={isSidebarCollapsed}
        />
      </div>
      {/* FOOTER */}
      {!isSidebarCollapsed && (
        <div>
          <p className="text-center text-xs text-gray-500">
            &copy; 2025 Bebsa Banijjo.
          </p>
        </div>
      )}
    </div>
  );
};

export default TestSidebar;
