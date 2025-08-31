export function transformColumnNameToHuman(columnName: string) {
  return columnName.split("_").join(" ");
}
