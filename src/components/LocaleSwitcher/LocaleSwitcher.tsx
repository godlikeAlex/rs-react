"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathname = usePathname();

  const pathNameWithoutLocale = pathname?.slice(3);

  console.log(pathNameWithoutLocale);

  return (
    <div>
      <Link href={`/ru/${pathNameWithoutLocale}`}>🇷🇺</Link> /{" "}
      <Link href={`/en/${pathNameWithoutLocale}`}>🇬🇧</Link>
    </div>
  );
}
