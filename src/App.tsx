import React from "react";
import Game from "./Game";

const App: React.FC = () => {
  return (
    <div className=" flex justify-center mt-5">
      <Game width={8} height={8} bombs={10} />
    </div>
  );
};

export default App;
