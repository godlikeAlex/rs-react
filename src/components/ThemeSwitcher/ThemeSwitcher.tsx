import { ThemeContext } from "@/contexts/ThemeContext";
import classNames from "classnames";
import { useContext } from "react";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

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
