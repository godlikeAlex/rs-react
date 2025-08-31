interface Props {
  name?: string | number;
  sort?: "asc" | "desc";
  onClick?: () => void;
}

const sortIcons = {
  asc: "↑",
  desc: "↓",
};

export default function TableHeadColumn({ name, sort, onClick }: Props) {
  return (
    <th scope="col" className="px-6 py-3 cursor-pointer" onClick={onClick}>
      {name} {sort ? <div>{sortIcons[sort]}</div> : null}
    </th>
  );
}
