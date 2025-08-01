import { Header, ThemeSwitcher } from "@/components";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto px-2.5 py-2.5 flex flex-col gap-6">
        <Header />
        <Outlet />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
