export async function POST(request: Request) {
  const formData = await request.formData();
  const csvData: Record<string, FormDataEntryValue[]> = {};

  for (const [key, value] of formData.entries()) {
    const csvArray = csvData[key] || [];
    csvArray.push(value);
    csvData[key] = csvArray;
  }

  const csvContent = [
    ["name", "height", "birth", "gender", "mass"],
    ...Object.values(csvData),
  ]
    .map((row) => row.join(","))
    .join("\n");

  return new Response(csvContent, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="${Object.keys(csvData).length}_peoples.csv"`,
    },
  });
}
