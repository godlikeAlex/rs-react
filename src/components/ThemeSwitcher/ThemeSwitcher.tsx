"use client";

import { ThemeContext } from "@/contexts/ThemeContext";
import classNames from "classnames";
import { useContext, useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [isClient, setIsClient] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <button
      className={classNames(
        "absolute right-25",
        "bg-blue-500 p-2 rounded-4xl cursor-pointer hover:bg-blue-300"
      )}
      onClick={toggleTheme}
    >
      {theme === "light" ? "🌝" : "🌚"}
    </button>
  );
}
