import ThemeContext from "@/contexts/ThemeContext/ThemeContext";
import { useQueryClient } from "@tanstack/react-query";
import classNames from "classnames";
import { useContext } from "react";
import { NavLink } from "react-router";
import { Button } from "../Button";

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
  const queryClient = useQueryClient();
  const { theme } = useContext(ThemeContext);

  const handleRefetchAll = () => {
    queryClient.invalidateQueries();
  };

  return (
    <nav>
      <ul className="flex justify-center items-center gap-10 mt-2">
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
        <li>
          <Button onClick={handleRefetchAll}>🔄 Refetch All</Button>
        </li>
      </ul>
    </nav>
  );
}
