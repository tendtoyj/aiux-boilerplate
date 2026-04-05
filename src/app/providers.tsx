"use client";

import { ThemeProvider } from "@montage-ui/core";
import { AppRouterCacheProvider } from "@montage-ui/nextjs";
import { Agentation } from "agentation";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider>
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
