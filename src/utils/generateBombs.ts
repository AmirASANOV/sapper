import getRandomNumber from "./getRandomNumber";

export default function generateBombs(
  bombs: number,
  width: number,
  height: number,
  userX: number,
  userY: number
) {
  const bombsArr = [];
  const indexBombsArr = new Set();

  while (bombsArr.length !== bombs) {
    const cellIndex = getRandomNumber(0, width * height - 1);
    const cellY = Math.floor(cellIndex / width);
    const cellX = cellIndex % width;
    if (
      !(
        userX - 1 <= cellX &&
        cellX <= userX + 1 &&
        userY - 1 <= cellY &&
        cellY <= userY + 1
      ) &&
      !indexBombsArr.has(cellIndex)
    ) {
      bombsArr.push({ x: cellX, y: cellY });
      indexBombsArr.add(cellIndex);
    }
  }
  return bombsArr;
}
