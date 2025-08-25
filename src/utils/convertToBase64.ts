export function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.addEventListener("load", () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      }
    });
  });
}
