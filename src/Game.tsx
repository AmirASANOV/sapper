import React, { useState } from "react";
import Field from "./Field";
import createMatrix from "./utils/CreateMatrixWithValue";

interface IGameProps {
  width: number;
  height: number;
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

  return (
    <div>
      <Field
        fieldValues={[
          [5, 4, -1, 3, 7, 8, 2, 0],
          [5, 4, -1, 3, 7, 8, 2, 0],
          [5, 4, -1, 3, 7, 8, 2, 0],
          [5, 4, -1, 3, 7, 8, 2, 0],
          [5, 4, -1, 3, 7, 8, 2, 0],
          [5, 4, -1, 3, 7, 8, 2, 0],
          [5, 4, -1, 3, 7, 8, 2, 0],
          [5, 4, -1, 3, 7, 8, 2, 0],
        ]}
        isMarkedMatrix={isMarkedMatrix}
        isOpenedMatrix={isOpenedMatrix}
      />
    </div>
  );
};

export default Game;
