import React from "react";
import { useState, useEffect } from "react";

const Saper = () => {
  const [matrix, setMatrix] = useState([]);

  function createMatrix(width = 8, height = 8, bombCount = 10) {
    let newMatrix = Array.from({ length: height }, () =>
      Array.from({ length: width }, () => 0)
    );
    setMatrix(newMatrix);
  }

  useEffect(() => {
    createMatrix()
  }, [])

  return (
    <div className="border border-grey-500 w-full max-w-3xl mx-auto mt-9">
      <p className="text-center">Sapper game</p>
      <div className="border border-grey-800 grid grid-cols-8">
        {matrix.map((box, index) => (
          <div key={index} className=" w-16 h-16 border border-grey-800">1</div>
        ))}
      </div>
    </div>
  );
};

export default Saper;
