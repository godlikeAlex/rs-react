"use client";

import { useState, type FormEvent } from "react";
import classNames from "classnames";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { Button } from "@/components";

export default function SearchControl() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [value, setValue] = useState(() => searchParams?.get("query") ?? "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams || []);

    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className="flex gap-3" onSubmit={handleSubmit}>
      <input
        placeholder={"Star Wars Person 🌚"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={classNames(
          "block w-full p-1.5 px-4",
          "text-gray-900 text-sm",
          "dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white",
          "bg-gray-50 border border-gray-200  rounded-lg",
          "focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        )}
      />

      <Button className="flex-1/3">Search</Button>
    </form>
  );
}
