"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { store } from "@/store";
// import { ThemeProvider } from './../providers/ThemeProvider.tsx';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
        <Toaster position="bottom-left" />
      </ThemeProvider>
    </Provider>
  );
}
