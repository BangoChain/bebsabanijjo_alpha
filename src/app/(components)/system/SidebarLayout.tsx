// SidebarLayout.tsx
"use client";

import { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";

const Sidebar = () => {
  return (
    <div className="h-full bg-gray-50 dark:bg-gray-800 w-64 px-3 py-4 space-y-4">
      <a
        href="#"
        className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
      >
        <span className="ml-2">Dashboard</span>
      </a>
      <a
        href="#"
        className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
      >
        <span className="ml-2">Users</span>
      </a>
      <a
        href="#"
        className="flex items-center text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-2"
      >
        <span className="ml-2">Products</span>
      </a>
    </div>
  );
};

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex">
      {/* Hamburger Button (hidden on sm and up) */}
      <div className="sm:hidden p-2 fixed top-2 left-2 z-50">
        <IconButton onClick={() => setMobileOpen(true)} size="large">
          <MenuIcon className="text-gray-700 dark:text-white" />
        </IconButton>
      </div>

      {/* Sidebar for desktop (visible on sm and up) */}
      <div className={clsx("hidden sm:block fixed top-0 left-0 h-full z-40")}>
        <Sidebar />
      </div>

      {/* Drawer for mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 256,
          },
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Main content area */}
      <main className="flex-1 sm:ml-64 p-4 w-full">{children}</main>
    </div>
  );
}
