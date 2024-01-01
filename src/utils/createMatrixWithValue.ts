export default function createMatrix<Type>(
  value: Type,
  width: number,
  height: number
): Type[][] {
  return Array(height)
    .fill(null)
    .map(() => Array(width).fill(value));
}
