// "use client";

// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import type { JwtPayload } from "@/features/auth/authTypes"; // Adjust path as needed

// const Page = () => {
//   const [user, setUser] = useState<JwtPayload | null>(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode<JwtPayload>(token);
//         setUser(decoded);
//       } catch (error) {
//         console.error("Invalid token:", error);
//       }
//     }
//   }, []);

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Tenant Dashboard</h1>
//       {user ? (
//         <pre className="bg-gray-100 p-4 rounded">
//           {JSON.stringify(user, null, 2)}
//         </pre>
//       ) : (
//         <p>No user info found in token.</p>
//       )}
//     </div>
//   );
// };

// export default Page;

// "use client";

// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import type { JwtPayload } from "@/features/auth/authTypes"; // Adjust path as needed
// import { useRouter } from "next/navigation";

// const Page = () => {
//   const [user, setUser] = useState<JwtPayload | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode<JwtPayload>(token);
//         setUser(decoded);
//       } catch (error) {
//         console.error("Invalid token:", error);
//       }
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     router.push("/"); // redirect to login page
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Tenant Dashboard</h1>
//       {user ? (
//         <>
//           <pre className="bg-gray-100 p-4 rounded mb-4">
//             {JSON.stringify(user, null, 2)}
//           </pre>
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//           >
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>No user info found in token.</p>
//       )}
//     </div>
//   );
// };

// export default Page;

// "use client";

// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import type { JwtPayload } from "@/features/auth/authTypes";
// import { useRouter } from "next/navigation";
// import { useDispatch } from "react-redux";
// import { logout } from "@/features/auth/authSlice"; // Adjust path if needed

// const Page = () => {
//   const [user, setUser] = useState<JwtPayload | null>(null);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode<JwtPayload>(token);
//         setUser(decoded);
//       } catch (error) {
//         console.error("Invalid token:", error);
//       }
//     }
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout()); // use Redux logic
//     setUser(null);
//     router.push("/");
//   };

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Tenant Dashboard</h1>
//       {user ? (
//         <>
//           <pre className="bg-gray-100 p-4 rounded mb-4">
//             {JSON.stringify(user, null, 2)}
//           </pre>
//           <button
//             onClick={handleLogout}
//             className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
//           >
//             Logout
//           </button>
//         </>
//       ) : (
//         <p>No user info found in token.</p>
//       )}
//     </div>
//   );
// };

// export default Page;

// "use client";

// import React, { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import type { JwtPayload } from "@/features/auth/authTypes";
// import { useRouter } from "next/navigation";
// import { useAppDispatch } from "@/store/hooks";
// import { logout } from "@/features/auth/authSlice";
// import { getToken, removeTokens } from "@/utils/token";

// const TenantDashboardPage = () => {
//   const [user, setUser] = useState<JwtPayload | null>(null);
//   const [loading, setLoading] = useState(true);

//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   useEffect(() => {
//     const token = getToken(); // from utils/token.ts

//     if (!token) {
//       router.push("/");
//       return;
//     }

//     try {
//       const decoded = jwtDecode<JwtPayload & { exp: number }>(token);

//       const isExpired = decoded.exp * 1000 < Date.now();
//       if (isExpired) {
//         removeTokens();
//         dispatch(logout());
//         router.push("/");
//       } else {
//         setUser(decoded);
//       }
//     } catch (error) {
//       console.error("Invalid token:", error);
//       removeTokens();
//       dispatch(logout());
//       router.push("/");
//     } finally {
//       setLoading(false);
//     }
//   }, [dispatch, router]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <p className="text-gray-600">Checking authentication...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Tenant Home</h1>
//       {user ? (
//         <>
//           <pre className="bg-gray-100 p-4 rounded mb-4 overflow-x-auto">
//             {JSON.stringify(user, null, 2)}
//           </pre>

//         </>
//       ) : (
//         <p className="text-gray-600">User not found.</p>
//       )}
//     </div>
//   );
// };

// export default TenantDashboardPage;

"use client";

import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
// import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
// import Grid from "@mui/material/Grid";
import Grid from "@mui/material/Grid";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { motion } from "framer-motion";
import { getToken } from "@/utils/token";
import type { JwtPayload } from "@/features/auth/authTypes";

// MUI icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupIcon from "@mui/icons-material/Group";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SettingsIcon from "@mui/icons-material/Settings";
import BarChartIcon from "@mui/icons-material/BarChart";

const modules = [
  {
    name: "Sales Module",
    icon: <MonetizationOnIcon fontSize="large" />,
    bg: "#e0e7ff",
    path: "/sales",
  },
  {
    name: "Order Module",
    icon: <ListAltIcon fontSize="large" />,
    bg: "#ede9fe",
    path: "/orders",
  },
  {
    name: "Purchase Module",
    icon: <ShoppingCartIcon fontSize="large" />,
    bg: "#ccfbf1",
    path: "/purchase",
  },
  {
    name: "Accounts Module",
    icon: <DescriptionIcon fontSize="large" />,
    bg: "#bae6fd",
    path: "/accounts",
  },
  {
    name: "HR & Payroll Module",
    icon: <GroupIcon fontSize="large" />,
    bg: "#d9f99d",
    path: "/hr",
  },
  {
    name: "Reports Module",
    icon: <CalendarTodayIcon fontSize="large" />,
    bg: "#f0f9ff",
    path: "/reports",
  },
  {
    name: "Administration Module",
    icon: <SettingsIcon fontSize="large" />,
    bg: "#ede9fe",
    path: "/admin",
  },
  {
    name: "Business Monitor Module",
    icon: <BarChartIcon fontSize="large" />,
    bg: "#f0fdf4",
    path: "/monitor",
  },
];

const TenantDashboardPage = () => {
  const [user, setUser] = useState<JwtPayload | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (!token) return router.push("/");
    try {
      const decoded = jwtDecode<JwtPayload & { exp: number }>(token);
      if (decoded.exp * 1000 < Date.now()) return router.push("/");
      setUser(decoded);
    } catch {
      router.push("/");
    }
  }, [router]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" fontWeight="bold" mb={4}>
        Welcome to Bebsa Banijjo, {user?.user?.userName || "Guest"}
      </Typography>

      <Grid container spacing={2}>
        {modules.map((module, index) => (
          <Grid
            key={index}
            component="div"
            gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => router.push(module.path)}
            >
              <Card
                sx={{
                  backgroundColor: module.bg,
                  height: "130px",
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Box mb={1}>{module.icon}</Box>
                  <Typography variant="subtitle1" fontWeight="500">
                    {module.name}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2}></Grid>
    </Box>
  );
};

export default TenantDashboardPage;
