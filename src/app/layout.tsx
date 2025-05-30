// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

// import { ThemeProvider } from "@mui/material/styles";
// import { CssBaseline } from "@mui/material";
// import theme from "@/theme/theme";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }

// import { ThemeProvider } from "@/providers/ThemeProvider.tsx";
// import "./globals.css";
// import { Toaster } from "sonner";
// import { Provider } from "react-redux";
// import { store } from "@/store";
// // import { DefaultSeo } from "next-seo";
// // import SEO from "@/seo/next-seo.config";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Provider store={store}>
//           <ThemeProvider>
//             {children}
//             <Toaster position="bottom-left" />
//           </ThemeProvider>
//         </Provider>
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import "./globals.css";
import { AppProviders } from "./providers";
import Head from "next/head";

// Inside your component
<Head>
  <link rel="icon" href="/images/bebsabanijjo22.PNG" />
</Head>;

export const metadata: Metadata = {
  title: "Bebsa Banijjo Alpha",
  description: "Generated by create next app",
  icons: {
    icon: "/images/favicon.ico", // Or /logo.png or
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
