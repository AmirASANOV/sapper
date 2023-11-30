import React, { useState } from "react";
import Field from "./Field";
import createMatrix from "./utils/createMatrixWithValue";
import generateBombs from "./utils/generateBombs";
import generateFieldMatrix from "./utils/generateFieldMatrix";
import openCells from "./utils/openCells";
import { GameStatus } from "./types";
import openNearestCells from "./utils/openNearestCells";

interface IGameProps {
  width: number;
  height: number;
  bombs: number;
}

const Game: React.FC<IGameProps> = (props) => {
  const [fieldValues, setFieldValues] = useState(
    createMatrix(0, props.width, props.height)
  );

  const [isMarkedMatrix, setIsMarkedMatrix] = useState(
    createMatrix(false, props.width, props.height)
  );
  const [isOpenedMatrix, setIsOpenedMatrix] = useState(
    createMatrix(false, props.width, props.height)
  );

  const [gameStatus, setGameStatus] = useState<GameStatus>(
    GameStatus.notStarted
  );

  const [countOpenedCells, setCountOpenedCells] = useState(0);

  const handleCellOpen = (rowIndex: number, cellIndex: number) => {
    if (
      gameStatus === GameStatus.notStarted ||
      gameStatus === GameStatus.started
    ) {
      let field = fieldValues;
      let increaseCounter = 0;

      if (gameStatus === GameStatus.notStarted) {
        const bombs = generateBombs(
          props.bombs,
          props.width,
          props.height,
          cellIndex,
          rowIndex
        );

        field = generateFieldMatrix(props.height, props.width, bombs);
        setFieldValues(field);
        setGameStatus(GameStatus.started);
      }

      if (!isOpenedMatrix[rowIndex][cellIndex]) {
        const { newIsOpenedMatrix, counterOpenedCells } = openCells(
          field,
          isOpenedMatrix,
          cellIndex,
          rowIndex
        );
        setCountOpenedCells(countOpenedCells + counterOpenedCells);
        increaseCounter = counterOpenedCells;
        setIsOpenedMatrix(newIsOpenedMatrix);
      } else {
        const { newIsOpenedMatrix, counterOpenedCells, isSuccess } =
          openNearestCells(
            fieldValues,
            isOpenedMatrix,
            isMarkedMatrix,
            cellIndex,
            rowIndex
          );
        setCountOpenedCells(countOpenedCells + counterOpenedCells);
        setIsOpenedMatrix(newIsOpenedMatrix);
        increaseCounter = counterOpenedCells;

        if (!isSuccess) setGameStatus(GameStatus.gameOver);
      }

      if (fieldValues[rowIndex][cellIndex] === -1) {
        setGameStatus(GameStatus.gameOver);
      }

      if (
        countOpenedCells + increaseCounter ===
        props.width * props.height - props.bombs
      ) {
        setGameStatus(GameStatus.finished);
      }
    }
  };

  const handleCellMark = (rowIndex: number, cellIndex: number) => {
    if (
      gameStatus === GameStatus.notStarted ||
      gameStatus === GameStatus.started
    ) {
      const newIsMarkedMatrix = [...isMarkedMatrix];
      newIsMarkedMatrix[rowIndex][cellIndex] =
        !newIsMarkedMatrix[rowIndex][cellIndex];
      setIsMarkedMatrix(newIsMarkedMatrix);
    }
  };

  const handleRestart = () => {
    setFieldValues(createMatrix(0, props.width, props.height));
    setGameStatus(GameStatus.notStarted);
    setIsOpenedMatrix(createMatrix(false, props.width, props.height));
    setIsMarkedMatrix(createMatrix(false, props.width, props.height));
    setCountOpenedCells(0);
  };

  return (
    <div>
      <div className=" h-8">
        {gameStatus === GameStatus.gameOver
          ? "game over!"
          : gameStatus === GameStatus.finished
          ? "You win!"
          : ""}
      </div>

      <Field
        fieldValues={fieldValues}
        onCellOpen={handleCellOpen}
        onCellMark={handleCellMark}
        isMarkedMatrix={isMarkedMatrix}
        isOpenedMatrix={isOpenedMatrix}
      />

      <button
        onClick={handleRestart}
        className=" px-5 py-1 mt-6 border border-red-600"
      >
        Restart
      </button>
    </div>
  );
};

export default Game;
