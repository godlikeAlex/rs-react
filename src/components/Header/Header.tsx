import ThemeContext from "@/contexts/ThemeContext/ThemeContext";
import classNames from "classnames";
import { useContext } from "react";
import { NavLink } from "react-router";

const LINKS = [
  {
    path: "home",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
];

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav>
      <ul className="flex justify-center gap-10 mt-2">
        {LINKS.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                classNames(
                  { "text-blue-700 underline  dark:text-blue-700": isActive },
                  { "text-white": theme === "dark" }
                )
              }
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
