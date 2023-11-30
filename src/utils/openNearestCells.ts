import openCells from "./openCells";

export default function openNearestCells(
  fieldValues: number[][],
  isOpenedMatrix: boolean[][],
  isMarkedMatrix: boolean[][],
  userX: number,
  userY: number
) {
  const width = fieldValues[0].length;
  const height = fieldValues.length;
  let newIsOpenedMatrix = [...isOpenedMatrix];
  let counterOpenedCells = 0;
  let isSuccess = true;

  if (fieldValues[userY][userX] > 0) {
    let countMarked = 0;
    for (let y = userY - 1; y < userY + 2; y++) {
      for (let x = userX - 1; x < userX + 2; x++) {
        if (
          x >= 0 &&
          x < width &&
          y >= 0 &&
          y < height &&
          isMarkedMatrix[y][x] &&
          !isOpenedMatrix[y][x]
        )
          countMarked++;
      }
    }

    if (fieldValues[userY][userX] === countMarked) {
      for (let y = userY - 1; y < userY + 2; y++) {
        for (let x = userX - 1; x < userX + 2; x++) {
          if (
            x >= 0 &&
            x < width &&
            y >= 0 &&
            y < height &&
            !isOpenedMatrix[y][x] &&
            !isMarkedMatrix[y][x]
          ) {
            const result = openCells(fieldValues, newIsOpenedMatrix, x, y);
            newIsOpenedMatrix = result.newIsOpenedMatrix;
            counterOpenedCells += result.counterOpenedCells;

            if (fieldValues[y][x] === -1) {
              isSuccess = false;
              break;
            }
          }
        }
      }
    }
  }
  console.log(newIsOpenedMatrix);

  return { newIsOpenedMatrix, counterOpenedCells, isSuccess };
}
