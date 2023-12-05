import React from "react";
import Menu from "./pages/Menu";
import { Routes, Route } from "react-router-dom";
import levels from "./levelsConfig";
import GamePage from "./pages/GamePage";

const App: React.FC = () => {
  return (
    <div className=" flex justify-center mt-5">
      <Routes>
        <Route path="/" element={<Menu />} />

        {(Object.keys(levels) as (keyof typeof levels)[]).map((level) => (
          <Route
            path={levels[level].link}
            element={<GamePage level={level} />}
          />
        ))}
      </Routes>
    </div>
  );
};

export default App;
