interface Props {
  value?: string | number;
}

export default function TableColumn({ value = "N/A" }: Props) {
  return <td className="p-4">{value}</td>;
}
