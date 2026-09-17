"use client";

import React from "react";
import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/context/i18n-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
