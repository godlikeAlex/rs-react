"use client";

import ThemeContext from "@/contexts/ThemeContext/ThemeContext";
import classNames from "classnames";
import { useContext } from "react";
import { Button } from "../Button";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";
import { Link } from "@/i18n/navigation";

const LINKS = [
  {
    path: "/home",
    label: "home",
  },
  {
    path: "/about",
    label: "about",
  },
];

export default function Header() {
  const t = useTranslations("navigation");

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
                {t(link.label)}
              </Link>
            </li>
          );
        })}
        <li>
          <Button onClick={handleRefetchAll}>🔄 {t("refetch-all")}</Button>
        </li>

        <li>
          <LocaleSwitcher />
        </li>
      </ul>
    </nav>
  );
}
