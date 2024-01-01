export default function openCells(
  fieldValues: number[][],
  isOpenedMatrix: boolean[][],
  userX: number,
  userY: number
) {
  let counterOpenedCells = 1;

  const queue = [{ x: userX, y: userY }];
  const visited = new Set();
  const newIsOpenedMatrix = [...isOpenedMatrix];
  const width = fieldValues[0].length;
  const height = fieldValues.length;

  newIsOpenedMatrix[userY][userX] = true;

  if (fieldValues[userY][userX] !== 0) {
    return { newIsOpenedMatrix, counterOpenedCells };
  }

  while (queue.length) {
    console.log(queue.length);
    const cell = queue.shift()!;
    visited.add(`${cell.x},${cell.y}`);

    for (let y = cell.y - 1; y < cell.y + 2; y++) {
      for (let x = cell.x - 1; x < cell.x + 2; x++) {
        if (x >= 0 && x < width && y >= 0 && y < height) {
          if (fieldValues[y][x] === 0 && !visited.has(`${x},${y}`))
            queue.push({ x, y });
          if (!newIsOpenedMatrix[y][x]) counterOpenedCells++;
          newIsOpenedMatrix[y][x] = true;
        }
      }
    }
  }

  return { newIsOpenedMatrix, counterOpenedCells };
}
