// // @/app/(components)/commons/TenantNavbar.tsx
// "use client";

// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
// import { Bell, Menu, Settings } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const TenantNavbar = () => {
//   const dispatch = useAppDispatch();
//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   const toggleSidebar = () => {
//     dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
//   };

//   return (
//     <div className="flex justify-between items-center w-full px-4 py-2 shadow-sm bg-white">
//       {/* LEFT: Menu + Search */}
//       <div className="flex items-center gap-4">
//         <button
//           className="p-2 bg-gray-100 rounded-full hover:bg-blue-100"
//           onClick={toggleSidebar}
//         >
//           <Menu className="w-5 h-5" />
//         </button>
//         <div className="relative">
//           <input
//             type="search"
//             placeholder="Search groups or products"
//             className="pl-10 pr-4 py-2 w-48 md:w-64 border border-gray-300 bg-white rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
//           />
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//             <Bell size={16} className="text-gray-500" />
//           </div>
//         </div>
//       </div>
//       {/* RIGHT: Profile & Settings */}
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <Bell className="cursor-pointer text-gray-500" size={24} />
//           <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
//             3
//           </span>
//         </div>
//         <hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
//         <div className="flex items-center gap-2">
//           <Image
//             src="/next.svg"
//             alt="User Profile"
//             width={32}
//             height={32}
//             className="rounded-full"
//           />
//           <span className="hidden md:inline font-medium text-sm">
//             Shakil Ahmed
//           </span>
//         </div>
//         <Link href="/settings">
//           <Settings
//             className="text-gray-600 hover:text-blue-500 cursor-pointer"
//             size={20}
//           />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TenantNavbar;
//-----------------------------------------------   2nd one
// "use client";

// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
// import { Bell, Menu, Settings } from "lucide-react";
// import Image from "next/image";
// import React, { useState } from "react";
// //import Link from "next/link";
// import {
//   IconButton,
//   Menu as MuiMenu,
//   MenuItem,
//   Divider,
//   Typography,
// } from "@mui/material";
// import { useRouter } from "next/navigation";

// const TenantNavbar = () => {
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   const toggleSidebar = () => {
//     dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
//   };

//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     router.push("/");
//   };

//   return (
//     <div className="flex justify-between items-center w-full px-4 py-2 shadow-sm bg-white">
//       {/* LEFT: Menu + Search */}
//       <div className="flex items-center gap-4">
//         <button
//           className="p-2 bg-gray-100 rounded-full hover:bg-blue-100"
//           onClick={toggleSidebar}
//         >
//           <Menu className="w-5 h-5" />
//         </button>
//         <div className="relative">
//           <input
//             type="search"
//             placeholder="Search groups or products"
//             className="pl-10 pr-4 py-2 w-48 md:w-64 border border-gray-300 bg-white rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
//           />
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//             <Bell size={16} className="text-gray-500" />
//           </div>
//         </div>
//       </div>

//       {/* RIGHT: Profile & Settings */}
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <Bell className="cursor-pointer text-gray-500" size={24} />
//           <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
//             3
//           </span>
//         </div>

//         <Divider orientation="vertical" flexItem className="mx-3" />

//         <div className="flex items-center gap-2">
//           <Image
//             src="/next.svg"
//             alt="User Profile"
//             width={32}
//             height={32}
//             className="rounded-full"
//           />
//           <span className="hidden md:inline font-medium text-sm">
//             Shakil Ahmed
//           </span>
//         </div>

//         {/* Settings Menu */}
//         <IconButton onClick={handleMenuClick}>
//           <Settings className="text-gray-600 hover:text-blue-500" />
//         </IconButton>
//         <MuiMenu
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleMenuClose}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//         >
//           <Typography variant="subtitle2" className="px-4 pt-2 pb-1">
//             Account
//           </Typography>
//           <MenuItem
//             onClick={() => {
//               handleMenuClose();
//               router.push("/profile");
//             }}
//           >
//             Profile
//           </MenuItem>
//           <MenuItem
//             onClick={() => {
//               handleMenuClose();
//               router.push("/settings");
//             }}
//           >
//             Settings
//           </MenuItem>
//           <Divider />
//           <MenuItem
//             onClick={() => {
//               handleMenuClose();
//               handleLogout();
//             }}
//           >
//             Logout
//           </MenuItem>
//         </MuiMenu>
//       </div>
//     </div>
//   );
// };

// export default TenantNavbar;

// ---------------------------------------- 3rd one
// "use client";

// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
// import { Bell, Menu } from "lucide-react";
// import React, { useState } from "react";
// import {
//   Avatar,
//   Box,
//   Divider,
//   IconButton,
//   Menu as MuiMenu,
//   MenuItem,
//   Typography,
// } from "@mui/material";
// import { useRouter } from "next/navigation";

