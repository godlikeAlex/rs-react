import { useEffect, useRef, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface Props {
  prefix?: string;
}

const generateContainerForPortal = (prefix: string) => {
  const portalElement = document.createElement("div");
  portalElement.id = `${prefix}-${self.crypto.randomUUID()}`;

  return portalElement;
};

export default function Portal({
  prefix = "portal",
  children,
}: PropsWithChildren<Props>) {
  const portalRootRef = useRef<HTMLDivElement>(
    generateContainerForPortal(prefix)
  );

  useEffect(() => {
    const portalRooElement = portalRootRef.current;

    return () => {
      if (portalRooElement.childNodes.length === 0) {
        portalRooElement.remove();
      }
    };
  }, []);

  document.body.appendChild(portalRootRef.current);

  return createPortal(children, portalRootRef.current);
}
