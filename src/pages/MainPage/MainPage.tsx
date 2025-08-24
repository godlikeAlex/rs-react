import {
  Button,
  ControlledForm,
  FormView,
  Modal,
  UncontrolledForm,
} from "@/components";
import { useFormStore } from "@/stores/formsStore";
import clsx from "clsx";
import { useState } from "react";

export default function MainPage() {
  const forms = useFormStore((store) => store.forms);
  const [controlledModalIsOpen, setControlledModalIsOpen] = useState(false);
  const [uncontrolledModalIsOpen, setUncontrolledModalIsOpen] = useState(false);

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
        <Button onClick={() => setControlledModalIsOpen(true)}>
          Controlled Form
        </Button>
        <Button
          variant="ghost"
          onClick={() => setUncontrolledModalIsOpen(true)}
        >
          Uncontrolled Form
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-5">
        {forms.map((form) => (
          <FormView form={form} key={form.addedAt} />
        ))}
      </div>

      <Modal
        isOpen={controlledModalIsOpen}
        onClose={() => setControlledModalIsOpen(false)}
      >
        <ControlledForm
          onSuccessSubmit={() => setControlledModalIsOpen(false)}
        />
      </Modal>

      <Modal
        isOpen={uncontrolledModalIsOpen}
        onClose={() => setUncontrolledModalIsOpen(false)}
      >
        <UncontrolledForm
          onSuccessSubmit={() => setUncontrolledModalIsOpen(false)}
        />
      </Modal>
    </div>
  );
}
