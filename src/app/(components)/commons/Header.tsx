"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Image from "next/image"; // If you're using Next.js Image component

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <Image
            src="/images/bebsabanijjo22.PNG"
            alt="Logo"
            width={50}
            height={50}
          />
          <Typography variant="h6" className="text-primary font-bold">
            ব্যবসা বাণিজ্য
          </Typography>
        </div>

        {/* Button */}
        <Button variant="contained" color="primary">
          Get early access
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

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
