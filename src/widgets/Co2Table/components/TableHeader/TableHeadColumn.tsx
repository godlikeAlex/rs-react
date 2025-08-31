interface Props {
  name?: string | number;
}

export default function TableHeadColumn({ name }: Props) {
  return (
    <th scope="col" className="px-6 py-3">
      {name}
    </th>
  );
}
