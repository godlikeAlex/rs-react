"use client";

import ThemeContext from "@/contexts/ThemeContext/ThemeContext";
import classNames from "classnames";
import { useContext } from "react";
import { Button } from "../Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  {
    path: "/home",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
];

export default function Header() {
  const pathname = usePathname();
  const { theme } = useContext(ThemeContext);

  const handleRefetchAll = () => {};

  return (
    <nav>
      <ul className="flex justify-center items-center gap-10 mt-2">
        {LINKS.map((link) => {
          const isActive = pathname?.startsWith(link.path);

          return (
            <li key={link.path}>
              <Link
                href={link.path}
                className={classNames({
                  "text-blue-700 underline  dark:text-blue-700": isActive,
                  "text-white": theme === "dark",
                })}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Button onClick={handleRefetchAll}>🔄 Refetch All</Button>
        </li>
      </ul>
    </nav>
  );
}
