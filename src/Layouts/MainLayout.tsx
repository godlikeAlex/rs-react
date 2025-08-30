import type { ReactNode } from "react";
import clsx from "clsx";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main
      className={clsx(
        "mx-auto w-3xl max-w-full",
        "rounded-md border-1 border-stone-200",
        "mt-15 p-2 shadow-2xl text-center"
      )}
    >
      {children}
    </main>
  );
}
