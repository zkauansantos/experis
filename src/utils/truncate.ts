export default function truncate(text: string, maxQty: number): string {
  if (!text) return '';

  if (text.length <= maxQty) {
    return text;
  }
  return `${text.slice(0, maxQty)}...`;
}
