"use client";

import { type ReactNode } from "react";
import dynamic from "next/dynamic";

const ThemeProviderWithoutSSR = dynamic(
  () => import("@/contexts/ThemeContext/ThemeContextProvider"),
  { ssr: false }
);

export default function Providers({ children }: { children: ReactNode }) {
  return <ThemeProviderWithoutSSR>{children}</ThemeProviderWithoutSSR>;
}
