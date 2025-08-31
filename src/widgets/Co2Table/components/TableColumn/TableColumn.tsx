import clsx from "clsx";
import { memo, useEffect, useRef, useState } from "react";

interface Props {
  value?: string | number;
  highlightOnUpdate?: boolean;
}

function TableColumn({ value = "N/A", highlightOnUpdate }: Props) {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const isFirstRender = useRef(true);
  const prevValueRef = useRef(value);

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;

    if (!highlightOnUpdate) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (prevValueRef.current !== value) {
      setIsHighlighted(true);
      timeout = setTimeout(() => setIsHighlighted(false), 800);
    }

    prevValueRef.current = value;

    return () => timeout && clearTimeout(timeout);
  }, [value, highlightOnUpdate]);

  return (
    <td
      className={clsx(
        "p-4 transition-colors duration-700",
        isHighlighted ? "bg-yellow-300" : "bg-transparent"
      )}
    >
      {value}
    </td>
  );
}

export default memo(TableColumn);
