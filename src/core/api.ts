export async function api<T>(path: string): Promise<T> {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return (await response.json()) as T;
}
