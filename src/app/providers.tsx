// src/app/providers.tsx
"use client";

import { ChildrenProps } from "@/types/app/children";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

export default function Providers({ children }: ChildrenProps) {
  return <AppRouterCacheProvider>{children}</AppRouterCacheProvider>;
}