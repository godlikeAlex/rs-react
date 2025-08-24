import { useEffect, useState, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface Props {
  prefix?: string;
}

export default function Portal({
  prefix = "portal",
  children,
}: PropsWithChildren<Props>) {
  const [portalElement, setPortalElement] = useState<HTMLDivElement>();

  useEffect(() => {
    const portalElement = document.createElement("div");

    portalElement.id = `${prefix}-${self.crypto.randomUUID()}`;
    document.body.appendChild(portalElement);

    setPortalElement(portalElement);

    return () => {
      document.body.removeChild(portalElement);
    };
  }, [prefix]);

  if (!portalElement) return null;

  return createPortal(children, portalElement);
}
