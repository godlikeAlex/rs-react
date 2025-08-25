import type { Form } from "@/stores/formsStore";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  form: Form;
}

export default function FormView({ form }: Props) {
  const [highlighted, setHighlighted] = useState(true);

  useEffect(() => {
    const now = Date.now();
    const elapsed = now - form.addedAt;
    const remaining = Math.max(5000 - elapsed, 0);

    const timer = setTimeout(() => setHighlighted(false), remaining);

    return () => clearTimeout(timer);
  }, [form.addedAt]);

  return (
    <article
      className={clsx(
        "p-5 rounded-lg border-4 border-white bg-white",
        "shadow-lg  transition",
        { "shadow-amber-300": highlighted }
      )}
    >
      <img
        src={form.file}
        className="w-20 h-20 object-cover rounded-6xl"
        alt=""
      />
      <h2>
        Name: <span className="font-bold">{form.name}</span>
      </h2>
      <h2>
        Age: <span className="font-bold">{form.age}</span>
      </h2>
      <h2>
        Gender: <span className="font-bold">{form.gender}</span>
      </h2>
      <h2>
        Password: <span className="font-bold">{form.password}</span>
      </h2>
      <h2>
        Country: <span className="font-bold">{form.country}</span>
      </h2>
    </article>
  );
}
