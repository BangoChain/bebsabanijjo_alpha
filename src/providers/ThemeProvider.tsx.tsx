// "use client";

// import {
//   ThemeProvider as MuiThemeProvider,
//   createTheme,
// } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";
// import { useEffect, useState, ReactNode } from "react";

// interface Props {
//   children: ReactNode;
// }

// export function ThemeProvider({ children }: Props) {
//   const [mode, setMode] = useState<"light" | "dark">("light");

//   useEffect(() => {
//     const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     if (darkMode) {
//       setMode("dark");
//       document.documentElement.classList.add("dark");
//     } else {
//       setMode("light");
//       document.documentElement.classList.remove("dark");
//     }
//   }, []);

//   const theme = createTheme({
//     palette: {
//       mode,
//     },
//   });

//   return (
//     <MuiThemeProvider theme={theme}>
//       <CssBaseline />
//       {children}
//     </MuiThemeProvider>
//   );
// }

"use client";

import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const lightTheme = createTheme({
  palette: {
    mode: "light", // 🚨 Force light mode
  },
});

export function ThemeProvider({ children }: Props) {
  return (
    <MuiThemeProvider theme={lightTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
