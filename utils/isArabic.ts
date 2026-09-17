export function isArabic(text: string): boolean {
  const pattern = /[\u0600-\u06FF\u0750-\u077F]/;
  return pattern.test(text);
}
