"use client";

import { useEffect, useState, type PropsWithChildren } from "react";
import type { Theme } from "./ThemeContext";
import ThemeContext from "./ThemeContext";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const themeLocalStorage = useLocalStorage<Theme>("theme", "light");

  const [theme, setTheme] = useState<Theme>(() => themeLocalStorage.get());

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    themeLocalStorage.set(theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
