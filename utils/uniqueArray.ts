export function uniqueArray<T>(array: T[]): T[] {
  if (!array) return [];
  return Array.from(new Set(array));
}
