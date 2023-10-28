import React, { ReactElement, useState } from "react";

interface ICellProps {
  value: number;
  isMarked: boolean;
  isOpened: boolean;
}

let bombCell = "💣";

const Cell: React.FC<ICellProps> = (props) => {
  return (
    <div>
      {props.isOpened ? null : (
        <div
          // onClick={(e: React.MouseEvent<HTMLDivElement>) => setIsVisible(true)}
          className=" absolute bg-black w-6 h-6 p-4"
        ></div>
      )}

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
    </div>
  );
};

export default Cell;
