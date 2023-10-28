import React, { ReactElement, useState } from "react";

interface ICellProps {
  value: number;
  isMarked: boolean;
  isOpened: boolean;
  onCellClick: (event: React.MouseEvent<HTMLElement>) => void;
}

let bombCell = "💣";
let mark = "⛳️";

const Cell: React.FC<ICellProps> = (props) => {
  if (props.isOpened)
    return (
      <div
        className={
          "flex justify-center items-center border border-red-600 w-6 h-6 p-4"
        }
      >
        {props.value === 0 ? (
          <div></div>
        ) : props.value === -1 ? (
          bombCell
        ) : (
          props.value
        )}
      </div>
    );
  else if (props.isMarked)
    return (
      <div
        onContextMenu={props.onCellClick}
        className=" flex justify-center items-center bg-black border border-red-600 w-6 h-6 p-4"
      >
        {mark}
      </div>
    );
  else
    return (
      <div
        onClick={props.onCellClick}
        onContextMenu={props.onCellClick}
        className=" bg-black border border-red-600 w-6 h-6 p-4"
      ></div>
    );
};

export default Cell;
