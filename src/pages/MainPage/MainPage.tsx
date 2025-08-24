import { Button, ControlledForm, Modal } from "@/components";
import clsx from "clsx";
import { useState } from "react";

export default function MainPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={clsx(
        "w-full h-screen p-5",
        "bg-neutral-50",
        "flex items-center justify-center flex-col"
      )}
    >
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ControlledForm />
      </Modal>
      <h1 className="text-7xl">React Forms</h1>
      <div className="flex gap-5 mt-8">
        <Button>Controlled Form</Button>
        <Button variant="ghost">Uncontrolled Form</Button>
        <Button variant="ghost" onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
      </div>
    </div>
  );
}
