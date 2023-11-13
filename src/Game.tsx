import React, { useState } from "react";
import Field from "./Field";
import createMatrix from "./utils/createMatrixWithValue";
import generateBombs from "./utils/generateBombs";
import generateFieldMatrix from "./utils/generateFieldMatrix";
import openCells from "./utils/openCells";
import { GameStatus } from "./types";

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

      const { newIsOpenedMatrix, counterOpenedCells } = openCells(
        field,
        isOpenedMatrix,
        cellIndex,
        rowIndex
      );
      setCountOpenedCells(countOpenedCells + counterOpenedCells);

      setIsOpenedMatrix(newIsOpenedMatrix);

      if (fieldValues[rowIndex][cellIndex] === -1) {
        setGameStatus(GameStatus.gameOver);
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

  return (
    <div>
      <div className=" h-8">
        {gameStatus === GameStatus.gameOver
          ? "game over!"
          : gameStatus === GameStatus.finished
          ? "You win!"
          : ""}
      </div>

      <h1>{countOpenedCells}</h1>

      <Field
        fieldValues={fieldValues}
        onCellOpen={handleCellOpen}
        onCellMark={handleCellMark}
        isMarkedMatrix={isMarkedMatrix}
        isOpenedMatrix={isOpenedMatrix}
      />
    </div>
  );
};

export default Game;