// const TenantNavbar = () => {
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   const isSidebarCollapsed = useAppSelector(
//     (state) => state.global.isSidebarCollapsed
//   );

//   const toggleSidebar = () => {
//     dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
//   };

//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);

//   const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     router.push("/login");
//   };

//   // Example user data (can be dynamic)
//   const user = {
//     name: "Shakil Ahmed",
//     role: "Administrator",
//     avatarUrl: "/images/favicon.ico",
//   };

//   return (
//     <div className="flex justify-between items-center w-full px-4 py-2 shadow-sm bg-white">
//       {/* LEFT */}
//       <div className="flex items-center gap-4">
//         <button
//           className="p-2 bg-gray-100 rounded-full hover:bg-blue-100"
//           onClick={toggleSidebar}
//         >
//           <Menu className="w-5 h-5" />
//         </button>
//         <div className="relative">
//           <input
//             type="search"
//             placeholder="Search groups or products"
//             className="pl-10 pr-4 py-2 w-48 md:w-64 border border-gray-300 bg-white rounded-md text-sm focus:outline-none focus:ring focus:border-blue-300"
//           />
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//             <Bell size={16} className="text-gray-500" />
//           </div>
//         </div>
//       </div>

//       {/* RIGHT */}
//       <div className="flex items-center gap-4">
//         <div className="relative">
//           <Bell className="cursor-pointer text-gray-500" size={24} />
//           <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
//             3
//           </span>
//         </div>

//         <Divider orientation="vertical" flexItem className="mx-3" />

//         {/* Avatar menu */}
//         <IconButton onClick={handleAvatarClick}>
//           <Avatar
//             src={user.avatarUrl}
//             alt={user.name}
//             sx={{ width: 32, height: 32 }}
//           />
//         </IconButton>

//         <MuiMenu
//           anchorEl={anchorEl}
//           open={open}
//           onClose={handleMenuClose}
//           anchorOrigin={{
//             vertical: "bottom",
//             horizontal: "right",
//           }}
//           transformOrigin={{
//             vertical: "top",
//             horizontal: "right",
//           }}
//         >
//           <Box className="px-4 py-2">
//             <Typography variant="subtitle1" fontWeight="bold">
//               {user.name}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {user.role}
//             </Typography>
//           </Box>
//           <Divider />
//           <MenuItem
//             onClick={() => {
//               handleMenuClose();
//               router.push("/profile");
//             }}
//           >
//             Profile
//           </MenuItem>
//           <MenuItem
//             onClick={() => {
//               handleMenuClose();
//               router.push("/settings");
//             }}
//           >
//             Settings
//           </MenuItem>
//           <Divider />
//           <MenuItem
//             onClick={() => {
//               handleMenuClose();
//               handleLogout();
//             }}
//           >
//             Logout
//           </MenuItem>
//         </MuiMenu>
//       </div>
//     </div>
//   );
// };

// export default TenantNavbar;

// ---- --------------------------------------------------------------- 4th
"use client";

import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsSidebarCollapsed } from "@/features/global/globalSlice";
import { Bell, Menu } from "lucide-react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

const TenantNavbar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const user = useAppSelector((state) => state.auth.user);

  const toggleSidebar = () => {
    dispatch(setIsSidebarCollapsed(!isSidebarCollapsed));
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // You may have a logout thunk action to dispatch
    // For example:
    dispatch({ type: "auth/logout" });
    router.push("/");
  };

  // fallback user display if user data is missing
  const displayName = user?.user?.userName || "Guest User";
  const roleName = user?.role?.name || "User";
  const tenantName = user?.tenant?.name || "Bebsa Banijjo";

  // avatar URL example (you can add user.avatar if available)
  const avatarUrl = "/images/favicon.ico";
  const [currentTime, setCurrentTime] = useState<string>("");

  // useEffect(() => {
  //   const updateClock = () => {
  //     const now = new Date();
  //     let hours = now.getHours();
  //     const minutes = now.getMinutes().toString().padStart(2, "0");
  //     const seconds = now.getSeconds().toString().padStart(2, "0");
  //     const isAM = hours < 12;
  //     const amPm = isAM ? "AM" : "PM";
  //     hours = hours % 12 || 12; // Convert 0 to 12 for 12-hour format
  //     const hoursStr = hours.toString().padStart(2, "0");
  //     const separator = ":";
  //     const formatted = `${hoursStr}${separator}${minutes}${separator}${seconds} ${amPm}`;
  //     setCurrentTime(formatted);
  //   };
  //   updateClock();
  //   const interval = setInterval(updateClock, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
      const day = now.toLocaleDateString("en-GB", { day: "2-digit" }); // "02"
      const month = now.toLocaleDateString("en-US", { month: "long" }); // "August"
      const year = now.getFullYear(); // 2025

      const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      const formatted = `${weekday}, ${day} ${month} ${year}, ${time}`;
      setCurrentTime(formatted);
    };

    updateClock();
    const interval = setInterval(updateClock, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center w-full px-4 py-2 shadow-sm ">
      {/* LEFT */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-sm md:text-base font-semibold text-gray-700">
          <span className="text-blue-600">{tenantName}</span>
          <span className="text-gray-400 font-bold">×</span>
          <span className="text-gray-800">Bebsa Banijjo</span>
          <span className="ml-4 text-sm font-mono text-gray-500">
            {currentTime}
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Bell className="cursor-pointer text-gray-500" size={24} />
          <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
            3
          </span>
        </div>

        <Divider orientation="vertical" flexItem className="mx-3" />

        {/* Avatar menu */}
        <IconButton
          onClick={handleAvatarClick}
          aria-controls={open ? "user-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            src={avatarUrl}
            alt={displayName}
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>

        <MuiMenu
          id="user-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          PaperProps={{
            style: { minWidth: 180 },
          }}
        >
          <Box className="px-4 py-2">
            <Typography variant="subtitle1" fontWeight="bold">
              {displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary" noWrap>
              {roleName}
            </Typography>
          </Box>
          <Divider />
          <MenuItem
            onClick={() => {
              handleMenuClose();
              router.push("/profile");
            }}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleMenuClose();
              router.push("/settings");
            }}
          >
            Settings
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={() => {
              handleMenuClose();
              handleLogout();
            }}
          >
            Logout
          </MenuItem>
        </MuiMenu>
      </div>
    </div>
  );
};

export default TenantNavbar;
