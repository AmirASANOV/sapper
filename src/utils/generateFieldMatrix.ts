export default function generateFieldMatrix(
  height: number,
  width: number,
  bombs: { x: number; y: number }[]
) {
  const field = Array(height)
    .fill(null)
    .map(() => Array(width).fill(0));

  bombs.forEach(({ x, y }) => {
    field[y][x] = -1;

    for (let cellY = y - 1; cellY < y + 2; cellY++) {
      for (let cellX = x - 1; cellX < x + 2; cellX++) {
        if (
          cellX >= 0 &&
          cellX < width &&
          cellY >= 0 &&
          cellY < height &&
          field[cellY][cellX] !== -1
        )
          field[cellY][cellX]++;
      }
    }
  });

  return field;
}
