import React from "react";
import Cell from "./Cell";

interface IFieldProps {
  fieldValues: number[][];
  isMarkedMatrix: boolean[][];
  isOpenedMatrix: boolean[][];
  onCellOpen: (rowIndex: number, cellIndex: number) => void;
  onCellMark: (rowIndex: number, cellIndex: number) => void;
}

const Field: React.FC<IFieldProps> = (props) => {
  const handleCellClick = (
    event: React.MouseEvent<HTMLElement>,
    rowIndex: number,
    cellIndex: number
  ) => {
    if (event.nativeEvent.button === 0) {
      props.onCellOpen(rowIndex, cellIndex);
      console.log("leftBtn", rowIndex, cellIndex);
    } else if (event.nativeEvent.button === 2) {
      event.preventDefault();
      props.onCellMark(rowIndex, cellIndex);
      console.log("rightBtn", rowIndex, cellIndex);
    }
  };

  return (
    <div>
      {props.fieldValues.map((row, rowIndex) => (
        <div key={rowIndex} className=" flex">
          {row.map((cellValue, cellIndex) => (
            <Cell
              onCellClick={(event) =>
                handleCellClick(event, rowIndex, cellIndex)
              }
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
