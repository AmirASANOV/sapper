import React, { useState } from "react";
import Game from "./components/Game";
import Menu from "./pages/Menu";
import { Link, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className=" flex justify-center mt-5">
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/easy" element={<Game width={5} height={5} bombs={1} />} />
        <Route
          path="/medium"
          element={<Game width={8} height={8} bombs={10} />}
        />
        <Route
          path="/hard"
          element={<Game width={10} height={10} bombs={10} />}
        />
      </Routes>
    </div>
  );
};

export default App;
