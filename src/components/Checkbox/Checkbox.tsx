type InputCheckboxType = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
>;

interface Props extends InputCheckboxType {
  label: string;
}

export default function Checkbox({ label, ...props }: Props) {
  return (
    <label className="capitalize flex gap-1 items-center">
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </label>
  );
}
