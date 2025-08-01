import { useEffect, useState, type PropsWithChildren } from "react";
import type { Theme } from "./ThemeContext";
import ThemeContext from "./ThemeContext";

export default function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () =>
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
}
