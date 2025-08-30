const COLUMNS = [
  {
    label: "ISO Code",
  },
  {
    label: "Name",
  },
  {
    label: "Population",
  },
  {
    label: "Year",
  },
  {
    label: "CO₂",
  },
  {
    label: "CO₂ Per capita",
  },
];

export default function TableHeader() {
  return (
    <thead className="text-sm uppercase bg-stone-50 w-full">
      <tr>
        {COLUMNS.map(({ label }) => (
          <th key={label} scope="col" className="px-6 py-3">
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
}
