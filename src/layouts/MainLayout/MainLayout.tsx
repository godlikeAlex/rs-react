import { Header } from "@/components";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="max-w-4xl mx-auto px-2.5 my-4 flex flex-col gap-6">
      <Header />
      <Outlet />
    </div>
  );
}
