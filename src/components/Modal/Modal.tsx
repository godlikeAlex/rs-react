import { useEffect, type PropsWithChildren } from "react";
import clsx from "clsx";

import { Portal } from "@/components";

import closeIcon from "@/assets/close-icon.svg";
import useModalAccessibility from "./useModalAccessibility";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: PropsWithChildren<Props>) {
  const modalRef = useModalAccessibility({ isOpen });

  useEffect(() => {
    const handleEscPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscPress);
    }

    return () => {
      document.removeEventListener("keydown", handleEscPress);
    };
  }, [onClose, isOpen]);

  if (!isOpen) return null;

  return (
    <Portal prefix="portal-modal">
      <div role="dialog" aria-modal="true" ref={modalRef}>
        <div className={clsx("fixed top-0 left-0 w-full h-screen")}>
          <div
            className={clsx(
              "absolute top-0 left-0 w-full h-screen bg-black opacity-45"
            )}
            aria-hidden="true"
            onClick={onClose}
          />

          <div className={clsx("flex items-center justify-center h-full")}>
            <div
              className={clsx(
                "relative pb-8 pt-9 px-10",
                "bg-amber-50 rounded-md"
              )}
            >
              <button
                className={clsx(
                  "absolute top-1.5 right-1.5 w-6.5",
                  "cursor-pointer",
                  "hover:opacity-50 focus:opacity-50"
                )}
                aria-label="Close Button"
                onClick={onClose}
              >
                <img
                  className="w-full h-full"
                  src={closeIcon}
                  alt="Close Modal"
                />
              </button>

              <div>{children}</div>
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
}
