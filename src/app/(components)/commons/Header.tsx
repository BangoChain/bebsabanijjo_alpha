"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import DiscountIcon from "@mui/icons-material/Discount";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const theme = useTheme();
  //const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // Add noSsr: true here to avoid hydration mismatch
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"), { noSsr: true });
  const handleClick = () => {
    router.push("/registration");
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="flex justify-between items-center relative px-4 md:px-8">
        {/* Left: Logo and Title */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/images/bebsabanijjo22.PNG"
            alt="Logo"
            width={50}
            height={50}
          />
          {!isMobile && (
            <Typography variant="h6" className="text-primary font-bold">
              ব্যবসা বাণিজ্য
            </Typography>
          )}
        </div>

        {/* Center: SALE Section - Hide on Mobile */}
        {!isMobile && (
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <DiscountIcon />
            <span className="bg-green-500 text-white font-bold text-sm px-3 py-1 rounded-full">
              SALE
            </span>
            <Typography variant="body2">
              Buy now and <strong>save 50% off today</strong>
            </Typography>
          </div>
        )}

        {/* Right: CTA Button */}
        <Button
          onClick={handleClick}
          variant="contained"
          size="large"
          className="bg-gradient-to-r animate-pulse from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
        >
          🚀 Try it Free
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

// "use client";

// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import Image from "next/image";
// import DiscountIcon from "@mui/icons-material/Discount";
// import { useRouter } from "next/navigation";

// const Header = () => {
//   const router = useRouter();

//   const handleClick = () => {
//     router.push("/registration");
//   };
//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar className="flex justify-between items-center relative">
//         {/* Left: Logo and Title */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/images/bebsabanijjo22.PNG"
//             alt="Logo"
//             width={50}
//             height={50}
//           />
//           <Typography variant="h6" className="text-primary font-bold">
//             ব্যবসা বাণিজ্য
//           </Typography>
//         </div>

//         {/* Center: SALE Section */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
//           <DiscountIcon />
//           <span className="bg-green-500 text-white font-bold text-sm px-3 py-1 rounded-full">
//             SALE
//           </span>
//           <Typography variant="body2">
//             Buy now and <strong>save 50% off today</strong>
//           </Typography>
//         </div>

//         {/* Right: CTA Button */}
//         <Button
//           onClick={handleClick}
//           variant="contained"
//           size="large"
//           className="bg-gradient-to-r animate-pulse from-pink-500 to-yellow-500 hover:from-yellow-500 hover:to-pink-500 text-white font-bold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
//         >
//           🚀 Try it Free
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

// "use client";

// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import Image from "next/image"; // If you're using Next.js Image component

// const Header = () => {
//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar className="flex justify-between items-center">
//         {/* Logo and Title */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/images/bebsabanijjo22.PNG"
//             alt="Logo"
//             width={50}
//             height={50}
//           />
//           <Typography variant="h6" className="text-primary font-bold">
//             ব্যবসা বাণিজ্য
//           </Typography>
//         </div>

//         {/* Button */}
//         <Button variant="contained" color="primary">
//           Get early access
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

// "use client";

// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import Image from "next/image";
// import PercentIcon from "@mui/icons-material/Percent"; // MUI % icon
// import DiscountIcon from "@mui/icons-material/Discount";
// const Header = () => {
//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar className="flex justify-between items-center relative">
//         {/* Left: Logo and Title */}
//         <div className="flex items-center gap-2">
//           <Image
//             src="/images/bebsabanijjo22.PNG"
//             alt="Logo"
//             width={50}
//             height={50}
//           />
//           <Typography variant="h6" className="text-primary font-bold">
//             ব্যবসা বাণিজ্য
//           </Typography>
//         </div>

//         {/* Center: SALE Banner */}
//         <div className="absolute left-1/2 transform -translate-x-1/2  text-black px-4 py-1 rounded-md">
//           <Typography variant="body2" className="font-semibold">
//             <DiscountIcon fontSize="small" />
//             <span className="bg-green-500"> SALE</span>- Buy now and save 50%
//             off today
//           </Typography>
//         </div>

//         {/* Right: Button */}
//         <Button variant="contained" color="primary">
//           Get early access
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

// "use client";

// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";

// const Header = () => {
//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar className="flex justify-between">
//         <Typography variant="h6" className="text-primary font-bold">
//           ব্যবসা বাণিজ্য
//         </Typography>
//         <Button variant="contained" color="primary">
//           Get early access
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

// "use client";

// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Link as MuiLink,
// } from "@mui/material";

// export default function Navbar() {
//   return (
//     <AppBar position="static" color="transparent" elevation={0}>
//       <Toolbar className="flex justify-between items-center p-6">
//         <Typography variant="h6" className="text-2xl font-bold">
//           ব্যবসা বাণিজ্য
//         </Typography>

//         <div className="flex gap-8 items-center">
//           <MuiLink href="#why" underline="hover" color="inherit">
//             Why?
//           </MuiLink>
//           <MuiLink href="#how-it-works" underline="hover" color="inherit">
//             How it works
//           </MuiLink>
//           <MuiLink href="#pricing" underline="hover" color="inherit">
//             Pricing
//           </MuiLink>

//           <Button
//             variant="contained"
//             sx={{ bgcolor: "cyan.main", ":hover": { bgcolor: "cyan.dark" } }}
//           >
//             Get early access
//           </Button>
//         </div>
//       </Toolbar>
//     </AppBar>
//   );
// }
