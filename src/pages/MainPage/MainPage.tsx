import { Button } from "@/components";
import clsx from "clsx";

export default function MainPage() {
  return (
    <div
      className={clsx(
        "w-full h-screen p-5",
        "bg-neutral-50",
        "flex items-center justify-center flex-col"
      )}
    >
      <h1 className="text-7xl">React Forms</h1>
      <div className="flex gap-5 mt-8">
        <Button>Controlled Form</Button>
        <Button variant="ghost">Uncontrolled Form</Button>
      </div>
    </div>
  );
}
