import { useEffect, useRef } from "react";

interface Params {
  isOpen: boolean;
}

export default function useModalAccessibility({ isOpen }: Params) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open || !modalRef.current) return;

    const focusableElements = Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(
        'input, button, select, textarea, a[href], [tabindex]:not([tabindex="-1"])'
      )
    );

    if (focusableElements.length >= 2) {
      const [firstFocusableElement] = focusableElements.filter((element) => {
        return element.getAttribute("aria-label") !== "Close Button";
      });

      firstFocusableElement.focus();
    } else {
      (focusableElements.length > 0
        ? focusableElements[0]
        : modalRef.current
      ).focus();
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const first = focusableElements.at(0);
      const last = focusableElements.at(-1);

      if (event.key === "Tab") {
        if (document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }

      if (event.key === "Tab" && event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return modalRef;
}
