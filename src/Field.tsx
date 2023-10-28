import React from "react";
import Cell from "./Cell";

interface IFieldProps {
  fieldValues: number[][];
  isMarkedMatrix: boolean[][];
  isOpenedMatrix: boolean[][];
}

const Field: React.FC<IFieldProps> = (props) => {
  return (
    <div>
      {props.fieldValues.map((row, rowIndex) => (
        <div key={rowIndex} className=" flex">
          {row.map((cellValue, cellIndex) => (
            <Cell
              key={cellIndex}
              value={cellValue}
              isMarked={props.isMarkedMatrix[rowIndex][cellIndex]}
              isOpened={props.isOpenedMatrix[rowIndex][cellIndex]}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Field;
